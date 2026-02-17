import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Dr. Kodzo Gavua - Staff Profile",
  description: "Staff profile for Dr. Kodzo Gavua at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Dr. Kodzo Gavua"
      role="Senior Research Fellow"
      specialty="Archaeology & Heritage Studies"
      email="kgavua@ug.edu.gh"
      office="IAS Building, Heritage Lab"
      bio="Dr. Kodzo Gavua is a renowned archaeologist specializing in African heritage conservation and historical archaeology. His research combines excavation, museum curation, and community engagement to preserve and interpret Africa's material past."
      researchAreas={[
        "Historical archaeology of West Africa",
        "Museum studies and heritage management",
        "Cultural resource management",
        "Oral history and archaeology integration",
        "African diaspora archaeology",
      ]}
      publications={[
        { title: "Archaeological Heritage of Ghana", year: "2023" },
        { title: "Community Archaeology in Africa", year: "2022" },
        { title: "Museums and Nation Building", year: "2021" },
      ]}
      education={[
        { degree: "PhD in Archaeology", institution: "University of London", year: "2000" },
        { degree: "MA in Archaeological Science", institution: "University of Southampton", year: "1996" },
        { degree: "BA in Archaeology", institution: "University of Ghana", year: "1993" },
      ]}
      categorySlug="senior-members"
    />
  )
}
