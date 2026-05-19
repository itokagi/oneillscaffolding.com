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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Engineered</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Steel Frameworks Built for Commercial Scale
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              We design and install scaffolding systems that handle the demands
              of large commercial projects — from retail fit-outs and office
              towers to hospitals, industrial facilities, and multi-storey
              residential. Every structure is engineered for safety, efficiency,
              and the specific access requirements of your site. We work to your
              programme, not ours.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Load-bearing capacity engineered for heavy material and personnel loads</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Modular systems that adapt to complex multi-level layouts and confined sites</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Full WHS compliance and documented SWMS before any work begins</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>48-hour quote turnaround with site visit included</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/request-a-quote"><Button variant="secondary">Get a Quote</Button></a>
              <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
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
