import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Globe, ArrowLeft } from "lucide-react"

interface StaffProfileProps {
  name: string
  role: string
  specialty: string
  email: string
  phone?: string
  photo: string
  bio: string
  researchAreas: string[]
  publications: Array<{ title: string; year: string }>
  education: Array<{ degree: string; institution: string; year: string }>
  awards?: string[]
  office?: string
  officeHours?: string
  categorySlug: string
}

export function StaffProfileDetail({
  name,
  role,
  specialty,
  email,
  phone,
  photo,
  bio,
  researchAreas,
  publications,
  education,
  awards,
  office,
  officeHours,
  categorySlug,
}: StaffProfileProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            href="/about/staff"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Staff Directory
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Photo & Quick Info */}
          <div className="lg:col-span-1">
            <div className="card-elevated overflow-hidden">
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Quick Info Card */}
              <div className="p-6">
                <h1 className="mb-1 font-serif text-2xl font-bold text-foreground">
                  {name}
                </h1>
                <p className="mb-4 text-sm font-semibold text-secondary">{role}</p>

                {/* Contact Info */}
                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-1 text-primary/60 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm text-primary hover:underline break-all"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  {phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 mt-1 text-primary/60 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-muted-foreground">Phone</p>
                        <a href={`tel:${phone}`} className="text-sm text-primary hover:underline">
                          {phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {office && (
                    <div className="flex items-start gap-3">
                      <Globe className="h-4 w-4 mt-1 text-primary/60 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-muted-foreground">Office</p>
                        <p className="text-sm text-foreground">{office}</p>
                      </div>
                    </div>
                  )}

                  {officeHours && (
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Office Hours</p>
                      <p className="text-sm text-foreground">{officeHours}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Specialty Section */}
            <section>
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground">Specialty</h2>
              <p className="text-sm text-secondary font-semibold italic">{specialty}</p>
            </section>

            {/* Biography Section */}
            <section>
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground">Biography</h2>
              <p className="leading-relaxed text-muted-foreground text-sm">{bio}</p>
            </section>

            {/* Research Areas */}
            <section>
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground">Research Areas</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {researchAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Education */}
            {education.length > 0 && (
              <section>
                <h2 className="mb-4 font-serif text-xl font-bold text-foreground">Education</h2>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="border-l-2 border-secondary/30 pl-4">
                      <p className="font-semibold text-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-xs text-secondary font-medium">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Awards */}
            {awards && awards.length > 0 && (
              <section>
                <h2 className="mb-4 font-serif text-xl font-bold text-foreground">Awards & Recognition</h2>
                <ul className="space-y-2">
                  {awards.map((award, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary font-bold">•</span>
                      <span className="text-foreground">{award}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Publications */}
            {publications.length > 0 && (
              <section>
                <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
                  Recent Publications
                </h2>
                <div className="space-y-3">
                  {publications.slice(0, 8).map((pub, idx) => (
                    <div key={idx} className="card-flat p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">
                        {pub.title}
                      </p>
                      <p className="text-xs text-secondary">{pub.year}</p>
                    </div>
                  ))}
                  {publications.length > 8 && (
                    <p className="text-xs text-muted-foreground italic pt-2">
                      +{publications.length - 8} more publications
                    </p>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
