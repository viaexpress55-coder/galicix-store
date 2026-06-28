"use client";

const ratings = [5, 4, 3, 2];

export default function RatingFilter() {
  return (
    <div className="space-y-3">
      {ratings.map((rating) => (
        <label
          key={rating}
          className="flex cursor-pointer items-center gap-2 text-sm"
        >
          <input
            type="radio"
            name="rating"
            className="h-4 w-4"
          />

          <span>
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
            {" "}
            & Up
          </span>
        </label>
      ))}
    </div>
  );
}