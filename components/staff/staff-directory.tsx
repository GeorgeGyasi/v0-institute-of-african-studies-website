"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useEffect, useState } from "react"

type StaffMember = {
  id: string
  name: string
  role: string
  email: string
  specialty?: string
  photo_url?: string
}

const MOCK_STAFF: StaffMember[] = [
  { id: '1', name: 'Prof. Asante', role: 'Senior Member', email: 'p.asante@university.edu', specialty: 'African Studies', photo_url: '/images/professor-asante.jpg' },
  { id: '2', name: 'Professor Deborah Atobrah', role: 'Senior Member', email: 'datobrah@ug.edu.gh', specialty: 'African Women & Development', photo_url: '/images/professor-deborah-atobrah.png' },
  { id: '3', name: 'Dr. Laryea Akwetteh', role: 'Senior Member', email: 'lakwetteh@ug.edu.gh', specialty: 'African Cultural Heritage', photo_url: '/images/dr-laryea-akwetteh.png' },
  { id: '4', name: 'Dr. Benjamin Kobina Kwansa', role: 'Senior Member', email: 'bkkwansa@ug.edu.gh', specialty: 'African Heritage Management', photo_url: '/images/dr-benjamin-kobina-kwansa.png' },
  { id: '5', name: 'Prof. Avorgbedor', role: 'Senior Member', email: 'p.avorgbedor@university.edu', specialty: 'Music & Culture', photo_url: '/images/professor-avorgbedor.jpg' },
  { id: '6', name: 'Dr. Nii Dortey', role: 'Senior Member', email: 'dr.dortey@university.edu', specialty: 'Literature', photo_url: '/images/dr-nii-dortey.jpg' },
  { id: '7', name: 'Prof. Esi Sutherland-Addy', role: 'Senior Member', email: 'esutherland-addy@ug.edu.gh', specialty: 'African Literature & Cultural Policy', photo_url: '/images/professor-esi-sutherland.jpg' },
  { id: '8', name: 'Dr. Aristedes Narh Hargoe', role: 'Senior Member', email: 'ahargoe@ug.edu.gh', specialty: 'African Environmental Conservation', photo_url: '/images/dr-aristedes-narh-hargoe.png' },
  { id: '9', name: 'Dr. Peter Narh', role: 'Senior Member', email: 'p.narh@university.edu', specialty: 'Economics', photo_url: '/images/dr-peter-narh.jpg' },
  { id: '10', name: 'Dr. Hasiyatu Abubakari', role: 'Senior Member', email: 'h.abubakari@university.edu', specialty: 'History', photo_url: '/images/dr-hasiyatu-abubakari.jpg' },
  { id: '11', name: 'Dr. Mjiba Frehiwot', role: 'Senior Member', email: 'm.frehiwot@university.edu', specialty: 'Religious Studies', photo_url: '/images/dr-mjiba-frehiwot.jpg' },
  { id: '12', name: 'George Gyasi Gyesaw', role: 'Senior Member', email: 'g.gyesaw@university.edu', specialty: 'Cultural Studies', photo_url: '/images/george-gyesaw.jpg' },
  { id: '47', name: 'Ɔbenfo (Professor) Ọbádélé Bakari Kambon', role: 'Senior Member', email: '', specialty: 'African Philosophy & Consciousness', photo_url: '/images/obadele-bakari-kambon.jpg' },
  { id: '48', name: 'Dr. Edwin Asa Adjei', role: 'Senior Member', email: 'edaadjei@ug.edu.gh', specialty: 'Language, Literature and Drama', photo_url: '/images/dr-edwin-asa-adjei.jpg' },
  { id: '49', name: 'Chika C. Mba', role: 'Senior Member', email: 'cmba@ug.edu.gh', specialty: 'African Philosophy & Decolonial Theory', photo_url: '/images/dr-chika-mba.jpg' },
  { id: '50', name: 'Dr. Eric Tamatey Lawer', role: 'Senior Member', email: 'elawer@ug.edu.gh', specialty: 'Natural Resource Governance & Energy Transition', photo_url: '/images/dr-eric-tamatey-lawer.jpg' },
  { id: '51', name: 'Aba Amandzewaa Anaman', role: 'Senior Member', email: 'aaanaman@ug.edu.gh', specialty: 'Academic Librarianship & Information Science', photo_url: '/images/aba-amandzewaa-anaman.jpg' },
  { id: '52', name: 'Rev. Dr. Grace Sintim Adasi', role: 'Senior Member', email: 'gadasi@ug.edu.gh', specialty: 'Religions, Philosophy & Gender Studies', photo_url: '/images/rev-dr-grace-sintim-adasi.png' },
  { id: '53', name: 'Professor Samuel Aniegye Ntewusu', role: 'Senior Member', email: 'santewusu@ug.edu.gh', specialty: 'African History, Culture & Development', photo_url: '/images/professor-samuel-ntewusu.jpg' },
  { id: '54', name: 'Vivian Appiah, CA', role: 'Senior Member', email: 'voduro@ug.edu.gh', specialty: 'Finance & Accounting', photo_url: '/images/vivian-appiah.jpg' },
  { id: '55', name: 'Professor Michael Kpessa-Whyte', role: 'Senior Member', email: 'mkpessa-whyte@ug.edu.gh', specialty: 'African Politics & Comparative Public Policy', photo_url: '/images/professor-michael-kpessa-whyte.jpg' },
  { id: '56', name: 'Dr. Genevieve Nrenzah', role: 'Senior Member', email: 'gnrenzah@ug.edu.gh', specialty: 'Religions & Philosophy', photo_url: '/images/dr-genevieve-nrenzah.png' },
  { id: '57', name: 'Dr. Pius Siakwah', role: 'Senior Member', email: 'psiakwah@ug.edu.gh', specialty: 'African Social Development', photo_url: '/images/dr-pius-siakwah.png' },
  { id: '58', name: 'Professor. (Mrs) Mercy Akrofi Ansah', role: 'Senior Member', email: 'maansah@ug.edu.gh', specialty: 'Language, Literature and Drama', photo_url: '/images/professor-mercy-akrofi-ansah.jpg' },
  { id: '13', name: 'Nathaniel Kpogo Worlanyo', role: 'Senior Research Assistant', email: 'nkpogo@ug.edu.gh', specialty: 'Office: IAS Old Site', photo_url: '/images/staff/nathaniel-kpogo-worlanyo.jpg' },
  { id: '14', name: 'Diana Abena Mensah-Addo', role: 'Principal Administrative Assistant', email: 'damensah@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/diana-abena-mensah-addo.jpg' },
  { id: '15', name: 'Fidelia Ametewee', role: 'Principal Research Assistant', email: 'fametewee@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/fidelia-ametewee.jpg' },
  { id: '16', name: 'Senior Member 4', role: 'Senior Member', email: 'sm4@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-4.jpg' },
  { id: '17', name: 'Senior Member 5', role: 'Senior Member', email: 'sm5@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-5.jpg' },
  { id: '18', name: 'Senior Member 6', role: 'Senior Member', email: 'sm6@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-6.jpg' },
  { id: '19', name: 'Senior Member 7', role: 'Senior Member', email: 'sm7@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-7.jpg' },
  { id: '20', name: 'Senior Member 8', role: 'Senior Member', email: 'sm8@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-8.jpg' },
  { id: '21', name: 'Senior Member 9', role: 'Senior Member', email: 'sm9@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-9.jpg' },
  { id: '22', name: 'Selina Emma Okle', role: 'Senior Research Assistant', email: 'snalaryea@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/selina-emma-okle.jpg' },
  { id: '23', name: 'Dr. Philip Owusu', role: 'Curator', email: 'phowusu@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/dr-philip-owusu.jpg' },
  { id: '24', name: 'Joy Koney', role: 'Senior Member', email: 'sm12@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-12.jpg' },
  { id: '25', name: 'Justice Library', role: 'Senior Member', email: 'sm13@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-13.jpg' },
  { id: '26', name: 'Dr. Apuri Mark-Anthony Alongya', role: 'Chief Administrative Assistant', email: 'maalongya@ug.edu.gh', specialty: 'Office: IAS New Site', photo_url: '/images/staff/dr-apuri-mark-anthony-alongya.jpg' },
  { id: '27', name: 'Senior Member 15', role: 'Senior Member', email: 'sm15@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-15.jpg' },
  { id: '28', name: 'Senior Member 16', role: 'Senior Member', email: 'sm16@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-16.jpg' },
  { id: '29', name: 'Senior Member 17', role: 'Senior Member', email: 'sm17@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-17.jpg' },
  { id: '30', name: 'Senior Member 18', role: 'Senior Member', email: 'sm18@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-18.jpg' },
  { id: '31', name: 'Senior Member 19', role: 'Senior Member', email: 'sm19@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-19.jpg' },
  { id: '32', name: 'Senior Member 20', role: 'Senior Member', email: 'sm20@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-20.jpg' },
  { id: '33', name: 'Senior Member 21', role: 'Senior Member', email: 'sm21@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-21.jpg' },
  { id: '34', name: 'Senior Member 22', role: 'Senior Member', email: 'sm22@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-22.jpg' },
  { id: '35', name: 'Senior Member 23', role: 'Senior Member', email: 'sm23@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-23.jpg' },
  { id: '36', name: 'Senior Member 24', role: 'Senior Member', email: 'sm24@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-24.jpg' },
  { id: '37', name: 'Senior Member 25', role: 'Senior Member', email: 'sm25@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-25.jpg' },
  { id: '38', name: 'Senior Member 26', role: 'Senior Member', email: 'sm26@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-26.jpg' },
  { id: '39', name: 'Senior Member 27', role: 'Senior Member', email: 'sm27@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-27.jpg' },
  { id: '40', name: 'Senior Member 28', role: 'Senior Member', email: 'sm28@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-28.jpg' },
  { id: '41', name: 'Senior Member 29', role: 'Senior Member', email: 'sm29@university.edu', specialty: 'Administration', photo_url: '/images/staff/senior-member-29.jpg' },
  { id: '42', name: 'Senior Member 30', role: 'Senior Member', email: 'sm30@university.edu', specialty: 'Teaching', photo_url: '/images/staff/senior-member-30.jpg' },
  { id: '43', name: 'Senior Member 31', role: 'Senior Member', email: 'sm31@university.edu', specialty: 'Research', photo_url: '/images/staff/senior-member-31.jpg' },
  { id: '44', name: 'Junior Staff Member 1', role: 'Junior Staff', email: 'js1@university.edu', specialty: 'Support', photo_url: '/images/staff/junior-staff-1.jpg' },
  { id: '45', name: 'Junior Staff Member 2', role: 'Junior Staff', email: 'js2@university.edu', specialty: 'Administration', photo_url: '/images/staff/junior-staff-2.jpg' },
  { id: '46', name: 'Junior Staff Member 3', role: 'Junior Staff', email: 'js3@university.edu', specialty: 'Support', photo_url: '/images/staff/junior-staff-3.jpg' },
];

