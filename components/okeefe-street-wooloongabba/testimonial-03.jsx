"use client";

import { AvatarDavidChen } from "@/components/cartoon-avatars";
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
          <BrandName name="BMD Group" className="mb-8 text-sm font-bold tracking-widest uppercase" />
          <p className="mb-3 text-4xl font-bold leading-none text-punch">&ldquo;</p>
          <h5 className="mb-10 text-h5 font-bold">
            They had the council permits locked in before we even finished
            our programme. That kind of preparation on a street like
            O&apos;Keefe is what keeps a job moving.
          </h5>
          <div className="flex flex-col items-center gap-2">
            <div className="size-14 overflow-hidden rounded-full">
              <AvatarDavidChen />
            </div>
            <p className="font-semibold">Michael Chen</p>
            <p className="text-sm text-neutral-dark">Project Manager, Development</p>
            <Badge type="Commercial" />
          </div>
        </div>
      </div>
    </section>
  );
}
