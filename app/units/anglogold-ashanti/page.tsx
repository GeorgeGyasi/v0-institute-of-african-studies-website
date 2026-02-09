import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Gem, MapPin, Users, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "AngloGold Ashanti",
  description:
    "The AngloGold Ashanti research and heritage unit at the Institute of African Studies, University of Ghana.",
}

const focusAreas = [
  {
    icon: MapPin,
    title: "Mining Heritage Research",
    description:
      "Documenting the historical and cultural impact of gold mining on communities in the Ashanti, Western, and Upper East regions of Ghana, including oral histories, settlement patterns, and economic transformations.",
  },
  {
    icon: Users,
    title: "Community Cultural Preservation",
    description:
      "Working with mining-adjacent communities to preserve cultural practices, traditional knowledge systems, and heritage sites that may be affected by mining activities.",
  },
  {
    icon: BookOpen,
    title: "Sustainable Development Research",
    description:
      "Investigating the intersection of resource extraction, community wellbeing, and sustainable development in Ghana's gold-mining regions, with policy-relevant recommendations.",
  },
  {
    icon: Gem,
    title: "Gold & Material Culture",
    description:
      "Studying the role of gold in African material culture, from Akan gold weights and regalia to contemporary artisanal practices, and the cultural significance of gold across the continent.",
  },
]

const projects = [
  {
    title: "Obuasi Heritage Documentation Project",
    status: "Ongoing",
    description:
      "A comprehensive documentation of cultural heritage in the Obuasi mining district, including architectural surveys, oral history collection, and community heritage mapping.",
  },
  {
    title: "Gold Mining Communities Oral History Archive",
    status: "Ongoing",
    description:
      "Building a digital archive of oral histories from communities across Ghana's gold belt, capturing memories, traditions, and perspectives on mining's social impact.",
  },
  {
    title: "Cultural Impact Assessment Framework",
    status: "Completed 2024",
    description:
      "Development of a culturally sensitive framework for assessing the impact of mining operations on intangible cultural heritage, now used as a reference tool in the industry.",
  },
]

export default function AngloGoldAshantiPage() {
  return (
    <>
      <PageHeader
        title="AngloGold Ashanti"
        subtitle="Research and heritage unit focused on mining communities and cultural preservation"
      />

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Unit Overview
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Bridging Heritage and Development
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The AngloGold Ashanti unit represents a strategic partnership
                between the Institute of African Studies and AngloGold Ashanti,
                one of Africa's leading gold mining companies. Established to
                address the critical intersection of natural resource extraction
                and cultural heritage, the unit conducts research that is both
                academically rigorous and practically relevant.
              </p>
              <p>
                The unit focuses on understanding how mining activities affect
                the cultural landscapes, social structures, and intangible
                heritage of communities in Ghana's gold-mining regions. Through
                fieldwork, community engagement, and interdisciplinary
                collaboration, it produces knowledge that informs responsible
                mining practices and heritage preservation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Research Focus
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Key Areas of Investigation
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="flex gap-5 rounded-lg border border-border bg-background p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Current Work
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Research Projects
          </h2>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span
                    className={`rounded-sm px-2 py-0.5 text-xs font-medium ${
                      project.status === "Ongoing"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
