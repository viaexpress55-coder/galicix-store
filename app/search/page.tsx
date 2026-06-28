import SearchPageClient from "@/components/search/SearchPageClient";

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Search Results
      </h1>

      <SearchPageClient />
    </main>
  );
}