import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { BookOpen, ClipboardList, Award, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "UGRC Courses",
  description:
    "University General Requirement Courses (UGRC) offered by the Institute of African Studies at University of Ghana.",
}

export default function UGRCPage() {
  return (
    <>
      <PageHeader
        title="UGRC Courses"
        subtitle="University General Requirement Courses in African Studies"
      />

      {/* Overview Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Programme Overview
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                About UGRC Courses
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  The University General Requirement Courses (UGRC) are designed
                  to provide all University of Ghana students with essential
                  knowledge in African Studies, regardless of their major
                  programme. These courses contribute to the development of
                  well-rounded graduates with a comprehensive understanding of
                  African contexts, cultures, and issues.
                </p>
                <p>
                  The Institute of African Studies offers 20 UGRC courses that
                  introduce students to foundational concepts in African Studies,
                  Gender Studies, and related disciplines. All UGRC courses carry
                  3 credits and are delivered through a combination of lectures
                  and tutorials.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-5 text-center">
                <BookOpen className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-lg font-bold text-foreground">20</p>
                <p className="text-xs text-muted-foreground">Courses Offered</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 text-center">
                <ClipboardList className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-lg font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Credits per Course</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 text-center">
                <Award className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-lg font-bold text-foreground">Weekly</p>
                <p className="text-xs text-muted-foreground">Contact Hours</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 text-center">
                <HelpCircle className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-lg font-bold text-foreground">Support</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
            </div>
          </div>
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
                <div>
                  <p className="font-semibold text-foreground">Course Instructors</p>
                  <p className="mt-1">
                    All course instructors have office hours for consultation and academic support during the semester.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">University Support Services</p>
                  <p className="mt-1">
                    University of Ghana offers counselling, disability services, and writing centres to support student success.
                  </p>
                </div>
              </div>
            </div>

            {/* Grade Improvements */}
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                How can I improve my course grade?
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Several strategies can help you improve your performance:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Attend all lectures and tutorials regularly
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Engage actively in class discussions and participation
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Complete all assignments on time and to the best of your ability
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Prepare thoroughly for examinations using course materials
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Utilize amnesty programme to retake the course
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Get in Touch
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Need Help?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                UGRC Unit Office
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Handles course registration, attendance records, and UGRC-specific inquiries.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Location:</strong> Institute of African Studies, Room 105
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                IAS Academic Office
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Provides academic advising and course-related support for all programmes.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Location:</strong> Institute of African Studies, Room 102
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
