import Link from "next/link"

const collections = [
  {
    title: "Celestial",
    subtitle: "Inspired by the stars",
    gradient: "from-[#f5e6cc] to-[#e8d5b8]",
    accent: "bg-[#b8860b]/10",
  },
  {
    title: "Heritage",
    subtitle: "Timeless traditions",
    gradient: "from-[#e8e3dc] to-[#d4c4a8]",
    accent: "bg-[#d4af37]/10",
  },
  {
    title: "Minimal",
    subtitle: "Everyday luxury",
    gradient: "from-[#faf6f0] to-[#f0e8dc]",
    accent: "bg-[#8b7355]/10",
  },
]

export function Collections() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a]">
            Our Collections
          </h2>
          <div className="w-12 h-px bg-[#b8860b] mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((col) => (
            <Link
              key={col.title}
              href="#products"
              className="group relative overflow-hidden"
            >
              {/* Placeholder image area */}
              <div className={`aspect-[3/4] bg-gradient-to-b ${col.gradient} relative`}>
                <div className={`absolute inset-0 ${col.accent} group-hover:bg-[#b8860b]/5 transition-colors duration-500`} />
                {/* Decorative element */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <div className="w-20 h-20 rounded-full border border-[#b8860b]/40" />
                </div>
              </div>
              {/* Label */}
              <div className="py-6 text-center">
                <h3 className="font-serif text-xl lg:text-2xl text-[#1a1a1a] group-hover:text-[#b8860b] transition-colors">
                  {col.title}
                </h3>
                <p className="text-sm text-[#71706e] mt-1">{col.subtitle}</p>
                <span className="inline-block mt-3 text-xs tracking-[0.2em] uppercase text-[#b8860b] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
