const items = [
  "220GSM HEAVYWEIGHT COTTON",
  "GARMENT-DYED",
  "MADE TO LAST",
  "FREE SHIPPING OVER $75",
  "60-DAY RETURNS",
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-primary py-3">
      <div className="flex w-max animate-marquee gap-8 motion-reduce:animate-none">
        {[...track, ...track].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-heading text-sm font-bold uppercase tracking-wide text-primary-foreground"
          >
            {item}
            <span aria-hidden="true" className="text-accent">
              &bull;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
