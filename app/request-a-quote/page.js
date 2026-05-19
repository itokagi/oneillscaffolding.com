import { PageHero } from "@/components/shared/PageHero";
import { Cta32 } from "@/components/request-a-quote/cta-32";
import { Faq7 } from "@/components/request-a-quote/faq-07";
import { Cta57 } from "@/components/request-a-quote/cta-57";

export const metadata = {
  title: "Request a Quote",
  description:
    "Get a tailored scaffolding quote from O'Neill Scaffolding Group within 48 hours. Commercial, residential, and specialist projects across Southeast Queensland.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        subtitle="Get Started"
        title="Request a Quote"
        description="Tell us about your project and we'll have a tailored quote back to you within 48 hours."
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Request a quote"
      />
      <Cta32 />
      <Faq7 />
      <Cta57 />
    </main>
  );
}
