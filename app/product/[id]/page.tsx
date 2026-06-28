import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";

import { featuredProducts } from "@/lib/data/featured-products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = featuredProducts.find(
    (item) => item.id === id
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="50vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <Badge>{product.category}</Badge>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

            <span>{product.rating}</span>

            <span className="text-gray-500">
              ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          <div className="flex items-end gap-3">
            <span className="text-5xl font-black">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-xl text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <p className="text-gray-600">
            Sold by {product.merchant}
          </p>

          <Button size="lg">
            Go to Merchant
          </Button>
        </div>
      </div>
    </main>
  );
}