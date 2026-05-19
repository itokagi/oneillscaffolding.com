"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout140_3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="md:order-2">
            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-punch-lightest">
              <img
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/forum.svg"
                alt=""
                className="size-7"
                style={{ filter: "invert(38%) sepia(82%) saturate(600%) hue-rotate(170deg) brightness(0.95)" }}
              />
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">04 — Briefings</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Toolbox Talks Keep Safety Sharp on Every Job
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              We brief our teams at the start of every shift. Toolbox talks cover the day&apos;s tasks, site-specific hazards, any changes to the SWMS, and open questions from the crew. These are not five-minute formalities — they are structured conversations that keep safety visible, build a speak-up culture, and ensure everyone on the site knows what to watch for before a single coupling is tightened.
            </p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <a href="/capabilities"><Button variant="secondary">Our Capabilities</Button></a>
              <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get in Touch</Button></a>
            </div>
          </div>
          <div className="md:order-1">
            <img
              src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=80"
              alt="Toolbox talk briefing with scaffolding crew"
              className="w-full rounded-image object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
