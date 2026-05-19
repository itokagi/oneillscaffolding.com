"use client";

import { PortfolioHeader } from "@/components/shared/PortfolioHeader";
import { getProject } from "@/lib/projects-data";

const project = getProject("mercedes-benz-showroom");

export function PortfolioHeader3() {
  return <PortfolioHeader project={project} />;
}
