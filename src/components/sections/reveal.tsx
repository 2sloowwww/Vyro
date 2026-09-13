"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 36, rotateX: -12 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Component = as === "li" ? motion.li : motion.div;
  return (
    <Component
      variants={item}
      className={className}
      style={{ transformPerspective: 800 }}
    >
      {children}
    </Component>
  );
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
