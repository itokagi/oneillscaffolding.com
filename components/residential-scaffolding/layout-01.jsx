"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Safety</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Secure Access Built into Every Residential Installation
            </h2>
            <p className="text-medium">
              We design every residential scaffold system with safety as the foundation. From single-storey renovations to multi-level new builds, your tradies and family deserve reliable access that meets AS/NZS 1576 standards and holds up in Queensland conditions. Installed in one to two days, with minimal disruption to your street and neighbours.
            </p>
            <ul className="mt-4 space-y-2 text-medium">
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 size-4 shrink-0 text-punch" />
                New builds, extensions, and major renovations — all covered
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 size-4 shrink-0 text-punch" />
                Staged installation to match your builder's programme
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 size-4 shrink-0 text-punch" />
                Removal included — one price, no hidden extras
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/request-a-quote"><Button variant="secondary">Get a Quote</Button></a>
              <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
