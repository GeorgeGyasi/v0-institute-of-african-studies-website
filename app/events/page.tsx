import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Clock, ArrowRight, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming conferences, seminars, and workshops at the Institute of African Studies.",
}

const upcomingEvents = [
  {
    title: "Advancing Discourse on Acts of Faith in Religious Spaces",
    date: "June 13, 2025",
    time: "9:00 AM",
    location: "J. H. Nketia Conference Hall, Institute of African Studies, University of Ghana",
    description:
      "Workshop organized by the African Thoughts and Spirituality (Religion and Philosophy) Unit exploring rituals, abuse, and conflations of crimes in religious spaces. Features keynote speakers Dr. Justice A. Arthur & Dr. Fulera Issaka Toure, with guest speakers Nana Osofo-Komfo D. Quarm & Sheikh Sa-id Mukhtar.",
    type: "Workshop",
    virtualLink: "https://shorturl.at/QkhxS",
  },
  {
    title: "Book Launch: The Social Life of Health Data",
    date: "Tuesday, May 6, 2025",
    time: "10:00 AM",
    location: "J. H. Nketia Conference Hall, Institute of African Studies, University of Ghana",
    description:
      "Official launch of 'The Social Life of Health Data: Health Records and Knowledge Production in Ghana' edited by Alena Thiel & Samuel A. Ntewusu. Join us to explore the critical intersections of data, health, and society in the Ghanaian context. Available in person and virtually.",
    type: "Book Launch",
    virtualLink: "https://itucph.zoom.us/j/65301257673",
  },
  {
    title: "Efua Sutherland Centenary Conference 2025",
    date: "March 27-28, 2025",
    time: "9:30 AM - 5:25 PM",
    location: "Institute of African Studies & School of Performing Arts, University of Ghana",
    description:
      "International conference celebrating Efua Sutherland's centenary (1924-2024) with the theme 'Efua Sutherland and the Creation of African Scholarly Paradigms Since 1960: Continuity or Rupture'. Features keynote addresses, eight thematic panels, creative workshops, and an evening performance. Organized with Rutgers University and the Busia Foundation International.",
    type: "Conference",
    virtualLink: "https://shorturl.at/lEs44",
    pdfDownload: "/documents/efua-sutherland-programme-outline.pdf",
  },
  {
    title: "Seminar on Ethical Economies in Cape Town, Mumbai, and Accra",
    date: "August 15, 2025",
    time: "TBD",
    location: "Institute of African Studies, University of Ghana",
    description:
      "Seminal seminar on 'Ethical Economies: Market Practices, Consumption and Regulation' hosted by the Institute of African Studies in collaboration with Leiden University and Stellenbosch University. Exploring ethical dimensions of market practices and consumption across three continents.",
    type: "Seminar",
    pdfDownload: "/documents/ethical-economies-seminar.pdf",
  },
]

const pastEvents = [
  {
    title: "Annual Research Review Symposium 2025",
    date: "November 2025",
    type: "Symposium",
  },
  {
    title: "Film Screening: Stories from the Gold Coast Archives",
    date: "October 2025",
    type: "Screening",
  },
  {
    title: "Workshop: Field Methods in Linguistic Documentation",
    date: "September 2025",
    type: "Workshop",
  },
  {
    title: "Seminar Series: Women and Governance in Africa",
    date: "August 2025",
    type: "Seminar",
  },
  {
    title: "Heritage Day: Open Access to IAS Collections",
    date: "July 2025",
    type: "Open Day",
  },
  {
    title: "Collaborative Research Planning Workshop with SOAS",
    date: "June 2025",
    type: "Workshop",
  },
]

function getTypeColor(type: string): string {
  switch (type) {
    case "Conference":
      return "bg-primary/10 text-primary"
    case "Seminar":
      return "bg-secondary/20 text-secondary"
    case "Workshop":
      return "bg-primary/10 text-primary"
    case "Lecture":
      return "bg-secondary/20 text-secondary"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events & Seminars"
        subtitle="Conferences, workshops, and public lectures engaging scholars and communities"
      />

      {/* Featured Image */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative aspect-[3/1] overflow-hidden rounded-lg">
            <Image
              src="/images/events.jpg"
              alt="Academic conference at the Institute of African Studies"
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Upcoming
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Upcoming Events
          </h2>
          <div className="flex flex-col gap-8">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className={`inline-block rounded-sm px-2.5 py-0.5 text-xs font-semibold ${getTypeColor(event.type)}`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-primary" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2">
                    {event.pdfDownload && (
                      <a
                        href={event.pdfDownload}
                        download
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                    )}
                    {event.virtualLink && (
                      <Link
                        href={event.virtualLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
                      >
                        Participate Here
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Archive
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Past Events
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-lg border border-border bg-background p-5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`inline-block rounded-sm px-2 py-0.5 text-xs font-medium ${getTypeColor(event.type)}`}
                  >
                    {event.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {event.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
