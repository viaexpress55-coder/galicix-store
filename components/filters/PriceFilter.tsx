"use client";

import { PRICE_RANGES } from "@/lib/constants/price-ranges";
import { useSearch } from "@/components/providers/SearchProvider";

export default function PriceFilter() {
  const {
    filters,
    setMinPrice,
    setMaxPrice,
  } = useSearch();

  return (
    <div className="space-y-3">
      {PRICE_RANGES.map((range) => (
        <label
          key={range.label}
          className="flex cursor-pointer items-center gap-2 text-sm"
        >
          <input
            type="radio"
            name="price"
            checked={
              filters.minPrice === range.min &&
              filters.maxPrice === range.max
            }
            onChange={() => {
              setMinPrice(range.min);
              setMaxPrice(range.max);
            }}
            className="h-4 w-4"
          />

          <span>{range.label}</span>
        </label>
      ))}
    </div>
  );
}