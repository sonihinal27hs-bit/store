import Link from "next/link"

export function SplitBanner() {
  return (
    <section id="new-in" className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Left — New Arrivals */}
        <div className="relative group overflow-hidden">
          <div className="aspect-video lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
            {/* Gold sparkle accents */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-[#b8860b]/30" />
              <div className="absolute w-48 h-48 rounded-full border border-[#b8860b]/15" />
              <div className="absolute w-4 h-4 rotate-45 bg-[#b8860b]/40 top-[30%] right-[30%]" />
              <div className="absolute w-2 h-2 rotate-45 bg-[#d4af37]/30 bottom-[25%] left-[25%]" />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 text-[#d4af37]">Just Landed</p>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-center mb-6">New Arrivals</h3>
            <Link
              href="#products"
              className="border border-white/40 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300"
            >
              Discover
            </Link>
          </div>
        </div>

        {/* Right — Bestsellers */}
        <div className="relative group overflow-hidden">
          <div className="aspect-video lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-[#f5e6cc] via-[#faf6f0] to-[#f5e6cc]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-[#b8860b]/25" />
              <div className="absolute w-16 h-16 rounded-full border border-[#b8860b]/15" />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 text-[#b8860b]">Most Loved</p>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-center text-[#1a1a1a] mb-6">Bestsellers</h3>
            <Link
              href="#products"
              className="border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
