"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { scaleIn } from "@/lib/animations";

export function Guarantee() {
  return (
    <section className="relative bg-wolfden-light py-24 md:py-32 lg:py-40">
      <Container narrow className="text-center">
        {/* Shield icon */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-wolfden-amber/40 bg-wolfden-amber/10 md:h-24 md:w-24"
        >
          <Shield className="h-10 w-10 text-wolfden-amber md:h-12 md:w-12" />
        </motion.div>

        <FadeIn>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-wolfden-charcoal md:text-4xl lg:text-5xl">
            Our Promise: If Your Members Don&apos;t Rave About It, Your Next Event Is Free.{" "}
            <span className="text-wolfden-blue">No Questions Asked.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
            We know what it feels like to take a chance on a vendor and get burned. A professional
            no-show. Equipment that looks nothing like the photos. Members who notice and never let
            you forget it.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-wolfden-text-secondary md:text-lg">
            Every experience is backed by a solid guarantee: if your event does not meet our
            professional standards, if your members are not genuinely excited about what they
            experienced, your next event is fully complimentary. That is our commitment to the
            quality of The Wolf Den and the reputation of your brand.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-10">
          <Button variant="primary" href="#blueprint">
            Download Your Free Thrive Method Experience Blueprint
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
