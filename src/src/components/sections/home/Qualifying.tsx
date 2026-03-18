"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function Qualifying() {
  return (
    <section className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />

      <Container narrow className="relative z-10 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            This Is ONLY for Those Who Are Serious About Offering Premium Recovery{" "}
            <span className="text-gradient-blue">Without the Six-Figure Commitment</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-wolfden-muted md:text-lg">
            The Thrive Method Experience Blueprint is free. It is also the clearest, most actionable
            guide you will find on adding premium recovery experiences to your facility or event —
            without construction, without capital risk, and without operational burnout.
          </p>
        </FadeIn>

        {/* Scarcity callout */}
        <FadeIn delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-wolfden-amber/30 bg-wolfden-amber/5 p-6 md:p-8"
          >
            <div className="mb-3 flex items-center justify-center gap-2">
              <AlertCircle className="h-5 w-5 text-wolfden-amber" />
              <span className="text-sm font-bold tracking-wide text-wolfden-amber uppercase">
                Limited Availability
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/80 md:text-base">
              South Florida availability is limited. The Wolf Den only partners with a select number
              of facilities and events per month to maintain the quality and exclusivity that makes
              the Thrive Method work. Once our calendar fills, new partner inquiries go to a waitlist.
            </p>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10">
          <Button variant="primary" size="lg" href="#blueprint">
            Download Your Free Blueprint (Valued at $597)
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
