import { Metadata } from "next"
import Link from "next/link"
import { Calendar, MapPin, Clock, Link as LinkIcon, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Day of Scientific Renaissance of Africa (DSRA) Public Lecture",
  description:
    "Join Dr. Jan Linhart for a public lecture on pluriversal dialogues about alternative futures at the Institute of African Studies, University of Ghana.",
}

export default function DSRALecturePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Link href="/events" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80">
            ← Back to Events
          </Link>
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Public Lecture
            </p>
            <h1 className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
              Day of Scientific Renaissance of Africa (DSRA)
            </h1>
            <h2 className="mt-4 text-xl text-muted-foreground">
              "Pluriversal dialogues about alternative futures- but how? What can we really learn from each other?"
            </h2>
          </div>

          {/* Event Details */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <Calendar className="mt-1 h-5 w-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Date</p>
                <p className="text-foreground">Wednesday, June 11, 2025</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <Clock className="mt-1 h-5 w-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Time</p>
                <p className="text-foreground">10:00 AM - 12:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <MapPin className="mt-1 h-5 w-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Venue</p>
                <p className="text-foreground">J. H. Nketia Conference Hall</p>
                <p className="text-sm text-muted-foreground">Institute of African Studies, University of Ghana</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <Users className="mt-1 h-5 w-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Speaker</p>
                <p className="text-foreground">Dr. Jan Linhart</p>
                <p className="text-sm text-muted-foreground">Senior Research Associate: Center for Life Ethics, University of Bonn</p>
              </div>
            </div>
          </div>

          {/* Virtual Link */}
          <div className="mt-6 rounded-lg border border-secondary/30 bg-secondary/5 p-6">
            <div className="flex items-center gap-2 mb-3">
              <LinkIcon className="h-5 w-5 text-secondary" />
              <p className="text-sm font-semibold text-muted-foreground">Virtual Attendance</p>
            </div>
            <Link
              href="https://tinyurl.com/ytmzacme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80"
            >
              Join via Zoom: https://tinyurl.com/ytmzacme
              <span className="text-lg">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">About This Lecture</h2>
              <p className="leading-relaxed text-foreground">
                The Institute of African Studies is pleased to invite the university community and the general public to this important public lecture on pluriversal dialogues about alternative futures. This event is part of the Day of Scientific Renaissance of Africa (DSRA), a pan-African initiative promoting scientific thought and collaboration.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Lecture Overview</h2>
              <p className="leading-relaxed text-foreground">
                Dr. Jan Linhart will explore critical questions about alternative futures and cross-cultural learning. In an increasingly interconnected world, understanding how different knowledge systems can dialogue and contribute to shared futures is essential for advancing scholarship, policy, and social progress.
              </p>
              <p className="mt-4 leading-relaxed text-foreground">
                This lecture invites participants to reflect on what we can truly learn from each other across cultural, disciplinary, and epistemological boundaries, and how pluriversal approaches to knowledge can contribute to more equitable and innovative solutions to global challenges.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">About the Speaker</h2>
              <p className="leading-relaxed text-foreground">
                Dr. Jan Linhart is a Senior Research Associate at the Center for Life Ethics at the University of Bonn, where he focuses on ethical dimensions of scientific research, global knowledge systems, and sustainable development. His work bridges Western academic traditions with non-Western epistemologies, advocating for pluriversal approaches to understanding and solving complex global problems.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Who Should Attend?</h2>
              <p className="leading-relaxed text-foreground">
                This lecture is open to the entire university community and the general public. It is particularly relevant for researchers, students, and practitioners in African Studies, philosophy, ethics, sciences, development studies, and all fields interested in global collaboration and alternative futures.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground mb-4">
                For inquiries or further information about this event, please contact the Institute of African Studies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-2 font-semibold text-secondary-foreground hover:opacity-90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
