"use client"

import { useState } from "react"
import { WATERPROOFING_FAQS } from "@/lib/waterproofing-data"
import { ChevronDown, ChevronUp } from "lucide-react"

export function WaterproofingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider mb-2 text-sm">Common Questions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Waterproofing FAQ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Answers to frequently asked questions about waterproofing services in Vadodara and nearby cities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {WATERPROOFING_FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
