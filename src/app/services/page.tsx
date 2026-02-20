import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceDetail } from "@/components/sections/services/ServiceDetail";
import { Modalities } from "@/components/sections/services/Modalities";
import { FirstEventPackage } from "@/components/sections/services/FirstEventPackage";
import { FinalCTA } from "@/components/sections/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium mobile cold plunge, sauna, and compression therapy for fitness facilities, events, and corporate wellness. Turnkey recovery experiences delivered to your location.",
  openGraph: {
    title: "Services | Wolf Den Mobile Wellness Lounge",
    description:
      "Mobile recovery experiences for fitness facilities, events & corporate wellness.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* Service 1: Fitness Facilities */}
      <ServiceDetail
        id="fitness"
        eyebrow="Service 01"
        title="Turn Your Next Event Into a Revenue-Generating, Member-Retaining Recovery Experience"
        intro="You are losing members to facilities that offer more. The members who leave are not leaving because your coaching is worse. They are leaving because the experience around the workout has started to matter as much as the workout itself."
        features={[
          "Full Wolf Den mobile wellness trailer deployed directly to your facility: cold plunge, sauna, pneumatic compression, and optional leadership facilitation included",
          "Professionally designed, Instagram-ready recovery experience that makes your facility look like it belongs at the highest level of the market",
          "Turnkey event execution: The Wolf Den handles 100% of setup, facilitation, and breakdown while you coach your classes and take the credit",
          "Post-event revenue and retention analysis: we show you exactly what the event generated and recommend the ideal cadence and structure",
          "Revenue structure designed for your goals: ticketed events, member perks, VIP recovery sessions, or open community events",
        ]}
        results={[
          { value: "$1,500+", label: "Additional event revenue per experience" },
          {
            value: "Increased Retention",
            label:
              "Driven by experiences that compete with any premium facility in your market",
          },
          {
            value: "Organic Social Content",
            label:
              "From members who cannot stop sharing what happened at your facility",
          },
          {
            value: "New Member Inquiries",
            label:
              "From people who saw your event and want to join your community",
          },
        ]}
        dark={false}
      />

      {/* Service 2: Events */}
      <ServiceDetail
        id="events"
        eyebrow="Service 02"
        title="Make Your Event the One People Talk About For Months"
        intro="You are competing in the experience economy. The difference between the event people attend once and the event people put on their calendar twelve months in advance is the quality of the memory they leave with."
        features={[
          "The Wolf Den deployed to your race, festival, or wellness event with full cold plunge, sauna, and pneumatic compression",
          "Guided Thrive Method facilitation that turns individual recovery sessions into communal, shareable moments",
          "Premium visual aesthetic that photographs and videos beautifully — your attendees will create UGC content for free",
          "Flexible capacity models designed to serve large volumes of attendees without compromising quality",
          "Sponsorship-ready activation that can be branded, partner-integrated, or used as a VIP add-on",
        ]}
        results={[
          {
            value: "Higher NPS",
            label: "Driven by attendees who experienced something genuinely world-class",
          },
          {
            value: "Organic Social Reach",
            label: "From hundreds of athletes sharing their Wolf Den experience",
          },
          {
            value: "Repeat Attendance",
            label: "Participants who associate your event with a recovery experience they can't get elsewhere",
          },
          {
            value: "Additional Revenue",
            label: "Through VIP packages, sponsored activations, or premium ticket tiers",
          },
        ]}
        dark={true}
      />

      {/* Service 3: Corporate Wellness */}
      <ServiceDetail
        id="corporate"
        eyebrow="Service 03"
        title="The Team Building Experience That People Actually Look Forward To"
        intro="Employee burnout costs U.S. companies $150 billion a year. Most corporate wellness programs respond with yoga classes on Tuesdays and a meditation app subscription. The Wolf Den corporate experience is different because it is designed to meet high-performers where they actually are."
        features={[
          "The Wolf Den deployed directly to your office campus, retreat, conference venue, or community space",
          "Full cold plunge, sauna therapy, and pneumatic compression available for team members throughout the event",
          "Optional leadership facilitation workshops woven into the recovery experience, drawing on Jess's background in organizational leadership",
          "A premium, memorable experience your team will reference in meetings and conversations for months",
          "Documented results and post-event debrief with wellness impact data to support future investment decisions",
        ]}
        results={[
          { value: "28%", label: "Average reduction in sick days with strong wellness programming (HBR)" },
          { value: "67%", label: "Higher employee satisfaction in organizations investing in experiential wellness (APA)" },
          { value: "2.5x", label: "Longer talent retention in organizations with experiential wellness" },
        ]}
        stats={[
          { value: "28%", label: "Fewer sick days" },
          { value: "67%", label: "Higher satisfaction" },
          { value: "2.5x", label: "Longer retention" },
        ]}
        dark={false}
      />

      <Modalities />
      <FirstEventPackage />

      <FinalCTA headline="Stop Watching Your Competition Create the Experiences Your Members Are Asking You For" />
    </>
  );
}
