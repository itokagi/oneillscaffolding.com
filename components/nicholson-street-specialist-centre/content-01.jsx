"use client";

import React from "react";

export function Content1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              The challenge: scaffolding inside an operating medical precinct
            </h2>
            <div className="prose-base prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
              <div>
                <p>
                  The Nicholson Street Specialist Centre presented a problem that
                  general commercial scaffolding contractors routinely walk away
                  from: a multi-storey medical facility undergoing significant
                  structural and façade works while specialist consulting suites
                  remained open and patients continued to attend appointments.
                </p>
                <p>
                  Standard construction noise and access methods were not
                  acceptable. Infection control zoning meant scaffold decks could
                  not create dust ingress pathways into clinical areas. Pedestrian
                  routes to consulting suites had to remain open, clearly signed,
                  and unobstructed throughout the programme. Tight site boundaries
                  left no room for conventional tube-and-coupler staging or
                  laydown areas.
                </p>
                <p>
                  The project called for a scaffolding contractor who could plan
                  around an active clinical schedule, coordinate access windows
                  with facility management, and deliver a system engineered to
                  healthcare-specific risk tolerances — not a standard commercial
                  build spec. OSG was engaged to solve it.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80"
              className="object-cover rounded-image w-full"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
