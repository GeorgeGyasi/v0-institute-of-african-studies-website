import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Emmanuel Amoako - Staff Profile",
  description: "Staff profile for Dr. Emmanuel Amoako at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Emmanuel Amoako"
      role="Senior Lecturer"
      specialty="African Education Systems"
      email="eamoako@ug.edu.gh"
      bio="Dr. Emmanuel Amoako examines educational systems, pedagogies, and learning in African contexts. His work addresses both colonial educational legacies and contemporary educational challenges and innovations."
      researchAreas={[
        "Educational policy",
        "Teaching and learning",
        "Educational history",
        "Curriculum development",
        "Higher education in Africa",
      ]}
      publications={[
        { title: "Learning in Africa: Education Systems and Change", year: "2023" },
        { title: "Pedagogy and Practice", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Education", institution: "University of Oxford", year: "2008" },
        { degree: "MA in Education", institution: "University of Ghana", year: "2004" },
        { degree: "BA in Education", institution: "University of Ghana", year: "2001" },
      ]}
      categorySlug="senior-members"
    />
  )
}
