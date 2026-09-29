import Link from "next/link";
import PrimaryLink from "@/components/ui/PrimaryLink";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center justify-start gap-4">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        VoltPulse
                    </Link>
                </div>

                <nav className="flex items-center justify-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <Link href="/" className="dark:hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/products" className="dark:hover:text-primary transition-colors">
                        Products
                    </Link>
                    <Link href="/about" className="dark:hover:text-primary transition-colors">
                        About
                    </Link>
                </nav>

                <div className="flex items-center justify-end gap-4">
                    <PrimaryLink href="/contact" size="sm">
                        Contact
                    </PrimaryLink>
                </div>
            </div>
        </header>
    );
}