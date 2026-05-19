"use client";

import { PageHero } from "@/components/shared/PageHero";

export function Header62() {
  return (
    <PageHero
      subtitle="Labour Hire"
      title="Experienced Crew, Ready to Work"
      description="Skilled scaffolders for short and long-term placements. Qualified, insured, reliable."
      imageSrc="https://images.unsplash.com/photo-1571504211935-1c936b327411?auto=format&fit=crop&w=1920&q=80"
      imageAlt="Experienced crew, ready to work"
      buttons={[
        { label: "Hire Crew", href: "/contact-us" },
        { label: "Learn More", href: "/capabilities", variant: "secondary-alt" },
      ]}
    />
  );
}
