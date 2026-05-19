"use client";

import React from "react";

export function Content1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">How We Solved It</h2>
            <div className="prose-base prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
              <div>
                <p>
                  We used a cantilevered system scaffold on the road boundary,
                  eliminating the need for ground-level footings in the traffic
                  zone. On the residential side, we coordinated directly with
                  the adjacent building&apos;s body corporate to establish safe
                  overhead protection before any work began above ground level.
                </p>
                <p>
                  Installation was staged floor by floor in line with the
                  builder&apos;s construction sequence. Scaffold lifts were advanced
                  ahead of each trade package — structural, render, glazing —
                  so access was ready when each crew mobilised. We ran a
                  dedicated scaffold foreman on site throughout the program,
                  not a visiting supervisor.
                </p>
                <p>
                  All penetrations, bracket points, and loading bays were
                  engineered and signed off before mobilisation. That
                  documentation gave the builder confidence that trades
                  wouldn&apos;t be stopped by scaffold-related RFIs mid-program —
                  and they weren&apos;t.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80"
              className="object-cover rounded-image w-full"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
