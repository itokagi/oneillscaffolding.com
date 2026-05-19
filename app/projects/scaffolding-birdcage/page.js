import { Header62 } from "@/components/scaffolding-birdcage/header-62";
import { Layout22 } from "@/components/scaffolding-birdcage/layout-22";
import { Layout19 } from "@/components/scaffolding-birdcage/layout-19";
import { Layout192 } from "@/components/scaffolding-birdcage/layout-192";
import { Testimonial3 } from "@/components/scaffolding-birdcage/testimonial-03";
import { Cta31 } from "@/components/scaffolding-birdcage/cta-31";
import { ProjectGallery } from "@/components/shared/ProjectGallery";

export const metadata = {
  title: "Birdcage Scaffolding | OSG",
  description:
    "OSG delivers engineered birdcage scaffold systems for full-coverage overhead access on civil, industrial, and large-scale interior projects across Southeast Queensland.",
};

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80", alt: "Birdcage scaffold system overview" },
  { src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80", alt: "Full-coverage overhead scaffold" },
  { src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80", alt: "Engineered birdcage structure" },
  { src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80", alt: "Interior access scaffold system" },
  { src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80", alt: "Birdcage scaffold installation" },
];

export default function Page() {
  return (
    <main>
      {/* Hero: what it is and when it's used */}
      <Header62 />
      {/* Education: birdcage explained for a technical audience */}
      <Layout22 />
      {/* Challenge: the real operational complexity of birdcage erection */}
      <Layout19 />
      {/* Process: how OSG engineers and delivers the system */}
      <Layout192 />
      {/* Social proof: client testimonials specific to birdcage projects */}
      <Testimonial3 />
      <ProjectGallery
        title="Project Gallery"
        description="Engineered birdcage scaffold systems delivering full-coverage overhead access"
        images={galleryImages}
      />
      {/* CTA */}
      <Cta31 />
    </main>
  );
}
