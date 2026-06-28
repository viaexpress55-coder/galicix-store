import Image from "next/image";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProductCard() {
  return (
    <Card className="overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src="/images/sample-product.jpg"
          alt="Product"
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-4 p-5">
        <Badge>Electronics</Badge>

        <h3 className="line-clamp-2 text-lg font-semibold">
          Apple AirPods Pro (2nd Generation)
        </h3>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">4.8</span>
          <span className="text-sm text-gray-500">(12,840)</span>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold">$229</span>

          <span className="text-sm text-gray-400 line-through">
            $249
          </span>
        </div>

        <Button className="w-full">
          View Deal
        </Button>
      </CardContent>
    </Card>
  );
}