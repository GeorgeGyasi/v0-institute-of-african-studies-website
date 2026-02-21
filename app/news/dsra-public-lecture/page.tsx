import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Day of Scientific Renaissance of Africa (DSRA) Public Lecture",
  description:
    "Pluriversal dialogues about alternative futures featuring Dr. Jan Linhart exploring cross-cultural learning and collaborative knowledge systems.",
}

export default function DSRAPublicLecturePage() {
  return (
    <>
      <PageHeader
        title="Day of Scientific Renaissance of Africa (DSRA) Public Lecture"
        subtitle="Pluriversal Dialogues About Alternative Futures"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 border-b border-border pb-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</p>
                  <p className="font-semibold text-foreground">June 11, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Institute of African Studies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Speaker</p>
                  <p className="font-semibold text-foreground">Dr. Jan Linhart</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              As part of the global Day of Scientific Renaissance of Africa (DSRA) initiative, the Institute of African Studies hosted a public lecture on pluriversal dialogues about alternative futures, featuring Dr. Jan Linhart from the University of Bonn.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About the Lecture</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The lecture explored innovative approaches to cross-cultural learning and collaborative knowledge systems. Dr. Linhart's presentation examined how African intellectual traditions can contribute to shaping alternative futures and more inclusive approaches to global knowledge production.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Key Themes</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li>Pluriversal perspectives on knowledge production</li>
              <li>Cross-cultural collaboration in African studies</li>
              <li>Alternative pathways for sustainable futures</li>
              <li>Decolonizing knowledge systems and scholarship</li>
              <li>Contemporary applications of African intellectual traditions</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About Dr. Jan Linhart</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Dr. Jan Linhart is a scholar at the University of Bonn with extensive experience in African studies and international collaborative research. His work focuses on bridging academic traditions and fostering meaningful dialogue between African and European intellectual communities.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Day of Scientific Renaissance of Africa</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The DSRA is a global initiative dedicated to celebrating African contributions to science and knowledge creation, promoting African-led research agendas, and fostering international collaboration that centers African perspectives and intellectual leadership.
            </p>

            <p className="text-sm italic text-muted-foreground">
              This lecture contributed to the Institute's mission of advancing African scholarship and fostering dialogue on the continent's intellectual contributions to global knowledge systems.
            </p>
          </article>

          {/* Back Link */}
          <div className="mt-12 border-t border-border pt-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
