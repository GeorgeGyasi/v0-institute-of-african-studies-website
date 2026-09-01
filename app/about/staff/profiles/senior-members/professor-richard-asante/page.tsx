import type { Metadata } from "next"
import Image from "next/image"
import { Mail, MapPin, BookOpen, GraduationCap, FlaskConical, Library, Users, Landmark, Award, ExternalLink } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"

export const metadata: Metadata = {
  title: "Professor Richard Asante",
  description: "Profile of Professor Richard Asante, Associate Professor of Comparative Politics at the Institute of African Studies, University of Ghana.",
}

const researchAreas = [
  "Democratisation and comparative politics",
  "Africa-China relations",
  "Natural resource governance and communal conflicts",
  "International peacekeeping",
  "Domestic and regional security",
]

const education = [
  "B.A. in Political Science, University of Ghana",
  "M.Phil. in Political Science, University of Ghana",
  "Ph.D. in Political Science, Harvard University–University of Ghana split-Ph.D. programme",
  "Special Student, Department of Government, Harvard University (2008/2009)",
]

const projects = [
  ["Africa-China Relations and Development", "Research on the political, environmental, and security implications of Africa-China relations."],
  ["Democracy, Peacekeeping and Security", "Research and policy engagement on democratic backsliding, electoral politics, power sharing, international peacekeeping, and terrorism in West Africa."],
  ["Varieties of Democracy (V-Dem)", "Regional Manager for West Africa of the V-Dem Research Project at the University of Gothenburg, Sweden."],
]

const boards = [
  "Regional Manager, West Africa, Varieties of Democracy (V-Dem) Research Project, University of Gothenburg",
  "Afrobarometer Fellow (since 2010)",
  "Catalyst Fellow, Centre of African Studies, University of Edinburgh",
  "Visiting Scholar, Oxford University, New School University, and University of Cape Town",
]

function Section({ id, icon: Icon, title, children }: { id: string; icon: typeof BookOpen; title: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-28 border-b border-border py-10 last:border-0"><div className="mb-5 flex items-center gap-3"><Icon className="size-5 text-primary" aria-hidden="true" /><h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2></div>{children}</section>
}

function List({ items }: { items: string[] }) {
  return <ul className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>
}

export default function ProfessorAsantePage() {
  const navigation = getProfileNavigation("professor-richard-asante")
  return <>
    <PageHeader title="Professor Richard Asante" subtitle="Associate Professor · Comparative Politics" />
    <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <div className="overflow-hidden rounded-xl border border-border bg-card"><Image src="/images/professor-asante.jpg" alt="Professor Richard Asante" width={640} height={800} className="aspect-[4/5] w-full object-cover" priority /><div className="flex flex-col gap-4 p-5"><div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Associate Professor</p><p className="mt-1 text-sm text-foreground">Institute of African Studies</p></div><a href="mailto:rasante@ug.edu.gh" className="flex items-center gap-2 text-sm text-primary hover:underline"><Mail className="size-4" />rasante@ug.edu.gh</a><p className="flex gap-2 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0" />University of Ghana, Legon</p></div></div>
        <nav aria-label="Profile sections" className="mt-5 hidden rounded-xl border border-border bg-card p-4 lg:block"><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p><div className="flex flex-col gap-2 text-sm"><a href="#profile" className="text-primary hover:underline">Profile</a><a href="#education" className="text-muted-foreground hover:text-primary">Education</a><a href="#research" className="text-muted-foreground hover:text-primary">Research</a><a href="#publications" className="text-muted-foreground hover:text-primary">Publications</a><a href="#teaching" className="text-muted-foreground hover:text-primary">Teaching</a><a href="#leadership" className="text-muted-foreground hover:text-primary">Leadership</a><a href="#associations" className="text-muted-foreground hover:text-primary">Associations</a></div></nav>
      </aside>
      <article className="min-w-0 rounded-xl border border-border bg-card px-6 md:px-10">
        <Section id="profile" icon={Users} title="Profile"><div className="flex flex-col gap-4 text-base leading-7 text-muted-foreground"><p>Richard Asante is an Associate Professor of Comparative Politics at the University of Ghana, Legon. His research focuses on the intersection between politics and development, with special focus on democratisation, the dynamics of Africa-China relations, natural resource governance and communal conflicts, and international peacekeeping and domestic and regional security.</p><p>He has held Visiting Scholar positions at Oxford University, New School University, and the University of Cape Town. He has also been a visiting professor at Pomona College and received the 2012/2013 Mellon Postdoctoral Fellowship at Northwestern University.</p><p>Asante has contributed to post-conference policy briefings in Washington, D.C. on electoral politics, power sharing, Africa-China relations, democratic backsliding, and terrorism in West Africa.</p></div></Section>
        <Section id="education" icon={GraduationCap} title="Education"><List items={education} /></Section>
        <Section id="research" icon={FlaskConical} title="Research Areas"><List items={researchAreas} /><div className="mt-8 flex flex-col gap-5"><h3 className="text-lg font-semibold text-foreground">Current Research and Publication Projects</h3>{projects.map(([title, description]) => <div key={title} className="rounded-lg border border-border p-4"><h4 className="font-semibold text-foreground">{title}</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></div>)}</div></Section>
        <Section id="publications" icon={Library} title="Recent Publications"><p className="text-sm leading-6 text-muted-foreground">Professor Asante’s publications address comparative politics, democratisation, Africa-China relations, resource governance, conflict, peacekeeping, and security. For current and future publications, visit <a className="inline-flex items-center gap-1 text-primary hover:underline" href="https://scholar.google.com/" target="_blank" rel="noreferrer">Google Scholar <ExternalLink className="size-3" /></a>.</p></Section>
        <Section id="teaching" icon={BookOpen} title="Teaching and Supervision"><p className="text-sm leading-6 text-muted-foreground">Professor Asante has taught Comparative Politics of Africa, Peace and Security in Africa, and Comparative Politics and Development in Africa. He is committed to developing the next generation of African scholars through teaching and supervision.</p></Section>
        <Section id="leadership" icon={Landmark} title="Leadership"><List items={boards} /></Section>
        <Section id="associations" icon={Users} title="Associations"><p className="text-sm leading-6 text-muted-foreground">Not available.</p></Section>
        {navigation && <ProfileNavigation previousSlug={navigation.previous.slug} nextSlug={navigation.next.slug} previousName={navigation.previous.name} nextName={navigation.next.name} isFirst={navigation.isFirst} isLast={navigation.isLast} />}
      </article>
    </main>
  </>
}
