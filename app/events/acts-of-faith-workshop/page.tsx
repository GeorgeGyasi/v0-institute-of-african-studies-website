import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Clock, Users, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Advancing Discourse on Acts of Faith in Religious Spaces",
  description:
    "Workshop on rituals, abuse, and conflations of crimes in religious spaces organized by the African Thoughts and Spirituality Unit.",
}

export default function ActsOfFaithWorkshopPage() {
  return (
    <>
      <PageHeader
        title="Advancing Discourse on Acts of Faith in Religious Spaces"
        subtitle="Rituals, Abuse and Conflations of Crimes"
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
                  <p className="font-semibold text-foreground">Thursday, June 13, 2025</p>
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
                  <p className="font-semibold text-foreground">J. H. Nketia Conference Hall</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-12 flex flex-wrap gap-4">
            <Link
              href="https://shorturl.at/QkhxS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Join Virtually
            </Link>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              Celebrating the 2025 Day of Scientific Renaissance of Africa, the African Thoughts and Spirituality (Religion and Philosophy) Unit of the Institute of African Studies invites the university community and the general public to a workshop advancing critical discourse on acts of faith in religious spaces, exploring dimensions of rituals, abuse, and conflations of crimes.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Workshop Overview</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              This workshop brings together leading scholars and practitioners to examine the intersection of religious faith, ritual practice, and social responsibility. Participants will engage with diverse perspectives on how religious institutions address ethical challenges, community needs, and social accountability.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Keynote Speakers</h2>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Dr. Justice A. Arthur</strong> - Scholar and expert in religion and social ethics</li>
              <li><strong>Dr. Fulera Issaka Toure</strong> - Specialist in African religious traditions</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Guest Speakers</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Nana Osofo-Komfo D. Quarm</strong> - Traditional religious leader</li>
              <li><strong>Sheikh Sa-id Mukhtar</strong> - Islamic scholar and community leader</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Workshop Organizers</h2>
            <div className="mb-12 rounded-lg bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Organizers</p>
              </div>
              <p className="text-foreground">Dr. Genevieve Nrenzah (Co-Organizer)</p>
              <p className="text-foreground">Dr. Ahmed B. Mustapha (Co-Organizer)</p>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About This Event</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The African Thoughts and Spirituality (Religion and Philosophy) Unit advances scholarly discourse on African religious traditions, philosophical systems, and their contemporary significance. Through workshops and seminars, the unit promotes deeper understanding of African intellectual heritage and its application to contemporary challenges including social justice and ethical governance.
            </p>

            <p className="text-sm italic text-muted-foreground">
              Both in-person and virtual participation options are available for this workshop. Join us as we advance critical discourse on faith, spirituality, and social responsibility in African contexts.
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
