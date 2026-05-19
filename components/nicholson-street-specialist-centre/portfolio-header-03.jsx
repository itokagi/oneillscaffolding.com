"use client";

import { PortfolioHeader } from "@/components/shared/PortfolioHeader";
import { getProject } from "@/lib/projects-data";

const project = getProject("nicholson-street-specialist-centre");

export function PortfolioHeader3() {
  return <PortfolioHeader project={project} />;
}
