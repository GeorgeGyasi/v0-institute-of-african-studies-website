import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Benjamin Boateng - Staff Profile",
  description: "Staff profile for Prof. Benjamin Boateng at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Benjamin Boateng"
      role="Professor"
      specialty="African Christian Studies"
      email: "bboateng@ug.edu.gh"
      bio="Prof. Benjamin Boateng explores the history and contemporary expressions of Christianity in Africa. His work examines how African Christians have adapted, reinterpreted, and transformed Christian faith within African contexts."
      researchAreas={[
        "African Christianity",
        "Religious syncretism",
        "Church history",
        "Pentecostalism in Africa",
        "Religion and society",
      ]}
      publications={[
        { title: "African Christianity: History and Practice", year: "2023" },
        { title: "Faith and Culture in Africa", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Religious Studies", institution: "University of Edinburgh", year: "2004" },
        { degree: "MA in Theology", institution: "University of Ghana", year: "2000" },
        { degree: "BA in Religious Studies", institution: "University of Ghana", year: "1997" },
      ]}
      categorySlug="senior-members"
    />
  )
}
