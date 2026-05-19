"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

const steps = [
  {
    num: "01",
    tag: "Site Assessment",
    heading: "We Walk the Site Before We Quote",
    body: "Every quote starts with a site visit. We identify access constraints, overhead obstructions, ground bearing conditions, and trade sequencing requirements before any plan is drawn. You get a solution scoped to your actual site — not a standard package retrofitted to it.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "02",
    tag: "Design & Planning",
    heading: "Documented Plans, Signed Off Before Installation Starts",
    body: "We produce scaffold layouts and load calculations reviewed against AS/NZS 1576. Complex configurations — cantilevered decks, birdcage systems, edge protection over live areas — are engineer-certified where SafeWork Queensland requires it. No installation begins without a signed-off plan.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "03",
    tag: "Installation & Support",
    heading: "On-Site From Erection Through to Final Strip",
    body: "Our crews erect, inspect, reconfigure, and dismantle on your programme. Pre-use inspections are completed before any trade works on the scaffold. If the scope changes mid-project — additional lift, altered loading, extended duration — we respond without the project grinding to a halt.",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Layout356() {
  return (
    <section className="px-[5%] py-20 md:py-28 scheme-1">
      <div className="container">
        {/* Section header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-scheme-border pb-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-punch">Process</p>
            <h2 className="text-h2 font-bold">How We Work</h2>
          </div>
          <a href="/request-a-quote">
            <Button variant="secondary" iconRight={<ChevronRight className="text-punch" />}>
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-20 md:gap-28">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""}`}
            >
              {/* Text */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-5xl font-bold leading-none text-scheme-text/10" style={{ fontFamily: "Poppins, sans-serif" }}>{step.num}</span>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-punch">{step.tag}</span>
                </div>
                <h3 className="mb-5 text-h3 font-bold">{step.heading}</h3>
                <p className="text-scheme-text/65 text-medium leading-relaxed">{step.body}</p>
              </div>
              {/* Image */}
              <div className="relative overflow-hidden rounded-image">
                <img
                  src={step.image}
                  alt={step.tag}
                  className="h-[22rem] w-full object-cover md:h-[28rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
