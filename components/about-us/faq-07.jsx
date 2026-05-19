"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { KeyboardArrowDown } from "relume-icons";

const faqs = [
  {
    q: "How Quickly Can You Mobilize?",
    a: "We move fast when the job demands it. Most projects see us on site within days of confirmation. We keep equipment ready and crews trained so there's no wasted time between the handshake and the first bolt.",
  },
  {
    q: "Do You Handle Custom Designs?",
    a: "Every project is different, and we treat it that way. Our engineers work from your blueprints and site conditions to build exactly what you need. No templates, no shortcuts. Just solutions that fit.",
  },
  {
    q: "What About Safety Compliance?",
    a: "Safety isn't negotiable here. We meet every regulation, conduct regular inspections, and train our people relentlessly. Your site is our responsibility, and we take it seriously.",
  },
  {
    q: "Can You Work in Tight Spaces?",
    a: "Tight spaces are where experience shows. We've rigged scaffolding in alleys, between buildings, and in conditions others won't touch. Difficult doesn't scare us.",
  },
  {
    q: "What Areas Do You Service?",
    a: "We operate across the region covering Commercial, Residential, and Civil projects. If you're building something that matters, we can get there and get it done.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-neutral-light last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-neutral-darkest text-base">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="shrink-0 text-punch"
        >
          <KeyboardArrowDown className="size-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-dark/70 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq7() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">

          {/* Left — heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-4 h-[3px] w-12 bg-punch" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Questions</p>
            <h2 className="mb-5 text-h2 font-bold text-neutral-darkest">What You Need to Know</h2>
            <p className="text-neutral-dark/65 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get back to you fast.
            </p>
            <div className="mt-8">
              <a href="/contact-us">
                <Button variant="secondary">Contact Us</Button>
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="rounded-card border border-neutral-light bg-white px-6 py-2 md:px-8">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
