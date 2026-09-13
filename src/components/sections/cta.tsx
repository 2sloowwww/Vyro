import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <div className="bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
        <h2 className="mx-auto max-w-xl text-3xl font-black uppercase sm:text-4xl">
          Ready to retire your old black tee?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-primary-foreground/70">
          Free shipping, 60-day returns, and a black that actually stays
          black.
        </p>
        <Button
          render={<a href="#pricing" />}
          nativeButton={false}
          size="lg"
          className="mt-8 rounded-none bg-accent px-8 text-base font-bold uppercase tracking-wide text-accent-foreground hover:bg-accent/90"
        >
          Shop Staple now
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
