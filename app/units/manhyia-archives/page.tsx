import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Archive, ScrollText, Mic, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Manhyia Archives",
  description:
    "The Manhyia Archives at the Institute of African Studies -- preserving the historical records, oral traditions, and cultural heritage of the Asante Kingdom.",
}

const focusAreas = [
  {
    icon: ScrollText,
    title: "Royal Records & Manuscripts",
    description:
      "Preservation and cataloguing of historical manuscripts, correspondence, treaties, and administrative records from the Manhyia Palace, documenting centuries of Asante governance and diplomacy.",
  },
  {
    icon: Mic,
    title: "Oral History & Traditions",
    description:
      "Systematic collection and digitisation of oral traditions, royal lineage narratives, court proceedings, and ceremonial protocols passed down through generations of Asante historians and linguists.",
  },
  {
    icon: BookOpen,
    title: "Scholarly Research Access",
    description:
      "Providing researchers, students, and the public with access to archival materials through a growing digital catalogue, reading room services, and guided research support.",
  },
  {
    icon: Archive,
    title: "Cultural Documentation",
    description:
      "Documenting Asante material culture, festival traditions, chieftaincy customs, and the broader cultural heritage of the Asante Kingdom for preservation and educational purposes.",
  },
]

const collections = [
  {
    title: "Asante Court Records Collection",
    period: "1890s -- Present",
    description:
      "An extensive collection of records from the Manhyia Palace covering court proceedings, land disputes, chieftaincy matters, and administrative correspondence spanning over a century.",
  },
  {
    title: "Prempeh I & II Papers",
    period: "1888 -- 1970",
    description:
      "Personal and official papers of Otumfuo Nana Agyeman Prempeh I and Otumfuo Sir Osei Agyeman Prempeh II, documenting the Asante Kingdom through colonial and post-colonial periods.",
  },
  {
    title: "Oral Traditions Audio Archive",
    period: "1960s -- Present",
    description:
      "Hundreds of hours of recorded oral histories and traditional narratives collected from Asante elders, court linguists, and community historians since the 1960s.",
  },
  {
    title: "Asante Festival Photographic Collection",
    period: "1920s -- Present",
    description:
      "A photographic archive documenting Asante festivals, durbars, and ceremonial occasions including Akwasidae, Adae Kese, and royal funerals.",
  },
]

export default function ManhyiaArchivesPage() {
  return (
    <>
      <PageHeader
        title="Manhyia Archives"
        subtitle="Preserving the historical legacy of the Asante Kingdom"
      />

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Unit Overview
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Gateway to Asante Heritage
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The Manhyia Archives represents a collaborative initiative
                between the Institute of African Studies and the Manhyia
                Palace in Kumasi. Established to preserve, organise, and
                provide scholarly access to the rich historical records of
                the Asante Kingdom, the Archives holds one of the most
                significant collections of primary sources on Asante
                history and governance in existence.
              </p>
              <p>
                The collection spans royal manuscripts, colonial-era
                correspondence, treaty documents, court proceedings, oral
                history recordings, and photographic materials. Researchers
                from across the world visit the Manhyia Archives to study
                Asante political history, customary law, cultural practices,
                and the broader dynamics of precolonial and colonial West
                Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Work
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Key Areas of Focus
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

      {/* Collections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Holdings
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Major Collections
          </h2>
          <div className="flex flex-col gap-6">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-base font-semibold text-foreground">
                    {collection.title}
                  </h3>
                  <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {collection.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {collection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
