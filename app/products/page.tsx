import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsCatalog from "@/components/products/ProductsCatalog";

export const metadata: Metadata = {
  title: "Products & Systems | VoltPulse",
  description:
    "Explore our complete range of industrial energy monitoring hardware, telemetry devices, and SaaS platform solutions.",
  openGraph: {
    title: "Products & Systems | VoltPulse",
    description:
      "Explore our complete range of industrial energy monitoring hardware, telemetry devices, and SaaS platform solutions.",
    url: "",
    siteName: "VoltPulse",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* row 1: products hero header */}
        <ProductsHero />

        {/* row 2: products catalog grid with category filters and details modal */}
        <ProductsCatalog products={PRODUCTS} />
      </main>
    </div>
  );
}