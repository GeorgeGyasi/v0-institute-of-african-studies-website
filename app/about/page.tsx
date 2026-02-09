import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { GraduationCap, BookOpen, Handshake, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Institute of African Studies at the University of Ghana, its history, mission, and leadership.",
}

const values = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "We maintain rigorous scholarly standards in all our research, teaching, and publications, upholding the highest traditions of academic inquiry.",
  },
  {
    icon: BookOpen,
    title: "Interdisciplinary Approach",
    description:
      "Our work bridges disciplines including anthropology, sociology, linguistics, political science, history, and the arts to provide holistic understanding.",
  },
  {
    icon: Handshake,
    title: "Community Engagement",
    description:
      "We actively engage with communities across Ghana and Africa, ensuring our research remains relevant and contributes to societal development.",
  },
  {
    icon: Award,
    title: "Cultural Preservation",
    description:
      "We are committed to documenting, preserving, and promoting the rich cultural heritage of Africa for present and future generations.",
  },
]

const leadership = [
  {
    name: "Prof. Akosua Adomako Ampofo",
    role: "Director",
    specialty: "Gender Studies & Social Transformation",
  },
  {
    name: "Dr. Kodzo Gavua",
    role: "Deputy Director",
    specialty: "Archaeology & Heritage Studies",
  },
  {
    name: "Prof. Irene K. Odotei",
    role: "Senior Research Fellow",
    specialty: "History & Maritime Studies",
  },
  {
    name: "Dr. Wazi Apoh",
    role: "Senior Lecturer",
    specialty: "Historical Archaeology",
  },
]

const timeline = [
  { year: "1961", event: "Institute established by the Government of Ghana under the leadership of Dr. Kwame Nkrumah" },
  { year: "1963", event: "First cohort of graduate students admitted to the MPhil program" },
  { year: "1967", event: "Launch of the Research Review journal, now a flagship academic publication" },
  { year: "1976", event: "Expansion of the archival collection with major ethnographic donations" },
  { year: "1995", event: "Establishment of the doctoral program in African Studies" },
  { year: "2010", event: "Digital archiving initiative launched to preserve cultural materials" },
  { year: "2020", event: "Virtual research collaborations expanded with universities across three continents" },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the Institute"
        subtitle="A legacy of African scholarship spanning over six decades"
      />

      {/* History */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Our History
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                <span className="text-balance">
                  Founded in the Spirit of Pan-Africanism
                </span>
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  The Institute of African Studies was established in 1961 by the
                  Government of Ghana, under the visionary leadership of President
                  Kwame Nkrumah. It was conceived as a centre of excellence for
                  the study of African societies, cultures, and histories.
                </p>
                <p>
                  As one of the earliest dedicated African Studies institutes on
                  the continent, it has played a pioneering role in shaping
                  academic discourse on Africa from an African perspective. The
                  Institute houses significant archival collections, including
                  photographs, manuscripts, and cultural artifacts.
                </p>
                <p>
                  Today, it continues to serve as a vital hub for interdisciplinary
                  research, graduate education, and public engagement on issues
                  critical to Africa&apos;s development and cultural heritage.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/about.jpg"
                alt="IAS research library and scholars"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Milestones
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Key Moments in Our History
          </h2>
          <div className="relative">
            <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />
            <div className="flex flex-col gap-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-6">
                  <div className="hidden items-center gap-4 md:flex">
                    <div className="h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">{item.year}</p>
                    <p className="mt-1 text-base text-muted-foreground">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Values
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            What Guides Our Work
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-border bg-card p-6">
                <value.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Leadership
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Faculty & Administration
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <div key={person.name} className="rounded-lg border border-border bg-background p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {person.role}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {person.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
