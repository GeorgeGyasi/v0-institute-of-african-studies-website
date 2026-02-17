import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Esi Awotwe - Staff Profile",
  description: "Staff profile for Prof. Esi Awotwe at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Esi Awotwe"
      role="Professor"
      specialty="African Gender & Development"
      email="eawotwe@ug.edu.gh"
      bio="Prof. Esi Awotwe integrates gender analysis with development studies, examining how development policies affect African women and how women contribute to development. Her work challenges mainstream development frameworks."
      researchAreas={[
        "Gender and development",
        "Women's economic empowerment",
        "Development policy analysis",
        "Sustainable development",
        "Women's rights advocacy",
      ]}
      publications={[
        { title: "Gender, Development, and Justice in Africa", year: "2023" },
        { title: "Empowering Women, Transforming Societies", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Development Studies", institution: "University of Sussex", year: "2005" },
        { degree: "MA in Gender Studies", institution: "University of Ghana", year: "2001" },
        { degree: "BA in Economics", institution: "University of Ghana", year: "1998" },
      ]}
      categorySlug="senior-members"
    />
  )
}
