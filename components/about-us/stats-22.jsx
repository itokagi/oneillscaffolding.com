"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React, { useEffect, useRef, useState } from "react";
import { PlayCircle } from "relume-icons";

function useCountUp(target, duration = 700) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - (1 - progress) * (1 - progress);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { ref, count };
}

function StatItem({ value, suffix, label }) {
  const { ref, count } = useCountUp(value);
  return (
    <div ref={ref}>
      <h1 className="mb-2 text-h1 font-bold" style={{fontFamily: "Poppins, sans-serif", color: "var(--color-punch)"}}>
        {count}{suffix}
      </h1>
      <h3 className="text-h6 font-bold">{label}</h3>
    </div>
  );
}

export function Stats22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Numbers</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">What We've Done</h2>
          <p className="text-medium">The work speaks for itself</p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:p-8 lg:grid-cols-1 lg:gap-x-0 lg:p-12">
            <StatItem value={500} suffix="+" label="Projects Completed" />
            <StatItem value={25} suffix="+" label="Years in Business" />
            <StatItem value={100} suffix="%" label="Safety Compliance" />
          </div>
          <div className="flex flex-col">
            <Dialog>
              <DialogTrigger className="relative flex size-full w-full items-center justify-center overflow-hidden rounded-image">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1280&q=80"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <PlayCircle className="absolute z-20 size-20 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
