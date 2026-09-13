"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  animate,
  useReducedMotion,
  type AnimationPlaybackControls,
} from "framer-motion";

export function Product3D({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const idleControls = useRef<AnimationPlaybackControls | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const rotateX = useMotionValue(6);
  const rotateY = useMotionValue(-16);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    idleControls.current = animate(rotateY, [-16, 16, -16], {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return () => idleControls.current?.stop();
  }, [prefersReducedMotion, rotateY]);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || e.pointerType !== "mouse" || !ref.current) return;
    idleControls.current?.stop();
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 34);
    rotateX.set(py * -26);
  }

  function handlePointerLeave() {
    if (prefersReducedMotion) return;
    animate(rotateX, 6, { duration: 0.6, ease: "easeOut" });
    idleControls.current = animate(rotateY, [rotateY.get(), -16, 16, -16], {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    });
  }

  return (
    <div
      ref={ref}
      data-cursor-hover
      data-cursor-label="Drag"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`perspective-1000 ${className ?? ""}`}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
