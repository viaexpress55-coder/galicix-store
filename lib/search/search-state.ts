import { SortOption } from "@/lib/services/sort-service";

export interface SearchState {
  query: string;

  category?: string;

  brand?: string;

  minPrice?: number;

  maxPrice?: number;

  minRating?: number;

  sort?: SortOption;
}

export const defaultSearchState: SearchState = {
  query: "",
  sort: "reviews",
};