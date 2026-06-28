import { SearchState } from "@/lib/search/search-state";
import { getAllProducts } from "@/lib/repositories/product-repository";
import { sortProducts } from "@/lib/services/sort-service";

export function searchProducts(state: SearchState) {
  const products = getAllProducts();

  const query = state.query.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesQuery =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query);

    const matchesCategory =
      !state.category ||
      product.category === state.category;

    const matchesBrand =
      !state.brand ||
      product.brand === state.brand;

    const bestPrice = product.offers[0].price;

    const matchesMinPrice =
      state.minPrice === undefined ||
      bestPrice >= state.minPrice;

    const matchesMaxPrice =
      state.maxPrice === undefined ||
      bestPrice <= state.maxPrice;

    const matchesRating =
      state.minRating === undefined ||
      product.rating >= state.minRating;

    return (
      matchesQuery &&
      matchesCategory &&
      matchesBrand &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesRating
    );
  });

  return sortProducts(filteredProducts, state.sort);
}