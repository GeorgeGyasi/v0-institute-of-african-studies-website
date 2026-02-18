import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Media and Visual Art | IAS",
  description:
    "The Media and Visual Arts Section teaches, researches, and explores African art history, material culture, and visual expression within global art history contexts.",
}

export default function MediaVisualArtPage() {
  return (
    <>
      <PageHeader
        title="Media and Visual Art"
        subtitle="African Art History, Material Culture, and Visual Expression"
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
                  The Media and Visual Arts Section of the Institute of African Studies at the University of Ghana is one of the six sections of the Institute. The section handles the teaching, learning, and researching into African Art and its history and the material culture on the African Continent and in the diaspora while situating these within global art history discourses.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The section attaches great importance to interdisciplinary research and learning and is made up of faculty members with expertise in African Art History and Architectural History.
                </p>
              </div>

              {/* Courses */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Graduate and Undergraduate Courses
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">MA/MPhil Level</h3>
                    <ul className="space-y-2">
                      {[
                        "Survey of African Art (First Semester)",
                        "Methodologies for Constructing Art History in Selected African Societies (Second Semester)",
                      ].map((course, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                          <span className="text-base text-muted-foreground">
                            {course}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">PhD Level</h3>
                    <ul className="space-y-2">
                      {[
                        "Historiography of African Art (First Semester)",
                        "Contemporary African Art History (Second Semester)",
                      ].map((course, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                          <span className="text-base text-muted-foreground">
                            {course}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Faculty */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Faculty Members
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      name: "Prof. Kwame Amoah Labi",
                      expertise: "African Art History"
                    },
                    {
                      name: "Dr. Irene Appeaning Addo",
                      expertise: "Architectural History"
                    },
                  ].map((member, index) => (
                    <div key={index} className="rounded-lg border border-border p-4">
                      <h4 className="font-semibold text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{member.expertise}</p>
              {/* Academic Resources */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Academic Resources
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  The section has access to several key resources supporting research and learning:
                </p>
                <ul className="space-y-3">
                  {[
                    "Museum collections and exhibitions",
                    "Audio-visual laboratory",
                    "Photo archives",
                    "Music archives",
                    "Paper archives in the Kwabena Nketia Archives",
                  ].map((resource, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-base text-muted-foreground">
                        {resource}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
                  ))}
                </div>
              </div>

              {/* Exhibitions and Curation */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Curated Exhibitions
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The section has curated several exhibitions including Kuduo and University of Ghana Architecture. The recent exhibition titled <span className="italic">'Every Human Being is a Human Being'</span> was first showcased in the Memphis in May 2022 – International Salute to Ghana Exhibition.
                </p>
                <a 
                  href="https://memphisinmay.org/events/international-salute-to-ghana/experience/exhibits/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:text-primary/80 font-medium text-sm mt-2"
                >
                  View International Salute to Ghana Exhibition →
                </a>
              </div>

              {/* Research Activities */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Research Activities
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  The research activities of the faculty members include:
                </p>
                <ul className="space-y-3">
                  {[
                    "A study of the Fante Asafo Flag of Ghana",
                    "Kuduo-Brass Weights",
                    "Architectural Transitions in Northern Ghana",
                    "African Urbanisms and the Built Environment",
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
