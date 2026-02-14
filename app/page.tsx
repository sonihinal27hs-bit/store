import { HeroSection } from "@/components/hero-section"
import { WhoIsThisForSection } from "@/components/who-is-this-for-section"
import { BenefitsSection } from "@/components/benefits-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { PricingSection } from "@/components/pricing-section"
import { WhyDifferentSection } from "@/components/why-different-section"
import { ResultsSection } from "@/components/results-section"
import { TrustSection } from "@/components/trust-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhoIsThisForSection />
      <BenefitsSection />
      <WhatWeDoSection />
      <PricingSection />
      <WhyDifferentSection />
      <ResultsSection />
      <TrustSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
