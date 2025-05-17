"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";

export function ImpactStatement() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 sm:mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-2 sm:py-4 bg-clip-text text-center text-3xl sm:text-4xl md:text-7xl font-medium tracking-tight text-transparent"
      >
        43 % <br /> 
        <span className="text-xl sm:text-2xl font-normal">
        učencev, deležnih nasilja v šolah je navedlo, da se je to dogajalo na hodnikih in straniščih
        </span>
      </motion.h1>
    </LampContainer>
  );
}
