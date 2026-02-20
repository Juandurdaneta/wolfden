"use client";

import { motion } from "framer-motion";
import { DollarSign, LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { fadeInUp, cardHover } from "@/lib/animations";

const PAIN_POINTS = [
  {
    icon: DollarSign,
    stat: "$50K–$150K",
    text: "You don't have this sitting around for a permanent buildout",
  },
  {
    icon: LayoutGrid,
    stat: "Empty Room",
    text: "You don't have space for equipment that sits idle between classes",
  },
] as const;

export function Problem() {
  return (
    <section className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="The Reality"
          title="You Know Your Members Want Recovery. You Just Can't Figure Out How to Give It to Them."
          dark={false}
        />

        <FadeIn>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
            You already know recovery is the next frontier. Your members ask about cold plunge every
            single week. Someone leaves a comment on every recovery post saying &ldquo;we NEED this.&rdquo;
            But here&apos;s where it falls apart every time:
          </p>
        </FadeIn>

        {/* Pain point cards */}
        <StaggerChildren className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <StaggerItem key={point.stat}>
              <motion.div
                whileHover={cardHover}
                className="relative overflow-hidden rounded-2xl border-l-4 border-wolfden-blue bg-wolfden-charcoal p-8 will-change-transform"
              >
                <point.icon className="mb-4 h-8 w-8 text-wolfden-blue" />
                <p className="font-display text-2xl font-extrabold text-white md:text-3xl">
                  {point.stat}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-wolfden-muted md:text-base">
                  {point.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Pull quote */}
        <FadeIn className="mx-auto mt-16 max-w-3xl" delay={0.2}>
          <blockquote className="relative border-l-4 border-wolfden-blue py-2 pl-8">
            <p className="font-display text-xl font-bold leading-snug text-wolfden-charcoal md:text-2xl">
              It&apos;s not that you don&apos;t want to offer premium recovery. It&apos;s that nobody has
              made it easy enough for you to actually do it without turning your business upside down.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn className="mt-8 text-center" delay={0.3}>
          <p className="font-display text-lg font-bold text-wolfden-charcoal md:text-xl">
            That&apos;s exactly what Wolf Den was built to fix.
          </p>
        </FadeIn>

        <FadeIn className="mt-10 text-center" delay={0.4}>
          <Button variant="primary" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
