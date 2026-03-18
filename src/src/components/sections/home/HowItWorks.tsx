"use client";

import { motion } from "framer-motion";
import { Search, Palette, Truck, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We learn your facility, your community, your goals, and your timeline. You share what matters most — member retention, social content, revenue generation, brand positioning — and we build your experience around it.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Custom Experience Design",
    description:
      "We design a recovery experience that feels native to your brand. From the event structure and timing to the facilitated programming and promotional strategy, every detail is aligned with who your members are.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Turnkey Delivery",
    description:
      "The Wolf Den arrives at your location with full cold plunge, sauna therapy, pneumatic compression, and optional leadership facilitation. Our team handles 100% of setup, operation, and breakdown. You do not move a single piece of equipment.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Momentum",
    description:
      "After every event we debrief with you: member feedback, revenue generated, content captured, and recommendations for your next experience. Most clients turn one event into a monthly program within 60 days.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="The Process"
          title="How It Works (And Why It's Nothing Like What You've Tried Before)"
          description="The Wolf Den is not equipment rental. It is a fully managed, end-to-end recovery experience delivered directly to your location by a trained team."
          dark={false}
        />

        <StaggerChildren className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-wolfden-blue/20 via-wolfden-blue/40 to-wolfden-blue/20 md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {STEPS.map((step, i) => (
              <StaggerItem key={step.number}>
                <div
                  className={`flex flex-col gap-6 md:flex-row md:items-start md:gap-12 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-wolfden-charcoal/5 bg-white p-6 shadow-lg shadow-black/5 transition-shadow duration-300 hover:shadow-xl md:p-8"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wolfden-blue/10">
                          <step.icon className="h-5 w-5 text-wolfden-blue" />
                        </div>
                        <h3 className="font-display text-lg font-extrabold text-wolfden-charcoal md:text-xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-wolfden-text-secondary">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Step number / timeline node */}
                  <div className="hidden md:flex md:w-12 md:shrink-0 md:items-start md:justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-wolfden-light bg-wolfden-blue font-display text-sm font-extrabold text-white shadow-lg shadow-wolfden-blue/20">
                      {step.number}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <FadeIn className="mt-16 text-center" delay={0.2}>
          <Button variant="primary" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
