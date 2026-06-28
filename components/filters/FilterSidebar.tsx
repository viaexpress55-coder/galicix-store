import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

export default function FilterSidebar() {
  return (
    <aside className="w-full rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Filters
      </h2>

      <div className="space-y-8">

        <section>
          <h3 className="mb-3 font-semibold">
            Category
          </h3>

          <CategoryFilter />
        </section>

        <section>
          <h3 className="mb-3 font-semibold">
            Brand
          </h3>

          <BrandFilter />
        </section>

        <section>
          <h3 className="mb-3 font-semibold">
            Price
          </h3>

          <PriceFilter />
        </section>

        <section>
          <h3 className="mb-3 font-semibold">
            Rating
          </h3>

          <RatingFilter />
        </section>

      </div>

    </aside>
  );
}