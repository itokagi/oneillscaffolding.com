"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AvatarEmmaRichardson,
  AvatarJamesMitchell,
  AvatarRobertWalsh,
  AvatarSarahChen,
} from "@/components/cartoon-avatars";
import React, { Fragment } from "react";
import { ChevronRight, StarFull } from "relume-icons";

const reviews = [
  {
    quote: "O'Neill Scaffolding Group got the job done right, on time, and without the headaches we expected.",
    name: "James Mitchell",
    role: "Project manager, Constructa",
    Avatar: AvatarJamesMitchell,
    top: "30%",
  },
  {
    quote: "Their crew were professional and the scaffolding design worked perfectly around our build sequence.",
    name: "Sarah Chen",
    role: "Site supervisor, commercial",
    Avatar: AvatarSarahChen,
    top: "32%",
  },
  {
    quote: "Safety was front of mind at every stage. We'd work with them again without hesitation.",
    name: "Robert Walsh",
    role: "Director, infrastructure",
    Avatar: AvatarRobertWalsh,
    top: "34%",
  },
  {
    quote: "Responsive, knowledgeable, and they never left us guessing about the schedule.",
    name: "Emma Richardson",
    role: "Project lead, development",
    Avatar: AvatarEmmaRichardson,
    top: "36%",
  },
];

export function Testimonial32() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">What Clients Say</h2>
            <p className="text-medium">
              Real feedback from those who built with us
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href="/hear-from-our-clients"><Button variant="secondary">Read All Reviews</Button></a>
              <a href="/projects"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>View Projects</Button></a>
            </div>
          </div>
          <div>
            {reviews.map(({ quote, name, role, Avatar, top }) => (
              <Card key={name} className="sticky mb-8 p-8 bg-white" style={{ top }}>
                <Fragment>
                  <div className="mb-6 flex items-center">
                    {[...Array(5)].map((_, i) => <StarFull key={i} className="size-6 text-scheme-text" />)}
                  </div>
                  <h5 className="mb-5 text-medium md:mb-6">{quote}</h5>
                  <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                    <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                      <Avatar />
                    </div>
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p>{role}</p>
                    </div>
                  </div>
                </Fragment>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
