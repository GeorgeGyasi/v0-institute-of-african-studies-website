import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Comfort Kwadwo - Staff Profile",
  description: "Staff profile for Prof. Comfort Kwadwo at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Comfort Kwadwo"
      role="Professor"
      specialty="Pan-African Relations & Diplomacy"
      email="ckwadwo@ug.edu.gh"
      bio="Prof. Comfort Kwadwo analyzes interstate relations, foreign policy, and the evolution of the African Union. Her research addresses conflict resolution, regional integration, and Africa's role in international affairs."
      researchAreas={[
        "African international relations",
        "Pan-Africanism",
        "Diplomacy and conflict resolution",
        "Regional integration",
        "Africa in global politics",
      ]}
      publications={[
        { title: "Pan-Africa: Unity and Diversity", year: "2023" },
        { title: "Diplomacy for Development", year: "2021" },
      ]}
      education={[
        { degree: "PhD in International Relations", institution: "University of South Africa", year: "2005" },
        { degree: "MA in Political Science", institution: "University of Ghana", year: "2001" },
        { degree: "BA in International Relations", institution: "University of Ghana", year: "1998" },
      ]}
      categorySlug="senior-members"
    />
  )
}
