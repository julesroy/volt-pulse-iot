import React from "react";
import PrimaryLink from "@/components/ui/PrimaryLink";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCtaSection() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
      {/* background radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* row 1: cta content container */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* column 1: cta text */}
        <div className="max-w-2xl flex flex-col items-start">
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
            Accelerate Your Facility Transition
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Connect Your Industrial Grid?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Collaborate directly with our power systems engineering team to conduct an onsite 
            telemetry audit, quantify load flexibility, and deploy your first VoltPulse smart node.
          </p>
        </div>

        {/* column 2: cta actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <PrimaryLink href="/contact" size="md">
            Schedule Engineering Pilot
          </PrimaryLink>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white font-medium text-sm transition-all group"
          >
            <span>Explore Hardware</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
