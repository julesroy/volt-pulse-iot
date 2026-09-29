import Link from "next/link";
import PrimaryLink from "@/components/ui/PrimaryLink";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-4 sm:pt-8">
      {/* column 1: heading and ctas */}
      <div className="lg:col-span-7 flex flex-col items-start">
        {/* h1 heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 sm:mb-8">
          The Autonomous <br />
          <span className="text-primary">Energy Grid</span> Is Here
        </h1>

        {/* subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mb-8 sm:mb-10">
          Integrating AI-driven generation, intelligent battery staging, and
          real-time load shedding into a single, cohesive software-defined
          energy architecture for industrial and commercial facilities.
        </p>

        {/* ctas */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <PrimaryLink href="/" size="md">
            Deploy VoltPulse
          </PrimaryLink>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white font-medium text-sm transition-all group text-center cursor-pointer"
          >
            <span>Review Live Specs</span>
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>

      {/* column 2: hero graphic card (empty image block) */}
      <div className="lg:col-span-5 w-full">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 backdrop-blur-md shadow-2xl relative">
          {/* header inside the card */}
          <div className="flex items-center justify-between border-b border-zinc-800/70 pb-3 mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                Grid Telemetry
              </span>
              <span className="text-xs font-semibold text-zinc-200">
                Nodal Distribution Matrix
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-mono text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>GRID: ONLINE</span>
            </div>
          </div>

          {/* sub-status metadata bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-3 px-1">
            <span>Line Shed Trigger: OFF</span>
            <span>Hz: 50.0</span>
          </div>

          {/* empty image / telemetry block */}
          <div className="w-full h-64 sm:h-72 lg:h-80 rounded-xl border border-dashed border-zinc-800/80 bg-zinc-950/60 relative overflow-hidden" />
        </div>
      </div>
    </section>
  );
}
