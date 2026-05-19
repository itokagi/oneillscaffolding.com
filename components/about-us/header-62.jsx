"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Who We Are"
      title="Built on Experience"
      description="25 years of scaffolding excellence across Queensland. We know every project type, every site challenge, every deadline that matters."
      imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
      imageAlt="O'Neill Scaffolding Group team"
      buttons={[
        { label: "Our Capabilities", href: "/capabilities" },
        { label: "Get in Touch", href: "/contact-us", variant: "secondary-alt" },
      ]}
    />
  );
}
