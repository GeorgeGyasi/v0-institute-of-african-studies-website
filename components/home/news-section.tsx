import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const news = [
  {
    date: "September 2025",
    title: "Paying Tribute to the Asantehemaa",
    excerpt:
      "The IAS honors its partnership with Manhyia Palace during the final funeral rites of the late Asantehemaa, documenting royal funeral customs and Ashanti heritage.",
    href: "/events/asantehemaa-tribute",
    images: ["/images/asantehemaa-tribute-1.jpg", "/images/asantehemaa-tribute-2.jpg"],
  },
  {
    date: "January 2026",
    title: "International Conference on African Oral Traditions",
    excerpt:
      "Scholars from over 20 countries gather to discuss preservation strategies for African oral traditions in the digital age.",
    href: "/events",
  },
  {
    date: "December 2025",
    title: "New Archival Collection: Gold Coast Photography 1920-1957",
    excerpt:
      "Over 3,000 newly digitized photographs documenting everyday life in the Gold Coast now available for public research.",
    href: "/units",
  },
  {
    date: "November 2025",
    title: "IAS Research Fellow Wins Continental Humanities Award",
    excerpt:
      "Dr. Ama Boahen receives the African Humanities Prize for groundbreaking work in postcolonial identity studies.",
    href: "/research",
  },
  {
    date: "October 2025",
    title: "Partnership with SOAS University of London",
    excerpt:
      "New memorandum of understanding signed to establish joint doctoral program in African Cultural Studies.",
    href: "/about",
  },
]

export function NewsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Latest Updates
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              News & Announcements
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
          >
            View all events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {news.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
            >
              {item.images && item.images[0] && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
