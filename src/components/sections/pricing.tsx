import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { discountPercent, formatINR, products } from "@/lib/products";
import { whatsappLink } from "@/lib/whatsapp";
import { Reveal, RevealGroup } from "./reveal";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <h2 className="max-w-2xl text-3xl font-black uppercase sm:text-4xl">
        Launch sale, no subscriptions
      </h2>
      <p className="mt-3 text-muted-foreground">
        Message us on WhatsApp to place your order.
      </p>

      <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        {products.map((plan) => {
          const off = discountPercent(plan);
          return (
            <Reveal
              key={plan.name}
              className={`relative flex flex-col p-8 transition-colors ${
                plan.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-secondary"
              }`}
            >
              <div className="absolute right-6 top-6 flex gap-2">
                <span className="border border-accent px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-accent">
                  {off}% off
                </span>
                {plan.featured && (
                  <span className="border border-accent px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-accent">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="font-heading text-xl font-bold uppercase">
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm font-semibold uppercase tracking-wide ${
                  plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {plan.shade}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <p className="font-heading text-4xl font-black">
                  {formatINR(plan.price)}
                </p>
                <p
                  className={`text-base font-medium line-through ${
                    plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  {formatINR(plan.mrp)}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span
                      className={
                        plan.featured ? "text-primary-foreground/90" : "text-foreground/90"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                render={
                  <a
                    href={whatsappLink(
                      `Hi VYRO, I'd like to order the ${plan.name} tee (${plan.shade}) at ${formatINR(plan.price)}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                  />
                }
                nativeButton={false}
                className={`mt-8 w-full rounded-none text-sm font-bold uppercase tracking-wide ${
                  plan.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/85"
                }`}
              >
                Order {plan.name} on WhatsApp
              </Button>
            </Reveal>
          );
        })}
      </RevealGroup>
    </section>
  );
}
