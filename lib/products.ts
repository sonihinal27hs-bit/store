export interface Product {
  slug: string
  name: string
  category: string
  priceRange: string
  priceMin: number
  priceMax: number
  description: string
  details: string[]
  badge: string | null
  gradient: string
  material: string
  weight: string
}

export const products: Product[] = [
  {
    slug: "soleil-ring",
    name: "Soleil Ring",
    category: "Rings",
    priceRange: "₹10,000 – ₹15,000",
    priceMin: 10000,
    priceMax: 15000,
    description:
      "A radiant gold band inspired by the warmth of the sun. Handcrafted with a satin-polished finish, the Soleil Ring captures light beautifully from every angle.",
    details: [
      "22K yellow gold",
      "Satin & high-polish finish",
      "Comfort-fit band",
      "Available in sizes 5–12",
    ],
    badge: "New",
    gradient: "from-[#faf6f0] to-[#f5e6cc]",
    material: "22K Yellow Gold",
    weight: "4.2 gm",
  },
  {
    slug: "luna-pendant-necklace",
    name: "Luna Pendant Necklace",
    category: "Necklaces",
    priceRange: "₹16,000 – ₹22,000",
    priceMin: 16000,
    priceMax: 22000,
    description:
      "A crescent-shaped pendant suspended on a delicate chain. The Luna Necklace embodies quiet elegance — perfect for layering or wearing alone.",
    details: [
      "18K rose gold pendant",
      "Adjustable 16–18 inch chain",
      "Lobster clasp closure",
      "Gift box included",
    ],
    badge: null,
    gradient: "from-[#f0e8dc] to-[#e8d5b8]",
    material: "18K Rose Gold",
    weight: "5.8 gm",
  },
  {
    slug: "etoile-drop-earrings",
    name: "Étoile Drop Earrings",
    category: "Earrings",
    priceRange: "₹8,000 – ₹12,000",
    priceMin: 8000,
    priceMax: 12000,
    description:
      "Star-shaped drops that swing gently with each movement. Featuring micro-pavé-set stones that catch and scatter light like tiny constellations.",
    details: [
      "18K white gold",
      "CZ micro-pavé setting",
      "Push-back closure",
      "Hypoallergenic posts",
    ],
    badge: "Bestseller",
    gradient: "from-[#faf6f0] to-[#e8e3dc]",
    material: "18K White Gold",
    weight: "3.6 gm",
  },
  {
    slug: "serpentine-bracelet",
    name: "Serpentine Bracelet",
    category: "Bracelets",
    priceRange: "₹13,000 – ₹18,000",
    priceMin: 13000,
    priceMax: 18000,
    description:
      "A fluid, snake-chain bracelet that wraps the wrist with effortless grace. Its polished links create a mesmerising ripple of gold.",
    details: [
      "22K yellow gold",
      "Snake-chain link",
      "Fold-over clasp with safety",
      "Available in 3 lengths",
    ],
    badge: null,
    gradient: "from-[#f5e6cc] to-[#f0e8dc]",
    material: "22K Yellow Gold",
    weight: "8.1 gm",
  },
  {
    slug: "aria-diamond-studs",
    name: "Aria Diamond Studs",
    category: "Earrings",
    priceRange: "₹18,000 – ₹28,000",
    priceMin: 18000,
    priceMax: 28000,
    description:
      "Classic solitaire studs elevated with exceptional brilliance. Each stone is hand-selected for cut, clarity, and fire.",
    details: [
      "18K white gold four-prong setting",
      "0.25 ct each (0.50 ct total)",
      "VS clarity, G colour",
      "Screw-back for security",
    ],
    badge: "New",
    gradient: "from-[#e8e3dc] to-[#faf6f0]",
    material: "18K White Gold + Diamond",
    weight: "2.4 gm",
  },
  {
    slug: "riviere-chain",
    name: "Rivière Chain",
    category: "Necklaces",
    priceRange: "₹24,000 – ₹32,000",
    priceMin: 24000,
    priceMax: 32000,
    description:
      "A continuous line of bezel-set stones that sits flush against the collarbone. The Rivière Chain is understated luxury at its finest.",
    details: [
      "18K yellow gold bezels",
      "Lab-grown diamond accents",
      "16-inch with 2-inch extender",
      "Box clasp with figure-8 safety",
    ],
    badge: null,
    gradient: "from-[#f0e8dc] to-[#f5e6cc]",
    material: "18K Yellow Gold + Lab Diamond",
    weight: "9.3 gm",
  },
  {
    slug: "halo-engagement-ring",
    name: "Halo Engagement Ring",
    category: "Rings",
    priceRange: "₹38,000 – ₹55,000",
    priceMin: 38000,
    priceMax: 55000,
    description:
      "A show-stopping halo setting where a brilliant center stone is encircled by a delicate frame of pavé diamonds, maximising sparkle and presence.",
    details: [
      "18K white gold cathedral setting",
      "0.70 ct center stone",
      "0.30 ct halo & shoulders",
      "Comes with GIA certificate",
    ],
    badge: "Popular",
    gradient: "from-[#faf6f0] to-[#e8d5b8]",
    material: "18K White Gold + Diamond",
    weight: "4.8 gm",
  },
  {
    slug: "pearl-cuff-bracelet",
    name: "Pearl Cuff Bracelet",
    category: "Bracelets",
    priceRange: "₹9,000 – ₹14,000",
    priceMin: 9000,
    priceMax: 14000,
    description:
      "A modern open cuff bracelet adorned with a perfectly round freshwater pearl at each tip. Effortless sophistication for any occasion.",
    details: [
      "18K gold-plated sterling silver",
      "8mm freshwater pearls",
      "Adjustable open cuff",
      "Fits wrists 6–7.5 inches",
    ],
    badge: null,
    gradient: "from-[#e8e3dc] to-[#f5e6cc]",
    material: "18K Gold-Plated Silver + Pearl",
    weight: "12.5 gm",
  },
]

export const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"] as const

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter((p) => p.category === category)
}
