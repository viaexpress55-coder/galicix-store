import { Product } from "@/lib/types/product";

export const featuredProducts: Product[] = [
  {
    id: "1",

    title: "Apple AirPods Pro (2nd Generation)",
    brand: "Apple",

    description:
      "Premium wireless earbuds with Active Noise Cancellation, Adaptive Audio and USB-C charging case.",

    image: "https://picsum.photos/600?random=1",

    gallery: [
      "https://picsum.photos/900?random=11",
      "https://picsum.photos/900?random=12",
      "https://picsum.photos/900?random=13",
    ],

    category: "Electronics",

    rating: 4.8,
    reviews: 12840,

    features: [
      "Active Noise Cancellation",
      "Adaptive Audio",
      "Transparency Mode",
      "USB-C Charging",
    ],

    specifications: {
      Connectivity: "Bluetooth 5.3",
      Battery: "30 Hours",
      Weight: "50 g",
      Warranty: "1 Year",
    },

    offers: [
      {
        merchant: "Amazon",
        price: 229,
        oldPrice: 249,
        affiliateUrl: "#",
        shipping: "Free Shipping",
        inStock: true,
        updatedAt: "2026-06-28",
      },
      {
        merchant: "Best Buy",
        price: 235,
        affiliateUrl: "#",
        shipping: "Pickup Today",
        inStock: true,
        updatedAt: "2026-06-28",
      },
      {
        merchant: "Apple",
        price: 249,
        affiliateUrl: "#",
        shipping: "Free Shipping",
        inStock: true,
        updatedAt: "2026-06-28",
      },
    ],
  },

  {
    id: "2",

    title: "Samsung Galaxy Buds3 Pro",
    brand: "Samsung",

    description:
      "High-end wireless earbuds featuring adaptive ANC, immersive sound and AI-powered enhancements.",

    image: "https://picsum.photos/600?random=2",

    gallery: [
      "https://picsum.photos/900?random=21",
      "https://picsum.photos/900?random=22",
      "https://picsum.photos/900?random=23",
    ],

    category: "Electronics",

    rating: 4.7,
    reviews: 8421,

    features: [
      "Adaptive Noise Cancelling",
      "360 Audio",
      "Wireless Charging",
      "Bluetooth 5.4",
    ],

    specifications: {
      Connectivity: "Bluetooth 5.4",
      Battery: "30 Hours",
      Weight: "46 g",
      Warranty: "1 Year",
    },

    offers: [
      {
        merchant: "Amazon",
        price: 189,
        oldPrice: 219,
        affiliateUrl: "#",
        shipping: "Free Shipping",
        inStock: true,
        updatedAt: "2026-06-28",
      },
      {
        merchant: "Samsung",
        price: 199,
        affiliateUrl: "#",
        shipping: "Free Shipping",
        inStock: true,
        updatedAt: "2026-06-28",
      },
    ],
  },

  {
    id: "3",

    title: "Sony WH-1000XM5",
    brand: "Sony",

    description:
      "Industry-leading wireless noise cancelling headphones with exceptional battery life and premium audio.",

    image: "https://picsum.photos/600?random=3",

    gallery: [
      "https://picsum.photos/900?random=31",
      "https://picsum.photos/900?random=32",
      "https://picsum.photos/900?random=33",
    ],

    category: "Audio",

    rating: 4.9,
    reviews: 21560,

    features: [
      "Industry Leading ANC",
      "30 Hour Battery",
      "Multipoint Connection",
      "Hi-Res Audio",
    ],

    specifications: {
      Connectivity: "Bluetooth 5.2",
      Battery: "30 Hours",
      Weight: "250 g",
      Warranty: "1 Year",
    },

    offers: [
      {
        merchant: "Amazon",
        price: 349,
        oldPrice: 399,
        affiliateUrl: "#",
        shipping: "Free Shipping",
        inStock: true,
        updatedAt: "2026-06-28",
      },
      {
        merchant: "Sony",
        price: 359,
        affiliateUrl: "#",
        shipping: "Free Shipping",
        inStock: true,
        updatedAt: "2026-06-28",
      },
    ],
  },

  {
    id: "4",

    title: "Apple Watch Series 10",
    brand: "Apple",

    description:
      "Advanced smartwatch with health monitoring, fitness tracking and all-day battery life.",

    image: "https://picsum.photos/600?random=4",

    gallery: [
      "https://picsum.photos/900?random=41",
      "https://picsum.photos/900?random=42",
      "https://picsum.photos/900?random=43",
    ],

    category: "Wearables",

    rating: 4.8,
    reviews: 9632,

    features: [
      "ECG Monitoring",
      "Blood Oxygen Sensor",
      "Always-On Display",
      "Water Resistant",
    ],

    specifications: {
      Display: "Always-On Retina",
      Battery: "18 Hours",
      Weight: "39 g",
      Warranty: "1 Year",
    },

    offers: [
      {
        merchant: "Amazon",
        price: 399,
        oldPrice: 429,
        affiliateUrl: "#",
        shipping: "Free Shipping",
        inStock: true,
        updatedAt: "2026-06-28",
      },
      {
        merchant: "Apple",
        price: 429,
        affiliateUrl: "#",
        shipping: "Free Shipping",
        inStock: true,
        updatedAt: "2026-06-28",
      },
    ],
  },
];