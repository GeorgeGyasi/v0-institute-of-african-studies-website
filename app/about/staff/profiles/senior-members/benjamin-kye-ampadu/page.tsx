import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Benjamin Kye Ampadu - Staff Profile",
  description: "Staff profile for Dr. Benjamin Kye Ampadu at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Benjamin Kye Ampadu"
      role="Lecturer"
      specialty="African Linguistics & Language Documentation"
      email="bkampadu@ug.edu.gh"
      office="IAS Building, Linguistics Lab"
      bio="Dr. Benjamin Kye Ampadu focuses on documenting and analyzing African languages, particularly those of Ghana and West Africa. His work emphasizes language preservation, grammatical description, and the relationship between language and culture."
      researchAreas={[
        "African language documentation",
        "Linguistic typology",
        "Language and culture",
        "Endangered language preservation",
        "Historical linguistics",
      ]}
      publications={[
        { title: "Grammar of Twi", year: "2023" },
        { title: "West African Language Families", year: "2022" },
        { title: "Language Documentation Methods", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Linguistics", institution: "University of Ghana", year: "2008" },
        { degree: "MA in Linguistics", institution: "University of Leiden", year: "2004" },
        { degree: "BA in Linguistics", institution: "University of Ghana", year: "2001" },
      ]}
      categorySlug="senior-members"
    />
  )
}
