"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout192() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">How We Work</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Engineered Before It&apos;s Built
            </h2>
            <p className="text-medium">
              Every birdcage job starts with a site assessment and a structural
              review — bay sizes, lift heights, deck loading, base conditions,
              and tie-in requirements all have to be resolved before erection
              begins. We produce a working drawing and a documented erection
              sequence that your site team can follow, your engineers can sign
              off on, and your insurers can accept. Once on site, our crews work
              to that sequence. If site conditions change mid-build, we adjust
              the design, not just the scaffold. That&apos;s the difference between
              a birdcage that&apos;s right and one that&apos;s just standing.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/request-a-quote"><Button title="Request a Quote" variant="secondary">Request a Quote</Button></a>
              <a href="/contact-us"><Button title="Contact Us" variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
