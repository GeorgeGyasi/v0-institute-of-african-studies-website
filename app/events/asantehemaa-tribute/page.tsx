import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Paying Tribute to the Asantehemaa",
  description:
    "The Institute of African Studies honors its partnership with Manhyia Palace during the final funeral rites of the late Asantehemaa, Nana Ama Konadu Yiadom III.",
}

export default function AsantehemaaTributePage() {
  return (
    <>
      <PageHeader
        title="Paying Tribute to the Asantehemaa"
        subtitle="The Institute of African Studies honors its partnership with Manhyia Palace"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              September 15-18, 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Kumasi, Asanteman
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Institute Delegation
            </span>
          </div>

          {/* Featured Image - Full Width */}
          <div className="mb-12">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/asantehemaa-tribute-1.jpg"
                alt="Asantehemaa funeral ceremony with royal regalia"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies, University of Ghana, honored its partnership with the Manhyia Palace by sending a delegation to pay its respects during the final funeral rites of the late Asantehemaa, Nana Ama Konadu Yiadom III (September 15-18, 2025).
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Dual Mission of Scholarship and Respect</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The delegation fulfilled a dual mission that exemplified the Institute's commitment to both scholarly excellence and cultural respect. A research team, led by Dr. Edem Adotey and Mrs. Judith Opoku Boateng, meticulously documented the activities during the funeral for the Institute's archives, thereby fulfilling the mandate of documenting and preserving indigenous knowledge.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              Simultaneously, an administrative team, comprising Mrs. Yvonne Lartey and Diana Addo-Mensah, observed tradition by presenting ceremonial drinks and a cash donation to the Asantehene, Otumfuo Osei Tutu II, the Royal Family, and the people of Asanteman. The team also signed a book of condolence, formally documenting the Institute's participation in this significant moment in Ashanti history.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Scholarly Insights into Royal Customs</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Throughout the four-day funeral, which featured a profound display of Ashanti drumming, dance, and protocol, the delegation gained invaluable scholarly insight into royal funeral customs. These observations contribute to the Institute's broader mission of understanding and preserving African cultural heritage and ceremonial practices.
            </p>

            <p className="mb-6 leading-relaxed text-foreground">
              The Palace warmly acknowledged the Institute's gesture of respect and solidarity, reinforcing the strong relationship between the Manhyia Palace and the Institute of African Studies. This partnership continues to be a vital collaboration in advancing African scholarship and cultural preservation.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Delegation Members</h2>
            <ul className="mb-12 list-disc space-y-2 pl-6 text-foreground">
              <li><strong>Research Team:</strong> Dr. Edem Adotey, Mrs. Judith Opoku Boateng</li>
              <li><strong>Administrative Team:</strong> Mrs. Yvonne Lartey, Diana Addo-Mensah</li>
            </ul>

            {/* Image inserted after Delegation Members */}
            <div className="mb-12">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/asantehemaa-tribute-2.jpg"
                  alt="Institute delegation signing condolence book"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-sm italic text-muted-foreground">
              This visit reflects the Institute of African Studies' ongoing commitment to documenting, understanding, and preserving the rich cultural heritage of African societies.
            </p>
          </article>

          {/* Back Link */}
          <div className="mt-12 border-t border-border pt-8">
            <a
              href="/events"
              className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              ← Back to Events
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
