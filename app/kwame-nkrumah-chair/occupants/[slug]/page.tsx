import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft, Award, BookOpen, Clock } from "lucide-react"

const occupants = [
  {
    slug: "kofi-anyidoho",
    name: "Professor Kofi Anyidoho",
    position: "First Occupant",
    tenure: "2012–2014",
    discipline: "Literature in English",
    image: "/images/occupant-1.jpg",
    fullBio: "Trained as a professional teacher at Accra Training College and Advanced Teacher Training College-Winneba, Professor Anyidoho taught at primary, middle, and secondary school levels before joining the University faculty. Outside the University, he has been deeply involved in various initiatives designed to promote African culture and history, including Ghana Television's African Heritage Series, for which he was the main host and executive producer. He holds a B.A. Honours in English and Linguistics from the University of Ghana, an M.A. in Folklore from Indiana University-Bloomington, and a Ph.D. in Comparative Literature from the University of Texas at Austin.",
    expertise: [
      "African Literature",
      "Cultural Heritage Promotion",
      "Oral Traditions and Folklore",
      "Comparative Literature",
    ],
    achievements: [
      "Main host and executive producer of Ghana Television's African Heritage Series",
      "Promoted African culture and history through multiple initiatives",
      "Extensive publications in literature and folklore studies",
    ],
  },
  {
    slug: "professor-gordon",
    name: "Professor Gordon",
    position: "Second Occupant",
    tenure: "2014–2016",
    discipline: "African Studies",
    image: "/images/occupant-2.jpg",
    fullBio: "Professor Gordon is an expert in African politics and international relations, with extensive research and scholarly work on pan-African movements and continental integration. His work has contributed significantly to scholarly debates on African unity, decolonisation, and political governance across the continent.",
    expertise: [
      "African Politics",
      "Pan-African Movements",
      "Continental Integration",
      "International Relations",
    ],
    achievements: [
      "Extensive research on pan-African movements",
      "Scholarly contributions to debates on African unity",
      "Work on decolonisation and political governance",
    ],
  },
  {
    slug: "horace-g-campbell",
    name: "Professor Horace G. Campbell",
    position: "Third Occupant",
    tenure: "2020–2021",
    discipline: "African American Studies and Political Science",
    image: "/images/occupant-3.jpg",
    fullBio: "Professor Campbell is a scholar of African American Studies and Political Science at Syracuse University with a focus on African liberation movements and contemporary African geopolitics. His influential works include Global NATO and the Catastrophic Failure in Libya: Lessons for Africa in the Forging of African Unity, which examines the critical challenges facing the continent and the importance of African self-determination in an interconnected world.",
    expertise: [
      "African American Studies",
      "Political Science",
      "African Geopolitics",
      "African Liberation Movements",
    ],
    achievements: [
      "Published Global NATO and the Catastrophic Failure in Libya",
      "Critical analysis of African self-determination issues",
      "Research on African liberation and independence movements",
    ],
  },
  {
    slug: "amina-mattah",
    name: "Amina Mattah",
    position: "Fourth Occupant",
    tenure: "2021–2025",
    discipline: "Gender & Development",
    image: "/images/occupant-4.jpg",
    fullBio: "Amina Mattah is a scholar in gender and development studies. She has been engaged in research, consultancy, and professional services in Africa, Europe, the United States, and within international organizations. Her work focuses on gender dynamics, development initiatives, and women's empowerment across the African continent and diaspora.",
    expertise: [
      "Gender Studies",
      "Development Studies",
      "Women's Empowerment",
      "African Development",
    ],
    achievements: [
      "Research in gender and development studies",
      "International consultancy and advisory services",
      "Work on women's empowerment initiatives",
      "Continental and diaspora engagement",
    ],
  },
  {
    slug: "ato-quayson",
    name: "Professor Ato Quayson",
    position: "Fifth Occupant",
    tenure: "2026–",
    discipline: "English & African Studies",
    image: "/images/ato-quayson.jpg",
    fullBio:
      "Ato Quayson is a Ghanaian-Canadian literary critic, urban theorist, and academic who serves as the Jean G. and Morris M. Doyle Professor in Interdisciplinary Studies and Professor of English at Stanford University, where he also chairs the Department of African and African American Studies. He is internationally recognized as one of the leading figures in postcolonial literature, African studies, urban humanities, and literary theory. He earned a BA (Hons) in English and Arabic from the University of Ghana and a Ph.D. from the University of Cambridge. He previously served as the inaugural Director of the Centre for Diaspora and Transnational Studies at the University of Toronto, as a Fellow of Pembroke College and Reader in Commonwealth and Postcolonial Studies at Cambridge, and as Professor of English at New York University (2017–2019). Through his scholarship and public engagement—including as host of the YouTube academic series Critic.Exe—Quayson integrates literary criticism, urban ethnography, and political history to explore how global culture and African identity intersect.",
    expertise: [
      "Postcolonial Literature",
      "African Studies",
      "Urban Humanities",
      "Literary Theory",
      "Disability Studies",
      "Transnationalism & Diaspora Studies",
    ],
    achievements: [
      "Author of Tragedy and Postcolonial Literature (2021), winner of the 2022 Warren-Brooks Prize in Literary Criticism",
      "Author of Oxford Street, Accra: City Life and the Itineraries of Transnationalism (2014), winner of the 2015 Urban History Association Best Book Prize",
      "Author of Aesthetic Nervousness: Disability and the Crisis of Representation (2007), a foundational text in disability studies",
      "Author of Strategic Transformations in Nigerian Writing (1997)",
      "Fellow of the Ghana Academy of Arts and Sciences, the Royal Society of Canada, and the American Academy of Arts and Sciences, and Corresponding Fellow of the British Academy",
      "Host of the YouTube academic series Critic.Exe",
    ],
  },
]

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function OccupantPage({ params }: PageProps) {
  const { slug } = await params
  const occupant = occupants.find((o) => o.slug === slug)

  if (!occupant) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-2xl font-bold text-foreground">Occupant Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            <Link href="/kwame-nkrumah-chair/occupants" className="text-primary hover:underline">
              Return to occupants list
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageHeader title={occupant.name} subtitle={`${occupant.position} (${occupant.tenure})`} />

      {/* Back Link */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/kwame-nkrumah-chair/occupants"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Occupants
          </Link>
        </div>
      </section>

      {/* Profile Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* About Section with Image on Right */}
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">About</h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>{occupant.fullBio}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-lg border border-border overflow-hidden bg-card">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={occupant.image}
                    alt={occupant.name}
                    fill
                    loading="eager"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
                    {occupant.position}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    Tenure: {occupant.tenure}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="mt-12 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
              <BookOpen className="h-6 w-6 text-primary" />
              Areas of Expertise
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {occupant.expertise.map((area) => (
                <div
                  key={area}
                  className="rounded-md bg-background p-4 text-sm font-medium text-foreground"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-12 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
              <Award className="h-6 w-6 text-primary" />
              Key Achievements
            </h2>
            <ul className="space-y-4">
              {occupant.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-4">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-base text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/kwame-nkrumah-chair"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Chair Overview
            </Link>
            <Link
              href="/kwame-nkrumah-chair/occupants"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              All Occupants
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
