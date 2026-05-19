import { ProjectPage } from "@/components/shared/ProjectPage";
import { getProject } from "@/lib/projects-data";

export const metadata = {
  title: "South Bank Precinct Works — O'Neill Scaffolding Group",
  description:
    "Major public precinct scaffold supporting structural maintenance and upgrade works across South Bank's civic infrastructure.",
};

export default function Page() {
  return <ProjectPage project={getProject("south-bank-precinct")} />;
}
