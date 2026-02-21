import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Annual Research Review Symposium 2025",
  description:
    "The Institute of African Studies hosted its annual research review symposium featuring presentations from faculty, postdoctoral fellows, and doctoral students.",
}

export default function AnnualResearchSymposiumPage() {
  return (
    <>
      <PageHeader
        title="Annual Research Review Symposium 2025"
        subtitle="Celebrating scholarly excellence and research achievements"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              November 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Institute of African Studies, University of Ghana
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Faculty & Researchers
            </span>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies held its annual Research Review Symposium in November 2025, bringing together faculty members, postdoctoral fellows, and doctoral students to showcase current research projects across multiple disciplinary areas.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Research Presentations</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The symposium featured presentations spanning African history, anthropology, cultural studies, economics, and policy research. Presenters discussed findings from ongoing fieldwork, archival research, and collaborative projects undertaken across the continent and in diaspora communities.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Academic Engagement</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Participants engaged in substantive discussions about research methodologies, interdisciplinary approaches, and the policy implications of academic work. The symposium provided an opportunity for peer feedback and scholarly dialogue that strengthens the institute's research community.
            </p>

            <p className="text-sm italic text-muted-foreground">
              The annual symposium remains a cornerstone of the Institute's commitment to advancing African scholarship and supporting the next generation of researchers.
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
