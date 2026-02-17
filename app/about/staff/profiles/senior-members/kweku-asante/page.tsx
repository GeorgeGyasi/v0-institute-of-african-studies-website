import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Kweku Asante - Staff Profile",
  description: "Staff profile for Dr. Kweku Asante at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Kweku Asante"
      role="Senior Lecturer"
      specialty="African Migration & Mobility"
      email="kasante@ug.edu.gh"
      bio="Dr. Kweku Asante studies migration patterns, mobility systems, and transnational movements within and from Africa. His work examines both historical and contemporary forms of movement and their social consequences."
      researchAreas={[
        "Migration patterns",
        "Transnational networks",
        "Refugee and displacement studies",
        "Internal migration",
        "Mobility and rights",
      ]}
      publications={[
        { title: "On the Move: African Migration Stories", year: "2023" },
        { title: "Mobility and Belonging", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Geography", institution: "University of London", year: "2007" },
        { degree: "MA in Development Studies", institution: "University of Ghana", year: "2003" },
        { degree: "BA in Geography", institution: "University of Ghana", year: "2000" },
      ]}
      categorySlug="senior-members"
    />
  )
}
