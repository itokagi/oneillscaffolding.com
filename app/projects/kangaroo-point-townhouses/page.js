import { ProjectPage } from "@/components/shared/ProjectPage";
import { getProject } from "@/lib/projects-data";

export const metadata = {
  title: "Kangaroo Point Townhouses — O'Neill Scaffolding Group",
  description:
    "Full perimeter residential scaffold across a 12-dwelling townhouse development on a narrow cliff-side site.",
};

export default function Page() {
  return <ProjectPage project={getProject("kangaroo-point-townhouses")} />;
}
