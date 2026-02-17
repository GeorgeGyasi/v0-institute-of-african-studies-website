"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useEffect, useState } from "react"

type StaffMember = {
  name: string
  role: string
  specialty: string
  email: string
  photo: string
}

// Convert staff name to URL slug
function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

type StaffCategory = {
  id: string
  category: string
  members: StaffMember[]
}

const staffCategories: StaffCategory[] = [
  {
    id: "senior-members",
    category: "Senior Members",
    members: [
      {
        name: "Akosua Adomako Ampofo",
        role: "Professor",
        specialty: "Gender Studies & Social Transformation",
        email: "aadomako@ug.edu.gh",
        photo: "/images/staff/senior-member-1.jpg",
      },
      {
        name: "Kodzo Gavua",
        role: "Senior Research Fellow",
        specialty: "Archaeology & Heritage Studies",
        email: "kgavua@ug.edu.gh",
        photo: "/images/staff/senior-member-2.jpg",
      },
      {
        name: "Irene K. Odotei",
        role: "Professor",
        specialty: "History & Maritime Studies",
        email: "ikodotei@ug.edu.gh",
        photo: "/images/staff/senior-member-3.jpg",
      },
      {
        name: "Wazi Apoh",
        role: "Senior Lecturer",
        specialty: "Historical Archaeology",
        email: "wapoh@ug.edu.gh",
        photo: "/images/staff/senior-member-4.jpg",
      },
      {
        name: "Osei Kwarteng Darkwa",
        role: "Senior Lecturer",
        specialty: "Ethnomusicology & Performance Studies",
        email: "okdarkwa@ug.edu.gh",
        photo: "/images/staff/senior-member-5.jpg",
      },
      {
        name: "Benjamin Kye Ampadu",
        role: "Lecturer",
        specialty: "African Linguistics & Language Documentation",
        email: "bkampadu@ug.edu.gh",
        photo: "/images/staff/senior-member-6.jpg",
      },
      {
        name: "Ama Boakye",
        role: "Senior Lecturer",
        specialty: "African Economic History",
        email: "aboakye@ug.edu.gh",
        photo: "/images/staff/senior-member-7.jpg",
      },
      {
        name: "Yaa Nyarko",
        role: "Professor",
        specialty: "Comparative African Literature",
        email: "ynyarko@ug.edu.gh",
        photo: "/images/staff/senior-member-8.jpg",
      },
      {
        name: "Joseph Mensah",
        role: "Professor",
        specialty: "African Philosophy & Epistemology",
        email: "jmensah@ug.edu.gh",
        photo: "/images/staff/senior-member-9.jpg",
      },
      {
        name: "Abena Asare",
        role: "Senior Lecturer",
        specialty: "Contemporary African Politics",
        email: "aasare@ug.edu.gh",
        photo: "/images/staff/senior-member-10.jpg",
      },
      {
        name: "Kofi Owusu",
        role: "Senior Lecturer",
        specialty: "African Environmental History",
        email: "kowusu@ug.edu.gh",
        photo: "/images/staff/senior-member-11.jpg",
      },
      {
        name: "Nana Ama Adu",
        role: "Professor",
        specialty: "African Diaspora Studies",
        email: "naadu@ug.edu.gh",
        photo: "/images/staff/senior-member-12.jpg",
      },
      {
        name: "Kwesi Prah",
        role: "Senior Research Fellow",
        specialty: "African Language Rights & Advocacy",
        email: "kprah@ug.edu.gh",
        photo: "/images/staff/senior-member-13.jpg",
      },
      {
        name: "Efua Boateng",
        role: "Senior Lecturer",
        specialty: "African Women's History",
        email: "eboateng@ug.edu.gh",
        photo: "/images/staff/senior-member-14.jpg",
      },
      {
        name: "Alex Quarcoo",
        role: "Professor",
        specialty: "African Urban Studies",
        email: "aquarcoo@ug.edu.gh",
        photo: "/images/staff/senior-member-15.jpg",
      },
      {
        name: "Comfort Kwadwo",
        role: "Professor",
        specialty: "Pan-African Relations & Diplomacy",
        email: "ckwadwo@ug.edu.gh",
        photo: "/images/staff/senior-member-16.jpg",
      },
      {
        name: "Yaw Akologo",
        role: "Senior Lecturer",
        specialty: "African Digital Heritage",
        email: "yakologo@ug.edu.gh",
        photo: "/images/staff/senior-member-17.jpg",
      },
      {
        name: "Ama Serwaa",
        role: "Senior Lecturer",
        specialty: "Ghanaian Traditional Governance",
        email: "aserwaa@ug.edu.gh",
        photo: "/images/staff/senior-member-18.jpg",
      },
      {
        name: "Benjamin Boateng",
        role: "Professor",
        specialty: "African Christian Studies",
        email: "bboateng@ug.edu.gh",
        photo: "/images/staff/senior-member-19.jpg",
      },
      {
        name: "Akua Opoku",
        role: "Professor",
        specialty: "African Anthropology & Ethnography",
        email: "aopoku@ug.edu.gh",
        photo: "/images/staff/senior-member-20.jpg",
      },
      {
        name: "Samuel Amankwaah",
        role: "Senior Lecturer",
        specialty: "African Labor & Social Movements",
        email: "samankwaah@ug.edu.gh",
        photo: "/images/staff/senior-member-21.jpg",
      },
      {
        name: "Adwoa Mensah",
        role: "Senior Research Fellow",
        specialty: "African Material Culture Studies",
        email: "amensah@ug.edu.gh",
        photo: "/images/staff/senior-member-22.jpg",
      },
      {
        name: "David Oladele",
        role: "Professor",
        specialty: "Pan-African Intellectual History",
        email: "doladele@ug.edu.gh",
        photo: "/images/staff/senior-member-23.jpg",
      },
      {
        name: "Esi Awotwe",
        role: "Professor",
        specialty: "African Gender & Development",
        email: "eawotwe@ug.edu.gh",
        photo: "/images/staff/senior-member-24.jpg",
      },
      {
        name: "Kweku Asante",
        role: "Senior Lecturer",
        specialty: "African Migration & Mobility",
        email: "kasante@ug.edu.gh",
        photo: "/images/staff/senior-member-25.jpg",
      },
      {
        name: "Ama Tsibu",
        role: "Senior Lecturer",
        specialty: "African Visual Arts & Aesthetics",
        email: "atsibu@ug.edu.gh",
        photo: "/images/staff/senior-member-26.jpg",
      },
      {
        name: "Isaac Osei",
        role: "Professor",
        specialty: "African Agricultural Heritage",
        email: "iosei@ug.edu.gh",
        photo: "/images/staff/senior-member-27.jpg",
      },
      {
        name: "Nana Yaa",
        role: "Professor",
        specialty: "African Health & Wellness Traditions",
        email: "nyaa@ug.edu.gh",
        photo: "/images/staff/senior-member-28.jpg",
      },
      {
        name: "Emmanuel Amoako",
        role: "Senior Lecturer",
        specialty: "African Education Systems",
        email: "eamoako@ug.edu.gh",
        photo: "/images/staff/senior-member-29.jpg",
      },
      {
        name: "Abena Turkson",
        role: "Senior Research Fellow",
        specialty: "African Conflict & Peace Studies",
        email: "aturkson@ug.edu.gh",
        photo: "/images/staff/senior-member-30.jpg",
      },
      {
        name: "Kwabena Agyeman",
        role: "Professor",
        specialty: "African Technology & Innovation History",
        email: "kagyeman@ug.edu.gh",
        photo: "/images/staff/senior-member-31.jpg",
      },
    ],
  },
  {
    id: "senior-staff",
    category: "Senior Staff",
    members: [
      { name: "Alongya Mark-Anthony", role: "Chief Administrative Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Ametewee Fidelia Serwa", role: "Principal Research Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Opuni Kwagyan Frimpong Klinsmann", role: "Senior ICT Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Twum-Danso Daniel", role: "Chief Library Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Kpogo Nathaniel Worlanyo", role: "Senior Research Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Fuseini Judith", role: "Principal Administrative Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Bruku Christian Emmanuel", role: "Senior Research Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Kpelie Josephine A", role: "Chief Administrative Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Okle Selina Emma", role: "Senior Research Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Owusu Philip", role: "Principal Assistant Curator", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Tetteh Michael Adjei", role: "Senior Accounting Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Asamoah Samuel", role: "Assistant Transport Officer", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Osei Victoria", role: "Senior Accounting Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Apeletey Gifty", role: "Senior Administrative Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Carbral Isaac Jang", role: "Principal Library Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Hoyah Paul", role: "Principal Library Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Obuadey Paul E.", role: "Principal Library Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Incoom Gloria Esi", role: "Administrative Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Danquah Evelyn", role: "Senior Administrative Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Nartey Gabriel Batsa", role: "Administrative Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Aincre Maame Fosua", role: "Research Assistant (Nkrumah Chair)", specialty: "", email: "", photo: "/images/placeholder.svg" },
    ],
  },
  {
    id: "junior-staff",
    category: "Junior Staff",
    members: [
      { name: "Abire Nyaaba", role: "Headman", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Agboletey Robert", role: "Messenger/Cleaner", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Mills-Lamptey Benjamin", role: "Tradesman Gd. 1", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Serfour-Bofa Felicia", role: "Accounts Clerk Gd. 1", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Kagbenu Justice", role: "Junior Lib. Assistant Gd 11", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Amponsah Esther", role: "Clerk Grade 1 (Manhyia Archives)", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Amponsah-Nuamah Sophia", role: "Junior Lib. Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Wiafe Francisca", role: "Junior Lib. Assistant", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Cisse Ibrahim", role: "Driver", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Ziem Lydia", role: "Cleaner", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Nyampong Georgina", role: "Cleaner", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Ahazi Grace", role: "Cleaner", specialty: "", email: "", photo: "/images/placeholder.svg" },
      { name: "Appiah Seth", role: "Cleaner", specialty: "", email: "", photo: "/images/placeholder.svg" },
    ],
  },
]

export function StaffDirectory() {
  const [activeSection, setActiveSection] = useState("senior-members")

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
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-12">
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
  const slug = nameToSlug(person.name)
  const profileUrl = `/about/staff/profiles/${category}/${slug}`
  const isClickable = category === "senior-members"

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
      {/* Photo with hover brightness - link only for senior members */}
      {isClickable ? (
        <Link href={profileUrl}>
          <div className="relative aspect-[4/5] overflow-hidden bg-muted cursor-pointer">
            <Image
              src={person.photo || "/placeholder.svg"}
              alt={`Portrait of ${person.name}`}
              fill
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
        </Link>
      ) : (
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={person.photo || "/placeholder.svg"}
            alt={`Portrait of ${person.name}`}
            fill
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
      )}

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