// Convert staff name to URL slug
function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

// Mapping for named staff to their correct profile slugs
const PROFILE_SLUG_MAP: Record<string, string> = {
  'Professor Michael Kpessa-Whyte': 'professor-michael-kpessa-whyte',
  'Dr. Genevieve Nrenzah': 'dr-genevieve-nrenzah',
  'Dr. Pius Siakwah': 'dr-pius-siakwah',
  'Professor. (Mrs) Mercy Akrofi Ansah': 'professor-mrs-mercy-akrofi-ansah',
  'Professor (Mrs) Mercy Akrofi Ansah': 'professor-mrs-mercy-akrofi-ansah',
  'Vivian Appiah, CA': 'vivian-appiah',
  'Professor Samuel Aniegye Ntewusu': 'professor-samuel-ntewusu',
  'Rev. Dr. Grace Sintim Adasi': 'rev-dr-grace-sintim-adasi',
  'Aba Amandzewaa Anaman': 'aba-amandzewaa-anaman',
  'Dr. Eric Tamatey Lawer': 'dr-eric-tamatey-lawer',
  'Chika C. Mba': 'dr-chika-c-mba',
  'Dr. Edwin Asa Adjei': 'dr-edwin-asa-adjei',
  'Ɔbenfo (Professor) Ọbádélé Bakari Kambon': 'benfo-professor-obadele-bakari-kambon',
  'Prof. Asante': 'professor-richard-asante',
  'Professor Deborah Atobrah': 'prof-deborah-atobrah',
  'Dr. Laryea Akwetteh': 'dr-laryea-akwetteh',
  'Dr. Benjamin Kobina Kwansa': 'dr-benjamin-kobina-kwansa',
  'Dr. Aristedes Narh Hargoe': 'dr-aristedes-narh-hargoe',
  'Prof. Avorgbedor': 'professor-avorgbedor',
  'Dr. Nii Dortey': 'dr-nii-dortey',
  'Prof. Esi Sutherland-Addy': 'professor-esi-sutherland',
  'Dr. Peter Narh': 'dr-peter-narh',
  'Dr. Hasiyatu Abubakari': 'dr-hasiyatu-abubakari',
  'Dr. Mjiba Frehiwot': 'dr-mjiba-frehiwot',
};

