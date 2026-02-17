import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Kwabena Agyeman - Staff Profile",
  description: "Staff profile for Prof. Kwabena Agyeman at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Kwabena Agyeman"
      role="Professor"
      specialty="African Technology & Innovation History"
      email="kagyeman@ug.edu.gh"
      bio="Prof. Kwabena Agyeman examines Africa's technological innovations, technical knowledge systems, and the history of technology in African societies. His work counters narratives of African technological backwardness."
      researchAreas={[
        "Technology history",
        "Indigenous innovation",
        "Technical knowledge systems",
        "Digital technology adoption",
        "African engineering",
      ]}
      publications={[
        { title: "Innovation in Africa: Technology Through History", year: "2023" },
        { title: "African Knowledge and Global Technology", year: "2021" },
      ]}
      education={[
        { degree: "PhD in History of Science & Technology", institution: "MIT", year: "2004" },
        { degree: "MA in Science History", institution: "University of Ghana", year: "2000" },
        { degree: "BA in Physics", institution: "University of Ghana", year: "1997" },
      ]}
      awards={[
        "Innovation in African Studies Award (2022)",
      ]}
      categorySlug="senior-members"
    />
  )
}
