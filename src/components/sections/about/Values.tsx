"use client";

import { motion } from "framer-motion";
import { Users, HandshakeIcon, Accessibility, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { cardHover } from "@/lib/animations";

const VALUES = [
  {
    icon: Users,
    title: "Community Over Transaction",
    description:
      "Every event we facilitate is designed to deepen connection, not just generate revenue. The moments people have together inside the Wolf Den are the reason they come back and bring their people.",
  },
  {
    icon: HandshakeIcon,
    title: "Earned Trust, Never Assumed",
    description:
      "We understand what it means to put your brand in someone else's hands. We earn that trust through meticulous preparation, professional execution, and a zero-compromise standard on experience quality.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Without Apology",
    description:
      "Premium recovery should not be gated behind a six-figure buildout. We exist to make world-class recovery experiences available to communities that deserve them — right now.",
  },
  {
    icon: Target,
    title: "Results That Prove the Mission",
    description:
      "We measure success by member retention rates, revenue generated, social content created, and community connection deepened. Numbers matter — so do the stories behind them.",
  },
] as const;

export function Values() {
  return (
    <section id="values" className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Values"
          dark={false}
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <motion.div
                whileHover={cardHover}
                className="group h-full rounded-2xl bg-white p-8 shadow-lg shadow-black/5 transition-shadow duration-300 will-change-transform hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-wolfden-blue/10 transition-colors duration-300 group-hover:bg-wolfden-blue/15">
                  <value.icon className="h-6 w-6 text-wolfden-blue" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-wolfden-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-wolfden-text-secondary">
                  {value.description}
                </p>
              </motion.div>
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
          <Button variant="primary" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
