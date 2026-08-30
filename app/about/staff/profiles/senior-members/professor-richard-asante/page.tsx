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
                    Richard Asante is an Associate Professor of Comparative Politics at the University of Ghana, Legon. His research focuses on the intersection between politics and development, with special focus on democratisation, the dynamics of Africa-China relations, natural resource governance and communal conflicts, and international peacekeeping and domestic and regional security.

Asante holds B.A. and M.Phil. degrees in Political Science from the University of Ghana, and a Ph.D. in Political Science through the Harvard University–University of Ghana split-Ph.D. programme. He was a special student in the Department of Government at Harvard University in 2008/2009 and has held Visiting Scholar positions at Oxford University, New School University, and the University of Cape Town.

He has also been a visiting professor at Pomona College, where he taught Comparative Politics of Africa and Peace and Security in Africa. He received the 2012/2013 Mellon Postdoctoral Fellowship at Northwestern University, where he taught Comparative Politics and Development in Africa.

Asante is Regional Manager, West Africa, for the Varieties of Democracy (V-Dem) Research Project at the University of Gothenburg, an Afrobarometer Fellow since 2010, and a Catalyst Fellow at the Centre of African Studies at the University of Edinburgh. He has contributed to post-conference policy briefings in Washington, D.C. on electoral politics, power sharing, Africa-China relations, democratic backsliding, and terrorism in West Africa.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Research Areas</h2>
                  <ul className="space-y-3 text-foreground">
                    {[
                      "Democratisation and comparative politics",
                      "Africa-China relations",
                      "Natural resource governance and communal conflicts",
                      "International peacekeeping",
                      "Domestic and regional security",
                    ].map((area) => (
                      <li key={area} className="flex gap-3">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Education</h2>
                    <ul className="space-y-3 text-foreground">
                      <li>B.A. in Political Science, University of Ghana</li>
                      <li>M.Phil. in Political Science, University of Ghana</li>
                      <li>Ph.D. in Political Science, Harvard University–University of Ghana split-Ph.D. programme</li>
                      <li>Special Student, Department of Government, Harvard University (2008/2009)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Academic Contributions</h2>
                  <p className="leading-relaxed text-foreground mb-4">
                    Asante’s work examines the relationship between political change and development in Africa, including democratic transitions, security, peacekeeping, Africa-China relations, natural resources, and communal conflict. His research and policy engagement connect academic analysis with contemporary governance and security challenges.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Recent Publications</h2>
                  <p className="leading-relaxed text-foreground">
                    Professor Asante’s publications address comparative politics, democratisation, Africa-China relations, resource governance, conflict, peacekeeping, and security. A complete and current publication list can be accessed through his Google Scholar profile.
                  </p>
                  <a href="https://scholar.google.com/" className="mt-4 inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                    <Globe className="h-4 w-4" />
                    Google Scholar profile
                  </a>
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
                      <h3 className="font-semibold mb-2">Africa-China Relations and Development</h3>
                      <p className="text-sm">Research on the political, environmental, and security implications of Africa-China relations.</p>
                    </li>
                    <li className="rounded-lg bg-card p-4 border border-border">
                      <h3 className="font-semibold mb-2">Democracy, Peacekeeping and Security</h3>
                      <p className="text-sm">Research and policy engagement on democratic backsliding, electoral politics, power sharing, international peacekeeping, and terrorism in West Africa.</p>
                    </li>
                    <li className="rounded-lg bg-card p-4 border border-border">
                      <h3 className="font-semibold mb-2">Varieties of Democracy (V-Dem)</h3>
                      <p className="text-sm">Regional Manager for West Africa of the V-Dem Research Project at the University of Gothenburg, Sweden.</p>
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
