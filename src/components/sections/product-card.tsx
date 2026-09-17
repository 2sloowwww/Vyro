import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { discountPercent, formatINR, type Product } from "@/lib/products";
import { ProductGallery } from "./product-gallery";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <ProductGallery
        images={product.images}
        alt={`VYRO ${product.name} tee in ${product.shade}`}
      />

      <div className="relative -mt-4 mx-4 border border-white/50 bg-white/55 p-5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(15,92,102,0.25)] sm:mx-6 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <Badge
            className="rounded-none bg-primary px-3 py-1 text-primary-foreground"
            variant="secondary"
          >
            {product.name}
          </Badge>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-accent">
              {discountPercent(product)}% off
            </span>
            {product.featured && (
              <span className="border border-accent px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-accent">
                Popular
              </span>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span
            className="h-4 w-4 shrink-0 border border-border"
            style={{ backgroundColor: product.swatch }}
            aria-hidden="true"
          />
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {product.shade}
          </span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <p className="font-heading text-3xl font-black">
            {formatINR(product.price)}
          </p>
          <p className="text-base font-medium text-muted-foreground line-through">
            {formatINR(product.mrp)}
          </p>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">{product.fitNote}</p>

        <ul className="mt-4 space-y-1.5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          render={<a href="#pricing" data-cursor-hover />}
          nativeButton={false}
          className="mt-6 w-full rounded-none text-sm font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/85"
        >
          Shop {product.name}
        </Button>
      </div>
    </div>
  );
}
