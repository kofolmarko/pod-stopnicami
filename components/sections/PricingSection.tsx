import { Card, CardTitle, CardDescription, CardSkeletonContainer } from "@/components/cards-demo-3";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const plans = [
    {
      title: "Osnovni paket",
      description: "Začnite z osnovnim vpogledom in hitro analizo.",
      price: "499€",
      features: [
        { name: "2 začetna sestanka", available: true },
        { name: "Osnovna prostorska analiza", available: true },
        { name: "Senzorska in AI analiza", available: true },
        { name: "Osnovno poročilo", available: true },
        { name: "Sestanek o nadaljevanju", available: false },
        { name: "Vizualizacija rešitev", available: false },
        { name: "Priporočnik za nadaljevanje", available: false },
      ],
    },
    {
      title: "Napredni paket",
      description: "Napredna analiza in poglobljeni vpogledi.",
      price: "2.499€",
      popular: true,
      features: [
        { name: "Vse iz osnovnega paketa", available: true, highlighted: true },
        { name: "Dodatni sestanki po potrebi", available: true },
        { name: "Podrobnejša AI analiza", available: true },
        { name: "Pregled s strokovnjaki", available: true },
        { name: "Vizualizacija rešitev", available: true },
        { name: "Priročnik za nadaljevanje", available: true },
        { name: "Povezovanje s strokovnjaki", available: false },
      ],
    },
    {
      title: "Partnerski paket",
      description: "Celostno partnerstvo in dolgoročne rešitve.",
      price: "Po dogovoru",
      features: [
        { name: "Vse iz naprednega paketa", available: true, highlighted: true },
        { name: "Povezovanje s strokovnjaki", available: true },
        { name: "Idejni projekt in finančni plan", available: true },
        { name: "Izvedba projekta", available: true },
        { name: "Nadaljnje spremljanje", available: true },
        { name: "Partnerstvo", available: true },
        { name: "+ Želje po meri", available: true }
      ],
    },
  ];

  return (
    <section className="w-full bg-black py-24 px-4 md:px-12" id="pricing">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Naši paketi sodelovanja
          </h2>
        </div>
        <p className="text-neutral-400 text-lg mb-6">
          Prilagodimo se vaši situaciji in proračunu.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 mb-4 mt-24">
          <p className="text-white text-3xl">Prvi sestanek je <span className="bg-blue-600 px-3 py-1 rounded-full font-bold">brezplačen!</span></p>
          <p className="text-neutral-400 text-lg m-4">Stopite v stik z nami in pomagali vam bomo izbrati ustrezni plan za vašo šolo.</p>
        </div>
        <a href="#contact">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Rezervirajte brezplačen sestanek
          </Button>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <Card
            key={idx}
            className={cn(
              "flex flex-col justify-between items-start text-left bg-[rgba(255,255,255,0.02)] p-6",
              plan.popular && "border-blue-600 shadow-[0_0_24px_rgba(37,99,235,0.25)] relative"
            )}
          >
            {plan.popular && <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded">Popularno</span>}
            <CardTitle className="text-2xl text-white mb-2">{plan.title}</CardTitle>
            <CardDescription className="text-neutral-400 mb-4">{plan.description}</CardDescription>
            <p className="text-3xl text-white mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className={cn("flex items-center", feature.highlighted ? "text-yellow-400 font-semibold" : feature.available ? "text-white" : "text-neutral-500")}>
                  {feature.available ? <CheckCircle className="text-green-500 mr-2" /> : <XCircle className="text-red-500 mr-2" />}
                  {feature.name}
                </li>
              ))}
            </ul>
            <Button className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white">
              Izberi paket
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
