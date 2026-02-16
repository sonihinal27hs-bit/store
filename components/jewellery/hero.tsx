import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-[#faf6f0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[85vh]">
          {/* Text */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-0 order-2 lg:order-1">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-6 fade-in">
                Spring/Summer 2026
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-[#1a1a1a] mb-6 fade-in" style={{ animationDelay: "0.1s" }}>
                Timeless
                <br />
                <span className="italic text-[#b8860b]">Elegance</span>
              </h1>
              <p className="text-[#71706e] text-base sm:text-lg leading-relaxed mb-10 max-w-md fade-in" style={{ animationDelay: "0.2s" }}>
                Discover handcrafted jewellery that tells your story. Each piece is a celebration of artistry, designed to be cherished for generations.
              </p>
              <div className="flex flex-wrap gap-4 fade-in" style={{ animationDelay: "0.3s" }}>
                <Link
                  href="#collections"
                  className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#b8860b] transition-colors duration-300"
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#new-in"
                  className="inline-flex items-center gap-2 border border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:border-[#b8860b] hover:text-[#b8860b] transition-colors duration-300"
                >
                  New Arrivals
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5e6cc] via-[#e8d5b8] to-[#d4c4a8]">
              {/* Decorative jewellery silhouette placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Ring shape */}
                  <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-[3px] border-[#b8860b]/40" />
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full border border-[#b8860b]/20" />
                  {/* Diamond shape */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rotate-45 border-2 border-[#b8860b]/60 bg-white/30 backdrop-blur-sm" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rotate-45 bg-[#b8860b]/20" />
                </div>
              </div>
              {/* Subtle sparkle dots */}
              <div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-[#b8860b]/50 rounded-full" />
              <div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-[#d4af37]/60 rounded-full" />
              <div className="absolute top-[40%] left-[15%] w-2 h-2 bg-[#b8860b]/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
