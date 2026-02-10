import { BookOpen, Users, Globe, Archive } from "lucide-react"

const stats = [
  { icon: BookOpen, label: "Research Publications", value: "2,500+" },
  { icon: Users, label: "Faculty & Researchers", value: "60+" },
  { icon: Globe, label: "International Partners", value: "40+" },
  { icon: Archive, label: "Archival Collections", value: "10,000+" },
]

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Our Mission
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              <span className="text-balance">
                Dedicated to the Study of Africa and Its People
              </span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Institute of African Studies was established in 1961 as a
              research institute of the University of Ghana. Its mission is to
              advance knowledge and understanding of African societies, cultures,
              histories, and contemporary issues through rigorous interdisciplinary
              research, teaching, and public engagement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We serve as a hub for scholars, students, and policymakers seeking
              evidence-based insights into African development, governance, arts,
              languages, and social transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-elevated overflow-hidden p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
