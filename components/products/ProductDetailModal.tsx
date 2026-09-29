"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types/product";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  // close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* row 1: backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* row 2: modal card container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 flex flex-col gap-6"
        >
          {/* column 1: header with close button */}
          <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
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
              </div>
              <h2
                id="modal-title"
                className="text-2xl font-bold tracking-tight text-white"
              >
                {product.name}
              </h2>
              <p className="text-sm text-zinc-400">{product.tagline}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close details"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* column 2: description section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
              Description
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* column 3: key features */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* column 4: specifications list */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
              Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-zinc-300"
                >
                  {detail}
                </div>
              ))}
            </div>
          </div>

          {/* column 5: modal footer actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
            <Link href="/contact" onClick={onClose}>
              <Button variant="primary" size="sm" className="gap-1.5">
                <span>Inquire About {product.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
