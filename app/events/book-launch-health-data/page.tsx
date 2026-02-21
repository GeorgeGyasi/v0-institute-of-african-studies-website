import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, Clock, MapPin, Users, ExternalLink, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Book Launch: The Social Life of Health Data",
  description:
    "Official launch of 'The Social Life of Health Data: Health Records and Knowledge Production in Ghana'",
}

export default function BookLaunchHealthData() {
  return (
    <>
      <PageHeader
        title="Book Launch: The Social Life of Health Data"
        subtitle="Health Records and Knowledge Production in Ghana"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Tuesday, May 6, 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              10:00 AM
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              J. H. Nketia Conference Hall, Institute of African Studies, University of Ghana
            </span>
          </div>

          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies, in collaboration with the editors and publisher, is pleased to invite the university community and the general public to the official launch of a groundbreaking book exploring the social dimensions of health data in Ghana's context.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">About the Book</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              "The Social Life of Health Data: Health Records and Knowledge Production in Ghana" offers a critical examination of how health records are created, managed, and understood within Ghanaian society. The book brings together interdisciplinary perspectives to explore the complex intersections between data, health systems, and social contexts that shape knowledge production around health in Ghana.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              Through case studies and ethnographic insights, the editors uncover how health data moves through different institutional, social, and political spaces, demonstrating that data is never merely technical but is fundamentally embedded in social relations, power dynamics, and cultural meanings. This work contributes to broader conversations about digital health, data governance, and African scholarship on health systems.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Editors</h2>
            <div className="mb-6 space-y-3">
              <div className="rounded-lg bg-card p-4 border border-border">
                <p className="font-semibold text-foreground">Alena Thiel</p>
                <p className="text-sm text-muted-foreground">Editor</p>
              </div>
              <div className="rounded-lg bg-card p-4 border border-border">
                <p className="font-semibold text-foreground">Samuel A. Ntewusu</p>
                <p className="text-sm text-muted-foreground">Editor & Director, Institute of African Studies</p>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Event Format</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Join us for an engaging launch event featuring remarks from the editors, insights into the book's research journey, and discussions about the significance of this work for African studies, health policy, and digital governance. The event will include time for questions and networking with the authors and other scholars interested in health data and African scholarship.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              The book launch is open to students, faculty, researchers, and anyone interested in the intersection of health, data, and African societies. Both in-person and virtual participation options are available.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Participate</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://itucph.zoom.us/j/65301257673"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join Virtual Event
                <ExternalLink className="h-4 w-4" />
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
