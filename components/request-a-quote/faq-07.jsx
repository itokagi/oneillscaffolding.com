"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { KeyboardArrowDown } from "relume-icons";

const faqs = [
  {
    q: "How long does quoting take?",
    a: "Most quotes are ready within 48 hours of receiving your project brief. For urgent work we can often move faster — if your timeline is tight, call us directly on (07) 3000 0000 and we'll do what we can.",
  },
  {
    q: "What information do you need from me?",
    a: "The more detail the better, but at minimum we need: project location, type of work (commercial, residential, civil), approximate scope, and your preferred start date. Site plans or photos help us give you the most accurate and competitive estimate.",
  },
  {
    q: "Do you cover all project types?",
    a: "Yes. We handle commercial, residential, and civil projects across all scales — from single-dwelling renovations to major infrastructure jobs. If you're not sure whether we cover your project type, just ask. We'll be straight with you.",
  },
  {
    q: "Can you work within my timeline?",
    a: "We understand that timing is everything in construction. Our team will discuss availability and logistics during the quoting process. In most cases we can accommodate project schedules — the earlier you contact us, the more options we have.",
  },
  {
    q: "Is there a cost for getting a quote?",
    a: "No. Quotes are completely free. We provide competitive, itemised pricing based on your specific project requirements — no hidden charges, no lock-in. You'll know exactly what you're getting before we start.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. O'Neill Scaffolding Group holds all required QLD scaffolding licences and carries full public liability insurance. We can provide documentation on request. Safety and compliance are non-negotiable for us.",
  },
  {
    q: "Do you offer labour hire as well as full scaffolding services?",
    a: "Yes. We offer both. If you need a complete scaffolding solution — design, supply, erect, dismantle — we handle it all. If you just need certified scaffolders to join your existing crew, our labour hire service gives you that flexibility.",
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">

          {/* Left — heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-4 h-[3px] w-12 bg-punch" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Questions</p>
            <h2 className="mb-5 text-h2 font-bold text-neutral-darkest">Common Questions</h2>
            <p className="text-neutral-dark/65 leading-relaxed">
              If you don&apos;t see your question answered here, reach out directly and we&apos;ll get back to you fast.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+61730000000"
                className="flex items-center gap-3 rounded-button border border-neutral-light px-4 py-3 text-sm transition-colors hover:border-punch/30 hover:bg-punch/5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-punch/10 text-punch text-xs font-bold">☎</span>
                <div>
                  <p className="font-semibold text-neutral-darkest">(07) 3000 0000</p>
                  <p className="text-xs text-neutral-dark/50">Mon–Fri 7am–5pm</p>
                </div>
              </a>
              <a
                href="mailto:trey@oneillscaffolding.com.au"
                className="flex items-center gap-3 rounded-button border border-neutral-light px-4 py-3 text-sm transition-colors hover:border-punch/30 hover:bg-punch/5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-punch/10 text-punch text-xs font-bold">@</span>
                <div>
                  <p className="font-semibold text-neutral-darkest">Email Us</p>
                  <p className="text-xs text-neutral-dark/50">Response within 1 business day</p>
                </div>
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
