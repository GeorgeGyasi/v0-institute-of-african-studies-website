import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import {
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Globe,
  HelpCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Prospective Students",
  description:
    "Admissions information for prospective students at the Institute of African Studies, University of Ghana.",
}

const steps = [
  {
    step: 1,
    title: "Check Eligibility",
    description:
      "Review the entry requirements for your desired programme. Undergraduate applicants need WASSCE/SSSCE qualifications. Graduate applicants need a relevant first degree or MPhil.",
  },
  {
    step: 2,
    title: "Prepare Your Application",
    description:
      "Gather required documents including transcripts, certificates, personal statement, and reference letters. Graduate applicants must also prepare a research proposal.",
  },
  {
    step: 3,
    title: "Submit Online Application",
    description:
      "Complete the University of Ghana online application form at the admissions portal. Select the Institute of African Studies as your preferred department.",
  },
  {
    step: 4,
    title: "Application Review",
    description:
      "Your application will be reviewed by the Institute's admissions committee. Shortlisted graduate applicants may be invited for an interview.",
  },
  {
    step: 5,
    title: "Receive Offer",
    description:
      "Successful applicants will receive an offer letter from the University. Accept your offer and complete registration by the specified deadline.",
  },
]

const faqs = [
  {
    question: "When is the application deadline?",
    answer:
      "Applications for the academic year typically open in January and close in April. Late applications may be considered on a case-by-case basis. Check the University of Ghana admissions portal for exact dates.",
  },
  {
    question: "Can international students apply?",
    answer:
      "Yes, the Institute welcomes applications from international students. International applicants follow the same academic requirements but may need to provide additional documentation such as English proficiency certification and visa materials.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "The University of Ghana offers a range of scholarships for both Ghanaian and international students. The Institute also has limited research assistantship positions for outstanding graduate applicants. Contact the Institute directly for current funding opportunities.",
  },
  {
    question: "What career paths does African Studies lead to?",
    answer:
      "Graduates of the Institute work in academia, research institutions, government agencies, international organisations, NGOs, cultural institutions, journalism, and the development sector. The interdisciplinary nature of the programme provides versatile skills valued across many fields.",
  },
  {
    question: "Is part-time study available?",
    answer:
      "Part-time study is available for the MPhil programme, allowing working professionals to pursue their degree over a longer period. The PhD programme is offered on a full-time basis only. Undergraduate programmes are full-time.",
  },
]

const keyDates = [
  { event: "Applications Open", date: "January 2026" },
  { event: "Application Deadline", date: "April 30, 2026" },
  { event: "Interviews (Graduate)", date: "May - June 2026" },
  { event: "Admission Letters", date: "July 2026" },
  { event: "Registration Opens", date: "August 2026" },
  { event: "Semester Begins", date: "September 2026" },
]

export default function ProspectiveStudentsPage() {
  return (
    <>
      <PageHeader
        title="Prospective Students"
        subtitle="Everything you need to know about applying to the Institute"
      />

      {/* Why Study Here */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Why Choose IAS
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              <span className="text-balance">
                Join Africa's Premier Institute for African Studies
              </span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Institute of African Studies at the University of Ghana offers
              a unique academic environment where you will study Africa from
              African perspectives, engage with world-class researchers, access
              invaluable archival collections, and join a vibrant community of
              scholars dedicated to understanding the continent.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Pan-African Perspective",
                description:
                  "Study Africa through African epistemologies and methodologies, with faculty who are leaders in their fields.",
              },
              {
                icon: FileText,
                title: "Unique Archival Access",
                description:
                  "Access rare collections of photographs, manuscripts, artifacts, and recordings not available elsewhere.",
              },
              {
                icon: CheckCircle,
                title: "Career Preparation",
                description:
                  "Graduate with versatile skills for careers in academia, policy, development, cultural management, and beyond.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <item.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            How to Apply
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Application Process
          </h2>
          <div className="flex flex-col gap-8">
            {steps.map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Academic Calendar
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                Key Dates
              </h2>
              <div className="flex flex-col gap-4">
                {keyDates.map((item) => (
                  <div
                    key={item.event}
                    className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {item.event}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Common Questions
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                FAQs
              </h2>
              <div className="flex flex-col gap-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-border bg-card"
                  >
                    <summary className="flex cursor-pointer items-center gap-3 px-5 py-4 text-sm font-medium text-foreground">
                      <HelpCircle className="h-4 w-4 shrink-0 text-primary" />
                      {faq.question}
                    </summary>
                    <p className="px-5 pb-4 pl-12 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links to Programmes */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-4">
            <p className="text-base font-medium text-foreground">
              Explore our programmes:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/academics/undergraduate"
                className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                Undergraduate
              </Link>
              <Link
                href="/academics/graduate"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Graduate
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
