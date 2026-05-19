"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Project at a Glance</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Scope, Scale, and Safety
            </h2>
            <p className="text-medium">
              Numbers don&apos;t lie. Here&apos;s what OSG delivered on the
              Mercedes-Benz Showroom — on programme, within the builder&apos;s
              budget envelope, and with a safety record that speaks for itself.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Our Projects</Button>
              <Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-punch" />}
              >
                View all
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-8 lg:gap-y-12">
            <div className="w-full border-l border-scheme-border pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                2,400
              </p>
              <h3 className="text-h6 font-bold">m² of Internal Access Scaffolding</h3>
            </div>
            <div className="w-full border-l border-scheme-border pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                16
              </p>
              <h3 className="text-h6 font-bold">Weeks On Programme — Not a Day Over</h3>
            </div>
            <div className="w-full border-l border-scheme-border pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                3
              </p>
              <h3 className="text-h6 font-bold">Staged Erection and Dismantle Phases</h3>
            </div>
            <div className="w-full border-l border-scheme-border pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                Zero
              </p>
              <h3 className="text-h6 font-bold">Recordable Safety Incidents on Site</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
