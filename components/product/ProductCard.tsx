import Image from "next/image";
import { Star } from "lucide-react";

import { Product } from "@/lib/types/product";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
  <Link href={`/product/${product.id}`}>
    <Card className="overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-4 p-5">
        <Badge>{product.category}</Badge>

        <h3 className="line-clamp-2 text-lg font-semibold">
          {product.title}
        </h3>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-sm text-gray-500">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold">
            ${product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <Button className="w-full">
          View Deal
        </Button>
      </CardContent>
    </Card>
  </Link>
);
}