import type { Metadata } from "next"
import Image from "next/image"
import { BookOpen, FlaskConical, GraduationCap, Landmark, Mail, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ProfileNavigation } from "@/components/profile-navigation"
import { getProfileNavigation } from "@/lib/staff-profiles"

export const metadata: Metadata = {
  title: "Dr. Moses Nii-Dortey",
  description:
    "Profile of Dr. Moses Nii-Dortey, ethnomusicologist, Senior Research Fellow and Coordinator of the Music & Dance Section at the Institute of African Studies, University of Ghana.",
}

const research = [
  "Ethnomusicology",
  "Folk opera in Ghana",
  "Traditional festivals as integrated performances",
  "African popular music",
  "The Ghana National Symphony Orchestra",
  "Pre-tertiary music education in Ghana",
  "Applied ethnomusicology and heritage safeguarding",
]

const education = ["PhD in African Studies"]

const leadership = [
  "Coordinator, Music & Dance Section, Institute of African Studies, University of Ghana",
  "African Presidential Fellowship, University of Michigan, Ann Arbor (2009)",
  "African Humanities Programme Fellowship (2011–2012), in residence at the University of Dar es Salaam, Tanzania",
  "Member and joint editor, Mellon-funded Mapping Africa's Musical Identities research project (six African universities)",
]

const publications = [
  "Nii-Dortey, M. & Akwetteh, N. (2024). \u201CThe national symphony orchestra of Ghana plays Ghanaian classics: Negotiating multiple identities through highlife music\u201D. Popular Music. Cambridge University Press.",
  "Nii-Dortey, M. & Akwetteh, L. (2022). \u2018Reaping the Harvest of Her Own Seed\u2019: Afro-Americanisms in Ghanaian Popular Musics. In F. Palacios (Ed.), Understanding America: the essential contribution of Afro-American music to the sociocultural meaning of the continent. Pontificia Universidad Cat\u00F3lica del Ecuador.",
  "Nii-Dortey, M. & Nanbigne, E. (2018). The life, works and worries of a genius: A biography of Saka Acquaye. In M. Akrofi Ansah & E. Sutherland-Addy (Eds.), Building the nation: seven notable Ghanaians. Accra: University of Ghana, Legon / Digibooks Ghana Ltd.",
  "Nii-Dortey, M. (2017). Spirit possession in traditional ritual dramas: The Informed Audience Factor. In A. Awedoba, J. Gordon, E. Sutherland-Addy & A. Adomako-Ampofo (Eds.), Revisiting African Studies in a Globalized World. Accra: Smartline & Institute of African Studies.",
  "Ntewusu, S., Nanbigne, E. & Nii-Dortey, M. (2016). Chief Braimah I: A Yoruba chief, Muslim leader, Trader and Mediator in Colonial Accra. In S. Tonah & A. Anamzoya (Eds.), Managing Chieftaincy and Ethnic Conflicts in Ghana (pp. 123\u2013138). Accra: Woeli Publishing Services.",
  "Nii-Dortey, M. (2015). Folk opera and the cultural politics of post-independence Ghana: Saka Acquaye\u2019s The Lost Fishermen. In D. Peterson, K. Gavua & C. Rassool (Eds.), The politics of heritage in Africa: Economics, histories, and infrastructures. Cambridge University Press.",
  "Nii-Dortey, M. (2013). The Africanization of western art music in Ghana: The case of the Ghana National Symphony Orchestra and its music. In S. Owoahene-Acheampong (Ed.), African Studies and Knowledge Production. Legon-Accra: Sub-Saharan Publishers for the University of Ghana.",
  "Nii-Dortey, M. (2020). Liveness, multifocality, eavesdropping in ethnomusicological fieldwork research at Ghanaian festivals and royal funerals. African Music: Journal of the Library of African Music, 11(2), 102\u2013118. DOI: 10.21504/amj.v11i2.2316.",
  "Nii-Dortey, M. & Nanbigne, E. (2020). Tabooing Insults: Why the Ambivalence. Journal of Philosophy and Culture, 8(1), 1\u201311. DOI: 10.5897/JPC2019.0039.",
  "Nii-Dortey, M. & Arhine, A. (2019). Disparate trajectories in pre-tertiary music education in Ghana: Implication for holistic education. Research & Issues in Music Education (RIME), 15(1), Art. 7. JMU Scholarly Commons.",
  "Nii-Dortey, M. (2012). Historical and Cultural context of folk opera development in Ghana: Saka Acquaye\u2019s \u2018The Lost Fishermen\u2019. Research Review, 27(2), 25\u201358. Accra: Institute of African Studies, University of Ghana.",
  "Nii-Dortey, M. & Arhine, A. (2010). The performing arts and the post-colonial Ghanaian experience: The Ghana National Symphony Orchestra in perspective. Research Review, 26(1), 37\u201360. Accra: Institute of African Studies.",
  "Nii-Dortey, M. (2020). Finding the Lost Fishermen: A study in recovery, performance and preservation. In C. Doherty (Ed.), Arts Research Africa Conference 2020 (pp. 68\u201377). Johannesburg: Wits School of Arts, University of the Witwatersrand. DOI: 10.17605/OSF.IO/P4WKT.",
  "Ampofo, A. A., with Alhassan, O., Ankrah, F., Atobrah, D. & Dortey, M. (2007). Examining the Sexual Exploitation of Children on the Streets of Accra. Accra: UNICEF.",
  "Amoah-Labi, K. & Nii-Dortey, M. (2007). Africa and the Diaspora (Course module). Legon Centre for Distance Education, Institute of Adult Education, University of Ghana, Legon.",
]

