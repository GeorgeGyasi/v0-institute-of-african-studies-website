import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ImageIcon, Music, FileText, Video, Mail, Globe, ArrowRight } from "lucide-react"
import { ComingSoonLink } from "@/components/coming-soon-link"

export const metadata: Metadata = {
  title: "J. H. Kwabena Nketia Archives",
  description:
    "The J.H. Kwabena Nketia Archives at the Institute of African Studies, University of Ghana.",
}

const collections = [
  {
    icon: Music,
    slug: "audio",
    title: "Audio Recordings",
    count: "1,500+",
    description:
      "Rare field recordings, oral histories, and musical traditions from the 1950s onward. Preserved across quarter-inch reel-to-reel tapes, cassettes, DATs, LPs, and CDs. Inscribed on the UNESCO Memory of the World Register for exceptional value.",
  },
  {
    icon: FileText,
    slug: "manuscripts",
    title: "Manuscripts",
    count: "800+",
    description:
      "Extensive collection of institutional correspondence, field notes, and reports. Documents collaborative projects across global universities and research centers. Provides critical historical context for African heritage and scholarship.",
  },
  {
    icon: Video,
    slug: "video",
    title: "Video Documentation",
    count: "300+",
    description:
      "Visual recordings capturing traditional dances, royal ceremonies, and festivals. Features early Ghanaian cinema, musical performances, and cultural rites. Preserved in analog VHS and digital formats for visual anthropology studies.",
  },
  {
    icon: ImageIcon,
    slug: "photographs",
    title: "Photographs",
    count: "50000+",
    description:
      "Rich visual archive capturing the vibrant culture, history, and daily life of Ghana. Features iconic holdings including the Gerald Annan-Forson Collection and Heritage Photo Lab. Serves as an essential visual record of national memory and photographic heritage.",
  },
]

export default function NketiaArchivesPage() {
  return (
    <>
      <PageHeader
        title="J. H. Kwabena Nketia Archives"
        subtitle="Preserving the legacy of Africa's foremost ethnomusicologist"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/images/nketia-archives-building.png"
                alt="The J. H. Kwabena Nketia Archives building at the Institute of African Studies, University of Ghana"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              About the Archives
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Overview
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The Institute of African Studies (I.A.S.) Audiovisual Archive
                merges the IAS Audio Visual Unit and ICAMD collections, forming
                one of the world&apos;s most vital repositories of Ghanaian
                performance traditions. Established to support scholars,
                researchers, and artists, the archive preserves field
                documentation across diverse legacy media, including 1/4&quot;
                reel-to-reel tapes, shellac discs, audio cassettes, DATs, CDs,
                VHS, Mini-DV, and various video formats.
              </p>
              <p>
                At the core of the archive are the foundational field recordings
                made by Prof. J. H. Kwabena Nketia and his colleagues from the
                early 1950s through the 1970s. Capturing music, dance, and oral
                histories prior to and immediately following Ghana&apos;s 1957
                independence, these recordings preserve irreplaceable cultural
                heritage that has since evolved significantly over time.
              </p>
              <p>
                Notable holdings include rare court music like Odurugya and
                Fontomfrom, storytelling traditions (Ananses&#603;m and mmoguo),
                and extensive recordings of Konkomba, Mamprusi, Frafra, Dagaaba,
                and Kasena music. The archive also preserves occupational and
                hunters&apos; songs, ritual music, early highlife, vintage brass
                band compositions, and select international folk music.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Holdings
          </p>
          <h2 className="mb-3 font-serif text-3xl font-bold text-foreground">
            Archive Collections
          </h2>
          <p className="mb-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Select a collection to browse a finding aid of representative items,
            complete with catalogue numbers, dates, and credits.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {collections.map((item) => (
              <Link
                key={item.title}
                href={`/units/nketia-archives/collections/${item.slug}`}
                className="group flex gap-5 rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </h3>
                    <span className="rounded-sm bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
                      {item.count}
                    </span>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Browse selected items
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Get in Touch
          </p>
          <h2 className="mb-10 font-serif text-3xl font-bold text-foreground">
            Contact
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  jhknketia-archives@ug.edu.gh
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Website</p>
                <ComingSoonLink
                  href="https://www.jhnketiaarchives.ug.edu.gh"
                  label="www.jhnketiaarchives.ug.edu.gh"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
