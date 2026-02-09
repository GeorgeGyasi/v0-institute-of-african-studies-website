import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Music, Users, Calendar, MapPin, Award, Play } from "lucide-react"

export const metadata: Metadata = {
  title: "Ghana Dance Ensemble",
  description:
    "The Ghana Dance Ensemble at the Institute of African Studies, University of Ghana - a premier performing arts company.",
}

const highlights = [
  {
    icon: Music,
    label: "Performances",
    value: "200+",
    description: "Annual performances and workshops",
  },
  {
    icon: Users,
    label: "Members",
    value: "40+",
    description: "Professional dancers and musicians",
  },
  {
    icon: Calendar,
    label: "Founded",
    value: "1962",
    description: "One of Africa's oldest ensembles",
  },
  {
    icon: Award,
    label: "Tours",
    value: "30+",
    description: "International tours worldwide",
  },
]

const repertoire = [
  {
    title: "Agbadza",
    origin: "Ewe",
    description:
      "A social and recreational dance from the Volta Region, performed to express communal unity and celebrate life events.",
  },
  {
    title: "Adowa",
    origin: "Akan",
    description:
      "A graceful funeral and ceremonial dance of the Akan people, characterised by hand movements that tell stories.",
  },
  {
    title: "Kpanlogo",
    origin: "Ga",
    description:
      "A popular recreational dance from the Greater Accra Region, blending traditional and contemporary movement styles.",
  },
  {
    title: "Bamaya",
    origin: "Dagbani",
    description:
      "A social dance from the Northern Region, originally performed to celebrate the end of drought and give thanks for rain.",
  },
  {
    title: "Fontomfrom",
    origin: "Akan",
    description:
      "A royal court dance of the Akan, traditionally performed at the courts of paramount chiefs during festivals.",
  },
  {
    title: "Gahu",
    origin: "Ewe",
    description:
      "A lively social dance from the Volta Region that showcases the intricate polyrhythmic drumming traditions of the Ewe people.",
  },
]

export default function GhanaDanceEnsemblePage() {
  return (
    <>
      <PageHeader
        title="Ghana Dance Ensemble"
        subtitle="Preserving and promoting the rich performing arts traditions of Ghana and Africa"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                About the Ensemble
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground text-balance">
                {"Africa's"} Premier Dance Company
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The Ghana Dance Ensemble was established in 1962 as a
                  professional performing arts company of the Institute of
                  African Studies, University of Ghana. Founded under the
                  direction of Professor Albert Mawere Opoku and Professor J.H.
                  Kwabena Nketia, the Ensemble was created to research, preserve,
                  and promote the traditional and contemporary performing arts
                  of Ghana and Africa.
                </p>
                <p>
                  Over six decades, the Ensemble has become one of the most
                  respected and celebrated dance companies on the African
                  continent. Its repertoire draws from the diverse ethnic groups
                  and cultural traditions of Ghana, showcasing the richness and
                  complexity of African performing arts.
                </p>
                <p>
                  The Ensemble has performed extensively both within Ghana and
                  internationally, representing the country at major cultural
                  festivals, state events, and academic conferences across
                  Africa, Europe, the Americas, and Asia.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/archive-5.jpg"
                alt="Ghana Dance Ensemble performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repertoire */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Performance Repertoire
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Traditional Dances
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repertoire.map((dance) => (
              <div
                key={dance.title}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10">
                    <Play className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary">
                      {dance.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {dance.origin} tradition
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {dance.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="border-t border-border bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-primary-foreground">
            Experience the Ghana Dance Ensemble
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
            The Ensemble performs regularly at the Institute of African Studies
            and at events across the University of Ghana campus. Contact us for
            performance schedules and booking enquiries.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <MapPin className="h-4 w-4" />
            School of Performing Arts, University of Ghana, Legon
          </div>
        </div>
      </section>
    </>
  )
}
