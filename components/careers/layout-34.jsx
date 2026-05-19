"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout34() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/contract.svg"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-h5 font-bold md:mb-4">
                    Become a Partner
                  </h1>
                  <p>
                    We work with approved subcontractors who meet our safety and
                    quality standards. It's a solid arrangement for both sides.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-punch" />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/contract.svg"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-h5 font-bold md:mb-4">
                    Meet the Requirements
                  </h1>
                  <p>
                    Insurance, certifications, and a track record of safe work
                    are what we need to see from our subcontractor partners.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-punch" />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/work.svg"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-h5 font-bold md:mb-4">
                    How the Process Works
                  </h1>
                  <p>
                    Submit your details, we'll review your credentials, and if
                    it's a fit, we'll bring you into our network for regular
                    work.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-punch" />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
