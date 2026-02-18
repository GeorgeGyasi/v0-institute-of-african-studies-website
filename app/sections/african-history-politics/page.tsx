import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionNavigation } from "@/components/section-navigation"

export const metadata: Metadata = {
  title: "African History and Politics",
  description:
    "The History and Politics section of the Institute of African Studies focuses on advancing knowledge about Africa's political systems, historical trajectories, and institutional developments.",
}

export default function AfricanHistoryPoliticsPage() {
  const researchFellows = [
    "Dr. Kojo Opoku Aidoo",
    "Dr. Ebenezer Ayesu",
    "Dr. Samuel Ntewusu",
    "Dr. Richard Asante",
    "Dr. Obodai Torto",
    "Dr. Mjiba Frehiwot",
    "Dr. Edem Adotey",
    "Dr. Michael Kpessa-Whyte",
  ]

  const researchAreas = [
    "Youth and Democracy",
    "Cross Border Communities",
    "China and Africa Relations",
    "Development Aid and Security Interventions",
    "Social Policy and Ageing",
    "Pan-Africanism and the African Diaspora",
    "Social Histories and the Chieftaincy Institution",
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/about/sections-units"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sections
        </Link>

        <PageHeader
          title="African History and Politics"
          subtitle="Exploring Africa's past, present, and future through rigorous historical and political analysis"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The History and Politics section of IAS is an interdisciplinary unit that draws on the expertise and skills of outstanding historians and political scientists to undertake social-science research. The section is committed to the production of knowledge for the purposes of promoting a better understanding of past, present and future developments in both continental Africa and its diasporas.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Research Fellows in this section contribute to educational training by teaching of several African Studies courses designed to expose undergraduate students to various aspects of the history and politics in Africa. The section is actively involved in the Institute's graduate (MA, M.Phil. and PhD) programmes.
              </p>
            </section>

            {/* Research Projects */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Major Research Projects</h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-2">Chieftaincy, Governance and Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Ford Foundation funded research on traditional forms of governance with emphasis on political transitions among the Asantes in Ghana.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-2">NUFU Collaborative Research</h3>
                  <p className="text-sm text-muted-foreground">
                    Norwegian Research Council Fund (NUFU) sponsored collaborative research between the University of Ghana and the Norwegian University of Science and Technology, Trondheim (NTNU).
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-2">Traditional Governance Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Research projects that analyzed and documented aspects of traditional forms of governance with emphasis on political transitions among African communities.
                  </p>
                </div>
              </div>
            </section>

            {/* Research Areas */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Research Areas</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {researchAreas.map((area) => (
                  <div key={area} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm font-medium text-foreground">{area}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact & Engagement */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Impact and Engagement</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Beyond being consulted regularly by numerous institutions including foreign missions, transnational policy actors, governmental agencies and civil society organizations seeking to better appreciate Africa's unique history and politics, the section's Research Fellows are also renowned for their commitment to sharing of knowledge in their areas of expertise in the local and international media.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The section is also home to several visiting scholars from across Africa and beyond, fostering a vibrant intellectual community dedicated to advancing African Studies scholarship.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="rounded-lg border border-border bg-card p-6">
                <SectionNavigation />
              </div>

              {/* Research Fellows */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">Research Fellows</h3>
                <div className="space-y-3">
                  {researchFellows.map((fellow) => (
                    <p key={fellow} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {fellow}
                    </p>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">Related Sections</h3>
                <div className="space-y-3">
                  <Link
                    href="/about/sections-units"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View All Sections
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
