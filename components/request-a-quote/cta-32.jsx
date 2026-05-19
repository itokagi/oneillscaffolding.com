"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const TrustBadge = ({ icon, label, sub }) => (
  <div className="flex items-start gap-3">
    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-punch-lightest">
      <img src={icon} className="size-5 brightness-0 opacity-60" alt={label} />
    </div>
    <div>
      <p className="text-sm font-semibold text-neutral-darkest">{label}</p>
      <p className="text-xs text-neutral-dark/55">{sub}</p>
    </div>
  </div>
);

const Step = ({ num, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-punch text-punch text-sm font-bold">
      {num}
    </div>
    <div>
      <p className="font-semibold text-neutral-darkest text-sm">{title}</p>
      <p className="text-xs text-neutral-dark/55 mt-0.5">{desc}</p>
    </div>
  </div>
);

const selectClass =
  "h-11 w-full rounded-form border border-neutral-darkest/15 bg-transparent px-3 text-sm text-neutral-darkest placeholder:text-neutral-darkest/60 hover:bg-neutral-darkest/5 focus:border-punch focus:outline-none focus:ring-1 focus:ring-punch transition-all duration-200";

export function Cta32() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fd = new FormData(e.target);
    const body = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("send failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <div className="mb-4 h-[3px] w-12 bg-punch" />
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Get a Quote</p>
          <h1 className="mb-4 text-h1 font-bold text-neutral-darkest">Tell Us About Your Project</h1>
          <p className="max-w-xl text-medium text-neutral-dark/70">
            We review every submission personally and follow up within 48 hours with a tailored quote.
            No generic pricing — every project gets the attention it deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">

          {/* LEFT — Form */}
          <div className="rounded-card border border-neutral-lighter bg-white p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 rounded-card border border-punch/25 bg-punch/6 p-10">
                <div className="flex size-12 items-center justify-center rounded-full bg-punch-lightest">
                  <img
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/check_circle.svg"
                    className="size-6 brightness-0 opacity-60"
                    alt=""
                  />
                </div>
                <h3 className="text-h4 font-bold text-neutral-darkest">We&apos;ve got your submission</h3>
                <p className="text-neutral-dark/70">
                  One of our team will review your project details and get back to you within 48 hours.
                  If it&apos;s urgent, call us directly on{" "}
                  <a href="tel:+61730000000" className="font-semibold text-punch hover:underline">
                    (07) 3000 0000
                  </a>.
                </p>
                <a href="/">
                  <Button variant="secondary" className="mt-2">Back to Home</Button>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-0">

                {/* Contact details */}
                <div className="pb-6">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral">Your Details</p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-neutral-darkest">
                        Full name <span className="text-punch">*</span>
                      </label>
                      <Input id="name" name="name" type="text" placeholder="Jane Doe" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-sm font-semibold text-neutral-darkest">Company / Organisation</label>
                      <Input id="company" name="company" type="text" placeholder="BuildersCO" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-neutral-darkest">
                        Phone number <span className="text-punch">*</span>
                      </label>
                      <Input id="phone" name="phone" type="tel" placeholder="04XX XXX XXX" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-neutral-darkest">
                        Email address <span className="text-punch">*</span>
                      </label>
                      <Input id="email" name="email" type="email" placeholder="janedoe@builderco.com.au" required />
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div className="border-t border-neutral-lighter py-6">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral">Project Details</p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="project-type" className="text-sm font-semibold text-neutral-darkest">
                        Project type <span className="text-punch">*</span>
                      </label>
                      <select id="project-type" name="projectType" required className={selectClass}>
                        <option value="">Select project type</option>
                        <option>Commercial scaffolding</option>
                        <option>Residential scaffolding</option>
                        <option>Civil / infrastructure</option>
                        <option>Industrial scaffolding</option>
                        <option>Birdcage / suspended access</option>
                        <option>Labour hire</option>
                        <option>Other / not sure</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="location" className="text-sm font-semibold text-neutral-darkest">
                        Project location <span className="text-punch">*</span>
                      </label>
                      <select id="location" name="location" required className={selectClass}>
                        <option value="">Select region</option>
                        <option>Brisbane CBD</option>
                        <option>Brisbane South</option>
                        <option>Brisbane North</option>
                        <option>Gold Coast</option>
                        <option>Sunshine Coast</option>
                        <option>Ipswich / Logan</option>
                        <option>Toowoomba</option>
                        <option>Other Queensland</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="timeline" className="text-sm font-semibold text-neutral-darkest">When do you need scaffolding?</label>
                      <select id="timeline" name="timeline" className={selectClass}>
                        <option value="">Select timeline</option>
                        <option>As soon as possible</option>
                        <option>Within 2 weeks</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6+ months away</option>
                        <option>Just planning — no set date</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="scale" className="text-sm font-semibold text-neutral-darkest">Approximate project scale</label>
                      <select id="scale" name="scale" className={selectClass}>
                        <option value="">Select scale</option>
                        <option>Small — single dwelling or minor works</option>
                        <option>Medium — multi-level residential or small commercial</option>
                        <option>Large — major commercial or civil</option>
                        <option>Major — infrastructure or long-term hire</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-neutral-lighter py-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-sm font-semibold text-neutral-darkest">
                      Describe your project <span className="text-punch">*</span>
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Tell us what you need — structure type, access requirements, site constraints, or anything else that helps us understand the job."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                </div>

                {/* Source */}
                <div className="border-t border-neutral-lighter py-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="source" className="text-sm font-semibold text-neutral-darkest">How did you hear about us?</label>
                    <select id="source" name="source" className={selectClass}>
                      <option value="">Select option</option>
                      <option>Google search</option>
                      <option>Word of mouth / referral</option>
                      <option>Social media</option>
                      <option>Previous client</option>
                      <option>Industry contact</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="border-t border-neutral-lighter pt-6">
                  {error && (
                    <p className="mb-4 rounded-form border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                  )}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button type="submit" size="lg" className="h-13 px-10 text-base font-semibold" disabled={loading}>
                      {loading ? "Sending…" : "Submit Project Brief"}
                    </Button>
                    <p className="text-xs text-neutral-dark/40">
                      We&apos;ll follow up within 48 hours. No spam, ever.
                    </p>
                  </div>
                  <p className="mt-4 text-tiny text-neutral-dark/40">
                    By submitting this form you agree to our{" "}
                    <a href="/terms-of-services" className="underline hover:text-neutral-dark">Terms of Service</a> and{" "}
                    <a href="/privacy-policy" className="underline hover:text-neutral-dark">Privacy Policy</a>.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* RIGHT — Trust + Process */}
          <div className="flex flex-col gap-6">

            {/* Trust signals */}
            <div className="rounded-card border border-neutral-lighter bg-white p-6 shadow-sm">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-punch">Why OSG</p>
              <div className="flex flex-col gap-5">
                <TrustBadge
                  icon="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/verified.svg"
                  label="Fully licensed & insured"
                  sub="All QLD regulatory requirements met"
                />
                <TrustBadge
                  icon="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/schedule.svg"
                  label="48hr quote turnaround"
                  sub="Tailored to your specific project"
                />
                <TrustBadge
                  icon="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/workspace_premium.svg"
                  label="25+ years in Queensland"
                  sub="Established 2000, built on results"
                />
                <TrustBadge
                  icon="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/safety_check.svg"
                  label="100% safety compliance"
                  sub="Zero serious incidents on record"
                />
                <TrustBadge
                  icon="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/handshake.svg"
                  label="500+ projects delivered"
                  sub="Commercial, residential & civil"
                />
              </div>
            </div>

            {/* What happens next */}
            <div className="rounded-card border border-neutral-lighter bg-white p-6 shadow-sm">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-punch">What Happens Next</p>
              <div className="flex flex-col gap-5">
                <Step num="1" title="We Review Your Brief" desc="A senior team member reads your submission and assesses the scope." />
                <Step num="2" title="We Call to Confirm Details" desc="We may reach out to clarify anything before preparing your quote." />
                <Step num="3" title="You Receive a Tailored Quote" desc="Clear, itemised, and delivered within 48 hours of submission." />
              </div>
            </div>

            {/* Contact alternatives */}
            <div className="rounded-card border border-neutral-lighter bg-white p-6 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral">Prefer to Talk First?</p>
              <a
                href="tel:+61730000000"
                className="group flex items-center gap-3 rounded-form border border-neutral-lighter p-3 transition-colors hover:border-punch/30 hover:bg-punch-lightest"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/call.svg"
                  className="size-5 brightness-0 opacity-40 group-hover:opacity-60"
                  alt=""
                />
                <div>
                  <p className="text-sm font-semibold text-neutral-darkest">(07) 3000 0000</p>
                  <p className="text-xs text-neutral-dark/50">Mon–Fri 7am–5pm</p>
                </div>
              </a>
              <a
                href="mailto:trey@oneillscaffolding.com.au"
                className="group mt-2 flex items-center gap-3 rounded-form border border-neutral-lighter p-3 transition-colors hover:border-punch/30 hover:bg-punch-lightest"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/mail.svg"
                  className="size-5 brightness-0 opacity-40 group-hover:opacity-60"
                  alt=""
                />
                <div>
                  <p className="text-sm font-semibold text-neutral-darkest">trey@oneillscaffolding.com.au</p>
                  <p className="text-xs text-neutral-dark/50">We respond within 1 business day</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
