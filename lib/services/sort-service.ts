import { Product } from "@/lib/types/product";

export type SortOption =
  | "price_asc"
  | "price_desc"
  | "rating"
  | "reviews";

export function sortProducts(
  products: Product[],
  sort?: SortOption
): Product[] {
  const sorted = [...products];

  switch (sort) {
    case "price_asc":
      return sorted.sort(
        (a, b) => a.offers[0].price - b.offers[0].price
      );

    case "price_desc":
      return sorted.sort(
        (a, b) => b.offers[0].price - a.offers[0].price
      );

    case "rating":
      return sorted.sort(
        (a, b) => b.rating - a.rating
      );

    case "reviews":
      return sorted.sort(
        (a, b) => b.reviews - a.reviews
      );

    default:
      return sorted;
  }
}