"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { KeyboardArrowDown } from "relume-icons";

const faqs = [
  {
    q: "What areas do you service?",
    a: "We operate across Southeast Queensland — Brisbane, Gold Coast, Sunshine Coast, Ipswich, Toowoomba, and surrounding regions. For larger commercial or civil projects we also travel further afield. Contact us to discuss your site location.",
  },
  {
    q: "How quickly can you turn around a quote?",
    a: "We aim to have a detailed quote back to you within 48 hours of receiving your project brief. For urgent requests, call us directly and we'll do our best to fast-track the assessment.",
  },
  {
    q: "Do you handle residential as well as commercial projects?",
    a: "Yes — we work across residential builds, renovations, commercial towers, industrial sites, and civil infrastructure. Our crews are experienced in every project type and adapt their setup accordingly.",
  },
  {
    q: "Are you fully licensed and insured?",
    a: "Absolutely. O'Neill Scaffolding Group holds all required Queensland scaffolding licences and maintains comprehensive public liability and workers' compensation insurance. Documentation is available on request.",
  },
  {
    q: "Can I hire just your crew without the scaffolding?",
    a: "Yes — we offer a labour hire service for clients who supply their own materials or need additional qualified scaffolders on site. Our team hold current White Cards and industry certifications.",
  },
  {
    q: "What makes OSG different from other scaffolding companies?",
    a: "We've been operating since 2000. That's over two decades of Queensland projects, long-term client relationships, and a safety culture built from the ground up. We don't cut corners — every job is treated like our name is on the scaffold, because it is.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-neutral-light last:border-b-0">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-neutral-darkest">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="shrink-0"
        >
          <KeyboardArrowDown className="size-5 text-punch" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-neutral-dark/75">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Contact30() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-punch">FAQ</p>
            <h2 className="mb-4 text-h2 font-bold">Common Questions</h2>
            <p className="text-medium text-neutral-dark/70">
              Can&apos;t find what you&apos;re looking for? Reach out directly — we&apos;re quick to respond.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#inquire"
                className="inline-flex items-center gap-2 rounded-button border border-punch/30 bg-punch/8 px-4 py-2.5 text-sm font-semibold text-punch transition-colors hover:bg-punch/15"
              >
                Send a Message
              </a>
              <a
                href="tel:+61730000000"
                className="inline-flex items-center gap-2 rounded-button border border-neutral-light bg-white px-4 py-2.5 text-sm font-semibold text-neutral-darkest transition-colors hover:bg-neutral-lightest"
              >
                Call Us
              </a>
            </div>
          </div>
          <div className="divide-y divide-neutral-light rounded-card border border-neutral-light bg-white px-6 py-2 shadow-sm">
            {faqs.map((item, i) => (
              <FaqItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
