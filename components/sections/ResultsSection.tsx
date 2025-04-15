import TestimonialCarousel from "@/components/testimonial-carousel"

export default function ResultsSection() {
    return (
        <section id="results" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What School Leaders Say</h2>
                    <p className="text-lg text-slate-700">
                        Hear from principals who’ve worked with us.
                    </p>
                </div>
                <TestimonialCarousel />
                <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
                    <div className="p-6 bg-slate-50 rounded-xl shadow-md">
                        <div className="text-4xl font-bold text-blue-800 mb-2">47%</div>
                        <p className="text-slate-700">Average reduction in conflicts</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl shadow-md">
                        <div className="text-4xl font-bold text-blue-800 mb-2">32</div>
                        <p className="text-slate-700">Schools transformed</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl shadow-md">
                        <div className="text-4xl font-bold text-blue-800 mb-2">94%</div>
                        <p className="text-slate-700">Satisfaction rate</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
