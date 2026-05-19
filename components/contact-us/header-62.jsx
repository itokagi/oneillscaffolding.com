"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Contact"
      title="How Can We Help?"
      description="Whether it's a quote, a question, or just a conversation — reach out to our team and we'll get back to you within one business day."
      imageSrc="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1920&q=80"
      imageAlt="Contact O'Neill Scaffolding Group"
      buttons={[
        { label: "Get a Quote", href: "/request-a-quote" },
      ]}
    />
  );
}