import type { Metadata } from "next"
import { BookOpen, FlaskConical, GraduationCap, Landmark, Library, Mail, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"

export const metadata: Metadata = {
  title: "Dr. Edwin Asa Adjei | Institute of African Studies",
  description: "Profile of Dr. Edwin Asa Adjei, Research Fellow at the Institute of African Studies, University of Ghana.",
}

const education = [
  "Ph.D. African Studies, University of Ghana (dissertation interrogating violence in African young adult fiction)",
]

const research = [
  "African children’s and young adult literature, oral and written",
  "Literary performance among children and young adults",
  "Language and literature",
  "Literature and socialization",
  "Creative arts, literary expressions, performance and development",
]

const publications = [
  "Adjei, E. A., Ntewusu, S. A. and Adomako Ampofo, A. (2024). The Ongoing Tune of the African Genius at the Institute of African Studies, University of Ghana. In Knowing-Unknowing: African Studies at the crossroads. BRILL.",
  "Kyere, A. and Adjei, E. A. (2022). A gendered view of the performance of Christian wedding ceremonies in Pentecostal/Charismatic churches in Accra. In Marriage and Family in Ghana. Woeli Publishing Services.",
  "Adjei, E. A. and Akrofi Ansah, M. (2022). The storytelling tradition at Larteh, Ghana: Implications for language vitality. European Journal of Language and Culture Studies, 1(4).",
  "Adjei, E. A. (2018). Men in the Land of Promise—Immigration and Challenges to Masculinity in M. G. Vassanji’s No New Land. Africology, 12(1), 203–214.",
  "Adomako Ampofo, A., Adjei, E. A. and Brobbey, K. M. (2015). Feminisms and Acculturation around the Globe. International Encyclopedia of the Social & Behavioral Sciences, 2nd edition. Elsevier.",
]

const teaching = [
  "UGRC 233: Our African Heritage through Literature",
  "AFST 608: Topics in African Oral Literature",
  "AFST 611: African Literary Traditions",
  "AFST 612: Trends in African Literature",
  "AFST 721: Special Topics in African Oral Literature",
  "AFST 705: Critical Perspectives on Performance Theories",
  "AFST 724: African Theatre: The Classical and the Popular",
  "AFST 725: African Women Speak",
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

export default function EdwinAsaAdjeiPage() {
  const navigation = getProfileNavigation("dr-edwin-asa-adjei")

  return (
    <>
      <PageHeader title="Dr. Edwin Asa Adjei" subtitle="Research Fellow · Institute of African Studies" />
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex aspect-[4/5] items-center justify-center bg-muted text-center text-sm text-muted-foreground">
              Profile photo
            </div>
            <div className="flex flex-col gap-4 p-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Research Fellow</p>
                <p className="mt-1 text-sm text-foreground">Language, Literature and Drama</p>
              </div>
              <a href="mailto:edaadjei@ug.edu.gh" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="size-4" />
                edaadjei@ug.edu.gh
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
                Edwin Asa Adjei is a Research Fellow at the Institute of African Studies, University of Ghana. He holds a
                PhD in African Studies, with a dissertation interrogating violence in African young adult fiction.
              </p>
              <p>
                His research examines African children’s and young adult literature, oral and written, and literary
                performances among children and young adults as tools for socialization. He is particularly interested in
                how literature and literary performances embody and act upon social constructions across cultures,
                especially in Africa.
              </p>
            </div>
          </Section>
          <Section id="education" icon={GraduationCap} title="Education">
            <List items={education} />
          </Section>
          <Section id="research" icon={FlaskConical} title="Research Areas">
            <List items={research} />
          </Section>
          <Section id="publications" icon={Library} title="Recent Publications">
            <List items={publications} />
          </Section>
          <Section id="teaching" icon={BookOpen} title="Teaching and Supervision">
            <div className="flex flex-col gap-5">
              <List items={teaching} />
              <p className="text-sm leading-6 text-muted-foreground">
                Dr. Adjei supervises 4 PhD students and 2 MA/MPhil students.
              </p>
            </div>
          </Section>
          <Section id="leadership" icon={Landmark} title="Board Memberships and Committees">
            <p className="text-sm leading-6 text-muted-foreground">
              Board memberships and committee roles will be added as they become available.
            </p>
          </Section>
          <Section id="associations" icon={Users} title="Associations">
            <p className="text-sm leading-6 text-muted-foreground">
              Professional association memberships will be added as they become available.
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
            />
          )}
        </article>
      </main>
    </>
  )
}
