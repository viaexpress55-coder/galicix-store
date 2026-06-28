export interface Product {
  id: string;
  title: string;
  image: string;

  category: string;

  price: number;
  oldPrice?: number;

  rating: number;
  reviews: number;

  merchant: string;

  affiliateUrl: string;
}