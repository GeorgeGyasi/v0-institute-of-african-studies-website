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
        name: "Professor Dzodzi Tsikata",
        role: "Professor",
        specialty: "African Legal Studies & Gender Justice",
        email: "dtsikata@ug.edu.gh",
        photo: "/images/professor-dzodzi-tsikata.jpg",
      },
      {
        name: "Professor Emerita Takyiwaa Manuh",
        role: "Professor Emerita",
        specialty: "African Development & Diaspora Studies",
        email: "tmanuh@ug.edu.gh",
        photo: "/images/professor-takyiwaa-manuh.jpg",
      },
      {
        name: "Professor Akosua Adomako Ampofo",
        role: "Professor",
        specialty: "Gender Studies & Social Transformation",
        email: "aadomako@ug.edu.gh",
        photo: "/images/professor-adomako.jpg",
      },
      {
        name: "Professor Esi Sutherland-Addy",
        role: "Professor",
        specialty: "African Literature & Linguistics",
        email: "esutherland@ug.edu.gh",
        photo: "/images/professor-esi-sutherland.jpg",
      },
      {
        name: "Professor Albert Awedoba",
        role: "Professor",
        specialty: "African Anthropology & Religion",
        email: "aawedoba@ug.edu.gh",
        photo: "/images/professor-albert-awedoba.jpg",
      },
      {
        name: "Professor Daniel Avorgbedor",
        role: "Professor",
        specialty: "Ethnomusicology & Cultural Studies",
        email: "davorgbedor@ug.edu.gh",
        photo: "/images/staff/senior-member-6.jpg",
      },
      {
        name: "Professor Kojo Amanor",
        role: "Professor",
        specialty: "African Environmental Studies",
        email: "kamanor@ug.edu.gh",
        photo: "/images/staff/senior-member-7.jpg",
      },
      {
        name: "Professor Richard Asante",
        role: "Professor",
        specialty: "African History & Governance",
        email: "rasante@ug.edu.gh",
        photo: "/images/professor-asante.jpg",
      },
      {
        name: "Ɔbenfo (Professor) Ọbádélé Bakari Kambon",
        role: "Professor",
        specialty: "African Philosophy & Consciousness",
        email: "okambon@ug.edu.gh",
        photo: "/images/staff/senior-member-9.jpg",
      },
      {
        name: "Dr. Genevieve Nrenzah",
        role: "Senior Research Fellow",
        specialty: "African Medical Anthropology",
        email: "gnrenzah@ug.edu.gh",
        photo: "/images/staff/senior-member-10.jpg",
      },
      {
        name: "Dr. Chika C. Mba",
        role: "Senior Lecturer",
        specialty: "African Economic Development",
        email: "cmba@ug.edu.gh",
        photo: "/images/staff/senior-member-11.jpg",
      },
      {
        name: "Dr. Kojo Opoku Aidoo",
        role: "Senior Lecturer",
        specialty: "African Political Science",
        email: "kaidoo@ug.edu.gh",
        photo: "/images/staff/senior-member-12.jpg",
      },
      {
        name: "Professor. (Mrs) Mercy Akrofi Ansah",
        role: "Professor",
        specialty: "African Music & Cultural Heritage",
        email: "mankrofi@ug.edu.gh",
        photo: "/images/staff/senior-member-13.jpg",
      },
      {
        name: "Dr. Peter Narh",
        role: "Senior Lecturer",
        specialty: "African Urban Geography",
        email: "pnarh@ug.edu.gh",
        photo: "/images/staff/senior-member-14.jpg",
      },
      {
        name: "Dr. Pius Siakwah",
        role: "Senior Lecturer",
        specialty: "African Social Development",
        email: "psiakwah@ug.edu.gh",
        photo: "/images/staff/senior-member-15.jpg",
      },
      {
        name: "Professor Kwame Amoah Labi",
        role: "Professor",
        specialty: "African Literature & Cultural Studies",
        email: "klabi@ug.edu.gh",
        photo: "/images/staff/senior-member-16.jpg",
      },
      {
        name: "Professor Michael Kpessa-Whyte",
        role: "Professor",
        specialty: "African Religious Studies & Philosophy",
        email: "mkpessa@ug.edu.gh",
        photo: "/images/staff/senior-member-17.jpg",
      },
      {
        name: "George Gyasi Gyesaw",
        role: "Archivist",
        specialty: "J H Kwabena Nketia Archives",
        email: "ggyesaw@ug.edu.gh",
        photo: "/images/staff/senior-member-6.jpg",
      },
      {
        name: "Dr. Mjiba Frehiwot",
        role: "Senior Lecturer",
        specialty: "African Peace & Conflict Studies",
        email: "mfrehiwot@ug.edu.gh",
        photo: "/images/staff/senior-member-18.jpg",
      },
      {
        name: "Dr. Hasiyatu Abubakari",
        role: "Senior Lecturer",
        specialty: "African Islamic Studies",
        email: "habubakari@ug.edu.gh",
        photo: "/images/staff/senior-member-19.jpg",
      },
      {
        name: "Dr. Benjamin Kobina Kwansa",
        role: "Senior Lecturer",
        specialty: "African Heritage Management",
        email: "bkwansa@ug.edu.gh",
        photo: "/images/staff/senior-member-20.jpg",
      },
      {
        name: "Dr. Aristedes Narh Hargoe",
        role: "Lecturer",
        specialty: "African Environmental Conservation",
        email: "ahargoe@ug.edu.gh",
        photo: "/images/staff/senior-member-21.jpg",
      },
      {
        name: "Dr. Eric Tamatey Lawer",
        role: "Lecturer",
        specialty: "African Archaeology",
        email: "elawer@ug.edu.gh",
        photo: "/images/staff/senior-member-22.jpg",
      },
      {
        name: "Dr. Edwin Asa Adjei",
        role: "Senior Lecturer",
        specialty: "African Linguistics",
        email: "eadjei@ug.edu.gh",
        photo: "/images/staff/senior-member-23.jpg",
      },
      {
        name: "Dr. Ahmed Badawi Mustapha",
        role: "Senior Lecturer",
        specialty: "African Islamic History",
        email: "amustapha@ug.edu.gh",
        photo: "/images/staff/senior-member-24.jpg",
      },
      {
        name: "N. Laryea Akwetteh",
        role: "Senior Research Fellow",
        specialty: "African Cultural Heritage",
        email: "lakwetteh@ug.edu.gh",
        photo: "/images/staff/senior-member-25.jpg",
      },
      {
        name: "Mrs. Yvonne Lartey",
        role: "Senior Lecturer",
        specialty: "African Food Culture & Nutrition",
        email: "ylartey@ug.edu.gh",
        photo: "/images/staff/senior-member-26.jpg",
      },
      {
        name: "Dr. Obodai Torto",
        role: "Senior Lecturer",
        specialty: "African Indigenous Knowledge",
        email: "otorto@ug.edu.gh",
        photo: "/images/staff/senior-member-27.jpg",
      },
      {
        name: "Dr. Osman Abdul-Rahman Alhassan",
        role: "Senior Lecturer",
        specialty: "African Islamic Civilization",
        email: "oalhassan@ug.edu.gh",
        photo: "/images/staff/senior-member-28.jpg",
      },
      {
        name: "Professor. Samuel Ntewusu",
        role: "Professor",
        specialty: "African History & Politics",
        email: "sntewusu@ug.edu.gh",
        photo: "/images/staff/senior-member-29.jpg",
      },
      {
        name: "Dr. Benjamin O. Ayeetey",
        role: "Senior Lecturer",
        specialty: "African Social Anthropology",
        email: "bayeetey@ug.edu.gh",
        photo: "/images/staff/senior-member-30.jpg",
      },
      {
        name: "Ms. Vivian Appiah",
        role: "Senior Research Fellow",
        specialty: "African Gender & Development",
        email: "vappiah@ug.edu.gh",
        photo: "/images/staff/senior-member-31.jpg",
      },
      {
        name: "Prof. Irene Appeaning Addo",
        role: "Professor",
        specialty: "African Maritime Heritage",
        email: "iaddo@ug.edu.gh",
        photo: "/images/staff/senior-member-1.jpg",
      },
      {
        name: "Prof. Edem Adotey",
        role: "Professor",
        specialty: "African Arts & Aesthetics",
        email: "eadotey@ug.edu.gh",
        photo: "/images/staff/senior-member-2.jpg",
      },
      {
        name: "Prof. Deborah Atobrah",
        role: "Professor",
        specialty: "African Women & Development",
        email: "datobrah@ug.edu.gh",
        photo: "/images/staff/senior-member-3.jpg",
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
        </Link>
      ) : (
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={person.photo || "/placeholder.svg"}
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
