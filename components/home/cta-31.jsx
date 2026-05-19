"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const trust = [
  {
    icon: (
      <svg className="size-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3 L29 8 L29 16 C29 23 22 29 16 31 C10 29 3 23 3 16 L3 8 Z" />
        <path d="M10 16 L14 20 L22 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "WHS Certified",
    sub: "Work Health & Safety compliant",
  },
  {
    icon: (
      <svg className="size-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="24" height="18" rx="2" />
        <path d="M4 14 L28 14" />
        <circle cx="16" cy="22" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    label: "Fully Insured",
    sub: "Public liability & workers comp",
  },
  {
    icon: (
      <svg className="size-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="13" />
        <path d="M16 9 L16 16 L21 21" strokeLinecap="round" />
      </svg>
    ),
    label: "48hr Quotes",
    sub: "Competitive pricing, fast turnaround",
  },
  {
    icon: (
      <svg className="size-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 16 C6 10 10 5 16 4 C22 5 26 10 26 16" />
        <path d="M10 16 C10 12 12 9 16 8 C20 9 22 12 22 16" />
        <path d="M6 20 L26 20" strokeLinecap="round" />
        <path d="M6 24 L26 24" strokeLinecap="round" />
      </svg>
    ),
    label: "QLD Licensed",
    sub: "QBCC licensed builder's scaffold",
  },
];

export function Cta31() {
  return (
    <section className="px-[5%] py-20 md:py-28 scheme-1 border-t border-scheme-border">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <div className="mb-4 h-[3px] w-12 bg-punch" />
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-punch">Why OSG</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Built on Trust.<br />Proven on Site.</h2>
            <p className="mb-8 text-medium text-neutral-dark">
              25 years of scaffolding across Queensland. We don&apos;t just meet the standard — we set it. Every project is backed by our safety record, our licensing, and our reputation.
            </p>
            <a href="/request-a-quote">
              <Button size="lg" className="h-14 px-8 text-base font-semibold">
                Request a Quote
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {trust.map(({ icon, label, sub }) => (
              <div key={label} className="flex flex-col gap-3 rounded-card border border-scheme-border p-6">
                <div className="text-punch">{icon}</div>
                <p className="font-bold text-base">{label}</p>
                <p className="text-small text-neutral-dark">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
