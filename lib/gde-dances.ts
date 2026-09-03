export type DanceCategory = "ghana" | "pan-african"

export interface Dance {
  slug: string
  title: string
  category: DanceCategory
  /** Ethnic group or people the dance originates from */
  origin: string
  /** Ghana region — required when category is "ghana" */
  region?: string
  /** African country — required when category is "pan-african" */
  country?: string
  /** The context or event the dance is performed for */
  occasion: string
  /** One-line summary shown on listing cards */
  summary: string
  /** Full brief shown on the detail page, one string per paragraph */
  brief: string[]
  /** Gallery images for the detail page. Add photo paths here as they become available. */
  images: string[]
}

/** The 16 administrative regions of Ghana. */
export const GHANA_REGIONS = [
  "Ahafo",
  "Ashanti",
  "Bono",
  "Bono East",
  "Central",
  "Eastern",
  "Greater Accra",
  "North East",
  "Northern",
  "Oti",
  "Savannah",
  "Upper East",
  "Upper West",
  "Volta",
  "Western",
  "Western North",
] as const

export const gdeDances: Dance[] = [
  {
    slug: "adowa",
    title: "Adowa",
    category: "ghana",
    origin: "Akan",
    region: "Ashanti",
    occasion: "Funeral & Ceremonial",
    summary:
      "A graceful Akan funeral and ceremonial dance whose hand movements tell stories.",
    brief: [
      "Adowa is the most widespread traditional dance of the Akan people, performed at funerals, festivals, and other ceremonial gatherings. Its name is associated with the antelope, whose graceful, deliberate movements the dance is said to imitate.",
      "The dancer communicates through an eloquent vocabulary of hand gestures, each carrying meaning — expressing sympathy, praise, defiance, or prayer. The dance is accompanied by the Adowa drum ensemble and the ntahera or seperewa, with the atumpan (talking drums) leading the rhythmic conversation.",
    ],
    images: [],
  },
  {
    slug: "agbadza",
    title: "Agbadza",
    category: "ghana",
    origin: "Ewe",
    region: "Volta",
    occasion: "Social & Recreational",
    summary:
      "A social and recreational Ewe dance expressing communal unity and celebration.",
    brief: [
      "Agbadza is a recreational dance of the Ewe people of the Volta Region, evolved from a war dance known as Atrikpui. Today it is performed at social gatherings, festivals, and funerals to express communal unity and celebrate life.",
      "The dance is built on the interlocking polyrhythms of the Ewe drum ensemble, with the gankogui (bell) and axatse (rattle) holding the timeline while dancers move their torsos and arms in a characteristic bird-like motion.",
    ],
    images: [],
  },
  {
    slug: "kpanlogo",
    title: "Kpanlogo",
    category: "ghana",
    origin: "Ga",
    region: "Greater Accra",
    occasion: "Social & Recreational",
    summary:
      "A popular Ga recreational dance blending traditional and contemporary movement.",
    brief: [
      "Kpanlogo is a recreational dance of the Ga people of Greater Accra, developed in the late 1950s and early 1960s. It emerged among the youth of Accra and quickly became a symbol of Ghanaian popular culture after independence.",
      "Danced to conga-like Kpanlogo drums, it fuses traditional Ga rhythms with the highlife and rock-and-roll influences of its era, producing playful, expressive movements that continue to evolve with each generation.",
    ],
    images: [],
  },
  {
    slug: "bamaya",
    title: "Bamaya",
    category: "ghana",
    origin: "Dagbani",
    region: "Northern",
    occasion: "Thanksgiving & Social",
    summary:
      "A Dagbani social dance originally performed to give thanks for rain.",
    brief: [
      "Bamaya is a social dance of the Dagbamba people of the Northern Region. Its origins are traced to a severe drought, when men dressed as women and danced to appease the gods and plead for rain — a history preserved in the dance to this day.",
      "Performers wear waist-beads and colourful smocks, moving with a distinctive swaying of the hips to the sound of the lunga (talking drum) and gungon. It is now performed at festivals and social occasions as a dance of thanksgiving.",
    ],
    images: [],
  },
  {
    slug: "fontomfrom",
    title: "Fontomfrom",
    category: "ghana",
    origin: "Akan",
    region: "Ashanti",
    occasion: "Royal Court",
    summary:
      "A royal Akan court dance performed at the courts of paramount chiefs.",
    brief: [
      "Fontomfrom is a royal dance of the Akan, named after the large talking drums that accompany it. It is traditionally reserved for the courts of paramount chiefs and performed during durbars and state festivals.",
      "The dance projects power, dignity, and authority. A chief or dignitary dances to the commanding rhythms of the fontomfrom ensemble, with movements that assert status and respond to the proverbs spoken by the drums.",
    ],
    images: [],
  },
  {
    slug: "gahu",
    title: "Gahu",
    category: "ghana",
    origin: "Ewe",
    region: "Volta",
    occasion: "Social & Recreational",
    summary:
      "A lively Ewe social dance showcasing intricate polyrhythmic drumming.",
    brief: [
      "Gahu is a social dance adopted by the Ewe people from the Yoruba of Nigeria in the early twentieth century. It became popular as an entertainment dance performed by dance clubs across Eweland.",
      "Danced in a circle, Gahu is known for its relaxed, grounded movements and the rich interplay of its drum ensemble. The dancers move counter-clockwise with a gentle bounce, responding to the layered rhythms of the drums, bell, and rattle.",
    ],
    images: [],
  },
  {
    slug: "lamban",
    title: "Lamban",
    category: "pan-african",
    origin: "Mandinka",
    country: "Guinea",
    occasion: "Celebration of the Griot",
    summary:
      "A Mandinka celebration dance honouring the griots, keepers of history.",
    brief: [
      "Lamban is a dance of the Mandinka people of the Mande region of West Africa, associated especially with Guinea and Mali. It is performed to honour the djeli (griots) — the hereditary historians, praise-singers, and musicians of Mande society.",
      "Accompanied by the balafon, kora, and djembe, Lamban is a joyous, high-energy dance of celebration. The Ghana Dance Ensemble performs it as part of its Pan-African repertoire, reflecting the shared cultural heritage of West Africa.",
    ],
    images: [],
  },
  {
    slug: "bata",
    title: "Bàtá",
    category: "pan-african",
    origin: "Yoruba",
    country: "Nigeria",
    occasion: "Ritual & Festival",
    summary:
      "A Yoruba dance tied to the deity Sango, performed to the sacred bàtá drums.",
    brief: [
      "Bàtá is a dance of the Yoruba people of Nigeria, historically connected to the worship of Sango, the deity of thunder and lightning. It is performed to the family of sacred hourglass-shaped bàtá drums.",
      "The dance is fast, precise, and powerful, mirroring the character of Sango. The Ghana Dance Ensemble includes Bàtá in its Pan-African repertoire, celebrating the cultural connections across the West African region.",
    ],
    images: [],
  },
]

export function getDanceBySlug(slug: string): Dance | undefined {
  return gdeDances.find((dance) => dance.slug === slug)
}

export function getGhanaDances(): Dance[] {
  return gdeDances.filter((dance) => dance.category === "ghana")
}

export function getPanAfricanDances(): Dance[] {
  return gdeDances.filter((dance) => dance.category === "pan-african")
}

/** Regions that actually have at least one dance, in official order. */
export function getRepresentedRegions(): string[] {
  const regions = new Set(
    getGhanaDances()
      .map((dance) => dance.region)
      .filter((region): region is string => Boolean(region)),
  )
  return GHANA_REGIONS.filter((region) => regions.has(region))
}

/** Countries that actually have at least one Pan-African dance, alphabetically. */
export function getRepresentedCountries(): string[] {
  const countries = new Set(
    getPanAfricanDances()
      .map((dance) => dance.country)
      .filter((country): country is string => Boolean(country)),
  )
  return Array.from(countries).sort()
}
