import { Button } from "@/components/ui/button"
import { Building, Mail, Phone } from "lucide-react"

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                        <p className="text-lg text-slate-700 mb-8">
                            Contact us to start redesigning your school space.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Building className="h-6 w-6 text-blue-800 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-slate-900">Address</h3>
                                    <p className="text-slate-700">Slovenska cesta 15, Ljubljana, Slovenia</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-blue-800 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-slate-900">Email</h3>
                                    <p className="text-slate-700">info@pod-stopnicami.si</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-blue-800 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-slate-900">Phone</h3>
                                    <p className="text-slate-700">+386 1 234 5678</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                required
                                className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                required
                                className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="How can we help?"
                                required
                                className="w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
                            ></textarea>
                        </div>
                        <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">Send Message</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
