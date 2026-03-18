"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { STAGGER, EASE_SMOOTH, DURATION } from "@/lib/animations";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerChildren({
  children,
  className,
  stagger = STAGGER.normal,
  once = true,
  amount = 0.2,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.1 },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION.section, ease: EASE_SMOOTH as unknown as number[] },
        },
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
