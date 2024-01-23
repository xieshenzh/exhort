/*
 * Copyright 2024 Red Hat, Inc. and/or its affiliates
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

package com.redhat.exhort.integration.api;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.StringJoiner;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.redhat.exhort.api.PackageRef;
import com.redhat.exhort.api.v4.ProviderReport;
import com.redhat.exhort.api.v4.Scanned;

/** AnalysisReport */
@JsonPropertyOrder({
  AnalysisReport.JSON_PROPERTY_SCANNED,
  AnalysisReport.JSON_PROPERTY_PROVIDERS,
  AnalysisReport.JSON_PROPERTY_PACKAGE_REF
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AnalysisReport implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SCANNED = "scanned";
  private Scanned scanned;

  public static final String JSON_PROPERTY_PROVIDERS = "providers";
  private Map<String, ProviderReport> providers = new HashMap<>();

  public static final String JSON_PROPERTY_PACKAGE_REF = "packageRef";
  private PackageRef packageRef;

  public AnalysisReport() {}

  public AnalysisReport scanned(Scanned scanned) {
    this.scanned = scanned;
    return this;
  }

  /**
   * Get scanned
   *
   * @return scanned
   */
  @jakarta.annotation.Nullable @JsonProperty(JSON_PROPERTY_SCANNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Scanned getScanned() {
    return scanned;
  }

  @JsonProperty(JSON_PROPERTY_SCANNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setScanned(Scanned scanned) {
    this.scanned = scanned;
  }

  public AnalysisReport providers(Map<String, ProviderReport> providers) {
    this.providers = providers;
    return this;
  }

  public AnalysisReport putProvidersItem(String key, ProviderReport providersItem) {
    if (this.providers == null) {
      this.providers = new HashMap<>();
    }
    this.providers.put(key, providersItem);
    return this;
  }

  /**
   * Get providers
   *
   * @return providers
   */
  @jakarta.annotation.Nullable @JsonProperty(JSON_PROPERTY_PROVIDERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Map<String, ProviderReport> getProviders() {
    return providers;
  }

  @JsonProperty(JSON_PROPERTY_PROVIDERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProviders(Map<String, ProviderReport> providers) {
    this.providers = providers;
  }

  public AnalysisReport packageRef(PackageRef packageRef) {
    this.packageRef = packageRef;
    return this;
  }

  /**
   * Get packageRef
   *
   * @return packageRef
   */
  @jakarta.annotation.Nullable @JsonProperty(JSON_PROPERTY_PACKAGE_REF)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public PackageRef getPackageRef() {
    return packageRef;
  }

  @JsonProperty(JSON_PROPERTY_PACKAGE_REF)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPackageRef(PackageRef packageRef) {
    this.packageRef = packageRef;
  }

  /** Return true if this AnalysisReport object is equal to o. */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AnalysisReport analysisReport = (AnalysisReport) o;
    return Objects.equals(this.scanned, analysisReport.scanned)
        && Objects.equals(this.providers, analysisReport.providers)
        && Objects.equals(this.packageRef, analysisReport.packageRef);
  }

  @Override
  public int hashCode() {
    return Objects.hash(scanned, providers, packageRef);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AnalysisReport {\n");
    sb.append("    scanned: ").append(toIndentedString(scanned)).append("\n");
    sb.append("    providers: ").append(toIndentedString(providers)).append("\n");
    sb.append("    package: ").append(toIndentedString(packageRef)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

  /**
   * Convert the instance into URL query string.
   *
   * @return URL query string
   */
  public String toUrlQueryString() {
    return toUrlQueryString(null);
  }

  /**
   * Convert the instance into URL query string.
   *
   * @param prefix prefix of the query string
   * @return URL query string
   */
  public String toUrlQueryString(String prefix) {
    String suffix = "";
    String containerSuffix = "";
    String containerPrefix = "";
    if (prefix == null) {
      // style=form, explode=true, e.g. /pet?name=cat&type=manx
      prefix = "";
    } else {
      // deepObject style e.g. /pet?id[name]=cat&id[type]=manx
      prefix = prefix + "[";
      suffix = "]";
      containerSuffix = "]";
      containerPrefix = "[";
    }

    StringJoiner joiner = new StringJoiner("&");

    // add `scanned` to the URL query string
    if (getScanned() != null) {
      joiner.add(getScanned().toUrlQueryString(prefix + "scanned" + suffix));
    }

    // add `providers` to the URL query string
    if (getProviders() != null) {
      for (String _key : getProviders().keySet()) {
        if (getProviders().get(_key) != null) {
          joiner.add(
              getProviders()
                  .get(_key)
                  .toUrlQueryString(
                      String.format(
                          "%sproviders%s%s",
                          prefix,
                          suffix,
                          "".equals(suffix)
                              ? ""
                              : String.format("%s%d%s", containerPrefix, _key, containerSuffix))));
        }
      }
    }

    // add `packageRef` to the URL query string
    if (getPackageRef() != null) {
      joiner.add(getPackageRef().toUrlQueryString(prefix + "package" + suffix));
    }

    return joiner.toString();
  }
}
