import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Institute of African Studies at the University of Ghana.",
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "Institute of African Studies\nUniversity of Ghana, Legon\nP.O. Box LG 73, Legon\nAccra, Ghana",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 (0) 302 500 397\n+233 (0) 302 500 398",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ias@ug.edu.gh\nresearch.ias@ug.edu.gh",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday - Friday\n8:00 AM - 5:00 PM GMT",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We welcome inquiries from researchers, students, and institutions"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
              Get in Touch
            </p>
            <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
              How to Reach Us
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex gap-4 rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {info.label}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex aspect-[2.5/1] items-center justify-center overflow-hidden rounded-lg bg-muted">
            <div className="text-center">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-primary" />
              <p className="text-sm font-semibold text-foreground">
                University of Ghana, Legon
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Greater Accra Region, Ghana
              </p>
              <a
                href="https://maps.google.com/?q=University+of+Ghana+Legon"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
