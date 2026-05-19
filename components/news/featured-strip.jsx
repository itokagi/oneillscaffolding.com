"use client";

import React from "react";

const featured = [
  {
    href: "/news/new-safety-standards",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
    category: "Industry News",
    title: "New Safety Standards Reshape the Queensland Scaffolding Industry",
  },
  {
    href: "/news/major-commercial-project",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80",
    category: "Project Work",
    title: "OSG Completes 14-Floor Brisbane CBD Commercial Project 3 Weeks Early",
  },
  {
    href: "/news/labour-hire-expansion",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    category: "Company News",
    title: "Expanding Our Labour Hire Division Across Southeast Queensland",
  },
];

const CATEGORY_STYLE = {
  "Industry News": "bg-punch/20 text-punch border-punch/25",
  "Project Work": "bg-blue-500/20 text-blue-200 border-blue-400/25",
  "Company News": "bg-emerald-500/20 text-emerald-200 border-emerald-400/25",
};

const doubled = [...featured, ...featured, ...featured];

export function FeaturedStrip() {
  return (
    <section className="overflow-hidden bg-white py-12">
      <div
        className="flex [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        style={{ overflowX: "hidden", overflowY: "visible" }}
      >
        <div className="flex animate-[marquee-horizontally_75s_linear_infinite] items-stretch gap-5">
          {doubled.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-image sm:w-[360px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span
                  className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] ${
                    CATEGORY_STYLE[item.category] ?? "bg-white/15 text-white border-white/20"
                  }`}
                >
                  {item.category}
                </span>
                <p className="text-sm font-bold leading-snug text-white">{item.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
