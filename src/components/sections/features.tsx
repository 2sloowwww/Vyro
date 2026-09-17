import { Feather, Droplet, Ruler, Recycle, Shirt, Leaf } from "lucide-react";
import { Reveal, RevealGroup } from "./reveal";

const features = [
  { icon: Feather, title: "240gsm heavyweight, premium yarn cotton" },
  { icon: Droplet, title: "Fabric dyed before stitching, for deep, lasting color" },
  { icon: Shirt, title: "French terry interior for a soft, premium feel" },
  { icon: Ruler, title: "A fit that actually fits" },
  { icon: Leaf, title: "Eco-friendly packaging, near-zero plastic" },
  { icon: Recycle, title: "Responsibly made, built to outlast fast fashion" },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <h2 className="max-w-2xl text-3xl font-black uppercase sm:text-4xl">
        Built from the fabric up
      </h2>

      <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Reveal
            key={feature.title}
            className="group flex items-center gap-4 bg-background p-6 transition-colors hover:bg-secondary"
          >
            <feature.icon
              className="h-6 w-6 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h3 className="font-heading text-base font-bold">
              {feature.title}
            </h3>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
