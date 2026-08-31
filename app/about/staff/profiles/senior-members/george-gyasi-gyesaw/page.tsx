import type { Metadata } from "next"
import Image from "next/image"
import { BookOpen, ExternalLink, FlaskConical, GraduationCap, Landmark, Mail, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"

export const metadata: Metadata = {
  title: "George Gyasi Gyesaw",
  description:
    "Profile of George Gyasi Gyesaw, Archivist at the J. H. Kwabena Nketia Archives, Institute of African Studies, University of Ghana.",
}

const education = [
  "B.A. Information Studies, Geography, and Human Resource Management — University of Ghana",
  "PgDip, Management Information Systems (MIS) — Ghana Institute of Management and Public Administration (GIMPA)",
  "MSc. Information Technology (IT) — Kwame Nkrumah University of Science and Technology (KNUST)",
]

const projects: [string, string][] = [
  ["Nana Kobina Nketsia IV Transatlantic Project", "2024. UNESCO Archives, Paris."],
  ["Gerald Annan Forson Photo Project (GAF)", "2023."],
  ["Heritage Photo Lab", "2020–2021."],
  ["UMOJA: Africa Must Unite Now! — Documentary", "2020–2021."],
  ["Immortalizing Ghanaian Musicians Project", "2018."],
  ["Field Recording of Nana Afia Kobi Serwaa Ampem II funeral rites", "2017."],
  ["Institute of African Studies Paper Project", "2015."],
  ["Making African Academic Resources Accessible (MAARA)", "2014. Visit: www.apexghana.org"],
  ["Institute of African Studies Photo Identification Project", "2013."],
]

const publications = [
  "Gyesaw, G. G. (2024). From Film to Files: Impact of Gerald Annan Photographic Collection. Ghana Library Journal, 36(1).",
]

const teaching = ["Guest Lecture: American University of Central Asia (2024)."]

const leadership = ["Secretary, Broadcast Archives Section — International Association of Sound and Audiovisual Archives (IASA)."]

const associations = [
  "Member: Ghana Studies Association",
  "Member: International Association of Sound and Audiovisual Archives (IASA)",
  "Secretary: Broadcast Archives Section, International Association of Sound and Audiovisual Archives (IASA)",
]

function Section({ id, icon: Icon, title, children }: { id: string; icon: typeof BookOpen; title: string; children: React.ReactNode }) {
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

export default function GeorgeGyasiGyesawPage() {
  const navigation = getProfileNavigation("george-gyasi-gyesaw")
  return (
    <>
      <PageHeader title="George Gyasi Gyesaw" subtitle="Archivist · J. H. Kwabena Nketia Archives, Institute of African Studies" />
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <Image src="/images/george-gyesaw.jpg" alt="George Gyasi Gyesaw" width={640} height={800} className="aspect-[4/5] w-full object-cover" priority />
            <div className="flex flex-col gap-4 p-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Position</p>
                <p className="mt-1 text-sm text-foreground">Archivist</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Office</p>
                <p className="mt-1 text-sm text-foreground">IAS Old Site</p>
              </div>
              <a href="mailto:ggyesaw@ug.edu.gh" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="size-4" />ggyesaw@ug.edu.gh
              </a>
            </div>
          </div>
          <nav aria-label="Profile sections" className="mt-5 hidden rounded-xl border border-border bg-card p-4 lg:block">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#profile" className="text-primary hover:underline">Profile</a>
              <a href="#education" className="text-muted-foreground hover:text-primary">Education</a>
              <a href="#research" className="text-muted-foreground hover:text-primary">Research</a>
              <a href="#publications" className="text-muted-foreground hover:text-primary">Publications</a>
              <a href="#teaching" className="text-muted-foreground hover:text-primary">Teaching</a>
              <a href="#leadership" className="text-muted-foreground hover:text-primary">Leadership</a>
              <a href="#associations" className="text-muted-foreground hover:text-primary">Associations</a>
            </div>
          </nav>
        </aside>
        <article className="min-w-0 rounded-xl border border-border bg-card px-6 md:px-10">
          <Section id="profile" icon={Users} title="Profile">
            <div className="flex flex-col gap-4 text-base leading-7 text-muted-foreground">
              <p>
                George Gyasi Gyesaw is the Archivist overseeing the management and operations of the J. H. Kwabena Nketia
                Archives at the Institute of African Studies (IAS), University of Ghana.
              </p>
              <p>
                Mr. Gyesaw has significant experience engaging with archives both locally and internationally, focusing on
                archival support and learning best practices. He was awarded the Trans National Access Fellowship to conduct
                research at the University of Palermo, Italy.
              </p>
              <p>
                His expertise includes presenting papers at conferences and symposiums on archiving in digital humanities and
                the application of Artificial Intelligence (AI) in archival science.
              </p>
            </div>
          </Section>
          <Section id="education" icon={GraduationCap} title="Education">
            <List items={education} />
          </Section>
          <Section id="research" icon={FlaskConical} title="Research">
            <p className="mb-6 text-sm leading-6 text-muted-foreground">
              Archival research and projects led or supported at the Institute of African Studies and beyond, demonstrating
              practical expertise in preserving and digitizing cultural heritage.
            </p>
            <div className="flex flex-col gap-5">
              {projects.map(([title, desc]) => (
                <div key={title} className="border-l-2 border-primary/30 pl-4">
                  <p className="font-medium text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section id="publications" icon={BookOpen} title="Publications">
            <List items={publications} />
            <a
              href="https://www.ajol.info/index.php/glj/article/view/303702"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="size-4" />View publication
            </a>
          </Section>
          <Section id="teaching" icon={GraduationCap} title="Teaching">
            <List items={teaching} />
          </Section>
          <Section id="leadership" icon={Landmark} title="Leadership">
            <List items={leadership} />
          </Section>
          <Section id="associations" icon={Users} title="Associations">
            <List items={associations} />
          </Section>
          {navigation && (
            <ProfileNavigation
              previousSlug={navigation.previous.slug}
              nextSlug={navigation.next.slug}
              previousName={navigation.previous.name}
              nextName={navigation.next.name}
              isFirst={navigation.isFirst}
              isLast={navigation.isLast}
            />
          )}
        </article>
      </main>
    </>
  )
}
