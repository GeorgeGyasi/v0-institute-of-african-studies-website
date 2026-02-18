import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionNavigation } from "@/components/section-navigation"

export const metadata: Metadata = {
  title: "Societies and Cultures",
  description:
    "Explore the Societies and Cultures section of the Institute of African Studies, featuring research in African social systems, anthropology, and cultural studies.",
}

export default function SocietiesCulturesPage() {
  const faculty = [
    { name: "Prof. Dzodzi Tsikata", expertise: "Social Sciences" },
    { name: "Em. Prof. Takyiwaa Manuh", expertise: "Development Studies" },
    { name: "Prof. Albert Awedoba", expertise: "Anthropology" },
    { name: "Prof. Kojo Amanor", expertise: "Rural Development" },
    { name: "Prof. Akosua Adomako Ampofo", expertise: "Gender Studies" },
    { name: "Dr. Osman Alhassan", expertise: "Development Issues" },
    { name: "Dr. Deborah Atobrah", expertise: "Social Research" },
    { name: "Dr. Benjamin K. Kwansa", expertise: "Social Systems" },
    { name: "Dr. Peter Narh", expertise: "African Studies" },
    { name: "Dr. Pius Siakwah", expertise: "Development" },
    { name: "Dr. Eric T. Lawer", expertise: "Cultural Studies" },
  ]

  const graduateCourses = [
    "Research Methods",
    "Topics in Research Methods",
    "African Social and Political Systems",
  ]

  const undergraduateCourses = [
    "Culture and Development",
    "African Popular Culture (Festivals and Ceremonies)",
    "Appropriate Technology for Development in Africa",
    "Africa's Population Issues",
    "Gender and Development",
    "Social Framework for Economic Development",
  ]

  const researchProjects = [
    {
      title: "Securing Land Rights in Africa",
      description: "Research on land tenure and property rights in Africa",
    },
    {
      title: "Child Sexual Exploitation in Accra",
      description: "Study of child safety and vulnerability issues in urban areas",
    },
    {
      title: "Menstrual Hygiene Management",
      description: "Research on menstrual health and education in basic schools",
    },
    {
      title: "Chieftaincy, Governance, and Development",
      description: "Analysis of traditional governance systems and development",
    },
    {
      title: "D-SIP (Domestic Security Implications of Peace Keeping)",
      description: "Focus on land and mineral resource use and community conflicts in Ghana",
    },
    {
      title: "Oil and Gas Impact Study",
      description: "Social research on the impact of oil and gas sector in Ghana",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        title="Societies and Cultures"
        subtitle="Transdisciplinary research and teaching in African social systems and cultures"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                About the Section
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Focusing on the University of Ghana's mission to "develop world class human resources and capabilities to meet national development needs and global challenges through quality teaching, learning, research and knowledge dissemination", fellows of the Societies and Cultures section actively participate in the Institute of African Studies teaching, research, and outreach activities.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Societies and Cultures section of IAS is a transdisciplinary unit that draws on the expertise and skills of outstanding sociologists, anthropologists, geographers, and other social scientists in research activities. The section has been committed to the reproduction of knowledge for better understanding and conceptualization of Africa's development.
              </p>
            </div>

            {/* Graduate Courses */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Graduate Courses
              </h2>
              <ul className="space-y-2">
                {graduateCourses.map((course, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{course}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                The section is actively involved in the Institute's graduate (MA, M.Phil., and PhD) programmes and delivers core graduate level courses on research methods and African social systems.
              </p>
            </div>

            {/* Undergraduate Courses */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Undergraduate Courses (UGRC)
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                At the undergraduate level, all students subscribe to the University of Ghana Required Courses (UGRCs) in African Studies. The section plays a critical role with a range of innovative and highly subscribed courses.
              </p>
              <ul className="space-y-2">
                {undergraduateCourses.map((course, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Projects */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Research Projects
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The section has been at the forefront of several institutional projects leading to innovative knowledge production and offering graduate students opportunities to participate in field research.
              </p>
              <div className="grid gap-4">
                {researchProjects.map((project, index) => (
                  <div key={index} className="rounded-lg border border-border p-4">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Collaboration & Engagement
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Fellows of the section undertake collaborative teaching and research with fellows in other sections of the Institute and cognate departments/institutes of the University of Ghana. Faculty also work closely with international agencies, national government institutions, industry and civil society organisations, placing the section in a strategic position to make valuable inputs into local, national, and global development issues.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="rounded-lg border border-border bg-card p-6">
                <SectionNavigation />
              </div>

              {/* Faculty */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  Faculty Members
                </h3>
                <div className="space-y-3">
                  {faculty.map((member, index) => (
                    <div key={index} className="pb-3 border-b border-border last:border-b-0 last:pb-0">
                      <p className="text-sm font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.expertise}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Areas */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  Key Focus Areas
                </h3>
                <ul className="space-y-2">
                  {[
                    "Social Systems",
                    "Development Studies",
                    "Anthropology",
                    "Gender Studies",
                    "Land Rights",
                    "Urban Development",
                    "Community Governance",
                    "Resource Management",
                  ].map((area, index) => (
                    <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
