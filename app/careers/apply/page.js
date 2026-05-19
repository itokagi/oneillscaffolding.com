import { PageHero } from "@/components/shared/PageHero";
import { ApplyForm } from "@/components/careers/apply-form";
import React, { Suspense } from "react";

export const metadata = {
  title: "Apply — O'Neill Scaffolding Group",
  description: "Submit your application to join the OSG team.",
};

function FormFallback() {
  return (
    <div className="rounded-card border border-neutral-lighter bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-6 animate-pulse">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-11 rounded-form bg-neutral-lighter" />
        ))}
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <main className="scheme-1 min-h-screen">
      <PageHero
        subtitle="Careers"
        title="Apply Now"
        description="Fill out the form below and we'll be in touch within a few business days. All applications are reviewed by our team."
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Apply to OSG"
      />

      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
        <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">

          {/* Left — info panel */}
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-punch">Join the Team</p>
            <h2 className="mb-4 text-h2 font-bold">Work With OSG</h2>
            <p className="text-sm leading-relaxed text-neutral-dark">
              We're always looking for experienced, safety-first scaffolders to join our crews across Southeast Queensland.
            </p>

            <div className="mt-8 grid gap-5 border-t border-neutral-lighter pt-8">
              {[
                { label: "Reviewed by real people", sub: "Every application is read by our team — no automated rejections." },
                { label: "Response within 2 business days", sub: "We respect your time and follow up promptly." },
                { label: "All experience levels considered", sub: "From apprentices to leading hands — we hire for attitude as much as skill." },
              ].map(({ label, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-punch-lightest">
                    <div className="size-2 rounded-full bg-punch" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-darkest">{label}</p>
                    <p className="mt-0.5 text-xs text-neutral-dark/60">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-neutral-lighter pt-8">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-neutral">Questions?</p>
              <a
                href="mailto:trey@oneillscaffolding.com.au"
                className="text-sm text-neutral-darkest transition-colors hover:text-punch"
              >
                trey@oneillscaffolding.com.au
              </a>
            </div>
          </div>

          {/* Right — form */}
          <Suspense fallback={<FormFallback />}>
            <ApplyForm />
          </Suspense>

        </div>
      </section>
    </main>
  );
}
