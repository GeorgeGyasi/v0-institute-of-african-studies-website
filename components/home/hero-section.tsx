'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    type: 'main',
    title: 'Institute of African Studies',
    subtitle: 'University of Ghana, Legon',
    description: 'Advancing knowledge and understanding of African societies, cultures, and histories through interdisciplinary research and scholarship since 1961.',
    image: '/images/hero.jpg',
    primaryCTA: { text: 'Explore Our Work', href: '/about' },
    secondaryCTA: { text: 'Research Areas', href: '/research' }
  },
  {
    id: 2,
    type: 'promotional',
    title: 'Our Initiatives',
    subtitle: 'Promoting Excellence',
    description: 'Discover our graduate programs, research excellence initiatives, and cultural heritage preservation efforts.',
    image: '/images/promotional.jpg',
    primaryCTA: { text: 'Learn More', href: '/research' },
    secondaryCTA: { text: 'Programs', href: '/programs' }
  },
  {
    id: 3,
    type: 'partnership',
    title: 'Partnership Program',
    subtitle: 'Global Collaboration',
    description: 'Join us in our mission to advance African Studies through international partnerships and collaborative research.',
    image: '/images/partnership.jpg',
    primaryCTA: { text: 'Explore Partnerships', href: '/partnerships' },
    secondaryCTA: { text: 'Contact Us', href: '/contact' }
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const slide = slides[currentSlide]

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
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
              {slide.subtitle}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl text-balance">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="max-w-lg text-lg leading-relaxed text-white/90">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={slide.primaryCTA.href}
              className="group inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              {slide.primaryCTA.text}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={slide.secondaryCTA.href}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
            >
              {slide.secondaryCTA.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Controls - Only render on client to avoid hydration issues */}
      {isClient && (
        <>
          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between">
            <button
              onClick={goToPrevious}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white transition-all hover:bg-white/30 hover:border-white/60 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white transition-all hover:bg-white/30 hover:border-white/60 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="absolute top-8 right-8 z-20">
            <div className="rounded-full bg-white/20 backdrop-blur-sm border border-white/40 px-4 py-2 text-sm font-semibold text-white">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        </>
      )}
    </section>
  )
}
