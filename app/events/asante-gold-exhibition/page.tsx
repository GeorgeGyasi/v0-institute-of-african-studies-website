import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Exhibition: Asante Gold Weights & Regalia",
  description:
    "A curated exhibition showcasing over 200 gold weights and royal regalia from the Manhyia Archives collection.",
}

export default function AsanteGoldExhibitionPage() {
  return (
    <>
      <PageHeader
        title="Asante Gold Weights & Regalia"
        subtitle="April 1 - May 30, 2026"
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
              src="/images/event-3.jpg"
              alt="Asante Gold Weights and Regalia Exhibition"
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-4">
            {[
              { icon: Calendar, label: "April 1 - May 30, 2026" },
              { icon: Clock, label: "10:00 AM - 4:00 PM (Mon-Fri)" },
              { icon: MapPin, label: "IAS Museum Gallery" },
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
              About the Exhibition
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This landmark exhibition presents over 200 gold weights and pieces
              of royal regalia drawn from the Manhyia Archives collection.
              Curated in collaboration with the Manhyia Palace Museum, the
              exhibition explores the symbolic significance of these objects in
              Asante governance, trade, and cosmology spanning five centuries.
            </p>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Featured Collections
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                <span><strong className="text-foreground">Abrammuo</strong> -- Gold weights used for measuring gold dust in trade, featuring geometric and figurative designs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                <span><strong className="text-foreground">Royal Regalia</strong> -- Ceremonial swords, stools, and ornamental objects from the Asante court</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                <span><strong className="text-foreground">Documentary Photographs</strong> -- Archival images of gold weight casting and usage from the early 20th century</span>
              </li>
            </ul>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Visiting Information
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The exhibition is open Monday through Friday, 10:00 AM to 4:00 PM.
              Admission is free for University of Ghana students and staff.
              Public admission is GHS 20. Guided tours are available on Tuesdays
              and Thursdays at 11:00 AM and 2:00 PM.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/units/manhyia-archives"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              About Manhyia Archives
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
