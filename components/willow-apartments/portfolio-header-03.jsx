"use client";

import { PortfolioHeader } from "@/components/shared/PortfolioHeader";
import { getProject } from "@/lib/projects-data";

const project = getProject("willow-apartments");

export function PortfolioHeader3() {
  return <PortfolioHeader project={project} />;
}
