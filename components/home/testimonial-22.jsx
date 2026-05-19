"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrandName } from "@/components/brand-name";
import React from "react";
import { ChevronRight } from "relume-icons";

const AvatarJamesMitchell = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#ddeef7"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#1a5276"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <ellipse cx="40" cy="28" rx="19" ry="13" fill="#6b3a2a"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#f9c89a"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M34 51 Q40 56 46 51" fill="none" stroke="#c07830" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const AvatarSarahChen = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#e8f0f8"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#1e6670"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <path d="M21 36 Q17 55 21 71 Q25 75 29 69 Q25 52 27 39" fill="#1c1c1c"/>
    <path d="M59 36 Q63 55 59 71 Q55 75 51 69 Q55 52 53 39" fill="#1c1c1c"/>
    <ellipse cx="40" cy="27" rx="19" ry="12" fill="#1c1c1c"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#f9c89a"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M34 51 Q40 56 46 51" fill="none" stroke="#c07830" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const AvatarRobertWalsh = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#ddf0e8"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#1a5e3a"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <ellipse cx="40" cy="28" rx="19" ry="13" fill="#1c1c1c"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#f9c89a"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M34 51 Q40 56 46 51" fill="none" stroke="#c07830" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export function Testimonial22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mb-4 h-[3px] w-12 bg-punch" />
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Client Feedback</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">What Clients Say</h2>
          <p className="text-medium">Trust built on results</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 flex items-center gap-3 md:mb-10 lg:mb-12">
                <span className="inline-flex items-center rounded-full bg-midnight/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-midnight">
                  Commercial
                </span>
                <BrandName name="Mirvac Group" className="text-sm font-bold tracking-widest uppercase" />
              </div>
              <h5 className="text-medium">
                "They delivered on time and didn't cut corners on safety."
              </h5>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                  <AvatarJamesMitchell />
                </div>
                <div>
                  <p className="font-semibold">James Mitchell</p>
                  <p>Project manager, retail</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex w-full items-center justify-end md:mt-8">
              <a href="/projects"><Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-punch" />}
                className="text-punch"
              >
                View Projects
              </Button></a>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 flex items-center gap-3 md:mb-10 lg:mb-12">
                <span className="inline-flex items-center rounded-full bg-punch/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-punch">
                  Construction
                </span>
                <BrandName name="Buildcorp" className="text-sm font-bold tracking-widest uppercase" />
              </div>
              <h5 className="text-medium">
                "Professional crew, solid equipment, and they understood our
                timeline."
              </h5>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                  <AvatarSarahChen />
                </div>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p>Site supervisor, construction</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex w-full items-center justify-end md:mt-8">
              <a href="/projects"><Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-punch" />}
                className="text-punch"
              >
                View Projects
              </Button></a>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 flex items-center gap-3 md:mb-10 lg:mb-12">
                <span className="inline-flex items-center rounded-full bg-emerald-700/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  Civil
                </span>
                <BrandName name="John Holland" className="text-sm font-bold tracking-widest uppercase" />
              </div>
              <h5 className="text-medium">
                "The attention to detail was impressive. Everything was exactly
                as specified."
              </h5>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                  <AvatarRobertWalsh />
                </div>
                <div>
                  <p className="font-semibold">Robert Walsh</p>
                  <p>Director, civil works</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex w-full items-center justify-end md:mt-8">
              <a href="/projects"><Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-punch" />}
                className="text-punch"
              >
                View Projects
              </Button></a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
