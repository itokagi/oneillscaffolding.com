import { Header62 } from "@/components/contact-us/header-62";
import { Contact30 } from "@/components/contact-us/contact-30";
import { Contact6 } from "@/components/contact-us/contact-06";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with O'Neill Scaffolding Group. We respond to all enquiries within one business day — Brisbane and Southeast Queensland.",
};

export default function Page() {
  return (
    <main>
      <Header62 />
      <Contact6 />
      <Contact30 />
    </main>
  );
}
