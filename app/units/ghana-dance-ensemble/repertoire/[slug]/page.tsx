import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft, ArrowRight, MapPin, Users, CalendarDays } from "lucide-react"
import { gdeDances } from "@/lib/gde-dances"

const FALLBACK_IMAGE = "/images/ghana-dance-ensemble-archive.png"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return gdeDances.map((dance) => ({ slug: dance.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const dance = gdeDances.find((d) => d.slug === slug)

  if (!dance) {
    return { title: "Dance Not Found" }
  }

  const place = dance.category === "ghana" ? dance.region : dance.country

  return {
    title: `${dance.title} — Ghana Dance Ensemble`,
    description: `${dance.title}, a ${dance.origin} dance from ${place}. ${dance.summary}`,
  }
}

export default async function DanceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const index = gdeDances.findIndex((d) => d.slug === slug)

  if (index === -1) {
    notFound()
  }

  const dance = gdeDances[index]
  const previous = index > 0 ? gdeDances[index - 1] : null
  const next = index < gdeDances.length - 1 ? gdeDances[index + 1] : null
  const place = dance.category === "ghana" ? dance.region : dance.country
  const placeLabel = dance.category === "ghana" ? "Region" : "Country"
  const gallery = dance.images.length > 0 ? dance.images : [FALLBACK_IMAGE]
  const usingFallback = dance.images.length === 0

  return (
    <>
      <PageHeader title={dance.title} subtitle={`${dance.origin} · ${dance.occasion}`} />

      {/* Back Link */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/units/ghana-dance-ensemble/repertoire"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Repertoire
          </Link>
        </div>
      </section>

      {/* Detail Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Brief + meta */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">About the Dance</h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  {dance.brief.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {placeLabel}
                    </p>
                    <p className="mt-1 font-semibold text-foreground">{place}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary/10">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Origin
                    </p>
                    <p className="mt-1 font-semibold text-foreground">{dance.origin}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Occasion
                    </p>
                    <p className="mt-1 font-semibold text-foreground">{dance.occasion}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="lg:col-span-1">
              <div className="flex flex-col gap-4">
                {gallery.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted"
                  >
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={
                        usingFallback
                          ? "Ghana Dance Ensemble performance"
                          : `${dance.title} performed by the Ghana Dance Ensemble`
                      }
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                ))}
                {usingFallback ? (
                  <p className="text-xs italic text-muted-foreground">
                    Performance photographs of {dance.title} will be added soon.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {previous ? (
              <Link
                href={`/units/ghana-dance-ensemble/repertoire/${previous.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" />
                {previous.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/units/ghana-dance-ensemble/repertoire/${next.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 sm:text-right"
              >
                {next.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
