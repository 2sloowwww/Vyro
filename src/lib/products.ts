export type Product = {
  slug: string;
  name: string;
  shade: string;
  swatch: string;
  mrp: number;
  price: number;
  images: string[];
  features: string[];
  fitNote: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "regular-fit-black",
    name: "Regular Fit",
    shade: "Black",
    swatch: "#131211",
    mrp: 799,
    price: 599,
    images: [
      "/images/akshay-black-3.jpg",
      "/images/akshay-black-1.jpg",
      "/images/akshay-black-2.jpg",
      "/images/akshay-black-4.jpg",
    ],
    features: ["240gsm heavyweight cotton", "True-to-size, tapered fit"],
    fitNote: "True to size. Size up one for a more relaxed, oversized look.",
  },
  {
    slug: "oversize-fit-lavender",
    name: "Oversize Fit",
    shade: "Lavender",
    swatch: "#b8ace0",
    mrp: 849,
    price: 649,
    images: ["/images/akshay-lavender-1.jpg", "/images/akshay-lavender-2.jpg"],
    features: ["240gsm heavyweight cotton", "Relaxed, oversized silhouette"],
    fitNote: "Cut oversized by design — no need to size up for the relaxed look.",
    featured: true,
  },
];

export function formatINR(amount: number) {
  return `₹${amount}`;
}

export function discountPercent(product: Product) {
  return Math.round(((product.mrp - product.price) / product.mrp) * 100);
}

export const maxDiscountPercent = Math.max(...products.map(discountPercent));
