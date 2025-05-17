"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function ProblemSection() {
    return (
        <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden sm:h-[30rem] md:h-[40rem]">
            <MaskContainer
                revealText={
                    <p className="mx-auto max-w-4xl text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        "Vse je okej, nihče mi ne nagaja, samo jaz sem čuden."
                    </p>
                }
                className="h-[40rem] rounded-md text-black sm:h-[30rem] md:h-[40rem]"
            >
                <div className="absolute inset-0 z-0 h-full w-full bg-white/50" />
                <div className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold sm:text-3xl md:text-4xl">
                    "Zmerjajo me, izključujejo me iz družbe, zanemarjajo me."
                </div>
            </MaskContainer>
        </div>
    );
}