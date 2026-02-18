import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import {
  Landmark,
  Archive,
  Languages,
  Music,
  Library,
  Gem,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Sections",
  description:
    "Academic sections and units within the Institute of African Studies, University of Ghana.",
}

const sections = [
  {
    icon: Landmark,
    name: "Teaching Museum",
    slug: "teaching-museum",
    description:
      "The Teaching Museum serves as both a pedagogical resource and a research facility, housing the Institute's extensive collection of cultural artifacts, ethnographic materials, and art objects for hands-on academic instruction and public engagement.",
    highlights: ["200+ ceremonial masks", "Akan gold weights", "Teaching collections"],
  },
  {
    icon: Archive,
    name: "Archives & Documentation Unit",
    slug: "archives-documentation",
    description:
      "Preserves the Institute's collection of historical documents, photographs, manuscripts, and audio-visual materials. Leads digitisation initiatives and provides archival access.",
    highlights: ["3,000+ photographs", "Field recordings", "Textile collection"],
  },
  {
    icon: Languages,
    name: "Language Research Unit",
    slug: "language-research",
    description:
      "Focuses on documentation, analysis, and preservation of African languages. Maintains linguistic archives, conducts fieldwork, and develops resources for language education and revitalisation.",
    highlights: ["50+ languages documented", "Linguistic archives", "Community partnerships"],
  },
  {
    icon: Music,
    name: "Ghana Dance Ensemble",
    slug: "ghana-dance-ensemble",
    description:
      "A premier professional performing arts company established in 1962, dedicated to researching, preserving, and promoting the traditional and contemporary performing arts of Ghana and Africa.",
    highlights: ["200+ annual performances", "40+ members", "International tours"],
  },
  {
    icon: Library,
    name: "IAS Library",
    slug: "library",
    description:
      "One of the foremost specialised Africanist libraries on the continent, housing over 15,000 monographs, 500+ journals, rare books, and digital research resources.",
    highlights: ["15,000+ books", "500+ journals", "Digital resources"],
  },
  {
    icon: Music,
    name: "J.H. Kwabena Nketia Archives",
    slug: "nketia-archives",
    description:
      "Named after the pioneering ethnomusicologist, this unit houses the personal papers, recordings, and manuscripts of Prof. J.H. Kwabena Nketia, along with related materials on African music research.",
    highlights: ["Personal manuscripts", "Field recordings", "Music research papers"],
  },
  {
    icon: Archive,
    name: "Manhyia Archives",
    slug: "manhyia-archives",
    description:
      "A collaborative archival initiative between the Institute of African Studies and the Manhyia Palace, dedicated to preserving and providing access to the rich historical records, oral traditions, and cultural documentation of the Asante Kingdom.",
    highlights: ["Royal manuscripts", "Oral history recordings", "Asante cultural records"],
  },
]

export default function SectionsUnitsPage() {
  return (
    <>
      <PageHeader
        title="Sections"
        subtitle="Specialised research and archival units within the Institute"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Structure
          </p>
          <p className="mb-16 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The Institute of African Studies comprises specialised sections and
            units, each contributing to the preservation and advancement of
            knowledge about African cultures, languages, and histories.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/units/${section.slug}`}
                className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:text-primary">
                  {section.name}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {section.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-sm bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore Unit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
