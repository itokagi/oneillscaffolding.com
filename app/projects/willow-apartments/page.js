import { PortfolioHeader3 } from "@/components/willow-apartments/portfolio-header-03";
import { Content3 } from "@/components/willow-apartments/content-03";
import { Content1 } from "@/components/willow-apartments/content-01";
import { Content2 } from "@/components/willow-apartments/content-02";
import { Testimonial3 } from "@/components/willow-apartments/testimonial-03";
import { Cta31 } from "@/components/willow-apartments/cta-31";
import { ProjectGallery } from "@/components/shared/ProjectGallery";

export const metadata = {
  title: "Willow Apartments",
  description:
    "Residential multi-level scaffolding for Willow Apartments — precision coordination and staged installation across the full construction program.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=80", alt: "Willow Apartments scaffold overview" },
  { src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=80", alt: "Multi-level residential scaffold" },
  { src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=80", alt: "Staged scaffold installation" },
  { src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=80", alt: "Residential construction scaffold" },
  { src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=80", alt: "Apartment scaffold completion" },
];

export default function Page() {
  return (
    <main>
      <PortfolioHeader3 />
      <Content3 />
      <Content1 />
      <Content2 />
      <Testimonial3 />
      <ProjectGallery
        title="Project Gallery"
        description="Multi-level residential scaffolding staged across the Willow Apartments construction program"
        images={galleryImages}
      />
      <Cta31 />
    </main>
  );
}
