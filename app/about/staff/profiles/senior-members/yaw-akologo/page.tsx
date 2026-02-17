import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Yaw Akologo - Staff Profile",
  description: "Staff profile for Dr. Yaw Akologo at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Yaw Akologo"
      role="Senior Lecturer"
      specialty="African Digital Heritage"
      email="yakologo@ug.edu.gh"
      bio="Dr. Yaw Akologo pioneered the digital archiving and preservation of African cultural heritage. His work combines traditional archival practices with cutting-edge digital technologies to ensure African knowledge remains accessible for future generations."
      researchAreas={[
        "Digital preservation",
        "Database design for archives",
        "Digital humanities",
        "Open-source solutions for heritage",
        "Technology and culture",
      ]}
      publications={[
        { title: "Digitizing Africa: Heritage in the Digital Age", year: "2023" },
        { title: "Open Archives for African Knowledge", year: "2022" },
      ]}
      education={[
        { degree: "PhD in Library & Information Science", institution: "University of Ghana", year: "2009" },
        { degree: "MA in Archival Studies", institution: "University of London", year: "2005" },
        { degree: "BA in Information Technology", institution: "University of Ghana", year: "2002" },
      ]}
      categorySlug="senior-members"
    />
  )
}
