"use client"

import { useState } from "react"
import { SERVICE_CITIES } from "@/lib/waterproofing-data"
import { MapPin, ChevronDown, ChevronUp } from "lucide-react"

export function ServiceAreasSection() {
  const [expandedCity, setExpandedCity] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedCities = showAll ? SERVICE_CITIES : SERVICE_CITIES.slice(0, 12)

  return (
    <section id="areas" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider mb-2 text-sm">Service Coverage</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Serve 35+ Cities Near Vadodara
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional waterproofing services available within 200 km of Vadodara — from Surat to Ahmedabad and everywhere in between.
          </p>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedCities.map((city, index) => (
            <div
              key={index}
              className="border border-blue-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50/50 to-white"
            >
              <button
                onClick={() => setExpandedCity(expandedCity === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">{city.name}</p>
                    <p className="text-xs text-gray-500">{city.areas.length} service areas</p>
                  </div>
                </div>
                {expandedCity === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expandedCity === index && (
                <div className="px-4 pb-4 border-t border-blue-50">
                  <div className="flex flex-wrap gap-2 mt-3">
                    {city.areas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More / Less */}
        {SERVICE_CITIES.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors"
            >
              {showAll ? "Show Less" : `Show All ${SERVICE_CITIES.length} Cities`}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* SEO Text */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Waterproofing Services Across Gujarat
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            We provide professional waterproofing services in <strong>Vadodara (Baroda)</strong>, <strong>Ahmedabad</strong>, <strong>Surat</strong>, <strong>Anand</strong>, <strong>Nadiad</strong>, <strong>Bharuch</strong>, <strong>Ankleshwar</strong>, <strong>Godhra</strong>, <strong>Halol</strong>, <strong>Gandhinagar</strong>, <strong>Mehsana</strong>, <strong>Kheda</strong>, <strong>Cambay (Khambhat)</strong>, <strong>Navsari</strong>, <strong>Valsad</strong>, <strong>Dahod</strong>, <strong>Chhota Udaipur</strong>, <strong>Rajpipla</strong>, <strong>Dabhoi</strong>, <strong>Padra</strong>, <strong>Karjan</strong>, <strong>Savli</strong>, <strong>Waghodia</strong>, <strong>Sanand</strong>, <strong>Kalol</strong>, <strong>Petlad</strong>, <strong>Umreth</strong>, <strong>Borsad</strong>, <strong>Dholka</strong>, <strong>Himmatnagar</strong>, <strong>Modasa</strong>, <strong>Patan</strong>, <strong>Bardoli</strong>, <strong>Vapi</strong>, <strong>Silvassa</strong>, <strong>Daman</strong>, <strong>Jambusar</strong>, and <strong>Dahej</strong>.
            Our services include terrace waterproofing, roof waterproofing, basement waterproofing, bathroom waterproofing, wall waterproofing, injection grouting, dampness treatment, and seepage solutions. We use premium brands like Dr Fixit, STP, Fosroc, BASF, and Sika. Call us for a free site inspection and consultation!
          </p>
        </div>
      </div>
    </section>
  )
}
