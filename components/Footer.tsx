import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* row 1: main footer links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/60">
          {/* column 1: brand summary and copyright */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold italic tracking-tight">
                <span className="text-white">Volt</span><span className="text-primary">Pulse</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Software-defined infrastructure built for localized energy
              independence, microgrid staging, and automated commercial load
              shedding.
            </p>
            <p className="text-xs text-zinc-500 pt-2">
              &copy; {new Date().getFullYear()} VoltPulse Systems, Inc. All rights reserved.
            </p>
          </div>

          {/* column 2: solutions links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-mono">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Product 1
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Product 2
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Product 3
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  All products
                </Link>
              </li>
            </ul>
          </div>

          {/* column 3: company links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Infrastructure Partners
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* column 4: resources links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-mono">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Developer API
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Telemetry Guides
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Security Audits
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Tariff Index
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* row 2: bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>Powering resilient, low-carbon industrial energy systems worldwide.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
