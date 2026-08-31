import type { Metadata } from "next"
import { BookOpen, FlaskConical, GraduationCap, Landmark, Library, Link2, Mail, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"

export const metadata: Metadata = {
  title: "Prof. Hasiyatu Abubakari | Institute of African Studies",
  description:
    "Profile of Professor Hasiyatu Abubakari, Associate Professor of African Linguistics at the Institute of African Studies, University of Ghana.",
}

const education = [
  "2014–2018 · University of Vienna, Austria — Doctor of Philosophy, African Studies (Languages and Literatures), Summa Cum Laude",
  "2008–2011 · University of Tromsø, Norway — Master of Philosophy, Theoretical Linguistics",
  "2003–2007 · University of Ghana, Legon — Bachelor of Arts, English Language and Linguistics (First Class)",
]

const researchInterests = [
  "Less studied Mabia (Gur) languages and cultures",
  "Syntax",
  "Information Structure",
  "Pragmatics",
  "Anthropological Linguistics",
  "Sociolinguistics",
  "Language and Gender",
  "Language and Media",
  "Onomastics",
  "Folktales",
]

const researchProjects = [
  "Sustainable Environmental Education and Climate Change Activism Through Popular Culture (SEECAP) (2024–2025). PI: Hasiyatu Abubakari; Co-PIs: Dr Edwin Asa Adjei, Dr Abena Kyere, Ms Anuoluwapọ Adéwùnmí Adétọ̀míwá and Ms Vivian Mawuli Gli. A Team Grant funded by BANGA-Africa, University of Ghana.",
  "Sustainable Cultural Education Through Oral Narratives in Rural Africa (2024–2026). Africa UniNet project funded by OeAD Austria. PI: Hasiyatu Abubakari; Co-PIs: Dr Alexander Angsongna (University of Vienna) and Dr Rahaina Tahiru (University for Development Studies).",
  "Promoting Women’s Participation in Social Transformation through Popular Arts in Kusaal-Speaking Communities in Ghana (Jan–Nov 2022). Culture for Sustainable and Inclusive Peace Grant, University of Glasgow.",
  "Documenting the Folktales of Kusaal through Stories and Illustrations (2022–2023). BANGA-Africa Project III Seed Grant.",
  "Female Genital Mutilation, a borrowed culture, among the Kusaas: Origin and its language of insult (2022–2025). Queen Elizabeth Scholars Advanced Scholars West Africa (Concordia University Canada and CEGENSA, UG).",
  "Member, Network “Definiteness Across Domains” — Humboldt-Universität zu Berlin, Universität Potsdam, Ruhr-Universität Bochum (2022–2024).",
]

const publications = [
  "Abubakari, H. (2025). From oral tradition to ecological wisdom: Using folktales for environmental conservation. African Studies, Routledge.",
  "Abubakari, H., & Appah, C. K. I. (2024). Distinguishing Compounds from Phrases in Kusaal. Ghana Journal of Linguistics, 13(2).",
  "Abubakari, H., Sandow, L., & Asitanga, S. A. (2024). Names of seasons as expressions of climatic conditions and agrarian practices. Cogent Arts & Humanities, 11(1).",
  "Abubakari, H., Amankwah, A. S., & Mensah, A. O. (2024). Communication through popular culture: Analyzing a googi performance on early marriage among the Kusaas of Ghana. Language & Communication, Elsevier, 99, 90–106.",
  "Abubakari, H., Amankwah, A. S., & Mensah, A. O. (2024). Kusaal Folktales: Communicative Tools for Preserving Indigenous Cultural Values in Ghanaian Marriages. Folklore, 135(2), 276–299.",
  "Abubakari, H., & Issah, A. S. (2024). Metaphorical Personal Names in Mabia Languages of West Africa. Languages, 9(5), 163.",
  "Abubakari, H., Sandow, L., & Asitanga, S. A. (2024). A structural analysis of personal names in Kusaal. Language Sciences, 104, 101613, Elsevier.",
  "Issah, S., Abubakari, H., Atintono, S., & Atibiri, S. (2023). Exploring Euphemisms as Taboo Avoidance Strategies in the Mabia Languages. Language Matters, 54(2), 42–64, Routledge.",
  "Abubakari, H., Issah, A. S., Owoahene, A. S., Dramani, L. M., & Napari, J. N. (2023). Mabia languages and cultures expressed through personal names. International Journal of Language and Culture, John Benjamins, 1–28.",
  "Abubakari, H. (2023). On the status and function of the particle ń in serial verb constructions in Kusaal. Contemporary Journal of African Studies, 10(1), 1–25.",
  "Abubakari, H., & Issah, A. A. (2023). Nominal classifications in Mabia languages of West Africa. Language Sciences, Elsevier, 95.",
  "Bodomo, A., & Abubakari, H. (2022). Serial Verb Reduplication in the Mabia Languages of West Africa. Legon Journal of the Humanities, 33(2), 29–58.",
  "Abubakari, H. (2022). Phasal Polarity Expressions in Kusaal. Nordic Journal of African Studies, 31(1), 72–101.",
  "Abubakari, H., Assem, S. I., & Amankwah, A. S. (2021). Framing of Covid-19 Safety Protocols in Kusaal Musical Health Communication: Language and Literary Analysis. Language & Communication, Elsevier, 81, 64–80.",
  "Abubakari, H. (2021). Noun Class System of Kusaal. Studies in African Linguistics, 50(1), 116–139.",
  "Abubakari, H. (2020). Topic Constructions in Kusaal and Related Mabia (Gur) of West Africa. Linguistics: An Interdisciplinary Journal of the Language Sciences, Mouton De Gruyter.",
  "Abubakari, H. (2020). Personal Names in Kusaal: A Sociolinguistic Analysis. Language & Communication, Elsevier, 75, 21–35.",
  "Abubakari, H., & Issah, S. A. (2020). The Syntax of Strong and Weak Pronouns in Dagbani and Kusaal. Studia Linguistica, 74(3), 1–29.",
  "Abubakari, H. (2020). Focus Marking in Serial Verb Constructions in Kusaal. In A. Bodomo, H. Abubakari & S. A. Issah (eds.), Handbook of Mabia Languages of West Africa (pp. 35–74). Glienicke, Galda-Verlag.",
  "Bodomo, A., Abubakari, H., & Issah, A. S. (2020). Handbook of the Mabia Languages of West Africa. Glienicke, Galda-Verlag.",
  "Abubakari, H. (2019). The Syntax and Semantics of Relative Clauses in Kusaal. Ghana Journal of Linguistics, 8(2), 27–62.",
  "Abubakari, H. (2019). Contrastive focus particles in Kusaal. In E. Clem, P. Jenks & H. Sande (eds.), Theory and description in African Linguistics (pp. 325–347). Berlin: Language Science Press.",
  "Abubakari, H. (2019). Predicate Cleft Constructions in Kusaal. In J. Essegbey, D. Kallulli & A. Bodomo (eds.), The grammar of verbs and their arguments. Cologne: Rüdiger Köppe Verlag.",
  "Bodomo, A., Abubakari, H., & Che, D. (2018). On Nominalizing the Serial Verb in Mabia Languages. Ghana Journal of Linguistics, 7(2), 1–32.",
]

const undergraduateTeaching = ["UGRC 235 · Proficiency course in Dagbani"]

const postgraduateTeaching = [
  "AFST 640 · Seminar 1 / Academic Writing",
  "AFST 646 · Africa and Language Endangerment",
  "AFST 649 · African Languages in Development Practice",
]

const leadership = [
  "Head, Language, Literature and Drama Unit, Institute of African Studies",
  "Honorary Research Associate, School of Languages and Literatures, Rhodes University, South Africa",
  "Editorial board member of several local and international journals",
  "Fellow, American Council of Learned Societies (AHP: 2019–2020)",
  "Carnegie Corporation of New York Fellow (2023)",
  "Queen Elizabeth Scholar (2023)",
]

const associations = [
  "Association for Contemporary African Linguistics (ACAL: 2016–date)",
  "Linguistics Association of Ghana (LAG: 2014–date)",
  "The West African Linguistic Society (WALS: 2017–date)",
  "Pragmatics Association of Ghana (2018–date)",
  "International Lexical-Functional Grammar Association (ILFGA: 2016–date)",
  "African Studies Association of Africa (2021–date)",
  "University Teachers Association of Ghana (2014–date)",
]

const weblinks = [
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Hasiyatu-Abubakari-2" },
  { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=57216317625" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=D4UBd8UAAAAJ" },
  { label: "Academia", href: "https://ugh.academia.edu/HASIYATUABUBAKARI" },
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

export default function HasiyatuAbubakariPage() {
  const navigation = getProfileNavigation("dr-hasiyatu-abubakari")

  return (
    <>
      <PageHeader title="Prof. Hasiyatu Abubakari" subtitle="Associate Professor of African Linguistics · Institute of African Studies" />
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex aspect-[4/5] items-center justify-center bg-muted text-center text-sm text-muted-foreground">
              Profile photo
            </div>
            <div className="flex flex-col gap-4 p-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Associate Professor</p>
                <p className="mt-1 text-sm text-foreground">Language, Literature and Drama</p>
                <p className="mt-1 text-sm text-muted-foreground">Office: IAS New Site</p>
              </div>
              <a href="mailto:haabubakari@ug.edu.gh" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="size-4" />
                haabubakari@ug.edu.gh
              </a>
              <div className="flex flex-col gap-2 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Weblinks</p>
                {weblinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Link2 className="size-4" />
                    {link.label}
                  </a>
                ))}
              </div>
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
                Hasiyatu Abubakari is an Associate Professor at the Institute of African Studies, University of Ghana, and
                an honorary Research Associate at the School of Languages and Literatures, Rhodes University, South Africa.
                She is the Head of the Language, Literature and Drama Unit. She holds a PhD (Summa Cum Laude) in African
                Studies (Languages and Literatures) from the University of Vienna, Austria, an MPhil in Theoretical
                Linguistics from the University of Tromsø, Norway (2011), and a First Class undergraduate certificate in
                English Language and Linguistics from the University of Ghana, Legon (2007).
              </p>
              <p>
                Her past and ongoing projects focus on the grammars of Mabia languages and cultures; language and gender;
                language and environment; onomastics; folklore; and popular culture. Through songs, docudramas, folktales,
                proverbs and other intangible cultural artifacts, she explores the indigenous cultural knowledge of
                minority ethnic groups and how it can be leveraged to advance the Sustainable Development Goals —
                especially SDG 13 (climate action), SDG 14 (life below water), SDG 4 (quality education) and SDG 5 (gender
                equality and girl-child empowerment).
              </p>
              <p>
                She has published widely in local and international journals and serves on the editorial boards of several
                journals. Hasiyatu is a recipient of several local and international awards, including fellowships from the
                American Council of Learned Societies (AHP: 2019–2020), the Carnegie Corporation of New York (2023), and the
                Queen Elizabeth Scholars programme (2023).
              </p>
            </div>
          </Section>
          <Section id="education" icon={GraduationCap} title="Education">
            <List items={education} />
          </Section>
          <Section id="research" icon={FlaskConical} title="Research">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Research Interests</h3>
                <List items={researchInterests} />
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Research Projects</h3>
                <List items={researchProjects} />
              </div>
            </div>
          </Section>
          <Section id="publications" icon={Library} title="Publications">
            <List items={publications} />
          </Section>
          <Section id="teaching" icon={BookOpen} title="Teaching and Supervision">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Undergraduate</h3>
                <List items={undergraduateTeaching} />
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Postgraduate</h3>
                <List items={postgraduateTeaching} />
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                Supervision: two graduate supervisions ongoing and one graduate supervision completed (2023).
              </p>
            </div>
          </Section>
          <Section id="leadership" icon={Landmark} title="Leadership, Fellowships and Awards">
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
