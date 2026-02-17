import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Joseph Mensah - Staff Profile",
  description: "Staff profile for Prof. Joseph Mensah at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Joseph Mensah"
      role="Professor"
      specialty="African Philosophy & Epistemology"
      email="jmensah@ug.edu.gh"
      bio="Prof. Joseph Mensah is a leading philosopher engaging African epistemologies, metaphysics, and ethics. His work challenges Western philosophical dominance and articulates the intellectual contributions of African thinkers to global philosophical discourse."
      researchAreas={[
        "African epistemology",
        "Philosophy of technology",
        "Ethics and African values",
        "Metaphysics and ontology",
        "Knowledge systems comparison",
      ]}
      publications={[
        { title: "African Philosophies: Ways of Knowing", year: "2023" },
        { title: "Epistemological Pluralism", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Philosophy", institution: "Harvard University", year: "2003" },
        { degree: "MA in Philosophy", institution: "University of Ghana", year: "1999" },
        { degree: "BA in Philosophy", institution: "University of Ghana", year: "1996" },
      ]}
      awards={[
        "Philosopher of the Year, Pan-African Philosophical Association (2021)",
      ]}
      categorySlug="senior-members"
    />
  )
}
