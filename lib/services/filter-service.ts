import { Product } from "@/lib/types/product";

export interface FilterOptions {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
}

export function filterProducts(
  products: Product[],
  filters: FilterOptions
) {
  return products.filter((product) => {
    const bestOffer = product.offers[0];

    if (!bestOffer) return false;

    if (
      filters.category &&
      product.category !== filters.category
    ) {
      return false;
    }

    if (
      filters.brand &&
      product.brand !== filters.brand
    ) {
      return false;
    }

    if (
      filters.minPrice !== undefined &&
      bestOffer.price < filters.minPrice
    ) {
      return false;
    }

    if (
      filters.maxPrice !== undefined &&
      bestOffer.price > filters.maxPrice
    ) {
      return false;
    }

    if (
      filters.minRating !== undefined &&
      product.rating < filters.minRating
    ) {
      return false;
    }

    return true;
  });
}