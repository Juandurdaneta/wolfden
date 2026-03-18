"use client";

import { motion } from "framer-motion";
import { Quote, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const CREDENTIALS = [
  "Davidson College",
  "Pomona College",
  "Syracuse University",
  "Texas A&M",
  "Posse Miami",
  "Facebook",
  "Deloitte",
  "Bank of America",
] as const;

export function FounderStory() {
  return (
    <section id="story" className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="The Founder"
          title="The Story Behind the Wolf Den"
          dark={false}
          centered={false}
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Story text */}
          <div className="space-y-5 lg:col-span-3">
            <FadeIn>
              <p className="text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
                The Wolf Den was born in the hardest moments of Jess Woolverton&apos;s life — and
                in the quiet, undeniable realization that the people who carry the most weight for
                others are often the last ones who get held.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
                Jess lost her father at 14. She watched her mother fight cancer. She found her way
                through athletics, through community, through the kind of shared struggle that turns
                strangers into people who would run through a wall for each other.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
                She went on to earn a Master&apos;s in Social Work and spent her early career
                leading leadership development programs at some of the nation&apos;s most
                prestigious institutions. As Program Director of the Posse Miami and National
                Veterans Programs, she built bridges between marginalized communities and elite
                institutions, developing the next generation of high-impact leaders.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
                But the thread running through all of it was always the same: the belief that
                recovery, resilience, and genuine human connection are not luxuries reserved for
                people who have already made it. They are the conditions that make people capable
                of making it at all.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
                The Wolf Den is the physical manifestation of that belief. It shows up at your
                facility, your event, your organization — and it creates the conditions for something
                most people do not even know they needed until they experienced it.
              </p>
            </FadeIn>
          </div>

          {/* Founder card / credentials */}
          <div className="lg:col-span-2">
            <FadeIn direction="right" delay={0.2}>
              <div className="sticky top-28">
                {/* Photo placeholder */}
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-wolfden-charcoal/10 bg-gradient-to-br from-wolfden-charcoal to-wolfden-dark p-10 text-center shadow-xl">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-wolfden-blue/20">
                    <span className="font-display text-3xl font-extrabold text-wolfden-blue">
                      JW
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-extrabold text-white">
                    Jess Woolverton
                  </h3>
                  <p className="text-sm text-wolfden-muted">
                    Founder, Wolf Den Mobile Wellness Lounge
                  </p>
                </div>

                {/* Credentials */}
                <div className="rounded-2xl border border-wolfden-charcoal/10 bg-white p-6 shadow-lg shadow-black/5">
                  <div className="mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-wolfden-blue" />
                    <span className="text-xs font-bold tracking-widest text-wolfden-blue uppercase">
                      Credentials & Experience
                    </span>
                  </div>
                  <StaggerChildren className="flex flex-wrap gap-2">
                    {CREDENTIALS.map((cred) => (
                      <StaggerItem key={cred}>
                        <span className="inline-block rounded-full border border-wolfden-charcoal/10 bg-wolfden-light px-3 py-1.5 text-xs font-medium text-wolfden-charcoal">
                          {cred}
                        </span>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Pull quote */}
        <FadeIn className="mt-16">
          <blockquote className="relative mx-auto max-w-3xl rounded-2xl bg-wolfden-charcoal p-8 text-center md:p-12">
            <Quote className="mx-auto mb-4 h-8 w-8 text-wolfden-blue/40" />
            <p className="font-display text-xl font-bold leading-snug text-white md:text-2xl">
              &ldquo;The cold taught me courage. The heat taught me presence. The Pack taught me I
              was never alone.&rdquo;
            </p>
            <p className="mt-4 text-sm text-wolfden-muted">
              — Jess Woolverton, Founder
            </p>
          </blockquote>
        </FadeIn>
      </Container>
    </section>
  );
}
