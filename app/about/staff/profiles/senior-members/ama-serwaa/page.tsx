import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Ama Serwaa - Staff Profile",
  description: "Staff profile for Dr. Ama Serwaa at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Ama Serwaa"
      role="Senior Lecturer"
      specialty="Ghanaian Traditional Governance"
      email="aserwaa@ug.edu.gh"
      bio="Dr. Ama Serwaa examines indigenous governance systems, chieftaincy institutions, and traditional authority in contemporary Ghana. Her research highlights the persistence and adaptation of traditional governance alongside modern state institutions."
      researchAreas={[
        "Traditional governance",
        "Chieftaincy institutions",
        "Customary law",
        "Indigenous decision-making",
        "Tradition and modernity",
      ]}
      publications={[
        { title: "Chiefs and Communities: Governance Today", year: "2023" },
        { title: "Tradition in Modern Ghana", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Anthropology", institution: "University of Ghana", year: "2007" },
        { degree: "MA in Social Anthropology", institution: "University of London", year: "2003" },
        { degree: "BA in Anthropology", institution: "University of Ghana", year: "2000" },
      ]}
      categorySlug="senior-members"
    />
  )
}
