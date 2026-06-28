import { Product } from "@/lib/types/product";

export function matchesSearch(
  product: Product,
  query: string
) {
  const search = query.trim().toLowerCase();

  return (
    product.title.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search) ||
    product.brand.toLowerCase().includes(search) ||
    product.offers.some((offer) =>
      offer.merchant.toLowerCase().includes(search)
    )
  );
}

export function hasDiscount(product: Product) {
  const bestOffer = product.offers[0];

  if (!bestOffer) return false;

  return (
    bestOffer.oldPrice !== undefined &&
    bestOffer.oldPrice > bestOffer.price
  );
}

export function discountPercentage(product: Product) {
  const bestOffer = product.offers[0];

  if (
    !bestOffer ||
    bestOffer.oldPrice === undefined ||
    bestOffer.oldPrice <= bestOffer.price
  ) {
    return 0;
  }

  return Math.round(
    ((bestOffer.oldPrice - bestOffer.price) /
      bestOffer.oldPrice) *
      100
  );
}