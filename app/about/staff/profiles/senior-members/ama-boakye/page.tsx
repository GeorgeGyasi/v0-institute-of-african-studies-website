import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Ama Boakye - Staff Profile",
  description: "Staff profile for Dr. Ama Boakye at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Ama Boakye"
      role="Senior Lecturer"
      specialty="African Economic History"
      email="aboakye@ug.edu.gh"
      bio="Dr. Ama Boakye examines economic systems, trade networks, and development patterns across African history. Her research illuminates how African societies engaged in regional and international commerce, challenging narratives of economic dependence."
      researchAreas={[
        "African economic history",
        "Trade networks and commerce",
        "Colonial economic systems",
        "Informal economies",
        "African entrepreneurship",
      ]}
      publications={[
        { title: "Merchants and Markets in African History", year: "2023" },
        { title: "Economic Transformations in Colonial Africa", year: "2022" },
      ]}
      education={[
        { degree: "PhD in Economic History", institution: "University of Wisconsin", year: "2006" },
        { degree: "MA in Economics", institution: "University of Ghana", year: "2002" },
        { degree: "BA in Economics", institution: "University of Ghana", year: "1999" },
      ]}
      categorySlug="senior-members"
    />
  )
}
