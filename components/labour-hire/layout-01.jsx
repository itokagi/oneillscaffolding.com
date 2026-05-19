"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Labour Hire</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Certified Scaffolders Available Across Southeast Queensland
            </h2>
            <p className="text-medium">
              Whether you need two scaffolders for a week or a full crew for a
              long-running commercial build, we can place the right people. Every
              worker we supply holds current ScaffCert certification, complies
              with Queensland WHS licensing requirements, and is covered under
              our public liability and workers compensation insurance. Your
              project, your timeline — our people.
            </p>
            <ul className="mt-4 space-y-2 text-medium">
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 size-4 shrink-0 text-punch" />
                Short-term or long-term placements available
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 size-4 shrink-0 text-punch" />
                All workers hold current ScaffCert and WHS credentials
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 size-4 shrink-0 text-punch" />
                Covered under OSG public liability and workers compensation
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 size-4 shrink-0 text-punch" />
                Rapid deployment — typically within 48 hours of confirmation
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/request-a-quote"><Button variant="secondary">Request Crew</Button></a>
              <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
