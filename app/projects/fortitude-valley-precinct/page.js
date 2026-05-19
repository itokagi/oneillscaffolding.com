import { ProjectPage } from "@/components/shared/ProjectPage";
import { getProject } from "@/lib/projects-data";

export const metadata = {
  title: "Fortitude Valley Precinct — O'Neill Scaffolding Group",
  description:
    "Urban renewal scaffold supporting structural upgrades and facade works across a mixed-use inner-city precinct.",
};

export default function Page() {
  return <ProjectPage project={getProject("fortitude-valley-precinct")} />;
}
