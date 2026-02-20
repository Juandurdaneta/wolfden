"use client";

import { motion } from "framer-motion";
import { Snowflake, Flame, Wind, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const MODALITIES = [
  {
    icon: Snowflake,
    title: "Cold Plunge Therapy",
    stat: "Up to 30%",
    statLabel: "reduction in inflammation",
    description:
      "Boosts mental clarity, builds stress resilience, and creates the kind of shared courageous experience that bonds communities together. Cold immersion is the modality your members are already asking for by name.",
  },
  {
    icon: Flame,
    title: "Sauna Therapy",
    stat: "Enhanced",
    statLabel: "circulation & recovery",
    description:
      "Enhances circulation, accelerates tissue recovery, supports detoxification, and creates a warm, conversational environment where community happens naturally. The contrast between cold and heat produces measurable cardiovascular benefits.",
  },
  {
    icon: Wind,
    title: "Pneumatic Compression",
    stat: "Up to 42%",
    statLabel: "faster recovery",
    description:
      "Reduces delayed onset muscle soreness and gets athletes and active members back to performance faster. A premium modality that most boutique facilities have no access to — delivered turnkey as part of every experience.",
  },
  {
    icon: Users,
    title: "Leadership Facilitation & Thrive Method",
    stat: "Optional",
    statLabel: "for all service tiers",
    description:
      "Transforms a recovery session into a guided experience that builds emotional resilience, team trust, and the kind of community connection that members carry with them long after the cold water is gone.",
  },
] as const;

export function Modalities() {
  return (
    <section id="modalities" className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Inside the Wolf Den"
          title="What You Are Actually Bringing to Your Community"
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {MODALITIES.map((mod) => (
            <StaggerItem key={mod.title}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(12,123,220,0.3)" }}
                className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 will-change-transform"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-wolfden-blue/15">
                  <mod.icon className="h-6 w-6 text-wolfden-blue" />
                </div>
                <h3 className="font-display text-xl font-extrabold text-white">
                  {mod.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-extrabold text-wolfden-blue">
                    {mod.stat}
                  </span>
                  <span className="text-xs text-wolfden-muted">{mod.statLabel}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-wolfden-muted">
                  {mod.description}
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
