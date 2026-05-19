"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout140_2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-punch-lightest">
              <img
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/verified.svg"
                alt=""
                className="size-7"
                style={{ filter: "invert(38%) sepia(82%) saturate(600%) hue-rotate(170deg) brightness(0.95)" }}
              />
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">03 — Standards</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Australian Standards Guide Our Work from Start to Finish
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              All scaffold systems designed and erected by O&apos;Neill Scaffolding Group comply with AS/NZS 1576 (Scaffolding) and AS/NZS 4576 (Guidelines for Scaffolding Safety). We do not deviate from these standards under client schedule pressure, and we do not sign off on structures that do not meet them. Compliance is not a checkbox — it is how we protect the people who work on and around our structures every day.
            </p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <a href="/capabilities"><Button variant="secondary">Our Capabilities</Button></a>
              <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get in Touch</Button></a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
              alt="Australian Standards compliance in scaffolding"
              className="w-full rounded-image object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
