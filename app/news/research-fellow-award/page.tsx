import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "IAS Research Fellow Wins Continental Humanities Award",
  description:
    "Dr. Ama Boahen receives the African Humanities Prize for groundbreaking work in postcolonial identity studies.",
}

export default function ResearchFellowAwardPage() {
  return (
    <>
      <PageHeader
        title="IAS Research Fellow Wins Continental Humanities Award"
        subtitle="Dr. Ama Boahen Receives African Humanities Prize"
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
                  <p className="font-semibold text-foreground">November 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Honoree</p>
                  <p className="font-semibold text-foreground">Dr. Ama Boahen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Award</p>
                  <p className="font-semibold text-foreground">African Humanities Prize</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              Dr. Ama Boahen, a Research Fellow at the Institute of African Studies, has been honored with the prestigious African Humanities Prize for her groundbreaking contributions to postcolonial identity studies and African intellectual history.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About the Award</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The African Humanities Prize is an internationally recognized award that celebrates scholars whose work advances understanding of African societies, cultures, and intellectual traditions. The award recognizes exceptional research contributions that deepen scholarly knowledge and enrich public discourse about African issues.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Dr. Ama Boahen's Research</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Dr. Boahen's scholarly work examines the complex processes through which postcolonial African societies construct and negotiate identity in relation to colonial legacies, global political currents, and local aspirations. Her research combines historical analysis, ethnographic inquiry, and theoretical innovation to illuminate how communities imagine and enact futures beyond colonialism.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Key Contributions</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li>Theorizing postcolonial identity formation processes</li>
              <li>Archival research on African intellectual movements</li>
              <li>Community-engaged scholarship on heritage and memory</li>
              <li>Publications advancing African humanistic perspectives</li>
              <li>Mentorship of emerging African scholars</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Institute Recognition</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The Institute of African Studies is immensely proud of Dr. Boahen's achievement. Her research exemplifies the Institute's commitment to advancing rigorous African-centered scholarship that contributes to both academic knowledge and public understanding of the continent's intellectual traditions and contemporary challenges.
            </p>

            <p className="text-sm italic text-muted-foreground">
              This recognition reflects the high caliber of scholarship conducted at the Institute of African Studies and reinforces our position as a leading center for African intellectual inquiry and humanistic research.
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
