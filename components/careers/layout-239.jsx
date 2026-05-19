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
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Training</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">Master Your Craft and Stay Current</h2>
              <p className="text-medium">
                We believe in continuous learning. You&apos;ll get access to nationally recognised certifications, hands-on mentorship from senior scaffolders, and structured training programs that keep you current with Australian Standards and industry best practice.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80"
                  alt="Skills development"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">Ongoing Skills Development</h3>
              <p>Regular training sessions covering new techniques, updated safety protocols, equipment handling, and scaffolding system changes. Scheduled quarterly, not just when something goes wrong.</p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=800&q=80"
                  alt="Industry certifications"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">Industry Certifications</h3>
              <p>We support you in earning ScaffCert, EWP, and WHS credentials. Training costs are covered for team members progressing through the business.</p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
                  alt="Mentorship"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">Mentorship from Experienced Teams</h3>
              <p>Paired with senior scaffolders and site supervisors from your first day. Learn from people who&apos;ve built their reputation doing things right on Queensland&apos;s most demanding sites.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <a href="/careers#open-positions">
              <Button variant="secondary">View Open Roles</Button>
            </a>
            <a href="/capabilities">
              <Button iconRight={<ChevronRight className="text-punch" />} variant="link" size="link">
                Our Capabilities
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
