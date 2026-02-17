"use client"

import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { BookOpen, Clock, Award, Users, ClipboardList, HelpCircle } from "lucide-react"

const programmes = [
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
            {programmes.map((course) => (
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

      {/* Course Structure Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Structure & Format
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Course Delivery
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Contact Hours
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>2 hours</strong> Lectures per week
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>1 hour</strong> Tutorials per week
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Total: <strong>3 hours</strong> weekly contact time
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Assessment Breakdown
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>30%</strong> Continuous Assessment (IA)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>50-70%</strong> Final Examination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Class attendance scored separately
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Learning Mode
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    In-person lectures and tutorials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Interactive discussions and group work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Assignments and presentations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives Section */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Learning Outcomes
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            What You Will Learn
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Knowledge & Understanding
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Understand the scope and methods of African Studies
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Explore Africa's rich cultural and historical diversity
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Examine contemporary issues facing African societies
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Critical Thinking
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Analyze African issues from multiple perspectives
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Question stereotypes and develop nuanced understanding
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Engage with primary and secondary sources critically
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Skills Development
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Improve research and information literacy
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Enhance written and oral communication
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Develop collaborative learning abilities
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Global Citizenship
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Develop sensitivity to cultural diversity
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Appreciate Africa's contributions to global society
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    Understand interconnectedness of African and world issues
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Guide Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Support & Guidance
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Student Guide & FAQs
          </h2>

          <div className="space-y-8">
            {/* Registration */}
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-secondary" />
                How do I register for UGRC courses?
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                All University of Ghana students are required to take UGRC courses as part of their general education requirements. Registration occurs during the standard course registration period at the beginning of each semester through the Student Portal. You can select from the 20 UGRC courses offered by the Institute of African Studies according to your schedule and interests.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Contact: UGRC Unit Office, Institute of African Studies
              </p>
            </div>

            {/* Attendance */}
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-secondary" />
                What is the attendance requirement?
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Regular attendance is mandatory and contributes to your final grade. Students are expected to attend all lectures and tutorials throughout the semester. Attendance is recorded and scored separately. Poor attendance may affect your continuous assessment score and overall course performance.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Note: Approved absences and documented excuses may be accommodated.
              </p>
            </div>

            {/* Examination Options */}
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                What examination options are available?
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                The University of Ghana offers multiple examination opportunities for students who cannot sit for the main examination or wish to improve their grades:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-md bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    Supplementary Examination
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Available for students who failed the course or were absent from the main examination with valid reasons.
                  </p>
                </div>
                <div className="rounded-md bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    Main Examination
                  </p>
                  <p className="text-xs text-muted-foreground">
                    The primary examination period held at the end of each semester for all enrolled students.
                  </p>
                </div>
                <div className="rounded-md bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    Amnesty Programme
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Allows students to retake courses to improve their grades or clear failed courses.
                  </p>
                </div>
                <div className="rounded-md bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    Grade Appeal Process
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Students may appeal their grades within designated periods if they believe an error was made.
                  </p>
                </div>
              </div>
            </div>

            {/* Continuous Assessment */}
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-secondary" />
                What comprises the Continuous Assessment (IA)?
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                The Continuous Assessment (IA) accounts for 30% of your final grade and typically includes:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Class assignments and quizzes
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Midterm assessments
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Class participation and engagement
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Seminar presentations or group projects
                </li>
              </ul>
            </div>

            {/* Support Services */}
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-secondary" />
                Where can I get academic support?
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Multiple support services are available to help you succeed:
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">UGRC Unit Office</p>
                  <p className="mt-1">
                    Located at the Institute of African Studies. Staff can help with course registration, attendance issues, and general inquiries.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">IAS Academic Office</p>
                  <p className="mt-1">
                    Provides academic guidance, course-related assistance, and liaison between students and instructors.
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
