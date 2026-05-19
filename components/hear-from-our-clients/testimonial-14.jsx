"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { BrandName } from "@/components/brand-name";
import { PlayCircle, StarFull } from "relume-icons";

export function Testimonial14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first">
            <Dialog>
              <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1280&q=80"
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
          <div className="flex flex-col items-start">
            <div className="mb-6 flex gap-1 md:mb-8">
              <StarFull className="size-6 text-scheme-text" />
              <StarFull className="size-6 text-scheme-text" />
              <StarFull className="size-6 text-scheme-text" />
              <StarFull className="size-6 text-scheme-text" />
              <StarFull className="size-6 text-scheme-text" />
            </div>
            <h5 className="text-h5 font-bold">
              "O'Neill Scaffolding Group showed up on time, every time, and the quality was there
              from day one."
            </h5>
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              <div>
                <p className="font-semibold">James Mitchell</p>
                <p>Project manager, Westfield</p>
              </div>
              <div className="mx-4 hidden w-px self-stretch bg-scheme-border sm:mx-0 sm:block" />
              <div>
                <BrandName name="Buildcorp QLD" className="text-sm font-bold tracking-widest uppercase" />
              </div>
            </div>
            <div className="mt-10 border-t border-scheme-border pt-8 w-full">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-scheme-text/40">Trusted by teams at</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {["Buildcorp QLD", "Hutchinson Builders", "BMD Group", "Hansen Yuncken", "Multiplex"].map((name) => (
                  <span key={name} className="text-sm font-bold uppercase tracking-widest text-scheme-text/30">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
