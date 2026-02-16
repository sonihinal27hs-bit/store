"use client"

import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { products } from "@/lib/products"

export function FeaturedProducts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="products" className="py-24 bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">
            Handcrafted With Love
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a]">
            Featured Pieces
          </h2>
          <div className="w-12 h-px bg-[#b8860b] mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, i) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group cursor-pointer block"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image placeholder */}
              <div className={`relative aspect-square bg-gradient-to-br ${product.gradient} overflow-hidden mb-4`}>
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#b8860b] text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1 z-10">
                    {product.badge}
                  </span>
                )}

                {/* Decorative jewellery placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#b8860b]/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute w-8 h-8 sm:w-10 sm:h-10 rotate-45 border border-[#b8860b]/15" />
                </div>

                {/* Hover actions */}
                <div className={`absolute inset-x-0 bottom-0 p-3 flex justify-center gap-2 transition-all duration-300 ${hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <button
                    aria-label="Add to wishlist"
                    className="bg-white/90 backdrop-blur-sm p-2.5 hover:bg-[#b8860b] hover:text-white transition-colors duration-200"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    aria-label="Add to cart"
                    className="bg-white/90 backdrop-blur-sm p-2.5 hover:bg-[#b8860b] hover:text-white transition-colors duration-200"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8860b] mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-sm sm:text-base text-[#1a1a1a] group-hover:text-[#b8860b] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-[#71706e] mt-1">
                  {product.priceRange}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-[#1a1a1a] text-[#1a1a1a] px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
