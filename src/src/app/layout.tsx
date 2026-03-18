import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

/* 
  PRODUCTION NOTE: Replace the Google Fonts CDN link below with next/font/google imports:
  
  import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
  const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["500","600","700","800"] });
  const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap", weight: ["400","500","600","700"] });
  
  Then add className={`${plusJakarta.variable} ${dmSans.variable}`} to the <html> tag.
*/

export const metadata: Metadata = {
  title: {
    default: "Wolf Den Mobile Wellness Lounge | Premium Mobile Recovery Experiences",
    template: "%s | Wolf Den Mobile Wellness Lounge",
  },
  description:
    "Offer cold plunge, sauna, and compression therapy at your facility or event without a permanent buildout. Premium mobile recovery experiences in South Florida and beyond.",
  keywords: [
    "mobile cold plunge South Florida",
    "corporate wellness experience",
    "mobile recovery gym",
    "cold plunge event rental",
    "sauna therapy mobile",
    "compression therapy events",
    "fitness facility recovery",
    "wellness event activation",
  ],
  openGraph: {
    title: "Wolf Den Mobile Wellness Lounge",
    description:
      "Premium mobile cold plunge, sauna & compression therapy — delivered to your facility or event.",
    type: "website",
    locale: "en_US",
    siteName: "Wolf Den Mobile Wellness Lounge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolf Den Mobile Wellness Lounge",
    description:
      "Premium mobile recovery experiences — cold plunge, sauna & compression therapy delivered to you.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-wolfden-charcoal font-body text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
