import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, Globe, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Daniel Avorgbedor",
  description:
    "Professor of Ethnomusicology and Cultural Studies at the Institute of African Studies, University of Ghana.",
}

export default function ProfessorAvorgbedorPage() {
  const navigation = getProfileNavigation("professor-daniel-avorgbedor")

  return (
    <>
      <PageHeader
        title="Professor Daniel Avorgbedor"
        subtitle="Professor of Ethnomusicology and Cultural Studies"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Profile Image and Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/professor-avorgbedor.jpg"
                    alt="Professor Daniel Avorgbedor"
                    width={300}
                    height={400}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-4 rounded-lg bg-card p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground">Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:davorgbedor@ug.edu.gh"
                      className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity"
                    >
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">davorgbedor@ug.edu.gh</span>
                    </a>
                  </div>
                </div>

                {/* Key Information */}
                <div className="space-y-4 rounded-lg bg-card p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground">Position</h3>
                  <p className="text-sm text-muted-foreground">Professor of Ethnomusicology and Cultural Studies</p>
                  
                  <h3 className="text-lg font-semibold text-foreground pt-4">Specialty</h3>
                  <p className="text-sm text-muted-foreground">Ethnomusicology & Cultural Studies</p>
                </div>
              </div>
            </div>

            {/* Right Column - Biography and Details */}
            <div className="lg:col-span-2">
              <article className="prose prose-invert max-w-none space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Professional Overview</h2>
                  <p className="text-lg leading-relaxed text-foreground">
                    Professor Daniel Avorgbedor is a leading scholar in ethnomusicology and African cultural studies at the Institute of African Studies, University of Ghana. His pioneering research has explored the complex relationships between music, culture, identity, and social dynamics in African societies, particularly within West African contexts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Research Focus</h2>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Ethnomusicology of West African music traditions and practices</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Music as a vehicle for cultural expression and social transformation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Traditional African music systems and contemporary adaptations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Performance studies and the anthropology of music-making</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Cultural heritage preservation and intergenerational transmission of musical knowledge</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Academic Contributions</h2>
                  <p className="text-foreground mb-4">
                    Professor Avorgbedor has published extensively in international journals and edited collections on ethnomusicology and African cultural studies. His work has been instrumental in positioning African music and culture within broader academic discourse and has influenced how scholars understand the role of music in African societies.
                  </p>
                  <p className="text-foreground">
                    Through his research, he has demonstrated the intellectual sophistication of African musical traditions and their relevance to contemporary global conversations about cultural identity, heritage preservation, and social change.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Teaching and Mentorship</h2>
                  <p className="text-foreground">
                    At the Institute, Professor Avorgbedor teaches courses on ethnomusicology, African music traditions, and cultural studies. His teaching combines rigorous scholarship with practical engagement with living musical traditions, providing students with both theoretical frameworks and experiential learning opportunities.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Engagements</h2>
                  <p className="text-foreground">
                    Professor Avorgbedor has collaborated with music institutions, cultural organizations, and academic centers internationally. His work contributes significantly to the Institute's mission of advancing African scholarship and fostering global dialogue on African cultural heritage and contemporary cultural studies.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm italic text-muted-foreground">
                    Professor Avorgbedor's scholarly contributions exemplify how ethnomusicology and cultural studies can illuminate the complexity and dynamism of African societies while challenging Western-centric perspectives in the humanities and social sciences.
                  </p>
                </div>
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
