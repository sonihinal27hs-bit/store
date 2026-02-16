"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Droplets, Facebook, Instagram, Linkedin, ChevronDown, ChevronUp, MessageCircle } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/waterproofing-data"
import { VADODARA_AREAS, NEARBY_CITIES, KEYWORD_SERVICES } from "@/lib/page-data"

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

function FooterLinkSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="border-b border-white/10 pb-4 mb-4 last:border-0">
      <button onClick={() => setExpanded(!expanded)} className="flex items-center justify-between w-full text-left mb-2 md:pointer-events-none">
        <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider">{title}</h4>
        <span className="md:hidden">{expanded ? <ChevronUp className="w-4 h-4 text-white/50" /> : <ChevronDown className="w-4 h-4 text-white/50" />}</span>
      </button>
      <div className={`${expanded ? "block" : "hidden"} md:block`}>
        {children}
      </div>
    </div>
  )
}

export function Footer() {
  const mainServices = KEYWORD_SERVICES.slice(0, 20)
  const moreServices = KEYWORD_SERVICES.slice(20)
  const mainCities = NEARBY_CITIES.slice(0, 20)
  const moreCities = NEARBY_CITIES.slice(20)
  const mainAreas = VADODARA_AREAS.slice(0, 22)
  const moreAreas = VADODARA_AREAS.slice(22)

  return (
    <footer className="bg-gray-950 text-white">
      {/* Mega Footer - Internal Links */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 py-8 md:py-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Waterproofing Services Across Gujarat</h3>
            <p className="text-white/50 text-sm">Explore our services in 35+ cities and 40+ areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vadodara Areas */}
            <FooterLinkSection title="Waterproofing in Vadodara Areas">
              <div className="flex flex-wrap gap-1.5">
                <Link href="/waterproofing-in-vadodara" className="text-xs text-white/60 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 rounded px-2 py-1">
                  Vadodara
                </Link>
                {mainAreas.map((area) => (
                  <Link key={area} href={`/waterproofing-in-${slugify(area)}`} className="text-xs text-white/60 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 rounded px-2 py-1">
                    {area}
                  </Link>
                ))}
                {moreAreas.map((area) => (
                  <Link key={area} href={`/waterproofing-in-${slugify(area)}`} className="text-xs text-white/60 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 rounded px-2 py-1">
                    {area}
                  </Link>
                ))}
              </div>
            </FooterLinkSection>

            {/* Cities */}
            <FooterLinkSection title="Waterproofing in Cities">
              <div className="flex flex-wrap gap-1.5">
                {mainCities.map((city) => (
                  <Link key={city.slug} href={`/waterproofing-in-${city.slug}`} className="text-xs text-white/60 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 rounded px-2 py-1">
                    {city.name}
                  </Link>
                ))}
                {moreCities.map((city) => (
                  <Link key={city.slug} href={`/waterproofing-in-${city.slug}`} className="text-xs text-white/60 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 rounded px-2 py-1">
                    {city.name}
                  </Link>
                ))}
              </div>
            </FooterLinkSection>

            {/* Services */}
            <FooterLinkSection title="Our Waterproofing Services">
              <div className="flex flex-wrap gap-1.5">
                {mainServices.map((svc) => (
                  <Link key={svc.slug} href={`/${svc.slug}-vadodara`} className="text-xs text-white/60 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 rounded px-2 py-1">
                    {svc.icon} {svc.name}
                  </Link>
                ))}
                {moreServices.map((svc) => (
                  <Link key={svc.slug} href={`/${svc.slug}-vadodara`} className="text-xs text-white/60 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 rounded px-2 py-1">
                    {svc.icon} {svc.name}
                  </Link>
                ))}
              </div>
            </FooterLinkSection>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-3 sm:px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-blue-700">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">{BUSINESS_INFO.name}</h3>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Professional waterproofing services in Vadodara &amp; 35+ cities across Gujarat. Terrace, roof, basement, bathroom waterproofing with 10-year warranty and free inspection.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-cyan-300 transition-colors">Home</Link></li>
              <li><Link href="/waterproofing-in-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Vadodara Waterproofing</Link></li>
              <li><Link href="/terrace-waterproofing-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Terrace Waterproofing</Link></li>
              <li><Link href="/roof-waterproofing-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Roof Waterproofing</Link></li>
              <li><Link href="/basement-waterproofing-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Basement Waterproofing</Link></li>
              <li><Link href="/bathroom-waterproofing-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Bathroom Waterproofing</Link></li>
              <li><Link href="/waterproofing-in-ahmedabad" className="text-white/70 hover:text-cyan-300 transition-colors">Ahmedabad Waterproofing</Link></li>
              <li><Link href="/waterproofing-in-surat" className="text-white/70 hover:text-cyan-300 transition-colors">Surat Waterproofing</Link></li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Popular Services</h4>
            <ul className="space-y-3">
              <li><Link href="/injection-grouting-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Injection Grouting</Link></li>
              <li><Link href="/dampness-treatment-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Dampness Treatment</Link></li>
              <li><Link href="/water-leakage-repair-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Water Leakage Repair</Link></li>
              <li><Link href="/seepage-treatment-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Seepage Treatment</Link></li>
              <li><Link href="/crack-filling-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Crack Filling</Link></li>
              <li><Link href="/dr-fixit-waterproofing-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Dr Fixit Waterproofing</Link></li>
              <li><Link href="/bathroom-leakage-without-breaking-tiles-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Leakage Without Breaking Tiles</Link></li>
              <li><Link href="/waterproofing-near-me-vadodara" className="text-white/70 hover:text-cyan-300 transition-colors">Waterproofing Near Me</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <p className="text-white/70">Vadodara, Gujarat, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.displayPhone}`} className="text-white/70 hover:text-cyan-300 transition-colors">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-green-300 transition-colors">
                  WhatsApp: {BUSINESS_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white/70 hover:text-cyan-300 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-cyan-900/30 border border-cyan-800/40 rounded-lg">
              <p className="text-cyan-200 text-sm font-semibold">🕐 Working Hours</p>
              <p className="text-white/70 text-xs mt-1">Mon-Sat: 8:00 AM - 8:00 PM<br />Sun: Emergency Only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-3 sm:px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-xs text-center md:text-left">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. | {BUSINESS_INFO.domain}
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-white/50 hover:text-cyan-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-cyan-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-cyan-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
