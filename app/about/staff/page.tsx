import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Staff",
  description:
    "Faculty and staff of the Institute of African Studies, University of Ghana.",
}

const staffCategories = [
  {
    category: "Senior Members",
    members: [
      {
        name: "Prof. Akosua Adomako Ampofo",
        role: "Director / Professor",
        specialty: "Gender Studies & Social Transformation",
        email: "aadomako@ug.edu.gh",
      },
      {
        name: "Dr. Kodzo Gavua",
        role: "Deputy Director / Senior Research Fellow",
        specialty: "Archaeology & Heritage Studies",
        email: "kgavua@ug.edu.gh",
      },
      {
        name: "Prof. Irene K. Odotei",
        role: "Professor",
        specialty: "History & Maritime Studies",
        email: "ikodotei@ug.edu.gh",
      },
      {
        name: "Dr. Wazi Apoh",
        role: "Senior Lecturer",
        specialty: "Historical Archaeology",
        email: "wapoh@ug.edu.gh",
      },
      {
        name: "Dr. Osei Kwarteng Darkwa",
        role: "Senior Lecturer",
        specialty: "Ethnomusicology & Performance Studies",
        email: "okdarkwa@ug.edu.gh",
      },
      {
        name: "Dr. Benjamin Kye Ampadu",
        role: "Lecturer",
        specialty: "African Linguistics & Language Documentation",
        email: "bkampadu@ug.edu.gh",
      },
    ],
  },
  {
    category: "Research Fellows",
    members: [
      {
        name: "Dr. Ama Boakyewaa Adomaa",
        role: "Research Fellow",
        specialty: "Cultural Studies & Identity Politics",
        email: "abadomaa@ug.edu.gh",
      },
      {
        name: "Dr. Kwame Asante-Darko",
        role: "Research Fellow",
        specialty: "Political Anthropology",
        email: "kasantedarko@ug.edu.gh",
      },
      {
        name: "Dr. Faustina Mensah",
        role: "Research Fellow",
        specialty: "Education & Indigenous Knowledge",
        email: "fmensah@ug.edu.gh",
      },
    ],
  },
  {
    category: "Administrative & Support Staff",
    members: [
      {
        name: "Mrs. Grace Asantewaa Osei",
        role: "Administrative Secretary",
        specialty: "Institute Administration",
        email: "gaosei@ug.edu.gh",
      },
      {
        name: "Mr. Emmanuel Tetteh",
        role: "Archives Officer",
        specialty: "Archival Management & Digitisation",
        email: "etetteh@ug.edu.gh",
      },
      {
        name: "Mrs. Patience Adjei",
        role: "Accounts Officer",
        specialty: "Financial Management",
        email: "padjei@ug.edu.gh",
      },
    ],
  },
]

export default function StaffPage() {
  return (
    <>
      <PageHeader
        title="Staff Directory"
        subtitle="Faculty, research fellows, and administrative staff"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-20">
            {staffCategories.map((category) => (
              <div key={category.category}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                  {category.category}
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.members.map((person) => (
                    <div
                      key={person.name}
                      className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
                    >
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-lg font-bold text-primary">
                          {person.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        {person.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {person.role}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {person.specialty}
                      </p>
                      <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                        <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                        <a
                          href={`mailto:${person.email}`}
                          className="text-xs text-primary hover:underline"
                        >
                          {person.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
