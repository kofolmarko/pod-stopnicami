import { NavigationMenu } from "@/components/layout/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { ImpactStatement } from "@/components/sections/ImpactStatement"
import ProcessSection from "@/components/sections/ProcessSection"
import UploadPreviewSection from "@/components/sections/UploadPreviewSection"
import { PricingSection } from "@/components/sections/PricingSection"
import ResultsSection from "@/components/sections/ResultsSection"
import ContactSection from "@/components/sections/ContactSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ViolenceSolutionProcess } from "@/components/sections/ViolenceSolutionProcess"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavigationMenu />
      <HeroSection />
      <ProblemSection />
      <ImpactStatement />
      <TestimonialsSection />
      <ViolenceSolutionProcess />
      {/* <UploadPreviewSection /> */}
      <PricingSection />
      <ResultsSection />
      <ContactSection />
    </main>
  )
}
