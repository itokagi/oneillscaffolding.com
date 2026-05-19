"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { KeyboardArrowDown } from "relume-icons";

const faqs = [
  {
    q: "How long does it take to erect residential scaffolding?",
    a: "Most standard residential jobs are completed in one to two days. We confirm the timeframe during the quote stage based on your specific site and access requirements.",
  },
  {
    q: "Do you provide scaffolding for owner-builders?",
    a: "Yes. We work with owner-builders, licensed builders, and direct homeowners. We can provide all required WHS documentation and a SWMS for your site file.",
  },
  {
    q: "Is scaffolding removal included in the price?",
    a: "Yes. Our quotes include erection, the agreed hire period, and removal. There are no surprise charges for standard dismantling and pack-down.",
  },
  {
    q: "Can you work on sloping blocks and tight access?",
    a: "Absolutely. We regularly work on sloping sites, narrow lots, and properties with restricted street access across Southeast Queensland.",
  },
  {
    q: "What certifications do your scaffolders hold?",
    a: "All our scaffolders hold current ScaffCert certification and comply with Queensland WHS licensing requirements. We carry public liability and workers compensation insurance on every job.",
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
            <h2 className="mb-5 text-h2 font-bold text-neutral-darkest">Residential Scaffolding Questions</h2>
            <p className="text-neutral-dark/65 leading-relaxed">
              Answers about our Residential Scaffolding services and safety standards. Still have questions? We&apos;re happy to help.
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
