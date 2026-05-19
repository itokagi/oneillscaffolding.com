import { Header62 } from "@/components/capabilities/header-62";
import { Layout357 } from "@/components/capabilities/layout-357";
import { StatsStrip } from "@/components/capabilities/stats-strip";
import { Layout356 } from "@/components/capabilities/layout-356";
import { Testimonial33 } from "@/components/capabilities/testimonial-33";
import { Cta31 } from "@/components/capabilities/cta-31";

export const metadata = {
  title: "Our Capabilities",
  description:
    "Explore O'Neill Scaffolding Group's full range of scaffolding capabilities — commercial, residential, birdcage systems, and labour hire across Southeast Queensland.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Layout357 />
      <StatsStrip />
      <Layout356 />
      <Testimonial33 />
      <Cta31 />
    </main>
  );
}
