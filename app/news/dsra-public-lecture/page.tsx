import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Day of Scientific Renaissance of Africa (DSRA) Public Lecture",
  description:
    "Pluriversal dialogues about alternative futures featuring Dr. Jan Linhart from University of Bonn exploring cross-cultural learning and collaborative knowledge systems.",
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
          {/* Lecture Theme - Highlighted */}
          <div className="mb-8 rounded-lg bg-primary/10 border border-primary/20 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Lecture Theme</p>
            <p className="text-xl font-semibold text-foreground">
              Pluriversal Perspectives: Building Inclusive Futures Through Cross-Cultural Knowledge Systems
            </p>
          </div>

          {/* Event Metadata */}
          <div className="mb-8 flex flex-wrap items-center gap-6 rounded-lg bg-muted p-4">
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">June 11, 2025</span>
            </span>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Institute of African Studies</span>
            </span>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Dr. Jan Linhart</span>
            </span>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/dsra-public-lecture.jpg"
                alt="Dr. Jan Linhart during DSRA public lecture"
                fill
                sizes="100vw"
                className="object-cover"
                loading="eager"
                priority
              />
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              As part of the global Day of Scientific Renaissance of Africa (DSRA) initiative, the Institute of African Studies hosted a public lecture on pluriversal dialogues about alternative futures, featuring Dr. Jan Linhart from the University of Bonn. The lecture explored innovative approaches to cross-cultural learning and collaborative knowledge systems.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About the Lecture</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Dr. Linhart's presentation examined how African intellectual traditions can contribute to shaping alternative futures and more inclusive approaches to global knowledge production. The lecture emphasized the importance of recognizing diverse knowledge systems and building bridges between African and European scholarly communities.
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
              Dr. Linhart is a scholar at the University of Bonn with extensive experience in African studies and international collaborative research. His work focuses on bridging academic traditions and fostering meaningful dialogue between African and European intellectual communities, with particular emphasis on how diverse knowledge systems can contribute to addressing global challenges.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Day of Scientific Renaissance of Africa</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The DSRA is a global initiative dedicated to celebrating African contributions to science and knowledge creation, promoting African-led research agendas, and fostering international collaboration that centers African perspectives and intellectual leadership. The Institute of African Studies participates in this celebration with a series of academic events highlighting Africa's intellectual traditions and innovative contributions to global knowledge systems.
            </p>

            <p className="text-sm italic text-muted-foreground">
              This lecture contributed to the Institute's mission of advancing African scholarship and fostering dialogue on the continent's intellectual contributions to global knowledge systems.
            </p>
          </article>

          {/* Back Link */}
          <div className="mt-12 border-t border-border pt-8">
            <a
              href="/news"
              className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              ← Back to News
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
