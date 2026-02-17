import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Kofi Owusu - Staff Profile",
  description: "Staff profile for Dr. Kofi Owusu at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Kofi Owusu"
      role="Senior Lecturer"
      specialty="African Environmental History"
      email="kowusu@ug.edu.gh"
      bio="Dr. Kofi Owusu examines the interconnections between African societies and their environments throughout history. His research explores how environmental changes, resource management, and ecological knowledge shape social transformation."
      researchAreas={[
        "Environmental history",
        "Climate and society",
        "Resource management",
        "Ecological knowledge systems",
        "Conservation and indigenous practices",
      ]}
      publications={[
        { title: "People and Environment in African History", year: "2023" },
        { title: "Climate Change and African Societies", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Environmental History", institution: "University of Cambridge", year: "2007" },
        { degree: "MA in Environmental Science", institution: "University of Ghana", year: "2003" },
        { degree: "BA in Geography", institution: "University of Ghana", year: "2000" },
      ]}
      categorySlug="senior-members"
    />
  )
}
