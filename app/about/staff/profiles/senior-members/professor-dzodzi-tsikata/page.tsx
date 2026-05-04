import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"
import { Mail, Globe, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Dzodzi Tsikata",
  description:
    "Professor of Development Sociology and former Director of the Institute of African Studies at the University of Ghana.",
}

export default function ProfessorTsikataPage() {
  const navigation = getProfileNavigation("professor-dzodzi-tsikata")

  return (
    <>
      <PageHeader
        title="Professor Dzodzi Tsikata"
        subtitle="Professor of Development Sociology"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Profile Image and Contact */}
            <div className="md:col-span-1">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-dzodzi-tsikata.jpg"
                  alt="Professor Dzodzi Tsikata"
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
                    href="mailto:dtsikata@ug.edu.gh"
                    className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                  >
                    <Mail className="h-4 w-4" />
                    dtsikata@ug.edu.gh
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Position
                  </p>
                  <p className="text-foreground font-medium">
                    Professor of Development Sociology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Institute of African Studies
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Specialization
                  </p>
                  <p className="text-sm text-foreground">
                    African Legal Studies & Gender Justice
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
                    Dzodzi Tsikata, Professor of Development Sociology, was Director of the Institute of African Studies (IAS) at the University of Ghana from August 2016 to July 2022. Before this, she was based at the Institute of Statistical, Social and Economic Research (ISSER) during which time she was Deputy Director and Director of the Centre for Gender Studies and Advocacy (CEGENSA) at the University of Ghana.
                  </p>
                  <p>
                    In a career spanning over 30 years, Tsikata's teaching, research and publications have been in the areas of gender and development policies and practices; the politics and livelihood effects of land tenure reforms, large scale land acquisitions and agricultural commercialisation; and informal labour relations and conditions of work.
                  </p>
                  <p>
                    She has extensive experience with leading multi-disciplinary and multi-national research projects, supervising student theses and examining post-graduate theses. She is on the editorial advisory board of Journal of Peasant Studies, the Canadian Journal of Development Studies, Feminist Economics and a member of the editorial collective of Agrarian South: Journal of Political Economy and Feminist Africa.
                  </p>
                  <p>
                    Tsikata is a Fellow of the Ghana Academy of Arts and Sciences and the immediate past President of Council for the Development of Social Science Research in Africa (CODESRIA). She is also active in the leadership of several leading policy advocacy networks in Africa.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Education
                </h2>
                <div className="space-y-3 text-foreground">
                  <div>
                    <p className="font-semibold">Ph.D. (cum laude) in Social Science</p>
                    <p className="text-sm text-muted-foreground">Leiden University, Netherlands (2003)</p>
                  </div>
                  <div>
                    <p className="font-semibold">M.A. Development Studies</p>
                    <p className="text-sm text-muted-foreground">Institute of Social Studies (ISS), The Hague, Netherlands (1989)</p>
                  </div>
                  <div>
                    <p className="font-semibold">M.Phil Sociology</p>
                    <p className="text-sm text-muted-foreground">University of Ghana (1996)</p>
                  </div>
                  <div>
                    <p className="font-semibold">LL.B.</p>
                    <p className="text-sm text-muted-foreground">University of Ghana (1984)</p>
                  </div>
                </div>
              </div>

              {/* Research Areas */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Research Areas
                </h2>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Gender and Development Policies and Practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Land Tenure and Agrarian Livelihood Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Commercial Land Deals and their Livelihood Impacts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>The Politics of Land Tenure Reforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Informal Labour Relations and Work Conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Gender Issues in Higher Education</span>
                  </li>
                </ul>
              </div>

              {/* Current Research Projects */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Current Research and Publication Projects</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">2015-2022</p>
                    <p className="text-sm text-muted-foreground">
                      Co applicant, Land Commercialisation, Gendered Agrarian Transformation, and the Right to Food Research Project, and team leader of eight-member Ghana team. Project funded by Swiss National Foundation under its R4D programme.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">2018-2023</p>
                    <p className="text-sm text-muted-foreground">
                      IAS Team leader, Domestic Security Implications of UN Peacekeeping (D-SIP).
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">2020-2023</p>
                    <p className="text-sm text-muted-foreground">
                      PI, Transregional Research on the Changing Character of Precarious Work in Egypt, Ghana and Kenya, Project funded by Carnegie Corporation.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">2021-2022</p>
                    <p className="text-sm text-muted-foreground">
                      PI Gender Equitable and Transformative Social Policy in Africa Project, Pan African Research Project funded by Open Society Initiatives for Africa
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-semibold text-foreground">2022-2024</p>
                    <p className="text-sm text-muted-foreground">
                      Assistant Project Director, Building a New Generation of Academics in Africa (BANGA-AFRICA) Phase III Project (UG Project funded by the Carnegie Corporation)
                    </p>
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Recent Publications</h2>
                <div className="space-y-6">
                  {/* Edited Books */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Edited Books and Special Issues</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Elisabeth Prügl, Fenneke Reysoo & Dzodzi Tsikata (2021) Guest Editors-Forum: Commercialising Agriculture/Reorganizing Gender Journal of Peasant Studies, Vol. 48: 7 pp. 1439-1536.</li>
                      <li>Hall, R., Scoones, I., & Tsikata D. (2017) Guest Editors, Forum: Land and Agricultural Commercialisation in Africa, Journal of Peasant Studies, Vol 44, Issue 3, Pages 515-593.</li>
                      <li>Hall, R., Scoones, I., & Tsikata D. (Eds.). (2015). Africa's land rush: Implications for rural livelihood livelihoods and agrarian change. Martlesham: Boydell and Brewer Ltd.</li>
                      <li>Rodriguez, C., Tsikata, D. & Ampofo, A.A. (Eds.). (2015). Transatlantic feminisms: Women and studies in Africa and the diaspora. Lanham: Lexington Books.</li>
                      <li>Moyo, S., Tsikata, D. and Diop, Y. (Eds.). (2015). Land in the struggles for citizenship in Africa. Dakar: CODESRIA.</li>
                    </ul>
                  </div>

                  {/* Book Chapters */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Book Chapters</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Hall, R., Scoones, I. (2015). Introduction: The contexts and consequences of Africa's landrush. In R. Hall, I. Scoones & D. Tsikata (Eds.), Africa's land rush: Implications for rural livelihoods and agrarian change. Martlesham: Boydell and Brewer Ltd.</li>
                      <li>Moyo, S., Tsikata, D. & Diop, Y. (2015). Africa's Diverse and Changing Land Questions. In S. Moyo, D. Tsikata & Y. Diop (Eds.), Land in the struggles for citizenship in Africa (pp. 1-33), Dakar: CODESRIA.</li>
                      <li>Rodriguez, C.R, Tsikata, D., & Ampofo, A.A. (2015). Introduction: Collaborative Traditions and Transcontinental Connections. In C.R. Rodriguez, D. Tsikata, & A.A. Ampofo (Eds.), Transatlantic feminisms: women and gender studies in Africa and the diaspora. Lanham: Lexington Books.</li>
                      <li>Tsikata, D. (2015). Like your own child? Employers' perspectives and domestic work relations in Ghana. In C.R Rodriguez, D. Tsikata & A.A. Ampofo (Eds.), Transatlantic feminisms: women and gender studies in Africa and the diaspora. Lanham: Lexington Books.</li>
                      <li>Yaro, J.A., & Tsikata, D. (2015). Recent Transnational land deals, livelihoods and agrarian change in Ghana. In R. Hall, I. Scoones & D. Tsikata (Eds.), Africa's landrush: implications for rural livelihoods and agrarian change. Martlesham: Boydell and Brewer Ltd.</li>
                    </ul>
                  </div>

                  {/* Journal Articles */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Journal Articles</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Elisabeth Prügl, Fenneke Reysoo & Dzodzi Tsikata (2021) Agricultural and land commercialization – feminist and rights perspectives, The Journal of Peasant Studies, DOI: 10.1080/03066150.2021.1974843</li>
                      <li>Fred Mawunyo Dzanku, Dzodzi Tsikata & Daniel Adu Ankrah (2021) The gender and geography of agricultural commercialisation: what implications for the food security of Ghana's smallholder farmers?, The Journal of Peasant Studies, DOI: 10.1080/03066150.2021.1945584</li>
                      <li>Hall, R., Scoones, I., & Tsikata D. (2017) Plantations, outgrowers and commercial farming in Africa: agricultural commercialisation and implications for agrarian change, Journal of Peasant Studies, Vol 44, Issue 3, Pages 515-537.</li>
                      <li>Tsikata, D. (2016). Gender, Land tenure and agrarian production systems in Sub Saharan Africa. Agrarian South: Journal of Political Economy, Vol 5, Issue 1, pp. 1 - 19.</li>
                      <li>Tsikata, D. (2016). Understanding and addressing inequalities in the context of structural transformation in Africa: A synthesis of seven country studies. Development, pp. 1-24, doi:10.1057/s41301-016-0002-8.</li>
                    </ul>
                  </div>

                  {/* Working Papers */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Refereed Working Papers</h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li>Darkwah, A., Tsikata, D. 2021. Home-based work and homework in Ghana: An exploration, ILO Working Paper 22 (Geneva, ILO).</li>
                      <li>Tsikata, D. 2018 Promoting Change in Domestic Work Conditions from Outside the State in a Context of Regulatory Inertia: The Case of Ghana, LLDRL Working Paper Series, WP # 9.</li>
                      <li>Tsikata, D. (2015). The social relations of agrarian change (IIED Working Paper). London.</li>
                      <li>Helen Dancer, H. & Tsikata, D. (2015). Researching land and commercial agriculture in sub-Saharan Africa with a gender perspective: Concepts, issues and methods. (Working Paper 132, FAC/LAC).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Teaching and Supervision */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Teaching and Supervision</h2>
                <div className="space-y-3 text-foreground">
                  <p>
                    Dzodzi Tsikata has taught the advanced gender studies course in the Ph.D. Development Studies Programme at ISSER (ISDS712) since 2014. Before then, she developed and taught the Gender and Development Course in the M.A. Development Studies Programme at ISSER (ISDS605) between 2002 and 2012.
                  </p>
                </div>
              </div>

              {/* Board Memberships */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Board Memberships and Committees</h2>
                <div className="space-y-6">
                  {/* University of Ghana */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">University of Ghana</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Member, Academic Board (2010-present)</li>
                      <li>• Member, Business and Executive Committee (2016-present)</li>
                      <li>• Member, Security Committee (2016-2020)</li>
                      <li>• Member, Office of Research and Development (ORID) Management Board (2016-present)</li>
                      <li>• IAS Management Board (2016-present)</li>
                      <li>• Humanities Assessor, UG (2018-present)</li>
                      <li>• Representative of UG Appointments Board on College of Humanities Appointments and Promotion Board (2018-present)</li>
                      <li>• Representative of College of Humanities on CBAS Board (2016-present)</li>
                      <li>• College of Humanities Academic Quality Assurance Committee (2016-present)</li>
                    </ul>
                  </div>

                  {/* External Boards */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">External Board Memberships</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Executive Secretary, International Development Economics Associates (IDEAS) (2021-present)</li>
                      <li>• President, Executive Council, Maria Sybilla Merian Institute of Advanced Studies in Africa (MIASA) (2020-present)</li>
                      <li>• Vice Chair, Board of the Institute for Economic Justice (2019-present)</li>
                      <li>• Board member, GILBT (2016-present)</li>
                      <li>• Board member, Ghana National Theatre (2016-present)</li>
                      <li>• Member of the Steering Committee, Network for Women's Rights in Ghana (1999-present; Convenor 2003-2005)</li>
                      <li>• Deputy Chair, International Governing Council, Centre for Democracy and Development (2009-present)</li>
                      <li>• President, CODESRIA (2015-2018)</li>
                      <li>• Commissioner, National Development Planning Commission (2015-2017)</li>
                      <li>• Board Member, International Association for Feminist Economics (IAFFE) (2014-2019)</li>
                      <li>• Member, UN Committee for Development Policy (2013-2018)</li>
                      <li>• Member of Executive Committee, Third World Network Africa (2006-2020)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Editorial Boards */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Editorial Board Memberships</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Editorial Advisory Board, Oxford Development Journal (2019-present)</li>
                  <li>• Editor, Feminist Africa Journal (2018-present)</li>
                  <li>• Editorial Advisory Board, Journal of Modern African Studies (2018-present)</li>
                  <li>• Editorial Board, Social Politics: International Studies in Gender, State and Society (2016-present)</li>
                  <li>• Editorial Advisory Board, Feminist Economics (2014-present)</li>
                  <li>• International Advisory Board, Canadian Journal of Development Studies (2014-present)</li>
                  <li>• Editorial Board, Agrarian South: Journal of Political Economy (2011-present)</li>
                  <li>• Editorial Board, Ghana Studies, Journal of the Ghana Studies Council (2009-present)</li>
                  <li>• International Advisory Board, Journal for Peasant Studies (2007-present)</li>
                  <li>• Editorial Advisory Board, African Sociological Review (2006-present)</li>
                </ul>
              </div>

              {/* Professional Associations */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Professional and Civil Society Associations</h2>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• African Studies Association of Africa (ASAA)</li>
                  <li>• Agrarian South Network</li>
                  <li>• African Studies Association (ASA), USA</li>
                  <li>• African Studies Association Women's Caucus</li>
                  <li>• Council for the Development of Social Science Research (CODESRIA)</li>
                  <li>• Ghana Studies Council, USA</li>
                  <li>• International Association of Feminist Economics (IAFFE)</li>
                  <li>• International Development Economics Associates (IDEAS)</li>
                  <li>• Network for Women's Rights in Ghana (NETRIGHT)</li>
                  <li>• Third World Network Africa</li>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
