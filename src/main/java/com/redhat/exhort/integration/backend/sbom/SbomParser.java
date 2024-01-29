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

package com.redhat.exhort.integration.backend.sbom;

import java.io.InputStream;
import java.util.*;

import com.redhat.exhort.model.DependencyTree;

public abstract class SbomParser {

  public DependencyTree parse(InputStream input) {
    return buildTree(input);
  }

  protected abstract DependencyTree buildTree(InputStream input);

  public List<DependencyTree> parseTrees(Map<?, ?> map) {
    return buildTrees(map);
  }

  protected abstract List<DependencyTree> buildTrees(Map<?, ?> map);
}
