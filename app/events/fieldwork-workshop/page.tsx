import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Clock, ArrowLeft, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Graduate Research Workshop: Fieldwork Methods",
  description:
    "Intensive two-day workshop on qualitative research methods for graduate students.",
}

export default function FieldworkWorkshopPage() {
  return (
    <>
      <PageHeader
        title="Graduate Research Workshop: Fieldwork Methods"
        subtitle="April 18-19, 2026"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/events"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>

          <div className="relative mb-10 aspect-[2/1] overflow-hidden rounded-xl">
            <Image
              src="/images/event-5.jpg"
              alt="Graduate Research Workshop on Fieldwork Methods"
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-4">
            {[
              { icon: Calendar, label: "April 18-19, 2026" },
              { icon: Clock, label: "9:00 AM - 3:00 PM" },
              { icon: MapPin, label: "IAS Seminar Room B" },
              { icon: GraduationCap, label: "MPhil & PhD students" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              About the Workshop
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This intensive two-day workshop is designed for MPhil and PhD
              students conducting research in African Studies and related fields.
              Facilitated by senior IAS faculty with extensive fieldwork
              experience, the workshop covers essential qualitative research
              methods including participatory observation, oral history
              techniques, and archival research strategies.
            </p>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Day 1: Methods & Theory
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Introduction to qualitative field methods in African contexts
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Ethical considerations and community engagement protocols
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Oral history interviewing techniques and best practices
              </li>
            </ul>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Day 2: Practice & Application
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Archival research and working with historical documents
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Hands-on practice sessions with peer feedback
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Individual consultations with faculty on research design
              </li>
            </ul>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Eligibility & Registration
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Open to all registered MPhil and PhD students at the University of
              Ghana, with priority given to IAS students. Registration is
              required and spaces are limited to 25 participants. No fee.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academics/graduate"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Graduate Programme
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
