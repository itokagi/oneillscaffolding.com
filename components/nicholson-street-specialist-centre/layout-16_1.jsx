"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout16_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Results</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Programme complete — clinic never closed, no incidents, no delays
            </h1>
            <p className="mb-5 text-medium md:mb-6">
              The scaffolding programme was completed within the contracted
              timeframe. Not a single consulting session was cancelled due to
              access disruption or construction interference. The facility
              management team confirmed the site induction process and daily
              coordination log became the model they now require of all
              contractors working in the precinct.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/timer_3.svg"
                  />
                </div>
                <span>Full programme delivered on time with no programme extensions</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/medical_information.svg"
                  />
                </div>
                <span>Zero clinical sessions disrupted across the entire build period</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/repeat.svg"
                  />
                </div>
                <span>OSG protocols adopted as the facility&apos;s contractor standard</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/request-a-quote"><Button title="Get a Quote" variant="secondary">Get a Quote</Button></a>
              <a href="/projects"><Button title="View all projects" variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>All Projects</Button></a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
