"use client";

const categories = [
  "Electronics",
  "Audio",
  "Wearables",
];

export default function CategoryFilter() {
  return (
    <div className="space-y-3">
      {categories.map((category) => (
        <label
          key={category}
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300"
          />

          <span>{category}</span>
        </label>
      ))}
    </div>
  );
}