"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.5 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("cursor-none-desktop");

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor-hover]"
      );
      setHovering(!!target);
      setLabel(target?.dataset.cursorLabel ?? "");
    }

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.body.classList.remove("cursor-none-desktop");
    };
  }, [prefersReducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full bg-primary mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovering ? 64 : 10,
        height: hovering ? 64 : 10,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {hovering && label && (
        <span className="font-heading text-[10px] font-bold uppercase tracking-wide text-background">
          {label}
        </span>
      )}
    </motion.div>
  );
}
