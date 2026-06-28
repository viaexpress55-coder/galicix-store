"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { useSearch } from "@/components/providers/SearchProvider";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const router = useRouter();

  const {
    filters,
    setQuery,
  } = useSearch();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!filters.query.trim()) return;

    router.push(
      `/search?q=${encodeURIComponent(filters.query)}`
    );
  }

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full"
    >
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

      <Input
        value={filters.query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="h-10 pl-10 pr-4"
      />
    </form>
  );
}