import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Clock, ArrowLeft, Users, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "International Conference on African Oral Traditions",
  description:
    "Scholars from over 20 countries gather to discuss preservation strategies for African oral traditions in the digital age.",
}

export default function OralTraditionsConferencePage() {
  return (
    <>
      <PageHeader
        title="International Conference on African Oral Traditions"
        subtitle="March 15-17, 2026"
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
              src="/images/event-1.jpg"
              alt="International Conference on African Oral Traditions"
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-4">
            {[
              { icon: Calendar, label: "March 15-17, 2026" },
              { icon: Clock, label: "9:00 AM - 5:00 PM daily" },
              { icon: MapPin, label: "IAS Conference Hall, Legon" },
              { icon: Users, label: "200+ expected attendees" },
              { icon: Globe, label: "20+ countries represented" },
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
              About This Conference
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The Institute of African Studies is proud to host this landmark
              three-day international conference bringing together scholars,
              archivists, and cultural practitioners from over 20 countries.
              Participants will explore innovative preservation strategies for
              African oral traditions in the digital age, examining how new
              technologies can document, safeguard, and transmit the vast oral
              heritage of the continent.
            </p>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Conference Themes
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Digital archives and repositories for oral traditions
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Community-based documentation and participatory methods
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Ethical frameworks for recording and sharing oral knowledge
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                AI and machine learning in language preservation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                Intergenerational transmission and education
              </li>
            </ul>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Public Lecture
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Public lecture addresses will be delivered by leading researchers in
              African oral traditions, including scholars from the University of
              Cape Town, SOAS University of London, and the University of Dar es
              Salaam. The full speaker list will be announced in February 2026.
            </p>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Registration
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Registration is open to academics, students, cultural
              practitioners, and members of the public. Early-bird registration
              closes on February 15, 2026. Presentations are by invitation, but
              poster sessions are open for abstract submissions.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Register Now
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
