"use client";

import { getCategories } from "@/lib/repositories/product-repository";
import { useSearch } from "@/components/providers/SearchProvider";

export default function CategoryFilter() {
  const categories = getCategories();

  const {
    filters,
    setCategory,
  } = useSearch();

  return (
    <div className="space-y-3">
      {categories.map((category) => (
        <label
          key={category}
          className="flex cursor-pointer items-center gap-2 text-sm"
        >
          <input
            type="radio"
            name="category"
            checked={filters.category === category}
            onChange={() => setCategory(category)}
            className="h-4 w-4"
          />

          <span>{category}</span>
        </label>
      ))}
    </div>
  );
}