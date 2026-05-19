"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta31() {
  return (
    <section className="relative overflow-hidden px-[5%] py-24 md:py-32 scheme-4">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1920&q=80" alt="" className="size-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-midnight-darkest/85" />
      </div>
      <div className="container relative z-10 mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 h-[3px] w-12 bg-punch" />
        <h2 className="mb-5 text-h2 font-bold text-white md:mb-6">Planning a Birdcage Job?</h2>
        <p className="mb-10 text-white/70 text-medium">Talk to OSG early. The sooner we understand your site and program, the better we can design a system that fits the work — not the other way around.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/request-a-quote"><Button className="h-12 px-8">Get a Quote</Button></a>
          <a href="/contact-us"><Button variant="secondary-alt" className="h-12 px-8 text-white border-white/30">Contact Us</Button></a>
        </div>
      </div>
    </section>
  );
}