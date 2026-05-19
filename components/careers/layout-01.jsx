"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Culture</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">We Work as One Team</h2>
            <p className="text-medium">
              Safety comes first here, no exceptions. We look out for each other, take pride in doing the job right every time, and build teams where your contribution is recognised and your safety is never compromised. If you&apos;re the kind of person who holds the rope and shows up ready, you&apos;ll fit right in.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/careers#open-positions">
                <Button variant="secondary">View Open Roles</Button>
              </a>
              <a href="/contact-us">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-punch" />}
                >
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=80"
              className="w-full rounded-image object-cover"
              alt="OSG team on site"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
