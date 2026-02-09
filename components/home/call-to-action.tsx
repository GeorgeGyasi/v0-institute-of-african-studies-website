import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-primary-foreground lg:text-4xl">
          <span className="text-balance">
            Join a Legacy of African Scholarship
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
          Whether you are a researcher, student, or institution, the Institute of
          African Studies welcomes collaboration and engagement.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Browse Publications
          </Link>
        </div>
      </div>
    </section>
  )
}
