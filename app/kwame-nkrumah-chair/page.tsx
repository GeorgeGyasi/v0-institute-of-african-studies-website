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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                About the Chair
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground text-balance">
                Advancing the Vision of African Unity and Scholarship
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The Kwame Nkrumah Chair in African Studies was established to
                  honour the vision and legacy of Ghana{"'"}s first President, Dr.
                  Kwame Nkrumah, who founded the Institute of African Studies in
                  1961 as part of his broader programme of African intellectual
                  and cultural renaissance.
                </p>
                <p>
                  The Chair serves as a prestigious academic position dedicated
                  to advancing research, teaching, and public engagement on
                  themes central to Nkrumah{"'"}s vision: pan-Africanism, African
                  unity, decolonisation, and the transformation of knowledge
                  production about Africa.
                </p>
                <p>
                  Through its programmes and activities, the Chair fosters
                  dialogue between scholars, policymakers, and civil society on
                  the most pressing issues facing the African continent, while
                  nurturing the next generation of African Studies scholars.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/research.jpg"
                alt="Kwame Nkrumah Chair academic activities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Programmes
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Key Activities
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex gap-5 rounded-lg border border-border bg-background p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <activity.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {activity.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Holders */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Distinguished Holders
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Past Chair Holders
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pastHolders.map((holder) => (
              <div
                key={holder.name}
                className="rounded-lg border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {holder.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {holder.period}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {holder.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
