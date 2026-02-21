import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Seminar Series: Women and Governance in Africa",
  description:
    "A seminar series exploring women's roles in political governance, institutional leadership, and policy-making across Africa.",
}

export default function WomenGovernanceSeminarPage() {
  return (
    <>
      <PageHeader
        title="Seminar Series: Women and Governance in Africa"
        subtitle="Exploring women's leadership and institutional power"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Article Header */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              August 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Institute of African Studies, University of Ghana
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Gender & Development Studies
            </span>
          </div>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              The Institute of African Studies organized a seminar series examining women's participation and leadership in governance institutions across Africa. The series brought together scholars, practitioners, and policymakers to discuss women's political empowerment and institutional transformation.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Seminar Topics</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              Sessions covered women in parliamentary politics, women in local governance structures, women's access to judicial positions, and women's roles in traditional governance systems. Presenters analyzed barriers to women's participation and discussed strategies for advancing women's political empowerment.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-foreground">Policy Implications</h2>
            <p className="mb-6 leading-relaxed text-foreground">
              The seminar series provided evidence-based insights for policymakers working to strengthen women's representation in governance. Discussions emphasized the importance of gender-sensitive institutional reforms and the benefits of diverse leadership perspectives in decision-making processes.
            </p>

            <p className="text-sm italic text-muted-foreground">
              Understanding women's roles in governance is essential for building more democratic, equitable, and representative institutions across Africa.
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
