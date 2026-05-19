"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AvatarDavidChen,
  AvatarDavidHartley,
  AvatarEmmaRichardson,
  AvatarJamesHartley,
  AvatarLisaBrennan,
  AvatarRobertWalsh,
  AvatarSarahBennett,
  AvatarSarahMitchell,
  AvatarThomasGarrett,
  AvatarVictoriaCross,
} from "@/components/cartoon-avatars";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ChevronRight, StarFull } from "relume-icons";

const useAnimation = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
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
    <section ref={animationState.sectionRef} className="overflow-hidden px-[5%] py-12 md:py-16 lg:py-20 scheme-1">
      <Card className="container grid min-h-svh auto-cols-fr grid-cols-1 lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div>
            <h2 className="mb-5 text-h1 font-bold md:mb-6">What Clients Say</h2>
            <p className="text-medium">Real experiences from homeowners and builders</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <a href="/hear-from-our-clients"><Button variant="secondary">Read All Reviews</Button></a>
            <a href="/request-a-quote"><Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />}>Request a Quote</Button></a>
          </div>
        </div>
        <div className="grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t border-scheme-border px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pr-12 lg:pl-0">
          <motion.div className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center" style={{ y: animationState.leftCards }}>
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
              <ReviewCard quote='"Professional crew, solid equipment, and they understood exactly what our project needed."' name="Sarah Mitchell" role="Builder, Gold Coast" AvatarComponent={AvatarSarahMitchell} />
              <ReviewCard quote='"The attention to detail and safety protocols gave us complete confidence in the work."' name="James Kowalski" role="Contractor, Brisbane" AvatarComponent={AvatarJamesHartley} />
              <ReviewCard quote='"Their flexibility with rental periods saved us money and kept the project on track."' name="Emma Sutton" role="Homeowner, Sunshine Coast" AvatarComponent={AvatarEmmaRichardson} />
              <ReviewCard quote='"Professional from start to finish, and they made the whole process straightforward."' name="Thomas Reed" role="Builder, Brisbane" AvatarComponent={AvatarThomasGarrett} />
            </div>
          </motion.div>
          <motion.div className="grid size-full auto-cols-fr grid-cols-1 gap-4" style={{ y: animationState.rightCards }}>
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <ReviewCard quote='"They showed up on time, set everything up right, and we never worried about safety once."' name="Michael Chen" role="Homeowner, Brisbane" AvatarComponent={AvatarDavidChen} />
              <ReviewCard quote={`"They handled our tight backyard like they'd done it a hundred times before."`} name="Lisa Brennan" role="Builder, Gold Coast" AvatarComponent={AvatarLisaBrennan} />
              <ReviewCard quote='"The crew knew what they were doing from day one, and that made all the difference."' name="David Harris" role="Homeowner, Brisbane" AvatarComponent={AvatarDavidHartley} />
              <ReviewCard quote='"We trusted them completely, and they delivered exactly what they promised."' name="Victoria Cross" role="Homeowner, Brisbane" AvatarComponent={AvatarVictoriaCross} />
              <ReviewCard quote='"Fast setup, no hassles, and the safety standards were exactly what we needed."' name="Robert Walsh" role="Contractor, Brisbane" AvatarComponent={AvatarRobertWalsh} />
            </div>
          </motion.div>
        </div>
      </Card>
    </section>
  );
}
