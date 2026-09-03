export interface GdeDirector {
  slug: string
  name: string
  tenure: string
  order: string
  role: string
  image: string
  bio: string
  current?: boolean
}

export const gdeDirectors: GdeDirector[] = [
  {
    slug: "prof-albert-mawere-opoku",
    name: "Prof. Albert Mawere Opoku",
    tenure: "1962 – 1976",
    order: "Founding Director",
    role: "Choreographer & Dance Educator",
    image: "/images/director-albert-mawere-opoku.png",
    bio: "Professor Albert Mawere Opoku was the founding Artistic Director of the Ghana Dance Ensemble, shaping its identity from its establishment in 1962. A pioneering choreographer and dance educator, he pioneered a distinctive approach that used just enough choreography to showcase the classic movements of Ghana's heritage dances, presenting traditional forms on the concert stage without diminishing their cultural integrity. His work laid the artistic and philosophical foundation of the Ensemble and influenced generations of African dancers and scholars, helping to give the world a breathtaking view of African aesthetics from the perspective of Africans.",
  },
  {
    slug: "prof-francis-nii-yartey",
    name: "Prof. Francis Nii Yartey",
    tenure: "1976 – 1992",
    order: "Second Director",
    role: "Choreographer & Contemporary Dance Pioneer",
    image: "/images/director-francis-nii-yartey.png",
    bio: "Professor Francis Nii Yartey succeeded the founding director and led the Ghana Dance Ensemble into the realm of contemporary African dance. An internationally acclaimed choreographer, he explored the vocabulary of traditional Ghanaian dance in dialogue with cultures around the world, creating innovative works that expanded the Ensemble's expressive range. He later founded the Noyam African Dance Institute and toured extensively, becoming one of Africa's most influential voices in modern dance theatre while remaining rooted in the traditions he helped preserve.",
  },
  {
    slug: "mr-e-ampofo-duodu",
    name: "Mr. E. Ampofo Duodu",
    tenure: "1993 – 1997",
    order: "Third Director",
    role: "Dancer & Artistic Director",
    image: "/images/director-e-ampofo-duodu.png",
    bio: "Mr. E. Ampofo Duodu served as Artistic Director of the Ghana Dance Ensemble, bringing decades of performance experience to the role. As a seasoned dancer and repetiteur, he was instrumental in sustaining the Ensemble's core repertoire and passing the classic dances of Ghana on to a new generation of performers, maintaining the discipline and authenticity established by the Ensemble's founders.",
  },
  {
    slug: "mr-oh-nii-kwei-sowah",
    name: "Mr. Oh! Nii Kwei Sowah",
    tenure: "1997 – 2002",
    order: "Fourth Director",
    role: "Dancer, Choreographer & Educator",
    image: "/images/director-nii-kwei-sowah.png",
    bio: "Mr. Oh! Nii Kwei Sowah is a distinguished dancer, choreographer, and educator who directed the Ghana Dance Ensemble at the turn of the century. Widely respected as a teacher of African dance, he has shared Ghana's performance traditions with students and companies both at home and abroad. His leadership strengthened the Ensemble's role as a training ground for professional artistes and a custodian of the nation's living dance heritage.",
  },
  {
    slug: "dr-benjamin-obido-ayettey",
    name: "Dr. Benjamin Obido Ayettey",
    tenure: "2002 – 2015",
    order: "Fifth Director",
    role: "Dance Scholar & Artistic Director",
    image: "/images/director-benjamin-obido-ayettey.png",
    bio: "Dr. Benjamin Obido Ayettey led the Ghana Dance Ensemble for over a decade, combining scholarship with artistic direction. As a dance researcher and educator, he documented and revived traditional dances while guiding the Ensemble's performances and training programmes at the Institute of African Studies. His long tenure provided stability and continuity, ensuring that the Ensemble's repertoire remained both authentic and vibrant.",
  },
  {
    slug: "dr-moses-nii-dortey",
    name: "Dr. Moses Nii-Dortey",
    tenure: "2015 – 2019",
    order: "Sixth Director",
    role: "Ethnomusicologist & Artistic Director",
    image: "/images/director-moses-nii-dortey.png",
    bio: "Dr. Moses Nii-Dortey is a Senior Research Fellow and ethnomusicologist at the Institute of African Studies who directed the Ghana Dance Ensemble from 2015 to 2019. Bringing a scholar's perspective to the artistic direction of the company, he integrated research on Ghanaian music and dance with performance practice, deepening the intellectual foundations of the Ensemble's work while sustaining its tradition of excellence.",
  },
  {
    slug: "dr-aristedes-narh-hargoe",
    name: "Dr. Aristedes Narh Hargoe",
    tenure: "2019 – Present",
    order: "Current Director",
    role: "Artistic Director & Dance Practitioner",
    image: "/images/director-aristedes-narh-hargoe.png",
    bio: "Dr. Aristedes Narh Hargoe is the current Artistic Director of the Ghana Dance Ensemble. Under his leadership, the Ensemble maintains the discipline of the early classics while expanding its repertoire and exploring dance as an expression of contemporary issues. A dedicated dance practitioner and researcher, he continues the Ensemble's mission to research, preserve, and reimagine Ghana's performing arts traditions for new audiences at home and around the world.",
    current: true,
  },
]
