import Link from "next/link"
import Image from "next/image"
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
            <Image
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80"
              alt="Luxury gold jewellery collection"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf6f0]/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
