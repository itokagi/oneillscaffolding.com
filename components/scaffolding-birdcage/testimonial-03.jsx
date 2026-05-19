"use client";

import { AvatarJamesMitchell } from "@/components/cartoon-avatars";
import React from "react";
import { BrandName } from "@/components/brand-name";
import { TAG_COLORS } from "@/components/shared/tag-colors";

const Badge = ({ type }) => (
  <span className={`mt-4 inline-block rounded-button border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${TAG_COLORS[type] || ""}`}>
    {type}
  </span>
);

export function Testimonial3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <BrandName name="Probuild" className="mb-8 text-sm font-bold tracking-widest uppercase" />
          <p className="mb-3 text-4xl font-bold leading-none text-punch">&ldquo;</p>
          <h5 className="mb-10 text-h5 font-bold">
            We had tradies working across the full ceiling on day one of
            access. No repositioning, no gaps — the whole deck was there.
            That productivity difference is real money on a project this size.
          </h5>
          <div className="flex flex-col items-center gap-2">
            <div className="size-14 overflow-hidden rounded-full">
              <AvatarJamesMitchell />
            </div>
            <p className="font-semibold">James Mitchell</p>
            <p className="text-sm text-neutral-dark">Project Manager, Constructa</p>
            <Badge type="Civil" />
          </div>
        </div>
      </div>
    </section>
  );
}
