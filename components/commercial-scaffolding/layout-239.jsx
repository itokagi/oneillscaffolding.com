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
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Reliable</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                What Sets Our Commercial Scaffolding Apart
              </h2>
              <p className="text-medium">
                We build systems that work as hard as your crew. Every detail
                matters when schedules are tight, budgets are fixed, and people
                are working at height.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1600&q=80"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Safety Compliance Without Compromise
              </h3>
              <p>
                All installations comply with AS/NZS 1576 and Queensland WHS
                legislation. Independent inspection is available on request —
                we welcome it.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=80"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Fast Setup, Faster Results
              </h3>
              <p>
                Modular components mean we get your framework up and operational
                without delays. We coordinate with your site supervisor to fit
                within your works programme.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Built to Handle the Real Costs
              </h3>
              <p>
                Efficient designs reduce material waste and labour hours.
                Transparent quoting means no surprises on your invoice — what
                we quote is what you pay.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <a href="/projects"><Button variant="secondary">View Projects</Button></a>
            <a href="/contact-us"><Button iconRight={<ChevronRight className="text-punch" />} variant="link" size="link">Get in Touch</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
