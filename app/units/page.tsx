import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { UnitSection } from "@/components/units/unit-section"

export const metadata: Metadata = {
  title: "Academic Units",
  description:
    "Explore the academic units and archival collections of the Institute of African Studies.",
}

const units = [
  {
    id: "teaching-museum",
    name: "Teaching Museum",
    description:
      "The Teaching Museum serves as both a pedagogical resource and a research facility, housing the Institute's extensive collection of cultural artifacts, ethnographic materials, and art objects for hands-on academic instruction and public engagement. It organises exhibitions that showcase Africa's rich material culture and supports research on heritage conservation and museum studies.",
    collections: [
      {
        id: "masks",
        title: "West African Ceremonial Masks",
        image: "/images/archive-1.jpg",
        date: "c. 1920 - 1980",
        source: "IAS Ethnographic Collection",
        description:
          "A collection of over 200 ceremonial masks from across West Africa, including examples from the Yoruba, Igbo, Akan, and Senufo peoples. These masks represent diverse ritual traditions including harvest festivals, initiation ceremonies, and ancestral veneration. The collection was assembled through field expeditions and donations beginning in the 1960s.",
      },
      {
        id: "pottery",
        title: "Traditional African Pottery",
        image: "/images/archive-6.jpg",
        date: "c. 1900 - 1970",
        source: "IAS Archaeological Collection",
        description:
          "Handcrafted ceramic vessels and pottery from communities across Ghana and neighboring regions. The collection includes utilitarian vessels, decorative wares, and ritual ceramics documenting the evolution of pottery traditions. Many pieces show distinctive techniques passed down through generations of women potters.",
      },
      {
        id: "goldweights",
        title: "Akan Gold Weights & Regalia",
        image: "/images/archive-4.jpg",
        date: "c. 17th - 19th Century",
        source: "IAS Numismatic Collection",
        description:
          "A significant collection of Akan gold weights (abrammuo), used historically for measuring gold dust in trade. The weights are cast in brass and depict proverbs, animals, geometric patterns, and scenes of daily life. This collection provides invaluable insight into Akan economic systems, cosmology, and artistic expression.",
      },
    ],
  },
  {
    id: "archives-documentation",
    name: "Archives & Documentation Unit",
    description:
      "The Archives and Documentation Unit is responsible for preserving the Institute's extensive collection of historical documents, photographs, manuscripts, and audio-visual materials. The unit leads digitization initiatives and provides access to materials for researchers, students, and the public.",
    collections: [
      {
        id: "goldcoast-photos",
        title: "Gold Coast Photography 1920-1957",
        image: "/images/archive-2.jpg",
        date: "1920 - 1957",
        source: "Colonial Archive & Private Donations",
        description:
          "Over 3,000 photographs documenting life in the Gold Coast during the late colonial period. The collection includes portraits, landscapes, social events, and political gatherings that reveal the transformation of Ghanaian society leading up to independence. Recently digitized as part of the IAS Digital Heritage Initiative.",
      },
      {
        id: "drumming-ceremonies",
        title: "African Drumming & Performance Archive",
        image: "/images/archive-5.jpg",
        date: "1950 - 1985",
        source: "IAS Ethnomusicology Archive",
        description:
          "A photographic and audio-visual archive documenting traditional drumming ceremonies, dance performances, and musical traditions across Ghana. Includes field recordings by pioneering ethnomusicologist J. H. Kwabena Nketia and his students, along with contextual photographs and field notes.",
      },
      {
        id: "textiles",
        title: "West African Textile Collection",
        image: "/images/archive-3.jpg",
        date: "c. 1940 - 1990",
        source: "IAS Material Culture Collection",
        description:
          "An extensive collection of West African textiles including kente cloth, adinkra cloth, batik, and woven fabrics from across the region. The collection documents the evolution of textile traditions, symbolism, and the social significance of cloth in West African societies. Includes rare examples of early kente designs.",
      },
    ],
  },
  {
    id: "language-research",
    name: "Language Research Unit",
    description:
      "The Language Research Unit focuses on the documentation, analysis, and preservation of African languages. It maintains linguistic archives, conducts fieldwork across Ghana, and develops resources for language education and revitalization. The unit collaborates with communities to ensure their languages are documented for future generations.",
    collections: [],
  },
  {
    id: "performing-arts",
    name: "Performing Arts Unit",
    description:
      "The Performing Arts Unit supports research and creative practice in African music, dance, and theatre. It manages performance spaces, organizes public events, and maintains a growing collection of audio-visual materials documenting performing traditions across the continent.",
    collections: [],
  },
]

export default function UnitsPage() {
  return (
    <>
      <PageHeader
        title="Academic Units"
        subtitle="Research units and their archival collections"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Units
          </p>
          <p className="mb-16 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The Institute of African Studies comprises specialized research units,
            each contributing to the preservation and advancement of knowledge
            about African cultures, languages, and histories.
          </p>
          <div className="flex flex-col gap-24">
            {units.map((unit) => (
              <UnitSection key={unit.id} unit={unit} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
