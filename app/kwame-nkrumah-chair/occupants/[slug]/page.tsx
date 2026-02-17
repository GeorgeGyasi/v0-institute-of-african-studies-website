import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft, Award, BookOpen, Clock } from "lucide-react"

const occupants = [
  {
    slug: "kofi-anyidoho",
    name: "Professor Kofi Anyidoho",
    position: "First Occupant",
    tenure: "2012–2014",
    discipline: "Literature in English",
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
    slug: "patrick-wilmot",
    name: "Professor Patrick Wilmot",
    position: "Second Occupant",
    tenure: "2014–2016",
    discipline: "African Politics and International Relations",
    fullBio: "Professor Wilmot is an expert in African politics and international relations, with extensive research and scholarly work on pan-African movements and continental integration. His work has contributed significantly to scholarly debates on African unity, decolonisation, and political governance across the continent.",
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
    slug: "amina-mama",
    name: "Professor Amina Mama",
    position: "Fourth Occupant",
    tenure: "2021–2025",
    discipline: "Gender and Sexuality Studies",
    fullBio: "Professor Mama is a gender and sexuality scholar who has been Research Professor of Gender, Sexuality and Women's Studies at the University of California, Davis since 2009. Previously, she held the Barbara Lee Distinguished Chair in Women's Leadership at Mills College in the USA (2007–2009) and served as Chair in Gender Studies and Director of the African Gender Institute at the University of Cape Town, South Africa (1999–2009). Beyond her academic positions, Professor Mama has been engaged in independent research, consultancy, and professional services in Africa, Europe, the United States, and within the United Nations system.",
    expertise: [
      "Gender Studies",
      "Sexuality Studies",
      "Women's Leadership",
      "African Feminism",
    ],
    achievements: [
      "Research Professor at UC Davis",
      "Barbara Lee Distinguished Chair holder",
      "Director of African Gender Institute",
      "UN consultancy and advisory services",
    ],
  },
  {
    slug: "ato-quayson",
    name: "Ato Quayson",
    position: "Newly Appointed",
    tenure: "2026–",
    discipline: "English, African and American Studies",
    fullBio: "Ato Quayson is an accomplished scholar in English, African, and American Studies. His intellectual work bridges literary analysis with critical engagements on African identity, cultural production, and global interconnections. Beginning his tenure in 2026, he joins the distinguished lineage of Kwame Nkrumah Chair occupants, bringing fresh perspectives on African knowledge systems and contemporary African scholarship.",
    expertise: [
      "English Literature",
      "African Studies",
      "American Studies",
      "Cultural Production",
    ],
    achievements: [
      "Accomplished scholar bridging multiple disciplines",
      "Critical work on African identity and cultural production",
      "Fresh perspectives on African knowledge systems",
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
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Basic Info */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">About</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                      Academic Discipline
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      {occupant.discipline}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                      Position at Chair
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      {occupant.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Biography</h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {occupant.fullBio}
                </p>
              </div>

              {/* Expertise */}
              <div className="rounded-lg border border-border bg-card p-8">
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
              <div className="rounded-lg border border-border bg-card p-8">
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

            {/* Sidebar */}
            <div>
              <div className="rounded-lg border border-border bg-card sticky top-24 p-8">
                <div className="space-y-6">
                  <div className="rounded-md bg-primary/10 p-6 text-center">
                    <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                      Tenure Period
                    </p>
                    <p className="mt-3 text-2xl font-bold text-foreground">
                      {occupant.tenure}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/kwame-nkrumah-chair/occupants"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      View All Occupants
                    </Link>
                  </div>

                  <div className="rounded-md border border-border bg-background p-6 text-center">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      Kwame Nkrumah Chair
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      African Studies, University of Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
