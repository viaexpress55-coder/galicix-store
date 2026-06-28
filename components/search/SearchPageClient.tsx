"use client";

import FilterSidebar from "@/components/filters/FilterSidebar";
import SearchResults from "@/components/search/SearchResults";
import SortDropdown from "@/components/search/SortDropdown";

export default function SearchPageClient() {
  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
      <FilterSidebar />

      <section>
        <div className="mb-8 flex justify-end">
          <SortDropdown />
        </div>

        <SearchResults />
      </section>
    </div>
  );
}
