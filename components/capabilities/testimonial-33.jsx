"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AvatarDavidHartley,
  AvatarEmmaRichardson,
  AvatarJamesMitchell,
  AvatarLisaBrennan,
  AvatarMichaelTorres,
  AvatarRobertWalsh,
  AvatarSarahChen,
  AvatarThomasGarrett,
  AvatarVictoriaCross,
} from "@/components/cartoon-avatars";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ChevronRight, StarFull } from "relume-icons";

const useAnimation = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 767px)");

  const leftCardsMobile = useTransform(scrollYProgress, [0, 1], ["20vh", "-70vh"]);
  const leftCardsDesktop = useTransform(scrollYProgress, [0, 1], ["-10rem", "5rem"]);
  const rightCardsMobile = useTransform(scrollYProgress, [0, 1], ["20vh", "-70vh"]);
  const rightCardsDesktop = useTransform(scrollYProgress, [0, 1], ["10rem", "-5rem"]);

  const leftCards = isMobile ? leftCardsMobile : leftCardsDesktop;
  const rightCards = isMobile ? rightCardsMobile : rightCardsDesktop;

  return { sectionRef, leftCards, rightCards };
};

const ReviewCard = ({ quote, name, role, AvatarComponent }) => (
  <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
    <div className="mb-5 md:mb-6">
      <div className="mb-3 flex md:mb-4">
        {[...Array(5)].map((_, i) => <StarFull key={i} className="size-6 text-scheme-text" />)}
      </div>
      <h5 className="text-medium">{quote}</h5>
    </div>
    <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
      <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
        <AvatarComponent />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  </Card>
);

export function Testimonial33() {
  const animationState = useAnimation();
  return (
    <section
      ref={animationState.sectionRef}
      className="overflow-hidden px-[5%] py-12 md:py-16 lg:py-20 scheme-1"
    >
      <Card className="container grid min-h-svh auto-cols-fr grid-cols-1 lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div>
            <h2 className="mb-5 text-h1 font-bold md:mb-6">What Clients Say</h2>
            <p className="text-medium">
              Real projects, real results, real satisfaction
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <a href="/hear-from-our-clients"><Button variant="secondary">Read All Reviews</Button></a>
            <a href="/projects"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>View Projects</Button></a>
          </div>
        </div>
        <div className="grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t border-scheme-border px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pr-12 lg:pl-0">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: animationState.leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
              <ReviewCard quote="The work was clean, efficient, and done on schedule" name="Sarah Chen" role="Site director, development" AvatarComponent={AvatarSarahChen} />
              <ReviewCard quote="They delivered exactly what we contracted for, nothing less" name="Michael Torres" role="Operations lead, civil works" AvatarComponent={AvatarMichaelTorres} />
              <ReviewCard quote="They adapted quickly when conditions changed and kept us informed every step of the way." name="Lisa Brennan" role="Director, development" AvatarComponent={AvatarLisaBrennan} />
              <ReviewCard quote="The crew knew their craft and treated our site with respect and attention to detail." name="Thomas Garrett" role="Operations manager, construction" AvatarComponent={AvatarThomasGarrett} />
            </div>
          </motion.div>
          <motion.div
            className="grid size-full auto-cols-fr grid-cols-1 gap-4"
            style={{ y: animationState.rightCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <ReviewCard quote="They understood what we needed before we finished explaining it" name="James Mitchell" role="Project manager, construction" AvatarComponent={AvatarJamesMitchell} />
              <ReviewCard quote="The team handled our tight timeline without sacrificing quality or safety standards." name="Emma Richardson" role="Project lead, residential" AvatarComponent={AvatarEmmaRichardson} />
              <ReviewCard quote="They showed up on time, stayed until the work was finished, and never cut corners on safety." name="David Hartley" role="Site supervisor, commercial" AvatarComponent={AvatarDavidHartley} />
              <ReviewCard quote="They solved problems we didn't even know we had before they became real problems." name="Victoria Cross" role="Architect, commercial projects" AvatarComponent={AvatarVictoriaCross} />
              <ReviewCard quote="Professional from start to finish, and their pricing was fair for the work delivered." name="Robert Walsh" role="Manager, civil infrastructure" AvatarComponent={AvatarRobertWalsh} />
            </div>
          </motion.div>
        </div>
      </Card>
    </section>
  );
}
