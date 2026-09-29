import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "cyan" | "zinc" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "emerald",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    zinc: "bg-zinc-800 text-zinc-300 border-zinc-700",
    outline: "bg-transparent text-zinc-400 border-zinc-700/60",
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
