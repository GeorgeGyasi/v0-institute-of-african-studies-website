import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Advancing Discourse on Acts of Faith in Religious Spaces",
  description:
    "Workshop on rituals, abuse, and conflations of crimes in religious spaces organized by the African Thoughts and Spirituality Unit.",
}

export default function ActsOfFaithWorkshop() {
  return (
    <>
      <PageHeader
        title="Advancing Discourse on Acts of Faith in Religious Spaces"
        subtitle="Rituals, Abuse and Conflations of Crimes"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-sm max-w-none">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Event Details</h2>

            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-card p-6 border border-border">
                <div className="mb-3 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold text-foreground">Thursday, June 13, 2025</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-card p-6 border border-border">
                <div className="mb-3 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold text-foreground">9:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-card p-6 border border-border md:col-span-2">
                <div className="mb-3 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Venue</p>
                    <p className="font-semibold text-foreground">
                      J. H. Nketia Conference Hall, Institute of African Studies, University of Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-foreground">Workshop Overview</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Celebrating the 2025 Day of Scientific Renaissance of Africa, the African Thoughts and Spirituality (Religion and Philosophy) Unit of the Institute of African Studies invites the university community and the general public to participate in this important workshop exploring critical dimensions of faith, religious practices, and their social implications.
            </p>

            <h2 className="mb-6 text-2xl font-bold text-foreground">Distinguished Speakers</h2>

            <h3 className="mb-4 text-xl font-semibold text-foreground">Keynote Speakers</h3>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-foreground">
              <li>Dr. Justice A. Arthur</li>
              <li>Dr. Fulera Issaka Toure</li>
            </ul>

            <h3 className="mb-4 text-xl font-semibold text-foreground">Guest Speakers</h3>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-foreground">
              <li>Nana Osofo-Komfo D. Quarm</li>
              <li>Sheikh Sa-id Mukhtar</li>
            </ul>

            <h2 className="mb-6 text-2xl font-bold text-foreground">Workshop Leadership</h2>

            <div className="mb-6 space-y-3">
              <div className="rounded-lg bg-card p-4 border border-border">
                <p className="text-sm text-muted-foreground">Organisers</p>
                <p className="font-semibold text-foreground">Dr. Genevieve Nrenzah & Dr. Ahmed B. Mustapha</p>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-foreground">Participation Options</h2>

            <div className="mb-8 space-y-4">
              <p className="leading-relaxed text-foreground">
                The workshop welcomes both in-person and virtual participants. Whether attending from the J. H. Nketia Conference Hall or joining online, you will engage with leading scholars and practitioners discussing critical issues at the intersection of faith, ritual, and social responsibility.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://shorturl.at/QkhxS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Join Virtual Workshop
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-foreground">About the Unit</h2>
            <p className="leading-relaxed text-foreground">
              The African Thoughts and Spirituality (Religion and Philosophy) Unit is dedicated to advancing scholarly discourse on African religious traditions, philosophical systems, and their contemporary relevance. Through workshops, seminars, and research initiatives, the unit contributes to a deeper understanding of African intellectual heritage and its application to contemporary challenges including social justice, ethical governance, and cultural preservation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
