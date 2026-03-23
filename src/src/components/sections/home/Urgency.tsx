"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, UserMinus, Ticket, Camera, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, prefersReduced]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const COSTS = [
  {
    icon: UserMinus,
    text: "Members canceling because they found a facility with more amenities",
  },
  {
    icon: Ticket,
    text: "Ticket revenue you did not collect because you did not host the event",
  },
  {
    icon: Camera,
    text: "Organic social content your competition created and you did not",
  },
  {
    icon: Users,
    text: "New members walking into a competitor's recovery event and never walking into yours",
  },
] as const;

export function Urgency() {
  return (
    <section className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />

      {/* Gradient accent */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wolfden-blue/10 blur-[100px]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="The Shift Is Here"
          title="Fitness Studios That Don't Offer Recovery Amenities Will Lose Members to Competitors Who Do Within the Next 12 Months"
        />

        {/* Big stat */}
        <FadeIn className="mb-12 text-center">
          <p className="font-display text-7xl font-extrabold text-wolfden-blue md:text-8xl lg:text-9xl">
            <AnimatedCounter target={147} suffix="%" />
          </p>
          <p className="mt-3 text-sm font-medium text-wolfden-muted md:text-base">
            Cold therapy consumer search growth over the last three years
          </p>
        </FadeIn>

        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-wolfden-muted md:text-lg">
            The recovery economy is not coming. It is already here. Equinox, Life Time, and every
            premium gym chain are adding recovery suites because recovery is now the single most
            powerful retention tool in the fitness industry. The facilities winning right now are the
            ones who figured out how to deliver premium recovery experiences now — on their terms,
            without the capital risk.
          </p>
        </FadeIn>

        <FadeIn className="mx-auto mt-6 max-w-3xl text-center" delay={0.1}>
          <p className="font-display text-lg font-bold text-white md:text-xl">
            Every month you wait is another month of:
          </p>
        </FadeIn>

        <StaggerChildren className="mx-auto mt-10 max-w-2xl space-y-4">
          {COSTS.map((cost, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wolfden-amber/10">
                  <cost.icon className="h-4 w-4 text-wolfden-amber" />
                </div>
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  {cost.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="lg" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
