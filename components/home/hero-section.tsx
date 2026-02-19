'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: 'Institute of African Studies',
    subtitle: 'University of Ghana, Legon',
    description: 'Advancing knowledge and understanding of African societies, cultures, and histories through interdisciplinary research and scholarship since 1961.',
    image: '/images/hero-slide-1.jpg',
    primaryCTA: { text: 'Explore Our Work', href: '/about' },
    secondaryCTA: { text: 'Research Areas', href: '/research' }
  },
  {
    id: 2,
    title: 'Our Institution',
    subtitle: 'A Center of Excellence',
    description: 'Discover the Institute of African Studies, a beacon of knowledge and research dedicated to advancing African scholarship and cultural understanding.',
    image: '/images/hero-slide-2.jpg',
    primaryCTA: { text: 'Learn More', href: '/research' },
    secondaryCTA: { text: 'About Us', href: '/about' }
  },
  {
    id: 3,
    title: 'Our Community',
    subtitle: 'Engaging and Collaborative',
    description: 'Join our vibrant academic community where students, faculty, and researchers work together to explore and celebrate African heritage.',
    image: '/images/hero-slide-3.jpg',
    primaryCTA: { text: 'Explore Programs', href: '/research' },
    secondaryCTA: { text: 'Get Involved', href: '/contact' }
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [mounted])

  const slide = slides[currentSlide]

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === currentSlide}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-6 pb-20">
        <div className={`max-w-2xl space-y-6 transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl text-balance">
            {slide.title}
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-white/90">
            {slide.description}
          </p>

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

      {mounted && (
        <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between">
          <button
            onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white transition-all hover:bg-white/30 hover:border-white/60"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white transition-all hover:bg-white/30 hover:border-white/60"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
