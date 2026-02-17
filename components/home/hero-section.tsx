'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="University of Ghana campus"
          fill
          className="object-cover"
          priority
          loading="eager"
        />
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      
      {/* Accent gradient overlay for professional depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-6 pb-20">
        <div className="max-w-2xl space-y-6">
          {/* Accent Badge */}
          <div 
            className={`inline-flex items-center gap-2 w-fit rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/40 px-4 py-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              University of Ghana, Legon
            </span>
          </div>

          {/* Main Heading with Animation */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl text-balance">
              Institute of African Studies
            </h1>
          </div>

          {/* Description with Staggered Animation */}
          <p 
            className={`max-w-lg text-lg leading-relaxed text-white/90 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Advancing knowledge and understanding of African societies, cultures,
            and histories through interdisciplinary research and scholarship since
            1961.
          </p>

          {/* CTA Buttons with Hover Effects */}
          <div 
            className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/60 uppercase tracking-widest font-semibold">Scroll</span>
          <div className="h-6 w-0.5 bg-gradient-to-b from-white to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}
