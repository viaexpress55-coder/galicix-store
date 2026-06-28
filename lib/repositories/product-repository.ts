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