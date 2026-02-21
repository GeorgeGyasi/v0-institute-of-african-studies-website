import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { EventActionButtons } from "@/components/event-action-buttons"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Indigenous Knowledge and Innovation: African Solutions for Climate Resilience",
  description:
    "Panel discussion on African solutions for climate resilience and socio-economic transformation as part of the Day of Scientific Renaissance of Africa.",
}

export default function IndigenousKnowledgePanelPage() {
  const actionButtons = [
    {
      label: "Join Virtually",
      href: "https://tinyurl.com/yxmsc8nh",
      isExternal: true,
    },
  ]

  return (
    <>
      <PageHeader
        title="Indigenous Knowledge and Innovation: African Solutions for Climate Resilience"
        subtitle="Celebrating the 2025 Day of Scientific Renaissance of Africa"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Sticky Action Buttons - Top */}
          <EventActionButtons buttons={actionButtons} variant="top" />

          {/* Event Metadata */}
          <div className="mb-8 border-b border-border pb-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</p>
                  <p className="font-semibold text-foreground">Thursday, June 12, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Venue</p>
                  <p className="font-semibold text-foreground">J.H. Nketia Conference Room</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies is pleased to host a panel discussion exploring how indigenous knowledge systems and innovations offer practical solutions for addressing climate resilience and driving socio-economic transformation across Africa. This event celebrates the 2025 Day of Scientific Renaissance of Africa.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Panel Overview</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              This timely conversation brings together scholars and experts to examine the intersection of traditional African knowledge systems with contemporary challenges. The discussion demonstrates how ancestral wisdom and modern innovation can work synergistically to create sustainable development pathways for African communities and beyond.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Key Discussion Topics</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li>Integration of indigenous knowledge systems with climate adaptation strategies</li>
              <li>Traditional African approaches to sustainable resource management</li>
              <li>Innovation and entrepreneurship rooted in ancestral wisdom</li>
              <li>Case studies of successful indigenous-led development initiatives</li>
              <li>Bridging traditional and contemporary scientific approaches</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Panel Leadership</h2>
            <div className="mb-12 rounded-lg bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Leadership</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">Prof. Samuel Ntewusu</p>
                  <p className="text-sm text-muted-foreground">Host - Institute of African Studies, University of Ghana</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Prof. Deborah Atobrah</p>
                  <p className="text-sm text-muted-foreground">Chairperson</p>
                </div>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About Day of Scientific Renaissance of Africa</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The Day of Scientific Renaissance of Africa (DSRA) is a continental celebration that recognizes and promotes Africa's scientific heritage and contemporary contributions to global knowledge systems. The Institute of African Studies participates in this celebration with a series of academic events highlighting Africa's intellectual traditions and innovative solutions to contemporary challenges.
            </p>

            <p className="text-sm italic text-muted-foreground">
              This panel welcomes the University of Ghana community and the general public. Attend in person at the venue or participate virtually using the link above.
            </p>
          </article>

          {/* Action Buttons - Bottom */}
          <EventActionButtons buttons={actionButtons} variant="bottom" />

          {/* Back Link */}
          <div className="mt-8 pt-8">
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
