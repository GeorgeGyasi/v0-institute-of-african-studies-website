import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Abena Turkson - Staff Profile",
  description: "Staff profile for Dr. Abena Turkson at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Abena Turkson"
      role="Senior Research Fellow"
      specialty="African Conflict & Peace Studies"
      email="aturkson@ug.edu.gh"
      bio="Dr. Abena Turkson studies conflicts, peace-building processes, and reconciliation in African contexts. Her work combines conflict analysis with practical engagement in peace and justice initiatives."
      researchAreas={[
        "Conflict analysis",
        "Peace-building",
        "Reconciliation processes",
        "Justice and transitional justice",
        "Peacemaking strategies",
      ]}
      publications={[
        { title: "From Conflict to Peace: African Pathways", year: "2023" },
        { title: "Building Peace, Seeking Justice", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Peace & Conflict Studies", institution: "University of Bradford", year: "2006" },
        { degree: "MA in International Relations", institution: "University of Ghana", year: "2002" },
        { degree: "BA in Political Science", institution: "University of Ghana", year: "1999" },
      ]}
      categorySlug="senior-members"
    />
  )
}
