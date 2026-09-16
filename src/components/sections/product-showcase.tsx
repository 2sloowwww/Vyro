import { products } from "@/lib/products";
import { ProductCard } from "./product-card";
import { Reveal, RevealGroup } from "./reveal";

export function ProductShowcase() {
  return (
    <section id="product" className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-3xl font-black uppercase sm:text-4xl">
          Two fits. Pick yours.
        </h2>

        <RevealGroup className="mt-12 grid gap-12 md:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.slug}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
