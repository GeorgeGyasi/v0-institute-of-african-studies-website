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

// Senior members list - names match the staff directory exactly and every slug
// points to a real, existing profile page. Navigation order is derived by sorting
// on name (see getProfileNavigation), so this list mirrors the directory's display order.
export const seniorMembers: StaffProfile[] = [
  { name: "Aba Amandzewaa Anaman", slug: "aba-amandzewaa-anaman", specialty: "Academic Librarianship & Information Science" },
  { name: "Chika C. Mba", slug: "dr-chika-c-mba", specialty: "African Philosophy & Decolonial Theory" },
  { name: "Dr. Aristedes Narh Hargoe", slug: "dr-aristedes-narh-hargoe", specialty: "African Environmental Conservation" },
  { name: "Dr. Benjamin Kobina Kwansa", slug: "dr-benjamin-kobina-kwansa", specialty: "African Heritage Management" },
  { name: "Dr. Edwin Asa Adjei", slug: "dr-edwin-asa-adjei", specialty: "Language, Literature and Drama" },
  { name: "Dr. Eric Tamatey Lawer", slug: "dr-eric-tamatey-lawer", specialty: "Natural Resource Governance & Energy Transition" },
  { name: "Dr. Genevieve Nrenzah", slug: "dr-genevieve-nrenzah", specialty: "Religions & Philosophy" },
  { name: "Dr. Laryea Akwetteh", slug: "dr-laryea-akwetteh", specialty: "African Cultural Heritage" },
  { name: "Dr. Mjiba Frehiwot", slug: "dr-mjiba-frehiwot", specialty: "Religious Studies" },
  { name: "Dr. Peter Narh", slug: "dr-peter-narh", specialty: "Economics" },
  { name: "Dr. Pius Siakwah", slug: "dr-pius-siakwah", specialty: "African Social Development" },
  { name: "George Gyasi Gyesaw", slug: "george-gyasi-gyesaw", specialty: "Cultural Studies" },
  { name: "Prof. Asante", slug: "professor-richard-asante", specialty: "African Studies" },
  { name: "Prof. Hasiyatu Abubakari", slug: "dr-hasiyatu-abubakari", specialty: "African Linguistics" },
  { name: "Professor Deborah Atobrah", slug: "prof-deborah-atobrah", specialty: "African Women & Development" },
  { name: "Professor Michael Kpessa-Whyte", slug: "professor-michael-kpessa-whyte", specialty: "African Politics & Comparative Public Policy" },
  { name: "Professor Samuel Aniegye Ntewusu", slug: "professor-samuel-ntewusu", specialty: "African History, Culture & Development" },
  { name: "Professor. (Mrs) Mercy Akrofi Ansah", slug: "professor-mrs-mercy-akrofi-ansah", specialty: "Language, Literature and Drama" },
  { name: "Rev. Dr. Grace Sintim Adasi", slug: "rev-dr-grace-sintim-adasi", specialty: "Religions, Philosophy & Gender Studies" },
  { name: "Vivian Appiah, CA", slug: "vivian-appiah", specialty: "Finance & Accounting" },
  { name: "Ɔbenfo (Professor) Ọbádélé Bakari Kambon", slug: "benfo-professor-obadele-bakari-kambon", specialty: "African Philosophy & Consciousness" },
]

// Senior staff list - alphabetical, matches the sorted display order in staff-directory.tsx
export const seniorStaff: StaffProfile[] = [
  { name: "Diana Abena Mensah-Addo", slug: "diana-abena-mensah-addo", specialty: "Principal Administrative Assistant" },
  { name: "Dr. Apuri Mark-Anthony Alongya", slug: "dr-apuri-mark-anthony-alongya", specialty: "Chief Administrative Assistant" },
  { name: "Dr. Philip Owusu", slug: "dr-philip-owusu", specialty: "Curator" },
  { name: "Fidelia Ametewee", slug: "fidelia-ametewee", specialty: "Principal Research Assistant" },
  { name: "Nathaniel Kpogo Worlanyo", slug: "nathaniel-kpogo-worlanyo", specialty: "Senior Research Assistant" },
  { name: "Selina Emma Okle", slug: "selina-emma-okle", specialty: "Senior Research Assistant" },
]

// Get senior staff navigation info (current, next, previous)
export function getSeniorStaffNavigation(currentSlug: string) {
  const currentIndex = seniorStaff.findIndex((p) => p.slug === currentSlug)

  if (currentIndex === -1) {
    return null
  }

  const previousIndex = currentIndex === 0 ? seniorStaff.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === seniorStaff.length - 1 ? 0 : currentIndex + 1

  return {
    current: seniorStaff[currentIndex],
    previous: seniorStaff[previousIndex],
    next: seniorStaff[nextIndex],
    isLast: currentIndex === seniorStaff.length - 1,
    isFirst: currentIndex === 0,
  }
}

// Get profile navigation info (current, next, previous).
// Sorts by name so Previous/Next always follows the directory's alphabetical display order.
export function getProfileNavigation(currentSlug: string) {
  const ordered = [...seniorMembers].sort((a, b) => a.name.localeCompare(b.name))
  const currentIndex = ordered.findIndex((p) => p.slug === currentSlug)

  if (currentIndex === -1) {
    return null
  }

  const previousIndex = currentIndex === 0 ? ordered.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === ordered.length - 1 ? 0 : currentIndex + 1

  return {
    current: ordered[currentIndex],
    previous: ordered[previousIndex],
    next: ordered[nextIndex],
    isLast: currentIndex === ordered.length - 1,
    isFirst: currentIndex === 0,
  }
}
