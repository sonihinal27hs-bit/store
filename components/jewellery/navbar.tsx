"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: "New In", href: "/products" },
    { label: "Collections", href: "/#collections" },
    { label: "Rings", href: "/products?category=Rings" },
    { label: "Necklaces", href: "/products?category=Necklaces" },
    { label: "Earrings", href: "/products?category=Earrings" },
    { label: "Bracelets", href: "/products?category=Bracelets" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8e3dc]">
      {/* Top announcement bar */}
      <div className="bg-[#1a1a1a] text-white text-center text-xs tracking-[0.2em] uppercase py-2 px-4">
        Complimentary shipping on orders over ₹5,000
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Nav links — left */}
          <div className="hidden lg:flex items-center gap-8">
            {links.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-[#1a1a1a] gold-underline transition-colors hover:text-[#b8860b]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo — center */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:mx-auto">
            <span className="font-serif text-lg lg:text-xl tracking-[0.06em] text-[#1a1a1a] select-none leading-tight">
              <span className="block">SHREE GANESH</span>
              <span className="block text-[10px] lg:text-xs tracking-[0.25em] text-[#b8860b]">JEWELLERS</span>
            </span>
          </Link>

          {/* Nav links — right */}
          <div className="hidden lg:flex items-center gap-8">
            {links.slice(3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-[#1a1a1a] gold-underline transition-colors hover:text-[#b8860b]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-2 hover:text-[#b8860b] transition-colors">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button aria-label="Wishlist" className="p-2 hover:text-[#b8860b] transition-colors hidden sm:block">
              <Heart className="w-[18px] h-[18px]" />
            </button>
            <button aria-label="Account" className="p-2 hover:text-[#b8860b] transition-colors hidden sm:block">
              <User className="w-[18px] h-[18px]" />
            </button>
            <button aria-label="Cart" className="p-2 hover:text-[#b8860b] transition-colors relative">
              <ShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute -top-0.5 -right-0.5 bg-[#b8860b] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e3dc] animate-in slide-in-from-top-2">
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm tracking-[0.15em] uppercase text-[#1a1a1a] py-2 hover:text-[#b8860b] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
