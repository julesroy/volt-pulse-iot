"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPANY_VALUES } from "@/data/about";
import Badge from "@/components/ui/Badge";
import { Activity, Leaf, ShieldCheck, Cpu, LucideIcon } from "lucide-react";

// icon resolver for static lookup
const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Leaf,
  ShieldCheck,
  Cpu,
};

export default function ValuesSection() {
  return (
    <section className="flex flex-col gap-8">
      {/* row 1: section title and header */}
      <div className="flex flex-col items-start max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
          Principles & Standards
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Engineered for Heavy Duty Reality
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400">
          Our operational values stem directly from high-voltage switchgear rooms, 
          industrial production lines, and clean energy compliance standards.
        </p>
      </div>

      {/* row 2: values four-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {COMPANY_VALUES.map((val, idx) => {
          const Icon = ICON_MAP[val.iconName] || Cpu;
          return (
            /* column item for each value */
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col justify-between hover:border-primary/40 hover:bg-zinc-900/50 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>

              {val.metricLabel && (
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center">
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {val.metricLabel}
                  </Badge>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
