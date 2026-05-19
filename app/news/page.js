import { PageHero } from "@/components/shared/PageHero";
import { BlogList } from "@/components/news/blog-list";
import { Cta2 } from "@/components/osg-news-letter/cta-02";
import { FeaturedStrip } from "@/components/news/featured-strip";
import { IndustrySidebar } from "@/components/news/industry-sidebar";

export const metadata = {
  title: "News — O'Neill Scaffolding Group",
  description:
    "The latest news, project updates, and industry insights from O'Neill Scaffolding Group — Queensland's scaffolding specialists.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        subtitle="News"
        title="What's New at OSG"
        description="Industry insights, project news, and company updates from O'Neill Scaffolding Group."
        imageSrc="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=80"
        imageAlt="News and updates"
      />

      <FeaturedStrip />

      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-x-16 gap-y-16 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-punch">OSG Newsletters</p>
              <h2 className="mb-10 text-h3 font-bold text-neutral-darkest">Latest from OSG</h2>
              <BlogList />
            </div>
            <IndustrySidebar />
          </div>
        </div>
      </section>

      <Cta2 />
    </main>
  );
}
