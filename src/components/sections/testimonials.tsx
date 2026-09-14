import { Star } from "lucide-react";
import { Reveal, RevealGroup } from "./reveal";

const testimonials = [
  {
    quote:
      "I've bought a dozen 'perfect' black tees that turned grey after a month. This one still looks brand new.",
    name: "Priya M.",
    role: "Wears it three times a week",
  },
  {
    quote:
      "The weight is what sells it. It doesn't feel like a $20 shirt, and it doesn't look like one either.",
    name: "Jordan T.",
    role: "Software engineer",
  },
  {
    quote:
      "Ordered my usual size expecting it to run small like everything else. It fit perfectly the first try.",
    name: "Alicia R.",
    role: "Repeat customer",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-black uppercase sm:text-4xl">
          Worn daily, not just bought
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Real notes from the VYRO community — unedited, unpaid, unbothered.
        </p>
      </div>

      <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {testimonials.map((t) => (
          <Reveal key={t.name} className="bg-background p-8">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-4 text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-5 font-heading font-bold">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
