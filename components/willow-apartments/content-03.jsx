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
              The Project
            </h2>
            <div className="prose-base prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
              <div>
                <p>
                  Willow Apartments is a seven-storey residential development in
                  South East Queensland — 64 units across a full perimeter
                  facade with a mix of render, aluminium cladding, and
                  full-height glazing. The builder needed complete external
                  access from ground to roof level before cladding trades could
                  begin.
                </p>
                <p>
                  The site sat on a narrow suburban block with a live road on
                  one boundary and an occupied residential building on another.
                  That meant no room for a traditional perimeter scaffold
                  footprint — access had to be engineered around the constraints
                  from day one, not retrofitted after problems emerged.
                </p>
                <p>
                  The program was tight. The builder had locked in a cladding
                  subcontractor start date that left no margin for scaffold
                  delays. Our job was to be ready before the cladding crew
                  arrived on site — not catch up to them.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Dialog>
              <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1280&q=80"
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
