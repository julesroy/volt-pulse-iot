"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Product, ProductCategory } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";
import ProductDetailModal from "@/components/products/ProductDetailModal";

interface ProductsCatalogProps {
  products: Product[];
}

const CATEGORIES: { label: string; value: ProductCategory }[] = [
  { label: "All Products", value: "all" },
  { label: "Hardware", value: "hardware" },
  { label: "Software", value: "software" },
  { label: "Accessories", value: "accessories" },
];

export default function ProductsCatalog({ products }: ProductsCatalogProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(
    null
  );

  // filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="flex flex-col gap-8 w-full">
      {/* row 1: category filter bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 pb-4">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-zinc-950 shadow-[0_0_16px_rgba(0,207,111,0.2)]"
                  : "bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* row 2: products grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={(p) => setActiveModalProduct(p)}
          />
        ))}
      </motion.div>

      {/* row 3: technical detail modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
}
