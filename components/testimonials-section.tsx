"use client"

import { TESTIMONIALS } from "@/lib/waterproofing-data"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider mb-2 text-sm">Customer Reviews</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted by 500+ homeowners and businesses across Vadodara, Ahmedabad, Surat, and nearby cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
