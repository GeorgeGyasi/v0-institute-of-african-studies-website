import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, Globe, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Esi Sutherland-Addy",
  description:
    "Associate Professor of African Studies at the University of Ghana, specializing in African Literature, Cultural and Educational Policy.",
}

export default function ProfessorSutherlandAddyPage() {
  const navigation = getProfileNavigation("professor-esi-sutherland")

  return (
    <>
      <PageHeader
        title="Professor Esi Sutherland-Addy"
        subtitle="Associate Professor of African Studies"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Profile Image and Contact */}
            <div className="md:col-span-1">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-esi-sutherland.jpg"
                  alt="Professor Esi Sutherland-Addy"
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
                    href="mailto:esutherland-addy@ug.edu.gh"
                    className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                  >
                    <Mail className="h-4 w-4" />
                    esutherland-addy@ug.edu.gh
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Position
                  </p>
                  <p className="text-foreground font-medium">
                    Associate Professor
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Language, Literature and Drama Section
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Specialization
                  </p>
                  <p className="text-sm text-foreground">
                    African Literature & Cultural Policy
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Profile */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Profile</h2>
                <p className="text-foreground leading-relaxed">
                  Esi Sutherland-Addy is Associate Professor of African Studies with main research interests in written and oral literature, women's literature, and educational and cultural policy. She is currently Principal Investigator on the research project entitled "Oral Traditions and Expressive Diversity" involving the collection and digitization of Ghanaian Oral Traditions.
                </p>
              </div>

              {/* Research Areas */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Research Areas</h2>
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted/30 p-4">
                    <p className="text-foreground">
                      <span className="font-semibold">African Literature:</span> Both oral and written traditions
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted/30 p-4">
                    <p className="text-foreground">
                      <span className="font-semibold">Cultural and Educational Policy:</span> Development and implementation of cultural and educational frameworks
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted/30 p-4">
                    <p className="text-foreground">
                      <span className="font-semibold">Girls' Education:</span> Educational access and advancement for girls in Africa
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Research Projects */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Current Research Projects</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">Oral Traditions and Expressive Diversity</p>
                    <p className="text-sm text-muted-foreground">
                      Principal Investigator on the research project involving the collection and digitization of Ghanaian Oral Traditions through collaborative efforts.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">"Shall I tell you or Shall I not tell you?" - A Survey of Ghanaian Tales and Storytelling Traditions</p>
                    <p className="text-sm text-muted-foreground">
                      Collaborative research project undertaken by the Language, Literature and Drama Section of the Institute documenting and analyzing Ghanaian storytelling traditions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Recent Publications</h2>
                <div className="space-y-6">
                  {/* Monographs */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Monographs and Technical Reports</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>
                        Awedoba, A., Sutherland-Addy, E., Gordon, J., & Adomako Ampofo, A. (Eds) (2017). 
                        <span className="italic font-medium"> Revisiting African Studies in a Globalized World</span>
                      </li>
                      <li>
                        Manuh, T. & Sutherland-Addy, E. (Eds) (2013). 
                        <span className="italic font-medium"> Africa in Contemporary Perspective</span>. 
                        Accra: SubSaharan Publishers.
                      </li>
                    </ul>
                  </div>

                  {/* Chapters */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Book Chapters</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>
                        Sutherland-Addy, E. (2015). "The Saga of an Archive of Storytelling in Ghana" in B. Lundt and U. Marzolph (Eds) 
                        <span className="italic"> Narrating Hi(stories) in West Africa</span>. Berlin: Lit Verlag.
                      </li>
                      <li>
                        Manuh, T. & Sutherland-Addy, E. (2013). "Introduction" in T. Manuh and E. Sutherland-Addy (Eds) 
                        <span className="italic"> Africa in Contemporary Perspective</span>. Accra: SubSaharan Publishers.
                      </li>
                      <li>
                        Sutherland-Addy, E. (2013). "The Heritage of Literary Arts in Africa" in T. Manuh and E. Sutherland-Addy (Eds) 
                        <span className="italic"> Africa in Contemporary Perspective</span> (Ch 17). Accra: SubSaharan Publishers.
                      </li>
                      <li>
                        Sutherland-Addy, E. (2013). "Musings on Creativity as the Spark for Modern Nationhood" in H. Lauer et al (Eds). 
                        <span className="italic"> The One in the Many: Nationbuilding Through Cultural Diversity</span>. Accra: SubSaharan Publishers.
                      </li>
                    </ul>
                  </div>

                  {/* Technical Papers */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Technical Papers</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>
                        Anamuah-Mensah, J., Sutherland-Addy, E., Ephraim, J., Haffar, A., & Newman, E. (July 2017). 
                        <span className="italic"> Towards a National Vision and Plan for Tertiary Education</span>. 
                        Prepared for the National Council for Tertiary Education.
                      </li>
                      <li>
                        Sutherland-Addy, E. (January 2017). 
                        <span className="italic"> Social Development Strategy for the Long-Term National Development Plan for Ghana (2017-2057): Culture and Development Report</span>. 
                        Prepared for the National Development Planning Commission.
                      </li>
                    </ul>
                  </div>

                  {/* Contributions */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Contributions</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Contribution to UNESCO General History of Africa: Volume IX (Book 3) "Women Writing Africa"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Teaching and Supervision */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Teaching and Supervision</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Courses Taught</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>• UGRC226: African Drama</li>
                      <li>• AFST 608: Topics in African Oral Literature</li>
                      <li>• AFST 611: African Literary Traditions</li>
                      <li>• AFST 612: Trends in African Literature</li>
                      <li>• AFST 721: Special Topics in African Oral Literature</li>
                      <li>• AFST 705: Critical Perspectives on Performance Theories</li>
                      <li>• AFST 724: African Theatre the Classical and the Popular</li>
                      <li>• AFST 725: African Women Speak</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Student Supervision</h3>
                    <p className="text-sm text-foreground">
                      Currently supervising 7 PhD students and 2 MA/MPhil students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {navigation && <ProfileNavigation navigation={navigation} />}
    </>
  )
}
