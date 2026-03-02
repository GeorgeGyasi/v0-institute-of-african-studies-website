import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, Globe, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Richard Asante",
  description:
    "Professor of African History and Governance at the Institute of African Studies, University of Ghana.",
}

export default function ProfessorAsantePage() {
  const navigation = getProfileNavigation("professor-richard-asante")

  return (
    <>
      <PageHeader
        title="Professor Richard Asante"
        subtitle="Professor of African History and Governance"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Profile Image and Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/professor-asante.jpg"
                    alt="Professor Richard Asante"
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
                      href="mailto:rasante@ug.edu.gh"
                      className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity"
                    >
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">rasante@ug.edu.gh</span>
                    </a>
                  </div>
                </div>

                {/* Key Information */}
                <div className="space-y-4 rounded-lg bg-card p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground">Position</h3>
                  <p className="text-sm text-muted-foreground">Professor of African History and Governance</p>
                  
                  <h3 className="text-lg font-semibold text-foreground pt-4">Specialty</h3>
                  <p className="text-sm text-muted-foreground">African History & Governance</p>
                </div>
              </div>
            </div>

            {/* Right Column - Biography and Details */}
            <div className="lg:col-span-2">
              <article className="prose prose-invert max-w-none space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Professional Overview</h2>
                  <p className="text-lg leading-relaxed text-foreground">
                    Professor Richard Asante is a distinguished scholar of African history and governance at the Institute of African Studies, University of Ghana. With extensive research and teaching experience, he has contributed significantly to the understanding of African political systems, historical governance structures, and contemporary state formation in Africa.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Research Focus</h2>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>African political history and governance systems</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Traditional forms of African leadership and administration</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Post-colonial state development in Africa</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Comparative African governance structures</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Historical analysis of political transitions in African societies</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Academic Contributions</h2>
                  <p className="leading-relaxed text-foreground mb-4">
                    Professor Asante has published extensively on African political history, with particular emphasis on the governance structures and political transitions among Asante communities in Ghana. His work examines how traditional political systems have adapted to modern state structures, and explores the continuities and transformations in African governance.
                  </p>
                  <p className="leading-relaxed text-foreground">
                    His research has been supported by major funding bodies, including the Ford Foundation, enabling him to conduct extensive field research on political systems and their evolution in contemporary African contexts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Teaching and Mentorship</h2>
                  <p className="leading-relaxed text-foreground">
                    As an experienced educator, Professor Asante has taught numerous courses on African history, political systems, and governance to undergraduate and graduate students. He is committed to developing the next generation of African scholars and has supervised numerous research projects focusing on African political development and historical analysis.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Research Projects</h2>
                  <ul className="space-y-4 text-foreground">
                    <li className="rounded-lg bg-card p-4 border border-border">
                      <h3 className="font-semibold mb-2">Ford Foundation Funded Research</h3>
                      <p className="text-sm">Research on traditional forms of governance with emphasis on political transitions among the Asantes in Ghana, examining how indigenous political systems engage with modern democratic institutions.</p>
                    </li>
                    <li className="rounded-lg bg-card p-4 border border-border">
                      <h3 className="font-semibold mb-2">Comparative African Governance Studies</h3>
                      <p className="text-sm">Investigation of governance models across different African societies, analyzing the interplay between traditional authority and state power.</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Roles</h2>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Professor of African History and Governance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Member, Institute of African Studies Faculty</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>Advisor to graduate students in African History programs</span>
                    </li>
                  </ul>
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
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
