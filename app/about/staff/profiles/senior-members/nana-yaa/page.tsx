import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Nana Yaa - Staff Profile",
  description: "Staff profile for Prof. Nana Yaa at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Nana Yaa"
      role="Professor"
      specialty="African Health & Wellness Traditions"
      email="nyaa@ug.edu.gh"
      bio="Prof. Nana Yaa explores African healing practices, traditional medicine systems, and wellness traditions. Her research contextualizes African medical knowledge within broader understandings of health and community well-being."
      researchAreas={[
        "Traditional medicine systems",
        "Health and wellness",
        "African healing practices",
        "Medicinal plants",
        "Medical anthropology",
      ]}
      publications={[
        { title: "Healing Wisdom: African Medical Traditions", year: "2023" },
        { title: "Health, Harmony, and Community", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Medical Anthropology", institution: "University of California, San Francisco", year: "2005" },
        { degree: "MA in Anthropology", institution: "University of Ghana", year: "2001" },
        { degree: "BA in Biology", institution: "University of Ghana", year: "1998" },
      ]}
      categorySlug="senior-members"
    />
  )
}
