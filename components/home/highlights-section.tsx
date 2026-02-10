import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const highlights = [
  {
    title: "Language & Linguistics",
    description:
      "Documenting and preserving African languages through computational linguistics, field research, and community engagement programs.",
    image: "/images/archive-3.jpg",
    href: "/units",
  },
  {
    title: "Cultural Heritage",
    description:
      "Safeguarding tangible and intangible cultural heritage through archival preservation, digital cataloging, and public exhibitions.",
    image: "/images/archive-1.jpg",
    href: "/units",
  },
  {
    title: "Governance & Society",
    description:
      "Examining contemporary African governance structures, democratic transitions, and socio-political transformations across the continent.",
    image: "/images/research.jpg",
    href: "/research",
  },
]

export function HighlightsSection() {
  return (
    <section className="border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Research Focus
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              <span className="text-balance">Areas of Scholarly Excellence</span>
            </h2>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
          >
            View all research areas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="card-elevated group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
