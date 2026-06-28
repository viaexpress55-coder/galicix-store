"use client";

import { getBrands } from "@/lib/repositories/product-repository";
import { useSearch } from "@/components/providers/SearchProvider";

export default function BrandFilter() {
  const brands = getBrands();

  const {
    filters,
    setBrand,
  } = useSearch();

  return (
    <div className="space-y-3">
      {brands.map((brand) => (
        <label
          key={brand}
          className="flex cursor-pointer items-center gap-2 text-sm"
        >
          <input
            type="radio"
            name="brand"
            checked={filters.brand === brand}
            onChange={() => setBrand(brand)}
            className="h-4 w-4"
          />

          <span>{brand}</span>
        </label>
      ))}
    </div>
  );
}