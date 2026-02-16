import Link from "next/link"
import Image from "next/image"

const collections = [
  {
    title: "Celestial",
    subtitle: "Inspired by the stars",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
  },
  {
    title: "Heritage",
    subtitle: "Timeless traditions",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
  },
  {
    title: "Minimal",
    subtitle: "Everyday luxury",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
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
              {/* Collection image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={col.image}
                  alt={`${col.title} collection`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
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
