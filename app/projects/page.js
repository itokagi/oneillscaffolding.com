import { Header62 } from "@/components/projects/header-62";
import { Logo3 } from "@/components/projects/logo-03";
import { Portfolio17 } from "@/components/projects/portfolio-17";
import { Testimonial3 } from "@/components/projects/testimonial-03";

export const metadata = {
  title: "Our Projects",
  description:
    "Browse O'Neill Scaffolding Group's project portfolio — commercial, residential, and specialist scaffolding across Brisbane and Southeast Queensland.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Logo3 />
      <Portfolio17 />
      <Testimonial3 />
    </main>
  );
}
