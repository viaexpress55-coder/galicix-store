import MerchantLogo from "@/components/merchant/MerchantLogo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Offer } from "@/lib/types/product";

interface OffersTableProps {
  offers: Offer[];
}

export default function OffersTable({
  offers,
}: OffersTableProps) {
  const lowestPrice = Math.min(
    ...offers.map((offer) => offer.price)
  );

  return (
    <section className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="border-b px-8 py-6">
        <h2 className="text-2xl font-bold">
          Available Offers
        </h2>

        <p className="mt-1 text-gray-500">
          Compare prices from trusted merchants.
        </p>
      </div>

      <div className="divide-y">

        {offers.map((offer) => {

          const isBest = offer.price === lowestPrice;

          const savings =
            offer.oldPrice &&
            offer.oldPrice > offer.price
              ? offer.oldPrice - offer.price
              : 0;

          return (
            <div
              key={offer.merchant}
              className="grid items-center gap-6 px-8 py-6 transition-colors hover:bg-gray-50 lg:grid-cols-[80px_1fr_180px_170px_170px]"
            >
              {/* Merchant */}

              <div>
                <MerchantLogo merchant={offer.merchant} />
              </div>

              <div>

                <div className="flex items-center gap-3">

                  <h3 className="text-lg font-semibold">
                    {offer.merchant}
                  </h3>

                  {isBest && (
                    <Badge className="bg-green-600">
                      Best Price
                    </Badge>
                  )}

                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Trusted Merchant
                </p>

              </div>

              {/* Price */}

              <div>

                <div className="text-3xl font-black">
                  ${offer.price}
                </div>

                {offer.oldPrice && (
                  <div className="text-gray-400 line-through">
                    ${offer.oldPrice}
                  </div>
                )}

                {savings > 0 && (
                  <div className="mt-1 text-sm font-semibold text-green-600">
                    Save ${savings}
                  </div>
                )}

              </div>

              {/* Shipping */}

              <div>

                <Badge variant="secondary">
                  🚚 {offer.shipping}
                </Badge>

                <div className="mt-3">

                  {offer.inStock ? (
                    <Badge className="bg-green-600">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      Out of Stock
                    </Badge>
                  )}

                </div>

              </div>

              {/* CTA */}

              <div>

                <a
                  href={offer.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full rounded-xl">
                    View Deal
                  </Button>
                </a>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}