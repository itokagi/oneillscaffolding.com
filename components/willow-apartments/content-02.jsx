"use client";

import React from "react";

export function Content2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              The Outcome
            </h2>
            <div className="prose-base prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
              <div>
                <p>
                  The cladding subcontractor started on the date locked into the
                  program. Every subsequent trade had scaffold access waiting
                  for them — render, glazing, and balustrade crews all moved
                  through their scopes without a single scaffold-related delay
                  recorded in the site diary.
                </p>
                <p>
                  The builder&apos;s site manager described the scaffold coordination
                  as the smoothest part of an otherwise complex build. That&apos;s
                  the standard we hold ourselves to: the scaffold should be the
                  thing that doesn&apos;t cause problems, so the builder can focus
                  on the things that do.
                </p>
                <p>
                  Willow Apartments reached practical completion on schedule.
                  The scaffold was struck progressively as each facade section
                  was signed off, keeping the street frontage clear and the site
                  tidy through to handover. No defects. No re-work. No
                  outstanding scaffold items at PC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
