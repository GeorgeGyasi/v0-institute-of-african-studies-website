import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BookOpen, Clock, Award, Users, ClipboardList, HelpCircle } from "lucide-react"

const programmes = [
  {
    code: "AFST 101",
    title: "Introduction to African Studies",
    credits: 3,
    description: "A foundational course introducing students to the scope, methods, and key themes of African Studies as an academic discipline.",
  },
  {
    code: "AFST 201",
    title: "African Societies & Cultures",
    credits: 3,
    description: "Examines the diversity of social organisations, cultural practices, and belief systems across the African continent.",
  },
  {
    code: "AFST 202",
    title: "African History: Pre-Colonial to Modern",
    credits: 3,
    description: "A survey of major historical developments in Africa from the pre-colonial period through colonialism to independence and beyond.",
  },
  {
    code: "AFST 301",
    title: "African Languages & Oral Literature",
    credits: 3,
    description: "Studies the linguistic diversity of Africa, the structure of selected African languages, and the rich traditions of oral literature.",
  },
  {
    code: "AFST 302",
    title: "African Arts & Performance",
    credits: 3,
    description: "Explores visual arts, music, dance, and theatrical traditions across Africa, with attention to both traditional and contemporary forms.",
  },
  {
    code: "AFST 401",
    title: "Research Methods in African Studies",
    credits: 3,
    description: "Introduces qualitative and quantitative research methodologies relevant to African Studies, including fieldwork, archival research, and oral history.",
  },
]

const highlights = [
  { icon: Clock, label: "Duration", value: "4 Years" },
  { icon: BookOpen, label: "Courses", value: "24+ Modules" },
  { icon: Award, label: "Degree", value: "BA African Studies" },
  { icon: Users, label: "Cohort Size", value: "~60 Students" },
  { icon: ClipboardList, label: "Credits per Course", value: "3" },
  { icon: HelpCircle, label: "Support", value: "Available" },
]

export default function UndergraduatePage() {
  return (
    <>
      <PageHeader
        title="Undergraduate Programmes (UGRC)"
        subtitle="Foundation courses in African Studies for bachelor's degree students"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Overview</p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">About Our Programme</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  The BA African Studies programme provides comprehensive education in African cultures, histories, languages, and contemporary issues. Designed for scholars, students, and the general public, our courses introduce foundational concepts that enhance understanding of African contributions to global society.
                </p>
                <p>
                  All courses carry 3 credits and are delivered through a combination of lectures and tutorials. Students engage with primary and secondary sources, participate in discussions, and develop critical thinking skills about African affairs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-lg border border-border bg-card p-5 text-center">
                    <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <p className="text-lg font-bold text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Curriculum</p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">Selected Courses</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((course) => (
              <div key={course.code} className="rounded-lg border border-border bg-background p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{course.code}</span>
                  <span className="text-xs text-muted-foreground">{course.credits} credits</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{course.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Structure</p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">Course Delivery & Assessment</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Weekly Schedule</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>2 hours</strong> of lectures per week</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span><strong>1 hour</strong> of tutorials per week</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Total: <strong>3 hours</strong> contact time</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Assessment</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span><strong>30%</strong> Continuous Assessment (IA)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span><strong>50-70%</strong> Final Examination</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span>Class attendance scored separately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">Support</p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">Student Guide & Support</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Registration & Attendance</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                All University of Ghana students take UGRC courses. Registration occurs during standard course registration periods through the Student Portal. Regular attendance is mandatory and contributes to your final grade. Attendance is recorded and scored separately throughout the semester.
              </p>
              <p className="text-xs text-muted-foreground italic">Contact: UGRC Unit Office, Institute of African Studies</p>
            </div>

            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Examination Options</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Multiple examination opportunities are available including Main Examination, Supplementary Examination for those who failed or were absent, and Amnesty Programme for grade improvement. Students may also appeal grades within designated periods if errors are suspected.
              </p>
              <p className="text-xs text-muted-foreground italic">Contact: IAS Academic Office</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-lg font-medium text-foreground">Ready to study African Studies?</p>
          <Link href="/academics/prospective-students" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Learn More
          </Link>
        </div>
      </section>
    </>
  )
}
