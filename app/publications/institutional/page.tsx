import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { BookOpen, ExternalLink, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Institutional Publications",
  description:
    "Official institutional publications of the Institute of African Studies, University of Ghana.",
}

const institutionalPubs = [
  {
    title: "Research Review of the Institute of African Studies",
    type: "Flagship Journal",
    frequency: "Bi-annual",
    issn: "ISSN 0800-3831",
    description:
      "The premier academic journal of the Institute, published since 1967. It features peer-reviewed articles covering all aspects of African Studies, including anthropology, archaeology, history, linguistics, political science, sociology, and the arts. The journal is indexed in major academic databases and serves as a key platform for African-centred scholarship.",
    volumes: "38 Volumes Published",
    editors: "Current Editor: Prof. A. Adomako Ampofo",
  },
  {
    title: "IAS Occasional Research Papers",
    type: "Monograph Series",
    frequency: "Occasional",
    issn: "Various",
    description:
      "A series of focused monographs and working papers addressing specific topics in African Studies. The series provides a platform for more extended research outputs that go beyond the format of a journal article, allowing scholars to explore complex issues in depth.",
    volumes: "42 Papers Published",
    editors: "Series Editor: Dr. K. Gavua",
  },
  {
    title: "Legon Journal of the Humanities",
    type: "Interdisciplinary Journal",
    frequency: "Annual",
    issn: "ISSN 0855-1502",
    description:
      "An interdisciplinary humanities journal published in collaboration with the Faculty of Arts, University of Ghana. It covers literature, philosophy, cultural studies, linguistics, and related fields, providing a bridge between African Studies and the broader humanities.",
    volumes: "34 Volumes Published",
    editors: "Joint editorial board with Faculty of Arts",
  },
  {
    title: "IAS Annual Report",
    type: "Institutional Report",
    frequency: "Annual",
    issn: "N/A",
    description:
      "The official annual report of the Institute, documenting research activities, academic programmes, staff achievements, archival developments, partnerships, and institutional milestones for the year.",
    volumes: "Published Annually",
    editors: "Institute Directorate",
  },
  {
    title: "IAS Newsletter",
    type: "Institutional Newsletter",
    frequency: "Quarterly",
    issn: "N/A",
    description:
      "A quarterly newsletter keeping the academic community, alumni, and partners informed about upcoming events, new research, staff news, visiting scholars, and developments at the Institute.",
    volumes: "Distributed Quarterly",
    editors: "Communications Office",
  },
]

export default function InstitutionalPage() {
  return (
    <>
      <PageHeader
        title="Institutional Publications"
        subtitle="Official journals, reports, and publications of the Institute"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Publications
          </p>
          <p className="mb-16 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The Institute of African Studies maintains several publication
            outlets that serve as platforms for disseminating African-centred
            research and scholarship to the academic community and the wider
            public.
          </p>

          <div className="flex flex-col gap-8">
            {institutionalPubs.map((pub) => (
              <article
                key={pub.title}
                className="rounded-lg border border-border bg-card p-8"
              >
                <div className="mb-4 flex flex-wrap items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {pub.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-sm bg-primary/10 px-2 py-0.5 font-medium text-primary">
                        {pub.type}
                      </span>
                      <span>{pub.frequency}</span>
                      {pub.issn !== "N/A" && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-border" />
                          <span>{pub.issn}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {pub.description}
                </p>
                <div className="flex flex-wrap items-center gap-6 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    {pub.volumes}
                  </span>
                  <span>{pub.editors}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
