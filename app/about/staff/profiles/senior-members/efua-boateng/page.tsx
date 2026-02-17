import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Efua Boateng - Staff Profile",
  description: "Staff profile for Dr. Efua Boateng at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Efua Boateng"
      role="Senior Lecturer"
      specialty="African Women's History"
      email="eboateng@ug.edu.gh"
      bio="Dr. Efua Boateng documents and analyzes the experiences, accomplishments, and resilience of African women across centuries. Her research centers women as active historical agents rather than passive subjects of larger historical processes."
      researchAreas={[
        "African women's history",
        "Gender and agency",
        "Women in politics and leadership",
        "Oral history of women",
        "Feminist historiography",
      ]}
      publications={[
        { title: "Women Who Lead: African Female Pioneers", year: "2023" },
        { title: "Voices of African Women", year: "2022" },
      ]}
      education={[
        { degree: "PhD in History", institution: "University of Ghana", year: "2006" },
        { degree: "MA in Gender Studies", institution: "University of Sussex", year: "2002" },
        { degree: "BA in History", institution: "University of Ghana", year: "1999" },
      ]}
      categorySlug="senior-members"
    />
  )
}
