"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4">
          Join The Inner Circle
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4">
          Be The First To Know
        </h2>
        <p className="text-white/60 text-sm sm:text-base mb-10 max-w-md mx-auto">
          Subscribe for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="fade-in">
            <p className="text-[#d4af37] font-serif text-lg">
              Thank you for joining us ✦
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#b8860b] text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#d4af37] transition-colors duration-300"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
