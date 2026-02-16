import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Mehta",
    location: "Mumbai",
    text: "The craftsmanship is extraordinary. My Soleil ring catches light in the most beautiful way — I've received countless compliments.",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    location: "Delhi",
    text: "Shree Ganesh Jewellers' pieces are exactly what I was looking for — minimal, elegant, and made to last. The packaging is equally luxurious.",
    rating: 5,
  },
  {
    name: "Kavya Patel",
    location: "Ahmedabad",
    text: "I ordered the Luna pendant for my anniversary and it exceeded every expectation. The gold finish is absolutely gorgeous.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a]">
            What Our Clients Say
          </h2>
          <div className="w-12 h-px bg-[#b8860b] mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 lg:p-10 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b8860b] text-[#b8860b]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#71706e] leading-relaxed italic mb-8 text-sm sm:text-base">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="w-8 h-px bg-[#b8860b] mx-auto mb-4" />
              <p className="font-serif text-base text-[#1a1a1a]">{t.name}</p>
              <p className="text-xs text-[#71706e] tracking-wide mt-1">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
