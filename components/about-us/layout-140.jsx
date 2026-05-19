"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout140() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Foundation</p>
        <h5 className="mb-5 text-h5 font-bold md:mb-6">
          We've built O'Neill Scaffolding Group on the principle that good work
          requires solid ground. For years, we've been the scaffold beneath the
          skyline, supporting the ambitions of builders, developers, and
          contractors across the region.
        </h5>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <a href="/capabilities"><Button variant="secondary">Our Capabilities</Button></a>
          <a href="/contact-us"><Button
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-punch" />}
            className="text-punch"
          >
            Get in Touch
          </Button></a>
        </div>
      </div>
    </section>
  );
}
