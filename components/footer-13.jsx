"use client";

import React from "react";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "relume-icons";

function TikTokIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5 2.592 2.592 0 0 1-2.59-2.5 2.592 2.592 0 0 1 2.59-2.5c.28 0 .54.04.79.1V9.84a5.953 5.953 0 0 0-.79-.05 5.671 5.671 0 0 0-5.67 5.67 5.671 5.671 0 0 0 5.67 5.67 5.671 5.671 0 0 0 5.67-5.67V8.91a7.354 7.354 0 0 0 4.3 1.38V7.2a4.299 4.299 0 0 1-2.93-1.38z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://facebook.com", Icon: FacebookLogo, label: "Facebook" },
  { href: "https://instagram.com", Icon: InstagramLogo, label: "Instagram" },
  { href: "https://www.tiktok.com/@oneill.scaffoldin", Icon: TikTokIcon, label: "TikTok" },
  { href: "https://www.linkedin.com/in/oneill-scaffolding-4a256a408/", Icon: LinkedinLogo, label: "LinkedIn" },
];

const navColumns = [
  {
    heading: "Services",
    links: [
      { href: "/capabilities/commercial-scaffolding", label: "Commercial" },
      { href: "/capabilities/residential-scaffolding", label: "Residential" },
      { href: "/capabilities/labour-hire", label: "Labour Hire" },
      { href: "/projects/scaffolding-birdcage", label: "Birdcage Systems" },
      { href: "/safety-and-compliance", label: "Safety & Compliance" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/projects", label: "Our Projects" },
      { href: "/hear-from-our-clients", label: "Client Stories" },
      { href: "/careers", label: "Careers" },
      { href: "/news", label: "News" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { href: "/contact-us", label: "Get in Touch" },
      { href: "/request-a-quote", label: "Request a Quote" },
      { href: "tel:+61730000000", label: "(07) 3000 0000" },
      { href: "mailto:trey@oneillscaffolding.com.au", label: "trey@oneillscaffolding.com.au" },
    ],
  },
];

const certBadges = [
  { label: "Licensed", sub: "QLD scaffolding licence" },
  { label: "Insured", sub: "Full public liability" },
  { label: "Certified", sub: "Safety compliance" },
];

export function Footer13() {
  return (
    <footer className="logo-alt" style={{ backgroundColor: '#010017' }}>

      {/* Top CTA strip */}
      <div className="border-b border-white/10 px-[5%] py-10 md:py-14">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 h-[2px] w-10 bg-punch" />
            <h3 className="mb-2 font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
              Ready to Get Started?
            </h3>
            <p className="text-white/65 text-sm max-w-sm">
              Get a tailored scaffolding quote within 48 hours. No obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/request-a-quote"
              className="inline-flex h-11 items-center rounded-button border-0 px-7 text-sm font-semibold text-white shadow-[0_3px_0_#006b8e,0_5px_16px_rgba(0,153,206,0.28)] transition-all duration-150 hover:-translate-y-px hover:shadow-[0_4px_0_#006b8e,0_8px_22px_rgba(0,153,206,0.42)] active:translate-y-0.5 active:shadow-[0_1px_0_#006b8e]"
              style={{ backgroundColor: '#0099ce' }}
            >
              Request a Quote
            </a>
            <a
              href="/contact-us"
              className="inline-flex h-11 items-center rounded-button border border-white/20 bg-white/8 px-7 text-sm font-semibold text-white transition-all duration-200 hover:border-white/35 hover:bg-white/14"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Credibility strip */}
      <div className="border-b border-white/10 px-[5%] py-6">
        <div className="container">
          <div className="flex flex-wrap items-center gap-8 md:gap-16">
            {certBadges.map(({ label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-punch/30 bg-punch/8">
                  <div className="size-2 rounded-full bg-punch" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">{label}</p>
                  <p className="text-[10px] text-white/45">{sub}</p>
                </div>
              </div>
            ))}
            <div className="ml-auto hidden items-center gap-2 md:flex">
              <p className="text-xs text-white/40">Est. 2000 &bull; Southeast Queensland</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav grid */}
      <div className="px-[5%] pt-14 pb-10 md:pt-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1.6fr_auto_auto_auto] lg:gap-x-20">

            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="inline-block mb-6">
                <img
                  src="/logo/osg-logo.png"
                  alt="O'Neill Scaffolding Group"
                  className="h-10 w-auto"
                />
              </a>
              <p className="mb-6 max-w-[280px] text-sm text-white/60 leading-relaxed">
                Queensland&apos;s trusted scaffolding partner. Commercial, residential, and civil — built right, every time.
              </p>

              {/* Contact quick links */}
              <div className="mb-6 flex flex-col gap-2">
                <a href="tel:+61730000000" className="flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-white">
                  <span className="flex size-5 items-center justify-center rounded-full bg-punch/15 text-punch">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="size-3">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  (07) 3000 0000
                </a>
                <a href="mailto:trey@oneillscaffolding.com.au" className="flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-white">
                  <span className="flex size-5 items-center justify-center rounded-full bg-punch/15 text-punch">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="size-3">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  trey@oneillscaffolding.com.au
                </a>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-button border border-white/15 bg-white/5 text-white/50 transition-colors hover:border-punch/40 hover:bg-punch/10 hover:text-punch"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {navColumns.map(({ heading, links }) => (
              <div key={heading}>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-punch">{heading}</p>
                <ul className="flex flex-col gap-3">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-[5%] border-t border-white/10">
        <div className="container">
          <div className="flex flex-col-reverse items-start justify-between gap-4 py-6 text-xs text-white/40 md:flex-row md:items-center">
            <p>© 2025 O&apos;Neill Scaffolding Group Pty Ltd. All rights reserved. ABN 98 678 346 953</p>
            <ul className="flex gap-6">
              <li><a href="/terms-of-services" className="hover:text-white/65 transition-colors">Terms of Service</a></li>
              <li><a href="/privacy-policy" className="hover:text-white/65 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
