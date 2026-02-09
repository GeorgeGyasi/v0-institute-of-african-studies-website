import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Eye, Target, Compass, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "The vision, mission, and strategic objectives of the Institute of African Studies, University of Ghana.",
}

const coreObjectives = [
  {
    icon: Globe,
    title: "Pan-African Scholarship",
    description:
      "Promote the study of African societies, cultures, and histories from African-centred perspectives that contribute to global knowledge production.",
  },
  {
    icon: Compass,
    title: "Interdisciplinary Research",
    description:
      "Foster cutting-edge interdisciplinary research that addresses critical issues facing Africa, including governance, culture, environment, and development.",
  },
  {
    icon: Target,
    title: "Graduate Education",
    description:
      "Train the next generation of African Studies scholars through rigorous MPhil and PhD programmes grounded in both theory and fieldwork.",
  },
  {
    icon: Eye,
    title: "Cultural Preservation",
    description:
      "Document, preserve, and disseminate knowledge about Africa's tangible and intangible cultural heritage for present and future generations.",
  },
]

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader
        title="Vision & Mission"
        subtitle="Guiding principles that drive our pursuit of African-centred scholarship"
      />

      {/* Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Vision
            </p>
            <h2 className="mb-8 font-serif text-3xl font-bold leading-snug text-foreground md:text-4xl">
              <span className="text-balance">
                To be the leading centre of excellence for African Studies on
                the continent and globally
              </span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              The Institute of African Studies envisions a world where knowledge
              about Africa is generated, interpreted, and disseminated primarily
              by African scholars, rooted in African epistemologies, and
              responsive to the challenges and aspirations of African peoples.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Our Mission
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                Advancing African Knowledge
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  The mission of the Institute of African Studies is to conduct
                  high-quality interdisciplinary research on African societies,
                  cultures, histories, and development; to train scholars and
                  professionals in African Studies; and to make available the
                  findings of its research to the academic community, policy
                  makers, and the general public.
                </p>
                <p>
                  Through its academic programmes, research projects, archival
                  collections, and public engagement activities, the Institute
                  serves as a vital bridge between scholarly inquiry and societal
                  impact across the African continent and the diaspora.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Mission Pillars
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  "Conduct interdisciplinary research on all aspects of African life and culture",
                  "Offer graduate programmes that produce globally competitive African Studies scholars",
                  "Preserve and provide access to Africa's documentary and material cultural heritage",
                  "Engage with communities, governments, and international partners for development impact",
                  "Publish and disseminate research findings through journals, books, and digital platforms",
                ].map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Strategic Focus
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Core Objectives
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {coreObjectives.map((obj) => (
              <div
                key={obj.title}
                className="flex gap-5 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <obj.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {obj.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
