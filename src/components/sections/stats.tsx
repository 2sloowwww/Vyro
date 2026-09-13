import { Reveal, RevealGroup } from "./reveal";

const stats = [
  { value: "220gsm", label: "Heavyweight cotton" },
  { value: "12,400+", label: "Tees shipped" },
  { value: "4.9/5", label: "Average rating" },
  { value: "50 wash", label: "Color-fade tested" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
        {stats.map((stat) => (
          <Reveal key={stat.label} className="bg-background p-8 text-center">
            <p className="font-heading text-3xl font-black text-accent-ink sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
