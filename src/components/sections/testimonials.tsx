import { Star } from "lucide-react";
import { Reveal, RevealGroup } from "./reveal";

const testimonials = [
  {
    quote: "Bought a dozen 'perfect' tees that faded fast. This one hasn't.",
    name: "Priya M.",
  },
  {
    quote: "Doesn't feel like a $20 shirt, and it doesn't look like one either.",
    name: "Jordan T.",
  },
  {
    quote: "Fit perfectly on the first try — no sizing gamble.",
    name: "Alicia R.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <h2 className="max-w-2xl text-3xl font-black uppercase sm:text-4xl">
        Worn daily, not just bought
      </h2>

      <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {testimonials.map((t) => (
          <Reveal key={t.name} className="bg-background p-8">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-4 text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-5 text-sm font-semibold text-muted-foreground">
              {t.name} · Verified buyer
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
