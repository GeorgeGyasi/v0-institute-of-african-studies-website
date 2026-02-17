import { HeroSection } from "@/components/home/hero-section"
import { MissionSection } from "@/components/home/mission-section"
import { PromotionalGallery } from "@/components/home/promotional-gallery"
import { PartnershipSection } from "@/components/home/partnership-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { SocialMediaBar } from "@/components/home/social-media-bar"
import { CallToAction } from "@/components/home/call-to-action"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <PromotionalGallery />
      <PartnershipSection />
      <HighlightsSection />
      <SocialMediaBar />
      <CallToAction />
    </>
  )
}
