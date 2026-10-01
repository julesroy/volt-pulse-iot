"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverLift = true,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-zinc-700 ${className}`.trim()}
      {...props}
    >
      {children}
    </motion.div>
  );
}
