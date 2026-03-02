import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, Globe, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Albert Awedoba",
  description:
    "Professor of African Anthropology and Religion at the Institute of African Studies, University of Ghana.",
}

export default function ProfessorAwebodaPage() {
  const navigation = getProfileNavigation("professor-albert-awedoba")

  return (
    <>
      <PageHeader
        title="Professor Albert Awedoba"
        subtitle="Professor of African Anthropology and Religion"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Profile Image and Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/professor-albert-awedoba.jpg"
                    alt="Professor Albert Awedoba"
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
                      href="mailto:aawedoba@ug.edu.gh"
                      className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity"
                    >
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">aawedoba@ug.edu.gh</span>
                    </a>
                  </div>
                </div>

                {/* Key Information */}
                <div className="space-y-4 rounded-lg bg-card p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground">Position</h3>
                  <p className="text-sm text-muted-foreground">Professor of African Anthropology and Religion</p>
                  
                  <h3 className="text-lg font-semibold text-foreground pt-4">Specialty</h3>
                  <p className="text-sm text-muted-foreground">African Anthropology & Religion</p>
                </div>
              </div>
            </div>

            {/* Right Column - Biography and Details */}
            <div className="lg:col-span-2">
              <article className="prose prose-invert max-w-none space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Professional Overview</h2>
                  <p className="text-lg leading-relaxed text-foreground">
                    Professor Albert Awedoba is a distinguished scholar of African anthropology and religion at the Institute of African Studies, University of Ghana. With decades of dedicated research and teaching, he has made significant contributions to the understanding of African religious systems, cultural practices, and contemporary social transformation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Research Focus</h2>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>African traditional religions and their contemporary manifestations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Anthropological approaches to African social structure and kinship systems</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Ethnographic studies of African communities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Cultural continuity and change in African societies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Religion and social cohesion in African contexts</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Academic Contributions</h2>
                  <p className="text-foreground mb-4">
                    Professor Awedoba has published extensively in peer-reviewed journals and edited volumes. His work has been instrumental in shaping contemporary discourse on African anthropology and religious studies, with particular focus on how African communities navigate modernization while maintaining cultural and religious identity.
                  </p>
                  <p className="text-foreground">
                    His research has contributed to a more nuanced understanding of African societies, challenging Western-centric perspectives and highlighting the dynamism and complexity of African cultural and religious systems. He has mentored numerous graduate students and collaborated with international scholars on comparative anthropological studies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Teaching and Mentorship</h2>
                  <p className="text-foreground">
                    At the Institute of African Studies, Professor Awedoba teaches courses on African anthropology, religion, and cultural studies. He is known for his engaging teaching style and his commitment to developing the next generation of African scholars. His mentorship has shaped the careers of numerous academics and researchers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Engagements</h2>
                  <p className="text-foreground">
                    Professor Awedoba has been engaged in collaborative research with academic institutions across Africa and internationally. His work contributes to the Institute's mission of advancing African scholarship and fostering dialogue on Africa's intellectual traditions and contemporary challenges.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm italic text-muted-foreground">
                    Professor Awedoba's scholarly work exemplifies the Institute's commitment to rigorous, Africa-centered research that contributes to our understanding of African societies and their place in the global community.
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
