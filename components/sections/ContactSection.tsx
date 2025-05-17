"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building, Loader2, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      setIsSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Napaka pri pošiljanju sporočila.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="bg-neutral-900 p-8 rounded-xl border border-white/10 shadow-md">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Ime in priimek
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Vaše ime"
                required
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                E-pošta
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vas@email.si"
                required
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                Sporočilo
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Kako vam lahko pomagamo?"
                required
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                disabled={isSubmitting}
              ></textarea>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-700 hover:bg-blue-800 text-white transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                  Pošiljanje...
                </>
              ) : (
                "Pošlji sporočilo"
              )}
            </Button>

            {isSent && (
              <p className="mt-4 text-sm text-green-500">
                Sporočilo je bilo uspešno poslano!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