const creativeWorks = [
  "(2021) Reminisces of the Wulomei \u2014 a documentary on the famous Wulomei Band directed by Saka Acquaye & Nii Tei Ashitey. Produced by Kwame Crenstil.",
  "(2023) Adaptation of \u2018The Lost Fishermen\u2019 \u2014 a short film. Executive Producer: Moses Nii-Dortey; Directed/Produced by Kwame Crenstil.",
  "A composite script of The Lost Fishermen folk opera (music score and text); songs recovered through field research and transcribed by Moses Nii-Dortey.",
  "DVD of The Lost Fishermen performed at the National Theatre (2007) and Alliance Fran\u00E7aise, Accra (2011) by the Accra Kushite Company. Music Director: M. Nii-Dortey; Director of Play: Addoquaye Moffat; Choreography: George Djikunu.",
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

function OrderedList({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-col gap-4 text-sm leading-6 text-muted-foreground">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3">
          <span className="shrink-0 font-semibold text-primary">{index + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  )
}

export default function MosesNiiDorteyPage() {
  const navigation = getProfileNavigation("dr-nii-dortey")
  return (
    <>
      <PageHeader title="Dr. Moses Nii-Dortey" subtitle="Senior Research Fellow · Coordinator, Music & Dance Section" />
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <Image src="/images/dr-nii-dortey.jpg" alt="Dr. Moses Nii-Dortey" width={640} height={800} className="aspect-[4/5] w-full object-cover" priority />
            <div className="flex flex-col gap-4 p-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Position</p>
                <p className="mt-1 text-sm text-foreground">Senior Research Fellow</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Section</p>
                <p className="mt-1 text-sm text-foreground">Music & Dance</p>
              </div>
              <a href="mailto:mndortey@ug.edu.gh" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="size-4" />
                mndortey@ug.edu.gh
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
              <a href="#creative-works" className="text-muted-foreground hover:text-primary">Creative Works</a>
              <a href="#leadership" className="text-muted-foreground hover:text-primary">Leadership</a>
            </div>
          </nav>
        </aside>
        <article className="min-w-0 rounded-xl border border-border bg-card px-6 md:px-10">
          <Section id="profile" icon={Users} title="Profile">
            <div className="flex flex-col gap-4 text-base leading-7 text-muted-foreground">
              <p>
                Moses Nii-Dortey (PhD in African Studies) is an ethnomusicologist, a Senior Research Fellow and the Coordinator of the Music &amp; Dance
                Section of the Institute of African Studies, University of Ghana, Legon. Nii-Dortey was a recipient of the African Presidential Fellowship,
                University of Michigan, Ann Arbor (2009), and the African Humanities Programme Fellowship from 2011 to 2012 with residency at the University
                of Dar es Salaam, Tanzania.
              </p>
              <p>
                Nii-Dortey has published widely on Arts Research in Africa, Folk Opera in Ghana, Traditional Festivals as Integrated Performances, African
                Popular Music, the Ghana National Symphony Orchestra, and on the disparate curricula issues in Ghana&apos;s pre-tertiary music education
                system.
              </p>
              <p>
                In the last 20 years, Nii-Dortey has also been involved in several applied ethnomusicological initiatives to safeguard Ghana&apos;s
                endangered folk operatic tradition pioneered in the 1960s by Saka Acquaye. The initiatives have produced two staged renditions of The Lost
                Fishermen at the National Theatre in Accra (2007 and 2011), a documentary on the life and works of Saka Acquaye the operettist, and a 2023
                short film adaptation of The Lost Fishermen folk opera. The short film was produced by Kwame Crenstil and premiered at the Institute of
                Musicology, Bern University, Switzerland.
              </p>
              <p>
                Nii-Dortey is a member of and a joint editor for the Mellon-funded Mapping Africa&apos;s Musical Identities research project involving nine
                music scholars working in six African universities. The Special Issue publication with Critical African Studies (Routledge) is expected in
                2025.
              </p>
            </div>
          </Section>
          <Section id="education" icon={GraduationCap} title="Education">
            <List items={education} />
          </Section>
          <Section id="research" icon={FlaskConical} title="Research Interests">
            <List items={research} />
          </Section>
          <Section id="publications" icon={BookOpen} title="Publications">
            <OrderedList items={publications} />
          </Section>
          <Section id="creative-works" icon={BookOpen} title="Other Academic / Creative Work / Exhibits">
            <p className="mb-5 text-sm leading-6 text-muted-foreground">
              Applied ethnomusicological initiatives to safeguard Ghana&apos;s dying folk operatic tradition pioneered by Saka Acquaye in the 1960s.
            </p>
            <OrderedList items={creativeWorks} />
          </Section>
          <Section id="leadership" icon={Landmark} title="Leadership & Fellowships">
            <List items={leadership} />
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
