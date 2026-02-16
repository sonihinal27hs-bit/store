"use client"

import { useState } from "react"
import { Calendar, MessageCircle, User, Phone, Send } from "lucide-react"
import type { Product } from "@/lib/products"

interface WhatsAppAppointmentProps {
  product: Product
  allProducts: Product[]
}

export function WhatsAppAppointment({ product, allProducts }: WhatsAppAppointmentProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(product.slug)
  const [submitted, setSubmitted] = useState(false)

  // Get the currently selected product object
  const currentProduct = allProducts.find((p) => p.slug === selectedProduct) || product

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the WhatsApp message
    const message = [
      `*--- Appointment Request ---*`,
      `*Shree Ganesh Jewellers*`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Preferred Date:* ${date}`,
      ``,
      `*Product:* ${currentProduct.name}`,
      `*Category:* ${currentProduct.category}`,
      `*Price Range:* ${currentProduct.priceRange}`,
      `*Material:* ${currentProduct.material}`,
      ``,
      `I would like to book a store appointment to view this piece. Please confirm my slot. Thank you!`,
    ].join("\n")

    // WhatsApp API URL
    const whatsappNumber = "919586875486"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")
    setSubmitted(true)
  }

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split("T")[0]

  return (
    <div className="bg-[#faf6f0] border border-[#e8e3dc] p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-serif text-lg text-[#1a1a1a]">Book an Appointment</h3>
          <p className="text-xs text-[#71706e]">Visit our store to see this piece in person</p>
        </div>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-14 h-14 bg-[#25d366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-7 h-7 text-[#25d366]" />
          </div>
          <p className="font-serif text-lg text-[#1a1a1a] mb-2">Request Sent!</p>
          <p className="text-sm text-[#71706e] mb-6">
            We&apos;ll confirm your appointment on WhatsApp shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs tracking-[0.15em] uppercase text-[#b8860b] hover:underline"
          >
            Book Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs tracking-[0.1em] uppercase text-[#71706e] mb-1.5">
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b8860b]" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="w-full bg-white border border-[#e8e3dc] pl-10 pr-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#b0ada8] focus:outline-none focus:border-[#b8860b] transition-colors"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs tracking-[0.1em] uppercase text-[#71706e] mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b8860b]" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+91 98765 43210"
                className="w-full bg-white border border-[#e8e3dc] pl-10 pr-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#b0ada8] focus:outline-none focus:border-[#b8860b] transition-colors"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs tracking-[0.1em] uppercase text-[#71706e] mb-1.5">
              Preferred Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b8860b]" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min={minDate}
                className="w-full bg-white border border-[#e8e3dc] pl-10 pr-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8860b] transition-colors"
              />
            </div>
          </div>

          {/* Product selector — auto-selected */}
          <div>
            <label className="block text-xs tracking-[0.1em] uppercase text-[#71706e] mb-1.5">
              Product
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full bg-white border border-[#e8e3dc] px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#b8860b] transition-colors appearance-none cursor-pointer"
            >
              {allProducts.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} — {p.priceRange}
                </option>
              ))}
            </select>
          </div>

          {/* Selected product price range highlight */}
          <div className="bg-white border border-[#e8e3dc] p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-[#71706e] uppercase tracking-wide">Price Range</p>
              <p className="font-serif text-lg text-[#b8860b] mt-0.5">{currentProduct.priceRange}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#71706e] uppercase tracking-wide">Material</p>
              <p className="text-sm text-[#1a1a1a] mt-0.5">{currentProduct.material}</p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#25d366] text-white py-4 text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#20bd5a] transition-colors duration-300"
          >
            <Send className="w-4 h-4" />
            Book on WhatsApp
          </button>

          <p className="text-[11px] text-center text-[#b0ada8]">
            You&apos;ll be redirected to WhatsApp to confirm your appointment
          </p>
        </form>
      )}
    </div>
  )
}
