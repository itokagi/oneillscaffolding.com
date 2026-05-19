import { Header62 } from "@/components/residential-scaffolding/header-62";
import { Layout1 } from "@/components/residential-scaffolding/layout-01";
import { Layout486 } from "@/components/residential-scaffolding/layout-486";
import { Testimonial33 } from "@/components/residential-scaffolding/testimonial-33";
import { Faq7 } from "@/components/residential-scaffolding/faq-07";
import { Cta31 } from "@/components/residential-scaffolding/cta-31";

export const metadata = {
  title: "Residential Scaffolding",
  description:
    "Safe, reliable residential scaffolding for homes across Queensland. Multi-level access, staged installation, and full compliance for every build.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Layout1 />
      <Layout486 />
      <Testimonial33 />
      <Faq7 />
      <Cta31 />
    </main>
  );
}
