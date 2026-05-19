"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years in Operation", sub: "Established 2000 in Queensland" },
  { value: 500, suffix: "+", label: "Projects Completed", sub: "Commercial, residential & civil" },
  { value: 100, suffix: "%", label: "Safety Compliance", sub: "Zero Serious Incidents on Record" },
  { value: 48, suffix: "hr", label: "Quote Turnaround", sub: "Competitive quotes, fast" },
];

function useCountUp(target, duration = 700) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (rafId.current) cancelAnimationFrame(rafId.current);
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.round(eased * target));
            if (progress < 1) rafId.current = requestAnimationFrame(tick);
          };
          rafId.current = requestAnimationFrame(tick);
        } else {
          if (rafId.current) cancelAnimationFrame(rafId.current);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => { observer.disconnect(); if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, [target, duration]);

  return { ref, count };
}

function StatCell({ value, suffix, label, sub }) {
  const { ref, count } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col p-8 md:p-10 bg-white">
      <p
        className="mb-2 font-bold text-punch leading-none"
        style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
      >
        {count}{suffix}
      </p>
      <p className="mb-1 font-semibold text-neutral-darkest text-base">{label}</p>
      <p className="text-neutral-dark/50 text-xs">{sub}</p>
    </div>
  );
}

export function Stats7() {
  return (
    <section className="px-[5%] py-20 md:py-28 scheme-1">
      <div className="container">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="mb-4 h-[3px] w-12 bg-punch" />
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-punch">Track Record</p>
            <h2 className="text-h2 font-bold text-neutral-darkest">Numbers That Speak<br />for Themselves</h2>
          </div>
          <p className="max-w-sm text-neutral-dark/60 text-medium">
            O&apos;Neill Scaffolding Group has built systems across Queensland for projects large and small.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-neutral-light lg:grid-cols-4 border border-neutral-light overflow-hidden rounded-card">
          {stats.map((stat) => (
            <StatCell key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
