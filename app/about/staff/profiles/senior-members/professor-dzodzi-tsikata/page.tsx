import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Mail, Globe, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor Dzodzi Tsikata",
  description:
    "Professor of Development Sociology and former Director of the Institute of African Studies at the University of Ghana.",
}

export default function ProfessorTsikataPage() {
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
                  src="/images/staff/senior-member-1.jpg"
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
                <h2 className="mb-4 text-2xl font-bold text-foreground">Current Research Projects</h2>
                <div className="space-y-4">
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

              {/* Professional Roles */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Professional Roles</h2>
                <div className="space-y-3 text-sm text-foreground">
                  <div>
                    <p className="font-semibold mb-2">Editorial Board Memberships</p>
                    <ul className="list-inside list-disc space-y-1 text-muted-foreground ml-2">
                      <li>Editorial Advisory Board, Oxford Development Journal (2019-present)</li>
                      <li>Editor, Feminist Africa Journal (2018-present)</li>
                      <li>Editorial Advisory Board, Journal of Modern African Studies (2018-present)</li>
                      <li>International Advisory Board, Journal for Peasant Studies (2007-present)</li>
                      <li>Editorial Board, Agrarian South: Journal of Political Economy (2011-present)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <div className="pt-8 border-t border-border">
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
