import Link from "next/link"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    date: "January 28, 2026",
    title: "IAS Hosts International Symposium on Oral Traditions in the Digital Age",
    excerpt:
      "Over 120 scholars from 18 countries convened at the University of Ghana to discuss the preservation and digital archiving of Africa's oral heritage.",
    href: "/events/oral-traditions-conference",
  },
  {
    date: "January 10, 2026",
    title: "Professor Ntewusu Delivers Keynote at Pan-African Heritage Summit",
    excerpt:
      "The Director of IAS presented on the role of academic institutions in safeguarding intangible cultural heritage across the continent.",
    href: "/about/directors-message",
  },
  {
    date: "December 15, 2025",
    title: "New MPhil Programme in African Digital Humanities Announced",
    excerpt:
      "The Institute launches a pioneering graduate programme combining African studies with digital research methodologies, starting September 2026.",
    href: "/academics/graduate",
  },
  {
    date: "November 22, 2025",
    title: "Manhyia Archives Receives UNESCO Recognition for Preservation Work",
    excerpt:
      "The collaborative archival initiative between IAS and Manhyia Palace has been recognised for its outstanding contribution to cultural heritage documentation.",
    href: "/units/manhyia-archives",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Mission
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              <span className="text-balance">
                Dedicated to the Study of Africa and Its People
              </span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Institute of African Studies was established in 1961 as a
              research institute of the University of Ghana. Its mission is to
              advance knowledge and understanding of African societies, cultures,
              histories, and contemporary issues through rigorous interdisciplinary
              research, teaching, and public engagement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We serve as a hub for scholars, students, and policymakers seeking
              evidence-based insights into African development, governance, arts,
              languages, and social transformation.
            </p>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                Latest News
              </h3>
              <Link
                href="/events"
                className="flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
              >
                View all
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {newsItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="card-elevated group block overflow-hidden p-5"
                >
                  <p className="mb-1.5 text-xs font-medium text-secondary">
                    {item.date}
                  </p>
                  <h4 className="mb-2 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
