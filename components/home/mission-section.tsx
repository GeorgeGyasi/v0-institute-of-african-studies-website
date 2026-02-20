'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, Calendar, ChevronRight } from "lucide-react"

const newsItems = [
  {
    date: "September 2025",
    category: "Tribute",
    title: "Paying Tribute to the Asantehemaa",
    excerpt:
      "The IAS honors its partnership with Manhyia Palace during the final funeral rites of the late Asantehemaa, Nana Ama Konadu Yiadom III, documenting royal customs and Ashanti heritage.",
    href: "/events/asantehemaa-tribute",
    accent: "bg-primary",
  },
  {
    date: "Dec 15, 2025",
    category: "Programme",
    title: "New MPhil Programme in African Digital Humanities Announced",
    excerpt:
      "The Institute launches a pioneering graduate programme combining African studies with digital research methodologies, starting September 2026.",
    href: "/academics/graduate",
    accent: "bg-secondary",
  },
  {
    date: "Nov 22, 2025",
    category: "Recognition",
    title: "Manhyia Archives Receives UNESCO Recognition for Preservation Work",
    excerpt:
      "The collaborative archival initiative between IAS and Manhyia Palace has been recognised for its outstanding contribution to cultural heritage documentation.",
    href: "/units/manhyia-archives",
    accent: "bg-foreground",
  },
]

function CountUpStat({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = target / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-4 bg-primary text-primary-foreground">
      <span className="text-lg font-bold leading-none">{count.toLocaleString()}+</span>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-wider opacity-70">
        {label}
      </span>
    </div>
  )
}

export function MissionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Mission */}
          <div className="lg:sticky lg:top-28">
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

          {/* Right: Modern News Feed */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  Latest News
                </h3>
              </div>
              <Link
                href="/events"
                className="group/link flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                All news
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {newsItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative flex gap-4 rounded-xl bg-card p-4 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  style={{
                    transform: hoveredIndex === index ? "translateX(4px)" : "translateX(0)",
                    opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Accent bar */}
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div
                      className={`h-full w-1 rounded-full ${item.accent} transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-30"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-2 flex items-center gap-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-card ${item.accent}`}
                      >
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>

                    <h4 className="mb-1.5 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>

                    <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center self-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground opacity-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:opacity-100">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Ticker-style stat strip with count-up animation */}
            <div className="mt-6 flex items-stretch justify-center gap-px overflow-hidden rounded-xl max-w-2xl mx-auto">
              <CountUpStat target={2500} label="Publications" />
              <div className="flex flex-1 flex-col items-center justify-center py-4 bg-foreground text-card">
                <span className="text-lg font-bold leading-none">60+</span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-wider opacity-70">
                  Faculty
                </span>
              </div>
              <CountUpStat target={40} label="Partners" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
