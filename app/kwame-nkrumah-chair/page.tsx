'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Award, BookOpen, Users, Globe, ArrowRight, ChevronDown } from "lucide-react"

const occupants = [
  {
    id: "kofi-anyidoho",
    position: "First Occupant",
    name: "Professor Kofi Anyidoho",
    years: "2012–2014",
    discipline: "Literature in English",
    image: "/images/occupant-1.jpg",
  },
  {
    id: "professor-gordon",
    position: "Second Occupant",
    name: "Professor Gordon",
    years: "2014–2016",
    discipline: "African Studies",
    image: "/images/occupant-2.jpg",
  },
  {
    id: "horace-g-campbell",
    position: "Third Occupant",
    name: "Professor Horace G. Campbell",
    years: "2020–2021",
    discipline: "African American Studies",
    image: "/images/occupant-3.jpg",
  },
  {
    id: "amina-mattah",
    position: "Fourth Occupant",
    name: "Amina Mattah",
    years: "2021–2025",
    discipline: "Gender & Development",
    image: "/images/occupant-4.jpg",
  },
]

export default function KwameNkrumahChairPage() {
  const [isOccupantsOpen, setIsOccupantsOpen] = useState(false)

  const allOccupants = [
    { id: "kofi-anyidoho", name: "Professor Kofi Anyidoho", position: "First Occupant", years: "2012–2014" },
    { id: "professor-gordon", name: "Professor Gordon", position: "Second Occupant", years: "2014–2016" },
    { id: "horace-g-campbell", name: "Professor Horace G. Campbell", position: "Third Occupant", years: "2020–2021" },
    { id: "amina-mattah", name: "Amina Mattah", position: "Fourth Occupant", years: "2021–2025" },
  ]

  return (
    <>
      <PageHeader
        title="Kwame Nkrumah Chair"
        subtitle="Honouring the legacy of Africa's foremost champion of pan-Africanism"
      />

      {/* Hero Section with Introduction and Occupants Widget */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                About the Chair
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground text-balance">
                Establishment and Vision
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  In 2005, efforts by successive Directors of the Institute, and collaborators knowledgeable about the role of Kwame Nkrumah in the Pan Africanist movement and discourse, culminated in a decision by the University of Ghana to establish a Kwame Nkrumah Chair in African Studies. The chair was established with a two-fold aim:
                </p>
                <div className="ml-6 space-y-3">
                  <p>
                    <span className="font-semibold text-foreground">1) To honour Nkrumah</span> for his significant intellectual contributions to African thought, and for his vision and commitment to the liberation and development of Africans on the continent and in the Diaspora.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">2) To promote research, teaching and the public promotion of Africana Studies.</span>
                  </p>
                </div>
                <p>
                  The Chair, which was formally launched on Friday, September 21, 2007 at the Institute of African Studies, Kwame Nkrumah Complex, received substantial core funding from Anglogold Ashanti Ltd. Several other corporate and individual donors also provided seed money.
                </p>
              </div>
            </div>

            {/* Occupants Widget - Top Right */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border border-border bg-card p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary">
                  Distinguished Scholars
                </p>
                <h3 className="mb-6 font-serif text-lg font-bold text-foreground">
                  Current Chair Occupants
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/kwame-nkrumah-chair/occupants/amina-mattah"
                    className="block rounded-md border border-border bg-background p-3 transition-all hover:border-primary hover:bg-muted"
                  >
                    <p className="text-xs font-semibold text-primary">Current (2026–)</p>
                    <p className="text-sm font-semibold text-foreground">Ato Quayson</p>
                    <p className="text-xs text-muted-foreground">English & African Studies</p>
                  </Link>
                  
                  <button
                    onClick={() => setIsOccupantsOpen(!isOccupantsOpen)}
                    className="w-full rounded-md border border-primary bg-primary/5 p-3 text-center transition-all hover:bg-primary/10 flex items-center justify-center gap-2"
                  >
                    <span className="text-xs font-semibold text-primary">
                      {isOccupantsOpen ? 'Hide' : 'View'} All Occupants
                    </span>
                    <ChevronDown 
                      className={`h-4 w-4 text-primary transition-transform ${isOccupantsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOccupantsOpen && (
                    <div className="space-y-2 border-t border-border pt-4">
                      {allOccupants.map((occupant) => (
                        <Link
                          key={occupant.id}
                          href={`/kwame-nkrumah-chair/occupants/${occupant.id}`}
                          className="block rounded-md border border-border bg-background p-3 transition-all hover:border-primary hover:bg-muted"
                        >
                          <p className="text-xs font-semibold text-secondary uppercase">{occupant.position}</p>
                          <p className="text-sm font-semibold text-foreground">{occupant.name}</p>
                          <p className="text-xs text-muted-foreground">{occupant.years}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nkrumah's Intellectual Legacy */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            The Platform
          </p>
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
            Nkrumah{"'"}s Vision and Legacy
          </h2>
          <div className="max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The Kwame Nkrumah Chair in African Studies provides a platform, albeit a modest one, for some of the unfinished business of a renaissance for African peoples to occur. This endowed academic Chair recognises Nkrumah{"'"}s foresight, personal interest and commitment to academic excellence in Ghana and Africa through the establishment of the Institute of African Studies, the Ghana Academy of Arts and Sciences (formerly the Ghana Academy of Learning), the National Research Council (now the Council for Scientific and Industrial Research and its associated institutes) and the Encyclopedia Africana project.
            </p>
            <p>
              For Nkrumah, all these formed part of the crucial task of African self-assertion, knowledge and confidence to be harnessed in the interests of African people. Drawing on African intellects in the Diaspora and on the continent, Nkrumah contributed significantly towards the creation of an intellectual and political ferment in Ghana that encapsulated African hopes and resolve to create a better life for African people everywhere and to put Africa on the world map.
            </p>
            <p>
              Nkrumah also spent time reflecting and writing on the African condition and the impediments to true liberation and development. His books chronicle his personal intellectual and political journeys to consciousness and political activity:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><span className="font-semibold text-foreground">Toward Colonial Freedom</span></span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><span className="font-semibold text-foreground">Autobiography of Kwame Nkrumah</span></span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><span className="font-semibold text-foreground">Africa Must Unite</span></span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><span className="font-semibold text-foreground">Neo-colonialism the Highest Stage of Imperialism</span></span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><span className="font-semibold text-foreground">Consciencism</span></span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><span className="font-semibold text-foreground">Class Struggle in Ghana</span></span>
              </li>
            </ul>
            <p>
              In his speech, <span className="italic">"The African Genius,"</span> delivered at the formal opening of the Institute in October 1963, Nkrumah charged the Institute to make its own specific contribution to the advancement of knowledge about the peoples and cultures of Africa by re-interpreting and providing new assessments of the factors which make up our past, to inspire our generation and succeeding generations, with a vision of a better future.
            </p>
          </div>
        </div>
      </section>

      {/* The Chair */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Chair Information
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            The Chair
          </h2>
          
          <div className="mb-12 rounded-lg border border-border bg-muted/30 p-8">
            <p className="text-base font-medium text-foreground">
              The Chair is located at the Institute of African Studies at the University of Ghana, and is currently tenable for a period up to 12 months.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Qualifications */}
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Qualifications
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                The occupant of the Chair is a scholar or public figure who has attained distinction in his/her discipline or public affairs as evidenced in:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  An extensive publication record
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Public recognition of contributions to the academy and public life
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  A broad extra-mural record
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  A commitment to scholarship or public service in any field, including the arts, social and natural sciences, that advance knowledge of and in Africa
                </li>
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Responsibilities
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                During tenure, the occupant will be expected to:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Deliver public lectures and addresses
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Conduct research
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Liaise with scholars in Ghana and Africa
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Produce a publishable manuscript on research
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Prepare a report detailing results achieved at the end of tenure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Support and Benefits
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Terms
          </h2>
          <p className="mb-8 text-base text-muted-foreground">
            The occupant will be provided with:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Return Business Class Ticket
              </h3>
              <p className="text-sm text-muted-foreground">
                Return business class ticket from location to Accra, as applicable
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Office Accommodation
              </h3>
              <p className="text-sm text-muted-foreground">
                Office accommodation including a computer and printer
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Research Support
              </h3>
              <p className="text-sm text-muted-foreground">
                The services of a research assistant and necessary secretarial services
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="mb-2 font-semibold text-foreground">
                Living Expenses
              </h3>
              <p className="text-sm text-muted-foreground">
                Accommodation, medical insurance and local living expenses
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6 md:col-span-2">
              <h3 className="mb-2 font-semibold text-foreground">
                Research Grant
              </h3>
              <p className="text-sm text-muted-foreground">
                A research grant to support scholarly activities and research initiatives
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
