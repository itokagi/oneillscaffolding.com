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
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Safety and compliance</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Tighter protocols because the stakes were higher
            </h2>
            <p className="text-medium">
              Working in proximity to an operational specialist centre meant our
              standard safety plan was the floor, not the ceiling. A dedicated
              site safety plan was prepared specific to the infection control and
              fire egress requirements of the facility. All scaffold operatives
              were inducted to the site&apos;s healthcare environment procedures
              before any works commenced. Zero notifiable incidents across the
              full programme — in one of the most demanding environments a
              scaffolding team can work in.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/safety-and-compliance"><Button title="Safety standards" variant="secondary">Safety standards</Button></a>
              <a href="/forms-library"><Button title="View compliance docs" variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Compliance docs</Button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
