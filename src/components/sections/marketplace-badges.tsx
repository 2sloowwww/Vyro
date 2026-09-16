import { Reveal, RevealGroup } from "./reveal";

const marketplaces = [
  { src: "/logos/amazon.svg", alt: "Amazon", offset: "translate-y-1" },
  { src: "/logos/flipkart.svg", alt: "Flipkart", offset: "" },
  { src: "/logos/blinkit.svg", alt: "Blinkit", offset: "" },
];

export function MarketplaceBadges() {
  return (
    <section className="border-t border-border bg-card py-14">
      <RevealGroup className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Coming soon on
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {marketplaces.map((m) => (
              // eslint-disable-next-line @next/next/no-img-element
              <div
                key={m.alt}
                className="flex h-16 w-32 items-center justify-center sm:h-20 sm:w-40"
              >
                <img
                  src={m.src}
                  alt={m.alt}
                  className={`max-h-full max-w-full object-contain opacity-75 transition-opacity duration-300 hover:opacity-100 ${m.offset}`}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </RevealGroup>
    </section>
  );
}
