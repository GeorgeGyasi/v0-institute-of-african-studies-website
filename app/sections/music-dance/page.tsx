import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionNavigation } from "@/components/section-navigation"

export const metadata: Metadata = {
  title: "Music and Dance",
  description:
    "One of the founding wings of the Institute of African Studies, exploring ethnomusicology, African music and dance traditions.",
}

export default function MusicDancePage() {
  const faculty = [
    {
      name: "Dr. Nii Moses Dortey",
      role: "Coordinator, Music and Dance Section",
    },
    {
      name: "Professor Daniel K. Avorgbedor",
      role: "Professor",
    },
    {
      name: "Mr. Benjamin Obido Ayettey",
      role: "Lecturer",
    },
    {
      name: "Mr. Zakariah Abdallah Zablong",
      role: "Lecturer",
    },
  ]

  const undergradCourses = [
    { code: "UGRC 225", name: "African Dance" },
    { code: "UGRC 227", name: "African Music" },
  ]

  const mastersCourses = [
    { code: "AFST 617", name: "Traditional African Music" },
    { code: "AFST 618", name: "Contemporary African Music" },
  ]

  const phdCourses = [
    { code: "AFST 709", name: "New Directions in Ethnomusicological Discourses" },
    { code: "AFST 708", name: "Sound, Sense and Identity in Black/African Art Music" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link href="/about/sections-units" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Sections
        </Link>

        <PageHeader
          title="Music and Dance"
          subtitle="One of the founding wings of the Institute since 1962"
        />

        <div className="grid gap-12 lg:grid-cols-4 mt-12">
          <div className="lg:col-span-3 space-y-12">
            {/* About */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                About the Section
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Music and Dance section is one of the founding wings of the Institute right from its inception in 1962. The section, as its name depicts, embodies the music and dance sub-units and the Ghana Dance Ensemble. The section is responsible for two mandatory introductory courses for undergraduate students as a requirement for their degree programme: UGRC 225 (African Dance) and UGRC 227 (African Music). The only requirement for students who sign up for these introductory courses is that they must not be dance/music majors.
              </p>
            </div>

            {/* Undergraduate Courses */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Undergraduate Courses
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Mandatory introductory courses for undergraduate students:
              </p>
              <div className="space-y-3">
                {undergradCourses.map((course, index) => (
                  <div key={index} className="rounded-lg border border-border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{course.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{course.code}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Master's Level Courses */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Master's Level (MA, MPhil)
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Ethnomusicology courses available for both music/dance and non-music/dance majors. These courses emphasize traditional and contemporary African/diasporan music histories, ethnographies, and anthropology with minimal technicalities. Students from diverse backgrounds such as African Oral Literature, African Religions, and Gender Studies have found these courses valuable for their research areas.
              </p>
              <div className="space-y-3">
                {mastersCourses.map((course, index) => (
                  <div key={index} className="rounded-lg border border-border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{course.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{course.code}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PhD Level Courses */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                PhD Level
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                PhD courses are designed for those with academic interests. These courses interrogate emergent theoretical and analytical ideas in ethnomusicology, including new developments in field methods and ethnography, influences from cognate fields such as neuroscience, mobilities, ecomusicology, and heritage and sustainability studies. A strong background in ethnomusicology, music theory, dance anthropology, ethnochoreology, or performance studies is recommended.
              </p>
              <div className="space-y-3">
                {phdCourses.map((course, index) => (
                  <div key={index} className="rounded-lg border border-border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{course.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{course.code}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Faculty */}
              <div className="rounded-lg border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  Faculty
                </h3>
                <div className="space-y-4">
                  {faculty.map((member, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <h4 className="font-semibold text-sm text-foreground">{member.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Focus Areas */}
              <div className="rounded-lg border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  Key Focus Areas
                </h3>
                <ul className="space-y-2">
                  {[
                    "Ethnomusicology",
                    "African Music History",
                    "Dance Traditions",
                    "Contemporary African Music",
                    "Performance Studies",
                    "Heritage Preservation",
                  ].map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
