"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const MYTHS = [
  {
    myth: "I need a permanent buildout to offer recovery services.",
    truth:
      "The most innovative facilities in the country are not building recovery suites. They are testing mobile, pop-up recovery experiences first — generating immediate revenue and social proof, and using that demand data to decide if a buildout even makes sense. The Wolf Den brings the entire setup directly to your location. You show up, you coach, you take the credit. We handle the rest.",
  },
  {
    myth: "Mobile recovery will look cheap and hurt my brand.",
    truth:
      "The Wolf Den is not a tent in your parking lot. It is a professionally outfitted, visually stunning, social-media-ready recovery hub that makes YOUR facility look like it belongs at the same level as the highest-end wellness centers in the country.",
  },
  {
    myth: "My members probably won't pay for this.",
    truth:
      "Members who are asking you about cold plunge have already decided they want to pay for it. They are either paying for it somewhere else right now, or they are waiting for you to offer it. A single 3-hour recovery event with 20 attendees at $60–$75 per person generates $1,200–$2,250 in one afternoon. That is not a maybe. That is math.",
  },
] as const;

export function MythBusting() {
  return (
    <section className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Myths vs. Truth"
          title="3 Dangerous Myths Keeping You From the Recovery Revenue Your Community Is Literally Begging You to Take"
          description="If you've been holding back on offering cold plunge, heat and compression therapy, chances are one of these beliefs is the reason. And every single one of them is costing you real money right now."
          dark={false}
        />

        <StaggerChildren className="mx-auto max-w-4xl space-y-8">
          {MYTHS.map((item, index) => (
            <StaggerItem key={index}>
              <div className="overflow-hidden rounded-2xl shadow-lg shadow-black/5">
                {/* Myth header */}
                <div className="flex items-start gap-4 bg-wolfden-charcoal p-6 md:p-8">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-red-400 uppercase">
                      Myth #{index + 1}
                    </span>
                    <p className="mt-1 font-display text-lg font-bold text-white/80 line-through decoration-red-400/50 md:text-xl">
                      &ldquo;{item.myth}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Truth body */}
                <div className="flex items-start gap-4 bg-white p-6 md:p-8">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wolfden-blue/10">
                    <Check className="h-4 w-4 text-wolfden-blue" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-wolfden-blue uppercase">
                      The Truth
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-wolfden-text-secondary md:text-base">
                      {item.truth}
                    </p>
                  </div>
                </div>
              </div>
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
