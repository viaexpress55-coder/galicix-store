"use client";

import { RATINGS } from "@/lib/constants/ratings";
import { useSearch } from "@/components/providers/SearchProvider";

export default function RatingFilter() {
  const {
    filters,
    setRating,
  } = useSearch();

  return (
    <div className="space-y-3">
      {RATINGS.map((rating) => (
        <label
          key={rating}
          className="flex cursor-pointer items-center gap-2 text-sm"
        >
          <input
            type="radio"
            name="rating"
            checked={filters.minRating === rating}
            onChange={() => setRating(rating)}
            className="h-4 w-4"
          />

          <span>
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)} & Up
          </span>
        </label>
      ))}
    </div>
  );
}