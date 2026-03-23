"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gift, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const PACKAGE_ITEMS = [
  "Full Wolf Den mobile wellness trailer deployment to your location",
  "3-hour recovery experience window with cold plunge, sauna, and pneumatic compression",
  "Guided Thrive Method facilitation throughout",
  "100% turnkey execution — setup, operation, and breakdown handled entirely by The Wolf Den",
  "Post-event revenue and retention analysis debrief",
  "Member feedback collection to validate demand and guide your next experience",
] as const;

export function FirstEventPackage() {
  return (
    <section className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Your First Event"
          title="The First Event Showcase Package: Experience the Thrive Method Risk-Free"
          dark={false}
        />

        {/* Package checklist */}
        <FadeIn className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg shadow-black/5 md:p-10">
            <h3 className="mb-6 font-display text-lg font-extrabold text-wolfden-charcoal">
              Your First Event Showcase Package includes:
            </h3>
            <StaggerChildren className="space-y-4">
              {PACKAGE_ITEMS.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-wolfden-blue" />
                    <p className="text-sm leading-relaxed text-wolfden-text-secondary md:text-base">
                      {item}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>

        {/* Bonus callout */}
        <FadeIn className="mx-auto mt-8 max-w-3xl" delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-2xl border-2 border-wolfden-amber/30 bg-wolfden-amber/5 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wolfden-amber/15">
                <Gift className="h-5 w-5 text-wolfden-amber" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-wolfden-amber uppercase">
                  Bonus
                </span>
                <p className="mt-1 text-sm leading-relaxed text-wolfden-charcoal md:text-base">
                  Book your second event within 30 days of your first and receive a complimentary
                  1-hour extended community session added to your experience.
                </p>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* Guarantee callout */}
        <FadeIn className="mx-auto mt-6 max-w-3xl" delay={0.3}>
          <div className="rounded-2xl border border-wolfden-charcoal/10 bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wolfden-blue/10">
                <Shield className="h-5 w-5 text-wolfden-blue" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-wolfden-blue uppercase">
                  Guarantee
                </span>
                <p className="mt-1 text-sm leading-relaxed text-wolfden-text-secondary md:text-base">
                  If your members do not rave about it or if the experience does not meet our
                  professional standards, your next event is fully complimentary. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-10 text-center" delay={0.4}>
          <Button variant="primary" size="lg" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
