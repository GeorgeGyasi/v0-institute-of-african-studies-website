import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Kwesi Prah - Staff Profile",
  description: "Staff profile for Dr. Kwesi Prah at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Kwesi Prah"
      role="Senior Research Fellow"
      specialty="African Language Rights & Advocacy"
      email="kprah@ug.edu.gh"
      bio="Dr. Kwesi Prah is a passionate advocate for African language rights and mother-tongue education. His work promotes the use and development of African languages in education and public life while resisting linguistic imperialism."
      researchAreas={[
        "Language rights advocacy",
        "Mother-tongue education",
        "Language policy",
        "Linguistic diversity",
        "Decolonizing education",
      ]}
      publications={[
        { title: "Mother Tongue Education in Africa", year: "2023" },
        { title: "Language, Power, and Development", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Education", institution: "University of Tampere", year: "2002" },
        { degree: "MA in Linguistics", institution: "University of Ghana", year: "1998" },
        { degree: "BA in Education", institution: "University of Ghana", year: "1995" },
      ]}
      awards={[
        "UNESCO Prize for Language Advocacy (2020)",
      ]}
      categorySlug="senior-members"
    />
  )
}
