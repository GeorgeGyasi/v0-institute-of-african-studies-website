import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, Users, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "New Archival Collection: Gold Coast Photography 1920-1957",
  description:
    "Over 3,000 newly digitized photographs documenting everyday life in the Gold Coast now available for public research.",
}

export default function GoldCoastPhotographyPage() {
  return (
    <>
      <PageHeader
        title="New Archival Collection: Gold Coast Photography 1920-1957"
        subtitle="3,000+ Digitized Photographs Now Available for Research"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 border-b border-border pb-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Release Date</p>
                  <p className="font-semibold text-foreground">December 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Collection</p>
                  <p className="font-semibold text-foreground">Archives & Documentation Unit</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies is pleased to announce the digitization and public release of over 3,000 photographs documenting everyday life in the Gold Coast spanning from 1920 to 1957. This significant collection represents a major resource for understanding colonial and early independence-era Ghana.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Collection Overview</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The Gold Coast Photography Collection captures the quotidian experiences of Ghanaians during a transformative period in the nation's history. Images range from market scenes and street life to administrative buildings, educational institutions, cultural ceremonies, and colonial infrastructure. The photographs provide visual documentation of urban and rural settlements, social practices, and economic activities that shaped the Gold Coast's transition from colonial to independent nation.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Historical Significance</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li>Comprehensive visual record of Gold Coast society during colonialism</li>
              <li>Documentation of pre-independence social and cultural life</li>
              <li>Urban development and architectural heritage</li>
              <li>Traditional practices and cultural institutions</li>
              <li>Economic activities and market systems</li>
              <li>Educational and institutional development</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Research Applications</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Researchers in history, anthropology, urban studies, heritage conservation, and African studies can utilize this collection for scholarly projects. The photographs provide primary source material for understanding colonial administration, social change, economic systems, cultural practices, and community life during this critical historical period.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Access and Digitization Standards</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              All photographs have been professionally digitized to archival standards with high-resolution imaging, ensuring preservation for future generations. Each image includes metadata with historical context, estimated dates, location information, and subject classifications to facilitate research and discovery.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">How to Access the Collection</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The collection is now available through the Institute's digital archive portal. Researchers can search by date, location, subject matter, and other classifications. High-resolution images can be downloaded for research purposes. Scholars interested in publishing or exhibiting images are encouraged to contact the Archives & Documentation Unit for permissions and citation requirements.
            </p>

            <p className="text-sm italic text-muted-foreground">
              This digitization project represents the Institute's commitment to making African heritage accessible to researchers, students, and the general public. The Gold Coast Photography Collection enriches our understanding of Ghana's social, cultural, and economic history during a pivotal era in the nation's development.
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
