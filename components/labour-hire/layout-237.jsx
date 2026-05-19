"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout237() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Certified</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              What You Get When You Hire Through OSG
            </h2>
            <p className="text-medium">
              Every person we send has the credentials and hands-on experience to
              perform from day one. No agency fill-ins, no candidates who've
              never been on a scaffold — just qualified, proven scaffolders who
              know the work.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/verified.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Fully Certified Scaffolders
              </h3>
              <p>
                All labour hire personnel hold current ScaffCert certification
                and Queensland WHS licences for scaffolding. Documentation is
                provided on request before placement begins.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/safety_check.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Safety Comes First, Always
              </h3>
              <p>
                We build a culture where safety isn't negotiable. Our workers
                arrive site-ready, WHS compliant, and familiar with toolbox talk
                protocols. No shortcuts, no workarounds.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/deployed_code.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Ready When You Need Them
              </h3>
              <p>
                Rapid deployment means your project doesn't wait. We typically
                confirm placements within 24 hours and have workers on site
                within 48. Tell us your start date and we work back from there.
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
            <a href="/request-a-quote"><Button variant="secondary">Get a Quote</Button></a>
            <a href="/capabilities"><Button iconRight={<ChevronRight className="text-punch" />} variant="link" size="link">Our Capabilities</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
