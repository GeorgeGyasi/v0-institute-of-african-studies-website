import { ArrowRight, Download, MapPin, Clock, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Efua Sutherland Centenary Conference 2025",
  description:
    "International conference celebrating Efua Sutherland's centenary with keynotes, thematic panels, creative workshops, and evening performance.",
}

export default function EfuaSutherlandConferenceEvent() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Efua Sutherland Centenary Conference 2025
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Celebrating Efua Sutherland's Legacy: African Scholarly Paradigms Since 1960
          </p>

          {/* Download Program Outline */}
          <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Conference Programme Outline</h3>
                <p className="text-sm text-muted-foreground">Detailed schedule with panel information and speaker profiles</p>
              </div>
              <Link
                href="/documents/efua-sutherland-programme-outline.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Link>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Date</p>
                <p className="text-muted-foreground">March 27-28, 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Time</p>
                <p className="text-muted-foreground">9:30 AM - 9:30 PM (Day One & Two)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Venue</p>
                <p className="text-muted-foreground">
                  Institute of African Studies & School of Performing Arts, University of Ghana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="prose prose-sm max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Conference Theme</h2>
            <p className="italic">
              "Efua Sutherland and the Creation of African Scholarly Paradigms Since 1960: Continuity or Rupture"
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">About This Conference</h2>
            <p>
              The Institute of African Studies, University of Ghana, the Center for African Studies and Mason Gross Theatre at
              Rutgers University, and the School of Performing Arts, University of Ghana are hosting this international conference
              in celebration of Efua Sutherland's centenary (1924-2024).
            </p>
            <p>
              Efua T. Sutherland was a pioneering pan-Africanist author, scholar, cultural activist, dramatist and institution
              builder who joined the Institute of African Studies in the early 1960s. This conference honors her legacies and
              examines whether scholarly pathways since her era represent continuity or rupture from the foundational vision of
              early independence-era intellectuals.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Conference Highlights</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-primary">•</span>
                <span>
                  <strong>Keynote Addresses:</strong> Professor Kofi Anyidoho on "The Ancestral Path Must Never Be Lost" and
                  Professor Marshall Jones on "How We Dramatized the Legacy of Efua Sutherland"
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-primary">•</span>
                <span>
                  <strong>Eight Thematic Panels:</strong> Gender and Development, Knowledge Creation in Africa, Africa and the
                  Diaspora, Film Art and Culture, Ethics Language and Creative License, New Pathways for Research, Theatre and
                  Interpretation, and Digital Storytelling
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-primary">•</span>
                <span>
                  <strong>Creative Workshops:</strong> Akan language workshop on Sutherland's praxis and Fante Moses/Ompe music
                  and dance forms
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-primary">•</span>
                <span>
                  <strong>Evening Performance:</strong> "This is Efua! – An Evening of Theatre in Honour of Efua Sutherland"
                  at the Efua Sutherland Drama Studio
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Keynote Speakers</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Professor Kofi Anyidoho</p>
                <p className="text-sm text-muted-foreground">
                  Writer, Scholar, Performer and Inaugural Occupant of the Kwame Nkrumah Chair in African Studies
                </p>
              </div>
              <div>
                <p className="font-semibold">Professor Marshall Jones</p>
                <p className="text-sm text-muted-foreground">
                  Associate Dean for Equity/Associate Professor, Department of Theater Arts, Mason Gross School of the Arts
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Partnership</h2>
            <p>
              Organized by the Institute of African Studies, University of Ghana, the Center for African Studies and Mason
              Gross Theatre at Rutgers University, the School of Performing Arts at the University of Ghana, and the Busia
              Foundation International.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Participation</h2>
            <p>
              Join us in person or virtually! For the detailed programme outline including panel sessions, speakers, and
              schedule, please download the PDF above.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="https://shorturl.at/lEs44"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join Virtually on Zoom
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://forms.gle/Lm5kwxMRMDX7hGx37"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Register to Attend
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
