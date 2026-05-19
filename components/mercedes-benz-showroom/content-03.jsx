"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { PlayCircle } from "relume-icons";

export function Content3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Precision Access Around a Live Showroom
            </h2>
            <div className="prose-base prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
              <div>
                <p>
                  The Mercedes-Benz showroom fit-out in Brisbane required scaffolding
                  inside and around an active retail environment. The challenge was
                  straightforward but unforgiving: tradespeople needed safe, continuous
                  access to curtain wall glazing and ceiling systems, while the showroom
                  floor below remained operational with vehicles on display.
                </p>
                <p>
                  OSG engineered a bespoke internal access system that protected the
                  polished concrete floor with full ground protection boards, kept
                  scaffold ties clear of the glazed façade panels, and allowed the
                  builder to sequence trades without losing access windows. We worked
                  directly with the builder's programme to stage erection and dismantle
                  in three planned phases, keeping disruption off the critical path.
                </p>
                <p>
                  The project ran 16 weeks across a 2,400 m² footprint. Twelve OSG
                  crew members were on site at peak, operating under a strict
                  site-specific safety management plan that matched the standards
                  expected of a high-profile automotive brand. Zero recordable incidents.
                  No delays attributable to scaffold access. That&apos;s the standard
                  we hold ourselves to on every commercial job.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Dialog>
              <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1280&q=80"
                  alt="Relume placeholder image"
                  className="size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <PlayCircle className="absolute z-20 size-20 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
