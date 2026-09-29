import Link from "next/link";
import PrimaryLink from "@/components/ui/PrimaryLink";

export default function CtaSection() {
  return (
    <section className="relative rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl">
      {/* Subtle Ambient Glow inside Card */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/20 blur-[90px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
          Ready to Build Your Independent Microgrid?
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mb-8 sm:mb-10 leading-relaxed">
          Contact our energy systems engineers for a comprehensive site audit,
          real-time load profiling, and custom telemetry modeling.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <PrimaryLink href="/" size="md">
            Connect with VoltPulse
          </PrimaryLink>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white font-medium text-sm transition-all text-center cursor-pointer"
          >
            Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
