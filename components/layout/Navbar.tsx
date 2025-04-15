import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/images/pod-stopnicami-logo.png"
                        alt="pod-stopnicami Logo"
                        width={40}
                        height={40}
                        className="mr-2"
                    />
                    <span className="text-lg font-medium text-slate-900">pod-stopnicami</span>
                </div>
                <div className="hidden md:flex space-x-6 text-sm font-medium">
                    <a href="#about" className="text-slate-700 hover:text-blue-800 transition-colors">About</a>
                    <a href="#process" className="text-slate-700 hover:text-blue-800 transition-colors">Process</a>
                    <a href="#pricing" className="text-slate-700 hover:text-blue-800 transition-colors">Pricing</a>
                    <a href="#results" className="text-slate-700 hover:text-blue-800 transition-colors">Results</a>
                    <a href="#contact" className="text-slate-700 hover:text-blue-800 transition-colors">Contact</a>
                </div>
                <Button className="bg-blue-800 hover:bg-blue-900 text-white">
                    Get Started
                </Button>
            </div>
        </nav>
    )
}
