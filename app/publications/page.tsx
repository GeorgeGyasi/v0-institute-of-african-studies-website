"use client"

import Link from "next/link"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ExternalLink, BookOpen, Mail, FileText } from "lucide-react"

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState<"feminist-africa" | "cjas">("cjas")
  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Peer-reviewed journals, monographs, and working papers advancing African scholarship"
      />

  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Academic journals and publications from the Institute of African Studies"
      />

      {/* Tab Navigation */}
      <section className="border-b border-border bg-background sticky top-16 z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("feminist-africa")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "feminist-africa"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Feminist Africa
            </button>
            <button
              onClick={() => setActiveTab("cjas")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "cjas"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              CJAS
            </button>
          </div>
        </div>
      </section>

      {/* Feminist Africa Tab */}
      {activeTab === "feminist-africa" && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-lg border border-border bg-card p-12 text-center">
              <BookOpen className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
                Feminist Africa
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                An interdisciplinary journal dedicated to feminist scholarship and analysis on Africa
              </p>
              <a
                href="https://feministafrica.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-5 w-5" />
                Visit Feminist Africa
              </a>
              <p className="mt-6 text-sm text-muted-foreground">
                https://feministafrica.net/
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CJAS Tab */}
      {activeTab === "cjas" && (
        <>
          {/* CJAS Overview */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-12">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                  Our Journal
                </p>
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                  Contemporary Journal of African Studies
                </h2>
                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                  The Contemporary Journal of African Studies (CJAS) began its life as the Research Review in 1969, and was re-branded as the CJAS in 2012. CJAS is a peer-reviewed scholarly journal published twice a year. Beginning with the 2019 issues, the CJAS is available only in electronic format available on journals.ug.edu.gh and ajol.info/cjas. However, print on demand copies can be made available.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Mission */}
                <div className="rounded-lg border border-border bg-card p-8">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Mission
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The CJAS is a multidisciplinary journal that publishes original scholarly work on Global Africa, including work that engages ongoing topical conversations. We are committed to promoting knowledge from an African-centred perspective. As part of our commitment to encourage African knowledge production, the journal is open, on a case by case basis, to publishing Special Issues such as the outcome of conferences and symposia whose foci are in furtherance of our stated mission.
                  </p>
                </div>

                {/* Publishing Schedule */}
                <div className="rounded-lg border border-border bg-card p-8">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                    <FileText className="h-5 w-5 text-primary" />
                    Publishing Schedule
                  </h3>
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
            </div>
          </section>

          {/* Submissions Section */}
          <section className="border-t border-border bg-card py-20">
            <div className="mx-auto max-w-7xl px-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Submit Your Work
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                Submission Guidelines
              </h2>

              <div className="grid gap-8">
                <div className="rounded-lg border border-border bg-background p-8">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    Types of Submissions Welcome
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      Scholarly articles presenting findings of new research in any branch of African Studies
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      Papers that discuss and re-evaluate earlier research by others
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

                <div className="rounded-lg border border-border bg-background p-8">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    Submission Requirements
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      Must meet scholarship standards within the discipline
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      Must be accompanied by statement that article has not been previously published
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      Evaluated by at least two external reviewers
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      No costs associated with submitting or publishing
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border bg-background p-8">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    How to Submit
                  </h3>
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
              </div>
            </div>
          </section>

          {/* Copyright & Access Section */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    Copyright & Access
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    CJAS complies with Creative Commons Attribution BY-NC-ND licence. This copyright license lets others copy and distribute the material in any medium or format in unadapted form only, for noncommercial purposes, and only as long as attribution is given to the creator.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    CJAS's issues and individual articles from 2019 are all open access and can be freely accessed at the journal's official website, AJOL, and Sabinet. Prior issues and individual articles may be purchased from AJOL or Sabinet or by contacting the Publications Office.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    Access Platforms
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium text-foreground">Official Website</p>
                        <p>journals.ug.edu.gh</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium text-foreground">AJOL</p>
                        <p>ajol.info/cjas</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium text-foreground">Sabinet</p>
                        <p>African scholarly content platform</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-border bg-card py-20">
            <div className="mx-auto max-w-7xl px-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Get In Touch
              </p>
              <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
                Contact Information
              </h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-border bg-background p-8">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    Editorial Office
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    For editorial matters and submissions:
                  </p>
                  <a
                    href="mailto:cjasmanager@ug.edu.gh"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    cjasmanager@ug.edu.gh
                  </a>
                </div>

                <div className="rounded-lg border border-border bg-background p-8">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    Publications Office
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    For general publications inquiries:
                  </p>
                  <a
                    href="mailto:iaspubs@ug.edu.gh"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    iaspubs@ug.edu.gh
                  </a>
                </div>

                <div className="rounded-lg border border-border bg-background p-8">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                    <FileText className="h-5 w-5 text-primary" />
                    Mailing Address
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    P.O. Box LG 73
                    <br />
                    Legon, Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="mt-12 rounded-lg border border-border bg-muted/50 p-8 text-center">
                <p className="mb-2 text-sm text-muted-foreground">
                  ISSN: 2343-6530
                </p>
                <p className="text-xs text-muted-foreground">
                  © Institute of African Studies, University of Ghana
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
