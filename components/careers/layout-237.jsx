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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Growth</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Build Your Career with Us</h2>
            <p className="text-medium">
              We invest in people who want to grow. There&apos;s a clear path forward here for those who show up, work hard, and want to build something they can be proud of. Your effort won&apos;t go unnoticed.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/road.svg"
                  alt="Advancement"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">Advancement Pathways</h3>
              <p>Progress through roles that match your skills and ambition. Scaffolders move into leading hands, then supervisors, then site management — we promote from within wherever we can.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/attribution.svg"
                  alt="Recognition"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">Recognition Programs</h3>
              <p>Your contributions matter and we make sure you know it. Performance bonuses, team recognition, and direct feedback from management are part of how we operate.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/train.svg"
                  alt="Training"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">Ongoing Training</h3>
              <p>Stay sharp with regular development sessions, new certifications, and on-the-job mentorship from experienced tradespeople. We cover the cost of industry tickets and recertifications.</p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
            <a href="/careers/apply">
              <Button>Apply Now</Button>
            </a>
            <a href="/about-us">
              <Button iconRight={<ChevronRight className="text-punch" />} variant="link" size="link">
                About OSG
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
