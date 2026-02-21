import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Workshop: Field Methods in Linguistic Documentation",
  description:
    "A hands-on workshop on field research methodologies and language documentation techniques.",
}

export default function FieldMethodsWorkshopPage() {
  return (
    <>
      <PageHeader
        title="Workshop: Field Methods in Linguistic Documentation"
        subtitle="Developing skills in language research and documentation"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              September 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Institute of African Studies, University of Ghana
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Research Training Program
            </span>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute hosted a specialized workshop on field methods in linguistic documentation, designed to equip researchers with practical tools and techniques for conducting language research in African communities.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Workshop Curriculum</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Participants learned about ethical approaches to fieldwork, data collection methodologies, transcription techniques, and digital archiving systems. The workshop combined theoretical frameworks with hands-on exercises, allowing participants to practice techniques in collaborative settings.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Advancing Language Preservation</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Language documentation remains critical for preserving African linguistic heritage and supporting communities in maintaining their languages. This workshop equipped researchers with skills needed to conduct rigorous linguistic research that contributes to both academic knowledge and community language preservation efforts.
            </p>

            <p className="text-sm italic text-muted-foreground">
              Field methods training is essential for developing the next generation of linguists and anthropologists committed to documenting and preserving African languages and cultural practices.
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
