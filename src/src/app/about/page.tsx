import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { FounderStory } from "@/components/sections/about/FounderStory";
import { Mission } from "@/components/sections/about/Mission";
import { Vision } from "@/components/sections/about/Vision";
import { Differentiators } from "@/components/sections/about/Differentiators";
import { Values } from "@/components/sections/about/Values";
import { FinalCTA } from "@/components/sections/shared/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jess Woolverton and discover the mission behind Wolf Den Mobile Wellness Lounge. Premium mobile recovery experiences rooted in community, resilience, and genuine human connection.",
  openGraph: {
    title: "About Wolf Den Mobile Wellness Lounge",
    description:
      "The story behind South Florida's premier mobile recovery experience.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <Mission />
      <Vision />
      <Differentiators />
      <Values />
      <FinalCTA />
    </>
  );
}
