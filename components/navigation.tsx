"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Droplets, MessageCircle } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled ? "bg-blue-800" : "bg-white/20"}`}>
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 block ${isScrolled ? "text-foreground" : "text-white"}`}>
                {BUSINESS_INFO.name}
              </span>
              <span className={`text-xs transition-colors duration-300 block ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Professional Waterproofing Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
              Home
            </Link>
            <Link href="/waterproofing-in-vadodara" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
              Vadodara
            </Link>
            <Link href="/terrace-waterproofing-vadodara" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
              Services
            </Link>
            <Link href="/waterproofing-in-ahmedabad" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
              Ahmedabad
            </Link>
            <Link href="/waterproofing-in-surat" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
              Surat
            </Link>
            <Button
              onClick={() => window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}`, "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 h-auto"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
            <Button
              onClick={() => window.open(`tel:${BUSINESS_INFO.displayPhone}`, "_self")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm px-4 py-2 h-auto"
            >
              <Phone className="w-4 h-4 mr-1" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 bg-white rounded-lg shadow-lg border border-border mt-2">
            <div className="flex flex-col gap-1">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md">
                Home
              </Link>
              <Link href="/waterproofing-in-vadodara" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md">
                Vadodara Waterproofing
              </Link>
              <Link href="/terrace-waterproofing-vadodara" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md">
                Terrace Waterproofing
              </Link>
              <Link href="/waterproofing-in-ahmedabad" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md">
                Ahmedabad
              </Link>
              <Link href="/waterproofing-in-surat" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md">
                Surat
              </Link>
              <div className="px-3 pt-2 flex gap-2">
                <Button
                  onClick={() => window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}`, "_blank")}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold flex-1 text-sm py-2 h-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
                </Button>
                <Button
                  onClick={() => window.open(`tel:${BUSINESS_INFO.displayPhone}`, "_self")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold flex-1 text-sm py-2 h-auto"
                >
                  <Phone className="w-4 h-4 mr-1" /> Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
