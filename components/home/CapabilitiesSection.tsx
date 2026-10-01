"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Sun } from "lucide-react";

export default function CapabilitiesSection() {
  return (
    <section className="flex flex-col">
      {/* eyebrow and section header */}
      <div className="mb-8 sm:mb-10">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-primary mb-2 block">
          Core Operational Capabilities
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Intelligent Energy Control & Automation
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* row 1: wide card (left) + small card (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* column 1: wide card with 2-part content (text + image block) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-8 rounded-2xl border border-zinc-800/80 hover:border-primary/40 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* column 1 (nested): text */}
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500 mb-2">
                  Predictive Peak Management
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Avoid grid overload charges before they strike
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Predictive AI forecasts peak utility tariff windows and shifts
                  high-draw equipment to on-site battery reserves before costly
                  surge penalties trigger.
                </p>
              </div>

              {/* column 2 (nested): image block */}
              <Image
                className="w-full h-48 sm:h-56 rounded-xl object-cover"
                src="/peak.webp"
                alt="Predictive Peak Management"
                width={600}
                height={350}
              />
            </div>
          </motion.div>

          {/* column 2: small card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-4 rounded-2xl border border-zinc-800/80 hover:border-primary/40 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200"
          >
            <div>
              <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Zap className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Automated Load Shedding
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Safely pause non-critical loads like compressors and HVAC units
                within milliseconds during peak grid stress to safeguard core
                production.
              </p>
            </div>
          </motion.div>
        </div>

        {/* row 2: small card (left) + wide card (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* column 1: small card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-4 rounded-2xl border border-zinc-800/80 hover:border-primary/40 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200"
          >
            <div>
              <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Sun className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Solar Inverter Sync
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Synchronize commercial solar inverters and battery banks in
                real time to maximize on-site consumption and export surplus
                back to the grid.
              </p>
            </div>
          </motion.div>

          {/* column 2: wide card with 2-part content (image block + text) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-8 rounded-2xl border border-zinc-800/80 hover:border-primary/40 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* column 1 (nested): image block */}
              <Image
                className="w-full h-48 sm:h-56 rounded-xl object-cover"
                src="/equipments.webp"
                alt="Intelligent Fleet and Equipment Charging"
                width={600}
                height={350}
              />

              {/* column 2 (nested): text */}
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500 mb-2">
                  Intelligent Fleet Charging
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Intelligent Fleet & Equipment Charging
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Manage electric industrial fleets and forklift charging
                  schedules automatically, drawing power during off-peak
                  windows to minimize utility costs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
