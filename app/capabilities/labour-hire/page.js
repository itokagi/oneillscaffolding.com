import { Header62 } from "@/components/labour-hire/header-62";
import { Layout1 } from "@/components/labour-hire/layout-01";
import { Layout237 } from "@/components/labour-hire/layout-237";
import { Testimonial33 } from "@/components/labour-hire/testimonial-33";
import { Cta31 } from "@/components/labour-hire/cta-31";

export const metadata = {
  title: "Labour Hire",
  description:
    "Certified scaffolders and riggers available for short and long-term placement across Southeast Queensland. OSG Labour Hire — licensed, insured, and ready.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Layout1 />
      <Layout237 />
      <Testimonial33 />
      <Cta31 />
    </main>
  );
}
