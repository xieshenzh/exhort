import { AppData } from '@app/api/report';

export const dockerReport: AppData = {
  providerPrivateData: null,
  report: [ {
    "scanned" : {
      "total" : 263,
      "direct" : 263,
      "transitive" : 0
    },
    "providers" : {
      "oss-index" : {
        "status" : {
          "ok" : false,
          "name" : "oss-index",
          "code" : 401,
          "message" : "Unauthenticated"
        }
      },
      "trusted-content" : {
        "status" : {
          "ok" : true,
          "name" : "trusted-content",
          "code" : 200,
          "message" : "OK"
        }
      },
      "osv-nvd" : {
        "status" : {
          "ok" : false,
          "name" : "osv-nvd",
          "code" : 500,
          "message" : "onguard"
        }
      },
      "snyk" : {
        "status" : {
          "ok" : true,
          "name" : "snyk",
          "code" : 200,
          "message" : "OK"
        },
        "sources" : {
          "snyk" : {
            "summary" : {
              "direct" : 4,
              "transitive" : 0,
              "total" : 4,
              "dependencies" : 4,
              "critical" : 0,
              "high" : 0,
              "medium" : 2,
              "low" : 2,
              "remediations" : 0,
              "recommendations" : 16
            },
            "dependencies" : [ {
              "ref" : "pkg:maven/org.yaml/snakeyaml@1.32",
              "issues" : [ {
                "id" : "SNYK-JAVA-ORGYAML-3152153",
                "title" : "Arbitrary Code Execution",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "High",
                  "privilegesRequired" : "High",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "High",
                  "integrityImpact" : "High",
                  "availabilityImpact" : "High",
                  "exploitCodeMaturity" : "Proof of concept code",
                  "cvss" : "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H/E:P"
                },
                "cvssScore" : 6.6,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2022-1471" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "2.0" ]
                }
              } ],
              "recommendation" : "pkg:maven/org.yaml/snakeyaml@1.33.0.redhat-00002?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
              "highestVulnerability" : {
                "id" : "SNYK-JAVA-ORGYAML-3152153",
                "title" : "Arbitrary Code Execution",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "High",
                  "privilegesRequired" : "High",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "High",
                  "integrityImpact" : "High",
                  "availabilityImpact" : "High",
                  "exploitCodeMaturity" : "Proof of concept code",
                  "cvss" : "CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:U/C:H/I:H/A:H/E:P"
                },
                "cvssScore" : 6.6,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2022-1471" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "2.0" ]
                }
              }
            }, {
              "ref" : "pkg:pypi/setuptools@39.2.0",
              "issues" : [ {
                "id" : "SNYK-PYTHON-SETUPTOOLS-3180412",
                "title" : "Regular Expression Denial of Service (ReDoS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "High",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 5.9,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2022-40897" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "65.5.1" ]
                }
              } ],
              "highestVulnerability" : {
                "id" : "SNYK-PYTHON-SETUPTOOLS-3180412",
                "title" : "Regular Expression Denial of Service (ReDoS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "High",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 5.9,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2022-40897" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "65.5.1" ]
                }
              }
            }, {
              "ref" : "pkg:maven/commons-codec/commons-codec@1.11",
              "issues" : [ {
                "id" : "SNYK-PRIVATE-VULNERABILITY",
                "title" : "Sign up for a Snyk account to learn about the vulnerabilities found",
                "source" : "snyk",
                "cvssScore" : 3.7,
                "severity" : "LOW",
                "unique" : true,
                "remediation" : {
                  "fixedIn" : [ "1.13" ]
                }
              } ],
              "recommendation" : "pkg:maven/commons-codec/commons-codec@1.15.0.redhat-00008?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
              "highestVulnerability" : {
                "id" : "SNYK-PRIVATE-VULNERABILITY",
                "title" : "Sign up for a Snyk account to learn about the vulnerabilities found",
                "source" : "snyk",
                "cvssScore" : 3.7,
                "severity" : "LOW",
                "unique" : true,
                "remediation" : {
                  "fixedIn" : [ "1.13" ]
                }
              }
            }, {
              "ref" : "pkg:maven/com.google.guava/guava@31.0.1-jre",
              "issues" : [ {
                "id" : "SNYK-JAVA-COMGOOGLEGUAVA-5710356",
                "title" : "Creation of Temporary File in Directory with Insecure Permissions",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Local",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "Low",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "Low",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N"
                },
                "cvssScore" : 3.3,
                "severity" : "LOW",
                "cves" : [ "CVE-2023-2976" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "32.0.0-android", "32.0.0-jre" ]
                }
              } ],
              "recommendation" : "pkg:maven/com.google.guava/guava@31.1.0.jre-redhat-00004?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
              "highestVulnerability" : {
                "id" : "SNYK-JAVA-COMGOOGLEGUAVA-5710356",
                "title" : "Creation of Temporary File in Directory with Insecure Permissions",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Local",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "Low",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "Low",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N"
                },
                "cvssScore" : 3.3,
                "severity" : "LOW",
                "cves" : [ "CVE-2023-2976" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "32.0.0-android", "32.0.0-jre" ]
                }
              }
            }, {
              "ref" : "pkg:maven/io.prometheus/simpleclient_common@0.6.0",
              "recommendation" : "pkg:maven/io.prometheus/simpleclient_common@0.15.0.redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/com.google.guava/failureaccess@1.0.1",
              "recommendation" : "pkg:maven/com.google.guava/failureaccess@1.0.1.redhat-00004?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/org.apache.commons/commons-lang3@3.12.0",
              "recommendation" : "pkg:maven/org.apache.commons/commons-lang3@3.12.0.redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/jakarta.enterprise/jakarta.enterprise.cdi-api@2.0.2",
              "recommendation" : "pkg:maven/jakarta.enterprise/jakarta.enterprise.cdi-api@2.0.2.redhat-00004?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/jakarta.annotation/jakarta.annotation-api@1.3.5",
              "recommendation" : "pkg:maven/jakarta.annotation/jakarta.annotation-api@1.3.5.redhat-00006?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/org.codehaus.plexus/plexus-utils@3.3.0",
              "recommendation" : "pkg:maven/org.codehaus.plexus/plexus-utils@3.3.0.redhat-00002?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/commons-codec/commons-codec@1.15",
              "recommendation" : "pkg:maven/commons-codec/commons-codec@1.15.0.redhat-00008?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/org.apache.httpcomponents/httpclient@4.5.13",
              "recommendation" : "pkg:maven/org.apache.httpcomponents/httpclient@4.5.13.redhat-00002?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/commons-io/commons-io@2.11.0",
              "recommendation" : "pkg:maven/commons-io/commons-io@2.11.0.redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/org.slf4j/slf4j-api@1.7.32",
              "recommendation" : "pkg:maven/org.slf4j/slf4j-api@1.7.36.redhat-00003?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/org.apache.httpcomponents/httpcore@4.4.13",
              "recommendation" : "pkg:maven/org.apache.httpcomponents/httpcore@4.4.15.redhat-00003?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/org.apache.httpcomponents/httpcore-nio@4.4.13",
              "recommendation" : "pkg:maven/org.apache.httpcomponents/httpcore-nio@4.4.15.redhat-00003?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            }, {
              "ref" : "pkg:maven/io.prometheus/simpleclient@0.6.0",
              "recommendation" : "pkg:maven/io.prometheus/simpleclient@0.15.0.redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar"
            } ]
          }
        }
      }
    },
    "root" : {
      "ref" : "pkg:oci/registry.access.redhat.com/ubi8/openjdk-17%3A1.16"
    }
  }, {
    "scanned" : {
      "total" : 443,
      "direct" : 68,
      "transitive" : 375
    },
    "providers" : {
      "oss-index" : {
        "status" : {
          "ok" : false,
          "name" : "oss-index",
          "code" : 401,
          "message" : "Unauthenticated"
        }
      },
      "trusted-content" : {
        "status" : {
          "ok" : true,
          "name" : "trusted-content",
          "code" : 200,
          "message" : "OK"
        }
      },
      "osv-nvd" : {
        "status" : {
          "ok" : false,
          "name" : "osv-nvd",
          "code" : 500,
          "message" : "onguard: nodename nor servname provided, or not known"
        }
      },
      "snyk" : {
        "status" : {
          "ok" : true,
          "name" : "snyk",
          "code" : 200,
          "message" : "OK"
        },
        "sources" : {
          "snyk" : {
            "summary" : {
              "direct" : 8,
              "transitive" : 0,
              "total" : 8,
              "dependencies" : 6,
              "critical" : 0,
              "high" : 3,
              "medium" : 4,
              "low" : 1,
              "remediations" : 0,
              "recommendations" : 0
            },
            "dependencies" : [ {
              "ref" : "pkg:pypi/werkzeug@2.0.3",
              "issues" : [ {
                "id" : "SNYK-PYTHON-WERKZEUG-3319936",
                "title" : "Denial of Service (DoS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 7.5,
                "severity" : "HIGH",
                "cves" : [ "CVE-2023-25577" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "2.2.3" ]
                }
              }, {
                "id" : "SNYK-PYTHON-WERKZEUG-6035177",
                "title" : "Inefficient Algorithmic Complexity",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Adjacent Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:A/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 6.5,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2023-46136" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "2.3.8", "3.0.1" ]
                }
              }, {
                "id" : "SNYK-PYTHON-WERKZEUG-3319935",
                "title" : "Access Restriction Bypass",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Adjacent Network",
                  "attackComplexity" : "High",
                  "privilegesRequired" : "None",
                  "userInteraction" : "Required",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "Low",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:A/AC:H/PR:N/UI:R/S:U/C:N/I:L/A:N"
                },
                "cvssScore" : 2.6,
                "severity" : "LOW",
                "cves" : [ "CVE-2023-23934" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "2.2.3" ]
                }
              } ],
              "highestVulnerability" : {
                "id" : "SNYK-PYTHON-WERKZEUG-3319936",
                "title" : "Denial of Service (DoS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 7.5,
                "severity" : "HIGH",
                "cves" : [ "CVE-2023-25577" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "2.2.3" ]
                }
              }
            }, {
              "ref" : "pkg:pypi/wheel@0.37.1",
              "issues" : [ {
                "id" : "SNYK-PYTHON-WHEEL-3180413",
                "title" : "Regular Expression Denial of Service (ReDoS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 7.5,
                "severity" : "HIGH",
                "cves" : [ "CVE-2022-40898" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "0.38.0" ]
                }
              } ],
              "highestVulnerability" : {
                "id" : "SNYK-PYTHON-WHEEL-3180413",
                "title" : "Regular Expression Denial of Service (ReDoS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 7.5,
                "severity" : "HIGH",
                "cves" : [ "CVE-2022-40898" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "0.38.0" ]
                }
              }
            }, {
              "ref" : "pkg:pypi/flask@2.0.3",
              "issues" : [ {
                "id" : "SNYK-PYTHON-FLASK-5490129",
                "title" : "Information Exposure",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "High",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N"
                },
                "cvssScore" : 7.5,
                "severity" : "HIGH",
                "cves" : [ "CVE-2023-30861" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "2.2.5", "2.3.2" ]
                }
              } ],
              "highestVulnerability" : {
                "id" : "SNYK-PYTHON-FLASK-5490129",
                "title" : "Information Exposure",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "High",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N"
                },
                "cvssScore" : 7.5,
                "severity" : "HIGH",
                "cves" : [ "CVE-2023-30861" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "2.2.5", "2.3.2" ]
                }
              }
            }, {
              "ref" : "pkg:pypi/setuptools@58.1.0",
              "issues" : [ {
                "id" : "SNYK-PYTHON-SETUPTOOLS-3180412",
                "title" : "Regular Expression Denial of Service (ReDoS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "High",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 5.9,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2022-40897" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "65.5.1" ]
                }
              } ],
              "highestVulnerability" : {
                "id" : "SNYK-PYTHON-SETUPTOOLS-3180412",
                "title" : "Regular Expression Denial of Service (ReDoS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "High",
                  "privilegesRequired" : "None",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "None",
                  "availabilityImpact" : "High",
                  "cvss" : "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H"
                },
                "cvssScore" : 5.9,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2022-40897" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "65.5.1" ]
                }
              }
            }, {
              "ref" : "pkg:pypi/pip@21.2.4",
              "issues" : [ {
                "id" : "SNYK-PYTHON-PIP-6036008",
                "title" : "Arbitrary Command Injection",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Local",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "Low",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "High",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:N"
                },
                "cvssScore" : 5.5,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2023-5752" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "23.3" ]
                }
              } ],
              "highestVulnerability" : {
                "id" : "SNYK-PYTHON-PIP-6036008",
                "title" : "Arbitrary Command Injection",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Local",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "Low",
                  "userInteraction" : "None",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "None",
                  "integrityImpact" : "High",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:N"
                },
                "cvssScore" : 5.5,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2023-5752" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "23.3" ]
                }
              }
            }, {
              "ref" : "pkg:pypi/jinja2@3.0.3",
              "issues" : [ {
                "id" : "SNYK-PYTHON-JINJA2-6150717",
                "title" : "Cross-site Scripting (XSS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "Required",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "Low",
                  "integrityImpact" : "Low",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N"
                },
                "cvssScore" : 5.4,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2024-22195" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "3.1.3" ]
                }
              } ],
              "highestVulnerability" : {
                "id" : "SNYK-PYTHON-JINJA2-6150717",
                "title" : "Cross-site Scripting (XSS)",
                "source" : "snyk",
                "cvss" : {
                  "attackVector" : "Network",
                  "attackComplexity" : "Low",
                  "privilegesRequired" : "None",
                  "userInteraction" : "Required",
                  "scope" : "Unchanged",
                  "confidentialityImpact" : "Low",
                  "integrityImpact" : "Low",
                  "availabilityImpact" : "None",
                  "cvss" : "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N"
                },
                "cvssScore" : 5.4,
                "severity" : "MEDIUM",
                "cves" : [ "CVE-2024-22195" ],
                "unique" : false,
                "remediation" : {
                  "fixedIn" : [ "3.1.3" ]
                }
              }
            }, {
              "ref" : "pkg:generic/python@3.10.2"
            } ]
          }
        }
      }
    },
    "root" : {
      "ref" : "pkg:oci/quay.io/xiezhang7/hello-python"
    }
  } ],
  ossIssueTemplate: 'http://ossindex.sonatype.org/vulnerability/__ISSUE_ID__',
  snykIssueTemplate: 'https://security.snyk.io/vuln/__ISSUE_ID__',
  nvdIssueTemplate: 'https://nvd.nist.gov/vuln/detail/__ISSUE_ID__',
  snykSignup: 'https://app.snyk.io/login',
    cveIssueTemplate: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=__ISSUE_ID__'
};
