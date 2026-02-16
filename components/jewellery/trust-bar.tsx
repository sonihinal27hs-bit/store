import { Gem, Truck, ShieldCheck, RotateCcw } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Ethically Sourced",
    description: "Conflict-free gemstones & recycled metals",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary insured delivery over ₹5,000",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    description: "Every piece guaranteed for a lifetime",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Hassle-free returns & exchanges",
  },
]

export function TrustBar() {
  return (
    <section className="py-16 bg-white border-y border-[#e8e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-[#e8e3dc] group-hover:border-[#b8860b] transition-colors duration-300">
                <f.icon className="w-5 h-5 text-[#b8860b]" />
              </div>
              <h4 className="text-sm font-medium tracking-wide text-[#1a1a1a] mb-1">
                {f.title}
              </h4>
              <p className="text-xs text-[#71706e]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
