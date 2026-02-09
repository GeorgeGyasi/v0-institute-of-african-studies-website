import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Director's Message",
  description:
    "A message from the Director of the Institute of African Studies, University of Ghana.",
}

export default function DirectorsMessagePage() {
  return (
    <>
      <PageHeader
        title="Director's Message"
        subtitle="A word from the leadership of the Institute"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            {/* Director Profile Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-lg border border-border bg-card p-8">
                <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-3xl font-bold text-primary">AAA</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Prof. Akosua Adomako Ampofo
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  Director
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Institute of African Studies
                </p>
                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Gender Studies",
                      "Social Transformation",
                      "Identity Politics",
                      "Qualitative Methods",
                    ].map((area) => (
                      <span
                        key={area}
                        className="rounded-sm bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10">
                <Quote className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
                <p className="text-lg font-medium text-foreground">
                  Dear colleagues, students, and friends of the Institute of
                  African Studies,
                </p>
                <p>
                  It is my great privilege to welcome you to the Institute of
                  African Studies at the University of Ghana, Legon. As one of
                  the oldest and most distinguished African Studies institutions
                  on the continent, we carry forward a legacy of scholarly
                  excellence that began in 1961 under the visionary leadership
                  of Ghana's first President, Kwame Nkrumah.
                </p>
                <p>
                  Our founding mandate was to study and document the totality
                  of African life and culture. More than six decades later, that
                  mandate remains as relevant as ever. In an era of rapid
                  globalisation and technological transformation, the need to
                  understand African societies on their own terms, through their
                  own epistemological frameworks, has never been more pressing.
                </p>
                <p>
                  At the Institute, we are committed to producing knowledge that
                  not only meets the highest international academic standards but
                  also speaks directly to the lived realities of African peoples.
                  Our interdisciplinary approach brings together scholars from
                  anthropology, sociology, linguistics, political science,
                  history, archaeology, and the performing arts to address the
                  complex challenges facing our continent.
                </p>
                <p>
                  Our graduate programmes continue to attract some of the
                  brightest minds from across Africa and beyond. We are
                  particularly proud of our efforts to mentor the next generation
                  of African Studies scholars who will carry this important work
                  forward into the future.
                </p>
                <p>
                  The Institute also houses invaluable archival collections
                  including photographs, manuscripts, audio-visual materials,
                  and cultural artifacts that document the richness of African
                  cultural heritage. We are actively engaged in digitising these
                  collections to ensure wider access for researchers and the
                  public.
                </p>
                <p>
                  I invite you to explore our website, learn about our research
                  programmes, browse our publications, and discover the wealth
                  of knowledge that the Institute of African Studies has to
                  offer. Whether you are a prospective student, a fellow
                  researcher, a policy maker, or simply someone interested in
                  African societies and cultures, there is something here for
                  you.
                </p>
                <p className="text-foreground">
                  Welcome to the Institute of African Studies.
                </p>
                <div className="mt-4 border-t border-border pt-6">
                  <p className="font-semibold text-foreground">
                    Prof. Akosua Adomako Ampofo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Director, Institute of African Studies
                  </p>
                  <p className="text-sm text-muted-foreground">
                    University of Ghana, Legon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
