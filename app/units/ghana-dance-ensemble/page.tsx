import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Music, Users, Calendar, MapPin, Award, Play, ChevronDown, ArrowRight } from "lucide-react"
import { gdeDirectors } from "@/lib/gde-directors"

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

const pioneers = [
  { name: "Matilda Attiane" },
  { name: "Patience Abena Kwakwa" },
  { name: "Hilda Sowa" },
  { name: "Helen Mensah" },
  { name: "Edna Mensah" },
  { name: "Beatrice Addo" },
  { name: "Emmerentia Tamakloe" },
  { name: "Lilly Acquah-Harrison" },
  { name: "Victor Clottey" },
  { name: "Thomas Ekow Adi" },
  { name: "William Ofotsu Adinku" },
  { name: "Frank Kwasi Mensah" },
  { name: "Emmanuel Ampofo Duodu" },
  { name: "Godfrey Odokwei Sackeyfio", note: "(joined 1963)" },
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
                  A highly successful collaboration between the
                  Government&apos;s Institute of Arts and Culture and the
                  Institute of African Studies, University of Ghana, created the
                  Ghana Dance Ensemble in October 1962 &mdash; now celebrating
                  its 60th anniversary. From its inception, the Ensemble was to
                  be Ghana&apos;s flagship for the professional, worldwide
                  promotion of the music and dance heritage of Ghana, undergirded
                  by solid fieldwork and experimental research.
                </p>
                <p>
                  The Ensemble has a tradition of identifying young, talented
                  artistes with mastery of particular dance forms from different
                  parts of the country and training them to express a dazzling
                  variety of dances. Many of these dancers have gone on to set up
                  their own companies or worked with companies all over the
                  world.
                </p>
                <p>
                  The directors of the Ensemble have transformed dance in the
                  everyday lives of Ghanaians into stage presentations. The
                  handiwork of Professor Mawere Opoku, the first Director, was
                  characterized by just enough choreography to showcase the
                  classic movements of heritage dances. Professor Nii Yartey, his
                  successor, explored the dance vocabulary to dialogue with dance
                  cultures from other parts of the world, bringing the Ensemble
                  into the area of contemporary dance. Subsequent successors
                  &mdash; Mr. Emmanuel Ampofo Duodu, Mr. Ohh! Nii Kwei Sowah, Dr.
                  Benjamin Obido Ayettey and Dr. Moses Nii Dortey &mdash;
                  contributed in diverse ways to advance the repertoire of the
                  GDE. Today, in the hands of Dr. Aristedes Narh Hargoe, the
                  Ensemble maintains the discipline of the early classics while
                  continuing to expand its repertoire and explore dance as an
                  expression of contemporary issues, reinvigorated with a renewed
                  sense of dynamism.
                </p>
                <p>
                  Together with the Ballet Africain of Guinea Conakry in the
                  1960s and 70s, the Ghana Dance Ensemble gave the world a
                  breath-taking aper&ccedil;u of African aesthetics and cultures
                  from the perspective of Africans. The Ensemble has served as a
                  model for a variety of amateur groups in Ghana and provided the
                  core artistes for the National Dance Company.
                </p>
                <p>
                  The Ensemble&apos;s broad mandate led to a decision to spawn
                  the National Dance Company, with a core membership based at the
                  National Theatre of Ghana, which caters for numerous national
                  assignments. The research, teaching and experimental emphases
                  continue to underline the work of the Ensemble at the Institute
                  of African Studies, where thousands of Ghanaian and
                  non-Ghanaian students and lovers of African dance and music
                  have been introduced to the unforgettable dance culture of
                  Ghana. The Ghana Dance Ensemble stands as an institution
                  established to conserve the exquisite, rich heritage of
                  Ghana&apos;s dance cultures and the exhilarating creativity
                  engendered by the essence of Ghanaian dance.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/ghana-dance-ensemble-archive.png"
                alt="Archival photograph of the Ghana Dance Ensemble in an early rehearsal session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* GDE @ 60 - Pioneer Members */}
          <div className="mt-16 rounded-lg border border-border bg-card p-8 lg:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Ghana Dance Ensemble @ 60
            </p>
            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground text-balance">
              Honouring the Fourteen Pioneers
            </h3>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Sixty years on, the Ensemble reflects on the gains and sacrifices
              of the past, led by its thirteen pioneer members &mdash; joined in
              1963 by a fourteenth. Even as it honours this legacy, the GDE is
              rebranding to remain relevant as a national dance ensemble of the
              21st century, positioned to serve the contemporary needs of both
              academia and industry.
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
              {pioneers.map((pioneer) => (
                <li
                  key={pioneer.name}
                  className="flex items-baseline gap-2 text-sm text-foreground"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>
                    {pioneer.name}
                    {pioneer.note ? (
                      <span className="text-muted-foreground">
                        {" "}
                        {pioneer.note}
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
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
          {gdeDirectors
            .filter((director) => director.current)
            .map((director) => (
              <Link
                key={director.slug}
                href={`/units/ghana-dance-ensemble/directors/${director.slug}`}
                className="group mb-6 flex max-w-2xl flex-col gap-1 rounded-lg border border-border bg-muted/40 p-6 transition-colors hover:border-primary/40 hover:bg-muted/60 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    Current Director
                  </p>
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary">
                    {director.name}
                  </h3>
                </div>
                <span className="flex items-center gap-2 text-sm font-medium text-primary">
                  {director.tenure}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}

          {/* Past directors - collapsible */}
          <details className="group max-w-2xl">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg border border-border px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted/60">
              <span>Past Directors (1962 – 2019)</span>
              <ChevronDown
                className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <ol className="relative ml-2 mt-8 border-l border-border pl-8">
              {gdeDirectors
                .filter((director) => !director.current)
                .map((director) => (
                  <li key={director.slug} className="mb-8 last:mb-0">
                    <span
                      className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-secondary ring-4 ring-background"
                      aria-hidden="true"
                    />
                    <Link
                      href={`/units/ghana-dance-ensemble/directors/${director.slug}`}
                      className="group -my-1 flex flex-col gap-x-3 gap-y-0.5 rounded-md py-1 transition-colors sm:flex-row sm:items-baseline"
                    >
                      <h3 className="font-semibold text-foreground underline-offset-4 group-hover:text-primary group-hover:underline">
                        {director.name}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground">
                        {director.tenure}
                      </span>
                    </Link>
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
