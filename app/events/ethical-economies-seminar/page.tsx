import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, Clock, MapPin, Users, ExternalLink, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Seminar on Ethical Economies in Cape Town, Mumbai, and Accra",
  description:
    "Multi-continental seminar on ethical economies, market practices, consumption and regulation across three cities.",
}

export default function EthicalEconomiesSeminar() {
  return (
    <>
      <PageHeader
        title="Seminar on Ethical Economies in Cape Town, Mumbai, and Accra"
        subtitle="Market Practices, Consumption and Regulation"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              August 15, 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              TBD
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Institute of African Studies, University of Ghana
            </span>
          </div>

          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies, in collaboration with Leiden University and Stellenbosch University, is organizing a seminal seminar on "Ethical Economies: Market Practices, Consumption and Regulation." This multi-continental initiative brings together scholars, practitioners, and policymakers to examine ethical dimensions of economic practices across three major cities: Cape Town, Mumbai, and Accra.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Seminar Focus</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The seminar explores how ethical considerations shape market practices, consumption patterns, and regulatory frameworks across different cultural, economic, and political contexts. By examining cases from three continents, the seminar seeks to identify shared ethical principles and culturally specific approaches to creating more just and sustainable economic systems.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Key Themes</h2>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Market Ethics:</strong> Examining fair trade, ethical sourcing, and responsible business practices</li>
              <li><strong>Consumer Responsibility:</strong> Understanding how consumers make ethical choices and what influences consumption patterns</li>
              <li><strong>Regulatory Frameworks:</strong> Comparing how different jurisdictions govern market practices to promote ethical economic behavior</li>
              <li><strong>Grassroots Movements:</strong> Exploring community-led initiatives for economic justice and sustainability</li>
              <li><strong>Policy Innovation:</strong> Identifying promising approaches to embedding ethical principles in economic governance</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Collaborating Institutions</h2>
            <div className="mb-6 space-y-3">
              <div className="rounded-lg bg-card p-4 border border-border">
                <p className="font-semibold text-foreground">Institute of African Studies</p>
                <p className="text-sm text-muted-foreground">University of Ghana - Host Institution</p>
              </div>
              <div className="rounded-lg bg-card p-4 border border-border">
                <p className="font-semibold text-foreground">Leiden University</p>
                <p className="text-sm text-muted-foreground">Netherlands - Co-organizer</p>
              </div>
              <div className="rounded-lg bg-card p-4 border border-border">
                <p className="font-semibold text-foreground">Stellenbosch University</p>
                <p className="text-sm text-muted-foreground">South Africa - Co-organizer</p>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Expected Outcomes</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The seminar will produce a comparative analysis of ethical economies across the three cities, identify best practices for ethical market governance, and develop recommendations for policymakers and civil society organizations seeking to advance ethical economic systems. Participants will also forge collaborative networks for ongoing research and advocacy on ethical economies.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Access Materials</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/documents/ethical-economies-seminar.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download Seminar Details
              </a>
            </div>
          </article>

          <div className="mt-12 border-t border-border pt-8">
            <a
              href="/events"
              className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              ← Back to Events
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
