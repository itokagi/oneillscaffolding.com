import { Header62 } from "@/components/about-us/header-62";
import { Layout140 } from "@/components/about-us/layout-140";
import { Stats22 } from "@/components/about-us/stats-22";
import { Team11 } from "@/components/about-us/team-11";
import { Logo4 } from "@/components/about-us/logo-04";
import { Faq7 } from "@/components/about-us/faq-07";

export const metadata = {
  title: "About Us",
  description:
    "Learn about O'Neill Scaffolding Group — Queensland's trusted scaffolding specialists since 2000. Our team, values, and commitment to safety.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Layout140 />
      <Stats22 />
      <Team11 />
      <Logo4 />
      <Faq7 />
    </main>
  );
}
