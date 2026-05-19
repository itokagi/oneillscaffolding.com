import { Header26 } from "@/components/home/header-26";
import { Logo3 } from "@/components/home/logo-03";
import { Stats7 } from "@/components/home/stats-07";
import { Layout239 } from "@/components/home/layout-239";
import { Layout349 } from "@/components/home/layout-349";
import { Testimonial22 } from "@/components/home/testimonial-22";
import { Cta31 } from "@/components/home/cta-31";

export const metadata = {
  title: {
    absolute: "O'Neill Scaffolding Group | Queensland Scaffolding Specialists",
  },
  description:
    "Queensland's trusted scaffolding partner. Commercial, residential, and civil scaffolding solutions built right, every time. Serving Brisbane and Southeast Queensland.",
};

export default function Page() {
  return (
    <main>
      <Header26 />
      <Stats7 />
      <Logo3 />
      <Layout239 />
      <Layout349 />
      <Testimonial22 />
      <Cta31 />
    </main>
  );
}
