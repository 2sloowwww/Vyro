import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "./product-gallery";
import { Reveal, RevealGroup } from "./reveal";

export function ProductShowcase() {
  return (
    <section id="product" className="border-y border-border bg-card py-20 md:py-28">
      <RevealGroup className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <Reveal className="order-2 md:order-1">
          <Badge className="rounded-none bg-primary px-3 py-1 text-primary-foreground" variant="secondary">
            The VYRO Tee
          </Badge>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">
            One tee. Two shades.
          </h2>
        </Reveal>

        <Reveal className="order-1 md:order-2">
          <ProductGallery />
        </Reveal>
      </RevealGroup>
    </section>
  );
}
