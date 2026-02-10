import Image from "next/image"
import Link from "next/link"
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
    href: "/events/oral-traditions-conference",
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
    href: "/events/heritage-night",
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
    href: "/events/asante-gold-exhibition",
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
    href: "/events/anglogold-lecture-2026",
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
    href: "/events/fieldwork-workshop",
  },
]

const categoryColors: Record<string, string> = {
  Conference: "bg-primary text-primary-foreground",
  Performance: "bg-secondary text-secondary-foreground",
  Exhibition: "bg-foreground text-background",
  Lecture: "bg-primary text-primary-foreground",
  Workshop: "bg-secondary text-secondary-foreground",
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/IASLegon",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/IASLegon",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/IASLegon",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@IASLegon",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/ias-legon",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export function EventsShowcase() {
  const featuredEvent = events[0]

  return (
    <>
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

          {/* Desktop: Featured + right sidebar links */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_400px] lg:gap-8">
            {/* Featured event - large card (static, first event) */}
            <Link
              href={featuredEvent.href}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featuredEvent.image || "/placeholder.svg"}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute left-6 top-6">
                  <span
                    className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${categoryColors[featuredEvent.category]}`}
                  >
                    {featuredEvent.category}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="mb-3 text-2xl font-bold leading-tight text-card xl:text-3xl">
                    <span className="text-balance">
                      {featuredEvent.title}
                    </span>
                  </h3>
                  <p className="mb-5 max-w-xl text-sm leading-relaxed text-card/80">
                    {featuredEvent.description}
                  </p>

                  <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-card/70">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {featuredEvent.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featuredEvent.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {featuredEvent.location}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-md bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all group-hover:bg-card/90">
                    Read Full Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Right sidebar: clickable event links */}
            <div className="flex flex-col gap-3">
              <p className="mb-1 px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                More Events
              </p>
              {events.slice(1).map((event) => (
                <Link
                  key={event.id}
                  href={event.href}
                  className="group/item relative flex items-start gap-4 rounded-xl bg-card/40 p-4 text-left transition-all duration-300 hover:bg-card hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
                >
                  {/* Hover accent bar */}
                  <div className="absolute bottom-3 left-0 top-3 w-1 rounded-full bg-secondary opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />

                  {/* Thumbnail */}
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover brightness-90 transition-all duration-300 group-hover/item:brightness-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <span
                      className={`mb-1 inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${categoryColors[event.category]}`}
                    >
                      {event.category}
                    </span>
                    <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground/80 transition-colors group-hover/item:text-foreground">
                      {event.title}
                    </h4>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </p>
                  </div>

                  {/* Arrow indicating it links out */}
                  <ChevronRight className="mt-4 h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:text-primary group-hover/item:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet: Stacked cards that link to full pages */}
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
                  <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-40" />

                  <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary">
                    <span className="text-pretty">{event.title}</span>
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between">
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
                    <span className="text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read more
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

      {/* Social Media Handles */}
      <section className="border-y border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-secondary">
                Stay Connected
              </p>
              <h3 className="font-serif text-xl font-bold text-foreground">
                Follow Us on Social Media
              </h3>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow IAS on ${social.label}`}
                  className="group/social flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Stay up to date with the latest news, events, and research from
              the Institute of African Studies, University of Ghana.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
