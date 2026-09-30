"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryLink from "@/components/ui/PrimaryLink";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: MobileMenuProps) {
  // close menu when user presses escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // determine active route status
  const isHome = pathname === "/";
  const isProducts = pathname === "/products" || pathname.startsWith("/products/");
  const isAbout = pathname === "/about" || pathname.startsWith("/about/");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-nav-panel"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-6 py-6 shadow-2xl md:hidden z-50 flex flex-col gap-6"
        >
          {/* row 1: mobile navigation links list */}
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                isHome
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-zinc-200 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              <span>Home</span>
              {isHome && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>

            <Link
              href="/products"
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                isProducts
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-zinc-200 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              <span>Products</span>
              {isProducts && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                isAbout
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-zinc-200 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              <span>About</span>
              {isAbout && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          </nav>

          {/* row 2: contact cta and telemetry indicator */}
          <div className="flex flex-col gap-4 pt-4 border-t border-zinc-800/80">
            <div onClick={onClose} className="w-full">
              <PrimaryLink href="/contact" size="md" className="w-full justify-center">
                Contact VoltPulse
              </PrimaryLink>
            </div>

            <div className="flex items-center justify-between px-1 text-[11px] font-mono text-zinc-500">
              <span>SYSTEM: ONLINE</span>
              <div className="flex items-center gap-1.5 text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>TELEMETRY READY</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
