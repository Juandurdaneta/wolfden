"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flag, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { cardHover } from "@/lib/animations";

const AUDIENCES = [
  {
    icon: Dumbbell,
    title: "Fitness Facilities & Gyms",
    description:
      "You built your community on coaching excellence and real human connection. But in a market where 8 studios compete within 2 miles, class quality alone no longer wins retention. The Wolf Den turns your next event into a premium recovery experience that creates social content, drives ticket revenue, and gives your members a reason to stay and bring their friends.",
  },
  {
    icon: Flag,
    title: "Event Organizers, Races & Wellness Festivals",
    description:
      "Your attendees came to perform. The Wolf Den gives them somewhere to recover, reconnect, and share that experience with their entire following. The Mobile Lounge becomes the centerpiece activation that makes your event the one people talk about for months.",
  },
  {
    icon: Building2,
    title: "Corporate Wellness & Residential Communities",
    description:
      "Employee burnout costs companies $150 billion annually. The Wolf Den brings cold plunge, heat therapy, and guided recovery directly to your campus, courtyard, or conference — a turnkey wellness experience your team or community will still talk about at the next company meeting.",
  },
] as const;

export function WhoWeServe() {
  return (
    <section className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Whether You Run a Gym, Plan Corporate Retreats, or Manage Member Events — The Wolf Den Was Built for You"
          dark={false}
        />

        <StaggerChildren className="grid gap-8 md:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <StaggerItem key={audience.title}>
              <motion.div
                whileHover={cardHover}
                className="group relative h-full rounded-2xl border border-transparent bg-white p-8 shadow-lg shadow-black/5 transition-all duration-300 will-change-transform hover:border-wolfden-blue/20 hover:shadow-xl md:p-10"
              >
                {/* Top accent line */}
                <div className="absolute top-0 right-6 left-6 h-0.5 origin-center scale-x-0 bg-wolfden-blue transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-wolfden-blue/10">
                  <audience.icon className="h-7 w-7 text-wolfden-blue" />
                </div>

                <h3 className="font-display text-xl font-extrabold text-wolfden-charcoal">
                  {audience.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-wolfden-text-secondary">
                  {audience.description}
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
