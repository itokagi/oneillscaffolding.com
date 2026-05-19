import { Button } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

export const metadata = {
  title: "Case Study: 14-Floor Brisbane CBD Commercial Project Completed 3 Weeks Early",
  description:
    "A complex inner-city retail and office development with a live neighbouring tenancy, a suspended facade platform, and a 14-week programme. OSG finished in 11 weeks, zero incidents.",
};

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative -mt-[84px] scheme-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1920&q=80"
            alt="Commercial scaffolding project"
            className="size-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #00070f 0%, rgba(0,7,15,0.75) 45%, rgba(0,20,40,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 container px-[5%] max-w-3xl pt-[calc(84px+2rem)] pb-8 md:pt-[calc(84px+3rem)] md:pb-12">
            <div className="mb-4 h-[3px] w-12 bg-punch" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Project Update &bull; 5 min read</p>
            <h1 className="mb-4 text-h2 font-bold text-white max-w-2xl">Case study: 14-floor Brisbane CBD commercial project completed 3 weeks ahead of programme</h1>
            <p className="text-white/65 text-medium">A narrow laneway. A live neighbouring tenancy. Overhead electrical infrastructure. Here&apos;s how we sequenced a complex inner-city scaffold and delivered it without a single recordable incident.</p>
            <div className="mt-8 min-h-[48px]" />
          </div>
      </section>

      {/* Article body */}
      <section className="px-[5%] py-16 md:py-24 scheme-1">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
            <article className="prose-base max-w-none">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
                alt="14-floor commercial scaffolding site, Brisbane CBD"
                className="mb-8 w-full rounded-image object-cover aspect-video"
                loading="lazy"
              />

              <p className="text-lg text-neutral-dark/80 leading-relaxed mb-6">
                Not every commercial scaffolding job is difficult. This one was. A mixed-use retail and office development in Brisbane&apos;s inner city, 14 floors, active ground-level foot traffic on two sides, a live food and beverage tenancy operating throughout the construction programme, and a western elevation facing a laneway too narrow to accommodate any conventional ground-based scaffold support.
              </p>

              <p className="text-neutral-dark/75 leading-relaxed mb-6">
                The original programme allocated 14 weeks for full scaffold installation and progressive dismantling as each floor was completed. OSG finished in 11. This is how it happened.
              </p>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">The brief</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                The principal contractor engaged OSG during the design development phase — before the structural package was finalised. That early involvement was deliberate. The project manager had worked with us on a previous build and understood that getting the scaffolding contractor in the room during design coordination avoids the expensive problem-solving that happens when access solutions are retrofitted around a construction programme that&apos;s already locked in.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                OSG attended three design coordination meetings before a scaffold sequence was finalised. The key decisions made at that stage — including the choice to use a tube and clamp system on the upper floors rather than a proprietary modular system — directly contributed to the programme saving that came later.
              </p>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">The challenge: the western elevation</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                The western elevation was the most technically demanding element of the project. The laneway running alongside the building is narrow enough that any ground-supported scaffold structure would have required road closure permits and significantly affected access to the neighbouring property — which was not acceptable given the live tenancy situation.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                The solution was a suspended working platform tied back to the building structure, designed to a class SL250 load rating to accommodate the cladding crew&apos;s equipment and materials. The platform design was reviewed and signed off by a structural engineer, and the tie-back anchor points were integrated into the structural slab design — another benefit of early contractor involvement.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                The suspended platform allowed the facade contractor to work the full western elevation from a single installed position, progressively lowered as each level was completed. It removed what would otherwise have been the most time-consuming and re-mobilisation-heavy element of the scaffold programme.
              </p>

              <div className="grid grid-cols-2 gap-4 my-8">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                  alt="Ground level hoarding and gantry"
                  className="rounded-image object-cover aspect-video w-full"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80"
                  alt="Suspended platform western elevation"
                  className="rounded-image object-cover aspect-video w-full"
                  loading="lazy"
                />
              </div>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">Ground level: hoarding, gantry, and pedestrian management</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                With two street frontages and a live tenancy operating on the ground floor, the hoarding and gantry system required careful design. The structure had to provide full overhead protection for pedestrians, maintain emergency egress from the tenancy at all times, and allow for regular deliveries to the active business operating below.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                We installed a 4.2-metre clear height covered walkway on the primary street frontage, with a separate vehicle access gate timed to restrict delivery windows to off-peak pedestrian traffic periods. The system was signed off by a traffic engineer and approved by Brisbane City Council as part of the road corridor approval process.
              </p>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">Delivered 3 weeks ahead of programme</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                The 11-week completion against a 14-week programme came down to sequencing and coordination, not speed. Because the scaffold sequence was designed around the construction programme from the outset, each stage of scaffold installation was ready when the relevant trade needed access — without the delays that occur when scaffold erection is re-sequenced on the fly to catch up with a moving programme.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                Our site foreman held a standing 7am coordination meeting with the site manager each morning for the first six weeks of the project. That daily alignment meant conflicts between scaffold work and following trades were resolved before they became delays, not after.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-6">
                The three-week saving on a 14-week scaffold programme is a material outcome for a principal contractor managing milestone commitments to an owner. It allowed the finishing trades to mobilise earlier than planned and gave the project manager a buffer heading into the project&apos;s most intensive delivery phase.
              </p>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">Safety record</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                The project completed with zero recordable incidents across all OSG personnel and equipment over the full 11-week duration. Given the site complexity — overhead electrical infrastructure on the eastern boundary, active pedestrian zones below, and the additional risk profile of the suspended platform — this outcome required consistent discipline, not luck.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-6">
                A SWMS review was conducted before each day&apos;s work commenced. Our safety coordinator attended site for formal audits on a weekly basis. Every OSG worker on the project held a current High Risk Work Licence for their classification, and no variation to the scaffold system was made without a documented change assessment.
              </p>

              <div className="rounded-card border-l-4 border-punch bg-punch/5 p-6 my-8">
                <p className="font-semibold text-neutral-darkest mb-2">Project at a glance</p>
                <ul className="text-sm text-neutral-dark/70 flex flex-col gap-1">
                  <li>• Location: Brisbane CBD, inner city</li>
                  <li>• Project type: Commercial — mixed-use retail &amp; office</li>
                  <li>• Floors: 14</li>
                  <li>• Programme: 14 weeks allocated, 11 weeks delivered</li>
                  <li>• Key elements: tube &amp; clamp upper floors, suspended facade platform, hoarding &amp; gantry</li>
                  <li>• Recordable incidents: 0</li>
                  <li>• Engineer-certified: suspended platform and anchor system</li>
                </ul>
              </div>

              <p className="text-neutral-dark/75 leading-relaxed">
                If you have a commercial project where early scaffolding involvement could change the programme outcome, we&apos;d welcome the conversation. The time to engage us is during design development, not when you&apos;re ready to break ground. Call us on (07) 3000 0000 or request a quote through our website.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="rounded-card border border-neutral-light bg-neutral-lightest p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-punch">Commercial scaffolding</p>
                <p className="text-sm text-neutral-dark/65 leading-relaxed mb-4">
                  From retail fit-outs to high-rise construction, OSG brings early-engagement expertise and programme discipline to commercial projects across Southeast Queensland.
                </p>
                <a href="/capabilities/commercial-scaffolding">
                  <Button variant="secondary" size="sm" className="w-full">Learn more</Button>
                </a>
              </div>
              <div className="rounded-card border border-neutral-light bg-white p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-dark/40">More articles</p>
                <div className="flex flex-col gap-3">
                  <a href="/osg-news-letter/new-safety-standards" className="group flex items-start gap-2">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-punch" />
                    <p className="text-sm text-neutral-dark/65 group-hover:text-neutral-darkest transition-colors">Updated WHS scaffolding requirements</p>
                  </a>
                  <a href="/osg-news-letter/labour-hire-expansion" className="group flex items-start gap-2">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-punch" />
                    <p className="text-sm text-neutral-dark/65 group-hover:text-neutral-darkest transition-colors">Expanding our labour hire division</p>
                  </a>
                </div>
              </div>
              <div className="rounded-card border border-punch/20 bg-punch/5 p-6">
                <p className="mb-2 font-semibold text-neutral-darkest text-sm">Planning a commercial project?</p>
                <p className="mb-4 text-xs text-neutral-dark/60">Early engagement is the most cost-effective approach. Get a quote within 48 hours.</p>
                <a href="/request-a-quote">
                  <Button size="sm" className="w-full">Request a quote</Button>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to news */}
      <section className="px-[5%] py-8 scheme-1">
        <div className="container">
          <a href="/osg-news-letter">
            <Button variant="link" size="link" className="text-punch">
              ← Back to all news
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
