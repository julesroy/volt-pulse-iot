"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Box } from "lucide-react";
import { Product } from "@/types/product";
import Badge from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  // get category icon
  const CategoryIcon =
    product.category === "hardware"
      ? Cpu
      : product.category === "software"
      ? Layers
      : Box;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col justify-between rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-primary/50 transition-colors p-6 shadow-sm overflow-hidden"
    >
      {/* row 1: card header with category badge and icon */}
      <div className="flex items-center justify-between mb-4">
        <Badge
          variant={
            product.category === "hardware"
              ? "emerald"
              : product.category === "software"
              ? "cyan"
              : "zinc"
          }
        >
          {product.category}
        </Badge>
        <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 group-hover:text-primary transition-colors">
          <CategoryIcon className="w-5 h-5" />
        </div>
      </div>

      {/* row 2: product title and generic description */}
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* row 3: details summary bullets */}
      <div className="space-y-1.5 mb-6 text-xs text-zinc-400">
        {product.details.slice(0, 3).map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>

      {/* row 4: action button trigger */}
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-800 hover:bg-primary hover:text-zinc-950 text-zinc-200 text-xs font-semibold transition-all duration-200 cursor-pointer border border-zinc-700/60 hover:border-transparent"
      >
        <span>View Details</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </motion.article>
  );
}
