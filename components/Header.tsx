"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryLink from "@/components/ui/PrimaryLink";

export default function Header() {
    const pathname = usePathname();

    // determine active routes for primary highlighting
    const isHome = pathname === "/";
    const isProducts = pathname === "/products" || pathname.startsWith("/products/");
    const isAbout = pathname === "/about" || pathname.startsWith("/about/");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="grid grid-cols-3 items-center">
                {/* column 1: brand logo */}
                <div className="flex items-center justify-start gap-4">
                    <Link href="/" className="text-3xl font-extrabold italic tracking-tight">
                        <span className="text-white">Volt</span><span className="text-primary">Pulse</span>
                    </Link>
                </div>

                {/* column 2: navigation links */}
                <nav className="flex items-center justify-center gap-6 text-md font-medium">
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

                {/* column 3: contact cta */}
                <div className="flex items-center justify-end gap-4">
                    <PrimaryLink href="/contact" size="sm">
                        Contact
                    </PrimaryLink>
                </div>
            </div>
        </header>
    );
}