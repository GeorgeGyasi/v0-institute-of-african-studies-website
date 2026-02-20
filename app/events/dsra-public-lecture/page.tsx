import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Day of Scientific Renaissance of Africa (DSRA) Public Lecture",
  description:
    "Pluriversal dialogues about alternative futures featuring Dr. Jan Linhart from the University of Bonn at the Institute of African Studies, University of Ghana.",
}

export default function DSRAPublicLecture() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2">
            <p className="text-sm font-semibold text-primary">June 11, 2025</p>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
            Day of Scientific Renaissance of Africa (DSRA) Public Lecture
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Exploring pluriversal dialogues about alternative futures and cross-cultural learning systems
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Event Information */}
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-4 text-xl font-bold text-foreground">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Calendar className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Date</p>
                      <p className="text-foreground">Wednesday, 11th June 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Time</p>
                      <p className="text-foreground">10:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Venue</p>
                      <p className="text-foreground">J. H. Nketia Conference Hall</p>
                      <p className="text-sm text-muted-foreground">Institute of African Studies, University of Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtual Link */}
              <a
                href="https://tinyurl.com/ytmzacme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Join Virtual Meeting
              </a>
            </div>

            {/* Speaker Information */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold text-foreground">Speaker</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-bold text-foreground">Dr. Jan Linhart</p>
                  <p className="text-sm text-muted-foreground">Senior Research Associate</p>
                  <p className="text-sm text-muted-foreground">Center for Life Ethics, University of Bonn</p>
                </div>
                <p className="leading-relaxed text-foreground">
                  Dr. Jan Linhart is a distinguished researcher specializing in cross-cultural dialogue, pluralistic knowledge systems, and alternative futures. His work bridges Western and non-Western scholarly traditions, exploring how diverse epistemologies can contribute to addressing global challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Lecture Details */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">About the Lecture</h2>
              <p className="mb-4 leading-relaxed text-foreground">
                This public lecture, part of the Day of Scientific Renaissance of Africa (DSRA) initiative, explores the critical question of how we can engage in meaningful pluriversal dialogues about alternative futures. Dr. Linhart will examine what different knowledge traditions and cultures can learn from one another in addressing contemporary global challenges.
              </p>
              <p className="leading-relaxed text-foreground">
                The lecture is open to the university community, researchers, students, and the general public. It represents a significant opportunity to engage with innovative perspectives on African scholarship, global knowledge exchange, and collaborative approaches to understanding our shared future.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Key Topics</h2>
              <ul className="list-disc space-y-2 pl-6 text-foreground">
                <li>Pluriversal approaches to global dialogue and collaboration</li>
                <li>Learning from diverse epistemologies and knowledge systems</li>
                <li>Alternative futures and sustainable development</li>
                <li>The role of African scholarship in global knowledge production</li>
                <li>Building bridges between Western and non-Western academic traditions</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-3 text-lg font-bold text-foreground">Join Us</h3>
              <p className="mb-6 leading-relaxed text-foreground">
                Whether joining in person at the J. H. Nketia Conference Hall or virtually via Zoom, we invite you to participate in this important scholarly conversation. This is an excellent opportunity to engage with cutting-edge thinking on Africa's role in global intellectual discourse.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://tinyurl.com/ytmzacme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Join Virtual Meeting
                </a>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  View Other Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border bg-muted/50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Questions?</h2>
          <p className="mb-4 leading-relaxed text-foreground">
            For more information about this lecture or to request special accommodations, please contact the Institute of African Studies.
          </p>
          <p className="text-sm text-muted-foreground">
            The Institute of African Studies is committed to creating inclusive events. If you have accessibility needs, please reach out in advance.
          </p>
        </div>
      </section>
    </main>
  )
}
