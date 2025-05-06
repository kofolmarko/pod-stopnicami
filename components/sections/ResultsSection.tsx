import TestimonialCarousel from "@/components/testimonial-carousel";

export default function ResultsSection() {
  return (
    <section id="partners" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kaj pravijo ravnatelji
          </h2>
          <p className="text-lg text-neutral-400">
            Izkušnje šol, ki so šle skozi naš proces.
          </p>
        </div>

        {/* Carousel */}
        <TestimonialCarousel />

        {/* Stats */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-md backdrop-blur-sm">
            <div className="text-5xl font-bold text-blue-500 mb-2">47%</div>
            <p className="text-neutral-300 text-base">
              Povprečno zmanjšanje konfliktov
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-md backdrop-blur-sm">
            <div className="text-5xl font-bold text-blue-500 mb-2">32</div>
            <p className="text-neutral-300 text-base">
              Vključenih osnovnih šol
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-md backdrop-blur-sm">
            <div className="text-5xl font-bold text-blue-500 mb-2">94%</div>
            <p className="text-neutral-300 text-base">
              Zadovoljstvo sodelujočih
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
