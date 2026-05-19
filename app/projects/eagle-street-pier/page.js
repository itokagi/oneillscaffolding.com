import { ProjectPage } from "@/components/shared/ProjectPage";
import { getProject } from "@/lib/projects-data";

export const metadata = {
  title: "Eagle Street Pier Precinct — O'Neill Scaffolding Group",
  description:
    "Multi-level facade and podium scaffolding for a major riverside commercial precinct renovation in Brisbane's CBD.",
};

export default function Page() {
  return <ProjectPage project={getProject("eagle-street-pier")} />;
}
