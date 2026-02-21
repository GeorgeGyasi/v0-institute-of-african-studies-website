import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, Users, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Partnership with SOAS University of London",
  description:
    "New memorandum of understanding signed to establish joint doctoral program in African Cultural Studies.",
}

export default function SOASPartnershipPage() {
  return (
    <>
      <PageHeader
        title="Partnership with SOAS University of London"
        subtitle="Establishing Joint Doctoral Program in African Cultural Studies"
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
                  <p className="font-semibold text-foreground">October 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Partner</p>
                  <p className="font-semibold text-foreground">SOAS University of London</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Handshake className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Type</p>
                  <p className="font-semibold text-foreground">MOU Agreement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies, University of Ghana, and the School of Oriental and African Studies (SOAS), University of London, have signed a memorandum of understanding to establish a joint doctoral program in African Cultural Studies. This partnership represents a significant commitment to advancing collaborative African scholarship.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Program Overview</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The joint doctoral program will enable students to pursue advanced research in African Cultural Studies while benefiting from faculty expertise and resources at both institutions. The program combines rigorous methodological training with Africa-centered theoretical frameworks and supports original dissertation research on diverse aspects of African cultures, societies, and knowledge systems.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Program Features</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li>Dual affiliation and supervision by faculty from both institutions</li>
              <li>Access to research resources and archives at both universities</li>
              <li>Fieldwork opportunities in Ghana and across Africa</li>
              <li>Advanced seminars on African intellectual traditions</li>
              <li>Collaborative research initiatives</li>
              <li>International academic networks and mentorship</li>
              <li>Preparation for academic and professional careers</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Strategic Significance</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              This partnership strengthens the Institute's position as a leading center for African scholarship while building bridges between African and international academic communities. The joint program creates opportunities for knowledge exchange, collaborative research, and the development of the next generation of African scholars who will shape intellectual discourse on the continent.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About SOAS University of London</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              SOAS is the only university in the UK specializing in the study of Africa, the Near and Middle East, Asia and the Pacific. With extensive collections on African studies and established programs in African languages, cultures, and histories, SOAS brings complementary expertise and resources to this collaboration.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Enrollment and Application</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The program welcomes applications from qualified candidates with undergraduate degrees in relevant fields. Prospective students should contact both institutions for detailed program information, application procedures, and funding opportunities. The partnership aims to support diverse scholars and welcomes applications from throughout Africa and the global academic community.
            </p>

            <p className="text-sm italic text-muted-foreground">
              This partnership exemplifies the Institute's commitment to advancing world-class African scholarship through international collaboration while maintaining Ghana's intellectual leadership in African studies.
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
