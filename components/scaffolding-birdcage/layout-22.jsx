"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                className="size-20 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/workspaces.svg"
              />
            </div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              What Is Birdcage Scaffolding?
            </h2>
            <p className="text-medium">
              A birdcage scaffold is a freestanding multi-bay platform that
              covers an entire floor area with a continuous working deck — no
              gaps, no cantilevered sections. Every bay is tied into the grid,
              so the load distributes evenly across the structure rather than
              concentrating at a few anchor points. It&apos;s the right solution
              when the work surface is large, overhead, and requires unrestricted
              movement: stadium ceiling repairs, industrial plant shutdowns,
              large civic building envelope restoration, and full-building
              enclosures. If you need tradies working across 500m² of ceiling
              simultaneously without repositioning, this is the system.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/capabilities"><Button title="View Capabilities" variant="secondary">View Capabilities</Button></a>
              <a href="/request-a-quote"><Button title="Get a Quote" variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get a Quote</Button></a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
