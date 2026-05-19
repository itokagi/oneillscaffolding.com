"use client";

import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/projects-data";
import React from "react";

const categoryColor = {
  Commercial: "bg-punch/10 text-punch",
  Residential: "bg-emerald-50 text-emerald-700",
  Specialist: "bg-amber-50 text-amber-700",
};

const ClientBadge = ({ name, initials, color, font }) => (
  <div className="flex items-center gap-2">
    <span
      className="flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold leading-none select-none"
      style={{ backgroundColor: `${color}15`, color, fontFamily: `"${font}", sans-serif`, letterSpacing: "0.03em" }}
    >
      {initials}
    </span>
    <span className="text-xs font-semibold text-neutral-dark/65">{name}</span>
  </div>
);

export function Portfolio17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Portfolio</p>
          <h2 className="text-h2 font-bold">All Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ title, listDesc, category, location, listImg, href, client }) => (
            <div key={href} className="group flex flex-col overflow-hidden rounded-card border border-neutral-light bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="overflow-hidden">
                <img
                  src={listImg}
                  alt={title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColor[category] ?? "bg-neutral-100 text-neutral-600"}`}>
                    {category}
                  </span>
                  <span className="text-xs text-neutral-dark/45">{location}</span>
                </div>
                <h3 className="mb-2 text-h5 font-bold text-neutral-darkest">{title}</h3>
                <p className="mb-4 flex-1 text-sm text-neutral-dark/65 leading-relaxed">{listDesc}</p>
                <div className="mb-5 border-t border-neutral-light/80 pt-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-dark/40">Client</p>
                  <ClientBadge {...client} />
                </div>
                <a href={href}>
                  <Button variant="secondary" className="w-full">View Project</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
