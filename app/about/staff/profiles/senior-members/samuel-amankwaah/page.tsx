import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Samuel Amankwaah - Staff Profile",
  description: "Staff profile for Dr. Samuel Amankwaah at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Samuel Amankwaah"
      role="Senior Lecturer"
      specialty="African Labor & Social Movements"
      email="samankwaah@ug.edu.gh"
      bio="Dr. Samuel Amankwaah studies labor organization, trade unions, and social movements in Africa. His research documents workers' struggles, collective action, and the role of grassroots activism in social transformation."
      researchAreas={[
        "Labor history",
        "Trade unions and collective bargaining",
        "Social movements",
        "Worker activism",
        "Economic justice",
      ]}
      publications={[
        { title: "Voices of African Workers", year: "2023" },
        { title: "Labor and Liberation in Africa", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Social History", institution: "University of Ghana", year: "2008" },
        { degree: "MA in History", institution: "University of London", year: "2004" },
        { degree: "BA in History", institution: "University of Ghana", year: "2001" },
      ]}
      categorySlug="senior-members"
    />
  )
}
