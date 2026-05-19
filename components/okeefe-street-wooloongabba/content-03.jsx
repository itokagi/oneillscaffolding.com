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
              How We Executed It
            </h2>
            <div className="prose-base prose-p:m-0 prose-p:mb-4 prose-p:leading-[1.5]">
              <div>
                <p>
                  Our planning started with the street, not the building. We
                  coordinated footpath hoarding permits and traffic management
                  approvals with Brisbane City Council before a single tube was
                  loaded. That front-end work meant zero surprises once the crew
                  arrived on site.
                </p>
                <p>
                  With no room for a crane on O&apos;Keefe Street, we staged
                  all materials through a controlled loading zone during approved
                  off-peak windows. Deliveries were sequenced to avoid conflict
                  with the active pedestrian footpath and neighbouring tenants
                  — keeping the street usable and the programme intact.
                </p>
                <p>
                  The scaffold itself was engineered to span the full building
                  facade across multiple levels without tying into adjacent
                  structures. Covered walkways and full hoarding along the
                  street boundary kept the public safe and the site compliant
                  from day one through to final strip. No variations, no delays,
                  handed over on the date we said.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Dialog>
              <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1280&q=80"
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
