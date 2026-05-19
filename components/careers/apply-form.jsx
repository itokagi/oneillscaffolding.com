"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";

const experienceOptions = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
];

const hrwlGroups = [
  {
    group: "Scaffolding",
    items: [
      { value: "sb", label: "SB — Scaffold Basic" },
      { value: "si", label: "SI — Scaffold Intermediate" },
      { value: "sa", label: "SA — Scaffold Advanced" },
    ],
  },
  {
    group: "Rigging",
    items: [
      { value: "rb", label: "RB — Rigging Basic" },
      { value: "ri", label: "RI — Rigging Intermediate" },
      { value: "ra", label: "RA — Rigging Advanced" },
    ],
  },
  {
    group: "Dogging",
    items: [
      { value: "dg", label: "DG — Dogging" },
    ],
  },
  {
    group: "Crane Operation",
    items: [
      { value: "co", label: "CO — Overhead Crane" },
      { value: "cb", label: "CB — Bridge and Gantry Crane" },
      { value: "c2", label: "C2 — Non-slewing Mobile Crane" },
      { value: "c6", label: "C6 — Slewing Mobile Crane (up to 20t)" },
      { value: "c4", label: "C4 — Slewing Mobile Crane (20t–60t)" },
      { value: "c0", label: "C0 — Slewing Mobile Crane (60t–100t)" },
      { value: "cs", label: "CS — Slewing Mobile Crane (100t+)" },
      { value: "cv", label: "CV — Vehicle Loading Crane" },
      { value: "ct", label: "CT — Tower Crane" },
      { value: "cp", label: "CP — Portal Boom Crane" },
      { value: "cm", label: "CM — Mast Climbing Work Platform" },
      { value: "cw", label: "CW — Materials Hoist" },
    ],
  },
  {
    group: "Elevating Work Platform",
    items: [
      { value: "wp", label: "WP — Boom-type EWP" },
    ],
  },
  {
    group: "Forklift",
    items: [
      { value: "lf", label: "LF — Forklift Truck" },
      { value: "lo", label: "LO — Order Picking Forklift" },
    ],
  },
  {
    group: "Explosive Powered Tools",
    items: [
      { value: "ep", label: "EP — Explosive Powered Tools" },
    ],
  },
];

