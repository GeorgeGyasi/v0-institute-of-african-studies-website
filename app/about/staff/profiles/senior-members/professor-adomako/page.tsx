import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, Globe, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Akosua Adomako Ampofo",
  description:
    "Professor of African and Gender Studies at the Institute of African Studies, University of Ghana. President of the African Studies Association of Africa.",
}

export default function ProfessorAdomakoPage() {
  const navigation = getProfileNavigation("professor-adomako")

  return (
    <>
      <PageHeader
        title="Professor Akosua Adomako Ampofo"
        subtitle="Professor of African and Gender Studies"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Profile Image and Contact */}
            <div className="md:col-span-1">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-adomako.jpg"
                  alt="Professor Akosua Adomako Ampofo"
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
                    href="mailto:aadomako@ug.edu.gh"
                    className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                  >
                    <Mail className="h-4 w-4" />
                    aadomako@ug.edu.gh
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Section
                  </p>
                  <p className="text-foreground">Societies and Cultures</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Website
                  </p>
                  <a
                    href="https://adomakoampofo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                  >
                    <Globe className="h-4 w-4" />
                    adomakoampofo.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Twitter
                  </p>
                  <a
                    href="https://twitter.com/adomakoampofo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-80 transition-opacity text-sm"
                  >
                    @adomakoampofo
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Profile</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Adomako Ampofo is Professor of African and Gender Studies at the Institute of African Studies, University of Ghana (UG). She is President of the African Studies Association of Africa; an honorary Professor at the Centre for African Studies at the University of Birmingham; and a Fellow of the Ghana Academy of Arts and Sciences.
                  </p>
                  <p>
                    She is the immediate past Dean of International Programmes at the University of Ghana, was the foundation Director of the University's Centre for Gender Studies and Advocacy (2005-2009) and from 2010-2015 was Director of the Institute of African Studies.
                  </p>
                  <p>
                    Adomako Ampofo considers herself an activist scholar. Her areas of interest include African Knowledge systems; Higher education; Race and Identity Politics; Gender relations; Masculinities; and Popular Culture. In her current work on black masculinities, she explores the shifting nature of identities among young men in Africa and the diaspora.
                  </p>
                  <p>
                    Another project, "An Archive of Activism: Gender and Public History in Postcolonial Ghana" seeks to constitute a publicly accessible archive of, and documentary on gender activism and "political women" in postcolonial Ghana (with Kate Skinner, University of Birmingham; funded by the British Academy).
                  </p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Education</h2>
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">Doctor of Philosophy in Sociology</p>
                    <p className="text-sm text-muted-foreground">Vanderbilt University, Nashville, TN</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">Master of Science, Development Planning & Management</p>
                    <p className="text-sm text-muted-foreground">Kwame Nkrumah University of Science and Technology, Kumasi</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">Post-graduate Diploma, Regional and Spatial Planning</p>
                    <p className="text-sm text-muted-foreground">University of Dortmund, Dortmund</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">Bachelor of Science, Architectural Design</p>
                    <p className="text-sm text-muted-foreground">Kwame Nkrumah University of Science and Technology</p>
                  </div>
                </div>
              </div>

              {/* Research Interest */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Research Interests</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Areas of Focus</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• African Knowledge Systems</li>
                      <li>• African Higher Education</li>
                      <li>• Democracy and Social Justice</li>
                      <li>• Gender Systems</li>
                      <li>• Masculinities</li>
                      <li>• Popular Culture</li>
                      <li>• Race & Identity Politics</li>
                      <li>• Reproductive Health and Sexualities</li>
                      <li>• Women's Work</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Current Research Activities</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• African Knowledge Systems and decolonizing the academy</li>
                      <li>• Black youth Masculinities in Africa and the Diaspora (Ghana, Germany, Kenya, Tanzania, South Africa, Canada, US)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Recent Publications</h2>
                <div className="space-y-6">
                  {/* Books */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Books</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Producing Inclusive Feminist Knowledge: Positionalities and Discourses in the Global South. Bingley: Emerald Publishing (forthcoming & Co-edited with Josephine Beoku-Betts).</li>
                    </ul>
                  </div>

                  {/* Edited Volumes */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Edited Volumes</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Awedoba, Albert, Jacob Gordon, Esi Sutherland-Addy and Akosua Adomako Ampofo (Eds.) 2017. Revisiting African Studies in a Globalised World: International Conference on African Studies. 2017. Accra: Smartline/Institute of African Studies.</li>
                      <li>Rodriguez Cheryl, Dzodzi Tsikata and Akosua Adomako Ampofo. 2015. (Eds.) Transatlantic Feminisms: Women's and Gender Studies in Africa and the Diaspora. Lanham, MD, Lexington Books.</li>
                    </ul>
                  </div>

                  {/* Journal Articles */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Journal Articles</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Adomako Ampofo, Akosua. 2017. "Sitting on a Man: Forty Years Later." Journal of West African History (3)2: 146-155.</li>
                      <li>Anyidoho, Nana Akua and Akosua Adomako Ampofo. 2017. "Informalising the formal: The conditions of female agency workers in Ghana's banking sector" Contemporary Journal of African Studies 4(2):67-92.</li>
                      <li>Adomako Ampofo, Akosua. 2016. "Re-viewing Studies on Africa, #Black Lives Matter, and Envisioning the Future of African Studies" African Studies Review (59)2: 7-27.</li>
                      <li>Atobrah, Deborah and Akosua Adomako Ampofo. 2016. "Expressions of Masculinity and Femininity in Husbands' Care of Wives with Cancer in Accra" African Studies Review (59)1: 175-197.</li>
                      <li>Adomako Ampofo, Akosua and Awo Asiedu. 2012. "Changing Representations of Women in Ghanaian Popular music: Marrying research and advocacy" Current Sociology (60): 258-279.</li>
                    </ul>
                  </div>

                  {/* Chapters in Books */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Chapters in Books</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Adomako Ampofo, Akosua. "Young African Men's Reflections on Negotiating Sexual Intimacy". In Gabriela M. Torres and Kersti Yllö. (Eds.) Sexual Violence in Intimacy: Implications for Research and Policy in Global Health. Philadelphia: Routledge (in press).</li>
                      <li>Anyidoho, Nana Akua and Akosua Adomako Ampofo. 2015. "'How can I come to work on Saturday when I have a family?' Ghanaian Women and Bank Work in a Neo-Liberal Era" in Transatlantic Feminisms: Women's and Gender Studies in Africa and the Diaspora. Lanham, MD, Lexington Books, 297-318.</li>
                      <li>Adomako Ampofo, Akosua, Edwin Adjei and Maame Kyerewaa Brobbey. 2015. "Feminisms and Acculturation around the Globe". In James Wright et al. (Eds.) International Encyclopedia of Social and Behavioral Sciences. Amsterdam: Elsevier: 905–911.</li>
                      <li>Adomako Ampofo, Akosua and Michael PK Okyerefo. 2014. "Men of God and Gendered Knowledge" in Brenda Cooper and Robert Morrell (Eds.) Africa-Centred Knowledges: Crossing Fields and Worlds. Oxford: James Currey, 163-178.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Teaching and Supervision */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Teaching and Supervision</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Undergraduate Courses</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Gender and Culture in Africa</li>
                      <li>• Introduction to African Studies</li>
                      <li>• Issues in Population & Development in Africa</li>
                      <li>• Gender and Development in Africa</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Graduate Courses</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Culture and Gender in African Societies</li>
                      <li>• Gender and Development in African Societies</li>
                      <li>• Research Methods</li>
                      <li>• Advanced Research Methods</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Student Supervision</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Masters & Ph.D Theses supervised: 48</li>
                      <li>• Current PhD thesis supervision: 5</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Board Memberships */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Board Memberships and Leadership</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">International Positions</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• President, African Studies Association of Africa</li>
                      <li>• Honorary Professor, Centre for African Studies, University of Birmingham</li>
                      <li>• Fellow, Ghana Academy of Arts and Sciences</li>
                      <li>• Chairperson, Africa Multiple Cluster of Excellence, University of Bayreuth</li>
                      <li>• Board member, U.S African Studies Association</li>
                      <li>• Board member, Centre for the Advancement of Scholarship, University of Pretoria</li>
                      <li>• Board member, Perivoli Africa Research Centre, University of Bristol</li>
                      <li>• Board member, Institute for Humanities in Africa (HUMA), University of Cape Town</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">University of Ghana Roles</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Immediate Past Dean of International Programmes</li>
                      <li>• Foundation Director, Centre for Gender Studies and Advocacy (2005-2009)</li>
                      <li>• Former Director, Institute of African Studies (2010-2015)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Editorial Positions</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Editor-in-Chief, Contemporary Journal of African Studies</li>
                      <li>• Co-Editor, Critical Investigations into Humanitarianism in Africa blog</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Awards and Honors */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Awards and Recognition</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Junior Fulbright Scholar</li>
                  <li>• New Century Fulbright Scholar</li>
                  <li>• Senior Fulbright Scholar-in-Residence</li>
                  <li>• 2010 Feminist Activism Award, Sociologists for Women and Society (SWS)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfileNavigation navigation={navigation} />
    </>
  )
}
