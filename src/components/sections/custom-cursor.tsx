"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

function subscribeNoop() {
  return () => {};
}

function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const finePointer = useSyncExternalStore(
    subscribeNoop,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );
  const enabled = finePointer && !prefersReducedMotion;
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;

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
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full bg-white mix-blend-difference"
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
