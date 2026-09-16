import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/sections/custom-cursor";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.vyrostore.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VYRO — The Plain Tee, Perfected | Premium 240GSM T-Shirts",
    template: "%s | VYRO",
  },
  description:
    "VYRO makes premium 240gsm heavyweight cotton tees, fabric-dyed before stitching for deep, lasting color. Regular Fit in Black and Oversize Fit in Lavender. Free shipping over ₹999, 20-day returns.",
  keywords: [
    "VYRO",
    "VYRO store",
    "premium t-shirts India",
    "240gsm t-shirt",
    "oversized t-shirt India",
    "heavyweight cotton tee",
    "plain black t-shirt",
    "plain lavender t-shirt",
  ],
  applicationName: "VYRO",
  category: "Apparel & Fashion",
  creator: "VYRO",
  publisher: "VYRO",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/" },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "VYRO",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "VYRO",
    title: "VYRO — The Plain Tee, Perfected",
    description:
      "Premium 240gsm heavyweight cotton tees, fabric-dyed before stitching for deep, lasting color. Regular Fit in Black and Oversize Fit in Lavender.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VYRO — The plain tee, perfected",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VYRO — The Plain Tee, Perfected",
    description:
      "Premium 240gsm heavyweight cotton tees in Regular Fit Black and Oversize Fit Lavender.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.country": "India",
    language: "en-IN",
    "DC.title": "VYRO — The Plain Tee, Perfected",
    "DC.description":
      "Premium 240gsm heavyweight cotton tees, fabric-dyed before stitching for deep, lasting color.",
    "DC.language": "en-IN",
    "DC.creator": "VYRO",
    rating: "general",
    distribution: "global",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f5c66",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "VYRO",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "VYRO makes premium 240gsm heavyweight cotton tees, fabric-dyed before stitching for deep, lasting color.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: ["https://www.instagram.com/vyrostore.in/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-84595-01931",
    email: "hello@vyrostore.in",
    contactType: "customer service",
    areaServed: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
