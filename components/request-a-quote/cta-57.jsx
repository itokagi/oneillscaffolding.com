"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta57() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="mb-8 max-w-lg text-medium md:mb-10">
            Our team is ready to discuss your project requirements and provide a
            competitive quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact-us"><Button variant="secondary-alt">Contact Us</Button></a>
            <a href="/request-a-quote"><Button>Get a Quote</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
