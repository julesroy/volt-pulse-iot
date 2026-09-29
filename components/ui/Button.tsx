"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs font-medium",
    md: "px-6 py-3 text-sm font-semibold",
    lg: "px-8 py-4 text-base font-semibold",
  }[size];

  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary/90 text-zinc-950 shadow-[0_0_24px_rgba(0,207,111,0.25)] hover:shadow-[0_0_32px_rgba(0,207,111,0.4)] border border-transparent",
    secondary:
      "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700",
    outline:
      "bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700",
  }[variant];

  return (
    <motion.button
      whileHover={disabled || isLoading ? undefined : { scale: 1.02 }}
      whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none ${variantStyles} ${sizeStyles} ${className}`.trim()}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-current" aria-hidden="true" />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
