"use client";

import { getAllProducts } from "@/lib/repositories/product-repository";

const brands = Array.from(
  new Set(
    getAllProducts().map((product) => product.brand)
  )
).sort();

export default function BrandFilter() {
  return (
    <div className="space-y-3">
      {brands.map((brand) => (
        <label
          key={brand}
          className="flex items-center gap-2 cursor-pointer text-sm"
        >
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300"
          />

          <span>{brand}</span>
        </label>
      ))}
    </div>
  );
}