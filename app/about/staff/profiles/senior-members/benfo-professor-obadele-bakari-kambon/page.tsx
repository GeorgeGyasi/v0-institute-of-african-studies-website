import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Ɔbenfo (Professor) Ọbádélé Bakari Kambon",
  description:
    "Ɔbenfo (Professor) Ọbádélé Bakari Kambon specializes in African Philosophy and Consciousness at the Institute of African Studies, University of Ghana.",
}

export default function ProfessorKambonPage() {
  const navigation = getProfileNavigation("benfo-professor-obadele-bakari-kambon")

  return (
    <>
      <PageHeader
        title="Ɔbenfo (Professor) Ọbádélé Bakari Kambon"
        subtitle="Professor of African Philosophy & Consciousness"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Profile Image and Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/professor-obadele-kambon.jpg"
                    alt="Ɔbenfo (Professor) Ọbádélé Bakari Kambon"
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
                      href="mailto:okambon@ug.edu.gh"
                      className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity"
                    >
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">okambon@ug.edu.gh</span>
                    </a>
                  </div>
                </div>

                {/* Key Information */}
                <div className="space-y-4 rounded-lg bg-card p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground">Position</h3>
                  <p className="text-sm text-muted-foreground">Ɔbenfo (Professor) - African Philosophy & Consciousness</p>
                  
                  <h3 className="text-lg font-semibold text-foreground pt-4">Section</h3>
                  <p className="text-sm text-muted-foreground">Language, Literature & Drama</p>
                </div>
              </div>
            </div>

            {/* Right Column - Biography and Details */}
            <div className="lg:col-span-2">
              <article className="prose prose-invert max-w-none space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Professional Overview</h2>
                  <p className="text-lg leading-relaxed text-foreground">
                    Ɔbenfo (Professor) Ọbádélé Bakari Kambon is a distinguished scholar of African Philosophy and Consciousness at the Institute of African Studies, University of Ghana. His scholarly work centers on African intellectual traditions, philosophical systems, and the development of African consciousness as a foundation for understanding African societies and their contributions to global thought.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Research Focus</h2>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>African philosophical traditions and epistemologies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>African consciousness and identity formation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Language, literature and philosophical expression in African cultures</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Intellectual history of Africa and the African diaspora</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>African contributions to global philosophy and thought</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Research Coordination</h2>
                  <p className="text-foreground mb-4">
                    As Research Coordinator for the Language, Literature, and Drama section, Professor Kambon plays a vital role in fostering collaborative scholarship and coordinating research initiatives that advance the section's mission of rigorous African-centered inquiry. He facilitates interdisciplinary dialogue among faculty and supports the development of innovative research projects.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Academic Contributions</h2>
                  <p className="text-foreground mb-4">
                    Professor Kambon has published extensively on African philosophy, consciousness studies, and intellectual history. His work challenges Western-centric philosophical frameworks and centers African intellectual agency, arguing for the recognition of Africa's philosophical contributions to universal human knowledge and understanding.
                  </p>
                  <p className="text-foreground">
                    His scholarship has influenced contemporary discourse on African identity, cultural studies, and decolonization within academic communities across Africa and the African diaspora, making significant contributions to Pan-African intellectual development.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Teaching and Mentorship</h2>
                  <p className="text-foreground">
                    Professor Kambon teaches courses on African philosophy, consciousness studies, and the intellectual history of Africa. He is committed to developing scholars who can engage with African philosophical traditions rigorously and contribute to the advancement of African scholarship globally. His mentorship has significantly shaped academic careers in philosophy and African studies.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm italic text-muted-foreground">
                    Professor Kambon's scholarship exemplifies the Institute's commitment to centering African intellectual traditions and advancing rigorous scholarship on African philosophy and consciousness.
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
