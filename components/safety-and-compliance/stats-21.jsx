"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { PlayCircle } from "relume-icons";

export function Stats21() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Record</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Our Safety Numbers Speak Clearly
          </h2>
          <p className="text-medium">Strong performance across all metrics</p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 lg:grid-cols-[1fr_0.5fr]">
          <div className="flex flex-col">
            <Dialog>
              <DialogTrigger className="relative flex size-full w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1280&q=80"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <PlayCircle className="absolute z-20 size-20 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:p-8 lg:grid-cols-1 lg:gap-x-0 lg:p-12">
            <div>
              <h1 className="mb-2 text-h1 font-bold">98%</h1>
              <h3 className="text-h6 font-bold">Incident-Free Work Days</h3>
            </div>
            <div>
              <h1 className="mb-2 text-h1 font-bold">0.2</h1>
              <h3 className="text-h6 font-bold">
                Lost-Time Injury Frequency Rate
              </h3>
            </div>
            <div>
              <h1 className="mb-2 text-h1 font-bold">100%</h1>
              <h3 className="text-h6 font-bold">Compliance Audit Pass Rate</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
