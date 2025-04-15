"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroAnimation() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/placeholder.svg?height=500&width=600",
    "/placeholder.svg?height=500&width=600",
    "/placeholder.svg?height=500&width=600",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`School environment ${index + 1}`}
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent rounded-xl" />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent text-white rounded-b-xl">
        <h3 className="text-xl font-medium mb-2">Peaceful Learning Environments</h3>
        <p className="text-sm text-slate-200">Thoughtful design creates spaces where students can thrive</p>
      </div>
    </div>
  )
}
