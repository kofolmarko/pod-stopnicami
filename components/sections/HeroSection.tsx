import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";

export function HeroSection() {
    return (
        <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black antialiased items-center justify-center sm:h-[30rem] md:h-[40rem]">
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                    "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                )}
            />

            <Spotlight
                className="-top-40 left-0 sm:-top-28 sm:left-20 md:-top-20 md:left-60"
                fill="white"
            />
            <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl md:text-7xl">
                    Pod Stopnicami
                </h1>
                <p className="mx-auto mt-4 max-w-lg text-center text-sm font-normal text-neutral-300 sm:text-base">
                    Od hodnikov do harmonije — vloga arhitekture pri preprečevanju nasilja v šolah.
                </p>
            </div>
        </div>
    );
}
