import { featuredProducts } from "@/lib/data/featured-products";

export function getAllProducts() {
  return featuredProducts;
}

export function getFeaturedProducts() {
  return featuredProducts;
}

export function getProductById(id: string) {
  return featuredProducts.find(
    (product) => product.id === id
  );
}

export function getProductsByCategory(category: string) {
  return featuredProducts.filter(
    (product) => product.category === category
  );
}

export function getCategories(): string[] {
  return [...new Set(featuredProducts.map(
    (product) => product.category
  ))].sort();
}

export function getBrands(): string[] {
  return [...new Set(featuredProducts.map(
    (product) => product.brand
  ))].sort();
}

export function getMinPrice(): number {
  return Math.min(
    ...featuredProducts.map(
      (product) => product.offers[0].price
    )
  );
}

export function getMaxPrice(): number {
  return Math.max(
    ...featuredProducts.map(
      (product) => product.offers[0].price
    )
  );
}