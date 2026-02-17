import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { UnitSection } from "@/components/units/unit-section"

export const metadata: Metadata = {
  title: "Teaching Museum",
  description:
    "The Teaching Museum of the Institute of African Studies, University of Ghana.",
}

const unit = {
  id: "teaching-museum",
  name: "Teaching Museum",
  description:
    "The Teaching Museum serves as both a pedagogical resource and a research facility, housing the Institute's extensive collection of cultural artifacts, ethnographic materials, and art objects for hands-on academic instruction and public engagement. It organises exhibitions that showcase Africa's rich material culture and supports research on heritage conservation, restitution, and museum studies.",
  collections: [
    {
      id: "masks",
      title: "West African Ceremonial Masks",
      image: "/images/archive-1.jpg",
      date: "c. 1920 - 1980",
      source: "IAS Ethnographic Collection",
      description:
        "A collection of over 200 ceremonial masks from across West Africa, including examples from the Yoruba, Igbo, Akan, and Senufo peoples. These masks represent diverse ritual traditions including harvest festivals, initiation ceremonies, and ancestral veneration.",
    },
    {
      id: "pottery",
      title: "Traditional African Pottery",
      image: "/images/archive-6.jpg",
      date: "c. 1900 - 1970",
      source: "IAS Archaeological Collection",
      description:
        "Handcrafted ceramic vessels and pottery from communities across Ghana and neighbouring regions, including utilitarian vessels, decorative wares, and ritual ceramics.",
    },
    {
      id: "goldweights",
      title: "Akan Gold Weights & Regalia",
      image: "/images/archive-4.jpg",
      date: "c. 17th - 19th Century",
      source: "IAS Numismatic Collection",
      description:
        "A significant collection of Akan gold weights (abrammuo), used historically for measuring gold dust in trade. The weights depict proverbs, animals, geometric patterns, and scenes of daily life.",
    },
    {
      id: "textiles",
      title: "Traditional African Textiles & Kente Cloths",
      image: "/images/archive-2.jpg",
      date: "c. 1950 - Present",
      source: "IAS Textile Collection",
      description:
        "A diverse collection of handwoven textiles including Kente cloths, Adire fabrics, and batik works from Ghana and across West Africa. These pieces demonstrate the artistry and cultural significance of African textile traditions.",
    },
    {
      id: "beads",
      title: "African Beads & Jewellery",
      image: "/images/archive-3.jpg",
      date: "c. 1800 - 1990",
      source: "IAS Decorative Arts Collection",
      description:
        "An extensive collection of beads, ornaments, and jewellery from various African cultures. These pieces showcase the craftsmanship and aesthetic values of different communities, including shell beads, glass beads, and metal ornaments.",
    },
    {
      id: "tools",
      title: "Historical Tools & Implements",
      image: "/images/archive-5.jpg",
      date: "c. 1700 - 1950",
      source: "IAS Material Culture Collection",
      description:
        "A collection of traditional tools, implements, and household items used in agricultural, domestic, and craft activities. These artifacts provide insight into daily life, technological innovations, and cultural practices of African communities.",
    },
  ],
}

export default function TeachingMuseumPage() {
  return (
    <>
      <PageHeader
        title={unit.name}
        subtitle="A pedagogical resource preserving and showcasing Africa's rich material culture"
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
