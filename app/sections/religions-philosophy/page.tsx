import Link from "next/link"
import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Religions and Philosophy",
  description:
    "The Religions and Philosophy Section researches and teaches the dynamics of indigenous religious cultures and philosophies in Africa.",
}

export default function ReligionsPhilosophyPage() {
  const faculty = [
    {
      name: "Rev. Dr. Grace Sintim Adasi",
      expertise: "African Religions"
    },
    {
      name: "Dr. Genevieve Nrenzah",
      expertise: "Philosophy and Religion"
    },
    {
      name: "Dr. Stephen Acheampong",
      expertise: "African Philosophy"
    },
    {
      name: "Dr. Chika Mba",
      expertise: "Religious Studies"
    },
  ]

  const courses = {
    postgraduate: [
      "African Traditional Religion",
      "Islam and Christianity in Africa",
      "Foundations of African Thought",
      "Religion and Politics in Africa",
    ],
    undergraduate: [
      "Culture and Development",
      "African Popular Culture: Traditional Festivals and Funeral Ceremonies",
      "Philosophy in African Cultures",
    ],
  }

  const researchAreas = [
    "Indigenous Religious Cultures",
    "African Philosophy",
    "Islam and Christianity in Africa",
    "New Religious Movements",
    "Religion and Society",
    "Religion and Development",
    "Gender and Religion",
    "Religion and Ethics",
  ]

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        title="Religions and Philosophy"
        subtitle="Researching African Religious Cultures and Philosophical Thought"
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <Link
          href="/about/sections-units"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sections
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                About the Section
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Religions and Philosophy Section of the Institute researches into, and teaches the dynamics of indigenous religious cultures and philosophies in Africa. It looks at how these religions affect society and how they are affected by society. The section studies religious change focusing on the emergence of foreign religions such as Islam and Christianity and their modes of spread and appropriation in Africa.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The section studies how Islam and mainstream Christianity and its offshoots, namely the New Religious Movements (African Independent Churches, Pentecostal and Charismatic churches) impact on the indigenous religions and cultures and vice versa, delineating as well the conflicts and co-existence of religions and cultures in contemporary Africa.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The section also examines religion and philosophy in relation to issues such as culture, development, politics, gender, ethics, health, healing and medicine. As a multidisciplinary section, its approaches reflect the expertise of its faculty, namely sociological, anthropological, philosophical and theological.
              </p>
            </div>

            {/* Postgraduate Courses */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Postgraduate Courses
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Some of the courses currently offered in the section for postgraduate students:
              </p>
              <ul className="space-y-2">
                {courses.postgraduate.map((course, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Undergraduate Courses */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Undergraduate Courses
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                The section is also involved in the teaching of courses at the undergraduate level:
              </p>
              <ul className="space-y-2">
                {courses.undergraduate.map((course, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Faculty Members */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Faculty Members
              </h2>
              <div className="grid gap-4">
                {faculty.map((member, index) => (
                  <div key={index} className="rounded-lg border border-border p-4">
                    <h4 className="font-semibold text-foreground">{member.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Research Activities
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Research fellows at the section are currently working on various research projects focused on the intersection of religion, philosophy, and contemporary African society. The section welcomes prospective students and collaborators both locally and internationally.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-lg border border-border p-6 bg-card">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                Key Research Areas
              </h3>
              <ul className="space-y-3">
                {researchAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
