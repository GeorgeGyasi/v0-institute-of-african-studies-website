import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BookOpen, Clock, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Undergraduate Programmes",
  description:
    "Undergraduate academic programmes at the Institute of African Studies, University of Ghana.",
}

const courses = [
  {
    code: "AFST 101",
    title: "Introduction to African Studies",
    credits: 3,
    description:
      "A foundational course introducing students to the scope, methods, and key themes of African Studies as an academic discipline.",
  },
  {
    code: "AFST 201",
    title: "African Societies & Cultures",
    credits: 3,
    description:
      "Examines the diversity of social organisations, cultural practices, and belief systems across the African continent.",
  },
  {
    code: "AFST 202",
    title: "African History: Pre-Colonial to Modern",
    credits: 3,
    description:
      "A survey of major historical developments in Africa from the pre-colonial period through colonialism to independence and beyond.",
  },
  {
    code: "AFST 301",
    title: "African Languages & Oral Literature",
    credits: 3,
    description:
      "Studies the linguistic diversity of Africa, the structure of selected African languages, and the rich traditions of oral literature.",
  },
  {
    code: "AFST 302",
    title: "African Arts & Performance",
    credits: 3,
    description:
      "Explores visual arts, music, dance, and theatrical traditions across Africa, with attention to both traditional and contemporary forms.",
  },
  {
    code: "AFST 401",
    title: "Research Methods in African Studies",
    credits: 3,
    description:
      "Introduces qualitative and quantitative research methodologies relevant to African Studies, including fieldwork, archival research, and oral history.",
  },
]

const highlights = [
  { icon: Clock, label: "Duration", value: "4 Years" },
  { icon: BookOpen, label: "Courses", value: "24+ Modules" },
  { icon: Award, label: "Degree", value: "BA African Studies" },
  { icon: Users, label: "Cohort Size", value: "~60 Students" },
]

export default function UndergraduatePage() {
  return (
    <>
      <PageHeader
        title="Undergraduate Programmes"
        subtitle="Foundation courses in African Studies for bachelor's degree students"
      />

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Programme Overview
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                BA in African Studies
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  The Bachelor of Arts in African Studies provides students with a
                  comprehensive, interdisciplinary education in the study of
                  African societies, cultures, histories, and languages. The
                  programme draws on anthropology, sociology, history, linguistics,
                  political science, and the arts to offer a holistic understanding
                  of the African continent.
                </p>
                <p>
                  Students develop critical thinking, research, and communication
                  skills while engaging with Africa's rich intellectual traditions
                  and contemporary challenges. The programme prepares graduates for
                  careers in education, research, public policy, cultural
                  management, journalism, and international development.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-card p-5 text-center"
                >
                  <item.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="text-lg font-bold text-foreground">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Curriculum
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Selected Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.code}
                className="rounded-lg border border-border bg-background p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    {course.code}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {course.credits} credits
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-lg font-medium text-foreground">
            Interested in studying African Studies?
          </p>
          <Link
            href="/academics/prospective-students"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Admissions Information
          </Link>
        </div>
      </section>
    </>
  )
}
