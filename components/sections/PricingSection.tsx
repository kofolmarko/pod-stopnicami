import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PricingSection() {
    return (
        <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Affordable Solutions</h2>
                    <p className="text-lg text-slate-700">
                        Choose the plan that fits your needs and budget.
                    </p>
                </div>
                <Tabs defaultValue="monthly" className="max-w-5xl mx-auto">
                    <TabsList className="grid w-[400px] max-w-full grid-cols-2 mx-auto mb-8">
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="annual">Annual (Save 15%)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="monthly">
                        {/* ... Use same pricing card structure here as in your original code ... */}
                    </TabsContent>

                    <TabsContent value="annual">
                        {/* ... Same cards as monthly but with discounted pricing ... */}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
