import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Users, BookOpen } from "lucide-react"

const partnerships = [
  {
    name: "International Collaborations",
    description: "Strategic partnerships with leading universities and research institutions across Africa and globally",
    icon: Globe,
  },
  {
    name: "Community Engagement",
    description: "Strengthening connections with local communities through outreach and collaborative projects",
    icon: Users,
  },
  {
    name: "Knowledge Exchange",
    description: "Facilitating academic exchange and shared research initiatives with partner institutions",
    icon: BookOpen,
  },
]

export function PartnershipSection() {
  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Collaboration
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Partnership Programs
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              The Institute of African Studies actively develops strategic partnerships to advance
              African scholarship and foster collaborative research. Our partnership programs create
              opportunities for institutions, scholars, and organizations to work together on
              significant research initiatives and cultural preservation efforts.
            </p>

            <div className="space-y-6">
              {partnerships.map((partner) => {
                const Icon = partner.icon
                return (
                  <div key={partner.name} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {partner.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link
              href="/partnerships"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Explore Partnerships
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/partnership.jpg"
              alt="Partnership collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
