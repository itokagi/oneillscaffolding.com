import { Header62 } from "@/components/safety-and-compliance/header-62";
import { Layout138 } from "@/components/safety-and-compliance/layout-138";
import { Layout485 } from "@/components/safety-and-compliance/layout-485";
import { Layout140 } from "@/components/safety-and-compliance/layout-140";
import { Layout140_1 } from "@/components/safety-and-compliance/layout-140_1";
import { Layout140_2 } from "@/components/safety-and-compliance/layout-140_2";
import { Layout140_3 } from "@/components/safety-and-compliance/layout-140_3";
import { Stats21 } from "@/components/safety-and-compliance/stats-21";

export const metadata = {
  title: "Safety & Compliance",
  description:
    "O'Neill Scaffolding Group's commitment to work health and safety — licensed, insured, and compliant with Queensland WHS legislation and Australian Standards.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Layout138 />
      <Layout485 />
      <Layout140 />
      <Layout140_1 />
      <Layout140_2 />
      <Layout140_3 />
      <Stats21 />
    </main>
  );
}
