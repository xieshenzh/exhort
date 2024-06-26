import {AppData} from '@app/api/report';

export const dockerReport: AppData = {
  providerPrivateData: null,
  report: {
    "pkg:oci/test-repository@sha256:333224a233db31852ac1085c6cd702016ab8aaf54cecde5c4bed5451d636adcf?repository_url=test.io/test-namespace/test-repository&tag=test-tag&os=linux&arch=amd64": {
      "scanned": {
        "total": 10,
        "direct": 3,
        "transitive": 7
      },
      "providers": {
        "oss-index": {
          "status": {
            "ok": true,
            "name": "oss-index",
            "code": 200,
            "message": "OK"
          },
          "sources": {
            "oss-index": {
              "summary": {
                "direct": 0,
                "transitive": 3,
                "total": 3,
                "dependencies": 1,
                "critical": 0,
                "high": 3,
                "medium": 0,
                "low": 0,
                "remediations": 1,
                "recommendations": 2,
                "unscanned": 0
              },
              "dependencies": [
                {
                  "ref": "pkg:oci/test-repository@sha256%3A333224a233db31852ac1085c6cd702016ab8aaf54cecde5c4bed5451d636adcf?arch=amd64&os=linux&repository_url=test.io%2Ftest-namespace%2Ftest-repository&tag=test-tag  ",
                  "transitive": [
                    {
                      "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.1?type=jar",
                      "issues": [
                        {
                          "id": "CVE-2020-36518",
                          "title": "[CVE-2020-36518] CWE-787: Out-of-bounds Write",
                          "source": "oss-index",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "Low",
                            "privilegesRequired": "None",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "High",
                            "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                          },
                          "cvssScore": 7.5,
                          "severity": "HIGH",
                          "cves": [
                            "CVE-2020-36518"
                          ],
                          "unique": false,
                          "remediation": {
                            "trustedContent": {
                              "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.4.2-redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                              "status": "NotAffected",
                              "justification": "VulnerableCodeNotPresent"
                            }
                          }
                        },
                        {
                          "id": "CVE-2022-42003",
                          "title": "[CVE-2022-42003] CWE-502: Deserialization of Untrusted Data",
                          "source": "oss-index",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "Low",
                            "privilegesRequired": "None",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "High",
                            "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                          },
                          "cvssScore": 7.5,
                          "severity": "HIGH",
                          "cves": [
                            "CVE-2022-42003"
                          ],
                          "unique": false
                        },
                        {
                          "id": "CVE-2022-42004",
                          "title": "[CVE-2022-42004] CWE-502: Deserialization of Untrusted Data",
                          "source": "oss-index",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "Low",
                            "privilegesRequired": "None",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "High",
                            "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                          },
                          "cvssScore": 7.5,
                          "severity": "HIGH",
                          "cves": [
                            "CVE-2022-42004"
                          ],
                          "unique": false
                        }
                      ],
                      "highestVulnerability": {
                        "id": "CVE-2020-36518",
                        "title": "[CVE-2020-36518] CWE-787: Out-of-bounds Write",
                        "source": "oss-index",
                        "cvss": {
                          "attackVector": "Network",
                          "attackComplexity": "Low",
                          "privilegesRequired": "None",
                          "userInteraction": "None",
                          "scope": "Unchanged",
                          "confidentialityImpact": "None",
                          "integrityImpact": "None",
                          "availabilityImpact": "High",
                          "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                        },
                        "cvssScore": 7.5,
                        "severity": "HIGH",
                        "cves": [
                          "CVE-2020-36518"
                        ],
                        "unique": false,
                        "remediation": {
                          "trustedContent": {
                            "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.4.2-redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                            "status": "NotAffected",
                            "justification": "VulnerableCodeNotPresent"
                          }
                        }
                      }
                    }
                  ],
                  "recommendation": "pkg:oci/ubi@sha256%3Af5983f7c7878cc9b26a3962be7756e3c810e9831b0b9f9613e6f6b445f884e74?arch=amd64&repository_url=registry.access.redhat.com%2Fubi9%2Fubi&tag=9.3-1552",
                  "highestVulnerability": {
                    "id": "CVE-2020-36518",
                    "title": "[CVE-2020-36518] CWE-787: Out-of-bounds Write",
                    "source": "oss-index",
                    "cvss": {
                      "attackVector": "Network",
                      "attackComplexity": "Low",
                      "privilegesRequired": "None",
                      "userInteraction": "None",
                      "scope": "Unchanged",
                      "confidentialityImpact": "None",
                      "integrityImpact": "None",
                      "availabilityImpact": "High",
                      "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                    },
                    "cvssScore": 7.5,
                    "severity": "HIGH",
                    "cves": [
                      "CVE-2020-36518"
                    ],
                    "unique": false,
                    "remediation": {
                      "trustedContent": {
                        "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.4.2-redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                        "status": "NotAffected",
                        "justification": "VulnerableCodeNotPresent"
                      }
                    }
                  }
                },
                {
                  "ref": "pkg:maven/io.quarkus/quarkus-jdbc-postgresql@2.13.5.Final?type=jar",
                  "recommendation": "pkg:oci/ubi-minimal@sha256:06d06f15f7b641a78f2512c8817cbecaa1bf549488e273f5ac27ff1654ed33f0?repository_url=registry.access.redhat.com/ubi9/ubi-minimal&tag=9.3-1552&arch=amd64"
                }
              ]
            }
          }
        },
        "trusted-content": {
          "status": {
            "ok": true,
            "name": "trusted-content",
            "code": 200,
            "message": "OK"
          }
        },
        "osv-nvd": {
          "status": {
            "ok": true,
            "name": "osv-nvd",
            "code": 200,
            "message": "OK"
          },
          "sources": {
            "osv-nvd": {
              "summary": {
                "direct": 0,
                "transitive": 5,
                "total": 5,
                "dependencies": 3,
                "critical": 0,
                "high": 3,
                "medium": 2,
                "low": 0,
                "remediations": 2,
                "recommendations": 2,
                "unscanned": 0
              },
              "dependencies": [
                {
                  "ref": "pkg:maven/io.quarkus/quarkus-hibernate-orm@2.13.5.Final?type=jar",
                  "transitive": [
                    {
                      "ref": "pkg:maven/io.quarkus/quarkus-core@2.13.5.Final?type=jar",
                      "issues": [
                        {
                          "id": "CVE-2023-2974",
                          "title": "A vulnerability was found in quarkus-core. This vulnerability occurs because the TLS protocol configured with quarkus.http.ssl.protocols is not enforced, and the client can force the selection of the weaker supported TLS protocol.",
                          "source": "osv-nvd",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "Low",
                            "privilegesRequired": "Low",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "High",
                            "integrityImpact": "High",
                            "availabilityImpact": "None",
                            "cvss": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N"
                          },
                          "cvssScore": 8.1,
                          "severity": "HIGH",
                          "cves": [
                            "CVE-2023-2974"
                          ],
                          "unique": false,
                          "remediation": {
                            "fixedIn": [
                              "2.16.8.Final"
                            ],
                            "trustedContent": {
                              "ref": "pkg:maven/io.quarkus/quarkus-core@2.13.8.Final-redhat-00006?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                              "status": "NotAffected",
                              "justification": "VulnerableCodeNotPresent"
                            }
                          }
                        }
                      ],
                      "highestVulnerability": {
                        "id": "CVE-2023-2974",
                        "title": "A vulnerability was found in quarkus-core. This vulnerability occurs because the TLS protocol configured with quarkus.http.ssl.protocols is not enforced, and the client can force the selection of the weaker supported TLS protocol.",
                        "source": "osv-nvd",
                        "cvss": {
                          "attackVector": "Network",
                          "attackComplexity": "Low",
                          "privilegesRequired": "Low",
                          "userInteraction": "None",
                          "scope": "Unchanged",
                          "confidentialityImpact": "High",
                          "integrityImpact": "High",
                          "availabilityImpact": "None",
                          "cvss": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N"
                        },
                        "cvssScore": 8.1,
                        "severity": "HIGH",
                        "cves": [
                          "CVE-2023-2974"
                        ],
                        "unique": false,
                        "remediation": {
                          "fixedIn": [
                            "2.16.8.Final"
                          ],
                          "trustedContent": {
                            "ref": "pkg:maven/io.quarkus/quarkus-core@2.13.8.Final-redhat-00006?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                            "status": "NotAffected",
                            "justification": "VulnerableCodeNotPresent"
                          }
                        }
                      }
                    },
                    {
                      "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.1?type=jar",
                      "issues": [
                        {
                          "id": "CVE-2022-42003",
                          "title": "In FasterXML jackson-databind 2.4.0-rc1 until 2.12.7.1 and in 2.13.x before 2.13.4.2 resource exhaustion can occur because of a lack of a check in primitive value deserializers to avoid deep wrapper array nesting, when the UNWRAP_SINGLE_VALUE_ARRAYS feature is enabled. This was patched in 2.12.7.1, 2.13.4.2, and 2.14.0.",
                          "source": "osv-nvd",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "Low",
                            "privilegesRequired": "None",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "High",
                            "cvss": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                          },
                          "cvssScore": 7.5,
                          "severity": "HIGH",
                          "cves": [
                            "CVE-2022-42003"
                          ],
                          "unique": false,
                          "remediation": {
                            "fixedIn": [
                              "2.12.7.1",
                              "2.13.4.2"
                            ]
                          }
                        },
                        {
                          "id": "CVE-2022-42004",
                          "title": "Uncontrolled Resource Consumption in FasterXML jackson-databind",
                          "source": "osv-nvd",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "Low",
                            "privilegesRequired": "None",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "High",
                            "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                          },
                          "cvssScore": 7.5,
                          "severity": "HIGH",
                          "cves": [
                            "CVE-2022-42004"
                          ],
                          "unique": false,
                          "remediation": {
                            "fixedIn": [
                              "2.12.7.1",
                              "2.13.4"
                            ]
                          }
                        },
                        {
                          "id": "CVE-2020-36518",
                          "title": "Deeply nested json in jackson-databind",
                          "source": "osv-nvd",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "Low",
                            "privilegesRequired": "None",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "Low",
                            "cvss": "AV:N/AC:L/Au:N/C:N/I:N/A:P"
                          },
                          "cvssScore": 5.0,
                          "severity": "MEDIUM",
                          "cves": [
                            "CVE-2020-36518"
                          ],
                          "unique": false,
                          "remediation": {
                            "fixedIn": [
                              "2.13.2.1",
                              "2.12.6.1"
                            ],
                            "trustedContent": {
                              "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.4.2-redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                              "status": "NotAffected",
                              "justification": "VulnerableCodeNotPresent"
                            }
                          }
                        }
                      ],
                      "highestVulnerability": {
                        "id": "CVE-2022-42003",
                        "title": "In FasterXML jackson-databind 2.4.0-rc1 until 2.12.7.1 and in 2.13.x before 2.13.4.2 resource exhaustion can occur because of a lack of a check in primitive value deserializers to avoid deep wrapper array nesting, when the UNWRAP_SINGLE_VALUE_ARRAYS feature is enabled. This was patched in 2.12.7.1, 2.13.4.2, and 2.14.0.",
                        "source": "osv-nvd",
                        "cvss": {
                          "attackVector": "Network",
                          "attackComplexity": "Low",
                          "privilegesRequired": "None",
                          "userInteraction": "None",
                          "scope": "Unchanged",
                          "confidentialityImpact": "None",
                          "integrityImpact": "None",
                          "availabilityImpact": "High",
                          "cvss": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                        },
                        "cvssScore": 7.5,
                        "severity": "HIGH",
                        "cves": [
                          "CVE-2022-42003"
                        ],
                        "unique": false,
                        "remediation": {
                          "fixedIn": [
                            "2.12.7.1",
                            "2.13.4.2"
                          ]
                        }
                      }
                    }
                  ],
                  "recommendation": "pkg:maven/io.quarkus/quarkus-hibernate-orm@2.13.8.Final-redhat-00006?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                  "highestVulnerability": {
                    "id": "CVE-2023-2974",
                    "title": "A vulnerability was found in quarkus-core. This vulnerability occurs because the TLS protocol configured with quarkus.http.ssl.protocols is not enforced, and the client can force the selection of the weaker supported TLS protocol.",
                    "source": "osv-nvd",
                    "cvss": {
                      "attackVector": "Network",
                      "attackComplexity": "Low",
                      "privilegesRequired": "Low",
                      "userInteraction": "None",
                      "scope": "Unchanged",
                      "confidentialityImpact": "High",
                      "integrityImpact": "High",
                      "availabilityImpact": "None",
                      "cvss": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N"
                    },
                    "cvssScore": 8.1,
                    "severity": "HIGH",
                    "cves": [
                      "CVE-2023-2974"
                    ],
                    "unique": false,
                    "remediation": {
                      "fixedIn": [
                        "2.16.8.Final"
                      ],
                      "trustedContent": {
                        "ref": "pkg:maven/io.quarkus/quarkus-core@2.13.8.Final-redhat-00006?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                        "status": "NotAffected",
                        "justification": "VulnerableCodeNotPresent"
                      }
                    }
                  }
                },
                {
                  "ref": "pkg:maven/io.quarkus/quarkus-jdbc-postgresql@2.13.5.Final?type=jar",
                  "transitive": [
                    {
                      "ref": "pkg:maven/org.postgresql/postgresql@42.5.0?type=jar",
                      "issues": [
                        {
                          "id": "CVE-2022-41946",
                          "title": "TemporaryFolder on unix-like systems does not limit access to created files",
                          "source": "osv-nvd",
                          "cvss": {
                            "attackVector": "Local",
                            "attackComplexity": "Low",
                            "privilegesRequired": "Low",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "High",
                            "integrityImpact": "None",
                            "availabilityImpact": "None",
                            "cvss": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N"
                          },
                          "cvssScore": 5.5,
                          "severity": "MEDIUM",
                          "cves": [
                            "CVE-2022-41946"
                          ],
                          "unique": false,
                          "remediation": {
                            "fixedIn": [
                              "42.2.27",
                              "42.3.8",
                              "42.4.3",
                              "42.5.1"
                            ]
                          }
                        }
                      ],
                      "highestVulnerability": {
                        "id": "CVE-2022-41946",
                        "title": "TemporaryFolder on unix-like systems does not limit access to created files",
                        "source": "osv-nvd",
                        "cvss": {
                          "attackVector": "Local",
                          "attackComplexity": "Low",
                          "privilegesRequired": "Low",
                          "userInteraction": "None",
                          "scope": "Unchanged",
                          "confidentialityImpact": "High",
                          "integrityImpact": "None",
                          "availabilityImpact": "None",
                          "cvss": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N"
                        },
                        "cvssScore": 5.5,
                        "severity": "MEDIUM",
                        "cves": [
                          "CVE-2022-41946"
                        ],
                        "unique": false,
                        "remediation": {
                          "fixedIn": [
                            "42.2.27",
                            "42.3.8",
                            "42.4.3",
                            "42.5.1"
                          ]
                        }
                      }
                    }
                  ],
                  "recommendation": "pkg:maven/io.quarkus/quarkus-jdbc-postgresql@2.13.8.Final-redhat-00006?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                  "highestVulnerability": {
                    "id": "CVE-2022-41946",
                    "title": "TemporaryFolder on unix-like systems does not limit access to created files",
                    "source": "osv-nvd",
                    "cvss": {
                      "attackVector": "Local",
                      "attackComplexity": "Low",
                      "privilegesRequired": "Low",
                      "userInteraction": "None",
                      "scope": "Unchanged",
                      "confidentialityImpact": "High",
                      "integrityImpact": "None",
                      "availabilityImpact": "None",
                      "cvss": "CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N"
                    },
                    "cvssScore": 5.5,
                    "severity": "MEDIUM",
                    "cves": [
                      "CVE-2022-41946"
                    ],
                    "unique": false,
                    "remediation": {
                      "fixedIn": [
                        "42.2.27",
                        "42.3.8",
                        "42.4.3",
                        "42.5.1"
                      ]
                    }
                  }
                }
              ]
            }
          }
        },
        "snyk": {
          "status": {
            "ok": true,
            "name": "snyk",
            "code": 200,
            "message": "OK"
          },
          "sources": {
            "snyk": {
              "summary": {
                "direct": 0,
                "transitive": 4,
                "total": 4,
                "dependencies": 2,
                "critical": 0,
                "high": 1,
                "medium": 3,
                "low": 0,
                "remediations": 1,
                "recommendations": 2,
                "unscanned": 0
              },
              "dependencies": [
                {
                  "ref": "pkg:maven/io.quarkus/quarkus-hibernate-orm@2.13.5.Final?type=jar",
                  "transitive": [
                    {
                      "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.1?type=jar",
                      "issues": [
                        {
                          "id": "SNYK-JAVA-COMFASTERXMLJACKSONCORE-2421244",
                          "title": "Denial of Service (DoS)",
                          "source": "snyk",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "Low",
                            "privilegesRequired": "None",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "High",
                            "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                          },
                          "cvssScore": 7.5,
                          "severity": "HIGH",
                          "cves": [
                            "CVE-2020-36518"
                          ],
                          "unique": false,
                          "remediation": {
                            "fixedIn": [
                              "2.12.6.1",
                              "2.13.2.1",
                              "2.14.0"
                            ],
                            "trustedContent": {
                              "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.4.2-redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                              "status": "NotAffected",
                              "justification": "VulnerableCodeNotPresent"
                            }
                          }
                        },
                        {
                          "id": "SNYK-JAVA-COMFASTERXMLJACKSONCORE-3038424",
                          "title": "Denial of Service (DoS)",
                          "source": "snyk",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "High",
                            "privilegesRequired": "None",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "High",
                            "exploitCodeMaturity": "Proof of concept code",
                            "cvss": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H/E:P"
                          },
                          "cvssScore": 5.9,
                          "severity": "MEDIUM",
                          "unique": true,
                          "remediation": {
                            "fixedIn": [
                              "2.13.4"
                            ]
                          }
                        },
                        {
                          "id": "SNYK-JAVA-COMFASTERXMLJACKSONCORE-3038426",
                          "title": "Denial of Service (DoS)",
                          "source": "snyk",
                          "cvss": {
                            "attackVector": "Network",
                            "attackComplexity": "High",
                            "privilegesRequired": "None",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "None",
                            "integrityImpact": "None",
                            "availabilityImpact": "High",
                            "exploitCodeMaturity": "Proof of concept code",
                            "cvss": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H/E:P"
                          },
                          "cvssScore": 5.9,
                          "severity": "MEDIUM",
                          "cves": [
                            "CVE-2022-42003"
                          ],
                          "unique": false,
                          "remediation": {
                            "fixedIn": [
                              "2.12.7.1",
                              "2.13.4.2"
                            ]
                          }
                        }
                      ],
                      "highestVulnerability": {
                        "id": "SNYK-JAVA-COMFASTERXMLJACKSONCORE-2421244",
                        "title": "Denial of Service (DoS)",
                        "source": "snyk",
                        "cvss": {
                          "attackVector": "Network",
                          "attackComplexity": "Low",
                          "privilegesRequired": "None",
                          "userInteraction": "None",
                          "scope": "Unchanged",
                          "confidentialityImpact": "None",
                          "integrityImpact": "None",
                          "availabilityImpact": "High",
                          "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                        },
                        "cvssScore": 7.5,
                        "severity": "HIGH",
                        "cves": [
                          "CVE-2020-36518"
                        ],
                        "unique": false,
                        "remediation": {
                          "fixedIn": [
                            "2.12.6.1",
                            "2.13.2.1",
                            "2.14.0"
                          ],
                          "trustedContent": {
                            "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.4.2-redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                            "status": "NotAffected",
                            "justification": "VulnerableCodeNotPresent"
                          }
                        }
                      }
                    }
                  ],
                  "recommendation": "pkg:maven/io.quarkus/quarkus-hibernate-orm@2.13.8.Final-redhat-00006?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                  "highestVulnerability": {
                    "id": "SNYK-JAVA-COMFASTERXMLJACKSONCORE-2421244",
                    "title": "Denial of Service (DoS)",
                    "source": "snyk",
                    "cvss": {
                      "attackVector": "Network",
                      "attackComplexity": "Low",
                      "privilegesRequired": "None",
                      "userInteraction": "None",
                      "scope": "Unchanged",
                      "confidentialityImpact": "None",
                      "integrityImpact": "None",
                      "availabilityImpact": "High",
                      "cvss": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                    },
                    "cvssScore": 7.5,
                    "severity": "HIGH",
                    "cves": [
                      "CVE-2020-36518"
                    ],
                    "unique": false,
                    "remediation": {
                      "fixedIn": [
                        "2.12.6.1",
                        "2.13.2.1",
                        "2.14.0"
                      ],
                      "trustedContent": {
                        "ref": "pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.13.4.2-redhat-00001?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                        "status": "NotAffected",
                        "justification": "VulnerableCodeNotPresent"
                      }
                    }
                  }
                },
                {
                  "ref": "pkg:maven/io.quarkus/quarkus-jdbc-postgresql@2.13.5.Final?type=jar",
                  "transitive": [
                    {
                      "ref": "pkg:maven/org.postgresql/postgresql@42.5.0?type=jar",
                      "issues": [
                        {
                          "id": "SNYK-JAVA-ORGPOSTGRESQL-3146847",
                          "title": "Information Exposure",
                          "source": "snyk",
                          "cvss": {
                            "attackVector": "Local",
                            "attackComplexity": "High",
                            "privilegesRequired": "Low",
                            "userInteraction": "None",
                            "scope": "Unchanged",
                            "confidentialityImpact": "High",
                            "integrityImpact": "None",
                            "availabilityImpact": "None",
                            "cvss": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N"
                          },
                          "cvssScore": 4.7,
                          "severity": "MEDIUM",
                          "cves": [
                            "CVE-2022-41946"
                          ],
                          "unique": false,
                          "remediation": {
                            "fixedIn": [
                              "42.2.27",
                              "42.3.8",
                              "42.4.3",
                              "42.5.1"
                            ]
                          }
                        }
                      ],
                      "highestVulnerability": {
                        "id": "SNYK-JAVA-ORGPOSTGRESQL-3146847",
                        "title": "Information Exposure",
                        "source": "snyk",
                        "cvss": {
                          "attackVector": "Local",
                          "attackComplexity": "High",
                          "privilegesRequired": "Low",
                          "userInteraction": "None",
                          "scope": "Unchanged",
                          "confidentialityImpact": "High",
                          "integrityImpact": "None",
                          "availabilityImpact": "None",
                          "cvss": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N"
                        },
                        "cvssScore": 4.7,
                        "severity": "MEDIUM",
                        "cves": [
                          "CVE-2022-41946"
                        ],
                        "unique": false,
                        "remediation": {
                          "fixedIn": [
                            "42.2.27",
                            "42.3.8",
                            "42.4.3",
                            "42.5.1"
                          ]
                        }
                      }
                    }
                  ],
                  "recommendation": "pkg:maven/io.quarkus/quarkus-jdbc-postgresql@2.13.8.Final-redhat-00006?repository_url=https%3A%2F%2Fmaven.repository.redhat.com%2Fga%2F&type=jar",
                  "highestVulnerability": {
                    "id": "SNYK-JAVA-ORGPOSTGRESQL-3146847",
                    "title": "Information Exposure",
                    "source": "snyk",
                    "cvss": {
                      "attackVector": "Local",
                      "attackComplexity": "High",
                      "privilegesRequired": "Low",
                      "userInteraction": "None",
                      "scope": "Unchanged",
                      "confidentialityImpact": "High",
                      "integrityImpact": "None",
                      "availabilityImpact": "None",
                      "cvss": "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N"
                    },
                    "cvssScore": 4.7,
                    "severity": "MEDIUM",
                    "cves": [
                      "CVE-2022-41946"
                    ],
                    "unique": false,
                    "remediation": {
                      "fixedIn": [
                        "42.2.27",
                        "42.3.8",
                        "42.4.3",
                        "42.5.1"
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    },
    "pkg:oci/default-app@sha256:333224a233db31852ac1085c6cd702016ab8aaf54cecde5c4bed5451d636adcf?repository_url=quay.io/default-app&tag=0.0.1": {
      "scanned": {
        "total": 2,
        "direct": 2,
        "transitive": 0
      },
      "providers": {
        "oss-index": {
          "status": {
            "ok": false,
            "name": "oss-index",
            "code": 401,
            "message": "Unauthorized: Verify the provided credentials are valid."
          }
        },
        "trusted-content": {
          "status": {
            "ok": true,
            "name": "trusted-content",
            "code": 200,
            "message": "OK"
          }
        },
        "osv-nvd": {
          "status": {
            "ok": true,
            "name": "osv-nvd",
            "code": 200,
            "message": "OK"
          },
          "sources": {
            "osv-nvd": {
              "summary": {
                "direct": 0,
                "transitive": 0,
                "total": 0,
                "dependencies": 0,
                "critical": 0,
                "high": 0,
                "medium": 0,
                "low": 0,
                "remediations": 0,
                "recommendations": 1,
                "unscanned": 0
              },
              "dependencies": [
                {
                  "ref": "pkg:oci/default-app@sha256%3A333224a233db31852ac1085c6cd702016ab8aaf54cecde5c4bed5451d636adcf?repository_url=quay.io%2Fdefault-app&tag=0.0.1",
                  "recommendation": "pkg:oci/ubi-minimal@sha256:06d06f15f7b641a78f2512c8817cbecaa1bf549488e273f5ac27ff1654ed33f0?repository_url=registry.access.redhat.com/ubi9/ubi-minimal&tag=9.3-1552&arch=amd64"
                }
              ]
            }
          }
        },
        "snyk": {
          "status": {
            "ok": true,
            "name": "snyk",
            "code": 200,
            "message": "OK"
          },
          "sources": {
            "snyk": {
              "summary": {
                "direct": 0,
                "transitive": 0,
                "total": 0,
                "dependencies": 0,
                "critical": 0,
                "high": 0,
                "medium": 0,
                "low": 0,
                "remediations": 0,
                "recommendations": 1,
                "unscanned": 1
              },
              "dependencies": [
                {
                  "ref": "pkg:oci/quay.io/default-app@0.0.1",
                  "recommendation": "pkg:oci/quay.io/test-app@0.0.2"
                }
              ],
              "unscanned": [
                {
                  "ref": "pkg:oci/quay.io/default-app@0.0.1",
                  "reason": "unsupported-pkg-type"
                }
              ]
            }
          }
        }
      }
    }
  },
  ossIssueTemplate: 'http://ossindex.sonatype.org/vulnerability/__ISSUE_ID__',
  snykIssueTemplate: 'https://security.snyk.io/vuln/__ISSUE_ID__',
  nvdIssueTemplate: 'https://nvd.nist.gov/vuln/detail/__ISSUE_ID__',
  snykSignup: 'https://app.snyk.io/login',
  cveIssueTemplate: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=__ISSUE_ID__',
  imageMapping: "[\n" +
    "  {\n" +
    "    \"purl\": \"pkg:oci/ubi@sha256:f5983f7c7878cc9b26a3962be7756e3c810e9831b0b9f9613e6f6b445f884e74?repository_url=registry.access.redhat.com/ubi9/ubi&tag=9.3-1552&arch=amd64\",\n" +
    "    \"catalogUrl\": \"https://catalog.redhat.com/software/containers/ubi9/ubi/615bcf606feffc5384e8452e?architecture=amd64&image=65a82982a10f3e68777870b5\"\n" +
    "  },\n" +
    "  {\n" +
    "    \"purl\": \"pkg:oci/ubi-minimal@sha256:06d06f15f7b641a78f2512c8817cbecaa1bf549488e273f5ac27ff1654ed33f0?repository_url=registry.access.redhat.com/ubi9/ubi-minimal&tag=9.3-1552&arch=amd64\",\n" +
    "    \"catalogUrl\": \"https://catalog.redhat.com/software/containers/ubi9/ubi-minimal/615bd9b4075b022acc111bf5?architecture=amd64&image=65a828e3cda4984705d45d26\"\n" +
    "  }\n" +
    "]"
};
