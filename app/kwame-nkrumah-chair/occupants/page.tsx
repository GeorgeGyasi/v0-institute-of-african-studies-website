import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowRight } from "lucide-react"

const occupants = [
  {
    slug: "kofi-anyidoho",
    name: "Professor Kofi Anyidoho",
    position: "First Occupant",
    tenure: "2012–2014",
    discipline: "Literature in English",
    bio: "Trained as a professional teacher at Accra Training College and Advanced Teacher Training College-Winneba, Professor Anyidoho taught at primary, middle, and secondary school levels before joining the University faculty. Outside the University, he has been deeply involved in various initiatives designed to promote African culture and history, including Ghana Television's African Heritage Series, for which he was the main host and executive producer. He holds a B.A. Honours in English and Linguistics from the University of Ghana, an M.A. in Folklore from Indiana University-Bloomington, and a Ph.D. in Comparative Literature from the University of Texas at Austin.",
  },
  {
    slug: "patrick-wilmot",
    name: "Professor Patrick Wilmot",
    position: "Second Occupant",
    tenure: "2014–2016",
    discipline: "African Politics and International Relations",
    bio: "Professor Wilmot is an expert in African politics and international relations, with extensive research and scholarly work on pan-African movements and continental integration. His work has contributed significantly to scholarly debates on African unity, decolonisation, and political governance across the continent.",
  },
  {
    slug: "horace-g-campbell",
    name: "Professor Horace G. Campbell",
    position: "Third Occupant",
    tenure: "2020–2021",
    discipline: "African American Studies and Political Science",
    bio: "Professor Campbell is a scholar of African American Studies and Political Science at Syracuse University with a focus on African liberation movements and contemporary African geopolitics. His influential works include Global NATO and the Catastrophic Failure in Libya: Lessons for Africa in the Forging of African Unity, which examines the critical challenges facing the continent and the importance of African self-determination in an interconnected world.",
  },
  {
    slug: "amina-mama",
    name: "Professor Amina Mama",
    position: "Fourth Occupant",
    tenure: "2021–2025",
    discipline: "Gender and Sexuality Studies",
    bio: "Professor Mama is a gender and sexuality scholar who has been Research Professor of Gender, Sexuality and Women's Studies at the University of California, Davis since 2009. Previously, she held the Barbara Lee Distinguished Chair in Women's Leadership at Mills College in the USA (2007–2009) and served as Chair in Gender Studies and Director of the African Gender Institute at the University of Cape Town, South Africa (1999–2009). Beyond her academic positions, Professor Mama has been engaged in independent research, consultancy, and professional services in Africa, Europe, the United States, and within the United Nations system.",
  },
  {
    slug: "ato-quayson",
    name: "Ato Quayson",
    position: "Newly Appointed",
    tenure: "2026–",
    discipline: "English, African and American Studies",
    bio: "Ato Quayson is an accomplished scholar in English, African, and American Studies. His intellectual work bridges literary analysis with critical engagements on African identity, cultural production, and global interconnections. Beginning his tenure in 2026, he joins the distinguished lineage of Kwame Nkrumah Chair occupants, bringing fresh perspectives on African knowledge systems and contemporary African scholarship.",
  },
]

export default function OccupantsPage() {
  return (
    <>
      <PageHeader
        title="Chair Occupants"
        subtitle="Distinguished scholars who have held the Kwame Nkrumah Chair in African Studies"
      />

      {/* Occupants Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {occupants.map((occupant) => (
              <Link
                key={occupant.slug}
                href={`/kwame-nkrumah-chair/occupants/${occupant.slug}`}
                className="group rounded-lg border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {occupant.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      {occupant.position} ({occupant.tenure})
                    </p>
                    <p className="mt-3 text-sm font-medium text-muted-foreground">
                      {occupant.discipline}
                    </p>
                    <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
                      {occupant.bio}
                    </p>
                  </div>
                  <ArrowRight className="ml-4 mt-2 h-5 w-5 shrink-0 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
