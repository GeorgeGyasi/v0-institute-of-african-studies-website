import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Book Launch: The Social Life of Health Data",
  description:
    "Official launch of 'The Social Life of Health Data: Health Records and Knowledge Production in Ghana' exploring critical intersections of data, health, and society.",
}

export default function BookLaunchHealthDataPage() {
  return (
    <>
      <PageHeader
        title="Book Launch: The Social Life of Health Data"
        subtitle="Health Records and Knowledge Production in Ghana"
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
                  <p className="font-semibold text-foreground">Tuesday, May 6, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">10:00 AM</p>
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
              href="https://itucph.zoom.us/j/65301257673"
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
              The Institute of African Studies, University of Ghana, in collaboration with the editors and publisher, invites you to the official launch of "The Social Life of Health Data: Health Records and Knowledge Production in Ghana," a groundbreaking exploration of the intersection between health data, knowledge production, and society.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About the Book</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              This book provides a critical examination of how health records are created, managed, interpreted, and understood within Ghanaian society. By bringing together interdisciplinary perspectives, the editors illuminate the complex relationships between data systems, health institutions, and social contexts that shape knowledge production around health in Ghana and across Africa.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              Through case studies and ethnographic insights, the work demonstrates that health data is never merely technical but is fundamentally embedded in social relations, power dynamics, and cultural meanings. This contribution is essential for students, researchers, policymakers, and health professionals seeking to understand the complex intersections of data, health, and society in African contexts.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Book Editors</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Alena Thiel</strong> - International collaborator and lead editor</li>
              <li><strong>Samuel A. Ntewusu</strong> - Director of the Institute of African Studies</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Event Overview</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Join us for an engaging launch event featuring remarks from the editors, insights into the book's research journey, and discussions with scholars interested in health data, African studies, and digital governance. The event welcomes students, faculty, researchers, and anyone engaged with the intersection of health, data, and African societies.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Participating Institution</h2>
            <div className="mb-12 rounded-lg bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Host</p>
              </div>
              <p className="text-foreground">Institute of African Studies, University of Ghana</p>
            </div>

            <p className="text-sm italic text-muted-foreground">
              Both in-person and virtual participation options are available for this book launch. Join us as we celebrate this significant contribution to African scholarship on health, data, and society.
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
