"use client";

import React, { useState } from "react";

export function ProjectGallery({ images = [], title = "Project Gallery", description = "" }) {
  const [hovered, setHovered] = useState(null);

  if (!images.length) return null;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-10 md:mb-14">
          <div className="mb-4 h-[3px] w-12 bg-punch" />
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Gallery</p>
          <h2 className="mb-4 text-h2 font-bold">{title}</h2>
          {description && <p className="text-medium max-w-xl">{description}</p>}
        </div>

        {/* Accordion hover-expand gallery */}
        <div
          className="flex overflow-hidden rounded-image"
          style={{ height: "clamp(280px, 45vw, 560px)" }}
          onMouseLeave={() => setHovered(null)}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative cursor-pointer overflow-hidden"
              style={{
                flex: hovered === null ? 1 : hovered === i ? 3.5 : 0.6,
                transition: "flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                minWidth: 0,
              }}
              onMouseEnter={() => setHovered(i)}
            >
              <img
                src={img.src}
                alt={img.alt || `Project photo ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: hovered === i ? "scale(1.04)" : "scale(1)",
                }}
              />
              {/* Subtle dark veil — lifts on hover */}
              <div
                className="absolute inset-0 bg-midnight"
                style={{
                  opacity: hovered === i ? 0 : 0.22,
                  transition: "opacity 0.35s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-5 flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setHovered(hovered === i ? null : i)}
              className="h-[3px] rounded-full transition-all duration-300"
              style={{
                width: hovered === i ? "2rem" : "0.5rem",
                background: hovered === i ? "var(--color-punch)" : "rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
