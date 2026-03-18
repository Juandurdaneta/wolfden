"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { EASE_SMOOTH } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AboutHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-wolfden-charcoal pt-20">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-20" />
      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wolfden-blue/8 blur-[120px]"
        animate={prefersReduced ? {} : { scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container narrow className="relative z-10 py-20 text-center md:py-28">
        <motion.span
          initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block text-xs font-bold tracking-[0.2em] text-wolfden-blue uppercase"
        >
          Our Story
        </motion.span>

        <motion.h1
          className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: EASE_SMOOTH as unknown as number[],
          }}
        >
          We Don&apos;t Rent Equipment. We Build Experiences That Make People Feel Something They{" "}
          <span className="text-gradient-blue">Cannot Stop Talking About.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-wolfden-muted"
          initial={prefersReduced ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          The Wolf Den exists because recovery is not just physical. It is the moment after the grind
          where communities are built, identities are forged, and the best version of your people
          begins to emerge.
        </motion.p>
      </Container>

      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-wolfden-light to-transparent" />
    </section>
  );
}
