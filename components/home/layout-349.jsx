"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronRight } from "relume-icons";

const useIntersectionAnimation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const overlayIndices = useMemo(() => new Set([0, 2]), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = Number(visible.target.dataset.index);
          if (!Number.isNaN(idx))
            setActiveSection((prev) => (prev === idx ? prev : idx));
        }
      },
      { threshold: [0.5, 0.75, 1] },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getImageClassName = (index) =>
    clsx("absolute w-full rounded-image transition-opacity duration-500", {
      "opacity-100": activeSection === index,
      "opacity-0": activeSection !== index,
    });

  const getOverlayClassName = () =>
    clsx(
      "h-full bg-scheme-foreground transition-opacity duration-300 md:sticky md:top-0 md:h-screen",
      overlayIndices.has(activeSection) ? "opacity-100" : "opacity-0",
    );

  const createSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  return {
    activeSection,
    sectionRefCallbacks: [0, 1, 2, 3].map(createSectionRef),
    getImageClassName,
    getOverlayClassName,
  };
};

const steps = [
  {
    num: "01",
    tag: "Listen",
    heading: "We Understand Your Project Before We Quote",
    body: "Site visits matter. We walk the ground, ask the hard questions, and understand what success looks like for your timeline and budget. Every project gets our full attention from the first conversation.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "02",
    tag: "Assess",
    heading: "Consultation and Assessment",
    body: "Your project's demands shape everything that follows — from site conditions to timeline constraints and access requirements. We assess load capacities, site hazards, and workflow impact before a single piece of scaffold is ordered. This is where precision begins.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "03",
    tag: "Plan",
    heading: "Engineering and Design",
    body: "Our engineers design systems that fit your specifications exactly — load capacity, access points, safety measures, and compliance requirements. We produce fully documented scaffold plans reviewed against Australian Standards. Nothing is left to chance or assumption.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "04",
    tag: "Deliver",
    heading: "Installation and Handover",
    body: "We arrive on schedule with the right equipment and crew, every time. Setup happens methodically, every connection verified before work begins. We stay on site through inspection and remain available for adjustments throughout the project lifecycle.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=900&q=80",
  },
];

export function Layout349() {
  const intersectionAnimation = useIntersectionAnimation();
  return (
    <section className="relative isolate scheme-1">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={intersectionAnimation.getOverlayClassName()} />
      </div>

      {/* Section label row */}
      <div className="px-[5%] pt-16 md:pt-24">
        <div className="container flex items-end justify-between gap-8 pb-8 border-b border-scheme-border">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-punch">Our process</p>
            <h2 className="text-h3 font-bold">How We Deliver</h2>
          </div>
          <a href="/capabilities" className="shrink-0">
            <Button variant="secondary" size="sm" iconRight={<ChevronRight className="text-punch" />}>
              Full capabilities
            </Button>
          </a>
        </div>
      </div>

      <div className="px-[5%]">
        <div className="container">
          <div className="relative grid gap-x-12 pb-16 sm:gap-y-12 md:grid-cols-2 md:pb-0 lg:gap-x-20">
            <div className="grid grid-cols-1 gap-12 md:block">
              {steps.map((step, i) => (
                <div key={step.num}>
                  <div
                    ref={intersectionAnimation.sectionRefCallbacks[i]}
                    data-index={i}
                    className="flex flex-col items-start justify-center md:h-screen"
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <span className="text-4xl font-bold leading-none text-punch/20" style={{ fontFamily: "Poppins, sans-serif" }}>{step.num}</span>
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-punch">{step.tag}</span>
                    </div>
                    <h2 className="mb-5 text-h2 font-bold md:mb-6">{step.heading}</h2>
                    <p className="text-medium">{step.body}</p>
                    <div className="mt-10 block w-full md:hidden">
                      <img
                        src={step.image}
                        className="w-full rounded-image"
                        alt={step.heading}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
              {steps.map((step, i) => (
                <img
                  key={step.num}
                  src={step.image}
                  className={intersectionAnimation.getImageClassName(i)}
                  alt={step.heading}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
