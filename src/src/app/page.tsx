import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { Problem } from "@/components/sections/home/Problem";
import { LeadMagnet } from "@/components/sections/home/LeadMagnet";
import { MythBusting } from "@/components/sections/home/MythBusting";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { WhoWeServe } from "@/components/sections/home/WhoWeServe";
import { Urgency } from "@/components/sections/home/Urgency";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { ValueStack } from "@/components/sections/home/ValueStack";
import { Guarantee } from "@/components/sections/home/Guarantee";
import { Qualifying } from "@/components/sections/home/Qualifying";
import { FAQ } from "@/components/sections/home/FAQ";
import { FinalCTA } from "@/components/sections/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Wolf Den Mobile Wellness Lounge | Premium Mobile Recovery Experiences",
  description:
    "Offer cold plunge, sauna, and compression therapy at your facility or event without a permanent buildout or six-figure budget. South Florida's premier mobile wellness experience.",
  openGraph: {
    title: "Wolf Den Mobile Wellness Lounge",
    description:
      "Premium mobile cold plunge, sauna & compression therapy delivered to your facility or event.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <LeadMagnet />
      <MythBusting />
      <SocialProof />
      <WhoWeServe />
      <Urgency />
      <HowItWorks />
      <ValueStack />
      <Guarantee />
      <Qualifying />
      <FAQ />
      <FinalCTA />
    </>
  );
}
