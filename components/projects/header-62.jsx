"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Our Work"
      title="Projects That Speak for Themselves"
      description="Browse our portfolio — from high-rise apartments to specialist medical centres across Queensland."
      imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      imageAlt="Projects that speak for themselves"
      buttons={[
        { label: "Get a Quote", href: "/request-a-quote" },
      ]}
    />
  );
}