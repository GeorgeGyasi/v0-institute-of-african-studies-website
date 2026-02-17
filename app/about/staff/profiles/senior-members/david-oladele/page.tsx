import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. David Oladele - Staff Profile",
  description: "Staff profile for Prof. David Oladele at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. David Oladele"
      role="Professor"
      specialty="Pan-African Intellectual History"
      email="doladele@ug.edu.gh"
      bio="Prof. David Oladele examines the intellectual history of Africa, tracing the development of African thought, philosophy, and scholarship. His work highlights African intellectuals as producers of knowledge rather than passive recipients."
      researchAreas={[
        "African intellectual history",
        "Pan-African thought",
        "African scholarship",
        "Knowledge production",
        "Decolonizing epistemology",
      ]}
      publications={[
        { title: "African Minds: Intellectual Traditions", year: "2023" },
        { title: "Thinking Africa", year: "2021" },
      ]}
      education={[
        { degree: "PhD in History of Ideas", institution: "University of Paris", year: "2004" },
        { degree: "MA in Philosophy", institution: "University of Ghana", year: "2000" },
        { degree: "BA in Philosophy", institution: "University of Ghana", year: "1997" },
      ]}
      categorySlug="senior-members"
    />
  )
}
