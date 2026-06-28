"use client";

import { useSearch } from "@/components/providers/SearchProvider";
import { SortOption } from "@/lib/services/sort-service";

const options: {
  label: string;
  value: SortOption;
}[] = [
  {
    label: "Most Reviews",
    value: "reviews",
  },
  {
    label: "Highest Rated",
    value: "rating",
  },
  {
    label: "Lowest Price",
    value: "price_asc",
  },
  {
    label: "Highest Price",
    value: "price_desc",
  },
];

export default function SortDropdown() {
  const {
    filters,
    setSort,
  } = useSearch();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">
        Sort
      </span>

      <select
        value={filters.sort}
        onChange={(e) =>
          setSort(e.target.value as SortOption)
        }
        className="rounded-lg border px-3 py-2 text-sm"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}