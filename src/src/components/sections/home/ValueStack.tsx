"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const VALUE_ITEMS = [
  {
    title: "The #1 Mistake Facility Owners Make When Trying to Add Recovery",
    description: "And why it costs them members they cannot get back",
  },
  {
    title: "The Devastating Revenue Gap Most Studio Owners Never See Coming",
    description:
      "How much monthly revenue you are leaving on the table by not monetizing your community's existing demand for recovery",
  },
  {
    title: "3 Real-World Examples of Facilities Like Yours",
    description:
      "How they used mobile recovery to generate immediate revenue, stop membership turnover, and create content",
  },
  {
    title: "The Cold Hard Truth About Permanent Recovery Buildouts",
    description:
      "Why the math rarely works for boutique operators — and what the smartest studios are doing instead",
  },
  {
    title: "What Never to Do When Planning Your First Recovery Event",
    description:
      "Unless you want to hand your members an excuse to leave",
  },
  {
    title: "The Exact Pricing and Event Structure for Highest ROI",
    description:
      "For boutique studios, events, and corporate wellness programs",
  },
] as const;

export function ValueStack() {
  return (
    <section className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Inside the Blueprint"
          title="Here's What You'll Discover Inside Your Free Thrive Method Experience Blueprint"
        />

        <StaggerChildren className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
          {VALUE_ITEMS.map((item, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-6 transition-colors duration-200 will-change-transform hover:border-wolfden-blue/20"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-wolfden-blue" />
                <div>
                  <p className="font-display text-base font-bold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-wolfden-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <motion.div
          className="mt-14 text-center"
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
