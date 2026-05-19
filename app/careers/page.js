import { Header62 } from "@/components/careers/header-62";
import { Layout1 } from "@/components/careers/layout-01";
import { Layout237 } from "@/components/careers/layout-237";
import { Layout239 } from "@/components/careers/layout-239";
import { Career1 } from "@/components/careers/career-01";
import { Cta31 } from "@/components/careers/cta-31";

export const metadata = {
  title: "Careers",
  description:
    "Join the O'Neill Scaffolding Group team. We're looking for certified scaffolders, riggers, and site safety professionals across Southeast Queensland.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Layout1 />
      <Layout239 />
      <Layout237 />
      <Career1 />
      <Cta31 />
    </main>
  );
}
