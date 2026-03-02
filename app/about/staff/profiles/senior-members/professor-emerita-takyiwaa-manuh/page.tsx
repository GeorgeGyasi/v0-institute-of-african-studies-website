import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, Globe, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Emerita Takyiwaa Manuh",
  description:
    "Professor Emerita of African Development and Diaspora Studies at the Institute of African Studies, University of Ghana.",
}

export default function ProfessorManuhPage() {
  const navigation = getProfileNavigation("professor-emerita-takyiwaa-manuh")

  return (
    <>
      <PageHeader
        title="Professor Emerita Takyiwaa Manuh"
        subtitle="Professor Emerita"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Profile Image and Contact */}
            <div className="md:col-span-1">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-takyiwaa-manuh.jpg"
                  alt="Professor Emerita Takyiwaa Manuh"
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              {/* Contact Information */}
              <div className="space-y-4 rounded-lg border border-border bg-card p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:tmanuh@ug.edu.gh"
                    className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                  >
                    <Mail className="h-4 w-4" />
                    tmanuh@ug.edu.gh
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Position
                  </p>
                  <p className="text-foreground font-medium">
                    Professor Emerita
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Institute of African Studies
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Section
                  </p>
                  <p className="text-sm text-foreground">
                    Societies and Cultures
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Specialization
                  </p>
                  <p className="text-sm text-foreground">
                    African Development & Diaspora Studies
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Profile */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Profile</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Professor Emerita Takyiwaa Manuh is a distinguished scholar in African Development and Diaspora Studies at the Institute of African Studies, University of Ghana. Throughout her academic career, she has made significant contributions to understanding the complexities of African development, migration, and diaspora communities.
                  </p>
                  <p>
                    Her research interests encompass African diaspora communities, development policy, migration patterns, and the role of diaspora engagement in African development. Professor Manuh has worked extensively on understanding the social, economic, and cultural dimensions of African mobility and its implications for development.
                  </p>
                  <p>
                    With decades of experience in African scholarship, Professor Manuh has contributed meaningfully to discourse on African development trajectories, particularly in understanding how diaspora communities contribute to and are shaped by broader development processes on the continent.
                  </p>
                </div>
              </div>

              {/* Research Areas */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Research Areas</h2>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    African diaspora communities and transnational networks
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    Development policy and African social transformation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    Migration, mobility and social change
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    African intellectual and cultural exchange
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    Societies and cultures of Africa
                  </li>
                </ul>
              </div>

              {/* Scholarly Contributions */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Scholarly Contributions</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Professor Manuh has published extensively on African development issues, diaspora studies, and social transformation. Her work is characterized by rigorous interdisciplinary analysis and commitment to understanding African realities from African perspectives.
                  </p>
                  <p>
                    Her scholarly contributions have helped shape conversations about African development, diaspora engagement, and the role of African intellectuals in global knowledge production. She has mentored numerous students and collaborated with colleagues across African universities and international institutions.
                  </p>
                </div>
              </div>

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
