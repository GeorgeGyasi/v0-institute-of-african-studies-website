import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Yaa Nyarko - Staff Profile",
  description: "Staff profile for Prof. Yaa Nyarko at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Yaa Nyarko"
      role="Professor"
      specialty="Comparative African Literature"
      email="ynyarko@ug.edu.gh"
      bio="Prof. Yaa Nyarko is a distinguished literary scholar specializing in contemporary and classical African literature, emphasizing cross-regional comparisons and transnational themes. Her critical work explores how African writers address identity, colonialism, and modernity."
      researchAreas={[
        "Contemporary African literature",
        "Comparative literary analysis",
        "Women writers and feminism",
        "Postcolonial theory",
        "African diaspora literature",
      ]}
      publications={[
        { title: "Voices Across Continents: African Literature Today", year: "2023" },
        { title: "Rethinking Postcolonial Fiction", year: "2022" },
      ]}
      education={[
        { degree: "PhD in Comparative Literature", institution: "University of Michigan", year: "2004" },
        { degree: "MA in Literature", institution: "University of Ghana", year: "2000" },
        { degree: "BA in English", institution: "University of Ghana", year: "1997" },
      ]}
      awards={[
        "African Literature Prize (2022)",
      ]}
      categorySlug="senior-members"
    />
  )
}
