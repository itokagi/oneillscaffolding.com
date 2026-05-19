"use client";

import React, { useState } from "react";

const clients = [
  { name: "Buildcorp",            initials: "BC",  color: "#E8501A", font: "Bebas Neue" },
  { name: "John Holland",         initials: "JH",  color: "#E10B17", font: "Anton" },
  { name: "Multiplex",            initials: "MX",  color: "#005BAA", font: "Big Shoulders Display" },
  { name: "Lendlease",            initials: "LL",  color: "#00843D", font: "Teko" },
  { name: "Mirvac",               initials: "MV",  color: "#00878A", font: "Oswald" },
  { name: "BMD Group",            initials: "BMD", color: "#F47920", font: "Black Ops One" },
  { name: "Hutchinson Builders",  initials: "HB",  color: "#E1251B", font: "Barlow Condensed" },
  { name: "CIMIC Group",          initials: "CG",  color: "#0065BD", font: "Squada One" },
  { name: "McNab Constructions",  initials: "MN",  color: "#009C7A", font: "Russo One" },
  { name: "FKG Group",            initials: "FKG", color: "#CC1417", font: "Chakra Petch" },
  { name: "Hansen Yuncken",       initials: "HY",  color: "#0046AD", font: "Rajdhani" },
  { name: "Roberts Co",           initials: "RC",  color: "#E85A00", font: "Orbitron" },
  { name: "ADCO Constructions",   initials: "AC",  color: "#F5A623", font: "Exo 2" },
  { name: "Brennan Civil",        initials: "BCI", color: "#1C3557", font: "Titillium Web" },
  { name: "Walsh Construction",   initials: "WC",  color: "#0D47A1", font: "Saira Condensed" },
  { name: "Infrastructure Plus",  initials: "IP",  color: "#2E7D32", font: "Pathway Gothic One" },
  { name: "Urban Developments",   initials: "UD",  color: "#546E7A", font: "Encode Sans Condensed" },
];

const LogoItem = ({ name, initials, color, font }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="mx-14 flex shrink-0 flex-col items-center gap-2 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="leading-none select-none"
        style={{
          fontFamily: `"${font}", sans-serif`,
          fontSize: "clamp(2.2rem, 3.8vw, 3rem)",
          color: hovered ? color : "rgba(0,0,0,0.18)",
          textShadow: hovered ? `0 0 32px ${color}50` : "none",
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
          color: hovered ? color : "rgba(0,0,0,0.28)",
          transition: "color 0.22s ease",
        }}
      >
        {name}
      </span>
    </div>
  );
};

export function Logo4() {
  const doubled = [...clients, ...clients];
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <p className="mb-12 text-center text-sm font-bold uppercase tracking-[0.2em] text-neutral-darkest">
        Trusted by Queensland&apos;s leading builders
      </p>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem", overflowY: "visible", overflowX: "hidden" }}>
        <div className="flex animate-marquee-horizontally items-end">
          {doubled.map((client, i) => (
            <LogoItem key={i} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
