"use client"

import { Button } from "@/components/ui/button"
import { Building, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stopite v stik</h2>
            <p className="text-lg text-neutral-400 mb-8">
              Skupaj lahko ustvarimo varnejše in prijetnejše šolske prostore.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Building className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-white">Naslov</h3>
                  <p className="text-neutral-400">Slovenska cesta 15, Ljubljana, Slovenija</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-white">E-pošta</h3>
                  <p className="text-neutral-400">info@pod-stopnicami.si</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-white">Telefon</h3>
                  <p className="text-neutral-400">+386 1 234 5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-neutral-900 p-8 rounded-xl border border-white/10 shadow-md">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Ime in priimek
              </label>
              <input
                type="text"
                id="name"
                placeholder="Vaše ime"
                required
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                E-pošta
              </label>
              <input
                type="email"
                id="email"
                placeholder="vas@email.si"
                required
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                Sporočilo
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Kako vam lahko pomagamo?"
                required
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
              ></textarea>
            </div>

            <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white transition">
              Pošlji sporočilo
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
