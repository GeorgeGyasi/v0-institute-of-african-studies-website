import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="University of Ghana campus"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-6 pb-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
            University of Ghana, Legon
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-card md:text-5xl lg:text-6xl">
            <span className="text-balance">Institute of African Studies</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-card/80">
            Advancing knowledge and understanding of African societies, cultures,
            and histories through interdisciplinary research and scholarship since
            1961.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-md border border-card/30 px-6 py-3 text-sm font-semibold text-card transition-colors hover:bg-card/10"
            >
              Research Areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
