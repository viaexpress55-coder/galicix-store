import ProductCard from "@/components/product/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">
          Featured Products
        </h2>

        <p className="mt-2 text-gray-600">
          Discover today's best products.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}