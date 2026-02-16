import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { products, getProductBySlug } from "@/lib/products"
import { Navbar } from "@/components/jewellery/navbar"
import { JewelleryFooter } from "@/components/jewellery/footer"
import { WhatsAppAppointment } from "@/components/jewellery/whatsapp-appointment"

// Generate all product pages at build time
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Product Not Found" }

  return {
    title: `${product.name} — ${product.priceRange}`,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-1.5 text-xs text-[#71706e]">
          <Link href="/" className="hover:text-[#b8860b] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-[#b8860b] transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/products?category=${product.category}`} className="hover:text-[#b8860b] transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>
      </div>

      {/* Product content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Product Image */}
          <div>
            <div className={`aspect-square bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#b8860b] text-white text-[10px] tracking-[0.15em] uppercase px-4 py-1.5 z-10">
                  {product.badge}
                </span>
              )}
              {/* Decorative placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 border-[#b8860b]/25" />
                  <div className="absolute inset-6 sm:inset-8 rounded-full border border-[#b8860b]/15" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rotate-45 border border-[#b8860b]/30 bg-white/20 backdrop-blur-sm" />
                </div>
              </div>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-4 gap-3 mt-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`aspect-square bg-gradient-to-br ${product.gradient} border-2 ${i === 0 ? "border-[#b8860b]" : "border-transparent hover:border-[#e8e3dc]"} cursor-pointer transition-colors`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-[#b8860b]/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product Info & Appointment */}
          <div>
            {/* Category */}
            <p className="text-xs tracking-[0.25em] uppercase text-[#b8860b] mb-2">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mb-3">
              {product.name}
            </h1>

            {/* Price range */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl text-[#b8860b]">
                {product.priceRange}
              </span>
              <span className="text-xs text-[#71706e] bg-[#faf6f0] px-2 py-1 tracking-wide uppercase">
                {product.material}
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#e8e3dc] mb-6" />

            {/* Description */}
            <p className="text-[#71706e] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Details */}
            <div className="mb-8">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a] font-medium mb-3">
                Details
              </h3>
              <ul className="space-y-2">
                {product.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-[#71706e]">
                    <span className="w-1 h-1 bg-[#b8860b] rounded-full mt-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weight */}
            <div className="flex items-center gap-6 mb-8 text-sm">
              <div>
                <span className="text-[#71706e]">Weight: </span>
                <span className="text-[#1a1a1a] font-medium">{product.weight}</span>
              </div>
              <div className="w-px h-4 bg-[#e8e3dc]" />
              <div>
                <span className="text-[#71706e]">Material: </span>
                <span className="text-[#1a1a1a] font-medium">{product.material}</span>
              </div>
            </div>

            {/* WhatsApp Appointment */}
            <WhatsAppAppointment product={product} allProducts={products} />

            {/* Back link */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.15em] uppercase text-[#71706e] hover:text-[#b8860b] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Products
            </Link>
          </div>
        </div>
      </section>

      <JewelleryFooter />
    </main>
  )
}
