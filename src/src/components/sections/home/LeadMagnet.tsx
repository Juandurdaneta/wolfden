"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function LeadMagnet() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="blueprint" className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      {/* Background */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-20" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="Free Blueprint"
              title="The Thrive Method Experience Blueprint"
              description="The exact framework top facilities, event organizers, and wellness planners are using right now to offer premium cold, heat and compression therapy — without construction, vendor nightmares, and without lifting a finger on setup or breakdown."
              centered={false}
            />
            <FadeIn delay={0.2}>
              <p className="mb-8 text-sm font-semibold text-wolfden-amber md:text-base">
                Valued at $597. Yours free.
              </p>
              <Button variant="primary" size="lg" href="#blueprint-form">
                Download Your Free Copy
              </Button>
            </FadeIn>
          </div>

          {/* Blueprint mockup */}
          <FadeIn direction="right" delay={0.3}>
            <motion.div
              className="relative mx-auto max-w-sm"
              animate={prefersReduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="glow-blue relative overflow-hidden rounded-2xl border border-wolfden-blue/30 bg-gradient-to-br from-wolfden-dark to-wolfden-charcoal p-8 shadow-2xl md:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wolfden-blue/20">
                    <FileText className="h-5 w-5 text-wolfden-blue" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-wolfden-blue uppercase">
                    Free Guide
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold text-white md:text-2xl">
                  The Thrive Method Experience Blueprint
                </h3>
                <p className="mt-3 text-sm text-wolfden-muted">
                  By Wolf Den Mobile Wellness Lounge
                </p>
                <div className="mt-6 space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full bg-white/5"
                      style={{ width: `${100 - i * 12}%` }}
                    />
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 text-wolfden-blue">
                  <Download className="h-4 w-4" />
                  <span className="text-xs font-semibold">PDF • Instant Download</span>
                </div>
              </div>

              {/* Decorative shadow card */}
              <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl border border-wolfden-blue/10 bg-wolfden-blue/5" />
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
