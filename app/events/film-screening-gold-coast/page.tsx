import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Film Screening: Stories from the Gold Coast Archives",
  description:
    "A curated film screening showcasing rare archival materials and oral histories documenting stories from Ghana's colonial and post-colonial periods.",
}

export default function FilmScreeningPage() {
  return (
    <>
      <PageHeader
        title="Film Screening: Stories from the Gold Coast Archives"
        subtitle="Rare archival materials and oral histories from Ghana's past"
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
              Archives & Documentation Unit
            </span>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies presented a groundbreaking film screening featuring rare archival materials and oral histories from the Gold Coast Archives. This event brought to life stories that have been preserved in the Institute's extensive collections, spanning Ghana's colonial and post-colonial periods.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Documenting Living History</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The screening showcased digitized archival materials, including rare film footage, photographs, and recorded oral histories that document the social, political, and cultural transformations that shaped modern Ghana. These materials represent decades of fieldwork and archival preservation efforts by Institute researchers and collaborators across multiple generations.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              Through carefully curated selections, the screening highlighted the voices and perspectives of ordinary Ghanaians whose stories are often absent from formal historical records. From market traders to traditional leaders, from independence activists to cultural practitioners, these materials preserve the diverse narratives that constitute Ghana's shared heritage and collective memory.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Archival Methods and Digital Preservation</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The event also provided insights into the Institute's archival methodologies and commitment to digital preservation. Presenters discussed the technical processes involved in digitizing deteriorating materials, cataloging oral histories, establishing proper metadata standards, and making these collections accessible to researchers and the public in sustainable formats.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              By sharing these archival materials through film, the Institute demonstrated how audiovisual documentation serves as a powerful tool for historical understanding and cultural preservation. The screening reinforced the importance of collecting and preserving the voices and visual records of African societies for future generations of students, scholars, and citizens.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Collections Featured</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Colonial Period Materials:</strong> Photographs and documents from the Gold Coast administration era</li>
              <li><strong>Independence Era Recordings:</strong> Oral histories and film footage from Ghana's transition to independence</li>
              <li><strong>Cultural Documentation:</strong> Ceremonies, festivals, and traditional practices captured over decades</li>
              <li><strong>Community Voices:</strong> Recorded interviews with diverse Ghanaians reflecting on lived experiences and social change</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Event Organizers & Presenters</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Archives & Documentation Unit:</strong> Curated selections and presentations</li>
              <li><strong>Institute Researchers:</strong> Provided historical context and scholarly interpretation</li>
              <li><strong>Digital Preservation Team:</strong> Discussed digitization processes and metadata standards</li>
            </ul>

            <p className="text-sm italic text-muted-foreground">
              The Gold Coast Archives represent a crucial resource for understanding African history, offering researchers and the public access to primary sources that illuminate the diverse experiences and perspectives of Ghanaian communities across generations. Through digitization and thoughtful curation, these stories continue to speak to contemporary audiences.
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
