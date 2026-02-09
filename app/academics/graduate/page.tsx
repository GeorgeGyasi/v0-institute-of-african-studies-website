import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BookOpen, Clock, Award, Users, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Graduate Programmes",
  description:
    "MPhil and PhD graduate programmes at the Institute of African Studies, University of Ghana.",
}

const programmes = [
  {
    degree: "MPhil in African Studies",
    duration: "2 Years",
    mode: "Full-time / Part-time",
    icon: BookOpen,
    description:
      "The Master of Philosophy in African Studies is a research-intensive programme that provides advanced training in the theories, methodologies, and substantive areas of African Studies. Students complete coursework in their first year and a research thesis in the second year.",
    areas: [
      "Culture & Society",
      "Governance & Politics",
      "Heritage & Archaeology",
      "Language & Communication",
      "Gender & Development",
      "Music & Performance",
    ],
    requirements: [
      "First degree in a relevant discipline (minimum Second Class Upper)",
      "Research proposal (2,000-3,000 words)",
      "Two academic references",
      "Official transcripts",
      "Personal statement",
    ],
  },
  {
    degree: "PhD in African Studies",
    duration: "3-5 Years",
    mode: "Full-time",
    icon: GraduationCap,
    description:
      "The Doctor of Philosophy in African Studies is the Institute's premier research degree, designed for scholars seeking to make original contributions to knowledge about African societies, cultures, and development. Candidates work closely with a supervisory committee to produce a doctoral thesis of publishable quality.",
    areas: [
      "Interdisciplinary African Studies",
      "Historical & Archaeological Research",
      "Socio-cultural Anthropology",
      "Ethno-linguistics",
      "Political Economy of Africa",
      "Diaspora Studies",
    ],
    requirements: [
      "MPhil or equivalent research Master's degree",
      "Detailed research proposal (5,000-8,000 words)",
      "Published or accepted academic work (preferred)",
      "Three academic references",
      "Interview with the admissions committee",
    ],
  },
]

export default function GraduatePage() {
  return (
    <>
      <PageHeader
        title="Graduate Programmes"
        subtitle="Advanced research degrees in African Studies"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Postgraduate Studies
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Shaping the Next Generation of African Scholars
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Institute of African Studies has been training graduate
              students since 1963, producing scholars who have gone on to
              distinguished careers in academia, policy, and cultural
              institutions across the continent and the world. Our graduate
              programmes combine rigorous academic training with intensive
              fieldwork and research mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16">
            {programmes.map((prog) => (
              <div
                key={prog.degree}
                className="rounded-lg border border-border bg-background p-8 lg:p-10"
              >
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                      <prog.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {prog.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {prog.duration} &middot; {prog.mode}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {prog.description}
                </p>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                      Research Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {prog.areas.map((area) => (
                        <span
                          key={area}
                          className="rounded-sm bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                      Entry Requirements
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {prog.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                          <span className="text-sm text-muted-foreground">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-lg font-medium text-foreground">
            Ready to pursue graduate studies in African Studies?
          </p>
          <Link
            href="/academics/prospective-students"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
