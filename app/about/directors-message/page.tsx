import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Director's Message",
  description:
    "A message from the Director of the Institute of African Studies, Professor Samuel Aniegye Ntewusu.",
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
                <div className="mb-8 flex justify-center">
                  <div className="relative h-64 w-64 overflow-hidden rounded-lg">
                    <Image
                      src="/images/director.jpg"
                      alt="Professor Samuel Aniegye Ntewusu, Director of the Institute of African Studies"
                      fill
                      className="object-cover"
                      sizes="256px"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-foreground">
                    Prof. Samuel Aniegye Ntewusu
                  </h2>
                  <p className="mt-1 text-sm font-medium text-primary">
                    Director
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Institute of African Studies
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "African History",
                      "Cultural Heritage",
                      "Oral Traditions",
                      "Migration Studies",
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
                <p className="text-lg font-semibold text-foreground">
                  WELCOME MESSAGE FROM THE DIRECTOR
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Warm welcome to the Institute of African Studies (IAS), University of Ghana.
                </p>
                <p>
                  Founded in 1961 as a semi-autonomous institute within the University, IAS was
                  formally opened in October 1962 by Ghana{"'"}s first President, Osagyefo Dr.
                  Kwame Nkrumah, with a mandate to teach and conduct research on the peoples,
                  cultures, and heritage of Africa. Since then, IAS has been at the forefront of
                  African Studies pioneering research, innovative teaching and advocacy that
                  deepen understanding of Africa and its global diaspora.
                </p>
                <p>
                  Our strength lies in our commitment to academic excellence, innovation and
                  interdisciplinary research. We bring together scholars and students from diverse
                  backgrounds to engage in rigorous, multifaceted research that bridge theory and
                  practice. At IAS, our graduate programmes offer distinctive perspectives on
                  Africa{"'"}s history, culture, politics, and development - providing fertile
                  ground for critical thinking, creativity and ideas.
                </p>
                <p>
                  We are enriched by unique academic resources, including our specialised Library,
                  extensive Archives, vibrant Museum, and the renowned resident dance troupe
                  (Ghana Dance Ensemble), each offering transformative insights into Africa and
                  her people. Beyond the classroom, the Institute actively fosters collaborations
                  and partnerships with institutions, organisations and individuals worldwide -
                  shaping public discourse, influencing policy and contributing to scholarship
                  that matters.
                </p>
                <p>
                  As we expand our networks and intensify our work, our vision remains clear; to
                  be a global leader in scholarship on Africa and her Diaspora. Our mission is
                  equally resolute; to contribute to the regeneration of Africa and her peoples
                  through knowledge production, dissemination, application, and preservation.
                </p>
                <p>
                  I invite you to join us whether as a student, researcher, partner, or visitor
                  in this vibrant intellectual community. Here at IAS, you will find a place where
                  Africa{"'"}s past is honoured, its present critically examined, and its future
                  imaginatively appreciated.
                </p>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="font-semibold text-foreground">
                    Professor Samuel Aniegye Ntewusu
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Director, Institute of African Studies
                  </p>
                  <p className="text-sm text-muted-foreground">
                    University of Ghana
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
