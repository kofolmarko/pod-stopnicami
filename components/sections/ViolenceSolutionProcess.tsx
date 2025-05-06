"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ViolenceSolutionProcess() {
  const data = [
    {
      title: "Razumevanje",
      content: (
        <div>
          <p className="text-lg text-neutral-300">
            Opazujemo. Poslušamo. Zaznavamo.
          </p>
          <p className="mt-2 text-base text-neutral-500">
            Senzorji. Intervjuji. Tlorisi. Zgodbe.
          </p>
        </div>
      ),
    },
    {
      title: "Načrt",
      content: (
        <div>
          <p className="text-lg text-neutral-300">
            Jasni predlogi, brez odvečnih besed.
          </p>
          <p className="mt-2 text-base text-neutral-500">
            Prostor. Tehnologija. Ljudje. Proračun.
          </p>
        </div>
      ),
    },
    {
      title: "Ukrepanje",
      content: (
        <div>
          <p className="text-lg text-neutral-300">
            Postopno. Merljivo. V sodelovanju.
          </p>
          <p className="mt-2 text-base text-neutral-500">
            Spremljamo, primerjamo, poslušamo.
          </p>
        </div>
      ),
    },
    {
      title: "Partnerstvo",
      content: (
        <div>
          <p className="text-lg text-neutral-300">
            Ostajamo prisotni.
          </p>
          <p className="mt-2 text-base text-neutral-500">
            Ko se projekt konča, delo šele začne.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-black text-white px-4 py-24 sm:px-8 lg:px-16" id="process">
      <div className="mx-auto max-w-7xl">
        <Timeline data={data} />
      </div>
    </section>
  );
}
