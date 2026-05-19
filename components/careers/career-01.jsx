"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

function ApplyButton({ role }) {
  return (
    <a href={`/careers/apply?role=${encodeURIComponent(role)}`}>
      <Button variant="secondary" size="sm">Apply now</Button>
    </a>
  );
}

function JobListing({ title, description }) {
  return (
    <div className="py-6 md:py-8">
      <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
        <div className="mb-5 sm:mb-0">
          <h3 className="text-h5 font-bold">{title}</h3>
          <p className="text-medium">Brisbane</p>
        </div>
        <div>
          <ApplyButton role={title} />
        </div>
      </div>
      <p className="max-w-lg">{description}</p>
    </div>
  );
}

export function Career1() {
  return (
    <section id="open-positions" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">Openings</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Open positions</h2>
          <p className="text-medium">
            We&apos;re looking for people ready to work. Check what we have available now.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-1" className="first:border-t-0">
            <AccordionTrigger className="text-h4 md:py-5">Field operations</AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <JobListing
                title="Lead scaffolder"
                description="Oversee scaffold assembly and safety compliance on active job sites. You'll manage teams and ensure every installation meets our standards."
              />
              <JobListing
                title="Scaffolder"
                description="Build and dismantle scaffolding systems on commercial and residential projects. Experience with tube and clamp systems required."
              />
              <JobListing
                title="Rigger"
                description="Rig and secure loads with precision. You'll work on complex projects requiring attention to detail and safety awareness."
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="first:border-t-0">
            <AccordionTrigger className="text-h4 md:py-5">Labour hire</AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <JobListing
                title="General labourer"
                description="Support scaffold teams on site. You'll handle materials, maintain work areas, and assist with installations under supervision."
              />
              <JobListing
                title="Site assistant"
                description="Help coordinate on-site operations and support our field teams. Ideal for someone looking to learn the scaffolding business from the ground up."
              />
              <JobListing
                title="Warehouse operator"
                description="Manage inventory and prepare materials for job sites. You'll ensure equipment is maintained and ready when our teams need it."
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="first:border-t-0">
            <AccordionTrigger className="text-h4 md:py-5">Administration</AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-8">
              <JobListing
                title="Safety coordinator"
                description="Develop and implement safety programs across all projects. You'll audit sites, train teams, and keep us compliant with regulations."
              />
              <JobListing
                title="Office administrator"
                description="Keep our office running smoothly. You'll handle scheduling, communications, and support for our field operations team."
              />
              <JobListing
                title="Estimator"
                description="Calculate project costs and prepare quotes for clients. Experience with scaffolding systems and project planning is essential."
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
