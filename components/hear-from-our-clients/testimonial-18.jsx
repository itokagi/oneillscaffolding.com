"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrandName } from "@/components/brand-name";
import {
  AvatarLisaBrennan,
  AvatarThomasGarrett,
  AvatarDavidHartley,
  AvatarVictoriaCross,
} from "@/components/cartoon-avatars";
import React from "react";
import { ChevronRight, StarFull } from "relume-icons";
import { TAG_COLORS } from "@/components/shared/tag-colors";

const AvatarMichaelTorres = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#f5f0e8"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#2c5a1e"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#e8a060"/>
    <circle cx="40" cy="44" r="19" fill="#e8a060"/>
    <ellipse cx="40" cy="28" rx="19" ry="13" fill="#1c1c1c"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#e8a060"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#e8a060"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#e8a060"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M34 51 Q40 56 46 51" fill="none" stroke="#b06020" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const AvatarEmmaRichardson = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#eef4fb"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#2c4a7a"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <path d="M21 36 Q17 56 21 72 Q25 76 29 70 Q24 52 27 39" fill="#8b5e2a"/>
    <path d="M59 36 Q63 56 59 72 Q55 76 51 70 Q56 52 53 39" fill="#8b5e2a"/>
    <ellipse cx="40" cy="27" rx="19" ry="12" fill="#8b5e2a"/>
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

const AvatarDavidKumar = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#fdf0e0"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#4a3010"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#d4885a"/>
    <circle cx="40" cy="44" r="19" fill="#d4885a"/>
    <ellipse cx="40" cy="28" rx="19" ry="13" fill="#1c1c1c"/>
    <ellipse cx="40" cy="33" rx="14" ry="10" fill="#d4885a"/>
    <ellipse cx="21" cy="45" rx="3" ry="3.5" fill="#d4885a"/>
    <ellipse cx="59" cy="45" rx="3" ry="3.5" fill="#d4885a"/>
    <circle cx="33" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="47" cy="44" r="2.5" fill="#1a0a00"/>
    <circle cx="33.8" cy="43" r="0.9" fill="white"/>
    <circle cx="47.8" cy="43" r="0.9" fill="white"/>
    <path d="M34 51 Q40 56 46 51" fill="none" stroke="#8b4a18" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const AvatarSarahBennett = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#fcedee"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#8a2040"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <path d="M21 36 Q17 56 21 72 Q25 76 29 70 Q24 52 27 39" fill="#6b3a2a"/>
    <path d="M59 36 Q63 56 59 72 Q55 76 51 70 Q56 52 53 39" fill="#6b3a2a"/>
    <ellipse cx="40" cy="27" rx="19" ry="12" fill="#6b3a2a"/>
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

const AvatarRobertWalsh = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#ddf0e8"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#1a5e3a"/>
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

const AvatarLisaChen = () => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <rect width="80" height="80" fill="#eef0f8"/>
    <ellipse cx="40" cy="84" rx="26" ry="20" fill="#1e3a70"/>
    <rect x="35" y="57" width="10" height="8" rx="5" fill="#f9c89a"/>
    <circle cx="40" cy="44" r="19" fill="#f9c89a"/>
    <path d="M21 36 Q17 56 21 72 Q25 76 29 70 Q24 52 27 39" fill="#1c1c1c"/>
    <path d="M59 36 Q63 56 59 72 Q55 76 51 70 Q56 52 53 39" fill="#1c1c1c"/>
    <ellipse cx="40" cy="27" rx="19" ry="12" fill="#1c1c1c"/>
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

const Stars = () => (
  <div className="mb-4 flex gap-0.5">
    {[...Array(5)].map((_, i) => <StarFull key={i} className="size-5 text-punch" />)}
  </div>
);

