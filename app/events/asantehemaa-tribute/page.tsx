import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { EventActionButtons } from "@/components/event-action-buttons"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Paying Tribute to the Asantehemaa",
  description:
    "The Institute of African Studies honors its partnership with Manhyia Palace during the final funeral rites of the late Asantehemaa, Nana Ama Konadu Yiadom III.",
}

export default function AsantehemaaTributePage() {
  const actionButtons = []

  return (
    <>
      <PageHeader
        title="Paying Tribute to the Asantehemaa"
        subtitle="The Institute of African Studies honors its partnership with Manhyia Palace"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Sticky Action Buttons - Top */}
          {actionButtons.length > 0 && <EventActionButtons buttons={actionButtons} variant="top" />}

          {/* Event Theme - Highlighted */}
          <div className="mb-8 rounded-lg bg-primary/10 border border-primary/20 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Event Theme</p>
            <p className="text-xl font-semibold text-foreground">
              Documenting and Preserving Indigenous Knowledge Through Cultural Ceremony
            </p>
          </div>

          {/* Event Metadata */}
          <div className="mb-8 border-b border-border pb-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</p>
                  <p className="font-semibold text-foreground">September 15-18, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Kumasi, Asanteman</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Participants</p>
                  <p className="font-semibold text-foreground">Institute Delegation</p>
                </div>
              </div>
            </div>
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
                loading="eager"
                priority
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

          {/* Action Buttons - Bottom */}
          {actionButtons.length > 0 && <EventActionButtons buttons={actionButtons} variant="bottom" />}

          {/* Back Link */}
          <div className="mt-12 pt-8">
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
