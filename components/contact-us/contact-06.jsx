"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { Call, LocationOn, Mail } from "relume-icons";

export function Contact6() {
  const [inquiryType, setInquiryType] = useState("");
  const [projectType, setProjectType] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fd = new FormData(e.target);
    const body = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
      inquiryType,
      projectType,
    };

    try {
      const res = await fetch("/api/contact", {
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
    <section id="inquire" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">

        {/* Left — contact info */}
        <div className="lg:sticky lg:top-24">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-punch">Inquire</p>
          <h2 className="mb-4 text-h2 font-bold">Send Your Details</h2>
          <p className="text-sm leading-relaxed text-neutral-dark">
            Tell us about your scaffolding project. We respond to all enquiries within one business day.
          </p>

          <div className="mt-8 grid gap-5 border-t border-neutral-lighter pt-8">
            <a href="mailto:trey@oneillscaffolding.com.au" className="group flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-punch-lightest">
                <Mail className="size-5 text-punch" />
              </div>
              <div>
                <p className="mb-0.5 text-xs font-medium uppercase tracking-widest text-neutral">Email</p>
                <p className="text-sm text-neutral-darkest transition-colors group-hover:text-punch">
                  trey@oneillscaffolding.com.au
                </p>
              </div>
            </a>

            <a href="tel:+61730000000" className="group flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-punch-lightest">
                <Call className="size-5 text-punch" />
              </div>
              <div>
                <p className="mb-0.5 text-xs font-medium uppercase tracking-widest text-neutral">Phone</p>
                <p className="text-sm text-neutral-darkest transition-colors group-hover:text-punch">
                  +61 7 3000 0000
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-punch-lightest">
                <LocationOn className="size-5 text-punch" />
              </div>
              <div>
                <p className="mb-0.5 text-xs font-medium uppercase tracking-widest text-neutral">Location</p>
                <p className="text-sm text-neutral-darkest">
                  O&apos;Neill Scaffolding Group<br />Southeast Queensland
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form card */}
        <div className="rounded-card border border-neutral-lighter bg-white p-6 shadow-sm md:p-8">

          {submitted ? (
            <div className="flex flex-col items-start gap-4 rounded-card border border-punch/25 bg-punch/6 p-10">
              <div className="flex size-12 items-center justify-center rounded-full bg-punch-lightest">
                <svg className="size-6 text-punch" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-h4 font-bold text-neutral-darkest">Message sent</h3>
              <p className="text-sm text-neutral-dark/70">We&apos;ll be in touch within one business day.</p>
              <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">

              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="firstName" className="text-sm font-semibold">First name</Label>
                  <Input type="text" id="firstName" name="firstName" placeholder="Jane" required />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="lastName" className="text-sm font-semibold">Last name</Label>
                  <Input type="text" id="lastName" name="lastName" placeholder="Smith" required />
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                  <Input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="phone" className="text-sm font-semibold">Phone number</Label>
                  <Input type="text" id="phone" name="phone" placeholder="04XX XXX XXX" />
                </div>
              </div>

              {/* Project details */}
              <div className="border-t border-neutral-lighter pt-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral">Project Details</p>

                <div className="grid gap-1.5 mb-5">
                  <Label className="text-sm font-semibold">Inquiry type</Label>
                  <Select value={inquiryType} onValueChange={setInquiryType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Quote request">Quote request</SelectItem>
                      <SelectItem value="Labour hire enquiry">Labour hire enquiry</SelectItem>
                      <SelectItem value="Safety & compliance question">Safety &amp; compliance question</SelectItem>
                      <SelectItem value="General enquiry">General enquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-3">
                  <Label className="text-sm font-semibold">Project type</Label>
                  <RadioGroup
                    value={projectType}
                    onValueChange={setProjectType}
                    className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-form border border-neutral-lighter bg-neutral-lightest p-4"
                  >
                    {[
                      { value: "Commercial work", id: "r_commercial", label: "Commercial work" },
                      { value: "Residential work", id: "r_residential", label: "Residential work" },
                      { value: "Civil project", id: "r_civil", label: "Civil project" },
                      { value: "Labour hire", id: "r_labour", label: "Labour hire" },
                      { value: "General inquiry", id: "r_general", label: "General inquiry" },
                      { value: "Other", id: "r_other", label: "Other" },
                    ].map(({ value, id, label }) => (
                      <div key={value} className="flex items-center gap-2">
                        <RadioGroupItem value={value} id={id} />
                        <Label htmlFor={id} className="cursor-pointer text-sm">{label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Message */}
              <div className="border-t border-neutral-lighter pt-5">
                <div className="grid gap-1.5">
                  <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project — site location, scope, timeline, and any access requirements"
                    className="min-h-[9rem] overflow-auto"
                  />
                </div>
              </div>

              {/* Terms + submit */}
              <div className="border-t border-neutral-lighter pt-5">
                <div className="mb-5 flex items-start gap-3 rounded-form border border-neutral-lighter bg-neutral-lightest px-4 py-3">
                  <Checkbox id="terms" required className="mt-0.5 shrink-0" />
                  <Label htmlFor="terms" className="cursor-pointer text-sm leading-relaxed text-neutral-dark">
                    I accept the{" "}
                    <a href="/terms-of-service" className="text-punch underline-offset-2 hover:underline">terms of service</a>
                    {" "}and{" "}
                    <a href="/privacy-policy" className="text-punch underline-offset-2 hover:underline">privacy policy</a>
                  </Label>
                </div>

                {error && (
                  <p className="mb-4 rounded-form border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
                )}

                <Button className="w-full" size="default" disabled={loading}>
                  {loading ? "Sending…" : "Send Message"}
                </Button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
