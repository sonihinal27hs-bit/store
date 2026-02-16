export function BrandStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#f5e6cc] via-[#e8d5b8] to-[#d4c4a8] relative overflow-hidden">
              {/* Decorative goldsmith elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-6 text-center opacity-40">
                  <div className="w-32 h-px bg-[#b8860b] mx-auto" />
                  <div className="w-16 h-16 rounded-full border border-[#b8860b]/50 mx-auto" />
                  <div className="w-32 h-px bg-[#b8860b] mx-auto" />
                </div>
              </div>
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#b8860b]/20 -z-10" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
              Crafted With
              <br />
              <span className="italic text-[#b8860b]">Passion</span>
            </h2>
            <div className="w-12 h-px bg-[#b8860b] mb-8" />
            <p className="text-[#71706e] leading-relaxed mb-6">
              Since 2010, Shree Ganesh Jewellers has been creating jewellery that transcends trends. Each piece is meticulously handcrafted by our master artisans using ethically sourced materials and conflict-free gemstones.
            </p>
            <p className="text-[#71706e] leading-relaxed mb-10">
              From our atelier to your jewellery box, every creation carries the warmth of human hands and a dedication to perfection that machines simply cannot replicate.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#e8e3dc]">
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#b8860b]">15+</p>
                <p className="text-xs tracking-[0.1em] uppercase text-[#71706e] mt-1">Years</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#b8860b]">2K+</p>
                <p className="text-xs tracking-[0.1em] uppercase text-[#71706e] mt-1">Designs</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#b8860b]">50K+</p>
                <p className="text-xs tracking-[0.1em] uppercase text-[#71706e] mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
