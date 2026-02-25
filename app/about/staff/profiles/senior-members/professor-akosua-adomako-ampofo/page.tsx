import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, Globe, BookOpen, Award, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Akosua Adomako Ampofo",
  description:
    "Professor of African and Gender Studies at the Institute of African Studies, University of Ghana. Activist scholar specializing in African knowledge systems, gender relations, and masculinities.",
}

export default function ProfessorAdomakoPage() {
  const navigation = getProfileNavigation("professor-akosua-adomako-ampofo")

  return (
    <>
      <PageHeader
        title="Professor Akosua Adomako Ampofo"
        subtitle="Professor of African and Gender Studies"
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
                    src="/images/professor-adomako.jpg"
                    alt="Professor Akosua Adomako Ampofo"
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
                      href="mailto:adomako@ug.edu.gh"
                      className="flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
                    >
                      <Mail className="h-4 w-4" />
                      adomako@ug.edu.gh
                    </a>
                    <a
                      href="https://adomakoampofo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
                    >
                      <Globe className="h-4 w-4" />
                      adomakoampofo.com
                    </a>
                    <a
                      href="https://twitter.com/adomakoampofo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink className="h-4 w-4" />
                      @adomakoampofo
                    </a>
                  </div>
                </div>

                {/* Key Facts */}
                <div className="rounded-lg border border-border bg-muted p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">Key Roles</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• President, African Studies Association of Africa</li>
                    <li>• Honorary Professor, University of Birmingham</li>
                    <li>• Fellow, Ghana Academy of Arts and Sciences</li>
                    <li>• Former Director, Institute of African Studies (2010-2015)</li>
                    <li>• Former Dean, International Programmes</li>
                    <li>• Founding Director, Centre for Gender Studies & Advocacy (2005-2009)</li>
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
                  Professor Akosua Adomako Ampofo is a Professor of African and Gender Studies at the Institute of African Studies, University of Ghana. An accomplished activist scholar, she combines rigorous academic research with meaningful social engagement and advocacy.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Research Focus</h3>
                <p className="leading-relaxed text-foreground mb-4">
                  Adomako Ampofo's scholarship explores critical intersections in African society and diaspora communities. Her research areas include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                  <li>African Knowledge Systems and Decolonizing the Academy</li>
                  <li>Gender Relations and Social Transformation</li>
                  <li>Black Youth Masculinities in Africa and the Diaspora</li>
                  <li>Higher Education and Academic Excellence</li>
                  <li>Popular Culture and Citizenship</li>
                  <li>Reproductive Health and Sexualities</li>
                  <li>Race and Identity Politics</li>
                  <li>Women's Work and Economic Participation</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Current Research Projects</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                  <li><strong>African Knowledge Systems and Decolonizing the Academy:</strong> Exploring how African intellectual traditions can transform higher education and knowledge production.</li>
                  <li><strong>Black Youth Masculinities in Africa and the Diaspora:</strong> Multi-country study examining shifting identities among young men in Ghana, Germany, Kenya, Tanzania, South Africa, Canada, and the US.</li>
                  <li><strong>An Archive of Activism:</strong> Collaborative project with University of Birmingham creating a publicly accessible archive and documentary on gender activism and "political women" in postcolonial Ghana (funded by British Academy).</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Academic Leadership</h3>
                <div className="bg-card border border-border rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-foreground">
                    <li><strong>Editor-in-Chief:</strong> Contemporary Journal of African Studies</li>
                    <li><strong>Co-Editor:</strong> Critical Investigations into Humanitarianism in Africa blog</li>
                    <li><strong>Board Member:</strong> U.S. African Studies Association; Centre for the Advancement of Scholarship (University of Pretoria); Africa Multiple Cluster of Excellence, University of Bayreuth (Chairperson); Perivoli Africa Research Centre (University of Bristol); Institute for Humanities in Africa, HUMA (University of Cape Town)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Education</h3>
                <div className="space-y-4 text-foreground">
                  <div>
                    <p className="font-semibold">Doctor of Philosophy in Sociology</p>
                    <p className="text-muted-foreground">Vanderbilt University, Nashville, TN</p>
                  </div>
                  <div>
                    <p className="font-semibold">Master of Science, Development Planning & Management</p>
                    <p className="text-muted-foreground">Kwame Nkrumah University of Science and Technology, Kumasi</p>
                  </div>
                  <div>
                    <p className="font-semibold">Post-graduate Diploma, Regional and Spatial Planning</p>
                    <p className="text-muted-foreground">University of Dortmund, Dortmund</p>
                  </div>
                  <div>
                    <p className="font-semibold">Bachelor of Science, Architectural Design</p>
                    <p className="text-muted-foreground">Kwame Nkrumah University of Science and Technology</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Teaching</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Undergraduate Courses</h4>
                    <ul className="list-disc pl-6 space-y-1 text-foreground text-sm">
                      <li>Gender and Culture in Africa</li>
                      <li>Introduction to African Studies</li>
                      <li>Issues in Population & Development in Africa</li>
                      <li>Gender and Development in Africa</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Graduate Courses</h4>
                    <ul className="list-disc pl-6 space-y-1 text-foreground text-sm">
                      <li>Culture and Gender in African Societies</li>
                      <li>Gender and Development in African Societies</li>
                      <li>Research Methods</li>
                      <li>Advanced Research Methods</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Student Supervision</h3>
                <p className="text-foreground mb-4">
                  <strong>Masters & Ph.D Theses Supervised:</strong> 48 completed | <strong>Current PhD Supervision:</strong> 5 students
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Recognition & Awards</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                  <li>2010 Feminist Activism Award, Sociologists for Women and Society (SWS)</li>
                  <li>Senior Fulbright Scholar-in-Residence</li>
                  <li>New Century Fulbright Scholar</li>
                  <li>Junior Fulbright Scholar</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Featured Publication</h3>
                <p className="italic text-foreground mb-6">
                  "Re-viewing Studies on Africa, #Black Lives Matter, and Envisioning the Future of African Studies" in African Studies Review (59)2: 7-27 (2016)
                </p>

                <p className="text-sm italic text-muted-foreground mt-8">
                  For a complete list of publications, keynote presentations, and conference papers, please contact the Institute of African Studies.
                </p>
              </article>

              {/* Profile Navigation */}
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
              <div className="pt-8">
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
