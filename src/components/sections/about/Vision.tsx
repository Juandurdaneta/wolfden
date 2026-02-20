"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

export function Vision() {
  return (
    <section className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container narrow className="text-center">
        <SectionHeading
          eyebrow="Our Vision"
          title="Make Premium Recovery Accessible to Every Community That Deserves It"
          dark={false}
        />

        <FadeIn>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
            The biggest lie in the wellness industry right now is that premium recovery is only for
            premium-priced facilities. That cold plunge and sauna access is a privilege that belongs
            to the luxury gyms of the world while boutique studios, event organizers, and community
            wellness programs just... wait.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl font-display text-lg font-bold text-wolfden-charcoal md:text-xl">
            We reject that entirely.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
            The Wolf Den vision is a world where any serious fitness facility, any well-run wellness
            event, and any organization that cares about its people can offer elite recovery experiences
            — without six-figure capital requirements, without dedicated staff, and without the
            operational complexity that has historically made it impossible for smaller operators to
            compete at that level.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-wolfden-blue/20 bg-wolfden-charcoal p-6 md:p-8">
            <p className="font-display text-base font-bold text-white md:text-lg">
              Mobile, turnkey, professionally facilitated, and financially viable from day one.{" "}
              <span className="text-wolfden-blue">That is the standard we are building toward.</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
