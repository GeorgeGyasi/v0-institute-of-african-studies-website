import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Leadership History",
  description:
    "A comprehensive history of the Directors and Deputy Directors of the Institute of African Studies.",
}

const pastDirectors = [
  { name: "Professor Thomas Hodgkin", years: "1962–1965" },
  { name: "Professor Kwabena Nketia", years: "1965–1979" },
  { name: "Rev. Dr. A. K. Quarcoo (Ag.)", years: "1974" },
  { name: "Professor K. A. Dickson", years: "1980–1986" },
  { name: "Professor Kwame E. Arhin", years: "1987–1995" },
  { name: "Professor Kofi Agovi (Ag.)", years: "1995–1996" },
  { name: "Professor George Hagan", years: "1996–1998" },
  { name: "Professor Irene Odotei (Ag.)", years: "1998–2002" },
  { name: "Emerita Professor Takyiwaa Manuh", years: "2002–2009" },
  { name: "Professor Brigid Sackey (Ag.)", years: "2009" },
  { name: "Professor Akosua Adomako Ampofo", years: "2010–2015" },
  { name: "Professor Francis Dodoo", years: "2015–2016" },
  { name: "Professor Dzodzi Tsikata", years: "2016–2022" },
]

const pastDeputyDirectors = [
  { name: "Rev. Dr. A. K. Quarcoo", years: "1980–1981" },
  { name: "Professor Kofi Asare Opoku", years: "1981–1984" },
  { name: "Professor Kwame Arhin", years: "1984–1987" },
  { name: "Professor M. E. Kropp Dakubu", years: "1987–1989" },
  { name: "Dr. G. P. Hagan (Ag.)", years: "1989–1990" },
  { name: "Professor K. E. Agovi", years: "1990–1991" },
  { name: "Dr. K. M. Bame (Ag.)", years: "1991–1993" },
  { name: "Professor K. E. Agovi", years: "1993–1997" },
  { name: "Professor Nana Abayie Boaten I", years: "1996–1998" },
  { name: "Professor Irene Odotei", years: "1998" },
  { name: "Emerita Professor Takyiwaa Manuh", years: "1998–2002" },
  { name: "Dr. S. S. Quarcoopome", years: "2002–2003" },
  { name: "Professor A. K. Awedoba", years: "2003–2008" },
  { name: "Professor Brigid Sackey", years: "2008–2009" },
  { name: "Professor S. K. Amanor", years: "2009–2010" },
  { name: "Dr. Kwame Amoah Labi", years: "2010–2014" },
]

export default function LeadershipHistoryPage() {
  return (
    <>
      <PageHeader
        title="Leadership History"
        subtitle="Sixty years of dedicated academic leadership and stewardship"
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Directors of the Institute
              </h2>
              <div className="space-y-4">
                {pastDirectors.map((director, index) => (
                  <div
                    key={index}
                    className="card-elevated p-4 transition-all hover:shadow-md"
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      {director.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-primary">
                      {director.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Deputy Directors of the Institute
              </h2>
              <div className="mb-4 rounded-lg bg-secondary/5 border border-secondary/20 p-4">
                <p className="text-xs text-muted-foreground">
                  The position of Deputy Director was established in 1980.
                </p>
              </div>
              <div className="space-y-4">
                {pastDeputyDirectors.map((deputy, index) => (
                  <div
                    key={index}
                    className="card-elevated p-4 transition-all hover:shadow-md"
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      {deputy.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-primary">
                      {deputy.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
              Our Leadership Legacy
            </h2>
            <div className="max-w-none">
              <p className="leading-relaxed text-muted-foreground">
                Since its establishment in 1962 under the visionary leadership of
                Professor Thomas Hodgkin, the Institute of African Studies has been
                guided by outstanding scholars and administrators who have shaped its
                trajectory and influence. Over six decades, our Directors and Deputy
                Directors have championed rigorous scholarship, fostered international
                collaborations, and strengthened the Institute's role as a premier
                African Studies institution.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Each leader has contributed significantly to our mission of
                advancing knowledge and understanding of African societies,
                cultures, and histories. Their dedication to academic excellence,
                institutional development, and service to the continent continues
                to inspire our work today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
