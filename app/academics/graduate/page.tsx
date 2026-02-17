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

      {/* Curriculum Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Curriculum
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Graduate Programme Courses
            </h2>
          </div>

          <div className="space-y-12">
            {/* Programme Overview */}
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Programme Overview
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                The graduate programme in African Studies aims to foster critical thinking among students and equip them with the resources, tools, and methods for an enhanced understanding of issues pertinent to African cultures and societies. All students are admitted on an MA basis, and those who excel in the first-year coursework continue as M.Phil students. MA and M.Phil students take the same courses, except for Seminar II (AFST 650), which is offered to M.Phil students in the second year.
              </p>
            </div>

            {/* Core Courses */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Core Courses
              </h3>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Course Code
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Course Title
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Credits
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        AFST 601
                      </td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        Research Methods
                      </td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        4
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        AFST 613
                      </td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        Social and Political Systems in Africa
                      </td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        3
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* First Semester Electives */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                First Semester Elective Courses
              </h3>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Course Code
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Course Title
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Credits
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AFST 603", "Theories of Development in Africa", "3"],
                      ["AFST 605", "Government and Politics in Early Post Independent Africa", "3"],
                      ["AFST 607", "Africa Oral Literature: An Introduction", "3"],
                      ["AFST 609", "Drama in African Societies", "3"],
                      ["AFST 611", "African Literary Traditions", "3"],
                      ["AFST 615", "Traditional Religions in Africa", "3"],
                      ["AFST 617", "Traditional African Music", "3"],
                      ["AFST 621", "African Historiography and Methodology", "3"],
                      ["AFST 623", "The Slave Trade and Africa", "3"],
                      ["AFST 625", "Coastal States in Ghana in the Seventeenth Century", "3"],
                      ["AFST 631", "Culture and Gender in African Studies", "3"],
                      ["AFST 633", "Survey of African Art", "3"],
                      ["AFST 641", "African Family Studies", "3"],
                    ].map(([code, title, credits]) => (
                      <tr key={code} className="border-b border-border">
                        <td className="px-6 py-3 text-sm text-muted-foreground">
                          {code}
                        </td>
                        <td className="px-6 py-3 text-sm text-muted-foreground">
                          {title}
                        </td>
                        <td className="px-6 py-3 text-sm text-muted-foreground">
                          {credits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Semester Electives */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Second Semester Elective Courses
              </h3>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Course Code
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Course Title
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Credits
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AFST 602", "Advanced Research Methods", "3"],
                      ["AFST 604", "Issues in African Development", "3"],
                      ["AFST 606", "The Military in African Politics", "3"],
                      ["AFST 608", "Topics in African Oral Literature", "3"],
                      ["AFST 610", "African Theatre", "3"],
                      ["AFST 612", "Trends in African Literature", "3"],
                      ["AFST 616", "Islam and Christianity in Africa", "3"],
                      ["AFST 618", "African Music in Contemporary Perspective", "3"],
                      ["AFST 622", "Ghana since 1945", "3"],
                      ["AFST 624", "History of Pan-Africanism", "3"],
                      ["AFST 626", "Colonial Rule and African Responses", "3"],
                      ["AFST 632", "Gender and Development in African Studies", "3"],
                      ["AFST 634", "Methodologies for Constructing Art History in African Societies", "3"],
                      ["AFST 636", "Rural Development, Environment and Modernity in Africa", "3"],
                    ].map(([code, title, credits]) => (
                      <tr key={code} className="border-b border-border">
                        <td className="px-6 py-3 text-sm text-muted-foreground">
                          {code}
                        </td>
                        <td className="px-6 py-3 text-sm text-muted-foreground">
                          {title}
                        </td>
                        <td className="px-6 py-3 text-sm text-muted-foreground">
                          {credits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Seminars and Credit Requirements */}
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Seminar Presentations
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  All MA/M.Phil students are required to participate actively in Institute seminars, including making presentations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span className="text-sm text-muted-foreground">
                      <strong>AFST 640:</strong> Seminar I (First Semester)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span className="text-sm text-muted-foreground">
                      <strong>AFST 650:</strong> Seminar II (M.Phil students only, Second Semester)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Degree Credit Requirements
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      Master of Arts (MA)
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Course Work: 25 credits</li>
                      <li>Seminar: 3 credits</li>
                      <li>Dissertation: 12 credits</li>
                      <li className="border-t border-border pt-2 font-semibold">
                        Total: 40 credits
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      Master of Philosophy (M.Phil)
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Course Work: 25 credits</li>
                      <li>Seminar I: 3 credits</li>
                      <li>Seminar II: 3 credits</li>
                      <li>Thesis: 30 credits</li>
                      <li className="border-t border-border pt-2 font-semibold">
                        Total: 61 credits
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
