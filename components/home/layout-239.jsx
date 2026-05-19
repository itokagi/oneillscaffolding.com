"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout239() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Services</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                What We Build and How We Build It
              </h2>
              <p className="text-medium">
                O'Neill Scaffolding Group specializes in three core areas. Each
                demands different expertise, and we have it all.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial scaffolding"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Commercial Scaffolding Solutions
              </h3>
              <p>
                We support retail, office, and industrial projects with systems
                designed for heavy loads and tight schedules.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80"
                  alt="Residential scaffolding"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Residential Scaffolding Systems
              </h3>
              <p>
                From renovations to new builds, we provide safe access for
                residential construction and maintenance work.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                  alt="Civil and industrial scaffolding"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Civil and Industrial Scaffolding
              </h3>
              <p>
                Large-scale infrastructure projects require specialized
                equipment and expertise we've built over years of work.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <a href="/capabilities"><Button variant="secondary">Explore All Capabilities</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
