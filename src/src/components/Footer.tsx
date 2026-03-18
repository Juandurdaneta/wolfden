"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

const FOOTER_LINKS = {
  services: [
    { label: "Fitness Facilities", href: "/services#fitness" },
    { label: "Events & Festivals", href: "/services#events" },
    { label: "Corporate Wellness", href: "/services#corporate" },
    { label: "Modalities", href: "/services#modalities" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Our Story", href: "/about#story" },
    { label: "Values", href: "/about#values" },
  ],
  connect: [
    { label: "Download Blueprint", href: "#blueprint" },
    { label: "Book a Consult", href: "#consult" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Contact Us", href: "mailto:info@wolfdenwellness.com" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="border-t border-wolfden-blue/20 bg-wolfden-dark">
      {/* Blue gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-wolfden-blue to-transparent" />

      <Container className="py-16 md:py-20">
        <FadeIn>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="group flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-wolfden-blue font-display text-xs font-extrabold text-white">
                  W
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base font-extrabold tracking-tight text-white">
                    THE WOLF DEN
                  </span>
                  <span className="text-[10px] font-medium tracking-widest text-wolfden-muted uppercase">
                    Mobile Wellness Lounge
                  </span>
                </div>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-wolfden-muted">
                Premium mobile cold plunge, sauna, and compression therapy experiences
                delivered directly to your facility, event, or organization.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-wolfden-muted transition-all duration-200 hover:border-wolfden-blue hover:text-wolfden-blue"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-wolfden-muted transition-all duration-200 hover:border-wolfden-blue hover:text-wolfden-blue"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-wolfden-muted transition-colors duration-200 hover:text-wolfden-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-wolfden-muted transition-colors duration-200 hover:text-wolfden-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white">
                Connect
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:info@wolfdenwellness.com"
                    className="flex items-center gap-2 text-sm text-wolfden-muted transition-colors duration-200 hover:text-wolfden-blue"
                  >
                    <Mail className="h-4 w-4" />
                    info@wolfdenwellness.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+13055551234"
                    className="flex items-center gap-2 text-sm text-wolfden-muted transition-colors duration-200 hover:text-wolfden-blue"
                  >
                    <Phone className="h-4 w-4" />
                    (305) 555-1234
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-wolfden-muted">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Serving South Florida &amp; Beyond
                </li>
              </ul>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.connect.slice(0, 2).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-wolfden-muted transition-colors duration-200 hover:text-wolfden-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
            <p className="text-xs text-wolfden-muted">
              &copy; {new Date().getFullYear()} The Wolf Den Mobile Wellness Lounge. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-wolfden-muted">
              <Link href="#" className="transition-colors hover:text-wolfden-blue">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-wolfden-blue">
                Terms of Service
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}
