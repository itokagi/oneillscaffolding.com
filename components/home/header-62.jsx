"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="relative -mt-[84px] scheme-4">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" alt="Queensland's trusted scaffolding partner" className="size-full object-cover" />
        <div className="absolute inset-0" style={{background: "linear-gradient(to top, #00070f 0%, rgba(0,7,15,0.75) 45%, rgba(0,20,40,0.2) 100%)"}} />
      </div>
      <div className="container relative z-10 px-[5%] max-w-3xl pt-[calc(84px+2rem)] pb-8 md:pt-[calc(84px+3rem)] md:pb-12">
        <div className="mb-4 h-[3px] w-12 bg-punch" />
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-punch">OSG</p>
        <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">Queensland's Trusted Scaffolding Partner</h1>
        <p className="max-w-xl text-white/75 text-medium">Commercial, residential, and civil scaffolding. Built right, delivered on time.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="/request-a-quote"><Button className="h-12 px-7">Get a Quote</Button></a>
          <a href="/projects"><Button variant="secondary-alt" className="h-12 px-7 text-white border-white/30">View Projects</Button></a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-7">
          {[
            { icon: "verified", label: "QBCC Licensed" },
            { icon: "shield", label: "Fully Insured" },
            { icon: "safety_check", label: "SafeWork QLD" },
            { icon: "workspace_premium", label: "Est. 2000" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <img src={`https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/${icon}.svg`} alt="" className="size-4 brightness-0 invert opacity-60" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}