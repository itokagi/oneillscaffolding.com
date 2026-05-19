"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Residential Scaffolding"
      title="Safe Access for Your Home Build"
      description="Home renovations, extensions, and new builds — residential scaffolding tailored to your block and budget."
      imageSrc="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1920&q=80"
      imageAlt="Safe access for your home build"
      buttons={[
        { label: "Get a Quote", href: "/request-a-quote" },
        { label: "Contact Us", href: "/contact-us", variant: "secondary-alt" },
      ]}
    />
  );
}