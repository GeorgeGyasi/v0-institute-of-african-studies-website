export type CollectionCategory = "audio" | "manuscripts" | "video" | "photographs"

export type FindingAidItem = {
  catalogNumber: string
  title: string
  date: string
  creator: string
  credit: string
  format: string
  extent: string
  description: string
  /** Only used for the photographs collection */
  image?: string
  /** Playable audio file (audio collection) */
  audio?: string
  /** Playable video file (video collection) */
  video?: string
  /** Downloadable/viewable PDF (manuscripts collection) */
  document?: string
}

export type CollectionGroup = {
  slug: CollectionCategory
  title: string
  count: string
  /** lucide icon name handled on the page */
  summary: string
  /** finding-aid scope note shown at the top of the listing */
  scopeNote: string
  items: FindingAidItem[]
}

const MANUSCRIPT_PDF = "/documents/nketia-manuscript-sample.pdf"

export const nketiaCollections: Record<CollectionCategory, CollectionGroup> = {
  audio: {
    slug: "audio",
    title: "Audio Recordings",
    count: "1,500+",
    summary:
      "Field recordings, oral histories, and musical traditions from the 1950s onward.",
    scopeNote:
      "The audio series comprises field recordings, oral histories, analytical audio, and popular music captured across quarter-inch reel-to-reel tapes, audio cassettes, Digital Audio Tapes (DAT), vinyl LPs, and CDs. A representative selection of the finding aid is presented below, with short digitised listening samples.",
    items: [
      {
        catalogNumber: "IAS/AU/0012",
        title: "Adowa Ensemble, Mampong-Ashanti",
        date: "1956",
        creator: "Recorded by J. H. Kwabena Nketia",
        credit: "IAS Audio Visual Unit Collection",
        format: '1/4" reel-to-reel tape',
        extent: "1 reel, approx. 42 min.",
        description:
          "Field recording of a royal Adowa ensemble, including apentemma and atumpan drumming with call-and-response vocals documented during early ethnomusicological fieldwork in Ashanti.",
        audio: "/audio/nketia-adowa.wav",
      },
      {
        catalogNumber: "IAS/AU/0087",
        title: "Fontomfrom Royal Court Music",
        date: "1961",
        creator: "Recorded by J. H. Kwabena Nketia",
        credit: "ICAMD Collection",
        format: '1/4" reel-to-reel tape',
        extent: "1 reel, approx. 55 min.",
        description:
          "Ceremonial Fontomfrom drumming recorded at a paramount chief's court, capturing the large ceremonial drums and appellations performed during a state durbar.",
        audio: "/audio/nketia-fontomfrom.wav",
      },
      {
        catalogNumber: "IAS/AU/0231",
        title: "Anansesɛm Storytelling Session",
        date: "1963",
        creator: "Recorded by IAS Research Team",
        credit: "IAS Audio Visual Unit Collection",
        format: "Audio cassette",
        extent: "1 cassette, approx. 38 min.",
        description:
          "Oral literature session featuring Akan trickster tales (Anansesɛm) interspersed with mmoguo interlude songs, documenting a live community storytelling performance.",
        audio: "/audio/nketia-anansesem.wav",
      },
      {
        catalogNumber: "IAS/AU/0498",
        title: "Konkomba Harvest Songs, Northern Region",
        date: "1969",
        creator: "Recorded by IAS Field Expedition",
        credit: "ICAMD Collection",
        format: '1/4" reel-to-reel tape',
        extent: "2 reels, approx. 1 hr 20 min.",
        description:
          "Occupational and harvest songs of the Konkomba people accompanied by flutes and gourd rattles, recorded during a documentation expedition to the Northern Region.",
        audio: "/audio/nketia-konkomba.wav",
      },
      {
        catalogNumber: "IAS/AU/0725",
        title: "Highlife Dance Band Session, Accra",
        date: "1972",
        creator: "Unknown ensemble",
        credit: "Heritage Sound Collection",
        format: "Vinyl LP",
        extent: "1 disc, approx. 40 min.",
        description:
          "Early highlife dance band recording featuring brass, guitar, and percussion, illustrating the fusion of traditional rhythms with urban popular music.",
        audio: "/audio/nketia-highlife.wav",
      },
    ],
  },
  video: {
    slug: "video",
    title: "Video Documentation",
    count: "300+",
    summary:
      "Visual recordings of dances, ceremonies, festivals, and early Ghanaian cinema.",
    scopeNote:
      "The moving-image series documents traditional dances, royal ceremonies, festivals, and cultural rites, alongside early Ghanaian cinema and command performances. Materials survive on VHS, Mini-DV, and digitised video formats. Short digitised clips accompany the entries below.",
    items: [
      {
        catalogNumber: "IAS/VD/0034",
        title: "Installation of a Paramount Chief",
        date: "1988",
        creator: "IAS Audio Visual Unit",
        credit: "IAS Audio Visual Unit Collection",
        format: "VHS",
        extent: "1 tape, approx. 1 hr 30 min.",
        description:
          "Documentary footage of the enstoolment ceremony of a paramount chief, capturing the procession, oath-swearing, and accompanying Fontomfrom drumming.",
        video: "/video/nketia-installation.mp4",
      },
      {
        catalogNumber: "IAS/VD/0102",
        title: "Aboakyer Deer-Hunting Festival, Winneba",
        date: "1994",
        creator: "IAS Audio Visual Unit",
        credit: "IAS Audio Visual Unit Collection",
        format: "VHS",
        extent: "1 tape, approx. 58 min.",
        description:
          "Coverage of the annual Aboakyer festival of the Effutu, documenting the Asafo companies, the ceremonial hunt, and public durbar.",
        video: "/video/nketia-aboakyer.mp4",
      },
      {
        catalogNumber: "IAS/VD/0176",
        title: "Ghana Dance Ensemble Performance",
        date: "1999",
        creator: "IAS Audio Visual Unit",
        credit: "Ghana Dance Ensemble Collection",
        format: "Mini-DV",
        extent: "1 cassette, approx. 1 hr 12 min.",
        description:
          "Stage performance by the Ghana Dance Ensemble featuring choreographed renditions of Adowa, Kpanlogo, and Bamaya for an academic audience at the National Theatre.",
        video: "/video/nketia-gde-performance.mp4",
      },
      {
        catalogNumber: "IAS/VD/0241",
        title: "Command Performance for a State Visit",
        date: "2003",
        creator: "IAS Audio Visual Unit",
        credit: "IAS Audio Visual Unit Collection",
        format: "Digital video (digitised)",
        extent: "1 file, approx. 47 min.",
        description:
          "Recording of a national cultural command performance staged for a visiting head of state, featuring massed drumming, dance, and choral display.",
        video: "/video/nketia-command.mp4",
      },
      {
        catalogNumber: "IAS/VD/0298",
        title: "Field Documentation Footage, Upper East",
        date: "1996",
        creator: "IAS Field Expedition",
        credit: "ICAMD Collection",
        format: "Mini-DV",
        extent: "1 cassette, approx. 51 min.",
        description:
          "Field footage documenting ensemble flute-and-drum music and recreational dance recorded during a research expedition, illustrating the archive's audiovisual documentation methods.",
        video: "/video/nketia-fieldwork.mp4",
      },
    ],
  },
  manuscripts: {
    slug: "manuscripts",
    title: "Manuscripts",
    count: "800+",
    summary:
      "Institutional correspondence, field notes, reports, and research papers.",
    scopeNote:
      "The manuscript series holds personal records, institutional correspondence, project files, field notes, and reports documenting collaborations between the Institute of African Studies and partner institutions across the world. A digitised sample document may be viewed with each entry.",
    items: [
      {
        catalogNumber: "IAS/MS/0009",
        title: "Field Notebook — Ashanti Music Survey",
        date: "1954–1956",
        creator: "J. H. Kwabena Nketia",
        credit: "Nketia Personal Papers",
        format: "Bound manuscript notebook",
        extent: "1 volume, 118 leaves",
        description:
          "Handwritten field notes, transcriptions, and diagrams compiled during Nketia's early survey of Ashanti musical traditions, including drum-language notations.",
        document: MANUSCRIPT_PDF,
      },
      {
        catalogNumber: "IAS/MS/0143",
        title: "Correspondence — International Library of African Music",
        date: "1960–1968",
        creator: "Institute of African Studies",
        credit: "IAS Institutional Records",
        format: "Typescript letters",
        extent: "1 folder, 64 items",
        description:
          "Exchange of letters concerning collaborative recording projects, exchange of copies, and comparative research between the IAS and international partners.",
        document: MANUSCRIPT_PDF,
      },
      {
        catalogNumber: "IAS/MS/0287",
        title: "Research Report — Northern Ghana Documentation Project",
        date: "1969",
        creator: "IAS Research Team",
        credit: "IAS Institutional Records",
        format: "Typescript report",
        extent: "1 volume, 92 pages",
        description:
          "Final report of a field expedition documenting the music and dance of the Konkomba, Mamprusi, Dagaaba, and Kasena, with catalogues of recorded items.",
        document: MANUSCRIPT_PDF,
      },
      {
        catalogNumber: "IAS/MS/0402",
        title: "Draft Essays on African Art Music",
        date: "1974",
        creator: "J. H. Kwabena Nketia",
        credit: "Nketia Personal Papers",
        format: "Annotated typescript",
        extent: "1 folder, 3 essays",
        description:
          "Working drafts with handwritten annotations exploring the relationship between traditional idioms and contemporary African art-music composition.",
        document: MANUSCRIPT_PDF,
      },
      {
        catalogNumber: "IAS/MS/0561",
        title: "Programme Notes & Lecture Papers",
        date: "1978–1982",
        creator: "J. H. Kwabena Nketia",
        credit: "Nketia Personal Papers",
        format: "Typescript with annotations",
        extent: "1 folder, 47 items",
        description:
          "Assorted lecture papers, seminar handouts, and concert programme notes prepared for national and international audiences, documenting the dissemination of African music scholarship.",
        document: MANUSCRIPT_PDF,
      },
    ],
  },
  photographs: {
    slug: "photographs",
    title: "Photographs",
    count: "50,000+",
    summary: "A visual record of Ghana's culture, ceremonies, and daily life.",
    scopeNote:
      "The photographic series is a rich visual record of Ghanaian culture, history, and daily life, including the Gerald Annan-Forson Collection and the Heritage Photo Lab holdings. Prints, negatives, and slides document performance, ceremony, and fieldwork.",
    items: [
      {
        catalogNumber: "IAS/PH/00214",
        title: "Adowa Dancer at a Durbar",
        date: "1961",
        creator: "IAS Audio Visual Unit",
        credit: "IAS Audio Visual Unit Collection",
        format: "Black-and-white print from negative",
        extent: "1 print, 8 x 10 in.",
        description:
          "A female Adowa dancer captured mid-gesture before an audience of elders and drummers at a community durbar in Ashanti.",
        image: "/images/nketia-photo-adowa.png",
      },
      {
        catalogNumber: "IAS/PH/00567",
        title: "Fontomfrom Drummers at Court",
        date: "1962",
        creator: "IAS Audio Visual Unit",
        credit: "IAS Audio Visual Unit Collection",
        format: "Black-and-white print from negative",
        extent: "1 print, 8 x 10 in.",
        description:
          "Royal Fontomfrom drummers performing on tall carved ceremonial drums at a paramount chief's court.",
        image: "/images/nketia-photo-fontomfrom.png",
      },
      {
        catalogNumber: "IAS/PH/01098",
        title: "Field Recording Session in a Village",
        date: "1955",
        creator: "IAS Research Team",
        credit: "Nketia Personal Papers",
        format: "Black-and-white print from negative",
        extent: "1 print, 5 x 7 in.",
        description:
          "An ethnomusicologist records seated musicians with a reel-to-reel tape recorder during an early field expedition, illustrating the archive's documentation methods.",
        image: "/images/nketia-photo-fieldwork.png",
      },
      {
        catalogNumber: "IAS/PH/01742",
        title: "Highlife Dance Orchestra on Stage",
        date: "1958",
        creator: "Gerald Annan-Forson",
        credit: "Gerald Annan-Forson Collection",
        format: "Black-and-white print from negative",
        extent: "1 print, 8 x 10 in.",
        description:
          "A highlife brass and dance orchestra performing on stage, documenting the vibrant urban popular-music scene of late-colonial Ghana.",
        image: "/images/nketia-photo-highlife.png",
      },
      {
        catalogNumber: "IAS/PH/02310",
        title: "Kete Court Ensemble before a Chief",
        date: "1964",
        creator: "IAS Audio Visual Unit",
        credit: "IAS Audio Visual Unit Collection",
        format: "Black-and-white print from negative",
        extent: "1 print, 8 x 10 in.",
        description:
          "A Kete court music ensemble performing with drums and gyil before a seated chief under a state umbrella, documenting Akan court musical practice.",
        image: "/images/nketia-photo-kete.png",
      },
    ],
  },
}

export function getCollection(category: string): CollectionGroup | undefined {
  return nketiaCollections[category as CollectionCategory]
}

export const collectionOrder: CollectionCategory[] = [
  "audio",
  "manuscripts",
  "video",
  "photographs",
]
