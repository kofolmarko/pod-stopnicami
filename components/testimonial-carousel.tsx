"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Maja Novak",
    role: "Ravnateljica, OŠ Bežigrad",
    quote:
      "Ko so se hodniki preoblikovali, so se preoblikovali tudi odnosi. Učenci se umirijo že ob vstopu v šolo.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Luka Kovač",
    role: "Svetovalec, Šolski center Maribor",
    quote:
      "Nismo pričakovali, da lahko prostor tako močno vpliva na dinamiko med učenci. Rešitve so smiselne in preproste.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Ana Horvat",
    role: "Pomočnica ravnatelja, OŠ Koper",
    quote:
      "Najbolj nas je navdušila vpeljava tehnologije v garderobne prostore – zdaj je manj zadrževanja, več reda.",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => next(), 8000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-4 py-8"
            >
              <div className="rounded-2xl bg-neutral-900 border border-white/10 p-6 sm:p-8 shadow-lg transition duration-300">
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-4 border border-white/10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                  <Quote className="ml-auto h-6 w-6 sm:h-8 sm:w-8 text-blue-500 opacity-40" />
                </div>
                <p className="text-neutral-200 italic text-base sm:text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label="Prejšnje mnenje"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label="Naslednje mnenje"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-blue-500" : "bg-neutral-600"
            }`}
            aria-label={`Pojdi na mnenje ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
