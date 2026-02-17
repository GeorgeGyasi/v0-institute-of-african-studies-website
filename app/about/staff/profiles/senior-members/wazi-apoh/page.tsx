import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Wazi Apoh - Staff Profile",
  description: "Staff profile for Dr. Wazi Apoh at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Wazi Apoh"
      role="Senior Lecturer"
      specialty="Historical Archaeology"
      email="wapoh@ug.edu.gh"
      bio="Dr. Wazi Apoh specializes in the material culture and settlement patterns of pre-colonial and colonial West Africa. His fieldwork and analytical approaches contribute to understanding social organization, trade dynamics, and cultural continuities in African societies."
      researchAreas={[
        "Settlement archaeology",
        "Ceramic analysis and production",
        "Colonial period archaeology",
        "Archaeological survey methodology",
        "African settlement patterns",
      ]}
      publications={[
        { title: "Pottery and Society in West African History", year: "2022" },
        { title: "Archaeological Survey Methods", year: "2021" },
        { title: "Pre-Colonial Ghana: New Perspectives", year: "2020" },
      ]}
      education={[
        { degree: "PhD in Archaeology", institution: "University of Illinois", year: "2003" },
        { degree: "MA in Archaeology", institution: "University of Ghana", year: "1999" },
        { degree: "BA in Anthropology", institution: "University of Ghana", year: "1996" },
      ]}
      categorySlug="senior-members"
    />
  )
}
