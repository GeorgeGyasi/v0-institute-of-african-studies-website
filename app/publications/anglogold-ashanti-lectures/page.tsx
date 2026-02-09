import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "AngloGold Ashanti Lectures",
  description:
    "The AngloGold Ashanti Lecture Series at the Institute of African Studies, University of Ghana.",
}

const lectures = [
  {
    title: "Gold, Heritage, and Community: Reflections on Mining and Culture in Ghana",
    speaker: "Prof. Kwame Arhin",
    date: "March 2024",
    description:
      "An exploration of the historical and cultural significance of gold mining in Ghanaian communities, examining the relationship between extractive industries and cultural preservation.",
  },
  {
    title: "Sustainable Development and Cultural Heritage in Mining Regions",
    speaker: "Dr. Abena Tufuor",
    date: "November 2023",
    description:
      "This lecture examined the intersection of sustainable development goals and cultural heritage preservation in mining communities across West Africa.",
  },
  {
    title: "The Archaeology of Gold: Pre-Colonial Mining in the Akan Forest",
    speaker: "Prof. James Anquandah",
    date: "June 2023",
    description:
      "A comprehensive overview of archaeological evidence for pre-colonial gold mining in the Akan forest region, linking material culture to contemporary mining practices.",
  },
  {
    title: "Mining Communities, Memory, and Identity in Southern Ghana",
    speaker: "Dr. Samuel Ntewusu",
    date: "February 2023",
    description:
      "An examination of how mining has shaped community identities, collective memory, and social structures in southern Ghana over the past century.",
  },
  {
    title: "Corporate Social Responsibility and Cultural Investment in Africa",
    speaker: "Prof. Dzodzi Tsikata",
    date: "October 2022",
    description:
      "A critical analysis of corporate social responsibility frameworks in the African mining sector, with a focus on cultural heritage investment and community development.",
  },
]

export default function AngloGoldAshantiLecturesPage() {
  return (
    <>
      <PageHeader
        title="AngloGold Ashanti Lectures"
        subtitle="A distinguished lecture series exploring mining, heritage, and African development"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Lecture Series
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The AngloGold Ashanti Lecture Series brings together leading
              scholars, practitioners, and thought leaders to address topics at
              the intersection of mining, cultural heritage, sustainable
              development, and African societies. Supported through the
              partnership between the Institute of African Studies and AngloGold
              Ashanti, this series provides a platform for rigorous intellectual
              engagement and public discourse.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {lectures.map((lecture) => (
              <article
                key={lecture.title}
                className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary">
                      {lecture.title}
                    </h3>
                    <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" />
                        {lecture.speaker}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {lecture.date}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {lecture.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
