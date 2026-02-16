import { Navbar } from "@/components/jewellery/navbar"
import { Hero } from "@/components/jewellery/hero"
import { TrustBar } from "@/components/jewellery/trust-bar"
import { Collections } from "@/components/jewellery/collections"
import { FeaturedProducts } from "@/components/jewellery/featured-products"
import { SplitBanner } from "@/components/jewellery/split-banner"
import { BrandStory } from "@/components/jewellery/brand-story"
import { Testimonials } from "@/components/jewellery/testimonials"
import { Newsletter } from "@/components/jewellery/newsletter"
import { JewelleryFooter } from "@/components/jewellery/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Collections />
      <FeaturedProducts />
      <SplitBanner />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <JewelleryFooter />
    </main>
  )
}
