"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryLink from "@/components/ui/PrimaryLink";
import MobileMenu from "@/components/MobileMenu";
import { Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [prevPathname, setPrevPathname] = useState(pathname);

    // reset mobile menu upon route change without triggering cascading effect renders
    if (prevPathname !== pathname) {
        setPrevPathname(pathname);
        setIsMobileMenuOpen(false);
    }

    // determine active routes for primary highlighting
    const isHome = pathname === "/";
    const isProducts = pathname === "/products" || pathname.startsWith("/products/");
    const isAbout = pathname === "/about" || pathname.startsWith("/about/");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="flex items-center justify-between md:grid md:grid-cols-3">
                {/* column 1: brand logo */}
                <div className="flex items-center justify-start gap-4">
                    <Link href="/" className="text-3xl font-extrabold italic tracking-tight">
                        <span className="text-white">Volt</span><span className="text-primary">Pulse</span>
                    </Link>
                </div>

                {/* column 2: desktop navigation links */}
                <nav className="hidden md:flex items-center justify-center gap-6 text-md font-medium">
                    <Link
                        href="/"
                        className={`${
                            isHome ? "text-primary" : "text-white dark:hover:text-primary"
                        } transition-colors`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className={`${
                            isProducts ? "text-primary" : "text-white dark:hover:text-primary"
                        } transition-colors`}
                    >
                        Products
                    </Link>
                    <Link
                        href="/about"
                        className={`${
                            isAbout ? "text-primary" : "text-white dark:hover:text-primary"
                        } transition-colors`}
                    >
                        About
                    </Link>
                </nav>

                {/* column 3: desktop cta and mobile menu toggle */}
                <div className="flex items-center justify-end gap-4">
                    <div className="hidden md:block">
                        <PrimaryLink href="/contact" size="sm">
                            Contact
                        </PrimaryLink>
                    </div>

                    {/* mobile hamburger toggle button */}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="flex md:hidden items-center justify-center p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-nav-panel"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-primary" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* mobile navigation drawer */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                pathname={pathname}
            />
        </header>
    );
}