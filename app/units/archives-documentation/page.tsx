import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { UnitSection } from "@/components/units/unit-section"

export const metadata: Metadata = {
  title: "Archives & Documentation Unit",
  description:
    "The Archives and Documentation Unit of the Institute of African Studies, University of Ghana.",
}

const unit = {
  id: "archives-documentation",
  name: "Archives & Documentation Unit",
  description:
    "The Archives and Documentation Unit is responsible for preserving the Institute's extensive collection of historical documents, photographs, manuscripts, and audio-visual materials. The unit leads digitisation initiatives and provides access to materials for researchers, students, and the public.",
  collections: [
    {
      id: "goldcoast-photos",
      title: "Gold Coast Photography 1920-1957",
      image: "/images/archive-2.jpg",
      date: "1920 - 1957",
      source: "Colonial Archive & Private Donations",
      description:
        "Over 3,000 photographs documenting life in the Gold Coast during the late colonial period, including portraits, landscapes, social events, and political gatherings.",
    },
    {
      id: "drumming-ceremonies",
      title: "African Drumming & Performance Archive",
      image: "/images/archive-5.jpg",
      date: "1950 - 1985",
      source: "IAS Ethnomusicology Archive",
      description:
        "A photographic and audio-visual archive documenting traditional drumming ceremonies, dance performances, and musical traditions across Ghana.",
    },
    {
      id: "textiles",
      title: "West African Textile Collection",
      image: "/images/archive-3.jpg",
      date: "c. 1940 - 1990",
      source: "IAS Material Culture Collection",
      description:
        "An extensive collection of West African textiles including kente cloth, adinkra cloth, batik, and woven fabrics from across the region.",
    },
  ],
}

export default function ArchivesDocumentationPage() {
  return (
    <>
      <PageHeader
        title={unit.name}
        subtitle="Preserving historical documents, photographs, and audio-visual materials"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {unit.description}
          </p>
          <div className="mt-12">
            <UnitSection unit={unit} />
          </div>
        </div>
      </section>
    </>
  )
}