const reviews = [
  {
    quote: "The team handled a complex residential job with precision and care. Every phase was completed on time and the communication throughout was excellent.",
    name: "Michael Torres",
    role: "Project architect",
    company: "Torres Design Group",
    projectType: "Residential",
    projectHref: "/projects/willow-apartments",
    Avatar: AvatarMichaelTorres,
  },
  {
    quote: "They came in, did the work right, and left the site clean. No excuses, no delays. After working with multiple scaffolding contractors in Queensland, OSG stands clearly at the top.",
    name: "Emma Richardson",
    role: "Safety officer",
    company: "Apex Group",
    projectType: "Commercial",
    projectHref: "/projects/okeefe-street-wooloongabba",
    Avatar: AvatarEmmaRichardson,
  },
  {
    quote: "We've worked with many scaffolding companies. O'Neill Scaffolding Group stands apart because they listen and actually deliver what they promise — every single time.",
    name: "David Kumar",
    role: "Senior engineer",
    company: "Infrastructure Plus",
    projectType: "Civil",
    projectHref: "/projects/south-bank-precinct",
    Avatar: AvatarDavidKumar,
  },
  {
    quote: "The crew knew what they were doing from day one. Professional, efficient, and they genuinely cared about getting it done well. We'll use OSG on every future project.",
    name: "Sarah Bennett",
    role: "Site manager",
    company: "Buildcorp",
    projectType: "Commercial",
    projectHref: "/projects/eagle-street-pier",
    Avatar: AvatarSarahBennett,
  },
  {
    quote: "Safety was never compromised, and the work was finished ahead of schedule. That combination is rare in this industry and OSG delivered it without question.",
    name: "Robert Walsh",
    role: "Director",
    company: "Walsh Construction",
    projectType: "Residential",
    projectHref: "/projects/kangaroo-point-townhouses",
    Avatar: AvatarRobertWalsh,
  },
  {
    quote: "They treated our civil project like it was their own. The attention to detail, the site management, and the safety record all exceeded our expectations.",
    name: "Lisa Chen",
    role: "Project lead",
    company: "Urban Developments",
    projectType: "Civil",
    projectHref: "/projects/fortitude-valley-precinct",
    Avatar: AvatarLisaChen,
  },
  {
    quote: "The birdcage scaffold they engineered for our heritage restoration was genuinely impressive. Complex access requirements, tight tolerances around protected fabric — zero incidents and ahead of programme.",
    name: "Thomas Garrett",
    role: "Heritage consultant",
    company: "Garrett Heritage Projects",
    projectType: "Civil",
    projectHref: "/projects/scaffolding-birdcage",
    Avatar: AvatarThomasGarrett,
  },
  {
    quote: "Three residential builds in a row with the same crew. Same quality every time — clean sites, professional scaffolders, no surprises on the invoice. That consistency is rare.",
    name: "Victoria Cross",
    role: "Property developer",
    company: "Cross Residential",
    projectType: "Residential",
    projectHref: "/projects/willow-apartments",
    Avatar: AvatarVictoriaCross,
  },
  {
    quote: "Our facility required infection-control scaffolding protocols the whole way through. OSG understood what that meant without being told twice and managed the build zone with real discipline.",
    name: "David Hartley",
    role: "Facilities director",
    company: "Queensland Health Group",
    projectType: "Commercial",
    projectHref: "/projects/nicholson-street-specialist-centre",
    Avatar: AvatarDavidHartley,
  },
  {
    quote: "We engaged OSG on a bridge maintenance contract — different scale entirely from building sites. Their civil crew arrived organised, knew the site safety requirements cold, and we finished ahead of schedule.",
    name: "Lisa Brennan",
    role: "Contracts manager",
    company: "Brennan Civil Infrastructure",
    projectType: "Civil",
    projectHref: "/projects/gateway-bridge-maintenance",
    Avatar: AvatarLisaBrennan,
  },
];

const typeBadgeColor = TAG_COLORS;

export function Testimonial18() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <div className="mb-4 h-[3px] w-12 bg-punch" />
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">All reviews</p>
          <h2 className="mb-4 text-h2 font-bold">More from Our Clients</h2>
          <p className="max-w-lg text-medium text-neutral-dark/65">
            Every project is different. Here&apos;s what clients across commercial, residential, and civil say about working with OSG.
          </p>
        </div>
        <div className="columns-1 gap-x-8 md:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <Card key={r.name} className="mb-8 inline-block w-full p-6 md:p-8 break-inside-avoid">
              <Stars />
              <p className="mb-5 text-medium leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
              <div className="mb-5 flex w-full flex-col items-start gap-4 md:w-fit md:flex-row md:items-center">
                <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                  <r.Avatar />
                </div>
                <div>
                  <p className="font-semibold text-neutral-darkest">{r.name}</p>
                  <p className="text-sm text-neutral-dark/60">{r.role}</p>
                  <BrandName name={r.company} className="text-xs font-semibold" />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-neutral-light pt-4">
                <span className={`inline-block rounded-button border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${typeBadgeColor[r.projectType]}`}>
                  {r.projectType}
                </span>
                <a href={r.projectHref}>
                  <Button variant="link" size="link" iconRight={<ChevronRight className="text-punch" />} className="text-punch text-sm">
                    View Project
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-8 flex flex-col items-center gap-4 rounded-card border border-neutral-light bg-neutral-lightest p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-bold text-neutral-darkest">Ready to add your project to this list?</p>
            <p className="mt-1 text-sm text-neutral-dark/60">Get a quote in 48 hours. No pressure, no obligation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/request-a-quote"><Button>Request a Quote</Button></a>
            <a href="/projects"><Button variant="secondary">View Our Work</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
