import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Isaac Osei - Staff Profile",
  description: "Staff profile for Prof. Isaac Osei at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Isaac Osei"
      role="Professor"
      specialty="African Agricultural Heritage"
      email="iosei@ug.edu.gh"
      bio="Prof. Isaac Osei studies agricultural systems, farming communities, and the relationship between environment and food production in African history. His research emphasizes African agricultural innovation and knowledge."
      researchAreas={[
        "Agricultural history",
        "Traditional farming practices",
        "Food security",
        "Agrarian societies",
        "Agricultural innovation",
      ]}
      publications={[
        { title: "Seeds of Change: African Agriculture", year: "2023" },
        { title: "Farming and Flourishing in Africa", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Agricultural History", institution: "University of Wisconsin", year: "2004" },
        { degree: "MA in History", institution: "University of Ghana", year: "2000" },
        { degree: "BA in History", institution: "University of Ghana", year: "1997" },
      ]}
      categorySlug="senior-members"
    />
  )
}
