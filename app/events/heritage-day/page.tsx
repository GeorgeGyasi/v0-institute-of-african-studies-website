import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Heritage Day: Open Access to IAS Collections",
  description:
    "An open-access initiative bringing the Institute's collections closer to students, researchers, and the general public for exploration and engagement.",
}

export default function HeritageDayPage() {
  return (
    <>
      <PageHeader
        title="Heritage Day: Open Access to IAS Collections"
        subtitle="Celebrating African heritage through open access and community engagement"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              July 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Institute of African Studies, University of Ghana
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              University Community & General Public
            </span>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              Heritage Day represented a landmark initiative by the Institute of African Studies to democratize access to its world-class collections and research resources. By opening its archives, libraries, and specialized units to the broader university community and general public, the Institute reaffirmed its commitment to knowledge sharing and cultural accessibility.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Breaking Down Barriers to Knowledge</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The event featured guided tours through the Institute's various units, including the Archives and Documentation Unit, the Teaching Museum, and the research libraries housing extensive collections of African studies materials. Visitors gained direct access to manuscripts, photographs, oral histories, and digital resources that would typically require formal research appointments to access.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              Staff and faculty members served as guides and mentors, explaining the significance of key collections and discussing how these materials contribute to scholarly understanding of African societies, cultures, and histories. The interactive format allowed visitors to engage directly with archivists, researchers, and curators about the importance of preservation and open access.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Inspiring Future Scholars and Community Leaders</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Heritage Day served as an inspiration for students considering careers in archival work, museum curation, historical research, and cultural preservation. The event demonstrated how academic institutions can serve not only as centers of research but also as public resources that strengthen community connections to heritage and history.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              By welcoming the general public, Heritage Day reinforced the Institute's vision of African scholarship as a shared intellectual project that benefits from diverse perspectives and lived experiences. Participants left with a deeper appreciation for the Institute's role in preserving and interpreting African heritage for current and future generations.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Collections Highlighted</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Archives & Documentation Unit:</strong> Rare manuscripts, photographs, and oral history recordings</li>
              <li><strong>Teaching Museum:</strong> Curated exhibitions of African artifacts and ethnographic materials</li>
              <li><strong>Research Libraries:</strong> Extensive monographs, journals, and digital resources on African studies</li>
              <li><strong>Oral History Collections:</strong> Recorded interviews documenting lived experiences across generations</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Event Facilitators</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Archives & Documentation Unit Staff:</strong> Guided archival tours and exhibitions</li>
              <li><strong>Museum Curators:</strong> Presented ethnographic collections and teaching exhibits</li>
              <li><strong>Faculty Researchers:</strong> Discussed research methodologies and collection significance</li>
            </ul>

            <p className="text-sm italic text-muted-foreground">
              Heritage Day demonstrated the Institute's commitment to open-access scholarship and public engagement, making Africa's intellectual and cultural heritage available to all who seek to learn, research, and connect with the continent's diverse histories and societies.
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
