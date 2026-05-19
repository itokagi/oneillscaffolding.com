"use client";

import { Button } from "@/components/ui/button";

export function PageHero({
  subtitle,
  title,
  description,
  imageSrc,
  imageAlt = "",
  buttons = [],
  variant = "standard",
}) {
  const isLegal = variant === "legal";

  return (
    <section className="relative -mt-[84px] scheme-4">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`size-full object-cover${isLegal ? " opacity-25" : ""}`}
        />
        {isLegal ? (
          <div className="absolute inset-0 bg-midnight-darkest/75" />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #00070f 0%, rgba(0,7,15,0.75) 45%, rgba(0,20,40,0.2) 100%)",
            }}
          />
        )}
      </div>
      <div className="relative z-10 container px-[5%] max-w-3xl pt-[calc(84px+2rem)] pb-8 md:pt-[calc(84px+3rem)] md:pb-12">
        <div className="mb-4 h-[3px] w-12 bg-punch" />
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-punch">
          {subtitle}
        </p>
        <h1 className="mb-5 text-h1 font-bold text-white md:mb-6">{title}</h1>
        <p className="max-w-xl text-white/75 text-medium">{description}</p>
        {!isLegal && (
          <div className="mt-8 flex flex-wrap items-center gap-4 min-h-[48px]">
            {buttons.map((btn, i) => (
              <a key={i} href={btn.href}>
                <Button
                  variant={btn.variant || "default"}
                  className={
                    btn.variant?.includes("secondary")
                      ? "h-12 px-7 text-white border-white/30"
                      : "h-12 px-7"
                  }
                >
                  {btn.label}
                </Button>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
