import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const promotionalItems = [
  {
    title: "Graduate Programs",
    description: "Pursue advanced research in African Studies with our rigorous MPhil and PhD programs",
    image: "/images/promotion-1.jpg",
    link: "/academics",
  },
  {
    title: "Research Excellence",
    description: "Engage with cutting-edge interdisciplinary research led by renowned scholars",
    image: "/images/promotion-2.jpg",
    link: "/research",
  },
  {
    title: "Cultural Heritage",
    description: "Explore our extensive archival collections and cultural documentation initiatives",
    image: "/images/promotion-3.jpg",
    link: "/resources",
  },
]

export function PromotionalGallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Featured
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Explore Our Initiatives
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {promotionalItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="group relative overflow-hidden rounded-lg border border-border transition-all hover:shadow-lg hover:border-secondary"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-white/90">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-all group-hover:translate-x-1">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
