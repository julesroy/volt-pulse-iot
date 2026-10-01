"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, SunMedium, ShieldCheck, Cpu } from "lucide-react";

interface ValuePropItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const VALUE_PROPOSITIONS: ValuePropItem[] = [
  {
    title: "Peak Cost Reduction",
    description:
      "Automatically shift high-power operations and discharge battery reserves during expensive peak-tariff utility hours.",
    icon: <Clock className="w-5 h-5" aria-hidden="true" />,
  },
  {
    title: "Solar & Storage Sync",
    description:
      "Maximize on-site solar generation and battery storage with instant, automated balancing against utility feeds.",
    icon: <SunMedium className="w-5 h-5" aria-hidden="true" />,
  },
  {
    title: "Continuous Uptime",
    description:
      "Isolate critical production lines automatically during utility grid outages to maintain uninterrupted operations.",
    icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />,
  },
  {
    title: "Sub-Meter Visibility",
    description:
      "Gain granular, real-time power visibility down to individual machine circuits, production lines, and HVAC units.",
    icon: <Cpu className="w-5 h-5" aria-hidden="true" />,
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="flex flex-col">
      {/* eyebrow and section header */}
      <div className="mb-8 sm:mb-10">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-primary mb-2 block">
          Our Value Proposition
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Engineered for Industrial Energy Efficiency
        </h2>
      </div>

      {/* row 1: 4-card value proposition grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {VALUE_PROPOSITIONS.map((item, index) => (
          /* column: feature card */
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="group rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-primary/40 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-4 transition-transform group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
