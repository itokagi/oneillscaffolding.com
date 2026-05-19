import { PageHero } from "@/components/shared/PageHero";
import { Blog32 } from "@/components/osg-news-letter/blog-32";
import { Cta2 } from "@/components/osg-news-letter/cta-02";

export const metadata = {
  title: "News & Updates",
  description:
    "The latest news, project updates, and industry insights from O'Neill Scaffolding Group — Queensland's scaffolding specialists.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        subtitle="Updates"
        title="What's New at OSG"
        description="Industry insights, project news, and company updates from O'Neill Scaffolding Group."
        imageSrc="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=80"
        imageAlt="News and updates"
      />
      <Blog32 />
      <Cta2 />
    </main>
  );
}
