import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Nana Ama Adu - Staff Profile",
  description: "Staff profile for Prof. Nana Ama Adu at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Nana Ama Adu"
      role="Professor"
      specialty="African Diaspora Studies"
      email="naadu@ug.edu.gh"
      bio="Prof. Nana Ama Adu specializes in African diaspora movements, transnational connections, and identity formation. Her work traces historical and contemporary migration patterns and explores how diaspora communities maintain cultural ties to Africa."
      researchAreas={[
        "African diaspora history",
        "Transnational identities",
        "Migration patterns",
        "Cultural transmission",
        "Diaspora activism and politics",
      ]}
      publications={[
        { title: "Across Oceans: The African Diaspora Experience", year: "2023" },
        { title: "Home and Belonging in Diaspora", year: "2021" },
      ]}
      education={[
        { degree: "PhD in History", institution: "Yale University", year: "2005" },
        { degree: "MA in African Studies", institution: "University of Ghana", year: "2001" },
        { degree: "BA in History", institution: "University of Ghana", year: "1998" },
      ]}
      categorySlug="senior-members"
    />
  )
}
