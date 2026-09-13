import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { TshirtIllustration } from "./tshirt-illustration";
import { Product3D } from "./product-3d";
import { Parallax } from "./parallax";
import { Reveal, RevealGroup } from "./reveal";

const colorways = [
  { name: "Jet Black", swatch: "#100d0b" },
  { name: "Faded Black", swatch: "#3a352f" },
  { name: "Off White", swatch: "#f2ece1" },
  { name: "Clay", swatch: "#bd5b34" },
];

const specs = [
  "220gsm combed cotton, garment-dyed jet black",
  "Reinforced crew collar that keeps its shape",
  "Tapered fit, true to size, pre-shrunk",
  "Machine washable, holds color wash after wash",
];

export function ProductShowcase() {
  return (
    <section
      id="product"
      className="border-y border-border bg-card py-20 md:py-28"
    >
      <RevealGroup className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <Reveal className="order-2 md:order-1">
          <Badge className="rounded-none bg-primary px-3 py-1 text-primary-foreground" variant="secondary">
            The Staple Tee
          </Badge>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">
            One t-shirt. Four shades.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pick a shade that matches your wardrobe, then let the fabric do
            the heavy lifting — weight, fit, and color built to last from day
            one.
          </p>

          <ul className="mt-8 space-y-3">
            {specs.map((spec) => (
              <li key={spec} className="flex items-start gap-3">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-foreground/90">{spec}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Shades:
            </span>
            <div className="flex gap-2">
              {colorways.map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="h-8 w-8 border border-border"
                  style={{ backgroundColor: c.swatch }}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 flex justify-center md:order-2">
          <Parallax strength={24}>
            <Product3D>
              <TshirtIllustration className="h-auto w-full max-w-[300px] drop-shadow-[0_24px_40px_rgba(28,24,21,0.16)]" />
            </Product3D>
          </Parallax>
        </Reveal>
      </RevealGroup>
    </section>
  );
}
