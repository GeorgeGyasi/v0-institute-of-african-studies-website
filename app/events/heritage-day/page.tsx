import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Heritage Day: Open Access to IAS Collections",
  description:
    "A public heritage day event showcasing the Institute's collections and providing open access to archival materials.",
}

export default function HeritageDayPage() {
  return (
    <>
      <PageHeader
        title="Heritage Day: Open Access to IAS Collections"
        subtitle="Celebrating and sharing African heritage with the public"
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
              Archives & Collections Unit
            </span>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies hosted a Heritage Day event opening its archival collections to the broader university community and general public. The day celebrated African cultural heritage while demonstrating the Institute's commitment to public engagement and knowledge accessibility.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Collections on Display</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Visitors explored diverse materials including historical documents, photographs, ethnographic artifacts, and digital collections. Curated exhibits highlighted key periods and themes in African history, with archivists providing guided tours and detailed explanations of collection materials and their historical significance.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Public Engagement & Access</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Heritage Day reinforced the Institute's mission to make African heritage accessible to diverse audiences. The event included workshops on archival research, presentations on collection development, and discussions about community-engaged archival practice and heritage preservation.
            </p>

            <p className="text-sm italic text-muted-foreground">
              Open access to heritage collections strengthens community connections to history and supports informed citizenship grounded in understanding African achievements and experiences.
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
