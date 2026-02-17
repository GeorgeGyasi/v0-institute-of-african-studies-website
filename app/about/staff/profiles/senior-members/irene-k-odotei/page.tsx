import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Irene K. Odotei - Staff Profile",
  description: "Staff profile for Prof. Irene K. Odotei at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Irene K. Odotei"
      role="Professor"
      specialty="History & Maritime Studies"
      email="ikodotei@ug.edu.gh"
      office="IAS Building, Room 204"
      bio="Prof. Irene K. Odotei is a distinguished historian focusing on African maritime history, trade networks, and social history. Her interdisciplinary approach combines archival research, oral history, and material culture studies to illuminate Africa's global connections."
      researchAreas={[
        "African maritime history",
        "Trans-Saharan trade",
        "Women merchants and trade networks",
        "Coastal societies and identity",
        "African diaspora and trade",
      ]}
      publications={[
        { title: "Merchants of the Atlantic", year: "2023" },
        { title: "Women and Trade in African History", year: "2022" },
        { title: "Coastal Ghana: Commerce and Culture", year: "2020" },
      ]}
      education={[
        { degree: "PhD in History", institution: "University of Ghana", year: "1998" },
        { degree: "MA in History", institution: "University of London", year: "1994" },
        { degree: "BA in History", institution: "University of Ghana", year: "1991" },
      ]}
      awards={[
        "Mellon Foundation Scholar Award (2021)",
        "Distinguished Historian Award, Ghana Academy of Arts & Sciences (2019)",
      ]}
      categorySlug="senior-members"
    />
  )
}
