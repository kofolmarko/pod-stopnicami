"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { X } from "lucide-react";

export function NavigationMenu() {
    const navItems = [
        {
            name: "Proces",
            link: "#process",
        },
        {
            name: "Cenik",
            link: "#pricing",
        },
        {
            name: "Partnerski program",
            link: "#partners",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} className="hidden md:flex gap-6" />
                    <div className="hidden md:flex items-center gap-4">
                        <NavbarButton variant="secondary" href="#about">O nas</NavbarButton>
                        <NavbarButton variant="primary" href="#contact">Stopi v stik</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                        className="flex flex-col gap-2 p-4"
                    >
                        <div className="flex justify-end mb-2">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-neutral-300 hover:text-neutral-100 transition-colors duration-200"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-300 hover:text-neutral-100 transition-colors duration-200"
                            >
                                <span className="block py-2">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-2 mt-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                                href="#about"
                            >
                                O nas
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                                href="#contact"
                            >
                                Stopi v stik
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
