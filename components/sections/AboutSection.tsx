import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Star, CheckCircle } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Creating Safer School Environments</h2>
                    <p className="text-lg text-slate-700">
                        At pod-stopnicami, we believe that thoughtful design of physical spaces can significantly reduce conflict and promote peaceful interactions among students.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="bg-slate-50 border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Building className="h-6 w-6 text-blue-800" />
                            </div>
                            <CardTitle>Spatial Redesign</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700">
                                We analyze traffic flow, lighting, acoustics, and spatial arrangement to eliminate conflict-prone areas.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-50 border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Star className="h-6 w-6 text-blue-800" />
                            </div>
                            <CardTitle>Technology Integration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700">
                                Smart systems monitor noise, offer calming visuals, and support smoother transitions.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-50 border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle className="h-6 w-6 text-blue-800" />
                            </div>
                            <CardTitle>Proven Results</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-700">
                                Schools using our system report a 47% average reduction in conflict incidents.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
