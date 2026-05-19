"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Careers"
      title="Build Something Real"
      description="We hire people who take their craft seriously. Come work on the sites that shape Queensland."
      imageSrc="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?auto=format&fit=crop&w=1920&q=80"
      imageAlt="Build something real"
      buttons={[
        { label: "Apply Now", href: "/careers/apply" },
        { label: "About OSG", href: "/about-us", variant: "secondary-alt" },
      ]}
    />
  );
}