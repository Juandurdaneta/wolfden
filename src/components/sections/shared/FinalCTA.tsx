"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FinalCTAProps {
  headline?: string;
  showScarcity?: boolean;
}

export function FinalCTA({
  headline = "Stop Watching Your Competition Create the Experiences Your Members Are Asking You For",
  showScarcity = true,
}: FinalCTAProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      {/* Background effects */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wolfden-blue/8 blur-[100px]"
        animate={prefersReduced ? {} : { scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container narrow className="relative z-10 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            {headline}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-wolfden-muted md:text-lg">
            The Thrive Method Experience Blueprint is free, immediately actionable, and gives you the
            exact framework top operators are using right now to add premium recovery to their
            community.
          </p>
        </FadeIn>

        {showScarcity && (
          <FadeIn delay={0.15}>
            <p className="mt-4 text-sm font-medium text-wolfden-amber">
              South Florida availability is limited. New partner slots fill on a first-come, first-served basis.
            </p>
          </FadeIn>
        )}

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="#blueprint">
              Download Your Free Blueprint
            </Button>
            <Button variant="ghost" size="lg" href="#consult">
              Book a Free Consult
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
