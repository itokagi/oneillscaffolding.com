"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout140_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="md:order-2">
            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-punch-lightest">
              <img
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/health_and_safety.svg"
                alt=""
                className="size-7"
                style={{ filter: "invert(38%) sepia(82%) saturate(600%) hue-rotate(170deg) brightness(0.95)" }}
              />
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">02 — Proactive</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              We Identify Hazards Before They Become Problems
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Our safety approach is preventative, not reactive. Before any scaffold goes up, our team conducts a formal site hazard assessment covering overhead services, ground conditions, traffic management, and neighbouring structures. Identified risks are controlled through engineered solutions, administrative controls, and PPE — in that order, following the hierarchy of controls required under Queensland WHS legislation.
            </p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <a href="/capabilities"><Button variant="secondary">Our Capabilities</Button></a>
              <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get in Touch</Button></a>
            </div>
          </div>
          <div className="md:order-1">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80"
              alt="Proactive hazard identification on site"
              className="w-full rounded-image object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
