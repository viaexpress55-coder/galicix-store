interface MerchantLogoProps {
  merchant: string;
}

export default function MerchantLogo({
  merchant,
}: MerchantLogoProps) {
  const colors: Record<string, string> = {
    Amazon: "bg-orange-500",
    Apple: "bg-black",
    "Best Buy": "bg-yellow-400 text-black",
    Walmart: "bg-blue-600",
    Target: "bg-red-600",
  };

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold text-white ${
        colors[merchant] ?? "bg-gray-700"
      }`}
    >
      {merchant.charAt(0)}
    </div>
  );
}