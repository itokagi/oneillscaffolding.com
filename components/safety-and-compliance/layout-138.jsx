"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ChevronRight } from "relume-icons";

const partners = [
  { name: "Buildcorp",           initials: "BC",  color: "#E8501A", font: "Bebas Neue" },
  { name: "John Holland",        initials: "JH",  color: "#E10B17", font: "Anton" },
  { name: "Multiplex",           initials: "MX",  color: "#005BAA", font: "Big Shoulders Display" },
  { name: "Lendlease",           initials: "LL",  color: "#00843D", font: "Teko" },
  { name: "Mirvac",              initials: "MV",  color: "#00878A", font: "Oswald" },
  { name: "BMD Group",           initials: "BMD", color: "#F47920", font: "Black Ops One" },
  { name: "Hutchinson Builders", initials: "HB",  color: "#E1251B", font: "Barlow Condensed" },
  { name: "CIMIC Group",         initials: "CG",  color: "#0065BD", font: "Squada One" },
  { name: "McNab Constructions", initials: "MN",  color: "#009C7A", font: "Russo One" },
  { name: "FKG Group",           initials: "FKG", color: "#CC1417", font: "Chakra Petch" },
  { name: "Hansen Yuncken",      initials: "HY",  color: "#0046AD", font: "Rajdhani" },
  { name: "Roberts Co",          initials: "RC",  color: "#E85A00", font: "Orbitron" },
];

const PartnerItem = ({ name, initials, color, font, isHovered, onEnter, onLeave }) => (
  <div
    className="mx-14 flex shrink-0 flex-col items-center gap-2 cursor-default"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
  >
    <span
      className="leading-none select-none"
      style={{
        fontFamily: `"${font}", sans-serif`,
        fontSize: "clamp(2.2rem, 3.8vw, 3rem)",
        color: isHovered ? color : "rgba(0,0,0,0.18)",
        textShadow: isHovered ? `0 0 32px ${color}50` : "none",
        transition: "color 0.22s ease, text-shadow 0.22s ease",
        letterSpacing: "0.04em",
      }}
    >
      {initials}
    </span>
    <span
      className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em]"
      style={{
        fontFamily: "Poppins, sans-serif",
        color: isHovered ? color : "rgba(0,0,0,0.28)",
        transition: "color 0.22s ease",
      }}
    >
      {name}
    </span>
  </div>
);

export function Layout138() {
  const [hoveredName, setHoveredName] = useState(null);
  const doubled = [...partners, ...partners];
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Commitment</p>
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Our People Go Home Safe Every Single Day
        </h2>
        <p className="mb-5 text-medium md:mb-6">
          At O&apos;Neill Scaffolding Group, safety is not negotiable. We protect our
          workers, our clients, and the public through rigorous protocols and a
          culture where every person takes responsibility for their own
          wellbeing and that of their team. Every site briefing, every SWMS, every inspection checkpoint exists because we believe no project outcome is worth a preventable injury.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <a href="/capabilities"><Button variant="secondary">Our Capabilities</Button></a>
          <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get in Touch</Button></a>
        </div>
      </div>

      <div className="mt-12 flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem", overflowY: "visible", overflowX: "hidden" }}>
        <div className="flex animate-marquee-horizontally items-end">
          {doubled.map((partner, i) => (
            <PartnerItem
              key={i}
              {...partner}
              isHovered={hoveredName === partner.name}
              onEnter={() => setHoveredName(partner.name)}
              onLeave={() => setHoveredName(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
