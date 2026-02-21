import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Film Screening: Stories from the Gold Coast Archives",
  description:
    "A film screening event presenting archival materials and stories from the Gold Coast collections.",
}

export default function FilmScreeningPage() {
  return (
    <>
      <PageHeader
        title="Film Screening: Stories from the Gold Coast Archives"
        subtitle="Bringing archival narratives to the screen"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              October 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Institute of African Studies, University of Ghana
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Archives & Collections Unit
            </span>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies presented a special film screening event featuring digitized archival materials and stories from the Gold Coast Collections. The screening brought historical narratives and visual documentation to contemporary audiences.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Archival Heritage on Film</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The screening showcased rare archival photographs, film footage, and oral history recordings that document daily life, cultural practices, and social transformations during the Gold Coast period. These materials represent valuable primary sources for understanding Ghana's colonial and post-colonial history.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Digital Preservation & Public Access</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The event highlighted the Institute's commitment to digitizing archival collections and making historical materials accessible to students, researchers, and the general public. By presenting these materials in accessible formats, the Institute advances both scholarly research and public historical awareness.
            </p>

            <p className="text-sm italic text-muted-foreground">
              This screening demonstrated how archival work bridges academic research and public engagement, making historical narratives relevant and engaging for contemporary audiences.
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
