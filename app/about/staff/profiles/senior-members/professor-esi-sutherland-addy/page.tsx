import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Esi Sutherland-Addy",
  description:
    "Professor of African Literature and Linguistics at the Institute of African Studies, University of Ghana.",
}

export default function ProfessorEsiSutherlandPage() {
  const navigation = getProfileNavigation("professor-esi-sutherland-addy")

  return (
    <>
      <PageHeader
        title="Professor Esi Sutherland-Addy"
        subtitle="Professor of African Literature & Linguistics"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Main Profile Section */}
          <div className="mb-12 grid gap-8 lg:grid-cols-3">
            {/* Left Column - Profile Image & Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Profile Image */}
                <div className="relative aspect-square overflow-hidden rounded-lg border border-border">
                  <Image
                    src="/images/professor-esi-sutherland.jpg"
                    alt="Professor Esi Sutherland-Addy"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Contact Information */}
                <div className="rounded-lg border border-border bg-muted p-6 space-y-4">
                  <h3 className="font-semibold text-foreground">Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:esutherland@ug.edu.gh"
                      className="flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
                    >
                      <Mail className="h-4 w-4" />
                      esutherland@ug.edu.gh
                    </a>
                  </div>
                </div>

                {/* Key Facts */}
                <div className="rounded-lg border border-border bg-muted p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">Specialty</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• African Literature</li>
                    <li>• Linguistics</li>
                    <li>• Language Documentation</li>
                    <li>• Cultural Studies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Overview */}
              <article className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">Profile</h2>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  Professor Esi Sutherland-Addy is a Professor of African Literature and Linguistics at the Institute of African Studies, University of Ghana. Her scholarly work contributes significantly to the understanding of African literary traditions and linguistic diversity.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Research Focus</h3>
                <p className="leading-relaxed text-foreground mb-4">
                  Professor Sutherland-Addy's research encompasses:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-foreground mb-6">
                  <li>African literature and oral traditions</li>
                  <li>Linguistic analysis of African languages</li>
                  <li>Language documentation and preservation</li>
                  <li>Cultural studies and narrative analysis</li>
                  <li>Drama and performance studies</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Academic Contributions</h3>
                <p className="leading-relaxed text-foreground mb-4">
                  As a member of the Language, Literature, and Drama section at the Institute, Professor Sutherland-Addy contributes to the Institute's mission of advancing African scholarship. She has been involved in numerous collaborative research projects and has mentored graduate and undergraduate students in African languages, literature, and dramatic arts.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Teaching & Mentorship</h3>
                <p className="leading-relaxed text-foreground mb-4">
                  Professor Sutherland-Addy is dedicated to undergraduate and graduate education, offering rigorous courses in African literature and linguistics. Her teaching emphasizes both theoretical understanding and practical engagement with African texts and languages.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Institutional Leadership</h3>
                <p className="leading-relaxed text-foreground">
                  As part of the core faculty in the Language, Literature, and Drama section alongside Dr. Ọbádélé Kambon (Research Coordinator), Dr. Edward Nanbigne, and Dr. Mercy Akrofi Ansah, Professor Sutherland-Addy contributes to the section's vision of offering graduate and undergraduate courses based on rigorous research in African languages, literature, and drama.
                </p>
              </article>

              {/* Navigation */}
              {navigation && (
                <ProfileNavigation
                  previousSlug={navigation.previous.slug}
                  nextSlug={navigation.next.slug}
                  previousName={navigation.previous.name}
                  nextName={navigation.next.name}
                  isFirst={navigation.isFirst}
                  isLast={navigation.isLast}
                />
              )}

              {/* Back Link */}
              <div className="mt-8 pt-8">
                <a
                  href="/about/staff"
                  className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                >
                  ← Back to Staff Directory
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
