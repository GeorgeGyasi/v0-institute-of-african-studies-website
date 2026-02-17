import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Osei Kwarteng Darkwa - Staff Profile",
  description: "Staff profile for Dr. Osei Kwarteng Darkwa at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Osei Kwarteng Darkwa"
      role="Senior Lecturer"
      specialty="Ethnomusicology & Performance Studies"
      email="okdarkwa@ug.edu.gh"
      office="IAS Building, Performance Studios"
      bio="Dr. Osei Kwarteng Darkwa is an accomplished ethnomusicologist and performer dedicated to documenting, preserving, and teaching Africa's rich musical traditions. His work bridges academic research with creative practice and community arts education."
      researchAreas={[
        "African music systems and theory",
        "Performance and identity",
        "Music in ritual and social change",
        "Contemporary African music",
        "Audio documentation and archiving",
      ]}
      publications={[
        { title: "Rhythms of Identity: African Music in Global Context", year: "2023" },
        { title: "The Dynamics of Performance", year: "2021" },
        { title: "Traditional Music Documentation", year: "2020" },
      ]}
      education={[
        { degree: "PhD in Ethnomusicology", institution: "University of California, Berkeley", year: "2005" },
        { degree: "MA in Ethnomusicology", institution: "University of Ghana", year: "2000" },
        { degree: "BA in Music", institution: "University of Ghana", year: "1997" },
      ]}
      categorySlug="senior-members"
    />
  )
}
