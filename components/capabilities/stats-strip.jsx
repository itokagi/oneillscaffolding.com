"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years in operation" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 24, suffix: "hr", label: "Quote turnaround" },
  { value: 100, suffix: "%", label: "QBCC licensed crew" },
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
    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [target, duration]);

  return { ref, count };
}

function StatCell({ value, suffix, label }) {
  const { ref, count } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-start gap-1 md:px-10 first:md:pl-0 last:md:pr-0">
      <span className="text-4xl font-bold text-punch md:text-5xl" style={{ fontFamily: "Poppins, sans-serif" }}>
        {count}{suffix}
      </span>
      <span className="text-sm font-medium text-scheme-text/60 uppercase tracking-[0.12em]">{label}</span>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="px-[5%] py-14 md:py-16 scheme-1 border-y border-scheme-border">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-scheme-border">
          {stats.map((stat) => (
            <StatCell key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
