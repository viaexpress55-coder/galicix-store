"use client";

const priceRanges = [
  {
    label: "Under $100",
    min: 0,
    max: 100,
  },
  {
    label: "$100 - $300",
    min: 100,
    max: 300,
  },
  {
    label: "$300 - $500",
    min: 300,
    max: 500,
  },
  {
    label: "Over $500",
    min: 500,
    max: Infinity,
  },
];

export default function PriceFilter() {
  return (
    <div className="space-y-3">
      {priceRanges.map((range) => (
        <label
          key={range.label}
          className="flex items-center gap-2 cursor-pointer text-sm"
        >
          <input
            type="radio"
            name="price"
            className="h-4 w-4"
          />

          <span>{range.label}</span>
        </label>
      ))}
    </div>
  );
}