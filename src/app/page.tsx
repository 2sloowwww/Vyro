import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Features />
        <ProductShowcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
