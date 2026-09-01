import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { getProfileNavigation } from "@/lib/staff-profiles"

type ProfileNavigationProps = {
  previousSlug: string
  nextSlug: string
  previousName: string
  nextName: string
  isFirst: boolean
  isLast: boolean
  basePath?: string
}

export function ProfileNavigationForSlug({ slug }: { slug: string }) {
  const navigation = getProfileNavigation(slug)
  if (!navigation) return null
  return (
    <ProfileNavigation
      previousSlug={navigation.previous.slug}
      nextSlug={navigation.next.slug}
      previousName={navigation.previous.name}
      nextName={navigation.next.name}
      isFirst={navigation.isFirst}
      isLast={navigation.isLast}
    />
  )
}

export function ProfileNavigation({
  previousSlug,
  nextSlug,
  isFirst,
  isLast,
  basePath = "senior-members",
}: ProfileNavigationProps) {
  const previousHref = isFirst ? "/about/staff" : `/about/staff/profiles/${basePath}/${previousSlug}`
  const nextHref = isLast ? "/about/staff" : `/about/staff/profiles/${basePath}/${nextSlug}`

  return (
    <footer className="mt-12 border-t border-border pt-8">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-8">
        <Link href={previousHref} className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted">
          <ChevronLeft className="size-5" aria-hidden="true" />
          <span>Previous</span>
        </Link>
        <p className="text-center text-base text-muted-foreground">Navigate through profiles</p>
        <Link href={nextHref} className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted">
          <span>Next</span>
          <ChevronRight className="size-5" aria-hidden="true" />
        </Link>
      </div>
      <Link href="/about/staff" className="mt-12 inline-flex items-center gap-2 text-base text-primary hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to Staff Directory
      </Link>
    </footer>
  )
}
