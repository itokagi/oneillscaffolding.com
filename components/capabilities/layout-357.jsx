"use client";

import { Button } from "@/components/ui/button";
import { TAG_COLORS_DARK } from "@/components/shared/tag-colors";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { ChevronRight } from "relume-icons";

const panels = [
  {
    num: "01",
    href: "/capabilities/commercial-scaffolding",
    label: "Commercial Scaffolding",
    tag: "Commercial",
    heading: "Multi-Storey Access for Complex Commercial Sites",
    body: "From high-rise façade work to retail fitouts and industrial plant maintenance, we design and erect systems rated for the loads your trades require. We coordinate with site supervisors, work within tight programme windows, and comply with Queensland WHS regulations throughout.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    num: "02",
    href: "/capabilities/residential-scaffolding",
    label: "Residential Scaffolding",
    tag: "Residential",
    heading: "The Right System for Every Home Build",
    body: "Whether it's a new two-storey build, a re-roof, or a full exterior renovation, we size the scaffold to the job. Tube-and-coupler or modular systems, edge protection compliant with AS 1576, and a crew that respects the property and the neighbours.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
  },
  {
    num: "03",
    href: "/projects/scaffolding-birdcage",
    label: "Birdcage & Specialty",
    tag: "Specialty",
    heading: "Birdcage, Cantilever, and Suspended Access",
    body: "When standard tube-and-coupler won't do the job, we engineer it differently. Birdcage systems for ceiling and soffit work, cantilevered solutions over live areas, and suspended scaffold rigs — designed to Australian Standards and documented for SafeWork Queensland compliance.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  },
  {
    num: "04",
    href: "/capabilities/labour-hire",
    label: "Labour Hire",
    tag: "Crew Supply",
    heading: "Ticket-Holding Scaffolders, Available When You Need Them",
    body: "Supplement your crew with experienced OSG scaffolders — all holding current ScaffCert Basic or Advanced tickets, inducted, and insured. They arrive ready to work within your site's systems, with no gap between day one and productive output.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1600&q=80",
  },
];

/* Per-service accent palette for the tab cards.
   Active state uses these as the sliding background colour.
   Inactive state pulls the text colour for the decorative number. */
const TAB_ACCENTS = {
  Commercial: {
    activeBg: "bg-blue-900/60",
    activeAccentBar: "bg-blue-400/70",
    hoverBorder: "hover:border-blue-300",
    numColor: "text-blue-500/50",
    numActiveColor: "text-white/30",
  },
  Residential: {
    activeBg: "bg-green-900/60",
    activeAccentBar: "bg-green-400/70",
    hoverBorder: "hover:border-green-300",
    numColor: "text-green-500/50",
    numActiveColor: "text-white/30",
  },
  Specialty: {
    activeBg: "bg-violet-900/60",
    activeAccentBar: "bg-violet-400/70",
    hoverBorder: "hover:border-violet-300",
    numColor: "text-violet-500/50",
    numActiveColor: "text-white/30",
  },
  "Crew Supply": {
    activeBg: "bg-teal-900/60",
    activeAccentBar: "bg-teal-400/70",
    hoverBorder: "hover:border-teal-300",
    numColor: "text-teal-500/50",
    numActiveColor: "text-white/30",
  },
};

export function Layout357() {
  const [active, setActive] = useState(0);
  const panel = panels[active];

  return (
    <section className="scheme-1">
      {/* Tab navigation — editorial card-style tabs */}
      <div className="border-b border-scheme-border px-[5%] py-6">
        <div className="container">
          {/* Card tab row — overflow scrolls on mobile */}
          <div className="flex gap-3 overflow-x-auto scrollbar-none">
            {panels.map((p, i) => {
              const isActive = active === i;
              const accent = TAB_ACCENTS[p.tag] ?? TAB_ACCENTS["Crew Supply"];

              return (
                <button
                  key={p.num}
                  onClick={() => setActive(i)}
                  className={[
                    /* Base card geometry */
                    "relative flex min-w-[9rem] flex-1 shrink-0 flex-col overflow-hidden rounded-card border",
                    "px-5 py-4 text-left transition-all duration-200",
                    /* Inactive resting state */
                    isActive
                      ? "border-transparent"
                      : [
                          "border-scheme-border bg-scheme-bg-alt",
                          "hover:bg-scheme-bg hover:-translate-y-0.5 hover:shadow-md",
                          accent.hoverBorder,
                        ].join(" "),
                  ]
                    .flat()
                    .join(" ")}
                >
                  {/* Sliding colour background — the animated layer */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-underline"
                      className={["absolute inset-0", accent.activeBg].join(" ")}
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}

                  {/* Accent bar — thin top stripe on active card */}
                  {isActive && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.08, duration: 0.25, ease: "easeOut" }}
                      className={[
                        "absolute inset-x-0 top-0 h-[3px] origin-left",
                        accent.activeAccentBar,
                      ].join(" ")}
                    />
                  )}

                  {/* Decorative large number — sits behind the label */}
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute right-3 top-1 select-none font-black leading-none tabular-nums",
                      "text-[3.5rem] tracking-wide transition-colors duration-200",
                      isActive ? accent.numActiveColor : accent.numColor,
                    ].join(" ")}
                  >
                    {p.num}
                  </span>

                  {/* Small structured number badge */}
                  <span
                    className={[
                      "relative z-10 mb-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-200",
                      isActive ? "text-white/60" : "text-scheme-text/40",
                    ].join(" ")}
                  >
                    {p.num}
                  </span>

                  {/* Label — the primary text the user reads */}
                  <span
                    className={[
                      "relative z-10 text-sm font-bold leading-tight tracking-tight transition-colors duration-200",
                      isActive ? "text-white" : "text-scheme-text/70",
                    ].join(" ")}
                  >
                    {p.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-bleed image panel */}
      <div className="px-[5%] py-8 md:py-10">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
              className="relative overflow-hidden rounded-image"
            >
              <img
                src={panel.image}
                className="h-[55vh] w-full object-cover md:h-[68vh] lg:h-[74vh]"
                alt={panel.label}
              />
              {/* Gradient: strong at bottom, subtle at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none" />

              {/* Text overlay — anchored to bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16">
                <div className="mb-5 h-[3px] w-12 bg-punch" />
                <span
                  className={`mb-4 inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] ${
                    TAG_COLORS_DARK[panel.tag] || "bg-white/15 text-white border-white/25"
                  }`}
                >
                  {panel.tag}
                </span>
                <h2 className="mb-4 max-w-2xl text-h2 font-bold text-white md:mb-5">
                  {panel.heading}
                </h2>
                <p className="max-w-xl text-medium text-white/70">{panel.body}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href={panel.href}>
                    <button className="inline-flex h-10 items-center rounded-button border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                      Learn More
                    </button>
                  </a>
                  <a href="/request-a-quote">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-white" />}
                      className="text-white"
                    >
                      Get a Quote
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
