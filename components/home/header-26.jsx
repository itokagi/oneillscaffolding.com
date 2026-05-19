"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header26() {
  return (
    <section className="-mt-[84px] w-full" style={{ height: "100dvh" }}>
      <div className="relative h-full w-full overflow-hidden">
        {/* Background video */}
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />

        {/* Dark overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(8,16,36,0.42) 0%, rgba(8,16,36,0.68) 55%, rgba(8,16,36,0.82) 100%)",
          }}
        />


        {/* Content — vertically centred, text layered over image */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-[5%] text-center">
          <div className="container flex flex-col items-center">
            <div className="mb-5 h-[3px] w-12 bg-punch" />
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-punch">
              Queensland &middot; Australia
            </p>

            <h1
              className="mb-7 font-black uppercase text-white"
              style={{
                fontSize: "clamp(3.2rem, 9vw, 8rem)",
                lineHeight: 0.88,
                letterSpacing: "0.07em",
                textShadow: "0 2px 24px rgba(0,0,0,0.35)",
              }}
            >
              Right Access.<br />Right People.<br />Right on Time.
            </h1>

            <p className="mb-10 max-w-lg text-base text-white/72 leading-relaxed md:text-lg">
              Scaffolding Solutions for Commercial, Residential and Civil Projects
              across Southeast Queensland. On time. On spec. Every time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/request-a-quote">
                <Button size="lg" className="h-13 px-8 text-base font-semibold">
                  Get a Quote
                </Button>
              </a>
              <a href="/projects">
                <Button
                  size="lg"
                  variant="secondary-alt"
                  className="h-13 px-8 text-base font-semibold border-white/35 text-white hover:bg-white/10"
                >
                  View Our Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
