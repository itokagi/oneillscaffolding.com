"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout140() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-punch-lightest">
              <img
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/description.svg"
                alt=""
                className="size-7"
                style={{ filter: "invert(38%) sepia(82%) saturate(600%) hue-rotate(170deg) brightness(0.95)" }}
              />
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">01 — Method</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Safe Work Method Statements Guide Every Project
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Every scaffold erection, modification, and dismantling task performed by O&apos;Neill Scaffolding Group is guided by a documented Safe Work Method Statement. Our SWMS are site-specific, reviewed before commencement, and signed off by our safety officer and your site management team. They are not templates — they reflect the actual conditions, equipment, and personnel on your project.
            </p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <a href="/capabilities"><Button variant="secondary">Our Capabilities</Button></a>
              <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get in Touch</Button></a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              alt="Safe work method statements on a scaffolding site"
              className="w-full rounded-image object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
