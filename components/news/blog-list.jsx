"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

const newsletters = [
  {
    url: "/news/new-safety-standards",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    alt: "Scaffolding safety compliance documentation",
    category: "Industry News",
    readTime: "5 min read",
    title: "Updated WHS Scaffolding Requirements: What Queensland Contractors Need to Know",
    description: "SafeWork Queensland's updated scaffolding guidance has tightened classification requirements, load documentation, and engineer sign-off for suspended structures. If your scaffold is currently on-site, the 90-day transitional period may already be running.",
  },
  {
    url: "/news/major-commercial-project",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=80",
    alt: "14-floor commercial scaffolding Brisbane CBD",
    category: "Project Work",
    readTime: "5 min read",
    title: "Case Study: 14-Floor Brisbane CBD Commercial Project Completed 3 Weeks Early",
    description: "A narrow laneway, a live neighbouring tenancy, and overhead electrical infrastructure. OSG completed the Brisbane CBD retail and office project ahead of programme with zero recordable incidents — here's how we sequenced it.",
  },
  {
    url: "/news/labour-hire-expansion",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    alt: "OSG scaffolders on site",
    category: "Company News",
    readTime: "4 min read",
    title: "Why We're Expanding Our Labour Hire Division — and What It Means for Contractors",
    description: "Demand for certified scaffold labour in Southeast Queensland is outpacing supply. OSG is growing its bench of HRWL-certified scaffolders and riggers available for short and long-term placement across the region.",
  },
];

const CATEGORY_STYLE = {
  "Industry News": "bg-punch/10 text-punch",
  "Project Work": "bg-blue-50 text-blue-700",
  "Company News": "bg-emerald-50 text-emerald-700",
};

export function BlogList() {
  return (
    <div className="flex flex-col divide-y divide-neutral-lighter">
      {newsletters.map((article) => (
        <div key={article.url} className="flex flex-col gap-6 py-10 first:pt-0 sm:flex-row sm:gap-8">
          <a href={article.url} className="shrink-0 sm:w-[220px]">
            <img
              src={article.image}
              alt={article.alt}
              className="aspect-[4/3] w-full rounded-image object-cover transition-opacity hover:opacity-90 sm:aspect-square"
            />
          </a>
          <div className="flex flex-col justify-center">
            <div className="mb-3 flex items-center gap-3">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${CATEGORY_STYLE[article.category] ?? "bg-neutral-100 text-neutral-600"}`}>
                {article.category}
              </span>
              <span className="text-xs text-neutral-dark/40">{article.readTime}</span>
            </div>
            <a href={article.url} className="mb-2 block">
              <h3 className="text-h5 font-bold leading-snug text-neutral-darkest hover:text-punch transition-colors">{article.title}</h3>
            </a>
            <p className="text-sm leading-relaxed text-neutral-dark/65">{article.description}</p>
            <a href={article.url} className="mt-4 inline-flex">
              <Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>
                Read More
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
