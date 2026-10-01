import React from "react";

interface MetricItem {
  value: string;
  label: string;
}

const METRICS: MetricItem[] = [
  {
    value: "99.999%",
    label: "Continuous uptime achieved",
  },
  {
    value: "40%+",
    label: "Average utility cost reduction",
  },
  {
    value: "1.2 GW",
    label: "Combined facility load monitored",
  },
  {
    value: "2.4 M",
    label: "Tons of carbon offset logged",
  },
];

export default function MetricsSection() {
  return (
    /* row 1: metrics grid */
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 sm:py-16 border-y border-zinc-800/80">
      {METRICS.map((metric) => (
        /* column: metric item */
        <div key={metric.label} className="flex flex-col">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            {metric.value}
          </span>
          <span className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
            {metric.label}
          </span>
        </div>
      ))}
    </section>
  );
}
