import { getAllProducts } from "@/lib/repositories/product-repository";

export function searchProducts(query: string) {
  const search = query.trim().toLowerCase();

  return getAllProducts().filter((product) => {
    return (
      product.title.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.offers.some((offer) =>
        offer.merchant.toLowerCase().includes(search)
      )
    );
  });
}