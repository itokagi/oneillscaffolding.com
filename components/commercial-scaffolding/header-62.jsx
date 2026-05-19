"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Commercial Scaffolding"
      title="For Projects That Demand Precision"
      description="Large-scale commercial scaffolding engineered for your site, your schedule, and your budget."
      imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
      imageAlt="For projects that demand precision"
      buttons={[
        { label: "Get a Quote", href: "/request-a-quote" },
        { label: "Contact Us", href: "/contact-us", variant: "secondary-alt" },
      ]}
    />
  );
}