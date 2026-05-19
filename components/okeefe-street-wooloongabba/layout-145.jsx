"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout145() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container flex flex-col items-center text-center">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <div className="mb-5 inline-block md:mb-6">
              <img
                className="size-20 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/accessible.svg"
              />
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">The Challenge</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              A Narrow Street. An Active Footpath. Zero Room for Error.
            </h2>
            <p className="text-medium">
              O&apos;Keefe Street is a tight inner-city corridor in Wooloongabba — restricted
              kerb access, live pedestrian traffic, and neighbouring occupied tenancies
              on both sides. The builder needed a scaffold solution that met council
              requirements, protected the public, and didn&apos;t stall the programme.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <a href="/capabilities/commercial-scaffolding"><Button title="Commercial scaffolding" variant="secondary">Our Capabilities</Button></a>
              <a href="/contact-us"><Button title="Contact us" variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Discuss Your Site</Button></a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1600&q=80"
            className="aspect-video size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
