// Generates a generic multi-page manuscript PDF for the Nketia Archives demo viewer.
import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

const ink = rgb(0.15, 0.13, 0.1)
const faint = rgb(0.45, 0.42, 0.38)
const rule = rgb(0.8, 0.77, 0.72)

const pagesContent = [
  {
    heading: "Field Notebook — Ashanti Music Survey",
    lines: [
      "Institute of African Studies · University of Ghana, Legon",
      "Collector: J. H. Kwabena Nketia",
      "Period of survey: 1954 – 1956",
      "",
      "1. General observations",
      "The Adowa ensemble encountered at Mampong comprises the atumpan (talking",
      "drums), petia, apentemma, and the dawuro bell. The bell maintains the time-",
      "line against which all other instruments are read. Field measurements of the",
      "drum pitches were taken by ear and cross-checked with a monochord.",
      "",
      "2. On the talking drums",
      "The atumpan reproduce the tonal contours of Twi speech. Appellations of the",
      "paramount stool were recorded and transcribed in situ; a preliminary drum-",
      "language notation appears on the facing leaf. Informants confirmed that the",
      "opening phrase invokes the ancestral smiths of the drum.",
    ],
  },
  {
    heading: "Transcription Notes",
    lines: [
      "3. Rhythmic organisation",
      "The supporting drums articulate a two-bar response against the bell timeline.",
      "The master drum (atumpan) improvises within the metric frame, signalling the",
      "dancers with recurring cadential figures. A schematic of the interlocking",
      "pattern is entered below in the collector's shorthand.",
      "",
      "   bell    x . x . x x . x . x . x",
      "   petia   . x . x . x . x . x . x",
      "   apen    x . . x . . x . . x . .",
      "   master  ~ improvised, cued to dance ~",
      "",
      "4. Recording particulars",
      "Machine: portable 1/4\" reel-to-reel. Tape speed 7.5 ips. Two microphones,",
      "one on the master drum, one overhead. Ambient conditions noted as dry; the",
      "durbar ground was open, giving a short natural reverberation.",
    ],
  },
  {
    heading: "Catalogue & Cross-references",
    lines: [
      "5. Related holdings",
      "  · IAS/AU/0012  Adowa Ensemble, Mampong-Ashanti (audio)",
      "  · IAS/PH/00214 Adowa Dancer at a Durbar (photograph)",
      "  · IAS/MS/0009  Field Notebook, present volume",
      "",
      "6. Notes for the archive",
      "This transcript is a working document and should be read alongside the",
      "original sound recording. Spellings of place and personal names follow the",
      "collector's usage of the period and have not been silently modernised.",
      "",
      "— End of selected leaves —",
      "",
      "This is a representative, digitised sample prepared for demonstration within",
      "the J. H. Kwabena Nketia Archives online finding aid.",
    ],
  },
]

const pdf = await PDFDocument.create()
pdf.setTitle("Field Notebook — Ashanti Music Survey (Sample)")
pdf.setAuthor("J. H. Kwabena Nketia Archives")
pdf.setSubject("Digitised manuscript sample")
const serif = await pdf.embedFont(StandardFonts.TimesRoman)
const serifBold = await pdf.embedFont(StandardFonts.TimesRomanBold)
const mono = await pdf.embedFont(StandardFonts.Courier)

const W = 595
const H = 842
const M = 64

pagesContent.forEach((pc, idx) => {
  const page = pdf.addPage([W, H])
  // header
  page.drawText("J. H. KWABENA NKETIA ARCHIVES", {
    x: M,
    y: H - M,
    size: 9,
    font: serifBold,
    color: faint,
  })
  page.drawText("IAS/MS/0009", {
    x: W - M - mono.widthOfTextAtSize("IAS/MS/0009", 9),
    y: H - M,
    size: 9,
    font: mono,
    color: faint,
  })
  page.drawLine({
    start: { x: M, y: H - M - 10 },
    end: { x: W - M, y: H - M - 10 },
    thickness: 0.75,
    color: rule,
  })
  // heading
  page.drawText(pc.heading, {
    x: M,
    y: H - M - 44,
    size: 18,
    font: serifBold,
    color: ink,
  })
  // body
  let y = H - M - 78
  for (const line of pc.lines) {
    const isMono = /^\s{2,}|^   (bell|petia|apen|master)/.test(line)
    const font = isMono ? mono : serif
    page.drawText(line, { x: M, y, size: 11.5, font, color: ink, lineHeight: 16 })
    y -= 20
  }
  // footer
  page.drawText(`Page ${idx + 1} of ${pagesContent.length} · digitised sample`, {
    x: M,
    y: M - 20,
    size: 8.5,
    font: serif,
    color: faint,
  })
})

const outDir = join(process.cwd(), "public", "documents")
mkdirSync(outDir, { recursive: true })
const bytes = await pdf.save()
const path = join(outDir, "nketia-manuscript-sample.pdf")
writeFileSync(path, bytes)
console.log("wrote", path, (bytes.length / 1024).toFixed(0) + "KB")
