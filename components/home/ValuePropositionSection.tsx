import React from "react";

interface ValuePropItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const VALUE_PROPOSITIONS: ValuePropItem[] = [
  {
    title: "Max Efficiency",
    description:
      "Automate battery charging cycles and solar harvesting windows based on predicted load shedding schedules.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Pure Sustainability",
    description:
      "Instantly balance clean local generation against utility backup feeds with near-zero transition latency.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Total Resilience",
    description:
      "Microgrid technology ensures automatic islanding when upstream municipal grid distribution collapses.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Complete Control",
    description:
      "Granular app/device-level load control down to individual industrial circuits and high-draw machinery.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h6" />
      </svg>
    ),
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
          Engineered for Energy Independence
        </h2>
      </div>

      {/* row 1: 4-card value proposition grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {VALUE_PROPOSITIONS.map((item) => (
          /* column: feature card */
          <div
            key={item.title}
            className="group rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700/90 p-5 sm:p-6 transition-all duration-300"
          >
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
        ))}
      </div>
    </section>
  );
}
