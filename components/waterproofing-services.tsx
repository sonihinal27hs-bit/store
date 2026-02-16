"use client"

import { WATERPROOFING_SERVICES } from "@/lib/waterproofing-data"

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider mb-2 text-sm">Our Expert Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Waterproofing Services We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From terrace to basement, we provide complete waterproofing solutions for residential & commercial properties in Vadodara and nearby cities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WATERPROOFING_SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-blue-100 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Benefits Strip */}
        <div className="mt-12 bg-blue-900 rounded-2xl p-6 md:p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-cyan-300">500+</p>
              <p className="text-sm text-white/80 mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-cyan-300">10</p>
              <p className="text-sm text-white/80 mt-1">Years Warranty</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-cyan-300">35+</p>
              <p className="text-sm text-white/80 mt-1">Cities Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-cyan-300">4.9★</p>
              <p className="text-sm text-white/80 mt-1">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
