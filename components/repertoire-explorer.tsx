"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import {
  GHANA_REGIONS,
  getGhanaDances,
  getPanAfricanDances,
  getRepresentedCountries,
  type DanceCategory,
} from "@/lib/gde-dances"

const ALL = "All"

export function RepertoireExplorer() {
  const [category, setCategory] = useState<DanceCategory>("ghana")
  const [region, setRegion] = useState<string>(ALL)
  const [country, setCountry] = useState<string>(ALL)

  const regions = useMemo(() => [...GHANA_REGIONS], [])
  const countries = useMemo(() => getRepresentedCountries(), [])

  const dances = useMemo(() => {
    if (category === "ghana") {
      const all = getGhanaDances()
      return region === ALL
        ? all
        : all.filter((dance) => dance.region === region)
    }
    const all = getPanAfricanDances()
    return country === ALL
      ? all
      : all.filter((dance) => dance.country === country)
  }, [category, region, country])

  const filters = category === "ghana" ? [ALL, ...regions] : [ALL, ...countries]
  const activeFilter = category === "ghana" ? region : country
  const setFilter = category === "ghana" ? setRegion : setCountry
  const filterLabel = (value: string) =>
    value === ALL
      ? category === "ghana"
        ? "All Regions"
        : "All Countries"
      : value

  return (
    <div>
      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Repertoire category"
        className="mb-8 inline-flex rounded-lg border border-border bg-muted/40 p-1"
      >
        {(
          [
            { key: "ghana", label: "Ghanaian Dances" },
            { key: "pan-african", label: "Pan-African Dances" },
          ] as { key: DanceCategory; label: string }[]
        ).map((tab) => (
          <button
            key={tab.key}
            role="tab"
            type="button"
            aria-selected={category === tab.key}
            onClick={() => setCategory(tab.key)}
            className={`rounded-md px-5 py-2 text-sm font-semibold transition-colors ${
              category === tab.key
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === value
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {filterLabel(value)}
          </button>
        ))}
      </div>

      {/* Dance grid */}
      {dances.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dances.map((dance) => (
            <Link
              key={dance.slug}
              href={`/units/ghana-dance-ensemble/repertoire/${dance.slug}`}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2 text-xs font-medium text-secondary">
                <MapPin className="h-3.5 w-3.5" />
                <span>{dance.category === "ghana" ? dance.region : dance.country}</span>
              </div>
              <h3 className="mb-1 font-serif text-xl font-bold text-foreground group-hover:text-primary">
                {dance.title}
              </h3>
              <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
                {dance.origin} &middot; {dance.occasion}
              </p>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {dance.summary}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border py-16 text-center">
          <MapPin className="mx-auto mb-3 h-6 w-6 text-muted-foreground/60" />
          <p className="text-sm font-medium text-foreground">
            {category === "ghana" && region !== ALL
              ? `Dances from the ${region} Region are coming soon.`
              : category === "pan-african" && country !== ALL
                ? `Dances from ${country} are coming soon.`
                : "Dances will be added to this category soon."}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            The Ensemble&apos;s repertoire is continually being documented and expanded.
          </p>
        </div>
      )}
    </div>
  )
}
