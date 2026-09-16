"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { maxDiscountPercent } from "@/lib/products";

const slides = [
  { src: "/images/akshay-black-3.jpg", alt: "VYRO tee in Black" },
  { src: "/images/akshay-lavender-1.jpg", alt: "VYRO tee in Lavender" },
  { src: "/images/akshay-black-1.jpg", alt: "VYRO tee in Black, detail" },
  { src: "/images/akshay-lavender-2.jpg", alt: "VYRO tee in Lavender, detail" },
  { src: "/images/akshay-black-2.jpg", alt: "VYRO tee in Black, detail" },
  { src: "/images/akshay-black-4.jpg", alt: "VYRO tee in Black, back" },
];

export function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[slide].src}
            alt={slides[slide].alt}
            fill
            priority={slide === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16">
        <div className="inline-flex w-fit items-center gap-3 bg-accent px-5 py-2.5 text-accent-foreground">
          <span className="text-xs font-bold uppercase tracking-widest">
            Launch sale
          </span>
          <span className="h-4 w-px bg-accent-foreground/40" aria-hidden="true" />
          <span className="font-heading text-lg font-black uppercase sm:text-xl">
            Up to {maxDiscountPercent}% off
          </span>
        </div>

        <h1 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          The plain tee, <span className="text-highlight">perfected</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button
            render={<a href="#pricing" data-cursor-hover />}
            nativeButton={false}
            size="lg"
            className="rounded-none bg-white px-8 text-base font-bold uppercase tracking-wide text-black hover:bg-white/85"
          >
            Shop the tee
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>

          <div className="flex items-center gap-2" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
            <span className="text-sm font-semibold text-white/80">4.6</span>
          </div>
        </div>

        <div className="mt-8 flex gap-2" role="tablist" aria-label="Hero photos">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === slide}
              aria-label={s.alt}
              onClick={() => setSlide(i)}
              data-cursor-hover
              className={`h-1.5 w-8 transition-colors ${
                i === slide ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
