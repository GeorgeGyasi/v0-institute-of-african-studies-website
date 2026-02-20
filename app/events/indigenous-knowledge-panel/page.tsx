import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Indigenous Knowledge and Innovation Panel Discussion",
  description:
    "Panel discussion on African solutions for climate resilience and socio-economic transformation, part of the 2025 Day of Scientific Renaissance of Africa.",
}

export default function IndigenousKnowledgePanelPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
              Panel Discussion
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Indigenous Knowledge and Innovation: African Solutions for Climate Resilience and Socio-Economic Transformation
            </h1>
            <p className="text-lg text-muted-foreground">
              Celebrating the 2025 Day of Scientific Renaissance of Africa
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="prose prose-invert max-w-none space-y-8 text-foreground">
          {/* Event Details Grid */}
          <div className="grid gap-6 rounded-lg border border-border bg-card p-8 md:grid-cols-2">
            <div className="flex gap-4">
              <Calendar className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase">Date</p>
                <p className="mt-1 text-lg font-semibold text-foreground">Thursday 12th June 2025</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase">Time</p>
                <p className="mt-1 text-lg font-semibold text-foreground">9:00 AM</p>
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2">
              <MapPin className="h-6 w-6 flex-shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase">Venue</p>
                <p className="mt-1 text-lg font-semibold text-foreground">J.H. Nketia Conference Room, Institute of African Studies, University of Ghana</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">About This Panel Discussion</h2>
            <p className="leading-relaxed text-muted-foreground">
              The Institute of African Studies is pleased to host this panel discussion as part of the 2025 Day of Scientific Renaissance of Africa celebration. This timely conversation brings together scholars and experts to explore how indigenous knowledge systems and innovations offer practical solutions for addressing climate resilience and driving socio-economic transformation across Africa.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The panel will examine the intersection of traditional African knowledge systems with contemporary challenges, demonstrating how ancestral wisdom and modern innovation can work synergistically to create sustainable development pathways.
            </p>
          </div>

          {/* Speakers */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Panel Leadership</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card/50 p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  <Users className="h-4 w-4" />
                  HOST
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">Prof. Samuel Ntewusu</p>
                <p className="text-sm text-muted-foreground">Institute of African Studies, University of Ghana</p>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  <Users className="h-4 w-4" />
                  CHAIRPERSON
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">Prof. Deborah Atobrah</p>
              </div>
            </div>
          </div>

          {/* Participation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">How to Participate</h2>
            <p className="leading-relaxed text-muted-foreground">
              This event welcomes the University of Ghana community and the general public. You can attend either in person at the venue or participate virtually.
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-sm font-semibold text-muted-foreground uppercase">Virtual Link</p>
                <a
                  href="https://tinyurl.com/yxmsc8nh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-secondary/80 transition-colors break-all"
                >
                  https://tinyurl.com/yxmsc8nh
                </a>
              </div>
            </div>
          </div>

          {/* Theme Context */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Day of Scientific Renaissance of Africa 2025</h2>
            <p className="leading-relaxed text-muted-foreground">
              The Day of Scientific Renaissance of Africa (DSRA) is a continental celebration that recognizes and promotes Africa's scientific heritage and contemporary contributions to global knowledge systems. The Institute of African Studies joins this celebration with a series of academic events highlighting Africa's intellectual traditions and innovative solutions to contemporary challenges.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
