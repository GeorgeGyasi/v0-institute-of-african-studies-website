import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, Clock, MapPin, Users, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Seminar on Ethical Economies in Cape Town, Mumbai, and Accra",
  description:
    "Multi-continental exploration of ethical economies, market practices, consumption, and regulation across three cities.",
}

export default function EthicalEconomiesSeminarPage() {
  return (
    <>
      <PageHeader
        title="Seminar on Ethical Economies in Cape Town, Mumbai, and Accra"
        subtitle="Market Practices, Consumption and Regulation"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Event Metadata */}
          <div className="mb-8 border-b border-border pb-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</p>
                  <p className="font-semibold text-foreground">August 15, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">TBD</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Venue</p>
                  <p className="font-semibold text-foreground">Institute of African Studies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="/documents/ethical-economies-seminar.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies, University of Ghana, in collaboration with Leiden University and Stellenbosch University, hosts a seminal seminar exploring "Ethical Economies: Market Practices, Consumption and Regulation." This multi-continental initiative brings together scholars, practitioners, and policymakers from Cape Town, Mumbai, and Accra to advance dialogue on ethical dimensions of economic systems.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Seminar Focus</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              This seminar examines how ethical frameworks shape market practices, consumer behavior, and regulatory systems across diverse geographic and cultural contexts. By comparing perspectives from three continents, participants explore shared challenges and innovative solutions for building more ethical and equitable economic systems.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Key Topics</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li>Market practices and ethical frameworks across continents</li>
              <li>Consumer behavior and ethical consumption patterns</li>
              <li>Government regulation and market governance</li>
              <li>Informal economies and alternative economic models</li>
              <li>Corporate social responsibility in African contexts</li>
              <li>Sustainability and ethical economic development</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Collaborating Institutions</h2>
            <div className="mb-12 rounded-lg bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Co-Organizers</p>
              </div>
              <ul className="space-y-2 text-foreground">
                <li>Institute of African Studies, University of Ghana (Accra Hub)</li>
                <li>Leiden University (European Perspective)</li>
                <li>Stellenbosch University (African Perspective)</li>
              </ul>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About This Initiative</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The Ethical Economies seminar series represents a commitment to advancing comparative scholarship on how societies across the Global South and North grapple with market regulation, consumer ethics, and sustainable development. By fostering dialogue across institutional and geographic boundaries, the seminar contributes to building more inclusive and equitable approaches to economic governance.
            </p>

            <p className="text-sm italic text-muted-foreground">
              For detailed information about seminar sessions, speakers, and registration, please download the program PDF above. This initiative welcomes scholars, policymakers, business leaders, and civil society representatives interested in advancing ethical perspectives on economic systems.
            </p>
          </article>

          {/* Back Link */}
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
