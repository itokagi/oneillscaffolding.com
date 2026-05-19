"use client";

import React from "react";
import { PortfolioHeader } from "@/components/shared/PortfolioHeader";
import { Button } from "@/components/ui/button";
import { BrandName } from "@/components/brand-name";
import { TAG_COLORS } from "@/components/shared/tag-colors";
import { ChevronRight } from "relume-icons";

export function ProjectPage({ project }) {
  const { stats, body, testimonial, client } = project;
  const badgeClass = TAG_COLORS[project.category] ?? "bg-neutral-100 text-neutral-700 border-neutral-200";

  return (
    <main>
      <PortfolioHeader project={project} />

      {/* Stats section */}
      <section className="px-[5%] py-16 md:py-24 scheme-1">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-12 bg-punch" />
            <h2 className="mb-4 text-h2 font-bold">Project at a Glance</h2>
            <p className="mb-6 text-medium text-neutral-dark/70">
              A focused programme, an experienced crew, and a commitment to safe, on-time delivery — that's how OSG approaches every project.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/request-a-quote">
                <Button iconRight={<ChevronRight />}>Get a Quote</Button>
              </a>
              <a href="/projects">
                <Button variant="secondary">View All Projects</Button>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-scheme-border pl-6">
                <p className="text-4xl font-bold text-punch leading-none mb-1">{s.value}</p>
                <p className="text-sm text-neutral-dark/65 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="px-[5%] py-16 md:py-24 scheme-1">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-h2 font-bold">{body.heading}</h2>
            {body.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-medium text-neutral-dark/70 last:mb-0">{p}</p>
            ))}
          </div>
          <div>
            <img
              src={body.img}
              alt={body.imgAlt}
              className="w-full rounded-image aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="px-[5%] py-16 md:py-24 scheme-1 border-t border-scheme-border">
        <div className="container mx-auto max-w-2xl text-center">
          <BrandName name={testimonial.company} className="text-sm font-bold uppercase tracking-[0.2em]" />
          <p className="mt-6 mb-6 text-3xl font-bold leading-snug text-neutral-darkest">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="font-semibold text-neutral-darkest">{testimonial.name}</p>
          <p className="mb-3 text-sm text-neutral-dark/60">{testimonial.role}</p>
          <span className={`inline-block rounded-button border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${badgeClass}`}>
            {project.category}
          </span>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative px-[5%] py-24 md:py-32 scheme-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1920&q=80"
            alt="Scaffolding project site"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-darkest/80" />
        </div>
        <div className="relative z-10 container mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-h2 font-bold text-white">Have a Similar Project?</h2>
          <p className="mb-8 text-white/70 text-medium">
            OSG delivers safe, on-programme scaffolding across commercial, residential, and civil projects throughout Queensland.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/request-a-quote">
              <Button iconRight={<ChevronRight />}>Get a Quote</Button>
            </a>
            <a href="/contact-us">
              <Button variant="secondary-alt">Contact Us</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
