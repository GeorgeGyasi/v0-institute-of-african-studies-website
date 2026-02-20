import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore the research areas and ongoing projects at the Institute of African Studies.",
}

const researchAreas = [
  {
    title: "African Languages & Linguistics",
    description:
      "Documentation, analysis, and revitalization of African languages. Research on multilingualism, language policy, and computational approaches to endangered languages across the continent.",
    projects: ["Endangered Languages Documentation Project", "Multilingualism in Urban Ghana", "Computational Lexicography of Akan"],
  },
  {
    title: "History & Archaeology",
    description:
      "Investigation of pre-colonial, colonial, and post-colonial histories of African societies, including archaeological research on settlements, trade networks, and material culture.",
    projects: ["Trans-Saharan Trade Networks", "Archaeology of the Volta Basin", "Oral History Documentation"],
  },
  {
    title: "Gender, Culture & Society",
    description:
      "Interdisciplinary research on gender relations, cultural practices, social structures, and their transformations in contemporary African societies.",
    projects: ["Women in African Politics", "Masculinities in West Africa", "Gender and Land Rights"],
  },
  {
    title: "Performing Arts & Ethnomusicology",
    description:
      "Study of African music, dance, theatre, and performance traditions, examining their cultural significance, evolution, and role in community life.",
    projects: ["Ghanaian Drumming Traditions", "Contemporary African Theatre", "Music and Healing Practices"],
  },
  {
    title: "Governance & Development",
    description:
      "Analysis of African governance structures, democratic processes, development strategies, and the intersection of traditional and modern political systems.",
    projects: ["Chieftaincy in Modern Ghana", "Democracy and Development in Africa", "Youth Political Participation"],
  },
  {
    title: "Migration & Diaspora Studies",
    description:
      "Research on African migration patterns, diaspora communities, transnational identities, and the impact of globalization on African societies.",
    projects: ["African Diaspora in Europe", "Return Migration to Ghana", "Digital Diaspora Networks"],
  },
]

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        subtitle="Advancing knowledge across the full spectrum of African Studies"
      />

      {/* Featured Image */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative aspect-[3/1] overflow-hidden rounded-lg">
            <Image
              src="/images/research.jpg"
              alt="Research seminar at the Institute of African Studies"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="max-w-lg text-lg font-medium text-card">
                Our research spans six core areas, engaging scholars from across
                Africa and around the world in collaborative inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Research Areas
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Core Fields of Inquiry
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-border bg-card p-8"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Active Projects
                  </p>
                  <ul className="flex flex-col gap-1">
                    {area.projects.map((project) => (
                      <li
                        key={project}
                        className="text-sm text-muted-foreground"
                      >
                        &mdash; {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Interested in Collaboration?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground">
            We welcome proposals for joint research, visiting fellowships, and
            partnerships with institutions across the globe.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
