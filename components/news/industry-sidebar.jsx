"use client";

import React from "react";

const industryItems = [
  {
    source: "WorkSafe Queensland",
    sourceUrl: "https://www.worksafe.qld.gov.au/news-and-events/alerts/incident-alerts/2025/scaffold-collapse",
    title: "Scaffold collapse injures two members of the public",
    brief: "~70 metres of freestanding modular scaffolding collapsed in strong winds on a QLD construction site. Investigations ongoing.",
    category: "Safety",
  },
  {
    source: "ScaffMag",
    sourceUrl: "https://scaffmag.com/scaffolding-news/global-news/australian-scaffolding-group-enters-administration-with-over-650-jobs-at-risk/",
    title: "Australian scaffolding group enters administration with 650+ jobs at risk",
    brief: "Ten entities tied to Kwikform (Waco International's Australian arm) placed into voluntary administration.",
    category: "Industry",
  },
  {
    source: "ScaffMag",
    sourceUrl: "https://scaffmag.com/events/australias-top-scaffolding-projects-recognised-at-2025-industry-awards/",
    title: "Australia's top scaffolding projects recognised at 2025 industry awards",
    brief: "Ausgroup took out Project of the Year for a craneable scaffold at Hail Creek, Queensland. Record nominations nationally.",
    category: "Industry",
  },
  {
    source: "Action OHS",
    sourceUrl: "https://www.actionohs.com.au/worksafe-victoria-scaffolding-industry-standard/",
    title: "Understanding WorkSafe Victoria's new Scaffolding Industry Standard",
    brief: "New standard covers design, erection, use, dismantling and maintenance — with likely national influence on practice.",
    category: "Compliance",
  },
  {
    source: "ScaffMag",
    sourceUrl: "https://scaffmag.com/scaffolding-news/global-news/pay-gap-pushing-scaffolders-from-new-zealand-to-australia/",
    title: "Pay gap pushing scaffolders from New Zealand to Australia",
    brief: "Wage differential continues to attract NZ-licensed scaffolders to the Australian market, tightening the local labour pool.",
    category: "Industry",
  },
  {
    source: "SafeWork SA",
    sourceUrl: "https://www.safework.sa.gov.au/enforcement/compliance-campaigns-2025-26/construction-campaigns-2025/scaffolds",
    title: "Construction scaffolding targeted in 2025–26 national compliance campaign",
    brief: "Regulators across Australia running coordinated scaffold inspection campaigns through to mid-2026.",
    category: "Compliance",
  },
];

const CAT_STYLE = {
  Safety: "bg-red-50 text-red-700",
  Industry: "bg-blue-50 text-blue-700",
  Compliance: "bg-amber-50 text-amber-700",
};

export function IndustrySidebar() {
  return (
    <aside className="flex flex-col gap-0">
      <div className="mb-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-punch">From the Industry</p>
        <h3 className="text-h5 font-bold text-neutral-darkest">Australian scaffolding news</h3>
        <p className="mt-1 text-xs text-neutral-dark/50">Quick briefs from industry sources. Links open external sites.</p>
      </div>

      <div className="flex flex-col divide-y divide-neutral-lighter">
        {industryItems.map((item, i) => (
          <a
            key={i}
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-4 first:pt-0"
          >
            <div className="mb-1.5 flex items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${CAT_STYLE[item.category] ?? "bg-neutral-100 text-neutral-600"}`}>
                {item.category}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-dark/40">{item.source}</span>
            </div>
            <p className="mb-1 text-sm font-semibold leading-snug text-neutral-darkest group-hover:text-punch transition-colors">
              {item.title}
            </p>
            <p className="text-xs leading-relaxed text-neutral-dark/55">{item.brief}</p>
          </a>
        ))}
      </div>

      <div className="mt-6 border-t border-neutral-lighter pt-4">
        <p className="text-[10px] text-neutral-dark/35 leading-relaxed">
          Industry briefs are curated from public sources. OSG is not affiliated with linked publications.
        </p>
      </div>
    </aside>
  );
}
