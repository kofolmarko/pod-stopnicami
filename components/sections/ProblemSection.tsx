"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function ProblemSection() {
    return (
        <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
            <MaskContainer
                revealText={
                    <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-white">
                        "Vse je okej, nihče mi ne nagaja, samo jaz sem čuden."
                    </p>
                }
                className="h-[40rem] rounded-md border text-white dark:text-black"
            >
                <div className="absolute inset-0 z-0 h-full w-full bg-black/50 dark:bg-white/50" />
                <div className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold">
                    "Zmerjajo me, izključujejo me iz družbe, zanemarjajo me.
                </div>
            </MaskContainer>
        </div>
    );
}