function Field({ label, children, hint, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-neutral-darkest">
        {label}{required && <span className="ml-1 text-punch">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-neutral-dark/50">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-form border border-neutral-darkest/15 bg-transparent px-3 py-2 text-sm text-neutral-darkest placeholder:text-neutral-darkest/60 hover:bg-neutral-darkest/5 focus:border-punch focus:outline-none focus:ring-1 focus:ring-punch transition-all duration-200 min-h-11";

export function ApplyForm() {
  const params = useSearchParams();
  const roleFromUrl = params.get("role") ?? "";

  const fileRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: roleFromUrl,
    experience: "",
    hrwl: [],
    coverLetter: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const toggleHrwl = (value) =>
    setForm((f) => ({
      ...f,
      hrwl: f.hrwl.includes(value)
        ? f.hrwl.filter((v) => v !== value)
        : [...f.hrwl, value],
    }));

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("phone", form.phone);
    fd.append("role", form.role);
    fd.append("experience", form.experience);
    fd.append("coverLetter", form.coverLetter);
    form.hrwl.forEach((v) => fd.append("hrwl", v));
    const cvFile = fileRef.current?.files?.[0];
    if (cvFile) fd.append("cv", cvFile);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      if (!res.ok) throw new Error("send failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-neutral-lighter bg-white p-8 shadow-sm text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-punch-lightest">
          <svg className="size-7 text-punch" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-h4 font-bold text-neutral-darkest">Application received</h3>
        <p className="mb-6 text-sm text-neutral-dark/60">
          Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We&apos;ll review your application and be in touch within a few business days.
        </p>
        <a href="/careers">
          <Button variant="secondary" size="sm">Back to careers</Button>
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-card border border-neutral-lighter bg-white p-6 shadow-sm md:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-0">

        {/* Personal details */}
        <div className="pb-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral">Your Details</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" required>
              <input
                type="text"
                required
                placeholder="Jane Smith"
                className={inputCls}
                value={form.name}
                onChange={set("name")}
              />
            </Field>
            <Field label="Email address" required>
              <input
                type="email"
                required
                placeholder="jane@example.com"
                className={inputCls}
                value={form.email}
                onChange={set("email")}
              />
            </Field>
            <Field label="Phone number">
              <input
                type="tel"
                placeholder="04XX XXX XXX"
                className={inputCls}
                value={form.phone}
                onChange={set("phone")}
              />
            </Field>
            <Field label="Position applying for" required>
              <input
                type="text"
                required
                placeholder="e.g. Lead scaffolder"
                className={inputCls}
                value={form.role}
                onChange={set("role")}
              />
            </Field>
          </div>
        </div>

        {/* Experience */}
        <div className="border-t border-neutral-lighter py-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral">Experience</p>
          <Field label="Years of scaffolding experience" required>
            <select
              required
              className={inputCls + " cursor-pointer"}
              value={form.experience}
              onChange={set("experience")}
            >
              <option value="" disabled>Select range</option>
              {experienceOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* HRWL */}
        <div className="border-t border-neutral-lighter py-6">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-neutral">HRWL</p>
          <p className="mb-5 text-xs text-neutral-dark/50">Select all licences you currently hold</p>
          <div className="max-h-72 overflow-y-auto rounded-form border border-neutral-lighter bg-neutral-lightest p-4">
            <div className="flex flex-col gap-4">
              {hrwlGroups.map(({ group, items }) => (
                <div key={group}>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neutral">{group}</p>
                  <div className="flex flex-col gap-2">
                    {items.map(({ value, label }) => (
                      <div key={value} className="flex items-center gap-2.5">
                        <Checkbox
                          id={`hrwl-${value}`}
                          checked={form.hrwl.includes(value)}
                          onCheckedChange={() => toggleHrwl(value)}
                        />
                        <label
                          htmlFor={`hrwl-${value}`}
                          className="cursor-pointer text-sm text-neutral-darkest"
                        >
                          {label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {form.hrwl.length > 0 && (
            <p className="mt-2 text-xs text-neutral-dark/50">
              {form.hrwl.length} licence{form.hrwl.length > 1 ? "s" : ""} selected
            </p>
          )}
        </div>

        {/* Cover letter */}
        <div className="border-t border-neutral-lighter py-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral">Cover Letter</p>
          <Field
            label="Why do you want to work with OSG?"
            hint="Tell us what you bring to the team. 200–500 words is ideal."
          >
            <textarea
              rows={6}
              placeholder="I'm applying for this role because..."
              className={inputCls + " resize-y"}
              value={form.coverLetter}
              onChange={set("coverLetter")}
            />
          </Field>
        </div>

        {/* CV upload */}
        <div className="border-t border-neutral-lighter py-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral">Resume / CV</p>
          <Field label="Upload your resume" hint="PDF, Word, or image. Max 10 MB.">
            <div
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-form border-2 border-dashed border-neutral-lighter px-6 py-8 transition-colors hover:border-punch/40 hover:bg-punch-lightest"
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                setFileName(file ? file.name : null);
              }}
            >
              <svg className="size-8 text-neutral/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0-3 3m3-3 3 3M3 17a4 4 0 004 4h10a4 4 0 004-4V9a4 4 0 00-1.172-2.828l-3-3A4 4 0 0013.828 2H7a4 4 0 00-4 4v11z" />
              </svg>
              {fileName ? (
                <p className="text-sm font-semibold text-punch">{fileName}</p>
              ) : (
                <>
                  <p className="text-sm font-semibold text-neutral-darkest">Click to upload or drag and drop</p>
                  <p className="text-xs text-neutral-dark/40">PDF · DOCX · JPG · PNG</p>
                </>
              )}
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </Field>
        </div>

        {/* Submit */}
        <div className="border-t border-neutral-lighter pt-6">
          {error && (
            <p className="mb-4 rounded-form border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending…" : "Submit Application"}
          </Button>
          <p className="mt-4 text-xs text-neutral-dark/40">
            By submitting you agree to our{" "}
            <a href="/terms-of-services" className="underline hover:text-neutral-dark">Terms of Service</a> and{" "}
            <a href="/privacy-policy" className="underline hover:text-neutral-dark">Privacy Policy</a>.
          </p>
        </div>

      </form>
    </div>
  );
}
