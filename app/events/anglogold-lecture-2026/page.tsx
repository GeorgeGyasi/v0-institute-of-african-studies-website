import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Clock, ArrowLeft, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "AngloGold Ashanti Distinguished Lecture 2026",
  description:
    "Professor Achille Mbembe delivers the 2026 AngloGold Ashanti Lecture on Planetary Futures.",
}

export default function AngloGoldLecture2026Page() {
  return (
    <>
      <PageHeader
        title="AngloGold Ashanti Distinguished Lecture"
        subtitle="April 10, 2026"
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/events"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>

          <div className="relative mb-10 aspect-[2/1] overflow-hidden rounded-xl">
            <Image
              src="/images/event-4.jpg"
              alt="AngloGold Ashanti Distinguished Lecture Series"
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-4">
            {[
              { icon: Calendar, label: "April 10, 2026" },
              { icon: Clock, label: "3:00 PM - 5:00 PM" },
              { icon: MapPin, label: "Great Hall, University of Ghana" },
              { icon: BookOpen, label: "Open to the public" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              {"Planetary Futures: Africa and the Politics of the Living"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The Institute of African Studies is honoured to present Professor
              Achille Mbembe as the 2026 AngloGold Ashanti Distinguished
              Lecturer. One of the most influential thinkers of our time,
              Professor Mbembe will deliver a groundbreaking lecture exploring
              Africa{"'"}s role in shaping planetary futures, examining the
              intersections of ecology, technology, and African philosophical
              thought.
            </p>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              About the Speaker
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Achille Mbembe is a Cameroonian philosopher, political theorist,
              and public intellectual based at the Wits Institute for Social and
              Economic Research (WISER) at the University of the Witwatersrand,
              Johannesburg. He is the author of several seminal works including
              {" "}<em>Necropolitics</em>, <em>Critique of Black Reason</em>, and{" "}
              <em>Out of the Dark Night</em>. His work bridges African studies,
              postcolonial theory, and critical philosophy.
            </p>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              About the Lecture Series
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The AngloGold Ashanti Distinguished Lecture Series, established
              through a partnership with AngloGold Ashanti Ltd, brings
              world-renowned scholars and public intellectuals to the University
              of Ghana to address topics of continental and global significance.
              Past lecturers have included leading voices from across Africa and
              the diaspora.
            </p>

            <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
              Attendance
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This lecture is free and open to the public. The Great Hall seats
              1,500 and doors open at 2:30 PM. The lecture will also be
              livestreamed on the University of Ghana YouTube channel.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/publications/anglogold-ashanti-lectures"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Past Lectures in the Series
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
