"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPANY_MILESTONES } from "@/data/about";
import Badge from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";

export default function MilestonesTimeline() {
  return (
    <section className="flex flex-col gap-10">
      {/* row 1: section title and header */}
      <div className="flex flex-col items-start max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
          Milestones & Evolution
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          From Laboratory Prototype to 1.2 GW Scale
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400">
          A track record of high-frequency telemetry innovation, rigorous hardware certifications, 
          and multi-site industrial energy deployments.
        </p>
      </div>

      {/* row 2: interactive animated timeline */}
      <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-8 flex flex-col gap-10">
        {COMPANY_MILESTONES.map((milestone, idx) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="relative group"
          >
            {/* telemetry timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-primary group-hover:bg-primary transition-colors flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-zinc-950 transition-colors" />
            </div>

            {/* card container */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 backdrop-blur-sm group-hover:border-zinc-700 transition-all duration-200">
              {/* row 2.1: milestone meta badge and year */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold font-mono text-primary">
                    {milestone.year}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {"//"} {milestone.period}
                  </span>
                </div>
                <Badge variant={idx === COMPANY_MILESTONES.length - 1 ? "emerald" : "zinc"}>
                  {milestone.badge}
                </Badge>
              </div>

              {/* row 2.2: milestone title and description */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {milestone.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl">
                {milestone.description}
              </p>

              {/* row 2.3: impact metric indicator */}
              {milestone.impactMetric && (
                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{milestone.impactMetric}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
