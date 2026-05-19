import { PortfolioHeader3 } from "@/components/okeefe-street-wooloongabba/portfolio-header-03";
import { Content3 } from "@/components/okeefe-street-wooloongabba/content-03";
import { Layout145 } from "@/components/okeefe-street-wooloongabba/layout-145";
import { Layout239 } from "@/components/okeefe-street-wooloongabba/layout-239";
import { Testimonial3 } from "@/components/okeefe-street-wooloongabba/testimonial-03";
import { Cta31 } from "@/components/okeefe-street-wooloongabba/cta-31";
import { ProjectGallery } from "@/components/shared/ProjectGallery";

export const metadata = {
  title: "O'Keefe Street Wooloongabba",
  description:
    "Large-scale commercial scaffolding across multiple levels at O'Keefe Street, Wooloongabba — coordinated installation under tight site constraints.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80", alt: "O'Keefe Street multi-level scaffold" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80", alt: "Commercial scaffold installation" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80", alt: "Site scaffold coordination" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80", alt: "Scaffold structure detail" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80", alt: "Project completion view" },
];

export default function Page() {
  return (
    <main>
      <PortfolioHeader3 />
      <Layout145 />
      <Content3 />
      <Layout239 />
      <Testimonial3 />
      <ProjectGallery
        title="Project Gallery"
        description="Large-scale scaffolding across multiple levels at O'Keefe Street, Wooloongabba"
        images={galleryImages}
      />
      <Cta31 />
    </main>
  );
}
