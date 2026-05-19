"use client";

import { Button } from "@/components/ui/button";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight } from "relume-icons";

const useLayout486 = () => {
  const { scrollY } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const featureCount = 4;

  const yProgress = useMotionValue(0);
  const y = useTransform(yProgress, (value) => `${value}%`);

  const updateActiveIndex = useCallback(() => {
    const cards = document.querySelectorAll("[data-card-index]");
    const triggerPoint = window.innerHeight * 0.3;
    let newActiveIndex = 0;

    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= triggerPoint) {
        newActiveIndex = i;
      }
    });

    setActiveIndex(newActiveIndex);
  }, []);

  useEffect(() => {
    const targetY = -((activeIndex * 100) / featureCount);
    animate(yProgress, targetY, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  }, [activeIndex, featureCount, yProgress]);

  useMotionValueEvent(scrollY, "change", () => {
    updateActiveIndex();
  });

  useEffect(() => {
    updateActiveIndex();
    const onResize = () => updateActiveIndex();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateActiveIndex]);

  return { y };
};

const useProgressBars486 = () => {
  const { scrollY } = useScroll();
  const [progresses, setProgresses] = useState([0, 0, 0, 0]);

  const updateProgresses = useCallback(() => {
    const cards = document.querySelectorAll("[data-card-index]");
    const triggerPoint = window.innerHeight * 0.3;
    const newProgresses = [];

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();

      const progress = rect.top <= triggerPoint ? 1 : 0;

      newProgresses[index] = progress;
    });

    setProgresses(newProgresses);
  }, []);

  useMotionValueEvent(scrollY, "change", updateProgresses);

  useEffect(() => {
    updateProgresses();

    const handleResize = () => updateProgresses();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateProgresses]);

  const progressMotionValues = progresses.map((progress) => {
    const motionValue = useMotionValue(0);

    useEffect(() => {
      animate(motionValue, progress, {
        type: "spring",
        stiffness: 90,
        damping: 20,
      });
    }, [progress, motionValue]);

    return useTransform(motionValue, [0, 1], ["0%", "100%"]);
  });

  return progressMotionValues;
};

export function Layout486() {
  const layout486ProgressBars = useProgressBars486();
  const layout486State = useLayout486();
  return (
    <section
      data-layout="layout486"
      className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1"
    >
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
          <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
            <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
              0
            </p>
            <motion.div className="text-center" style={{ y: layout486State.y }}>
              <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
                1
              </p>
              <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
                2
              </p>
              <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
                3
              </p>
              <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
                4
              </p>
            </motion.div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
            <div
              data-card-index={0}
              className="flex flex-col items-start justify-center py-8 md:py-0"
            >
              <div className="mt-10 flex text-[6rem] leading-none font-bold md:mt-0 md:hidden md:text-[14rem]">
                01
              </div>
              <div className="mt-8 mb-8 h-0.5 w-full bg-neutral-lighter md:mt-0">
                <motion.div
                  className="h-0.5 bg-scheme-text"
                  style={{ width: layout486ProgressBars[0] }}
                  initial={{ width: "0%" }}
                />
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Installation</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Most Jobs Are Ready in One to Two Days
              </h2>
              <p className="text-medium">
                We plan the layout during the quote stage, assess your site before arrival, and have the crew on the tools quickly. Minimal disruption to the build programme means you keep moving forward.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <a href="/request-a-quote"><Button variant="secondary">Get a Quote</Button></a>
                <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
              </div>
            </div>
            <div
              data-card-index={1}
              className="flex flex-col items-start justify-center py-8 md:py-0"
            >
              <div className="mt-10 flex text-[6rem] leading-none font-bold md:mt-0 md:hidden md:text-[14rem]">
                02
              </div>
              <div className="mt-8 mb-8 h-0.5 w-full bg-neutral-lighter md:mt-0">
                <motion.div
                  className="h-0.5 bg-scheme-text"
                  style={{ width: layout486ProgressBars[1] }}
                  initial={{ width: "0%" }}
                />
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Compliance</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Every Installation Meets Australian Standards
              </h2>
              <p className="text-medium">
                All systems are erected to AS/NZS 1576 and comply with Queensland WHS legislation. We inspect every bay before handover and provide a signed compliance record for your site file.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <a href="/request-a-quote"><Button variant="secondary">Get a Quote</Button></a>
                <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
              </div>
            </div>
            <div
              data-card-index={2}
              className="flex flex-col items-start justify-center py-8 md:py-0"
            >
              <div className="mt-10 flex text-[6rem] leading-none font-bold md:mt-0 md:hidden md:text-[14rem]">
                03
              </div>
              <div className="mt-8 mb-8 h-0.5 w-full bg-neutral-lighter md:mt-0">
                <motion.div
                  className="h-0.5 bg-scheme-text"
                  style={{ width: layout486ProgressBars[2] }}
                  initial={{ width: "0%" }}
                />
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Flexibility</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Rental Periods That Match Your Schedule
              </h2>
              <p className="text-medium">
                Two weeks or two months — we work to your builder's programme. If the schedule shifts, we adjust without penalty. Short-term or long-term, the pricing is clear upfront.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <a href="/request-a-quote"><Button variant="secondary">Get a Quote</Button></a>
                <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
              </div>
            </div>
            <div
              data-card-index={3}
              className="flex flex-col items-start justify-center py-8 md:py-0"
            >
              <div className="mt-10 flex text-[6rem] leading-none font-bold md:mt-0 md:hidden md:text-[14rem]">
                04
              </div>
              <div className="mt-8 mb-8 h-0.5 w-full bg-neutral-lighter md:mt-0">
                <motion.div
                  className="h-0.5 bg-scheme-text"
                  style={{ width: layout486ProgressBars[3] }}
                  initial={{ width: "0%" }}
                />
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Adaptation</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Custom Solutions for Tight Spaces
              </h2>
              <p className="text-medium">
                Narrow laneways, sloping blocks, and confined backyards don't stop us. We design custom solutions for the sites where standard equipment won't fit, and we've seen all of them.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <a href="/request-a-quote"><Button variant="secondary">Get a Quote</Button></a>
                <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Contact Us</Button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
