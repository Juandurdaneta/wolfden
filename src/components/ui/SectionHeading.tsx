"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  dark = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "mb-12 md:mb-16 lg:mb-20",
        centered && "text-center",
        className
      )}
    >
      <motion.div variants={fadeInUp}>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </motion.div>
      <motion.h2
        variants={fadeInUp}
        className={cn(
          "mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-wolfden-charcoal"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "mx-auto mt-5 max-w-3xl text-base leading-relaxed md:text-lg",
            dark ? "text-wolfden-muted" : "text-wolfden-text-secondary"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
