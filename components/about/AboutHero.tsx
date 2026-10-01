import React from "react";
import { COMPANY_MISSION } from "@/data/about";
import { Compass, Target } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="flex flex-col gap-10 lg:gap-14">
      {/* row 1: page heading and badge */}
      <div className="flex flex-col items-start max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
          Pioneering Autonomous <br />
          <span className="text-primary">Energy Systems</span> for Industry
        </h1>
        <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
          VoltPulse bridges the physical and digital gap in modern power infrastructure.
          We engineer revenue-grade IoT metering, edge intelligence, and predictive analytics
          to turn complex industrial electrical loads into dynamic, decarbonized assets.
        </p>
      </div>

      {/* row 2: mission and vision cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* column 1: mission card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              Our Core Mission
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Real-Time Clarity for Every Industrial Kilowatt
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {COMPANY_MISSION.mission}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>OPERATIONAL MANDATE</span>
          </div>
        </div>

        {/* column 2: vision card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-colors">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              Strategic Vision
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              The Self-Balancing Industrial Grid
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {COMPANY_MISSION.vision}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>DECARBONIZATION ROADMAP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
