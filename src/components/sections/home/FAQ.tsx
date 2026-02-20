"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "How much does a J WolfPaX event cost?",
    answer:
      "Pricing is customized based on event type, duration, and experience design. The short answer: one well-structured event generates enough ticket revenue to make the investment straightforward. Book a Free Thrive Method Experience Consult and we'll walk through the numbers together with your specific situation in mind.",
  },
  {
    question: "What if my members don't show up or aren't interested?",
    answer:
      "Every Wolf Den partnership includes promotional support: a proven event promotion strategy built from what actually works in fitness communities. The demand is already in your community. We help you activate it.",
  },
  {
    question: "How much work do I have to do?",
    answer:
      "Show up. Coach your class. Tell your members about the experience happening outside. That is genuinely all we ask of you. Setup, facilitation, and breakdown are entirely handled by The Wolf Den team.",
  },
  {
    question: "Will the equipment fit at my location?",
    answer:
      "In the discovery call, we do a detailed site assessment to ensure the logistics work perfectly for your space. We have delivered events in parking lots, courtyards, gym floors, and corporate campuses. We make it work.",
  },
  {
    question: "What if someone gets hurt?",
    answer:
      "The Wolf Den carries full professional liability insurance and all equipment meets professional safety standards. Every session is facilitated by a trained team member following established safety protocols. Your members are in expert hands.",
  },
] as const;

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-wolfden-charcoal/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-wolfden-blue"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-bold text-wolfden-charcoal md:text-lg">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-wolfden-blue" : "text-wolfden-text-secondary"
            )}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-wolfden-text-secondary md:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions We Hear Every Time, Answered Honestly"
          dark={false}
        />

        <FadeIn className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/5 md:p-10">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-12 text-center" delay={0.2}>
          <Button variant="primary" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
