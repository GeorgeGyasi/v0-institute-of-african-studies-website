import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionNavigation } from "@/components/section-navigation"

export const metadata: Metadata = {
  title: "Language, Literature and Drama",
  description:
    "The Language, Literature and Drama section of the Institute of African Studies explores African languages, literary traditions, and dramatic arts.",
}

export default function LanguageLiteratureDramaPage() {
  const staffMembers = [
    { name: "Dr. Ọbádélé Kambon", role: "Research Coordinator" },
    { name: "Prof. Esi Sutherland-Addy", role: "Professor" },
    { name: "Dr. Edward Nanbigne", role: "Senior Researcher" },
    { name: "Dr. Mercy Akrofi Ansah", role: "Researcher" },
  ]

  const graduateCourses = {
    mphil: [
      "African Literary Traditions",
      "Trends in African Literature",
      "Topics in Oral Literature",
      "Drama in Africa",
      "Theatre in Africa",
    ],
    phd: [
      "African Women Speak",
      "Special Topics in African Oral Literature",
      "African Theatre: The Classical and the Popular",
      "Critical Perspectives in Performance Theory",
      "Academic Writing",
    ],
  }

  const newCourses = [
    "Connections between Ancient Egyptian Hieroglyphs and Contemporary African Languages",
    "African Languages in Development and Practice",
    "Fieldwork for African Languages",
    "Africa and Language Endangerment",
    "Readings in Ancient Egyptian Hieroglyphs",
    "Intro to Performance Studies",
    "Children's Literature in Africa",
  ]

  const undergraduateCourses = [
    "African Drama",
    "Our African Heritage Through Literature",
    "Dagbani",
    "Eʋe",
    "Ga",
    "Asante Twi",
  ]

  const researchProjects = [
    {
      title: "Oral Traditions and Expressive Diversity",
      description:
        "A Research, Documentation and Archival Project investigating oral narratives: fictional, historical, and sociological. Funded by Mellon Foundation.",
    },
    {
      title: "IAS Biographies Project",
      description:
        "Documents the lives and times of 7 Outstanding Ghanaian personalities who have excelled in their various fields and contributed to Ghana's development.",
    },
  ]

  const extensionActivities = [
    "Study group on Ancient Egyptian Hieroglyphs",
    "IAS Film Series",
    "Black History Month Film Festival",
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/about/sections-units"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sections
        </Link>

        <PageHeader
          title="Language, Literature and Drama"
          subtitle="Exploring African languages, literary traditions, and dramatic arts"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Language, Literature, and Drama section is composed of Dr. Ọbádélé Kambon (Research Coordinator), Prof. Esi Sutherland-Addy, Dr. Edward Nanbigne, and Dr. Mercy Akrofi Ansah. Our section offers graduate and undergraduate courses based on rigorous research in African languages, literature, and drama, fulfilling the mandate of the Institute of African Studies.
              </p>
            </section>

            {/* Graduate Level Courses */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Graduate Level Courses</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">MPhil Courses</h4>
                  <ul className="space-y-2">
                    {graduateCourses.mphil.map((course) => (
                      <li key={course} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">PhD Courses</h4>
                  <ul className="space-y-2">
                    {graduateCourses.phd.map((course) => (
                      <li key={course} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* New Courses */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">New Courses on the Horizon</h3>
              <p className="text-sm text-muted-foreground mb-3">Expanding our course offerings in less-researched languages, Kemetology, and African literature:</p>
              <ul className="space-y-2">
                {newCourses.map((course) => (
                  <li key={course} className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-muted-foreground">{course}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Undergraduate Courses */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Undergraduate Level Courses</h3>
              <p className="text-sm text-muted-foreground mb-3">Language proficiency and literature courses include:</p>
              <ul className="space-y-2">
                {undergraduateCourses.map((course) => (
                  <li key={course} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{course}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Research Projects */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Ongoing Research Projects</h3>
              <div className="space-y-4">
                {researchProjects.map((project) => (
                  <div key={project.title} className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
                <p className="text-sm text-muted-foreground mt-4">
                  On an individual level, section members are currently working on dozens of projects. For more information, please consult individual researcher pages on the IAS website.
                </p>
              </div>
            </section>

            {/* Extension Activities */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Extension Activities</h3>
              <ul className="space-y-2">
                {extensionActivities.map((activity) => (
                  <li key={activity} className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-muted-foreground">{activity}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Supervision */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Student Supervision</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                The section currently supervises MPhil and PhD students, contributing to institutional capacity-building and ensuring that the next generation of African scholars has a solid foundation in their research areas of interest.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="rounded-lg border border-border bg-card p-6">
                <SectionNavigation />
              </div>

              {/* Staff Members */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Section Members</h3>
                <div className="space-y-4">
                  {staffMembers.map((member) => (
                    <div key={member.name}>
                      <p className="font-semibold text-foreground text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Focus Areas */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Key Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-sm text-muted-foreground">African Languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-sm text-muted-foreground">Literary Traditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-sm text-muted-foreground">Oral Narratives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-sm text-muted-foreground">Theatre & Performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-sm text-muted-foreground">Language Preservation</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
