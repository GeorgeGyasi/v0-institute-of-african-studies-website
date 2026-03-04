"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useEffect, useState } from "react"
import type { StaffProfile } from "@/lib/supabase"

type StaffMember = StaffProfile & {
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

export default function StaffDirectoryComponent() {
  const [staffCategories, setStaffCategories] = useState<StaffCategory[]>([])
  const [activeSection, setActiveSection] = useState("staff")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStaff() {
      try {
        const response = await fetch('/api/staff')
        if (!response.ok) {
          throw new Error('Failed to fetch staff')
        }
        const data = await response.json()

        // Group staff by department/category
        const grouped: Record<string, StaffMember[]> = {}
        data.forEach((member: any) => {
          const category = member.department || 'Staff'
          if (!grouped[category]) {
            grouped[category] = []
          }
          grouped[category].push({
            ...member,
            photo: member.photo_url || '/images/placeholder.svg',
            specialty: member.specialty || '',
          })
        })

        // Convert to categories format
        const categories = Object.entries(grouped).map(([category, members]) => ({
          id: category.toLowerCase().replace(/\s+/g, '-'),
          category,
          members: (members as StaffMember[]).sort((a, b) => a.name.localeCompare(b.name)),
        }))

        setStaffCategories(categories)
      } catch (error) {
        console.error('[v0] Error fetching staff:', error)
        // Fall back to empty state
        setStaffCategories([])
      } finally {
        setLoading(false)
      }
    }

    fetchStaff()
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
