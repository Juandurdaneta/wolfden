"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-wolfden-charcoal py-24 md:py-32 lg:py-40">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-15" />

      <Container narrow className="relative z-10 text-center">
        <SectionHeading
          eyebrow="Our Mission"
          title="Bring Healing to the High-Performers Who Carry the Weight of Their Teams, Their Members, and Their Families"
        />

        <FadeIn>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-wolfden-muted md:text-lg">
            The wellness industry has a strange blind spot. It spends enormous energy helping
            individuals optimize their performance while almost entirely ignoring the people who are
            responsible for holding everyone else together. The coaches. The facility owners. The
            event organizers. The HR directors. The community managers. The ones who show up
            first, leave last, and quietly carry everyone else&apos;s progress on their back.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-bold text-wolfden-blue md:text-xl">
            The Wolf Den exists to serve those people.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-wolfden-muted md:text-lg">
            When The Wolf Den arrives at your location, it is not just bringing cold water and heat.
            It is bringing the Thrive Method — a guided recovery framework built on the same
            principles of resilience, community, and courageous vulnerability that Jess has spent her
            career teaching in some of the highest-pressure environments in the country.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl font-display text-lg font-bold text-white md:text-xl">
            The result is not just a great recovery session. It is an experience people carry with them.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-10">
          <Button variant="primary" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
