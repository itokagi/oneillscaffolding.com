"use client";

import {
  AvatarJamesMitchell,
  AvatarMichaelTorres,
  AvatarSarahChen,
} from "@/components/cartoon-avatars";
import React from "react";
import { BrandName } from "@/components/brand-name";
import { TAG_COLORS } from "@/components/shared/tag-colors";

const Badge = ({ type }) => (
  <span className={`mt-4 inline-block rounded-button border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${TAG_COLORS[type] || ""}`}>{type}</span>
);

export function Testimonial3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-h2 font-bold md:mb-6">What clients say</h1>
          <p className="text-medium">Real feedback from real projects</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex h-full flex-col items-center justify-between text-center">
            <div className="mb-6 inline-block md:mb-8">
              <BrandName name="Mirvac Group" className="text-sm font-bold tracking-widest uppercase" />
            </div>
            <h5 className="text-h6 font-bold">
              &ldquo;O&apos;Neill Scaffolding Group delivered exactly what we needed, on time and without
              compromise.&rdquo;
            </h5>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mx-auto mb-3 size-14 min-h-14 min-w-14 overflow-hidden rounded-full md:mb-4">
                <AvatarJamesMitchell />
              </div>
              <p className="font-semibold">James Mitchell</p>
              <p>Project manager, developer</p>
              <Badge type="Commercial" />
            </div>
          </div>
          <div className="flex h-full flex-col items-center justify-between text-center">
            <div className="mb-6 inline-block md:mb-8">
              <BrandName name="Probuild" className="text-sm font-bold tracking-widest uppercase" />
            </div>
            <h5 className="text-h6 font-bold">
              &ldquo;Their crew knew the work. Safety was never an afterthought.&rdquo;
            </h5>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mx-auto mb-3 size-14 min-h-14 min-w-14 overflow-hidden rounded-full md:mb-4">
                <AvatarSarahChen />
              </div>
              <p className="font-semibold">Sarah Chen</p>
              <p>Site supervisor, contractor</p>
              <Badge type="Residential" />
            </div>
          </div>
          <div className="flex h-full flex-col items-center justify-between text-center">
            <div className="mb-6 inline-block md:mb-8">
              <BrandName name="Hutchinson Builders" className="text-sm font-bold tracking-widest uppercase" />
            </div>
            <h5 className="text-h6 font-bold">
              &ldquo;Professional from start to finish. They understood our timeline.&rdquo;
            </h5>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mx-auto mb-3 size-14 min-h-14 min-w-14 overflow-hidden rounded-full md:mb-4">
                <AvatarMichaelTorres />
              </div>
              <p className="font-semibold">Michael Torres</p>
              <p>Operations director, builder</p>
              <Badge type="Civil" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
