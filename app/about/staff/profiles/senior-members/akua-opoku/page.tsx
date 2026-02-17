import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Akua Opoku - Staff Profile",
  description: "Staff profile for Prof. Akua Opoku at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Akua Opoku"
      role="Professor"
      specialty="African Anthropology & Ethnography"
      email="aopoku@ug.edu.gh"
      bio="Prof. Akua Opoku conducts ethnographic research on African societies, examining kinship systems, social organization, and cultural practices. Her holistic approach integrates material culture, ritual, and social relationships."
      researchAreas={[
        "Ethnographic fieldwork",
        "Kinship and social organization",
        "Material culture",
        "Ritual and belief systems",
        "African societies transformation",
      ]}
      publications={[
        { title: "Living Cultures: African Ethnography", year: "2023" },
        { title: "Kinship and Society in Africa", year: "2022" },
      ]}
      education={[
        { degree: "PhD in Anthropology", institution: "University of California, Berkeley", year: "2003" },
        { degree: "MA in Anthropology", institution: "University of Ghana", year: "1999" },
        { degree: "BA in Anthropology", institution: "University of Ghana", year: "1996" },
      ]}
      categorySlug="senior-members"
    />
  )
}
