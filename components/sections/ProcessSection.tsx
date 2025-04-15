import { Upload, Star, ArrowUpRight } from "lucide-react"
import ProcessStep from "@/components/process-step"

export default function ProcessSection() {
    return (
        <section id="process" className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How It Works</h2>
                    <p className="text-lg text-slate-700">
                        Our streamlined process makes it easy to transform your school spaces.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <ProcessStep
                        number={1}
                        title="Upload Your Space"
                        description="Share photos of your school areas."
                        icon={<Upload className="h-6 w-6 text-blue-800" />}
                    />
                    <ProcessStep
                        number={2}
                        title="AI & Expert Analysis"
                        description="We analyze the environment using AI and human insight."
                        icon={<Star className="h-6 w-6 text-blue-800" />}
                    />
                    <ProcessStep
                        number={3}
                        title="Receive Your Redesign"
                        description="You’ll get visuals and a proposal with implementation steps."
                        icon={<ArrowUpRight className="h-6 w-6 text-blue-800" />}
                    />
                </div>
            </div>
        </section>
    )
}
