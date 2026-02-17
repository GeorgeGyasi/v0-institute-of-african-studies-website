import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Alex Quarcoo - Staff Profile",
  description: "Staff profile for Prof. Alex Quarcoo at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Alex Quarcoo"
      role="Professor"
      specialty="African Urban Studies"
      email="aquarcoo@ug.edu.gh"
      bio="Prof. Alex Quarcoo examines urbanization processes, city life, and the social transformations accompanying Africa's rapid urbanization. His interdisciplinary approach combines sociology, geography, and history to understand African cities."
      researchAreas={[
        "Urban sociology",
        "City planning and development",
        "Urban social movements",
        "Migration and urbanization",
        "African megacities",
      ]}
      publications={[
        { title: "Cities of Change: African Urbanization", year: "2023" },
        { title: "Life in the African City", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Urban Planning", institution: "University of Pennsylvania", year: "2004" },
        { degree: "MA in Sociology", institution: "University of Ghana", year: "2000" },
        { degree: "BA in Sociology", institution: "University of Ghana", year: "1997" },
      ]}
      categorySlug="senior-members"
    />
  )
}
