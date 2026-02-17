'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="University of Ghana campus"
          fill
          className="object-cover"
          priority
          loading="eager"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-6 pb-20">
        <div className="max-w-2xl space-y-6">
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 w-fit rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/40 px-4 py-2">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              University of Ghana, Legon
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl text-balance">
            Institute of African Studies
          </h1>

          {/* Description */}
          <p className="max-w-lg text-lg leading-relaxed text-white/90">
            Advancing knowledge and understanding of African societies, cultures,
            and histories through interdisciplinary research and scholarship since
            1961.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
            >
              Research Areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
