import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { RepertoireExplorer } from "@/components/repertoire-explorer"

export const metadata: Metadata = {
  title: "Repertoire | Ghana Dance Ensemble",
  description:
    "Explore the full repertoire of the Ghana Dance Ensemble — traditional dances from all sixteen regions of Ghana and performances drawn from across Africa.",
}

export default function RepertoirePage() {
  return (
    <>
      <PageHeader
        title="Performance Repertoire"
        subtitle="Traditional dances from across Ghana's sixteen regions and the wider African continent"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/units/ghana-dance-ensemble"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ghana Dance Ensemble
          </Link>

          <RepertoireExplorer />
        </div>
      </section>
    </>
  )
}
