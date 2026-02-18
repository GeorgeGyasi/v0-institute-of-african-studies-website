import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionNavigation } from "@/components/section-navigation"

export const metadata: Metadata = {
  title: "Media and Visual Art",
  description:
    "Explore the Media and Visual Art section at the Institute of African Studies, featuring faculty research, exhibitions, and academic resources.",
}

export default function MediaVisualArtPage() {
  const faculty = [
    {
      name: "Prof. Kwame Amoah Labi",
      expertise: "African Art History"
    },
    {
      name: "Dr. Irene Appeaning Addo",
      expertise: "Architectural History"
    },
  ]

  const courses = {
    masters: [
      { semester: "First Semester", course: "Survey of African Art" },
      { semester: "Second Semester", course: "Methodologies for Constructing Art History in Selected African Societies" },
    ],
    phd: [
      { semester: "First Semester", course: "Historiography of African Art" },
      { semester: "Second Semester", course: "Contemporary African Art History" },
    ],
  }

  const resources = [
    "Museum collections and exhibitions",
    "Audio-visual laboratory",
    "Photo archives",
    "Music archives",
    "Paper archives in the Kwabena Nketia Archives",
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/about/sections-units"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sections
        </Link>

        <PageHeader
          title="Media and Visual Art"
          subtitle="Specialised research and archival units within the Institute"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-12">
            {/* About the Section */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground">About the Section</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The Media and Visual Arts Section of the Institute of African Studies at the University of Ghana is one of the six sections of the Institute. The section handles the teaching, learning, and researching into African Art and its history and the material culture on the African Continent and in the diaspora while situating these within global art history discourses.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The section attaches great importance to interdisciplinary research and learning and is made up of faculty members with expertise in African Art History and Architectural History.
              </p>
            </section>

            {/* Courses */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Courses Offered</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Master's Level (MA, MPhil)</h3>
                  <ul className="space-y-2">
                    {courses.masters.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                        <div>
                          <span className="text-sm text-muted-foreground font-medium">{item.semester}: </span>
                          <span className="text-base text-muted-foreground">{item.course}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">PhD Level</h3>
                  <ul className="space-y-2">
                    {courses.phd.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                        <div>
                          <span className="text-sm text-muted-foreground font-medium">{item.semester}: </span>
                          <span className="text-base text-muted-foreground">{item.course}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Academic Resources */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Academic Resources</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The section has access to several key resources supporting research and learning:
              </p>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-base text-muted-foreground">
                      {resource}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="rounded-lg border border-border bg-card p-6">
                <SectionNavigation />
              </div>

              {/* Faculty Members */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">Faculty Members</h3>
                <div className="space-y-3">
                  {faculty.map((member) => (
                    <div key={member.name} className="pb-3 border-b border-border last:border-b-0 last:pb-0">
                      <p className="text-sm font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.expertise}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Research Areas */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">Key Research Areas</h3>
                <ul className="space-y-2">
                  {[
                    "African Art History",
                    "Material Culture",
                    "Architectural History",
                    "Visual Expression",
                    "Art Curation",
                    "Global Art History",
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
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
