import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft, ArrowRight, Calendar, Users } from "lucide-react"
import { gdeDirectors } from "@/lib/gde-directors"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return gdeDirectors.map((director) => ({ slug: director.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const director = gdeDirectors.find((d) => d.slug === slug)

  if (!director) {
    return { title: "Director Not Found" }
  }

  return {
    title: `${director.name} — Ghana Dance Ensemble`,
    description: `${director.name}, ${director.order} of the Ghana Dance Ensemble (${director.tenure}).`,
  }
}

export default async function DirectorProfilePage({ params }: PageProps) {
  const { slug } = await params
  const index = gdeDirectors.findIndex((d) => d.slug === slug)

  if (index === -1) {
    notFound()
  }

  const director = gdeDirectors[index]
  const previous = index > 0 ? gdeDirectors[index - 1] : null
  const next = index < gdeDirectors.length - 1 ? gdeDirectors[index + 1] : null

  return (
    <>
      <PageHeader title={director.name} subtitle={`${director.order} · ${director.tenure}`} />

      {/* Back Link */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/units/ghana-dance-ensemble"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ghana Dance Ensemble
          </Link>
        </div>
      </section>

      {/* Profile Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">About</h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  {director.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Tenure
                    </p>
                    <p className="mt-1 font-semibold text-foreground">{director.tenure}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary/10">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Role
                    </p>
                    <p className="mt-1 font-semibold text-foreground">{director.role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={director.image}
                    alt={`Portrait of ${director.name}`}
                    fill
                    loading="eager"
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-secondary">
                    {director.order}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    Ghana Dance Ensemble
                  </p>
                </div>
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
                href={`/units/ghana-dance-ensemble/directors/${previous.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" />
                {previous.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/units/ghana-dance-ensemble/directors/${next.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 sm:text-right"
              >
                {next.name}
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
