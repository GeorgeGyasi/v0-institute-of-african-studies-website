import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "International Conference on African Oral Traditions",
  description:
    "Scholars from over 20 countries gather to discuss preservation strategies for African oral traditions in the digital age.",
}

export default function AfricanOralTraditionsConferencePage() {
  return (
    <>
      <PageHeader
        title="International Conference on African Oral Traditions"
        subtitle="Preservation Strategies in the Digital Age"
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
                  <p className="font-semibold text-foreground">January 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">University of Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Participants</p>
                  <p className="font-semibold text-foreground">20+ Countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              An international conference bringing together scholars from over 20 countries to discuss critical strategies for preserving and celebrating African oral traditions in the rapidly evolving digital age.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Conference Significance</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              African oral traditions represent centuries of intellectual, spiritual, and cultural knowledge embedded in storytelling, music, poetry, and performance. These traditions face unprecedented challenges from urbanization, digital disruption, and linguistic shift. This conference addresses urgent questions about how to document, preserve, and transmit these vital cultural resources to future generations.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Conference Focus Areas</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li>Digital archiving and documentation of oral traditions</li>
              <li>Community-based preservation initiatives</li>
              <li>Language revitalization and transmission</li>
              <li>Educational programs integrating oral traditions</li>
              <li>Copyright and intellectual property issues</li>
              <li>Technology solutions for oral history preservation</li>
              <li>Intergenerational knowledge transfer</li>
              <li>Policy frameworks for cultural preservation</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">International Collaboration</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              With participants representing diverse African regions and international scholarly communities, the conference facilitates knowledge exchange on successful preservation models, technological innovations, and policy approaches. The gathering strengthens networks among oral historians, anthropologists, linguists, archivists, and community cultural practitioners.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Expected Outcomes</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The conference aims to establish best practices for oral tradition preservation, document innovative methodologies, identify policy recommendations, and create ongoing networks for international collaboration in safeguarding Africa's oral heritage. Proceedings will be published to make the knowledge available to scholars and practitioners worldwide.
            </p>

            <p className="text-sm italic text-muted-foreground">
              This conference represents a critical investment in ensuring that African oral traditions, with their profound wisdom and cultural significance, remain accessible and vital for contemporary and future generations.
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
