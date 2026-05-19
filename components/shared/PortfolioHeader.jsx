"use client";

import React from "react";

const CATEGORY_ACCENT = {
  Commercial: "bg-blue-500/25 border border-blue-400/30 text-blue-100",
  Residential: "bg-green-500/25 border border-green-400/30 text-green-100",
  Specialist: "bg-violet-500/25 border border-violet-400/30 text-violet-100",
};

export function PortfolioHeader({ project }) {
  const { title, category, heroImg, heroSubtitle, tags } = project;
  const accentClass = CATEGORY_ACCENT[category] ?? "bg-white/10 text-white/70";

  return (
    <section className="relative -mt-[84px] scheme-4">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt={title}
          className="size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #00070f 0%, rgba(0,7,15,0.75) 45%, rgba(0,20,40,0.2) 100%)" }}
        />
      </div>
      <div className="relative z-10 container px-[5%] max-w-3xl pt-[calc(84px+2rem)] pb-8 md:pt-[calc(84px+3rem)] md:pb-12">
        <div className="mb-4 h-[3px] w-12 bg-punch" />
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-punch">{category}</p>
        <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">{title}</h1>
        <p className="max-w-xl text-white/75 text-medium">{heroSubtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-2 min-h-[48px]">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs ${
                i === 0
                  ? `font-semibold ${accentClass}`
                  : "font-medium bg-white/10 text-white/70"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
