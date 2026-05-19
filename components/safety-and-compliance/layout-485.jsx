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

const useLayout485 = () => {
  const { scrollY } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const featureCount = 3;

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

const useProgressBars485 = () => {
  const { scrollY } = useScroll();
  const [progresses, setProgresses] = useState([0, 0, 0]);

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
        stiffness: 50,
        damping: 25,
        mass: 1.5,
      });
    }, [progress, motionValue]);

    return useTransform(motionValue, [0, 1], ["0%", "100%"]);
  });

  return progressMotionValues;
};

export function Layout485() {
  const layout485ProgressBars = useProgressBars485();
  const layout485State = useLayout485();
  return (
    <section
      data-layout="layout485"
      className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1"
    >
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
          <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
            <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
              0
            </p>
            <motion.div className="text-center" style={{ y: layout485State.y }}>
              <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
                1
              </p>
              <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
                2
              </p>
              <p className="text-[6rem] leading-none font-bold md:text-[14rem]">
                3
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
                  style={{ width: layout485ProgressBars[0] }}
                  initial={{ width: "0%" }}
                />
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Accredited</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                We Hold the Certifications That Matter
              </h2>
              <p className="text-medium">
                Our credentials are current, verified, and renewed on schedule. We maintain the certifications required to operate safely and legally across commercial, residential, and civil project types in Queensland. ScaffCert, WHS licences, and relevant Australian Standards accreditation are kept up to date without exception.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <a href="/projects"><Button variant="secondary">View Our Work</Button></a>
                <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get in Touch</Button></a>
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
                  style={{ width: layout485ProgressBars[1] }}
                  initial={{ width: "0%" }}
                />
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Licensed</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Every License Is Current and in Good Standing
              </h2>
              <p className="text-medium">
                We operate under full regulatory approval from Queensland WHS authorities. Our licences cover the complete scope of work we undertake — from basic residential access through to complex commercial and civil structures. You will never be asked to work with an unlicensed crew.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <a href="/projects"><Button variant="secondary">View Our Work</Button></a>
                <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get in Touch</Button></a>
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
                  style={{ width: layout485ProgressBars[2] }}
                  initial={{ width: "0%" }}
                />
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Insured</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Comprehensive Coverage Protects Everyone Involved
              </h2>
              <p className="text-medium">
                Our insurance coverage is extensive, current, and independently verified. We carry public liability, workers compensation, and plant and equipment cover on every project. Certificates of currency are available on request within 24 hours — no chasing required.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <a href="/projects"><Button variant="secondary">View Our Work</Button></a>
                <a href="/contact-us"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Get in Touch</Button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
