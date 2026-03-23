"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-extrabold text-wolfden-blue md:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-xs text-wolfden-muted md:text-sm">{label}</p>
    </div>
  );
}

interface ServiceDetailProps {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  features: string[];
  results: Array<{ value: string; label: string }>;
  dark?: boolean;
  stats?: Array<{ value: string; label: string }>;
}

export function ServiceDetail({
  id,
  eyebrow,
  title,
  intro,
  features,
  results,
  dark = false,
  stats,
}: ServiceDetailProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 md:py-32 lg:py-40 ${
        dark ? "bg-wolfden-charcoal" : "bg-wolfden-light"
      }`}
    >
      {dark && (
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />
      )}

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          dark={dark}
          centered={false}
        />

        {/* Stats row for corporate section */}
        {stats && (
          <FadeIn className="mb-12">
            <div className={`grid grid-cols-3 gap-6 rounded-2xl p-6 md:p-8 ${dark ? "bg-white/[0.03] border border-white/5" : "bg-white shadow-lg shadow-black/5"}`}>
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </FadeIn>
        )}

        <FadeIn>
          <p
            className={`mb-12 max-w-3xl text-base leading-relaxed md:text-lg ${
              dark ? "text-wolfden-muted" : "text-wolfden-text-secondary"
            }`}
          >
            {intro}
          </p>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* What you get */}
          <div>
            <FadeIn>
              <h3
                className={`mb-6 font-display text-lg font-extrabold ${
                  dark ? "text-white" : "text-wolfden-charcoal"
                }`}
              >
                What you get:
              </h3>
            </FadeIn>
            <StaggerChildren className="space-y-4">
              {features.map((feature, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-wolfden-blue" />
                    <p
                      className={`text-sm leading-relaxed md:text-base ${
                        dark ? "text-wolfden-muted" : "text-wolfden-text-secondary"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          {/* Results */}
          <div>
            <FadeIn direction="right">
              <h3
                className={`mb-6 font-display text-lg font-extrabold ${
                  dark ? "text-white" : "text-wolfden-charcoal"
                }`}
              >
                The result:
              </h3>
            </FadeIn>
            <StaggerChildren className="space-y-6">
              {results.map((result, i) => (
                <StaggerItem key={i}>
                  <div
                    className={`rounded-xl p-5 ${
                      dark
                        ? "border border-white/5 bg-white/[0.03]"
                        : "border border-wolfden-charcoal/5 bg-white shadow-md shadow-black/5"
                    }`}
                  >
                    <p className="font-display text-xl font-extrabold text-wolfden-blue md:text-2xl">
                      {result.value}
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        dark ? "text-wolfden-muted" : "text-wolfden-text-secondary"
                      }`}
                    >
                      {result.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>

        <FadeIn className="mt-12" delay={0.2}>
          <Button variant="primary" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
