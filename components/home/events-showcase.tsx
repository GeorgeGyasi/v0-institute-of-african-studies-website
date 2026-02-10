"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Calendar, MapPin, Clock, ChevronRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "International Conference on African Oral Traditions",
    date: "March 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "IAS Conference Hall, Legon",
    description:
      "Scholars from over 20 countries gather to discuss preservation strategies for African oral traditions in the digital age. Keynote speakers include leading researchers from across the continent.",
    image: "/images/event-1.jpg",
    category: "Conference",
    href: "/events",
  },
  {
    id: 2,
    title: "Ghana Dance Ensemble: Heritage Night",
    date: "March 22, 2026",
    time: "6:30 PM - 9:00 PM",
    location: "School of Performing Arts, Legon",
    description:
      "An evening of traditional and contemporary dance celebrating the rich performing arts heritage of Ghana. Features premiere works inspired by northern Ghanaian festivals.",
    image: "/images/event-2.jpg",
    category: "Performance",
    href: "/units/ghana-dance-ensemble",
  },
  {
    id: 3,
    title: "Exhibition: Asante Gold Weights & Regalia",
    date: "April 1 - May 30, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "IAS Museum Gallery",
    description:
      "A curated exhibition showcasing over 200 gold weights and royal regalia from the Manhyia Archives collection, exploring their symbolic significance in Asante governance.",
    image: "/images/event-3.jpg",
    category: "Exhibition",
    href: "/units/manhyia-archives",
  },
  {
    id: 4,
    title: "AngloGold Ashanti Distinguished Lecture Series",
    date: "April 10, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Great Hall, University of Ghana",
    description:
      "Professor Achille Mbembe delivers the 2026 AngloGold Ashanti Lecture on 'Planetary Futures: Africa and the Politics of the Living.' Open to the public.",
    image: "/images/event-4.jpg",
    category: "Lecture",
    href: "/publications/anglogold-ashanti-lectures",
  },
  {
    id: 5,
    title: "Graduate Research Workshop: Fieldwork Methods",
    date: "April 18-19, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "IAS Seminar Room B",
    description:
      "Intensive two-day workshop on qualitative research methods for graduate students, covering participatory observation, oral history techniques, and archival research.",
    image: "/images/event-5.jpg",
    category: "Workshop",
    href: "/academics/graduate",
  },
]

const categoryColors: Record<string, string> = {
  Conference: "bg-primary text-primary-foreground",
  Performance: "bg-secondary text-secondary-foreground",
  Exhibition: "bg-foreground text-background",
  Lecture: "bg-primary text-primary-foreground",
  Workshop: "bg-secondary text-secondary-foreground",
}

export function EventsShowcase() {
  const [activeEvent, setActiveEvent] = useState(0)

  return (
    <section className="african-motif relative overflow-hidden py-20 lg:py-28">
      {/* Kente-inspired top stripe */}
      <div className="kente-stripe absolute left-0 right-0 top-0 h-1.5" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Upcoming Events & Programs
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              <span className="text-balance">
                {"What's Happening at IAS"}
              </span>
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Desktop: Featured + sidebar layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_400px] lg:gap-8">
          {/* Featured (active) event - large card */}
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={events[activeEvent].image || "/placeholder.svg"}
                alt={events[activeEvent].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

              {/* Category badge */}
              <div className="absolute left-6 top-6">
                <span
                  className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${categoryColors[events[activeEvent].category]}`}
                >
                  {events[activeEvent].category}
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="mb-3 text-2xl font-bold leading-tight text-card xl:text-3xl">
                  <span className="text-balance">
                    {events[activeEvent].title}
                  </span>
                </h3>
                <p className="mb-5 max-w-xl text-sm leading-relaxed text-card/80">
                  {events[activeEvent].description}
                </p>

                <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-card/70">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {events[activeEvent].date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {events[activeEvent].time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {events[activeEvent].location}
                  </span>
                </div>

                <Link
                  href={events[activeEvent].href}
                  className="inline-flex items-center gap-2 rounded-md bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-card/90"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar list of events */}
          <div className="flex flex-col gap-3">
            {events.map((event, index) => (
              <button
                key={event.id}
                type="button"
                onClick={() => setActiveEvent(index)}
                className={`group/item relative flex items-start gap-4 rounded-xl p-4 text-left transition-all duration-300 ${
                  index === activeEvent
                    ? "bg-card shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
                    : "bg-transparent hover:bg-card/60"
                }`}
              >
                {/* Active indicator */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1 rounded-full transition-all duration-300 ${
                    index === activeEvent
                      ? "bg-secondary opacity-100"
                      : "bg-primary opacity-0 group-hover/item:opacity-40"
                  }`}
                />

                {/* Thumbnail */}
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className={`object-cover transition-all duration-300 ${
                      index === activeEvent
                        ? "brightness-100"
                        : "brightness-90 group-hover/item:brightness-100"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <span
                    className={`mb-1 inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      index === activeEvent
                        ? categoryColors[event.category]
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {event.category}
                  </span>
                  <h4
                    className={`line-clamp-2 text-sm font-semibold leading-snug transition-colors ${
                      index === activeEvent
                        ? "text-foreground"
                        : "text-muted-foreground group-hover/item:text-foreground"
                    }`}
                  >
                    {event.title}
                  </h4>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {event.date}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight
                  className={`mt-4 h-4 w-4 flex-shrink-0 transition-all duration-300 ${
                    index === activeEvent
                      ? "text-primary translate-x-0 opacity-100"
                      : "text-muted-foreground -translate-x-1 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Stacked interactive cards */}
        <div className="flex flex-col gap-5 lg:hidden">
          {events.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className="group relative overflow-hidden rounded-xl bg-card shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

                {/* Category badge */}
                <span
                  className={`absolute left-4 top-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${categoryColors[event.category]}`}
                >
                  {event.category}
                </span>

                {/* Date badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-card/90">
                  <Calendar className="h-3.5 w-3.5" />
                  {event.date}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5">
                {/* Accent bar */}
                <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-40" />

                <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary">
                  <span className="text-pretty">{event.title}</span>
                </h3>
                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Kente-inspired bottom stripe */}
      <div className="kente-stripe absolute bottom-0 left-0 right-0 h-1.5" />
    </section>
  )
}
