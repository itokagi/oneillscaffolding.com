"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Birdcage Scaffolding"
      title="Full-Coverage Overhead Access, Done Right"
      description="When you need uninterrupted working deck across an entire ceiling or overhead structure — no gaps, no workarounds — birdcage scaffolding is the engineered solution."
      imageSrc="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=80"
      imageAlt="Birdcage scaffold providing full overhead access on a large civil project"
      buttons={[
        { label: "Get a Quote", href: "/request-a-quote" },
        { label: "Contact Us", href: "/contact-us", variant: "secondary-alt" },
      ]}
    />
  );
}
