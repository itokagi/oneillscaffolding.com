"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Safety & Compliance"
      title="Safety Is Not Negotiable"
      description="Our systems meet and exceed Australian standards. We do not cut corners — on any project, at any height."
      imageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
      imageAlt="Safety is not negotiable"
      buttons={[
        { label: "Get a Quote", href: "/request-a-quote" },
        { label: "Contact Us", href: "/contact-us", variant: "secondary-alt" },
      ]}
    />
  );
}