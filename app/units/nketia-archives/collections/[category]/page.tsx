import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft, Music, FileText, Video, ImageIcon } from "lucide-react"
import {
  getCollection,
  collectionOrder,
  type CollectionCategory,
  type FindingAidItem,
} from "@/lib/nketia-collections"

const categoryIcons: Record<CollectionCategory, typeof Music> = {
  audio: Music,
  manuscripts: FileText,
  video: Video,
  photographs: ImageIcon,
}

interface PageProps {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return collectionOrder.map((category) => ({ category }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const collection = getCollection(category)

  if (!collection) {
    return { title: "Collection Not Found" }
  }

  return {
    title: `${collection.title} — J. H. Kwabena Nketia Archives`,
    description: collection.scopeNote,
  }
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
      <dt className="w-32 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm text-foreground">{value}</dd>
    </div>
  )
}

function FindingAidCard({
  item,
  isPhoto,
}: {
  item: FindingAidItem
  isPhoto: boolean
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_2fr]">
        {isPhoto && item.image ? (
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-full">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : null}
        <div className={`p-6 ${isPhoto && item.image ? "" : "md:col-span-2"}`}>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-sm bg-primary/10 px-2 py-0.5 font-mono text-xs font-medium text-primary">
              {item.catalogNumber}
            </span>
            <span className="text-xs font-medium text-secondary">{item.date}</span>
          </div>
          <h3 className="mb-3 font-serif text-lg font-bold text-foreground text-balance">
            {item.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          <dl className="flex flex-col gap-2 border-t border-border pt-4">
            <MetaRow label="Creator" value={item.creator} />
            <MetaRow label="Credit" value={item.credit} />
            <MetaRow label="Format" value={item.format} />
            <MetaRow label="Extent" value={item.extent} />
          </dl>
        </div>
      </div>
    </article>
  )
}

export default async function CollectionPage({ params }: PageProps) {
  const { category } = await params
  const collection = getCollection(category)

  if (!collection) {
    notFound()
  }

  const Icon = categoryIcons[collection.slug]
  const isPhoto = collection.slug === "photographs"

  return (
    <>
      <PageHeader
        title={collection.title}
        subtitle={`Finding Aid · J. H. Kwabena Nketia Archives`}
      />

      {/* Back Link */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <Link
            href="/units/nketia-archives"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Archives
          </Link>
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* Scope note */}
          <div className="mb-12 flex flex-col gap-5 rounded-lg border border-border bg-card p-8 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
                  Scope &amp; Content
                </p>
                <span className="rounded-sm bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
                  {collection.count} items
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {collection.scopeNote}
              </p>
            </div>
          </div>

          {/* Finding aid entries */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-secondary">
            Selected Items
          </p>
          <div className="flex flex-col gap-6">
            {collection.items.map((item) => (
              <FindingAidCard
                key={item.catalogNumber}
                item={item}
                isPhoto={isPhoto}
              />
            ))}
          </div>

          {/* Other collections */}
          <div className="mt-16 border-t border-border pt-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-secondary">
              Other Collections
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {collectionOrder
                .filter((slug) => slug !== collection.slug)
                .map((slug) => {
                  const other = getCollection(slug)!
                  const OtherIcon = categoryIcons[slug]
                  return (
                    <Link
                      key={slug}
                      href={`/units/nketia-archives/collections/${slug}`}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/30 hover:bg-card"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <OtherIcon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                        {other.title}
                      </span>
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
