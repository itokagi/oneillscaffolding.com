"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { documents } from "./document-data";

const categories = [
  { label: "Safety & SWMS",  color: "bg-red-50 text-red-700",      activeColor: "bg-red-600 text-white" },
  { label: "HR & Personnel", color: "bg-violet-50 text-violet-700", activeColor: "bg-violet-600 text-white" },
  { label: "Operations",     color: "bg-emerald-50 text-emerald-700", activeColor: "bg-emerald-600 text-white" },
  { label: "Commercial",     color: "bg-amber-50 text-amber-700",   activeColor: "bg-amber-500 text-white" },
];

const categoryBadgeColor = Object.fromEntries(categories.map(({ label, color }) => [label, color]));

export function FormsLibraryDocuments() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? documents
    : documents.filter((d) => d.category === activeFilter);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">

        {/* Info banner */}
        <div className="mb-12 flex flex-col gap-4 rounded-card border border-punch/20 bg-punch/5 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-neutral-darkest">Need a certified copy or a project-specific document?</p>
            <p className="mt-1 text-sm text-neutral-dark/65">Certificates and signed copies are available on request — contact us and we&apos;ll have them to you within 24 hours.</p>
          </div>
          <a href="/contact-us" className="shrink-0">
            <Button>Request Documents</Button>
          </a>
        </div>

        {/* Filter buttons */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter("All")}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              activeFilter === "All"
                ? "bg-neutral-darkest text-white"
                : "bg-neutral-lightest text-neutral-dark hover:bg-neutral-lighter"
            }`}
          >
            All Documents
          </button>
          {categories.map(({ label, color, activeColor }) => (
            <button
              key={label}
              onClick={() => setActiveFilter(label)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeFilter === label ? activeColor : color + " hover:opacity-80"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Document grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ slug, title, desc, category, icon, type }) => (
            <div key={slug} className="flex flex-col rounded-card border border-neutral-light bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-punch/8 border border-punch/15">
                  <img src={icon} alt={title} className="size-5 brightness-0 opacity-45" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${categoryBadgeColor[category] ?? "bg-neutral-100 text-neutral-600"}`}>
                    {category}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-500">{type}</span>
                </div>
              </div>
              <h3 className="mb-2 text-base font-bold text-neutral-darkest">{title}</h3>
              <p className="mb-5 flex-1 text-sm text-neutral-dark/60 leading-relaxed">{desc}</p>
              <a href={`/forms-library/${slug}`}>
                <Button variant="secondary" className="w-full">View &amp; Download</Button>
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-neutral-dark/45">No documents in this category yet.</p>
        )}

        <p className="mt-12 text-center text-sm text-neutral-dark/45">
          All documents are issued in accordance with Queensland Work Health and Safety legislation and Australian Standards.
        </p>
      </div>
    </section>
  );
}
