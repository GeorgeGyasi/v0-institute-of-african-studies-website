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
      specialty="African & Gender Studies"
      email="aadomako@ug.edu.gh"
      phone="+233 (0) 302 500 401"
      office="Institute of African Studies, Room 201"
      officeHours="By appointment"
      bio="Prof. Akosua Adomako Ampofo is Professor of African and Gender Studies at the Institute of African Studies, University of Ghana. She is an activist scholar whose areas of interest include African Knowledge systems, Higher education, Race and Identity Politics, Gender relations, Masculinities, and Popular Culture. She is President of the African Studies Association of Africa, an honorary Professor at the Centre for African Studies at the University of Birmingham, and a Fellow of the Ghana Academy of Arts and Sciences. She is the immediate past Dean of International Programmes at the University of Ghana and former Director of the Centre for Gender Studies and Advocacy (2005-2009) and former Director of the Institute of African Studies (2010-2015)."
      researchAreas={[
        "African Knowledge Systems",
        "African Higher Education",
        "Democracy and Social Justice",
        "Gender Systems",
        "Masculinities",
        "Popular Culture",
        "Race & Identity Politics",
        "Reproductive Health and Sexualities",
        "Women's Work",
      ]}
      publications={[
        {
          title: "Producing Inclusive Feminist Knowledge: Positionalities and Discourses in the Global South",
          year: "Forthcoming",
          journal: "Emerald Publishing (Co-edited with Josephine Beoku-Betts)",
        },
        {
          title: "Young African Men's Reflections on Negotiating Sexual Intimacy",
          year: "In press",
          journal: "In Gabriela M. Torres and Kersti Yllö (Eds.) Sexual Violence in Intimacy",
        },
        {
          title: "Re-viewing Studies on Africa, #Black Lives Matter, and Envisioning the Future of African Studies",
          year: "2016",
          journal: "African Studies Review (59)2: 7-27",
        },
        {
          title: "Sitting on a Man: Forty Years Later",
          year: "2017",
          journal: "Journal of West African History (3)2: 146-155",
        },
        {
          title: "Informalising the formal: The conditions of female agency workers in Ghana's banking sector",
          year: "2017",
          journal: "Contemporary Journal of African Studies 4(2):67-92",
        },
        {
          title: "Expressions of Masculinity and Femininity in Husbands' Care of Wives with Cancer in Accra",
          year: "2016",
          journal: "African Studies Review (59)1: 175-197",
        },
        {
          title: "Changing Representations of Women in Ghanaian Popular music: Marrying research and advocacy",
          year: "2012",
          journal: "Current Sociology (60): 258-279",
        },
      ]}
      education={[
        {
          degree: "Doctor of Philosophy in Sociology",
          institution: "Vanderbilt University, Nashville, TN",
          year: "",
        },
        {
          degree: "Master of Science, Development Planning & Management",
          institution: "Kwame Nkrumah University of Science and Technology, Kumasi",
          year: "",
        },
        {
          degree: "Post-graduate Diploma, Regional and Spatial Planning",
          institution: "University of Dortmund, Dortmund",
          year: "",
        },
        {
          degree: "Bachelor of Science, Architectural Design",
          institution: "Kwame Nkrumah University of Science and Technology",
          year: "",
        },
      ]}
      awards={[
        "Fellow, Ghana Academy of Arts and Sciences",
        "President, African Studies Association of Africa",
        "Honorary Professor, Centre for African Studies, University of Birmingham",
        "Feminist Activism Award, Sociologists for Women and Society (2010)",
        "Senior Fulbright Scholar-in-Residence",
        "New Century Fulbright Scholar",
        "Junior Fulbright Scholar",
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
