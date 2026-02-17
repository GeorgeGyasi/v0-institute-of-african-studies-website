import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft, Mail, ExternalLink, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Contemporary Journal of African Studies (CJAS)",
  description:
    "The Contemporary Journal of African Studies - A multidisciplinary peer-reviewed journal publishing original scholarly work on Global Africa.",
}

export default function CJASPage() {
  return (
    <>
      <PageHeader
        title="Contemporary Journal of African Studies (CJAS)"
        subtitle="A peer-reviewed scholarly journal published twice a year by the Institute of African Studies"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Back Link */}
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Publications
          </Link>

          {/* Introduction */}
          <div className="mb-12 rounded-lg border border-border bg-card p-8">
            <div className="flex gap-4">
              <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">About CJAS</h2>
                <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                  The Contemporary Journal of African Studies (CJAS) began its life as the Research Review in 1969, and was re-branded as the CJAS in 2012. CJAS is a peer-reviewed scholarly journal published twice a year. Beginning with the 2019 issues, the CJAS is available only in electronic format available on{" "}
                  <a
                    href="https://journals.ug.edu.gh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    journals.ug.edu.gh
                    <ExternalLink className="h-3 w-3" />
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://ajol.info/cjas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    ajol.info/cjas
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  .
                </p>
                <p className="text-base text-muted-foreground">
                  However, print on demand copies can be made available. Kindly contact the Publications Office via email at{" "}
                  <a href="mailto:iaspubs@ug.edu.gh" className="text-primary hover:underline">
                    iaspubs@ug.edu.gh
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-12 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Mission</h2>
            <p className="leading-relaxed text-muted-foreground">
              The CJAS is a multidisciplinary journal that publishes original scholarly work on Global Africa, including work that engages ongoing topical conversations. We are committed to promoting knowledge from an African-centred perspective. As part of our commitment to encourage African knowledge production, the journal is open, on a case by case basis, to publishing Special Issues such as the outcome of conferences and symposia whose foci are in furtherance of our stated mission.
            </p>
          </div>

          {/* Submissions Section */}
          <div className="mb-12 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Submissions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Types of Submissions Welcome
                </h3>
                <p className="mb-4 text-base text-muted-foreground">
                  The Editorial Committee welcomes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Scholarly articles that set forth the findings of new research in any branch of African Studies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Papers that discuss and re-evaluate earlier research by others</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Short reports on research in progress</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Brief research notes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Book reviews and review essays</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Submission Requirements
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>To qualify for consideration, submissions must meet the scholarship standards within their discipline</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>The submission should be accompanied by a statement that the article has not been previously published or submitted for publication elsewhere</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>Submissions accepted for consideration will be evaluated by at least two external reviewers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>There are no costs associated with submitting or publishing articles</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-base text-muted-foreground mb-4">
                  Articles may be submitted electronically via{" "}
                  <a
                    href="https://journals.ug.edu.gh/index.php/cjas/index"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    https://journals.ug.edu.gh/index.php/cjas/index
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright and Access Section */}
          <div className="mb-12 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Copyright and Access</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Creative Commons License
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  CJAS complies with Creative Commons Attribution BY-NC-ND licence. This copyright license lets others copy and distribute the material in any medium or format in unadapted form only, for noncommercial purposes, and only as long as attribution is given to the creator.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Access to Articles
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  CJAS's issues and individual articles from 2019 are all open access and can be freely accessed at the journal's official website and also at{" "}
                  <a
                    href="https://ajol.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    AJOL
                  </a>{" "}
                  and Sabinet. Prior issues and individual articles may be purchased from AJOL or Sabinet or by contacting{" "}
                  <a href="mailto:iaspubs@ug.edu.gh" className="text-primary hover:underline">
                    iaspubs@ug.edu.gh
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Publishing Schedule Section */}
          <div className="mb-12 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Publishing Schedule</h2>
            <p className="mb-4 text-lg font-semibold text-foreground">
              CJAS is published twice a year:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>April/May</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>October/November</span>
              </li>
            </ul>
          </div>

          {/* Archiving Section */}
          <div className="mb-12 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Archiving</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The journal is archived via AJOL, which would make the journal contents available if the journal were to cease publication.
            </p>
          </div>

          {/* Contact Section */}
          <div className="rounded-lg border border-border bg-primary/5 p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Editorial Office Email</p>
                  <a href="mailto:cjasmanager@ug.edu.gh" className="text-primary hover:underline">
                    cjasmanager@ug.edu.gh
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Publications Office Email</p>
                  <a href="mailto:iaspubs@ug.edu.gh" className="text-primary hover:underline">
                    iaspubs@ug.edu.gh
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Mailing Address</p>
                <p className="text-sm text-muted-foreground">
                  P.O. Box LG 73, Legon, Accra, Ghana
                </p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              The Contemporary Journal of African Studies is owned and published by the Institute of African Studies, University of Ghana.
            </p>
            <p className="mt-2">
              CJAS is managed by Editor-in-Chief, Akosua Adomako Ampofo and an editorial team.
            </p>
            <p className="mt-4 pt-4 border-t border-border">
              © Institute of African Studies, 2020. ISSN 2343-6530
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
