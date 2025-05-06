"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function TestimonialsSection() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
      quote:
        "V garderobi se vsak dan bojim, da mi bodo spet skrili čevlje ali mi jih zmočili. Nihče nič ne naredi.",
      name: "Žrtev nasilja",
      title: "6. razred",
    },
    {
      quote:
        "Na WC-ju so me zaprli in izklopili luč. Tam sem bil več kot 10 minut, sam, v temi.",
      name: "Žrtev nasilja",
      title: "7. razred",
    },
    {
      quote:
        "Vsi so vedeli, kaj se dogaja, ampak so se samo smejali. Nihče ni rekel, da ni prav.",
      name: "Priča nasilju",
      title: "9. razred",
    },
    {
      quote:
        "Vsakič, ko grem mimo hodnika pred jedilnico, slišim, da mi kdo reče, da sem čudak.",
      name: "Žrtev nasilja",
      title: "8. razred",
    },
    {
      quote:
        "Na WC-ju si ne upam več sam, ker so me tam zadnjič pritisnili ob steno in mi grozili.",
      name: "Žrtev nasilja",
      title: "7. razred",
    },
  ];
  
