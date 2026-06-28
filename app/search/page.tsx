import ProductCard from "@/components/product/ProductCard";
import { searchProducts } from "@/lib/services/search-service";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const { q = "" } = await searchParams;

  const products = searchProducts(q);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Search Results
      </h1>

      <p className="mt-2 text-gray-600">
        {products.length} products found for "{q}"
      </p>

      {products.length > 0 ? (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-2xl border border-dashed p-10 text-center">
          <h2 className="text-2xl font-semibold">
            No products found
          </h2>

          <p className="mt-2 text-gray-500">
            Try another search.
          </p>
        </div>
      )}
    </main>
  );
}