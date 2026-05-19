"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout19() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Challenges</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              The Operational Realities of Birdcage Erection
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Birdcage systems are not complicated to understand, but they
              demand serious pre-work. The challenge isn&apos;t the scaffold itself
              — it&apos;s everything that goes with it on a live or partially live
              site.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p><strong>Load calculations before a single standard goes up.</strong> A full-coverage deck carries significant UDL. The slab or floor structure below has to be assessed, and if there are point-load concerns, base plates and spreader systems need to be designed, not guessed.</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p><strong>Coordination around ongoing operations.</strong> Industrial shutdowns and civil projects rarely stop completely. The scaffold build sequence has to work around live plant, active corridors, and access restrictions — which means phased erection planned against the site program, not retrofitted to it.</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p><strong>Phased dismantling is where shortcuts bite.</strong> Getting the scaffold down safely, in sequence, while trades are still finishing work below — that&apos;s where the planning discipline shows. We build the dismantle sequence into the original design.</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/safety-and-compliance"><Button title="View safety standards" variant="secondary">Our Safety Standards</Button></a>
              <a href="/contact-us"><Button title="Contact Us" variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
