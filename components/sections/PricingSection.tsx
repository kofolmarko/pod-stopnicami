import {
    Card,
    CardTitle,
    CardDescription,
    CardSkeletonContainer,
  } from "@/components/cards-demo-3";
  import { Skeleton } from "@/components/ui/skeleton"; // Assuming this is reusable
  import { Button } from "@/components/ui/button"; // Optional CTA button
import { cn } from "@/lib/utils";
  
  export function PricingSection() {
    const plans = [
      {
        title: "Osnovni paket",
        description: "Za šole, ki želijo začeti z osnovno analizo in hitrim vpogledom.",
        price: "690€",
        features: [
          "Osnovna prostorska analiza",
          "Kratko poročilo",
          "1 sestanek z vodstvom",
        ],
      },
      {
        title: "Napredni paket",
        description: "Za šole, ki želijo celosten vpogled in konkretne rešitve.",
        price: "1.990€",
        popular: true,
        features: [
          "Senzorska in AI analiza",
          "Celostno poročilo z načrti",
          "Povezava z izvajalci",
        ],
      },
      {
        title: "Partnerski paket",
        description: "Za občine ali mreže šol, ki želijo dolgoročno sodelovanje.",
        price: "Po dogovoru",
        features: [
          "Več šol hkrati",
          "Dolgotrajno spremljanje",
          "Neprekinjena podpora",
        ],
      },
    ];
  
    return (
      <section className="w-full bg-black py-24 px-4 md:px-12" id="pricing">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Naši paketi sodelovanja
          </h2>
          <p className="text-neutral-400 text-lg">
            Prilagodimo se vaši situaciji in proračunu.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={cn(
                "flex flex-col justify-between items-start text-left bg-[rgba(255,255,255,0.02)]",
                plan.popular && "border-blue-600 shadow-[0_0_24px_rgba(37,99,235,0.25)]"
              )}
            >
              <CardSkeletonContainer className="w-full">
                <div className="flex items-center justify-center h-full text-white text-2xl font-semibold">
                  {plan.title}
                </div>
              </CardSkeletonContainer>
  
              <div className="mt-6">
                <CardTitle className="text-2xl text-white">{plan.price}</CardTitle>
                <CardDescription className="text-neutral-400 mb-6">
                  {plan.description}
                </CardDescription>
                <ul className="text-sm text-neutral-300 space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="list-disc list-inside">{feature}</li>
                  ))}
                </ul>
                <Button className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Izberi paket
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  