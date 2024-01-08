/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.redhat.exhort.integration.backend.sbom.cyclonedx;

import static com.redhat.exhort.integration.providers.snyk.SnykRequestBuilder.SUPPORTED_PKG_MANAGERS;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.stream.Collectors;

import org.cyclonedx.model.Bom;
import org.cyclonedx.model.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.TokenBuffer;
import com.github.packageurl.MalformedPackageURLException;
import com.github.packageurl.PackageURL;
import com.redhat.exhort.api.PackageRef;
import com.redhat.exhort.config.ObjectMapperProducer;
import com.redhat.exhort.integration.backend.sbom.SbomParser;
import com.redhat.exhort.model.DependencyTree;
import com.redhat.exhort.model.DirectDependency;

import jakarta.ws.rs.ClientErrorException;
import jakarta.ws.rs.core.Response;

public class CycloneDxParser extends SbomParser {

  private static final ObjectMapper mapper = ObjectMapperProducer.newInstance();
  private static final Logger LOGGER = LoggerFactory.getLogger(CycloneDxParser.class);

  @Override
  protected DependencyTree buildTree(InputStream input) {
    try {
      var bom = mapper.readValue(input, Bom.class);
      return buildTree(bom);
    } catch (IOException | IllegalStateException e) {
      LOGGER.error("Unable to parse the CycloneDX SBOM file", e);
      throw new ClientErrorException(
          "Unable to parse received CycloneDX SBOM file: " + e.getMessage(),
          Response.Status.BAD_REQUEST);
    }
  }

  private DependencyTree buildTree(Bom bom) throws IllegalStateException {
    var treeBuilder = DependencyTree.builder();
    Map<String, PackageRef> componentPurls = new HashMap<>();
    if (bom.getComponents() != null) {
      componentPurls.putAll(
          bom.getComponents().stream()
              .filter(c -> c.getBomRef() != null)
              .collect(Collectors.toMap(Component::getBomRef, c -> new PackageRef(c.getPurl()))));
    }

    if (bom.getMetadata() == null) {
      throw new ClientErrorException(
          "Unable to parse CycloneDX SBOM. Missing metadata.", Response.Status.BAD_REQUEST);
    }
    var rootComponent = Optional.ofNullable(bom.getMetadata().getComponent());
    PackageRef rootRef = null;
    if (rootComponent.isPresent()) {
      if (rootComponent.get().getPurl() != null) {
        rootRef = new PackageRef(rootComponent.get().getPurl());
      } else if (componentPurls.containsKey(rootComponent.get().getBomRef())) {
        rootRef = componentPurls.get(rootComponent.get().getBomRef());
      } else {
        throw new IllegalStateException("Cannot retrieve the purl for the root component");
      }
    }
    return treeBuilder.dependencies(buildDependencies(bom, componentPurls, rootRef)).build();
  }

