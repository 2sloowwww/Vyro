"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shades = [
  {
    name: "Black",
    swatch: "#131211",
    images: [
      "/images/akshay-black-3.jpg",
      "/images/akshay-black-1.jpg",
      "/images/akshay-black-2.jpg",
      "/images/akshay-black-4.jpg",
    ],
  },
  {
    name: "Lavender",
    swatch: "#b8ace0",
    images: ["/images/akshay-lavender-1.jpg", "/images/akshay-lavender-2.jpg"],
  },
];

export function ProductGallery() {
  const [shadeIndex, setShadeIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const shade = shades[shadeIndex];

  function selectShade(i: number) {
    setShadeIndex(i);
    setSlide(0);
  }

  function step(dir: 1 | -1) {
    setSlide((s) => (s + dir + shade.images.length) % shade.images.length);
  }

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-background shadow-[0_24px_40px_rgba(28,24,21,0.16)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${shade.name}-${slide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={shade.images[slide]}
              alt={`VYRO tee in ${shade.name}`}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {shade.images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
              data-cursor-hover
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/40 text-white transition-colors hover:bg-black/60"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
              data-cursor-hover
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/40 text-white transition-colors hover:bg-black/60"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {shade.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to photo ${i + 1}`}
                  onClick={() => setSlide(i)}
                  data-cursor-hover
                  className={`h-1.5 w-6 transition-colors ${
                    i === slide ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Shade:
        </span>
        <div className="flex gap-2">
          {shades.map((s, i) => (
            <button
              key={s.name}
              type="button"
              title={s.name}
              aria-label={s.name}
              aria-pressed={i === shadeIndex}
              onClick={() => selectShade(i)}
              data-cursor-hover
              className={`h-9 w-9 border transition-all ${
                i === shadeIndex
                  ? "border-foreground ring-2 ring-offset-2 ring-offset-background ring-foreground/40"
                  : "border-border"
              }`}
              style={{ backgroundColor: s.swatch }}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">{shade.name}</span>
      </div>
    </div>
  );
}
