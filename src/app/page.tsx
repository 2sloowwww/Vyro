import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { MarketplaceBadges } from "@/components/sections/marketplace-badges";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/sections/whatsapp-button";
import { products } from "@/lib/products";

const productsJsonLd = products.map((product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `VYRO ${product.name} Tee — ${product.shade}`,
  description: `${product.features.join(", ")}. ${product.fitNote}`,
  image: `https://vyrostore.in${product.images[0]}`,
  brand: { "@type": "Brand", name: "VYRO" },
  color: product.shade,
  offers: {
    "@type": "Offer",
    url: "https://vyrostore.in/#pricing",
    priceCurrency: "INR",
    price: product.price,
    availability: "https://schema.org/InStock",
  },
}));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Features />
        <ProductShowcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <MarketplaceBadges />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
