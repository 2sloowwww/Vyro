import { Feather, Droplet, Ruler, Recycle } from "lucide-react";
import { Reveal, RevealGroup } from "./reveal";

const features = [
  {
    icon: Feather,
    title: "240gsm heavyweight cotton",
    description:
      "Substantial enough to hold its shape, soft enough to wear every day — no sheerness, no sagging.",
  },
  {
    icon: Droplet,
    title: "Garment-dyed, true black",
    description:
      "Dyed after the tee is sewn for deep, even color that resists the grey fade of ordinary black shirts.",
  },
  {
    icon: Ruler,
    title: "A fit that actually fits",
    description:
      "Tapered through the body with a reinforced collar that keeps its shape wear after wear.",
  },
  {
    icon: Recycle,
    title: "Responsibly made",
    description:
      "Certified organic cotton, low-impact dyes, and a supply chain we can trace start to finish.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-black uppercase sm:text-4xl">
          Built from the fabric up
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          VYRO isn&apos;t just a t-shirt — it&apos;s the one you reach for
          first, wash after wash, year after year.
        </p>
      </div>

      <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
        {features.map((feature) => (
          <Reveal key={feature.title} className="bg-background p-8">
            <feature.icon
              className="h-7 w-7 text-accent"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h3 className="mt-5 font-heading text-xl font-bold">
              {feature.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
