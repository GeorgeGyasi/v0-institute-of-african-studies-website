import { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft } from "lucide-react"
import { SectionNavigation } from "@/components/section-navigation"

export const metadata: Metadata = {
  title: "Religions and Philosophy",
  description:
    "Explore the Religions and Philosophy section at the Institute of African Studies, investigating African religious systems, philosophies, and spiritual traditions.",
}

export default function ReligionsPhilosophyPage() {
  const faculty = [
    {
      name: "Rev. Dr. Grace Sintim Adasi",
      expertise: "African Religions and Christianity"
    },
    {
      name: "Dr. Genevieve Nrenzah",
      expertise: "African Religions"
    },
    {
      name: "Dr. Stephen Acheampong",
      expertise: "Philosophy and Religious Studies"
    },
    {
      name: "Dr. Chika Mba",
      expertise: "Religion and Social Issues"
    },
  ]

  const courses = {
    masters: [
      { semester: "First Semester", course: "Indigenous Religions of Africa" },
      { semester: "Second Semester", course: "Philosophy and Religion" },
    ],
    phd: [
      { semester: "First Semester", course: "Seminar in African Religions" },
      { semester: "Second Semester", course: "Topics in Contemporary African Philosophy" },
    ],
  }

  const research = [
    "African Traditional Religions",
    "Christianity and African Religions",
    "Islam in Africa",
    "African Philosophy",
    "Religion and Gender",
    "Religion and Development",
  ]

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        title="Religions and Philosophy"
        subtitle="Investigating African religious systems, philosophies, and spiritual traditions"
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/about/sections-units"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sections
        </Link>

        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  About the Section
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The Religions and Philosophy section investigates the nature of African religious systems, philosophies, and spiritual traditions. The section explores the dynamics between indigenous African religions and their interactions with foreign religions such as Christianity and Islam, while contributing to broader debates in religious and philosophical studies globally.
                </p>
              </div>

              {/* Courses */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Courses Offered
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Master's Level (MA, MPhil)</h3>
                    <ul className="space-y-2">
                      {courses.masters.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                          <div>
                            <span className="text-sm text-muted-foreground font-medium">{item.semester}: </span>
                            <span className="text-base text-muted-foreground">{item.course}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">PhD Level</h3>
                    <ul className="space-y-2">
                      {courses.phd.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                          <div>
                            <span className="text-sm text-muted-foreground font-medium">{item.semester}: </span>
                            <span className="text-base text-muted-foreground">{item.course}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Research Areas */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Research Areas
                </h2>
                <ul className="space-y-3">
                  {research.map((area, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-base text-muted-foreground">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            {/* Sidebar with Navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <div className="rounded-lg border border-border bg-card p-6">
                  <SectionNavigation />
                </div>

                {/* Faculty Members */}
                <div className="rounded-lg border border-border bg-card p-8">
                  <h3 className="text-lg font-bold text-foreground mb-6">Faculty Members</h3>
                  <div className="space-y-3">
                    {faculty.map((member) => (
                      <div key={member.name} className="pb-3 border-b border-border last:border-b-0 last:pb-0">
                        <p className="text-sm font-medium text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{member.expertise}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Research Areas */}
                <div className="rounded-lg border border-border bg-card p-8">
                  <h3 className="text-lg font-bold text-foreground mb-6">Key Research Areas</h3>
                  <ul className="space-y-2">
                    {[
                      "African Traditional Religions",
                      "Christianity in Africa",
                      "Islam in Africa",
                      "African Philosophy",
                      "Religion and Gender",
                      "Religion and Development",
                    ].map((area, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}
