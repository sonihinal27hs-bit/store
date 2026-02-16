import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function JewelleryFooter() {
  return (
    <footer className="bg-white border-t border-[#e8e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-xl tracking-[0.06em] text-[#1a1a1a] leading-tight">
              <span className="block">SHREE GANESH</span>
              <span className="block text-xs tracking-[0.2em] text-[#b8860b]">JEWELLERS</span>
            </Link>
            <p className="text-sm text-[#71706e] mt-4 leading-relaxed max-w-xs">
              Handcrafted fine jewellery that celebrates your most precious moments.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-[#71706e] hover:text-[#b8860b] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#71706e] hover:text-[#b8860b] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#71706e] hover:text-[#b8860b] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a] font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              {["Rings", "Necklaces", "Earrings", "Bracelets", "Gift Cards"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#71706e] hover:text-[#b8860b] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a] font-medium mb-4">About</h4>
            <ul className="space-y-3">
              {["Our Story", "Craftsmanship", "Sustainability", "Press", "Careers"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#71706e] hover:text-[#b8860b] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a] font-medium mb-4">Help</h4>
            <ul className="space-y-3">
              {["Contact Us", "Shipping", "Returns", "Size Guide", "FAQs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#71706e] hover:text-[#b8860b] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e8e3dc] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#71706e]">
            © 2026 Shree Ganesh Jewellers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[#71706e] hover:text-[#b8860b] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[#71706e] hover:text-[#b8860b] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
