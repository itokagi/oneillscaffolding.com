import { Header62 } from "@/components/hear-from-our-clients/header-62";
import { Testimonial14 } from "@/components/hear-from-our-clients/testimonial-14";
import { Testimonial18 } from "@/components/hear-from-our-clients/testimonial-18";
import { Cta31 } from "@/components/hear-from-our-clients/cta-31";

export const metadata = {
  title: "Client Stories",
  description:
    "Hear from the builders, developers, and contractors who trust O'Neill Scaffolding Group across Brisbane and Southeast Queensland.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Testimonial14 />
      <Testimonial18 />
      <Cta31 />
    </main>
  );
}
