"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function Parallax({
  children,
  className,
  strength = 60,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={prefersReducedMotion ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
