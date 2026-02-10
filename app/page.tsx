import { HeroSection } from "@/components/home/hero-section"
import { MissionSection } from "@/components/home/mission-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { EventsShowcase } from "@/components/home/events-showcase"
import { CallToAction } from "@/components/home/call-to-action"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <HighlightsSection />
      <EventsShowcase />
      <CallToAction />
    </>
  )
}
