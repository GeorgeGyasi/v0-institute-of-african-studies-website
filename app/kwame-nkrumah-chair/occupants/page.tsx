import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ArrowRight } from "lucide-react"

const occupants = [
  {
    slug: "kofi-anyidoho",
    name: "Professor Kofi Anyidoho",
    position: "First Occupant",
    tenure: "2012–2014",
    discipline: "Literature in English",
    image: "/images/occupant-1.jpg",
    bio: "Trained as a professional teacher at Accra Training College and Advanced Teacher Training College-Winneba, Professor Anyidoho taught at primary, middle, and secondary school levels before joining the University faculty. Outside the University, he has been deeply involved in various initiatives designed to promote African culture and history, including Ghana Television's African Heritage Series, for which he was the main host and executive producer. He holds a B.A. Honours in English and Linguistics from the University of Ghana, an M.A. in Folklore from Indiana University-Bloomington, and a Ph.D. in Comparative Literature from the University of Texas at Austin.",
  },
  {
    slug: "professor-gordon",
    name: "Professor Gordon",
    position: "Second Occupant",
    tenure: "2014–2016",
    discipline: "African Studies",
    image: "/images/occupant-2.jpg",
    bio: "Professor Gordon is an expert in African politics and international relations, with extensive research and scholarly work on pan-African movements and continental integration. His work has contributed significantly to scholarly debates on African unity, decolonisation, and political governance across the continent.",
  },
  {
    slug: "horace-g-campbell",
    name: "Professor Horace G. Campbell",
    position: "Third Occupant",
    tenure: "2020–2021",
    discipline: "African American Studies and Political Science",
    image: "/images/occupant-3.jpg",
    bio: "Professor Campbell is a scholar of African American Studies and Political Science at Syracuse University with a focus on African liberation movements and contemporary African geopolitics. His influential works include Global NATO and the Catastrophic Failure in Libya: Lessons for Africa in the Forging of African Unity, which examines the critical challenges facing the continent and the importance of African self-determination in an interconnected world.",
  },
  {
    slug: "amina-mattah",
    name: "Amina Mattah",
    position: "Fourth Occupant",
    tenure: "2021–2025",
    discipline: "Gender & Development",
    image: "/images/occupant-4.jpg",
    bio: "Amina Mattah is a scholar in gender and development studies. She has been engaged in research, consultancy, and professional services in Africa, Europe, the United States, and within international organizations. Her work focuses on gender dynamics, development initiatives, and women's empowerment across the African continent and diaspora.",
  },
  {
    slug: "ato-quayson",
    name: "Professor Ato Quayson",
    position: "Fifth Occupant",
    tenure: "2026–",
    discipline: "English & African Studies",
    image: "/images/ato-quayson.jpg",
    bio: "Ato Quayson is a Ghanaian-Canadian literary critic, urban theorist, and academic who serves as the Jean G. and Morris M. Doyle Professor in Interdisciplinary Studies and Professor of English at Stanford University, where he chairs the Department of African and African American Studies. Internationally recognized in postcolonial literature, African studies, urban humanities, and literary theory, he holds a BA from the University of Ghana and a Ph.D. from the University of Cambridge. His award-winning works include Tragedy and Postcolonial Literature and Oxford Street, Accra.",
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
          <div className="space-y-6">
            {occupants.map((occupant) => (
              <Link
                key={occupant.slug}
                href={`/kwame-nkrumah-chair/occupants/${occupant.slug}`}
                className="group flex gap-6 rounded-lg border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary md:gap-8"
              >
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg bg-muted md:h-40 md:w-40">
                  <Image
                    src={occupant.image}
                    alt={occupant.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {occupant.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      {occupant.position} ({occupant.tenure})
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {occupant.discipline}
                    </p>
                    <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
                      {occupant.bio}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                    <span className="text-sm font-medium">View Profile</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
