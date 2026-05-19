"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { LinkedinLogo } from "relume-icons";

const AvatarMichaelONeill = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#f0ece4"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#1a2a3a"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#e8a870"/>
    <circle cx="40" cy="44" r="19" fill="#e8a870"/>
    <ellipse cx="40" cy="28" rx="19" ry="12" fill="#ababab"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#e8a870"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#e8a870"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#e8a870"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M29 40 Q31 39 33 40" fill="none" stroke="#b07030" strokeWidth="0.7" strokeLinecap="round" opacity="0.5"/>
    <path d="M47 40 Q49 39 51 40" fill="none" stroke="#b07030" strokeWidth="0.7" strokeLinecap="round" opacity="0.5"/>
    <path d="M34 51 Q40 55.5 46 51" fill="none" stroke="#a06828" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const AvatarSarahMitchell = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#fceee8"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#902040"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <path d="M21 36 Q18 55 22 70 Q26 74 30 68 Q25 52 27 39" fill="#7b4520"/>
    <path d="M59 36 Q62 55 58 70 Q54 74 50 68 Q55 52 53 39" fill="#7b4520"/>
    <ellipse cx="40" cy="27" rx="19" ry="12" fill="#7b4520"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#f9c89a"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M34 51 Q40 56 46 51" fill="none" stroke="#c07830" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const AvatarJamesHartley = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#ddeef7"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#1a5276"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <ellipse cx="40" cy="28" rx="19" ry="13" fill="#6b3a2a"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#f9c89a"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M34 51 Q40 56 46 51" fill="none" stroke="#c07830" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const AvatarDavidChen = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#fff0e0"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#703010"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <ellipse cx="40" cy="28" rx="19" ry="13" fill="#1c1c1c"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#f9c89a"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#f9c89a"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M34 51 Q40 56 46 51" fill="none" stroke="#c07830" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const LINKEDIN_URL = "https://www.linkedin.com/company/oneill-scaffolding-group/";

export function Team11() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch md:mb-4">People</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">The Crew</h2>
            <p className="text-medium">
              Experience and skill built over decades
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <AvatarMichaelONeill />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Michael O&apos;Neill</h5>
              <h6 className="text-medium">Founder</h6>
            </div>
            <p>
              Started with nothing but a vision and a rope. Built an empire.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <LinkedinLogo className="size-6 text-scheme-text hover:text-punch transition-colors" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <AvatarSarahMitchell />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Sarah Mitchell</h5>
              <h6 className="text-medium">Operations</h6>
            </div>
            <p>
              Keeps the machinery running smooth. No shortcuts, no excuses, just
              results.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <LinkedinLogo className="size-6 text-scheme-text hover:text-punch transition-colors" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <AvatarJamesHartley />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">James Hartley</h5>
              <h6 className="text-medium">Safety Officer</h6>
            </div>
            <p>Every man goes home the same way he came. That&apos;s the code.</p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <LinkedinLogo className="size-6 text-scheme-text hover:text-punch transition-colors" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <div className="mx-auto size-20 min-h-20 min-w-20 overflow-hidden rounded-full">
                <AvatarDavidChen />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">David Chen</h5>
              <h6 className="text-medium">Project Manager</h6>
            </div>
            <p>
              Reads blueprints like others read newspapers. Knows what needs
              doing.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <LinkedinLogo className="size-6 text-scheme-text hover:text-punch transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 md:mt-20 lg:mt-24">
          <div className="mx-auto flex max-w-md flex-col items-center">
            <h4 className="mb-3 text-h4 font-bold md:mb-4">Join the team</h4>
            <p className="text-medium">See what roles we have available</p>
            <div className="mt-6 md:mt-8">
              <a href="/careers"><Button variant="secondary">View Open Roles</Button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
