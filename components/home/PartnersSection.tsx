import React from "react";

const PARTNERS = [
  "T-Power",
  "Starlight Solar",
  "EcoGrid Global",
  "Metatronic",
  "LithiumPro",
];

export default function PartnersSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-8 font-medium">
        Powering Next-Gen Industrial Infrastructure
      </span>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-zinc-400 font-semibold text-sm sm:text-base">
        {PARTNERS.map((partner) => (
          <div
            key={partner}
            className="flex items-center gap-2 hover:text-zinc-200 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-primary/70" />
            <span>{partner}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
