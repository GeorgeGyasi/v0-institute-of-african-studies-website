import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Media and Visual Art | IAS",
  description:
    "Explore the Media and Visual Art section of the Institute of African Studies, dedicated to contemporary visual expression and digital culture.",
}

export default function MediaVisualArtPage() {
  return (
    <>
      <PageHeader
        title="Media and Visual Art"
        subtitle="Exploring contemporary visual expression and digital culture"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <Link
              href="/about/sections-units"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sections
            </Link>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Section Overview
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The Media and Visual Art section explores the dynamic landscape of African contemporary visual expression, digital culture, and emerging media practices. We examine how African artists, filmmakers, photographers, and digital creators engage with visual representation to communicate identity, social commentary, and cultural values.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Our work bridges traditional artistic practices with contemporary media technologies, investigating how visual culture shapes and reflects African societies in the digital age.
                </p>
              </div>

              {/* Research Focus */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Research Focus
                </h2>
                <div className="grid gap-6">
                  {[
                    {
                      title: "Contemporary Visual Arts",
                      description: "Study of contemporary African art practices, installations, and visual expressions across diverse media and contexts.",
                    },
                    {
                      title: "Photography and Documentary",
                      description: "Investigation of photography as a tool for historical documentation, social commentary, and artistic expression in African contexts.",
                    },
                    {
                      title: "Film and Digital Media",
                      description: "Analysis of African cinema, video art, and digital media as forms of cultural expression and communication.",
                    },
                    {
                      title: "Visual Representation",
                      description: "Examination of how visual culture represents African identity, politics, and social transformation.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card p-6">
                      <h3 className="mb-2 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Projects */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Active Research Projects
                </h2>
                <ul className="space-y-3">
                  {[
                    "Digital Cultural Heritage Documentation",
                    "Contemporary African Art and Activism",
                    "Film Studies and African Cinema",
                    "Photography and Historical Memory",
                    "New Media and Digital Culture in Africa",
                  ].map((project, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-base text-muted-foreground">
                        {project}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engagement */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Public Engagement
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The section organizes exhibitions, film screenings, digital workshops, and public lectures that engage with contemporary visual culture. We collaborate with artists, cultural institutions, and media organizations to promote African visual arts and foster dialogue about the role of media in society.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 rounded-lg border border-border bg-card p-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
                    Key Research Areas
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Visual Arts",
                      "Contemporary Media",
                      "Digital Culture",
                      "Photography",
                      "Film Studies",
                      "Art Activism",
                    ].map((area, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
                    Connect
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For inquiries about exhibitions, collaborations, or research opportunities.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
