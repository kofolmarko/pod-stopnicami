import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ProcessSection from "@/components/sections/ProcessSection"
import UploadPreviewSection from "@/components/sections/UploadPreviewSection"
import PricingSection from "@/components/sections/PricingSection"
import ResultsSection from "@/components/sections/ResultsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <UploadPreviewSection />
      <PricingSection />
      <ResultsSection />
      <ContactSection />
    </main>
  )
}
