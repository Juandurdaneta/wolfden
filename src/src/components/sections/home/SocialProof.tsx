"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const TESTIMONIALS = [
  {
    quote:
      "I've hosted two J WolfPaX events now and my members are already asking when the next one is. I made back the event cost in ticket sales and had 12 people sign up for memberships because they saw the posts.",
    name: "CrossFit Box Owner",
    location: "Miami, FL",
    rating: 5,
  },
  {
    quote:
      "We brought the Wolf Den to our company retreat and it became the single most talked-about experience of the entire day. The team is still talking about it two months later.",
    name: "HR Director",
    location: "Corporate Wellness Client",
    rating: 5,
  },
] as const;

export function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Proven Results"
          title="Here's What Happens When Facilities, Events, and Organizations Start Thriving"
          description="The Wolf Den is not an experiment. It is a proven, repeatable framework that has been delivered to boutique fitness facilities, corporate wellness programs, athletic organizations, and events across South Florida and beyond."
        />

        <StaggerChildren className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-wolfden-blue/15 bg-wolfden-dark/80 p-8 backdrop-blur-sm will-change-transform md:p-10"
              >
                {/* Glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100" style={{ boxShadow: "inset 0 0 40px rgba(12,123,220,0.05)" }} />

                <Quote className="mb-6 h-8 w-8 text-wolfden-blue/40" />

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="h-4 w-4 fill-wolfden-amber text-wolfden-amber"
                    />
                  ))}
                </div>

                <p className="text-base leading-relaxed text-white/90 md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wolfden-blue/20 font-display text-sm font-bold text-wolfden-blue">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-wolfden-muted">{t.location}</p>
                  </div>
                </div>
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
