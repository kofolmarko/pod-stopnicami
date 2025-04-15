import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroAnimation from "@/components/hero-animation"

export default function HeroSection() {
    return (
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                        Rethinking Spaces.<br />
                        <span className="text-blue-800">Rebuilding Peace.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-700 max-w-lg">
                        We transform school environments to reduce violence through thoughtful design and modern technology integration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-6 text-lg rounded-lg group">
                            Start Your Free Preview
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                    <HeroAnimation />
                </div>
            </div>
        </section>
    )
}
