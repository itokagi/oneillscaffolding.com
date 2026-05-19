import { PortfolioHeader3 } from "@/components/nicholson-street-specialist-centre/portfolio-header-03";
import { Content1 } from "@/components/nicholson-street-specialist-centre/content-01";
import { Layout16 } from "@/components/nicholson-street-specialist-centre/layout-16";
import { Layout192 } from "@/components/nicholson-street-specialist-centre/layout-192";
import { Layout16_1 } from "@/components/nicholson-street-specialist-centre/layout-16_1";
import { Testimonial3 } from "@/components/nicholson-street-specialist-centre/testimonial-03";
import { Cta31 } from "@/components/nicholson-street-specialist-centre/cta-31";
import { ProjectGallery } from "@/components/shared/ProjectGallery";

export const metadata = {
  title: "Nicholson Street Specialist Centre",
  description:
    "Complex medical facility scaffolding — strict access control and precision engineering throughout the build at Nicholson Street Specialist Centre, Brisbane.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1920&q=80", alt: "Specialist centre exterior scaffold" },
  { src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1920&q=80", alt: "Medical facility access scaffold" },
  { src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1920&q=80", alt: "Controlled access scaffold system" },
  { src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1920&q=80", alt: "Precision scaffold installation" },
  { src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1920&q=80", alt: "Scaffold completion overview" },
];

export default function Page() {
  return (
    <main>
      <PortfolioHeader3 />
      <Content1 />
      <Layout16 />
      <Layout192 />
      <Testimonial3 />
      <Layout16_1 />
      <ProjectGallery
        title="Project Gallery"
        description="Scaffolding solutions throughout the Nicholson Street Specialist Centre build"
        images={galleryImages}
      />
      <Cta31 />
    </main>
  );
}
