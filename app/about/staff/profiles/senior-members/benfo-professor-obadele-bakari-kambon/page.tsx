import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, BookOpen, GraduationCap, FlaskConical, Library, Users, Landmark, Award, ExternalLink } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"

export const metadata: Metadata = {
  title: "Ɔbenfo (Professor) Ọbádélé Bakari Kambon",
  description: "Profile of Ɔbenfo (Professor) Ọbádélé Bakari Kambon, Associate Professor at the Institute of African Studies, University of Ghana.",
}

const researchAreas = [
  "sbAyt nt Kmtyw ‘Studies of Black People’ as a discipline",
  "Personhood and Multiple Selves in Kmtyw ‘Black People’ Thought",
  "Restoration of mAat ‘Maat’, identity, and the restoration of Kmt",
  "Abibitumi Architecture and Kmtyw epistemologies",
  "Language, semantics, and Kmtyw knowledge systems",
  "Historical linguistics across Classical and contemporary Abibfoɔ languages",
  "Civilizational connections between Kmt and other Kmtyw civilizations",
  "Abibifahodie ‘Black Liberation’ and Abibitumi ‘Black Power’",
]

const education = [
  "PhD Linguistics, University of Ghana, Legon, Accra (2009–2012). Dissertation: Serial Verb Nominalization in Akan. Vice-Chancellor’s Award for Outstanding Doctoral Dissertation in the Humanities.",
  "MA Linguistics, University of Wisconsin–Madison (2002–2005).",
  "MA African Languages and Literature, minor in Linguistics, University of Wisconsin–Madison (2002–2005). Thesis: Recurrent Sound Correspondences of Akan and Yoruba.",
  "BA African American Studies, Magna Cum Laude, Morehouse College (1997–2002).",
]

const projects = [
  ["Personhood and the Concept of Multiple Selves in Kmtyw Thought", "Investigates Kmtyw, Akan, Yorùbá, and related conceptions of personhood and the multiplicity of selves."],
  ["Classical Kmt, Ma’at, and the Restoration of Black Identity", "Examines Kmt(yw) self-conceptions, resistance to Eurasian incursions, and Ma’at as a cosmological and sociopolitical principle."],
  ["Abibitumi Architecture", "Develops Kmtyw-centered institutional and epistemological infrastructure through digital and physical initiatives."],
  ["Language, Semantics, and Kmtyw Knowledge Systems", "Studies serial verb constructions, semantics, numerals, and body-part expressions across Black languages."],
  ["Contemporary Challenges: Economic Warfare, Media, and Cultural Survival", "Develops critical responses to economic warfare, media narratives, and cultural survival grounded in Kmtyw epistemologies."],
]

const publications = [
  "Kambon, Ọ. (2025). A Comparative Study of Women’s Statuary in societies of Kmt(yw) ‘Black People’ vs. those of non-Black ꜥꜣmw ‘eurasians’. Journal of Indigenous and Shamanic Studies, 6(1).",
  "Kambon, Ọ. (2025). #GandhiMustFall, #AugustusMustFall, Temporal Reality, Ma’at and srwḏ tꜢ n Kmt. In Language and Race. Routledge.",
  "Aketema, J., & Kambon, Ọ. (2023). Mꜣꜥt ‘Maat’, Death and the Afterlife in Traditional Afrika. Journal of Religions in Africa.",
  "Kambon, Ọ., & Songsore, L. (2022). Combating cultural imperialism & cultural misorientation to preserve Kmtyw intangible cultural heritage. Legon Journal of the Humanities, 33(1), 114–137.",
  "Osam, E. K., & Kambon, Ọ. (Eds.). (2023). Aspects of Akan Verbal Semantics. Ghana Journal of Linguistics, Special Issue.",
  "Kambon, Ọ. (2023). Semantic Integration as Emergence in Akan Serial Verb Constructions and Nominalisation.",
  "Appah, C., Duah, R., & Kambon, Ọ. (2023). Cardinal numerals in Akan: A Construction Morphology Account. Ghana Journal of Linguistics, 12(1), 48–72.",
  "Kambon, Ọ., & Songsore, L. (2021). A Cross-linguistic Study of Body Part Expressions in Classical and Contemporary Kmtyw Languages. Ghana Journal of Linguistics, 10(1), 150–176.",
  "Kambon, Ọ., & Songsore, L. (2021). Fiction vs. Evidence: A Critical Review of Ataa Ayi Kwei Armah’s Wat Nt Shemsw. Journal of African and Asian Studies, 20(1–2), 124–153.",
  "Aketema, J., Kambon, Ọ., & Agyemang, B. K. (2025). The Problematics of Intellectualising Indigenous Languages and People. In Resuscitation of African Languages. Springer Nature/Palgrave.",
]

const teaching = [
  "AFST 645: The Writing System of mdw nTr",
  "AFST 638: Foundations of African Thought",
  "AFST 640: Seminar I: Academic Writing",
  "AFST 648: Readings in Ancient Egyptian Hieroglyphs",
  "UGRC 220: Introduction to African Studies",
  "UGRC 235–238: Introduction to African Languages",
  "UGRC 238: Introductory Conversational Akan (Twi)",
  "ENG 314: Introduction to African Literature",
]

const boards = [
  "University of Ghana Academic Board — Member (2021–Present)",
  "College of Humanities Academic Board — Member (2021–Present)",
  "Pan African Heritage Museum International Board of Trustees — Trustee (2021–Present)",
  "Tema Royal School Board of Directors — Member (2020–Present)",
  "Abibifahodie Adesuabea Board of Directors — Co-Director (2016–2020)",
  "African Studies Association of Africa Board of Directors — Secretary (2015–2020)",
  "Head of Section and Research Coordinator, Language, Literature and Drama (2018–2023)",
]

