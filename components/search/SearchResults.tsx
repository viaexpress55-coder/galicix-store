"use client";

import ProductCard from "@/components/product/ProductCard";
import { useSearch } from "@/components/providers/SearchProvider";

import { searchProducts } from "@/lib/services/search-service";
import { sortProducts } from "@/lib/services/sort-service";

export default function SearchResults() {
  const { filters } = useSearch();

  const products = sortProducts(
    searchProducts(filters),
    filters.sort
  );

  if (products.length === 0) {
    return (
      <div className="mt-16 rounded-2xl border border-dashed p-10 text-center">
        <h2 className="text-2xl font-semibold">
          No products found
        </h2>

        <p className="mt-2 text-gray-500">
          Try changing the search filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <p className="text-gray-600">
          {products.length} products found
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}