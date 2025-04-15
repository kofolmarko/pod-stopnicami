"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Maja Novak",
    role: "Principal, Ljubljana Elementary",
    quote:
      "The transformation of our hallways has led to a 52% decrease in student conflicts. The pod-stopnicami team understood our needs perfectly and delivered solutions that were both beautiful and functional.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Luka Kovač",
    role: "Administrator, Maribor School District",
    quote:
      "We've implemented pod-stopnicami's designs in three of our schools, and the results have been remarkable. Teachers report calmer transitions between classes and more focused students.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Ana Horvat",
    role: "Vice Principal, Coastal Elementary",
    quote:
      "What impressed me most was how they integrated technology so seamlessly into the physical redesign. The smart lighting system has been particularly effective in our previously problematic areas.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg bg-slate-50">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900">{testimonial.name}</h3>
                      <p className="text-slate-600">{testimonial.role}</p>
                    </div>
                    <Quote className="ml-auto h-8 w-8 text-blue-200" />
                  </div>
                  <p className="text-slate-700 italic">{testimonial.quote}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-slate-700" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-slate-700" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full ${index === current ? "bg-blue-800" : "bg-slate-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
