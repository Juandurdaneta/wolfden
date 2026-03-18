"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, DURATION } from "@/lib/animations";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = DURATION.section,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  const offsets = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -40 },
    right: { x: 40 },
    none: {},
  };

  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: EASE_SMOOTH as unknown as number[], delay },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
