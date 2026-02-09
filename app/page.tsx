import { HeroSection } from "@/components/home/hero-section"
import { MissionSection } from "@/components/home/mission-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { NewsSection } from "@/components/home/news-section"
import { CallToAction } from "@/components/home/call-to-action"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <HighlightsSection />
      <NewsSection />
      <CallToAction />
    </>
  )
}