type StaffCategory = {
  id: string
  category: string
  members: StaffMember[]
}

export function StaffDirectory() {
  const [staffCategories, setStaffCategories] = useState<StaffCategory[]>([])
  const [activeSection, setActiveSection] = useState("staff")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Group staff by role/category
    const grouped: Record<string, StaffMember[]> = {
      'Senior Members': MOCK_STAFF.slice(0, 24), // Named staff, including Mercy
      'Senior Staff': MOCK_STAFF.slice(24, 55), // Numbered senior members
      'Junior Staff': MOCK_STAFF.slice(55, 58), // Junior staff
    }

    const categories = Object.entries(grouped).map(([category, members]) => ({
      id: category.toLowerCase().replace(/\s+/g, '-'),
      category,
      members: (members as StaffMember[]).sort((a, b) => a.name.localeCompare(b.name)),
    }))

    setStaffCategories(categories)
    setLoading(false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      for (const cat of staffCategories) {
        const el = document.getElementById(cat.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160 && rect.bottom > 160) {
            setActiveSection(cat.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [staffCategories])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-muted-foreground">Loading staff directory...</p>
        </div>
      </section>
    )
  }

  if (staffCategories.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-muted-foreground">No staff members found.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-8">
          {/* Main content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-20">
              {staffCategories.map((category) => (
                <div key={category.id} id={category.id}>
                  <div className="mb-8 border-b-2 border-primary/20 pb-3">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                      {category.category}
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {category.members.length} member{category.members.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {category.members.map((person) => (
                      <StaffCard key={person.name} person={person} category={category.id} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky sidebar navigation */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <nav className="sticky top-28">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Staff Categories
              </p>
              <div className="flex flex-col gap-1">
                {staffCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => scrollTo(cat.id)}
                    className={`rounded-md px-3 py-2.5 text-left text-sm transition-all ${
                      activeSection === cat.id
                        ? "bg-primary text-primary-foreground font-medium shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span className="block">{cat.category}</span>
                    <span className={`text-xs ${activeSection === cat.id ? "opacity-80" : "opacity-50"}`}>
                      {cat.members.length} member{cat.members.length !== 1 ? "s" : ""}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-border bg-card p-4">
                <p className="text-xs font-semibold text-foreground">
                  Total Staff
                </p>
                <p className="mt-1 text-2xl font-bold text-primary">
                  {staffCategories.reduce((sum, c) => sum + c.members.length, 0)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Across {staffCategories.length} categories
                </p>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </section>
  )
}

function StaffCard({ person, category }: { person: StaffMember; category: string }) {
  // Use the slug map for named staff, otherwise use auto-generated slug
  const slug = PROFILE_SLUG_MAP[person.name] || nameToSlug(person.name)
  const profileUrl = `/about/staff/profiles/${category}/${slug}`
  
  // Only senior members have dedicated profile pages; senior/junior staff are info-only
  const hasProfile = category === 'senior-members'

  if (hasProfile) {
    return (
      <Link href={profileUrl}>
        <div className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg cursor-pointer">
          {/* Photo with hover brightness */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src={person.photo_url || "/placeholder.svg"}
              alt={`Portrait of ${person.name}`}
              fill
              loading="eager"
              className="object-cover brightness-95 transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Subtle gradient overlay at bottom for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <p className="text-sm font-semibold text-white drop-shadow-sm">
                {person.name}
              </p>
              <p className="text-xs font-medium text-white/90 drop-shadow-sm">
                {person.role}
              </p>
            </div>
          </div>

          {/* Info section */}
          <div className="p-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              {person.specialty}
            </p>
            {person.email && (
              <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
                <Mail className="h-3.5 w-3.5 text-primary/60" />
                <a
                  href={`mailto:${person.email}`}
                  className="text-xs text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {person.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </Link>
    )
  }

  // Non-clickable card for numbered staff and junior staff
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card">
      {/* Photo without link */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={person.photo_url || "/placeholder.svg"}
          alt={`Portrait of ${person.name}`}
          fill
          loading="eager"
          className="object-cover brightness-95"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle gradient overlay at bottom for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-sm font-semibold text-white drop-shadow-sm">
            {person.name}
          </p>
          <p className="text-xs font-medium text-white/90 drop-shadow-sm">
            {person.role}
          </p>
        </div>
      </div>

      {/* Info section */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground leading-relaxed">
          {person.specialty}
        </p>
        {person.email && (
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            <Mail className="h-3.5 w-3.5 text-primary/60" />
            <a
              href={`mailto:${person.email}`}
              className="text-xs text-primary hover:underline"
            >
              {person.email}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