  @Override
  protected List<DependencyTree> buildTrees(InputStream input) {
    try {
      var bom = mapper.readValue(input, Bom.class);

      Set<String> types =
          bom.getComponents().stream()
              .map(
                  c -> {
                    try {
                      return c.getPurl() == null ? null : new PackageURL(c.getPurl()).getType();
                    } catch (MalformedPackageURLException e) {
                      LOGGER.warn("Failed to parse component purl {} in SBOM", c.getPurl());
                      // Ignore this component if its purl is not valid
                      return null;
                    }
                  })
              .filter(SUPPORTED_PKG_MANAGERS::contains)
              .collect(Collectors.toSet());

      TokenBuffer buffer = new TokenBuffer(mapper, false);
      mapper.writeValue(buffer, bom);

      return types.stream()
          .map(
              t -> {
                Bom b;
                try {
                  b = mapper.readValue(buffer.asParser(), Bom.class);
                } catch (IOException e) {
                  LOGGER.warn("Failed to generate SBOM object");
                  return null;
                }

                b.setComponents(
                    bom.getComponents().stream()
                        .filter(
                            c -> {
                              try {
                                return c.getPurl() != null
                                    && t.equals(new PackageURL(c.getPurl()).getType());
                              } catch (MalformedPackageURLException e) {
                                LOGGER.warn(
                                    "Failed to parse component purl {} in SBOM", c.getPurl());
                                // Ignore this component if its purl is not valid
                                return false;
                              }
                            })
                        .collect(Collectors.toList()));

                b.setDependencies(
                    bom.getDependencies().stream()
                        .filter(
                            d -> {
                              try {
                                return d.getRef() != null
                                    && t.equals(new PackageURL(d.getRef()).getType());
                              } catch (MalformedPackageURLException e) {
                                LOGGER.warn(
                                    "Failed to parse dependency purl {} in SBOM", d.getRef());
                                // Ignore this component if its purl is not valid
                                return false;
                              }
                            })
                        .collect(Collectors.toList()));

                return b;
              })
          .filter(Objects::nonNull)
          .map(this::buildTree)
          .toList();
    } catch (IOException | IllegalStateException e) {
      LOGGER.error("Unable to parse the CycloneDX SBOM file", e);
      throw new ClientErrorException(
          "Unable to parse received CycloneDX SBOM file: " + e.getMessage(),
          Response.Status.BAD_REQUEST);
    }
  }

  private Map<PackageRef, DirectDependency> buildDependencies(
      Bom bom, Map<String, PackageRef> componentPurls, PackageRef rootRef) {
    if (bom.getDependencies() == null || bom.getDependencies().isEmpty()) {
      return buildUnknownDependencies(componentPurls);
    }

    Map<PackageRef, List<PackageRef>> dependencies =
        bom.getDependencies().stream()
            .collect(
                Collectors.toMap(
                    d -> {
                      if (componentPurls.get(d.getRef()) == null) {
                        return rootRef;
                      }
                      return componentPurls.get(d.getRef());
                    },
                    d -> {
                      if (d.getDependencies() == null) {
                        return Collections.emptyList();
                      }
                      return d.getDependencies().stream()
                          .map(dep -> componentPurls.get(dep.getRef()))
                          .toList();
                    }));
    List<PackageRef> directDeps;
    if (rootRef != null && dependencies.get(rootRef) != null) {
      directDeps = dependencies.get(rootRef);
    } else {
      directDeps =
          dependencies.keySet().stream()
              .filter(depRef -> dependencies.values().stream().noneMatch(d -> d.contains(depRef)))
              .toList();
    }

    return directDeps.stream()
        .map(directRef -> toDirectDependency(directRef, dependencies))
        .collect(Collectors.toMap(DirectDependency::ref, d -> d));
  }

  // The SBOM generator does not have info about the dependency hierarchy
  private Map<PackageRef, DirectDependency> buildUnknownDependencies(
      Map<String, PackageRef> componentPurls) {
    Map<PackageRef, DirectDependency> deps = new HashMap<>();
    componentPurls
        .values()
        .forEach(
            v -> {
              if (deps.containsKey(v)) {
                throw new IllegalStateException("Duplicate component: " + v.purl());
              }
              deps.put(v, DirectDependency.builder().ref(v).build());
            });
    return deps;
  }

  private DirectDependency toDirectDependency(
      PackageRef directRef, Map<PackageRef, List<PackageRef>> dependencies) {
    var transitiveRefs = new HashSet<PackageRef>();
    findTransitive(directRef, dependencies, transitiveRefs);
    var transitive = new HashSet<>(transitiveRefs.stream().toList());
    return DirectDependency.builder().ref(directRef).transitive(transitive).build();
  }

  private void findTransitive(
      PackageRef ref, Map<PackageRef, List<PackageRef>> dependencies, Set<PackageRef> acc) {
    var deps = dependencies.get(ref);
    if (deps == null || deps.isEmpty()) {
      return;
    }
    deps.stream()
        .filter(d -> !acc.contains(d))
        .forEach(
            d -> {
              acc.add(d);
              findTransitive(d, dependencies, acc);
            });
  }
}
