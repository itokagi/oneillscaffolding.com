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
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Outcomes</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                What the Builder Got
              </h2>
              <p className="text-medium">
                A compliant, safe, and fully documented scaffold — installed on
                an active urban street without a single programme delay.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1600&q=80"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Programme Delivered on Date
              </h3>
              <p>
                Staged deliveries and pre-approved council permits meant the
                scaffold went up to schedule — no variation claims, no catch-up
                days.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Full Public Protection from Day One
              </h3>
              <p>
                Covered walkways and compliant hoarding kept the O&apos;Keefe
                Street footpath open and safe throughout the build — no WHS
                incidents, no council notices.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Neighbouring Tenancies Undisturbed
              </h3>
              <p>
                Off-peak deliveries and tight traffic management kept the
                surrounding businesses operating normally — no complaints, no
                noise disputes, no access blockages.
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
