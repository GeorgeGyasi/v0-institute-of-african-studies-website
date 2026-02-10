import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Clock, ArrowLeft, Music } from "lucide-react"

export const metadata: Metadata = {
  title: "Ghana Dance Ensemble: Heritage Night",
  description:
    "An evening of traditional and contemporary dance celebrating the rich performing arts heritage of Ghana.",
}

export default function HeritageNightPage() {
  return (
    <>
      <PageHeader
        title="Ghana Dance Ensemble: Heritage Night"
        subtitle="March 22, 2026"
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
              src="/images/event-2.jpg"
              alt="Ghana Dance Ensemble Heritage Night performance"
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-4">
            {[
              { icon: Calendar, label: "March 22, 2026" },
              { icon: Clock, label: "6:30 PM - 9:00 PM" },
              { icon: MapPin, label: "School of Performing Arts, Legon" },
              { icon: Music, label: "Live drumming & dance" },
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
              About Heritage Night
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Join us for an unforgettable evening celebrating the rich
              performing arts heritage of Ghana. The Ghana Dance Ensemble, one of
              Africa{"'"}s premier professional dance companies established at the
              IAS in 1962, presents a curated programme of traditional and
              contemporary works inspired by northern Ghanaian festivals and
              rituals.
            </p>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Programme Highlights
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                <span><strong className="text-foreground">Bamaya</strong> -- A social dance from the Dagbani people celebrating joy and community spirit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                <span><strong className="text-foreground">Damba</strong> -- A festival dance performed in honour of the Prophet Muhammad by the people of the Northern Region</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                <span><strong className="text-foreground">New Premiere Works</strong> -- Contemporary choreography drawing on traditional movement vocabularies</span>
              </li>
            </ul>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Tickets
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              General admission tickets are available at the IAS front desk and
              at the door on the night of the event. University of Ghana students
              with valid ID enjoy free admission. Seating is limited.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/units/ghana-dance-ensemble"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              About the Ensemble
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
