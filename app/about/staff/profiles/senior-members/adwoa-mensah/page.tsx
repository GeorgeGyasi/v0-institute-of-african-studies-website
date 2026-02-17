import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Adwoa Mensah - Staff Profile",
  description: "Staff profile for Dr. Adwoa Mensah at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Adwoa Mensah"
      role="Senior Research Fellow"
      specialty="African Material Culture Studies"
      email="amensah@ug.edu.gh"
      bio="Dr. Adwoa Mensah analyzes African objects, artifacts, and material practices to understand cultural values, social relations, and historical change. Her museum work combines curatorial practice with academic research."
      researchAreas={[
        "Museum studies",
        "Object analysis",
        "Material culture interpretation",
        "Collection management",
        "African arts and crafts",
      ]}
      publications={[
        { title: "Objects Tell Stories: African Material Culture", year: "2023" },
        { title: "Museum Collections and History", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Museum Studies", institution: "University of Leicester", year: "2006" },
        { degree: "MA in Art History", institution: "University of Ghana", year: "2002" },
        { degree: "BA in Art History", institution: "University of Ghana", year: "1999" },
      ]}
      categorySlug="senior-members"
    />
  )
}
