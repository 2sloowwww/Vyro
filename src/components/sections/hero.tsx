import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { TshirtIllustration } from "./tshirt-illustration";
import { Product3D } from "./product-3d";
import { Parallax } from "./parallax";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-noise">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-14 md:grid-cols-2 md:items-center md:pb-24 md:pt-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 border border-foreground/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground/70">
            Restocked — now in every size
          </span>

          <h1 className="text-5xl font-black uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            The plain
            <br />
            black tee,{" "}
            <span className="text-highlight-red">perfected</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Staple is cut from heavyweight combed cotton and garment-dyed for
            a deep, even black that doesn&apos;t fade wash after wash.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#pricing" data-cursor-hover />}
              nativeButton={false}
              size="lg"
              className="rounded-none bg-primary px-8 text-base font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/85"
            >
              Shop the tee
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              render={<a href="#product" data-cursor-hover />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/30 px-8 text-base font-bold uppercase tracking-wide"
            >
              See the fit
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> from
              12,400+ closets upgraded
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <Parallax strength={30}>
            <Product3D className="mx-auto flex justify-center">
              <TshirtIllustration className="h-auto w-full max-w-[280px] drop-shadow-[0_24px_40px_rgba(28,24,21,0.18)] md:max-w-[340px]" />
            </Product3D>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
