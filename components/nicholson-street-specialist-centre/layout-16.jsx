"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Our approach</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              Engineered around the clinical schedule, not around our convenience
            </h1>
            <p className="mb-5 text-medium md:mb-6">
              OSG designed a modular system-scaffold solution that could be
              erected and struck in planned stages aligned to the facility&apos;s
              appointment schedule. Early morning install windows and
              pre-fabricated bay sections kept noise events short and
              predictable. Fully sheeted perimeter containment prevented dust
              and debris reaching air handling zones.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/body_system.svg"
                  />
                </div>
                <span>Staged erection aligned to clinical appointment windows</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/medical_mask.svg"
                  />
                </div>
                <span>Full perimeter sheeting controlling dust and debris ingress</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    className="size-6 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/minimize.svg"
                  />
                </div>
                <span>Pedestrian corridors to consulting suites maintained throughout</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/capabilities/commercial-scaffolding"><Button title="Our commercial capabilities" variant="secondary">Our Capabilities</Button></a>
              <a href="/capabilities"><Button title="View All capabilities" variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>View All</Button></a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
