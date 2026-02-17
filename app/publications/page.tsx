"use client"

import Link from "next/link"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ExternalLink, BookOpen, Mail, FileText, ChevronDown } from "lucide-react"

export default function PublicationsPage() {
  const [activeInstitutional, setActiveInstitutional] = useState<"feminist-africa" | "cjas">("cjas")
  const [isInstitutionalOpen, setIsInstitutionalOpen] = useState(true)

  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Peer-reviewed journals and institutional publications advancing African scholarship"
      />

      {/* Publications with Sidebar */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {/* Institutional Section with Dropdown */}
                <div>
                  <button
                    onClick={() => setIsInstitutionalOpen(!isInstitutionalOpen)}
                    className="w-full flex items-center justify-between rounded-lg px-4 py-3 font-semibold text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <span>Institutional</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isInstitutionalOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Institutional Sub-items */}
                  {isInstitutionalOpen && (
                    <div className="space-y-1 mt-1 pl-4">
                      <button
                        onClick={() => setActiveInstitutional("feminist-africa")}
                        className={`w-full text-left rounded-md px-4 py-2 text-sm transition-colors ${
                          activeInstitutional === "feminist-africa"
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                        }`}
                      >
                        Feminist Africa
                      </button>
                      <button
                        onClick={() => setActiveInstitutional("cjas")}
                        className={`w-full text-left rounded-md px-4 py-2 text-sm transition-colors ${
                          activeInstitutional === "cjas"
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                        }`}
                      >
                        Contemporary Journal of African Studies
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-secondary">
                Institutional Publications
              </p>

              {/* Feminist Africa Content */}
              {activeInstitutional === "feminist-africa" && (
                <div className="rounded-lg border border-border bg-card p-12">
                  <div className="flex items-start gap-6">
                    <BookOpen className="h-12 w-12 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="mb-4 font-serif text-3xl font-bold text-foreground">
                        Feminist Africa
                      </h3>
                      <p className="mb-4 text-base text-muted-foreground">
                        An interdisciplinary journal dedicated to feminist scholarship and analysis on Africa, publishing cutting-edge research on African feminist theory, activism, and practice.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">Focus Areas</p>
                          <p className="text-sm text-muted-foreground">
                            Gender studies, feminist theory, women's activism, social transformation, and intersectional African perspectives
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://feministafrica.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit Journal Website
                      </a>
                      <p className="mt-4 text-xs text-muted-foreground">
                        https://feministafrica.net/
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CJAS Content */}
              {activeInstitutional === "cjas" && (
                <div className="space-y-12">
                  {/* CJAS Overview */}
                  <div className="rounded-lg border border-border bg-card p-12">
                    <div className="flex items-start gap-6">
                      <BookOpen className="h-12 w-12 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="mb-4 font-serif text-3xl font-bold text-foreground">
                          Contemporary Journal of African Studies
                        </h3>
                        <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                          The Contemporary Journal of African Studies (CJAS) began its life as the Research Review in 1969, and was re-branded as the CJAS in 2012. CJAS is a peer-reviewed scholarly journal published twice a year. Beginning with the 2019 issues, the CJAS is available only in electronic format available on journals.ug.edu.gh and ajol.info/cjas. However, print on demand copies can be made available.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mission and Schedule */}
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-lg border border-border bg-card p-8">
                      <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Mission
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        The CJAS is a multidisciplinary journal that publishes original scholarly work on Global Africa, including work that engages ongoing topical conversations. We are committed to promoting knowledge from an African-centred perspective. As part of our commitment to encourage African knowledge production, the journal is open, on a case by case basis, to publishing Special Issues such as the outcome of conferences and symposia whose foci are in furtherance of our stated mission.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-8">
                      <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                        <FileText className="h-5 w-5 text-primary" />
                        Publishing Schedule
                      </h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          Published twice a year
                        </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Issues in April/May and October/November
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Open access format available since 2019
                    </li>
                  </ul>
                </div>
              </div>

              {/* Submissions */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h4 className="mb-6 text-lg font-semibold text-foreground">
                  Submission Guidelines
                </h4>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h5 className="mb-4 text-sm font-semibold text-foreground">
                      Types of Submissions Welcome
                    </h5>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Scholarly articles presenting findings of new research
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Papers that discuss and re-evaluate earlier research
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Short reports on research in progress
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Brief research notes
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Book reviews and review essays
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="mb-4 text-sm font-semibold text-foreground">
                      Submission Requirements
                    </h5>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Must meet scholarship standards
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Must not have been previously published
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Evaluated by at least two external reviewers
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        No submission or publication costs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How to Submit */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h4 className="mb-4 text-lg font-semibold text-foreground">
                  How to Submit
                </h4>
                <p className="mb-6 text-sm text-muted-foreground">
                  Submit articles electronically via our submission portal:
                </p>
                <a
                  href="https://journals.ug.edu.gh/index.php/cjas/index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Go to Submission Portal
                </a>
              </div>

              {/* Copyright & Access */}
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-8">
                  <h4 className="mb-4 text-lg font-semibold text-foreground">
                    Copyright & Access
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    CJAS complies with Creative Commons Attribution BY-NC-ND licence. This copyright license lets others copy and distribute the material in any medium or format in unadapted form only, for noncommercial purposes, and only as long as attribution is given to the creator.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    CJAS issues and individual articles from 2019 are all open access and can be freely accessed at the journal's official website, AJOL, and Sabinet.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-8">
                  <h4 className="mb-4 text-lg font-semibold text-foreground">
                    Access Platforms
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium text-foreground">Official Website</p>
                        <p className="text-xs">journals.ug.edu.gh</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium text-foreground">AJOL</p>
                        <p className="text-xs">ajol.info/cjas</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium text-foreground">Sabinet</p>
                        <p className="text-xs">African scholarly content platform</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer Info */}
              <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
                <p className="mb-2 text-sm text-muted-foreground">
                  ISSN: 2343-6530
                </p>
                <p className="text-xs text-muted-foreground">
                  © Institute of African Studies, University of Ghana
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}  )
}
