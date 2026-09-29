import React from "react";

export default function ProductsHero() {
  return (
    <section className="flex flex-col items-start max-w-3xl">
      {/* row 1: hero badge and heading */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
          Explore Our <span className="text-primary">Products</span>
        </h1>
      </div>

      {/* row 2: hero subtitle */}
      <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
        Browse our comprehensive lineup of industrial hardware units, cloud-connected software
        tools, and operational accessories designed to streamline your energy infrastructure.
      </p>
    </section>
  );
}
