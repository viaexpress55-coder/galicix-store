export interface Offer {
  merchant: string;
  price: number;
  oldPrice?: number;
  shipping: string;
  affiliateUrl: string;
  inStock: boolean;
  updatedAt: string;
}

export interface Product {
  id: string;

  title: string;
  brand: string;

  description: string;

  image: string;

  gallery: string[];

  category: string;

  rating: number;
  reviews: number;

  features: string[];

  specifications: Record<string, string>;

  offers: Offer[];
}