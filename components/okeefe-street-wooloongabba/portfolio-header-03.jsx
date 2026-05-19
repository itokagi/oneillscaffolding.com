"use client";

import { PortfolioHeader } from "@/components/shared/PortfolioHeader";
import { getProject } from "@/lib/projects-data";

const project = getProject("okeefe-street-wooloongabba");

export function PortfolioHeader3() {
  return <PortfolioHeader project={project} />;
}
