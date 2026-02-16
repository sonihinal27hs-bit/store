"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ChevronRight } from "lucide-react"
import { products, categories } from "@/lib/products"
import { Navbar } from "@/components/jewellery/navbar"
import { JewelleryFooter } from "@/components/jewellery/footer"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-1.5 text-xs text-[#71706e]">
          <Link href="/" className="hover:text-[#b8860b] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1a1a1a]">Shop</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">
            Our Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a]">
            Shop All Pieces
          </h1>
          <div className="w-12 h-px bg-[#b8860b] mx-auto mt-6" />
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-[#1a1a1a] text-white"
                  : "border border-[#e8e3dc] text-[#71706e] hover:border-[#b8860b] hover:text-[#b8860b]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filtered.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group"
            >
              {/* Image */}
              <div className={`relative aspect-square bg-gradient-to-br ${product.gradient} overflow-hidden mb-4`}>
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#b8860b] text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1 z-10">
                    {product.badge}
                  </span>
                )}
                {/* Decorative placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#b8860b]/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute w-8 h-8 sm:w-10 sm:h-10 rotate-45 border border-[#b8860b]/15" />
                </div>

                {/* Wishlist icon */}
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
                  className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-[#b8860b] hover:text-white transition-all duration-300"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-4 h-4" />
                </button>
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
      </section>

      <JewelleryFooter />
    </main>
  )
}
