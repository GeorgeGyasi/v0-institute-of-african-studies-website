import type { Metadata } from "next"
import { StaffProfileDetail } from "@/components/staff/staff-profile-detail"

export const metadata: Metadata = {
  title: "Prof. Akosua Adomako Ampofo - Staff Profile",
  description: "Faculty profile for Prof. Akosua Adomako Ampofo at the Institute of African Studies.",
}

export default function ProfilePage() {
  return (
    <StaffProfileDetail
      name="Prof. Akosua Adomako Ampofo"
      role="Professor"
      specialty="Gender Studies & Social Transformation"
      email="aadomako@ug.edu.gh"
      phone="+233 (0) 302 500 401 Ext. 555"
      photo="/images/staff/senior-member-1.jpg"
      office="IAS Building, Room 201"
      officeHours="Monday & Wednesday 2-4 PM"
      bio="Prof. Akosua Adomako Ampofo is a leading scholar in African gender studies and social transformation. With over 25 years of research and teaching experience, she has pioneered groundbreaking work on women's agency, household dynamics, and development in African contexts. Her work bridges academic inquiry with policy engagement, collaborating with international organizations to advance gender equality."
      researchAreas={[
        "Gender and social transformation in Africa",
        "African women and development",
        "Household economics and family structures",
        "Feminist theory and praxis",
        "Women's empowerment and agency",
        "Gender and policy in Sub-Saharan Africa",
      ]}
      publications={[
        {
          title: "Gender, Social Movements, and Development in Africa",
          year: "2023",
        },
        {
          title: "African Feminisms: Contexts, Voices, and Visions",
          year: "2022",
        },
        {
          title: "Women's Agency and Household Dynamics in Ghana",
          year: "2021",
        },
        {
          title: "Rethinking Gender Policy in Post-Colonial Africa",
          year: "2020",
        },
        {
          title: "Feminist Perspectives on Development in Africa",
          year: "2019",
        },
      ]}
      education={[
        {
          degree: "PhD in Sociology",
          institution: "University of Ghana",
          year: "1998",
        },
        {
          degree: "MA in Gender Studies",
          institution: "University of Sussex",
          year: "1993",
        },
        {
          degree: "BA in Sociology",
          institution: "University of Ghana",
          year: "1990",
        },
      ]}
      awards={[
        "Fellow, Africa Regional Academy of Sciences (2022)",
        "British Academy/Leverhulme Small Research Fellowship (2020)",
        "Outstanding Academic Leader Award, University of Ghana (2018)",
        "ASA Prize for Best African Studies Scholarship (2016)",
      ]}
      categorySlug="senior-members"
    />
  )
}
