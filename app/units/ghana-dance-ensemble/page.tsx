import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Music, Users, Calendar, MapPin, Award, Play, ChevronDown } from "lucide-react"

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

const directors = [
  { name: "Prof. Albert Mawere Opoku", tenure: "1962 – 1976" },
  { name: "Prof. Francis Nii Yartey", tenure: "1976 – 1992" },
  { name: "Mr. E. Ampofo Duodu", tenure: "1993 – 1997" },
  { name: "Mr. Oh! Nii Kwei Sowah", tenure: "1997 – 2002" },
  { name: "Dr. Benjamin Obido Ayettey", tenure: "2002 – 2015" },
  { name: "Dr. Moses Nii-Dortey", tenure: "2015 – 2019" },
  { name: "Dr. Aristedes Narh Hargoe", tenure: "2019 – Present", current: true },
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
                  Established in 1962 through a collaboration between the
                  Government&apos;s Institute of Arts and Culture and the
                  Institute of African Studies, University of Ghana, the Ghana
                  Dance Ensemble was created to be the country&apos;s flagship
                  for the professional, worldwide promotion of its music and
                  dance heritage, grounded in solid fieldwork and experimental
                  research.
                </p>
                <p>
                  The Ensemble has a tradition of identifying young, talented
                  artistes with mastery of particular dance forms from across the
                  country and training them to express a dazzling variety of
                  dances. Many of these dancers have gone on to set up their own
                  companies or work with companies all over the world.
                </p>
                <p>
                  Its directors have transformed everyday Ghanaian dance into
                  stage presentations. Professor Mawere Opoku used just enough
                  choreography to showcase the classic movements of heritage
                  dances; his successor, Professor Nii Yartey, explored dance
                  vocabulary in dialogue with cultures worldwide to bring the
                  Ensemble into contemporary dance. Today, under Dr. Aristides
                  Nene Narh Hargoe, it maintains the discipline of the early
                  classics while expanding its repertoire and exploring dance as
                  an expression of contemporary issues.
                </p>
                <p>
                  Alongside Guinea&apos;s Ballet Africain in the 1960s and 70s,
                  the Ensemble gave the world a breathtaking view of African
                  aesthetics from the perspective of Africans. It has served as a
                  model for amateur groups nationwide and spawned the National
                  Dance Company at the National Theatre of Ghana. Its research,
                  teaching, and experimental work continues at the Institute of
                  African Studies, standing to conserve Ghana&apos;s rich dance
                  heritage and the exhilarating creativity of Ghanaian dance.
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

      {/* Directors */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Artistic Leadership
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
            Directors Through the Years
          </h2>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Since its founding in 1962, the Ghana Dance Ensemble has been shaped
            by a distinguished line of artistic directors, each advancing its
            mission to research, preserve, and reimagine {"Ghana's"} performing
            arts traditions.
          </p>

          {/* Current director - always visible */}
          {directors
            .filter((director) => director.current)
            .map((director) => (
              <div
                key={director.name}
                className="mb-6 flex flex-col gap-1 rounded-lg border border-border bg-muted/40 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    Current Director
                  </p>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {director.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-primary">
                  {director.tenure}
                </span>
              </div>
            ))}

          {/* Past directors - collapsible */}
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg border border-border px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted/60">
              <span>Past Directors (1962 – 2019)</span>
              <ChevronDown
                className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <ol className="relative ml-2 mt-8 border-l border-border pl-8">
              {directors
                .filter((director) => !director.current)
                .map((director) => (
                  <li key={director.name} className="mb-10 last:mb-0">
                    <span
                      className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-secondary ring-4 ring-background"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-x-3 gap-y-0.5 sm:flex-row sm:items-baseline">
                      <h3 className="font-semibold text-foreground">
                        {director.name}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground">
                        {director.tenure}
                      </span>
                    </div>
                  </li>
                ))}
            </ol>
          </details>
        </div>
      </section>

      {/* Repertoire */}
      <section className="border-t border-border py-20">
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
