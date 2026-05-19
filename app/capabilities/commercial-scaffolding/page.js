import { Header62 } from "@/components/commercial-scaffolding/header-62";
import { Layout19 } from "@/components/commercial-scaffolding/layout-19";
import { Layout239 } from "@/components/commercial-scaffolding/layout-239";
import { Testimonial32 } from "@/components/commercial-scaffolding/testimonial-32";
import { Cta31 } from "@/components/commercial-scaffolding/cta-31";

export const metadata = {
  title: "Commercial Scaffolding",
  description:
    "Professional commercial scaffolding solutions for Brisbane and Southeast Queensland. From retail fit-outs to high-rise construction — on time, on budget.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Layout19 />
      <Layout239 />
      <Testimonial32 />
      <Cta31 />
    </main>
  );
}
