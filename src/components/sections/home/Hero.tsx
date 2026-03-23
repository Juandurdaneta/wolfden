"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_SMOOTH } from "@/lib/animations";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const headlineWords = "Offer Cold Plunge, Heat & Compression Therapy at Your Facility or Event".split(" ");
  const highlightWords = "Without a Permanent Buildout or Six-Figure Budget".split(" ");

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-wolfden-charcoal pt-20"
    >
      {/* Background grid pattern */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-30" />

      {/* Gradient orb */}
      <motion.div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wolfden-blue/10 blur-[120px]"
        animate={prefersReduced ? {} : { scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom mist */}
      <motion.div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-wolfden-blue/5 to-transparent"
        animate={prefersReduced ? {} : { opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-wolfden-blue/30 bg-wolfden-blue/10 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-wolfden-blue" />
              <span className="text-xs font-semibold tracking-wide text-wolfden-blue uppercase">
                South Florida&apos;s Premier Mobile Wellness
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={`h-${i}`}
                  className="mr-[0.3em] inline-block text-white"
                  initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + i * 0.04,
                    ease: EASE_SMOOTH as unknown as number[],
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <span className="block mt-2">
                {highlightWords.map((word, i) => (
                  <motion.span
                    key={`hl-${i}`}
                    className="text-gradient-blue mr-[0.3em] inline-block"
                    initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.9 + i * 0.04,
                      ease: EASE_SMOOTH as unknown as number[],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 max-w-lg text-lg leading-relaxed text-wolfden-muted md:text-xl"
              initial={prefersReduced ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              While Creating Unique Recovery Experiences Your Community
              Can&apos;t Stop Talking About
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <Button variant="primary" size="lg" href="#blueprint">
                Download Your Free Blueprint
              </Button>
              <Button variant="ghost" size="lg" href="#consult" showArrow={false}>
                Book a Free Consult
              </Button>
            </motion.div>
          </div>

          {/* Video placeholder */}
          <motion.div
            className="order-1 lg:order-2"
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="glow-blue-subtle group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border border-wolfden-blue/20 bg-gradient-to-br from-wolfden-charcoal to-wolfden-dark">
              {/* Video background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-wolfden-blue/5 via-transparent to-wolfden-blue/10" />
              <div className="bg-grid-pattern absolute inset-0 opacity-20" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-wolfden-blue/60 bg-wolfden-blue/20 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-wolfden-blue group-hover:bg-wolfden-blue/30 group-hover:shadow-[0_0_40px_rgba(12,123,220,0.4)] md:h-20 md:w-20"
                  animate={prefersReduced ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Play className="h-6 w-6 translate-x-0.5 md:h-8 md:w-8" fill="currentColor" />
                </motion.div>
              </div>

              {/* Brand label */}
              <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-wolfden-blue" />
                <span className="text-xs font-medium text-white/70">
                  Watch the Wolf Den Experience
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-wolfden-charcoal to-transparent" />
    </section>
  );
}
