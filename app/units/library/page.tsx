import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import {
  BookOpen,
  Clock,
  Search,
  Archive,
  Globe,
  Users,
  MapPin,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Library",
  description:
    "The Institute of African Studies Library - a specialised collection of Africanist literature and research materials.",
}

const collections = [
  {
    icon: BookOpen,
    name: "Monographs & Reference",
    count: "15,000+",
    description:
      "Books, reference works, encyclopaedias, and handbooks covering all aspects of African Studies.",
  },
  {
    icon: Archive,
    name: "Periodicals & Journals",
    count: "500+",
    description:
      "Current and back issues of leading Africanist journals, newsletters, and serial publications.",
  },
  {
    icon: Globe,
    name: "Theses & Dissertations",
    count: "2,000+",
    description:
      "Graduate research theses and dissertations produced by IAS students and deposited from partner institutions.",
  },
  {
    icon: Search,
    name: "Special Collections",
    count: "800+",
    description:
      "Rare books, pamphlets, government publications, and grey literature on African topics not widely available.",
  },
]

const services = [
  "Reference and research assistance",
  "Interlibrary loan services",
  "Digital resource access",
  "Photocopying and scanning",
  "Research consultation for graduate students",
  "Orientation sessions for new users",
]

export default function LibraryPage() {
  return (
    <>
      <PageHeader
        title="IAS Library"
        subtitle="A specialised collection serving Africanist scholarship and research"
      />

      {/* About */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                About the Library
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground text-balance">
                A Leading Africanist Research Library
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The Institute of African Studies Library is one of the foremost
                  specialised Africanist libraries on the continent. Established
                  alongside the Institute in 1961, the library has grown into a
                  vital resource for scholars, students, and researchers from
                  around the world.
                </p>
                <p>
                  The collection spans the full breadth of African Studies,
                  including history, anthropology, sociology, linguistics,
                  political science, philosophy, the arts, and more. The library
                  holds materials in multiple languages and formats, from rare
                  colonial-era publications to contemporary digital resources.
                </p>
                <p>
                  In addition to its physical holdings, the library provides
                  access to major electronic databases and digital collections
                  relevant to African Studies research.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/about.jpg"
                alt="IAS Library interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Holdings
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Our Collections
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="flex gap-5 rounded-lg border border-border bg-background p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <collection.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="mb-1 flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {collection.name}
                    </h3>
                    <span className="text-sm font-bold text-primary">
                      {collection.count}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Hours */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Services */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                What We Offer
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                Services
              </h2>
              <ul className="flex flex-col gap-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours & Location */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
                Visit Us
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                Hours & Location
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Opening Hours
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sunday & Public Holidays: Closed
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Institute of African Studies Building
                    </p>
                    <p className="text-sm text-muted-foreground">
                      University of Ghana, Legon
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ground Floor, East Wing
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Access
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Open to IAS students, faculty, and registered researchers.
                      Visitors may apply for temporary access through the
                      {"Institute's"} administration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
