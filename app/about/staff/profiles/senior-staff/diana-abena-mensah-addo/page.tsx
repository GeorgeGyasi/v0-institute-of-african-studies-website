import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, FlaskConical, GraduationCap, Landmark, Mail, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getSeniorStaffNavigation } from "@/lib/staff-profiles"

export const metadata: Metadata = {
  title: "Diana Abena Mensah-Addo",
  description:
    "Profile of Diana Abena Mensah-Addo, Principal Administrative Assistant at the Institute of African Studies, University of Ghana.",
}

const responsibilities = [
  "Administrative coordination and office management",
  "Records management and correspondence",
  "Support for institute programmes and events",
]
const education = ["Details to be added."]

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string
  icon: typeof BookOpen
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-border py-10 last:border-0">
      <div className="mb-5 flex items-center gap-3">
        <Icon className="size-5 text-primary" aria-hidden="true" />
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function DianaAbenaMensahAddoPage() {
  const navigation = getSeniorStaffNavigation("diana-abena-mensah-addo")
  return (
    <>
      <PageHeader
        title="Diana Abena Mensah-Addo"
        subtitle="Principal Administrative Assistant · Institute of African Studies"
      />
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <Image
              src="/images/staff/diana-abena-mensah-addo.jpg"
              alt="Diana Abena Mensah-Addo"
              width={640}
              height={800}
              className="aspect-[4/5] w-full object-cover"
              priority
            />
            <div className="flex flex-col gap-4 p-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Position</p>
                <p className="mt-1 text-sm text-foreground">Principal Administrative Assistant</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Office</p>
                <p className="mt-1 text-sm text-foreground">IAS New Site</p>
              </div>
              <a
                href="mailto:damensah@ug.edu.gh"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="size-4" />
                damensah@ug.edu.gh
              </a>
            </div>
          </div>
          <nav
            aria-label="Profile sections"
            className="mt-5 hidden rounded-xl border border-border bg-card p-4 lg:block"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#profile" className="text-primary hover:underline">Profile</a>
              <a href="#education" className="text-muted-foreground hover:text-primary">Education</a>
              <a href="#responsibilities" className="text-muted-foreground hover:text-primary">Responsibilities</a>
              <a href="#service" className="text-muted-foreground hover:text-primary">Service</a>
              <a href="#associations" className="text-muted-foreground hover:text-primary">Associations</a>
            </div>
          </nav>
        </aside>
        <article className="min-w-0 rounded-xl border border-border bg-card px-6 md:px-10">
          <Section id="profile" icon={Users} title="Profile">
            <div className="flex flex-col gap-4 text-base leading-7 text-muted-foreground">
              <p>
                Diana Abena Mensah-Addo is a Principal Administrative Assistant at the Institute of African Studies,
                University of Ghana, based at the IAS New Site.
              </p>
              <p>Further biographical details will be added as they become available.</p>
            </div>
          </Section>
          <Section id="education" icon={GraduationCap} title="Education">
            <List items={education} />
          </Section>
          <Section id="responsibilities" icon={FlaskConical} title="Responsibilities">
            <List items={responsibilities} />
          </Section>
          <Section id="service" icon={Landmark} title="Service">
            <p className="text-sm leading-6 text-muted-foreground">
              Service and administrative contributions will be added as they become available.
            </p>
          </Section>
          <Section id="associations" icon={Users} title="Associations">
            <p className="text-sm leading-6 text-muted-foreground">
              Professional associations will be added as they become available.
            </p>
          </Section>
          {navigation && (
            <ProfileNavigation
              previousSlug={navigation.previous.slug}
              nextSlug={navigation.next.slug}
              previousName={navigation.previous.name}
              nextName={navigation.next.name}
              isFirst={navigation.isFirst}
              isLast={navigation.isLast}
              basePath="senior-staff"
            />
          )}
          <div className="border-t border-border py-8">
            <Link href="/about/staff" className="text-sm text-primary hover:underline">
              ← Back to Staff Directory
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
