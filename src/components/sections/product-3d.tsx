"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
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

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Trig on rotateY is naturally periodic, so this stays correct even as
  // rotateY climbs unbounded (0, 360, 720, ...) from the continuous spin.
  const lightFactor = useTransform(rotateY, (v) =>
    Math.max(Math.cos((v * Math.PI) / 180), 0)
  );
  const highlightOpacity = useTransform(lightFactor, (v) => v * 0.5);
  const highlightX = useTransform(
    rotateY,
    (v) => `${50 + Math.sin((v * Math.PI) / 180) * 45}%`
  );
  const shadowScale = useTransform(lightFactor, (v) => 0.85 + v * 0.15);
  const shadowOpacity = useTransform(shadowScale, (v) => v - 0.3);

  function startSpin(from: number) {
    idleControls.current = animate(rotateY, from + 360, {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
    });
  }

  useEffect(() => {
    if (prefersReducedMotion) return;
    startSpin(rotateY.get());
    return () => idleControls.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || e.pointerType !== "mouse" || !ref.current) return;
    idleControls.current?.stop();
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    animate(rotateY, px * 40, { type: "spring", stiffness: 150, damping: 20 });
    animate(rotateX, py * -26, { type: "spring", stiffness: 150, damping: 20 });
  }

  function handlePointerLeave() {
    if (prefersReducedMotion) return;
    animate(rotateX, 0, { type: "spring", stiffness: 150, damping: 20 });
    startSpin(rotateY.get());
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
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* depth layer: keeps the form reading as solid instead of paper-flat at edge-on angles */}
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-[0.94] opacity-60 blur-[1px] brightness-50"
          style={{ transform: "translateZ(-14px)" }}
        >
          {children}
        </div>

        <div className="relative">{children}</div>

        {/* rotation-reactive specular sweep */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent mix-blend-overlay"
          style={{
            left: highlightX,
            translateX: "-50%",
            opacity: highlightOpacity,
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-2 mx-auto h-3 w-2/3 rounded-full bg-foreground/25 blur-md"
          style={{ scaleX: shadowScale, opacity: shadowOpacity }}
        />
      </motion.div>
    </div>
  );
}
