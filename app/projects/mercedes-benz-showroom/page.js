import { PortfolioHeader3 } from "@/components/mercedes-benz-showroom/portfolio-header-03";
import { Content3 } from "@/components/mercedes-benz-showroom/content-03";
import { Stats13 } from "@/components/mercedes-benz-showroom/stats-13";
import { Testimonial3 } from "@/components/mercedes-benz-showroom/testimonial-03";
import { Cta31 } from "@/components/mercedes-benz-showroom/cta-31";
import { ProjectGallery } from "@/components/shared/ProjectGallery";

export const metadata = {
  title: "Mercedes-Benz Showroom",
  description:
    "Precision scaffolding for a premium Mercedes-Benz automotive showroom fit-out in Brisbane — multi-level access solutions delivered on program.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80", alt: "Showroom scaffolding overview" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80", alt: "Interior access scaffold" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80", alt: "Multi-level scaffold system" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80", alt: "Precision fit-out scaffolding" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80", alt: "Completed scaffold installation" },
];

export default function Page() {
  return (
    <main>
      <PortfolioHeader3 />
      <Stats13 />
      <Content3 />
      <Testimonial3 />
      <ProjectGallery
        title="Project Gallery"
        description="Scaffolding system at work throughout the Mercedes-Benz showroom construction"
        images={galleryImages}
      />
      <Cta31 />
    </main>
  );
}
