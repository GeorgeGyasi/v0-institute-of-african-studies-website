import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Collaborative Research Planning Workshop with SOAS",
  description:
    "A workshop bringing together researchers from IAS and SOAS to plan collaborative research initiatives.",
}

export default function SOASCollaborativeWorkshopPage() {
  return (
    <>
      <PageHeader
        title="Collaborative Research Planning Workshop with SOAS"
        subtitle="Building international research partnerships"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              June 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Institute of African Studies, University of Ghana
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              SOAS & IAS Researchers
            </span>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies and the School of Oriental and African Studies (SOAS) at the University of London convened a collaborative research planning workshop to identify opportunities for joint research projects and institutional partnership development.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Research Planning Sessions</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Researchers from both institutions presented ongoing projects, discussed complementary research interests, and explored potential synergies. Sessions covered themes including African intellectual history, post-colonial studies, cultural heritage preservation, and contemporary policy challenges affecting African societies.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Building International Networks</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The workshop resulted in identified collaborative projects, shared research agendas, and pathways for student and faculty exchange. These partnerships strengthen both institutions' capacity to conduct cutting-edge research and advance African studies on the international stage.
            </p>

            <p className="text-sm italic text-muted-foreground">
              International research collaborations expand intellectual horizons and enable researchers to tackle complex questions at the intersection of African scholarship and global challenges.
            </p>
          </article>

          {/* Back Link */}
          <div className="mt-12 border-t border-border pt-8">
            <a
              href="/events"
              className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              ← Back to Events
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
