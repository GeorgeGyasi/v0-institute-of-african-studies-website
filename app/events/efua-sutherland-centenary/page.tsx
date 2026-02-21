import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Clock, Users, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Efua Sutherland Centenary Conference 2025",
  description:
    "International conference celebrating Efua Sutherland's centenary with keynotes, thematic panels, creative workshops, and evening performance.",
}

export default function EfuaSutherlandCentennaryPage() {
  return (
    <>
      <PageHeader
        title="Efua Sutherland Centenary Conference 2025"
        subtitle="Celebrating African Scholarly Paradigms Since 1960: Continuity or Rupture"
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
                  <p className="font-semibold text-foreground">March 27-28, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">9:30 AM - 5:25 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Venue</p>
                  <p className="font-semibold text-foreground">IAS & School of Performing Arts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="/documents/efua-sutherland-programme-outline.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
            <Link
              href="https://shorturl.at/lEs44"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Join Virtually
            </Link>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies, University of Ghana, the Center for African Studies and Mason Gross Theatre at Rutgers University, the School of Performing Arts, University of Ghana, and the Busia Foundation International invite you to an international conference celebrating Efua Sutherland's centenary (1924-2024).
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About Efua Sutherland</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Efua T. Sutherland was a pioneering pan-Africanist author, scholar, cultural activist, dramatist, and institution builder who joined the Institute of African Studies in the early 1960s. This conference honors her legacies and examines whether scholarly pathways since her era represent continuity or rupture from the foundational vision of early independence-era intellectuals.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Conference Highlights</h2>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Keynote Addresses:</strong> Prof. Kofi Anyidoho and Prof. Marshall Jones</li>
              <li><strong>Eight Thematic Panels:</strong> Gender & Development, Knowledge Creation, Africa & Diaspora, Film Art & Culture, Ethics & Creative License, Research Pathways, Theatre & Interpretation, Digital Storytelling</li>
              <li><strong>Creative Workshops:</strong> Akan language and Fante Moses/Ompe music and dance</li>
              <li><strong>Evening Performance:</strong> "This is Efua! – An Evening of Theatre in Honour of Efua Sutherland"</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Keynote Speakers</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Professor Kofi Anyidoho</strong> - Writer, Scholar, Performer, and Inaugural Occupant of the Kwame Nkrumah Chair in African Studies</li>
              <li><strong>Professor Marshall Jones</strong> - Associate Dean and Associate Professor, Department of Theater Arts, Mason Gross School of the Arts, Rutgers University</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Conference Organizers</h2>
            <div className="mb-12 rounded-lg bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Partners & Organizers</p>
              </div>
              <ul className="space-y-2 text-foreground">
                <li>Institute of African Studies, University of Ghana</li>
                <li>Rutgers University Center for African Studies</li>
                <li>School of Performing Arts, University of Ghana</li>
                <li>Busia Foundation International</li>
              </ul>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Conference Theme</h2>
            <p className="mb-6 text-lg italic font-semibold text-primary">
              "Efua Sutherland and the Creation of African Scholarly Paradigms Since 1960: Continuity or Rupture"
            </p>

            <p className="text-sm italic text-muted-foreground">
              Join us in person or virtually to celebrate Efua Sutherland's intellectual legacy and explore contemporary African scholarship. Download the detailed conference programme above for complete information on all panels and sessions.
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
