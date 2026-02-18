import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import {
  Landmark,
  BookOpen,
  Music,
  Flame,
  Users,
  Palette,
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
    name: "African History and Politics",
    slug: "african-history-politics",
    description:
      "Explores the political systems, historical trajectories, and institutional developments across African societies. Examines pre-colonial governance structures, colonial encounters, post-independence nation-building, and contemporary political dynamics.",
    highlights: ["Political systems", "Historical analysis", "Governance structures"],
  },
  {
    icon: BookOpen,
    name: "Language, Literature and Drama",
    slug: "language-literature-drama",
    description:
      "Focuses on African languages, literary traditions, and dramatic arts. Documents and preserves linguistic heritage while examining literary works, oral traditions, and theatrical practices across the continent.",
    highlights: ["African languages", "Literary traditions", "Oral narratives"],
  },
  {
    icon: Music,
    name: "Music and Dance",
    slug: "music-dance",
    description:
      "Dedicated to researching and preserving Africa's rich musical and dance heritage. Combines ethnomusicological study with practical performance, documenting diverse genres and choreographic traditions.",
    highlights: ["Ethnomusicology", "Choreography", "Performance arts"],
  },
  {
    icon: Flame,
    name: "Religions and Philosophy",
    slug: "religions-philosophy",
    description:
      "Investigates African religious systems, philosophical thought, and spiritual traditions. Examines both indigenous belief systems and their interactions with world religions, exploring African philosophical contributions to global intellectual discourse.",
    highlights: ["Religious systems", "Philosophy", "Spirituality"],
  },
  {
    icon: Users,
    name: "Societies and Cultures",
    slug: "societies-cultures",
    description:
      "Studies African social structures, cultural practices, kinship systems, and community organisations. Examines contemporary social challenges, cultural dynamics, and the interface between tradition and modernity across diverse African communities.",
    highlights: ["Social structures", "Cultural practices", "Community dynamics"],
  },
  {
    icon: Palette,
    name: "Media and Visual Art",
    slug: "media-visual-art",
    description:
      "Explores African visual arts, contemporary media practices, and digital culture. Examines visual representation, artistic expression, film, photography, and new media in understanding African creativity and cultural communication.",
    highlights: ["Visual arts", "Contemporary media", "Digital culture"],
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
            The Institute of African Studies is organized around six core academic sections, each dedicated to advancing knowledge and understanding of distinct aspects of African societies, cultures, and intellectual heritage.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/sections/${section.slug}`}
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
                  Explore Section
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
