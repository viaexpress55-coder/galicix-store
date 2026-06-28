"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { SearchState } from "@/lib/search/search-state";

interface SearchContextValue {
  filters: SearchState;

  setQuery: (query: string) => void;

  setCategory: (category?: string) => void;

  setBrand: (brand?: string) => void;

  setMinPrice: (price?: number) => void;

  setMaxPrice: (price?: number) => void;

  setRating: (rating?: number) => void;

  setSort: (sort?: SearchState["sort"]) => void;
}

const SearchContext =
  createContext<SearchContextValue | null>(null);

export function SearchProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filters, setFilters] =
    useState<SearchState>({
      query: "",
      sort: "reviews",
    });

  const value = useMemo(
    () => ({
      filters,

      setQuery(query: string) {
        setFilters((prev) => ({
          ...prev,
          query,
        }));
      },

      setCategory(category?: string) {
        setFilters((prev) => ({
          ...prev,
          category,
        }));
      },

      setBrand(brand?: string) {
        setFilters((prev) => ({
          ...prev,
          brand,
        }));
      },

      setMinPrice(minPrice?: number) {
        setFilters((prev) => ({
          ...prev,
          minPrice,
        }));
      },

      setMaxPrice(maxPrice?: number) {
        setFilters((prev) => ({
          ...prev,
          maxPrice,
        }));
      },

      setRating(minRating?: number) {
        setFilters((prev) => ({
          ...prev,
          minRating,
        }));
      },

      setSort(sort?: SearchState["sort"]) {
        setFilters((prev) => ({
          ...prev,
          sort,
        }));
      },
    }),
    [filters]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearch must be used inside SearchProvider"
    );
  }

  return context;
}