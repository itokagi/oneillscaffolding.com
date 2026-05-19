"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

const categoryColor = {
  "Safety & SWMS": "bg-red-50 text-red-700 border-red-200",
  "Certificates": "bg-punch/10 text-punch border-punch/20",
  "Project Forms": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Insurance": "bg-amber-50 text-amber-700 border-amber-200",
};

const typeColor = {
  "Template": "bg-blue-50 text-blue-700",
  "Form": "bg-violet-50 text-violet-700",
  "Certificate": "bg-neutral-100 text-neutral-600",
};

export function DocumentPage({ doc }) {
  if (!doc) {
    return (
      <section className="px-[5%] py-24 scheme-1">
        <div className="container text-center">
          <h1 className="mb-4 text-h2 font-bold">Document not found</h1>
          <a href="/forms-library" className="text-punch hover:underline">← Back to Forms Library</a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="px-[5%] py-16 md:py-20 scheme-1 border-b border-neutral-light">
        <div className="container max-w-4xl">
          <nav className="mb-8 flex items-center gap-1.5 text-sm text-neutral-dark/50">
            <a href="/forms-library" className="hover:text-punch transition-colors">Forms Library</a>
            <ChevronRight className="size-3.5" />
            <span className="text-neutral-darkest font-medium">{doc.shortTitle}</span>
          </nav>
          <div className="mb-5 flex flex-wrap gap-2">
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryColor[doc.category] ?? "bg-neutral-100 text-neutral-600 border-neutral-200"}`}>
              {doc.category}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${typeColor[doc.type] ?? "bg-neutral-100 text-neutral-600"}`}>
              {doc.type}
            </span>
          </div>
          <h1 className="mb-5 text-h1 font-bold">{doc.title}</h1>
          <p className="text-medium text-neutral-dark/65 max-w-2xl">{doc.desc}</p>
        </div>
      </section>

      {/* Body */}
      <section className="px-[5%] py-16 md:py-20 scheme-1">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">

            {/* Main content */}
            <div>
              <h2 className="mb-4 text-h4 font-bold">Overview</h2>
              <div className="mb-10 space-y-4">
                {doc.overview.split("\n\n").map((para, i) => (
                  <p key={i} className="text-neutral-dark/70 leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="mb-10 rounded-card border border-punch/20 bg-punch/5 px-6 py-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-punch">Legislative Basis</p>
                <p className="text-sm text-neutral-dark/70 leading-relaxed">{doc.legalBasis}</p>
              </div>

              <h2 className="mb-4 text-h4 font-bold">What This Document Covers</h2>
              <ul className="mb-10 space-y-3">
                {doc.contents.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-punch" />
                    <span className="text-neutral-dark/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {doc.note && (
                <div className="rounded-card border border-neutral-light bg-neutral-lightest px-6 py-5">
                  <p className="mb-1 text-sm font-bold text-neutral-darkest">Important note</p>
                  <p className="text-sm text-neutral-dark/65 leading-relaxed">{doc.note}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
              <div className="rounded-card border border-neutral-light bg-white p-6 shadow-sm">
                {doc.action === "download" && doc.downloadHref ? (
                  <>
                    <p className="mb-1 text-base font-bold text-neutral-darkest">Download this document</p>
                    <p className="mb-5 text-sm text-neutral-dark/55">Free to download. Adapt this template for your specific project site before use.</p>
                    <a href={doc.downloadHref} download>
                      <Button className="w-full">Download PDF</Button>
                    </a>
                    <p className="mt-3 text-center text-xs text-neutral-dark/35">PDF format · Free download</p>
                  </>
                ) : (
                  <>
                    <p className="mb-1 text-base font-bold text-neutral-darkest">Request a certified copy</p>
                    <p className="mb-5 text-sm text-neutral-dark/55">This document is issued project-specifically. Contact us and we'll have it to you within 24 hours.</p>
                    <a href="/contact-us">
                      <Button className="w-full">Request this document</Button>
                    </a>
                  </>
                )}
                <div className="mt-6 border-t border-neutral-light pt-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-neutral-dark/40">Questions?</p>
                  <a href="mailto:trey@oneillscaffolding.com.au" className="block text-sm text-punch hover:underline">trey@oneillscaffolding.com.au</a>
                  <a href="tel:+61730000000" className="mt-1 block text-sm text-punch hover:underline">+61 7 3000 0000</a>
                </div>
              </div>
              <a href="/forms-library">
                <Button variant="secondary" className="w-full">← All documents</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
