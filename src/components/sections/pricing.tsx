import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Reveal, RevealGroup } from "./reveal";

const plans = [
  {
    name: "1 Tee",
    price: "$32",
    features: [
      "240gsm combed cotton",
      "Garment-dyed color",
      "Free size exchange",
    ],
    featured: false,
  },
  {
    name: "3-Pack",
    price: "$84",
    features: [
      "Everything in 1 Tee",
      "Mix and match shades",
      "Save $12 vs. single tees",
    ],
    featured: true,
  },
  {
    name: "5-Pack",
    price: "$130",
    features: [
      "Everything in 3-Pack",
      "Save $30 vs. single tees",
      "Priority restock access",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <h2 className="max-w-2xl text-3xl font-black uppercase sm:text-4xl">
        Simple pricing, no subscriptions
      </h2>

      <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {plans.map((plan) => (
          <Reveal
            key={plan.name}
            className={`relative flex flex-col p-8 ${
              plan.featured ? "bg-primary text-primary-foreground" : "bg-background"
            }`}
          >
            {plan.featured && (
              <span className="absolute right-6 top-6 border border-accent px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-accent">
                Popular
              </span>
            )}

            <h3 className="font-heading text-xl font-bold uppercase">
              {plan.name}
            </h3>
            <p className="mt-6 font-heading text-4xl font-black">
              {plan.price}
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      plan.featured ? "text-accent" : "text-accent"
                    }`}
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
              className={`mt-8 w-full rounded-none text-sm font-bold uppercase tracking-wide ${
                plan.featured
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/85"
              }`}
            >
              Choose {plan.name}
            </Button>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
