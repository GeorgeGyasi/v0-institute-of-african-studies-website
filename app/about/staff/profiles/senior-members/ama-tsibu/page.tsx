import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Ama Tsibu - Staff Profile",
  description: "Staff profile for Dr. Ama Tsibu at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Ama Tsibu"
      role="Senior Lecturer"
      specialty="African Visual Arts & Aesthetics"
      email="atsibu@ug.edu.gh"
      bio="Dr. Ama Tsibu analyzes African visual arts, aesthetics, and artistic traditions. Her work spans traditional crafts, contemporary art movements, and the philosophy of African aesthetics."
      researchAreas={[
        "African visual arts",
        "Aesthetics and beauty",
        "Contemporary African art",
        "Traditional crafts",
        "Art and identity",
      ]}
      publications={[
        { title: "Visions of Africa: Art and Aesthetics", year: "2023" },
        { title: "Colors and Forms: African Artistic Expression", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Art History", institution: "University of Amsterdam", year: "2006" },
        { degree: "MA in African Studies", institution: "University of Ghana", year: "2002" },
        { degree: "BA in Art History", institution: "University of Ghana", year: "1999" },
      ]}
      categorySlug="senior-members"
    />
  )
}
