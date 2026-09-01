import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Library, Music, FileText, Video } from "lucide-react"

export const metadata: Metadata = {
  title: "J. H. Kwabena Nketia Archives",
  description:
    "The J.H. Kwabena Nketia Archives at the Institute of African Studies, University of Ghana.",
}

const collections = [
  {
    icon: Music,
    title: "Audio Recordings",
    count: "1,500+",
    description:
      "Rare field recordings, oral histories, and musical traditions from the 1950s onward. Preserved across quarter-inch reel-to-reel tapes, cassettes, DATs, LPs, and CDs. Inscribed on the UNESCO Memory of the World Register for exceptional value.",
  },
  {
    icon: FileText,
    title: "Manuscripts",
    count: "800+",
    description:
      "This includes personal records, collaboration between the Institute of African Studies and other Institutes, companies, departments, schools and universities. Projects of the Institute of African Studies, correspondences, reports, etc.",
  },
  {
    icon: Video,
    title: "Video Documentation",
    count: "300+",
    description:
      "Documentaries of Ghanaian culture: installation of Chiefs, funerals, musical performances, movies; early Ghanaian movies, command performances, etc.",
  },
  {
    icon: Library,
    title: "Published Works",
    count: "200+",
    description:
      "Complete collection of Prof. Nketia's published books, journal articles, and conference papers spanning African music, dance, and oral literature.",
  },
]

export default function NketiaArchivesPage() {
  return (
    <>
      <PageHeader
        title="J. H. Kwabena Nketia Archives"
        subtitle="Preserving the legacy of Africa's foremost ethnomusicologist"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              About the Archives
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              A Life Devoted to African Music
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The J. H. Kwabena Nketia Archives are named in honour of
                Professor Joseph Hanson Kwabena Nketia (1921-2019), one of
                Africa's most distinguished scholars of music and the arts.
                Prof. Nketia spent over six decades researching, documenting,
                and theorising African music, producing a body of work that
                fundamentally shaped the field of ethnomusicology.
              </p>
              <p>
                The archives house his personal papers, field recordings,
                manuscripts, and an extensive collection of materials related to
                African music research. They serve as an invaluable resource for
                scholars, students, and anyone interested in understanding the
                richness of African musical traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Holdings
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Archive Collections
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {collections.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-lg border border-border bg-background p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="rounded-sm bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
                      {item.count}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
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
