import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Award, BookOpen, Users, Globe, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Kwame Nkrumah Chair",
  description:
    "The Kwame Nkrumah Chair in African Studies at the Institute of African Studies, University of Ghana.",
}

const activities = [
  {
    icon: BookOpen,
    title: "Annual Lecture Series",
    description:
      "A flagship public lecture series featuring internationally acclaimed scholars addressing critical issues in African Studies, pan-Africanism, and continental development.",
  },
  {
    icon: Users,
    title: "Visiting Scholars Programme",
    description:
      "The Chair hosts distinguished visiting scholars from across Africa and the diaspora, fostering intellectual exchange and collaborative research projects.",
  },
  {
    icon: Globe,
    title: "Research Initiatives",
    description:
      "Supports cutting-edge research on pan-Africanism, decolonisation, African political thought, and the intellectual legacy of Kwame Nkrumah and his contemporaries.",
  },
  {
    icon: Award,
    title: "Graduate Fellowships",
    description:
      "Provides competitive fellowships and mentorship to outstanding graduate students whose research aligns with the Chair's focus on African political and intellectual history.",
  },
]

const pastHolders = [
  {
    name: "Prof. Ama Ata Aidoo",
    period: "2010 - 2013",
    focus: "Literature, Gender, and Pan-Africanism",
  },
  {
    name: "Prof. Akilagpa Sawyerr",
    period: "2013 - 2016",
    focus: "Higher Education and Development",
  },
  {
    name: "Prof. Kwesi Yankah",
    period: "2016 - 2019",
    focus: "Oral Traditions and Cultural Communication",
  },
]

export default function KwameNkrumahChairPage() {
  return (
    <>
      <PageHeader
        title="Kwame Nkrumah Chair"
        subtitle="Honouring the legacy of Africa's foremost champion of pan-Africanism"
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Historical Background
          </p>
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground text-balance">
            Establishment and Vision
          </h2>
          <div className="max-w-4xl space-y-6 text-base leading-relaxed text-muted-foreground">
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
      </section>

      {/* Nkrumah's Legacy */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Pan-Africanism
          </p>
          <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
            Nkrumah{"'"}s Intellectual Legacy
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

      {/* The Chair Details */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Position Details
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            The Chair
          </h2>
          <div className="rounded-lg border border-border bg-card p-8 mb-8">
            <p className="mb-4 text-base text-muted-foreground">
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
                  Public recognition of his/her contributions to the academy and public life
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  A broad extra-mural record
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  A commitment to scholarship or public service in any field, including the arts, social and natural sciences, that advance knowledge of, and in, Africa
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
                During his/her tenure, the occupant will be expected to:
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
                  Produce a publishable manuscript on his/her research
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Prepare a report detailing the results achieved at the end of the tenure period
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Support */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Benefits
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Terms and Support
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
                Return business class ticket from occupant{"'"}s location to Accra, as applicable
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

      {/* Chair Occupants */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Distinguished Scholars
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Chair Occupants
          </h2>

          <div className="space-y-8">
            {/* First Occupant */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Professor Kofi Anyidoho
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    First Occupant (2012–2014)
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Discipline: Literature in English
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Trained as a professional teacher at Accra Training College and Advanced Teacher Training College-Winneba, Professor Anyidoho taught at primary, middle, and secondary school levels before joining the University faculty. Outside the University, he has been deeply involved in various initiatives designed to promote African culture and history, including Ghana Television's African Heritage Series, for which he was the main host and executive producer. He holds a B.A. Honours in English and Linguistics from the University of Ghana, an M.A. in Folklore from Indiana University-Bloomington, and a Ph.D. in Comparative Literature from the University of Texas at Austin.
                </p>
              </div>
            </div>

            {/* Second Occupant */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Professor Patrick Wilmot
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    Second Occupant (2014–2016)
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Discipline: African Politics and International Relations
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Professor Wilmot is an expert in African politics and international relations, with extensive research and scholarly work on pan-African movements and continental integration. His work has contributed significantly to scholarly debates on African unity, decolonisation, and political governance across the continent.
                </p>
              </div>
            </div>

            {/* Third Occupant */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Professor Horace G. Campbell
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    Third Occupant (2020–2021)
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Discipline: African American Studies and Political Science
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Professor Campbell is a scholar of African American Studies and Political Science at Syracuse University with a focus on African liberation movements and contemporary African geopolitics. His influential works include Global NATO and the Catastrophic Failure in Libya: Lessons for Africa in the Forging of African Unity, which examines the critical challenges facing the continent and the importance of African self-determination in an interconnected world.
                </p>
              </div>
            </div>

            {/* Current/Fourth Occupant */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Professor Amina Mama
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    Fourth Occupant (2021–2025)
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Discipline: Gender and Sexuality Studies
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Professor Mama is a gender and sexuality scholar who has been Research Professor of Gender, Sexuality and Women's Studies at the University of California, Davis since 2009. Previously, she held the Barbara Lee Distinguished Chair in Women's Leadership at Mills College in the USA (2007–2009) and served as Chair in Gender Studies and Director of the African Gender Institute at the University of Cape Town, South Africa (1999–2009). Beyond her academic positions, Professor Mama has been engaged in independent research, consultancy, and professional services in Africa, Europe, the United States, and within the United Nations system, bringing her considerable expertise in feminist scholarship and African knowledge production to the Chair.
                </p>
              </div>
            </div>

            {/* Newly Appointed Occupant */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Ato Quayson
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    Newly Appointed (2026–)
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Discipline: English, African and American Studies
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Ato Quayson is an accomplished scholar in English, African, and American Studies. His intellectual work bridges literary analysis with critical engagements on African identity, cultural production, and global interconnections. Beginning his tenure in 2026, he joins the distinguished lineage of Kwame Nkrumah Chair occupants, bringing fresh perspectives on African knowledge systems and contemporary African scholarship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
