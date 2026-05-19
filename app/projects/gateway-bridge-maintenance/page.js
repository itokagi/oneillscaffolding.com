import { ProjectPage } from "@/components/shared/ProjectPage";
import { getProject } from "@/lib/projects-data";

export const metadata = {
  title: "Gateway Bridge Maintenance — O'Neill Scaffolding Group",
  description:
    "Specialist civil scaffold for bridge maintenance access across a major Brisbane river crossing.",
};

export default function Page() {
  return <ProjectPage project={getProject("gateway-bridge-maintenance")} />;
}
