"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Client Stories"
      title="What Our Clients Say"
      description="Real results from builders, developers, and project managers across Queensland who trust OSG."
      imageSrc="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80"
      imageAlt="What our clients say"
      buttons={[
        { label: "Work With Us", href: "/contact-us" },
        { label: "Our Projects", href: "/projects", variant: "secondary-alt" },
      ]}
    />
  );
}