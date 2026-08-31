// Staff profiles data for navigation
export type StaffProfile = {
  name: string
  slug: string
  specialty: string
}

// Function to convert name to slug (same as in staff-directory.tsx)
function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

// Senior members list - must be in the same order as staff-directory.tsx
export const seniorMembers: StaffProfile[] = [
  { name: "Professor Dzodzi Tsikata", slug: "professor-dzodzi-tsikata", specialty: "African Legal Studies & Gender Justice" },
  { name: "Professor Emerita Takyiwaa Manuh", slug: "professor-emerita-takyiwaa-manuh", specialty: "African Development & Diaspora Studies" },
  { name: "Professor Akosua Adomako Ampofo", slug: "professor-akosua-adomako-ampofo", specialty: "Gender Studies & Social Transformation" },
  { name: "Professor Esi Sutherland-Addy", slug: "professor-esi-sutherland-addy", specialty: "African Literature & Linguistics" },
  { name: "Professor Albert Awedoba", slug: "professor-albert-awedoba", specialty: "African Anthropology & Religion" },
  { name: "Professor Daniel Avorgbedor", slug: "professor-daniel-avorgbedor", specialty: "Ethnomusicology & Cultural Studies" },
  { name: "Professor Kojo Amanor", slug: "professor-kojo-amanor", specialty: "African Environmental Studies" },
  { name: "Professor Richard Asante", slug: "professor-richard-asante", specialty: "African History & Governance" },
  { name: "Ɔbenfo (Professor) Ọbádélé Bakari Kambon", slug: "benfo-professor-obadele-bakari-kambon", specialty: "African Philosophy & Consciousness" },
  { name: "Dr. Genevieve Nrenzah", slug: "dr-genevieve-nrenzah", specialty: "African Medical Anthropology" },
  { name: "Dr. Chika C. Mba", slug: "dr-chika-c-mba", specialty: "African Economic Development" },
  { name: "Dr. Kojo Opoku Aidoo", slug: "dr-kojo-opoku-aidoo", specialty: "African Political Science" },
  { name: "Professor (Mrs) Mercy Akrofi Ansah", slug: "professor-mrs-mercy-akrofi-ansah", specialty: "Language, Literature & Drama" },
  { name: "Dr. Peter Narh", slug: "dr-peter-narh", specialty: "African Urban Geography" },
  { name: "Dr. Pius Siakwah", slug: "dr-pius-siakwah", specialty: "African Social Development" },
  { name: "Professor Kwame Amoah Labi", slug: "professor-kwame-amoah-labi", specialty: "African Literature & Cultural Studies" },
  { name: "Professor Michael Kpessa-Whyte", slug: "professor-michael-kpessa-whyte", specialty: "African Religious Studies & Philosophy" },
  { name: "Dr. Mjiba Frehiwot", slug: "dr-mjiba-frehiwot", specialty: "African Peace & Conflict Studies" },
  { name: "George Gyasi Gyesaw", slug: "george-gyasi-gyesaw", specialty: "J. H. Kwabena Nketia Archives" },
  { name: "Dr. Hasiyatu Abubakari", slug: "dr-hasiyatu-abubakari", specialty: "African Islamic Studies" },
  { name: "Dr. Benjamin Kobina Kwansa", slug: "dr-benjamin-kobina-kwansa", specialty: "African Heritage Management" },
  { name: "Dr. Aristedes Narh Hargoe", slug: "dr-aristedes-narh-hargoe", specialty: "African Environmental Conservation" },
  { name: "Dr. Eric Tamatey Lawer", slug: "dr-eric-tamatey-lawer", specialty: "African Archaeology" },
  { name: "Dr. Edwin Asa Adjei", slug: "dr-edwin-asa-adjei", specialty: "African Linguistics" },
  { name: "Dr. Ahmed Badawi Mustapha", slug: "dr-ahmed-badawi-mustapha", specialty: "African Islamic History" },
  { name: "N. Laryea Akwetteh", slug: "n-laryea-akwetteh", specialty: "African Cultural Heritage" },
  { name: "Mrs. Yvonne Lartey", slug: "mrs-yvonne-lartey", specialty: "African Food Culture & Nutrition" },
  { name: "Dr. Obodai Torto", slug: "dr-obodai-torto", specialty: "African Indigenous Knowledge" },
  { name: "Dr. Osman Abdul-Rahman Alhassan", slug: "dr-osman-abdul-rahman-alhassan", specialty: "African Islamic Civilization" },
  { name: "Professor. Samuel Ntewusu", slug: "professor-samuel-ntewusu", specialty: "African History & Politics" },
  { name: "Dr. Benjamin O. Ayeetey", slug: "dr-benjamin-o-ayeetey", specialty: "African Social Anthropology" },
  { name: "Ms. Vivian Appiah", slug: "ms-vivian-appiah", specialty: "African Gender & Development" },
  { name: "Prof. Edem Adotey", slug: "prof-edem-adotey", specialty: "African Arts & Aesthetics" },
  { name: "Prof. Deborah Atobrah", slug: "prof-deborah-atobrah", specialty: "African Women & Development" },
]

// Get profile navigation info (current, next, previous)
export function getProfileNavigation(currentSlug: string) {
  const currentIndex = seniorMembers.findIndex((p) => p.slug === currentSlug)
  
  if (currentIndex === -1) {
    return null
  }

  const previousIndex = currentIndex === 0 ? seniorMembers.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === seniorMembers.length - 1 ? 0 : currentIndex + 1

  return {
    current: seniorMembers[currentIndex],
    previous: seniorMembers[previousIndex],
    next: seniorMembers[nextIndex],
    isLast: currentIndex === seniorMembers.length - 1,
    isFirst: currentIndex === 0,
  }
}
