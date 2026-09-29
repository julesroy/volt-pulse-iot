import React from "react";

export default function CapabilitiesSection() {
  return (
    <section className="flex flex-col">
      {/* Eyebrow and Section Header */}
      <div className="mb-8 sm:mb-10">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-primary mb-2 block">
          Grid Management Capabilities
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          AI-Augmented Peak Optimization
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1: Wide Card (Left) + Small Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Wide Card with 2-part content (Text + Empty Image Block) */}
          <div className="lg:col-span-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500 mb-2">
                  Predictive Peak Staging
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Avoid grid overload charges before they strike
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Our internal predictive modeling anticipates dynamic tariff
                  surge spikes and shifts secondary heavy operations to
                  localized battery storage seamlessly.
                </p>
              </div>

              {/* Empty Image Block */}
              <div className="w-full h-48 sm:h-56 rounded-xl border border-dashed border-zinc-800/80 bg-zinc-950/60" />
            </div>
          </div>

          {/* Small Card */}
          <div className="lg:col-span-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-5">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Load Shedding
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Prioritize mission-critical equipment and safely cut ancillary
                industrial loads automatically within milliseconds of a grid
                disruption.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Small Card (Left) + Wide Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Small Card */}
          <div className="lg:col-span-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary mb-5">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Solar Inverter Sync
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Directly synchronize multiple commercial solar inverters,
                dynamically adjusting generation parameters to maximize on-site
                consumption and tariff returns.
              </p>
            </div>
          </div>

          {/* Wide Card with 2-part content (Empty Image Block + Text) */}
          <div className="lg:col-span-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Empty Image Block */}
              <div className="w-full h-48 sm:h-56 rounded-xl border border-dashed border-zinc-800/80 bg-zinc-950/60 order-2 md:order-1" />

              <div className="flex flex-col order-1 md:order-2">
                <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500 mb-2">
                  Intelligent Fleet Charging
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Dynamically dispatch storage power to EV bays
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Balance high-draw industrial vehicle fleets simultaneously.
                  VoltPulse automatically orchestrates charging schedules
                  based on tariff windows and operational shift times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