const associations = [
  "Universal Negro Improvement Association (UNIA) — Ambassador (2024–Present)",
  "Association for the Study of Classical African Civilizations (ASCAC) (2023–Present)",
  "African Studies Association of Africa (2014–Present)",
  "Linguistics Association of Ghana (2011–Present)",
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
  return <ul className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>
}

export default function ProfessorKambonPage() {
  const navigation = getProfileNavigation("benfo-professor-obadele-bakari-kambon")
  return (
    <>
      <PageHeader title="Ɔbenfo (Professor) Ọbádélé Bakari Kambon" subtitle="Associate Professor · Language, Literature, and Drama Section" />
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <Image src="/images/obadele-bakari-kambon.jpg" alt="Ɔbenfo (Professor) Ọbádélé Bakari Kambon" width={640} height={800} className="aspect-[4/5] w-full object-cover" priority />
            <div className="flex flex-col gap-4 p-5">
              <div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Associate Professor</p><p className="mt-1 text-sm text-foreground">Institute of African Studies</p></div>
              <a href="mailto:obkambon@ug.edu.gh" className="flex items-center gap-2 text-sm text-primary hover:underline"><Mail className="size-4" />obkambon@ug.edu.gh</a>
              <p className="flex gap-2 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0" />Room 224, Kwame Nkrumah Complex</p>
            </div>
          </div>
          <nav aria-label="Profile sections" className="mt-5 hidden rounded-xl border border-border bg-card p-4 lg:block">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>
            <div className="flex flex-col gap-2 text-sm"><a href="#profile" className="text-primary hover:underline">Profile</a><a href="#education" className="text-muted-foreground hover:text-primary">Education</a><a href="#research" className="text-muted-foreground hover:text-primary">Research</a><a href="#publications" className="text-muted-foreground hover:text-primary">Publications</a><a href="#teaching" className="text-muted-foreground hover:text-primary">Teaching</a><a href="#leadership" className="text-muted-foreground hover:text-primary">Leadership</a><a href="#associations" className="text-muted-foreground hover:text-primary">Associations</a></div>
          </nav>
        </aside>
        <article className="min-w-0 rounded-xl border border-border bg-card px-6 md:px-10">
          <Section id="profile" icon={Users} title="Profile"><div className="flex flex-col gap-4 text-base leading-7 text-muted-foreground"><p>Ɔbenfo (Professor) Ọbádélé Bakari Kambon, Nana Kwame Pɛbi Datɛ I, Ban mu Kyidɔmhene, is Associate Professor in the Language, Literature, and Drama Section of the Institute of African Studies, University of Ghana.</p><p>His research centers on the philosophical, linguistic, historical, and cultural foundations of Kmtyw ‘Black People’s’ civilizations, with particular emphasis on Classical Kmt, continuities across space and time, Abibitumi ‘Black Power’, Abibifahodie ‘Black Liberation’, and the restoration of mAat.</p><p>His scholarly work spans serial verb construction nominalization, Akan verbal semantics, historical linguistics, onomastics, mdw nTr, Classical Kmt(yw) thought, body-part expressions across Black languages, Abibitumi Architecture, sbAyt nt Kmtyw, and contemporary struggles for Abibifahodie.</p></div></Section>
          <Section id="education" icon={GraduationCap} title="Education"><List items={education} /></Section>
          <Section id="research" icon={FlaskConical} title="Research Areas"><List items={researchAreas} /><div className="mt-8 flex flex-col gap-5"><h3 className="text-lg font-semibold text-foreground">Current Research and Publication Projects</h3>{projects.map(([title, description]) => <div key={title} className="rounded-lg border border-border p-4"><h4 className="font-semibold text-foreground">{title}</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></div>)}</div></Section>
          <Section id="publications" icon={Library} title="Recent Publications"><p className="mb-5 text-sm leading-6 text-muted-foreground">Selected major publications are listed below. For current and future publications, visit <a className="inline-flex items-center gap-1 text-primary hover:underline" href="https://scholar.google.com/" target="_blank" rel="noreferrer">Google Scholar <ExternalLink className="size-3" /></a>.</p><List items={publications} /></Section>
          <Section id="teaching" icon={BookOpen} title="Teaching and Supervision"><p className="mb-4 text-sm leading-6 text-muted-foreground">Professor Kambon teaches African languages, African thought, African literature, academic writing, and the writing system of mdw nTr.</p><List items={teaching} /></Section>
          <Section id="leadership" icon={Landmark} title="Board Memberships and Committees"><List items={boards} /><h3 className="mb-3 mt-8 text-lg font-semibold text-foreground">Editorial Board Memberships</h3><List items={["Editor-in-Chief, Ghana Journal of Linguistics (2016–2023)", "Editorial Committee, Ghana Journal of Linguistics (2014–Present)", "Institute of African Studies Newsletter Editor (2015–2016)"]} /></Section>
          <Section id="associations" icon={Award} title="Professional and Civil Society Associations"><List items={associations} /></Section>
          {navigation && <ProfileNavigation previousSlug={navigation.previous.slug} nextSlug={navigation.next.slug} previousName={navigation.previous.name} nextName={navigation.next.name} isFirst={navigation.isFirst} isLast={navigation.isLast} />}
          <div className="border-t border-border py-8"><Link href="/about/staff" className="text-sm text-primary hover:underline">← Back to Staff Directory</Link></div>
        </article>
      </main>
    </>
  )
}
