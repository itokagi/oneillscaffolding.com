"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Capabilities"
      title="What We Do Best"
      description="From high-rise commercial scaffolding to precision residential installs — OSG delivers every time."
      imageSrc="https://images.unsplash.com/photo-1571504211935-1c936b327411?auto=format&fit=crop&w=1920&q=80"
      imageAlt="What we do best"
      buttons={[
        { label: "Get a Quote", href: "/request-a-quote" },
        { label: "View Projects", href: "/projects", variant: "secondary-alt" },
      ]}
    />
  );
}