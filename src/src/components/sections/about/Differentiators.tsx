"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, BarChart3, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const DIFFERENTIATORS = [
  {
    icon: Sparkles,
    number: "01",
    title: "We Bring a Method, Not Just Equipment",
    description:
      "Every Wolf Den event is facilitated using the Thrive Method — a structured protocol for guiding people through cold and heat exposure in a way that builds community, creates genuine transformation, and generates the kind of organic content that makes your competitors ask what you did differently.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "We Protect Your Brand as Fiercely as You Do",
    description:
      "We know you didn't spend years building your community's trust to hand it over to a vendor who might show up late and set up a sloppy experience. Every partnership includes a full site assessment, customized event design, professional-grade equipment, and a trained facilitation team.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "We Think Like Business Owners Because We Are One",
    description:
      "We design every engagement with your ROI in mind: ticket pricing strategy, event promotion, social content capture, and post-event analysis so you can make decisions about frequency, structure, and growth based on real data.",
  },
  {
    icon: Heart,
    number: "04",
    title: "We Lead With People, Not Product",
    description:
      "The reason people leave an event talking is not the equipment. It is the way the experience is held. Jess's background in social work, leadership development, and community building is baked into every facilitated session. What you get is a transformation experience with a cold plunge inside it.",
  },
] as const;

export function Differentiators() {
  return (
    <section className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="The Difference"
          title="What Sets The Wolf Den Apart From Every Other Recovery Rental or Wellness Vendor"
        />

        <StaggerChildren className="mx-auto max-w-5xl space-y-6">
          {DIFFERENTIATORS.map((item, i) => (
            <StaggerItem key={item.number}>
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex gap-6 rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 will-change-transform hover:border-wolfden-blue/20 md:gap-8 md:p-8"
              >
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-wolfden-blue/10 transition-colors duration-300 group-hover:bg-wolfden-blue/20">
                    <item.icon className="h-6 w-6 text-wolfden-blue" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-wolfden-blue/60 uppercase">
                    {item.number}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-wolfden-muted md:text-base">
                    {item.description}
                  </p>
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
