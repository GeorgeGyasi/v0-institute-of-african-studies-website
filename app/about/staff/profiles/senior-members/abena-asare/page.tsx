import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Abena Asare - Staff Profile",
  description: "Staff profile for Dr. Abena Asare at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Abena Asare"
      role="Senior Lecturer"
      specialty="Contemporary African Politics"
      email="aasare@ug.edu.gh"
      bio="Dr. Abena Asare researches political dynamics, governance structures, and democratization processes in contemporary Africa. Her work engages with questions of state capacity, civil society, and political transformation across the continent."
      researchAreas={[
        "African politics and governance",
        "Democratization and state building",
        "Civil society and activism",
        "Electoral politics",
        "Regional integration",
      ]}
      publications={[
        { title: "Democracy in Motion: African Political Change", year: "2023" },
        { title: "States and Citizens in Modern Africa", year: "2022" },
      ]}
      education={[
        { degree: "PhD in Political Science", institution: "University of Oxford", year: "2008" },
        { degree: "MA in Political Science", institution: "University of Ghana", year: "2004" },
        { degree: "BA in Political Science", institution: "University of Ghana", year: "2001" },
      ]}
      categorySlug="senior-members"
    />
  )
}
