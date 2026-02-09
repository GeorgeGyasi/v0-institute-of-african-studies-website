import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ExternalLink, FileText, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse academic publications, journals, and working papers from the Institute of African Studies.",
}

const journals = [
  {
    title: "Research Review",
    description:
      "The flagship journal of the Institute, published bi-annually since 1967. It features peer-reviewed articles on all aspects of African Studies.",
    issn: "ISSN 0800-3831",
    frequency: "Bi-annual",
  },
  {
    title: "IAS Occasional Papers",
    description:
      "A series of monographs and occasional papers addressing focused topics in African Studies, published irregularly based on research output.",
    issn: "Various",
    frequency: "Occasional",
  },
  {
    title: "Legon Journal of the Humanities",
    description:
      "An interdisciplinary humanities journal published in collaboration with the Faculty of Arts, covering literature, philosophy, and cultural studies.",
    issn: "ISSN 0855-1502",
    frequency: "Annual",
  },
]

const recentPublications = [
  {
    title: "Decolonizing African Knowledge Systems: Epistemic Justice in the 21st Century",
    authors: "Adomako Ampofo, A. & Boateng, F.",
    year: "2025",
    type: "Journal Article",
    journal: "Research Review, Vol. 38(2)",
  },
  {
    title: "Archaeological Evidence of Iron Working in the Volta Region",
    authors: "Gavua, K. & Apoh, W.",
    year: "2025",
    type: "Journal Article",
    journal: "Research Review, Vol. 38(1)",
  },
  {
    title: "Gender and Chieftaincy in Contemporary Ghana",
    authors: "Odotei, I. K.",
    year: "2024",
    type: "Monograph",
    journal: "IAS Occasional Papers, No. 42",
  },
  {
    title: "Digital Archives and Cultural Memory: Lessons from the Gold Coast Collection",
    authors: "Mensah, K. A. & Owusu, B.",
    year: "2024",
    type: "Journal Article",
    journal: "Research Review, Vol. 37(2)",
  },
  {
    title: "Music, Identity, and the African Diaspora in Britain",
    authors: "Darkwa, E. N.",
    year: "2024",
    type: "Book Chapter",
    journal: "In: Diaspora Soundscapes (Oxford UP)",
  },
  {
    title: "Language Policy and Education in Multilingual Ghana",
    authors: "Agyekum, K. & Essegbey, J.",
    year: "2024",
    type: "Journal Article",
    journal: "Legon Journal of the Humanities, Vol. 34",
  },
  {
    title: "Oral Traditions of the Dagomba: A Contemporary Analysis",
    authors: "Abdulai, M. & Salifu, A.",
    year: "2023",
    type: "Monograph",
    journal: "IAS Occasional Papers, No. 41",
  },
  {
    title: "Postcolonial Urbanism and the Making of Modern Accra",
    authors: "Acquah, T. & Yankah, K.",
    year: "2023",
    type: "Journal Article",
    journal: "Research Review, Vol. 36(2)",
  },
]

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Peer-reviewed journals, monographs, and working papers advancing African scholarship"
      />

      {/* Journals */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Journals
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Academic Publications
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {journals.map((journal) => (
              <div
                key={journal.title}
                className="flex flex-col rounded-lg border border-border bg-card p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {journal.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {journal.description}
                </p>
                <div className="flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{journal.issn}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{journal.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Recent Works
          </p>
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
            Selected Publications
          </h2>
          <div className="flex flex-col gap-6">
            {recentPublications.map((pub) => (
              <article
                key={pub.title}
                className="group flex flex-col gap-3 rounded-lg border border-border bg-background p-6 transition-shadow hover:shadow-md md:flex-row md:items-start md:justify-between"
              >
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      <FileText className="h-3 w-3" />
                      {pub.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{pub.year}</span>
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-foreground group-hover:text-primary">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  <p className="mt-1 text-xs text-muted-foreground italic">
                    {pub.journal}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <ExternalLink className="h-3 w-3" />
                  View
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
