"use client";

import React, { useState } from "react";

export function MasonryGallery({ images = [], title = "Project Gallery", description = "" }) {
  const [lightbox, setLightbox] = useState(null);

  if (!images.length) return null;

  // Assign a tall span to every 3rd image (indexes 0, 3) to create rhythm
  const rowSpan = (i) => (i % 3 === 0 ? "row-span-2" : "row-span-1");

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-10 md:mb-14">
          <div className="mb-4 h-[3px] w-12 bg-punch" />
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Gallery</p>
          <h2 className="mb-4 text-h2 font-bold">{title}</h2>
          {description && <p className="text-medium max-w-xl">{description}</p>}
        </div>

        {/* Masonry grid — 2 cols on mobile, 3 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[200px] gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${rowSpan(i)} relative cursor-pointer overflow-hidden rounded-image group`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt || `Gallery photo ${i + 1}`}
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg className="size-8 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-2 0h-2m-2-2v2" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt || `Gallery photo ${lightbox + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-image object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-5 flex gap-2">
              <button
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                onClick={(e) => { e.stopPropagation(); setLightbox((l) => Math.max(0, l - 1)); }}
                disabled={lightbox === 0}
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <span className="flex items-center px-3 text-xs text-white/60">{lightbox + 1} / {images.length}</span>
              <button
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                onClick={(e) => { e.stopPropagation(); setLightbox((l) => Math.min(images.length - 1, l + 1)); }}
                disabled={lightbox === images.length - 1}
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
