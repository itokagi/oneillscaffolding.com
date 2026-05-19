import { Button } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

export const metadata = {
  title: "Updated WHS Scaffolding Requirements: What Queensland Contractors Need to Know",
  description:
    "SafeWork Queensland's updated scaffolding guidance under the WHS Act 2011 has changed what's required at handover. OSG breaks down the key obligations for site managers and principal contractors.",
};

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative -mt-[84px] scheme-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1920&q=80"
            alt="Scaffolding safety compliance"
            className="size-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #00070f 0%, rgba(0,7,15,0.75) 45%, rgba(0,20,40,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 container px-[5%] max-w-3xl pt-[calc(84px+2rem)] pb-8 md:pt-[calc(84px+3rem)] md:pb-12">
          <div className="mb-4 h-[3px] w-12 bg-punch" />
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Industry News &bull; 5 min read</p>
          <h1 className="mb-4 text-h2 font-bold text-white max-w-2xl">Updated WHS scaffolding requirements: what Queensland contractors need to know</h1>
          <p className="text-white/65 text-medium">SafeWork Queensland has updated its compliance guidance for scaffolding under the WHS Act 2011. If your scaffold is already on-site, the transitional period may already be running against you.</p>
          <div className="mt-8 min-h-[48px]" />
        </div>
      </section>

      {/* Article body */}
      <section className="px-[5%] py-16 md:py-24 scheme-1">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
            <article className="prose-base max-w-none">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
                alt="Safety compliance documentation on a scaffolding site"
                className="mb-8 w-full rounded-image object-cover aspect-video"
                loading="lazy"
              />

              <p className="text-lg text-neutral-dark/80 leading-relaxed mb-6">
                Scaffolding regulation in Queensland has always sat at the intersection of the Work Health and Safety Act 2011 (Qld), the Work Health and Safety Regulation 2011, and the AS/NZS 1576 series of Australian Standards. What&apos;s changed is the specificity of SafeWork Queensland&apos;s enforcement guidance — and the documentation now expected from scaffolding contractors at the point of handover to a principal contractor.
              </p>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">What&apos;s changed under the updated guidance</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                The most material changes relate to suspended scaffolding, birdcage structures, and any scaffold that falls within the &quot;complex scaffold&quot; classification under the WHS Regulation. Three requirements have been tightened:
              </p>
              <ul className="ml-4 list-disc flex flex-col gap-2 text-neutral-dark/75 mb-6">
                <li><strong className="text-neutral-darkest">Engineer sign-off:</strong> Suspended scaffolding and birdcage structures now require a design or sign-off from a competent person with relevant engineering qualifications — a licensed scaffolder alone is not sufficient for these structure types.</li>
                <li><strong className="text-neutral-darkest">Rated load certificates:</strong> Every scaffold handover must include a current rated load certificate specifying the design load class (as per AS/NZS 1576.1) and any specific restrictions on the installed configuration.</li>
                <li><strong className="text-neutral-darkest">Daily inspection records:</strong> Inspection records are now required to be maintained at the site (not just filed in the scaffolding contractor&apos;s office), accessible to the principal contractor at any time.</li>
              </ul>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">What this means for principal contractors</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                As a principal contractor, your duty under the WHS Act 2011 extends to ensuring that the scaffolding subcontractor you engage is operating within the law. If a SafeWork Queensland inspector attends your site and the scaffolding contractor cannot produce current inspection records, a load certificate, or a copy of the engaging scaffolder&apos;s High Risk Work Licence, the improvement notice — and potentially the prohibition notice — lands on you as the PCBU controlling the site.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                This is not hypothetical. SafeWork Queensland&apos;s Construction Compliance Unit has been more active on scaffolding documentation in the past 12 months than at any point in the past decade. If you are currently using a scaffolding contractor who cannot provide a complete handover documentation package, that is a risk sitting on your site right now.
              </p>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">The transitional provisions</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                SafeWork Queensland issued transitional provisions giving existing scaffolding installations 90 days to be brought into full compliance with the updated guidance. That window started on 1 October 2024. If your project commenced before that date and your scaffold was installed under previous documentation standards, you are now in the enforcement period.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                The practical upshot: if you have scaffolding on-site and you are not certain whether your contractor&apos;s documentation meets the current requirements, the time to find out is before the next site inspection, not during one.
              </p>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">How OSG has updated its procedures</h2>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                OSG has been tracking these changes since the proposed guidance was first circulated for industry comment. We updated our handover documentation package in Q3 2024 — ahead of the formal implementation date — to include all three newly required elements: rated load certificates, site-held inspection records, and engineer sign-off on all suspended and birdcage structures.
              </p>
              <p className="text-neutral-dark/75 leading-relaxed mb-6">
                Our safety coordinator conducts weekly formal audits across all active project sites. Every OSG scaffolder holds a current High Risk Work Licence at the classification required for their specific work type, and copies of all licences are included in the client documentation package provided at handover.
              </p>

              <div className="rounded-card border-l-4 border-punch bg-punch/5 p-6 my-8">
                <p className="font-semibold text-neutral-darkest mb-2">Key compliance reference points</p>
                <ul className="text-sm text-neutral-dark/70 flex flex-col gap-1 mt-2">
                  <li>• Governing legislation: WHS Act 2011 (Qld) &amp; WHS Regulation 2011</li>
                  <li>• Scaffolding standards: AS/NZS 1576.1–1576.6, AS 4576</li>
                  <li>• HRWL required under: Work Health and Safety Regulation 2011, Schedule 3</li>
                  <li>• Updated guidance published: 1 October 2024</li>
                  <li>• Transitional period: 90 days from 1 October 2024</li>
                  <li>• Full enforcement from: 1 January 2025</li>
                </ul>
              </div>

              <p className="text-neutral-dark/75 leading-relaxed">
                If you are unsure whether your current scaffolding installation meets the updated requirements, contact our team. For existing OSG clients, we offer a free documentation review and site compliance check. For new enquiries, we are happy to walk through what a compliant handover package looks like before any work commences — call us on (07) 3000 0000 or use our contact form.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="rounded-card border border-neutral-light bg-neutral-lightest p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-punch">Safety &amp; compliance</p>
                <p className="text-sm text-neutral-dark/65 leading-relaxed mb-4">
                  Every OSG scaffold installation comes with a complete handover documentation package meeting current WHS Act and AS/NZS 1576 requirements.
                </p>
                <a href="/safety-compliance">
                  <Button variant="secondary" size="sm" className="w-full">Our safety standards</Button>
                </a>
              </div>
              <div className="rounded-card border border-neutral-light bg-white p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-dark/40">More articles</p>
                <div className="flex flex-col gap-3">
                  <a href="/news/major-commercial-project" className="group flex items-start gap-2">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-punch" />
                    <p className="text-sm text-neutral-dark/65 group-hover:text-neutral-darkest transition-colors">OSG completes major commercial project</p>
                  </a>
                  <a href="/news/labour-hire-expansion" className="group flex items-start gap-2">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-punch" />
                    <p className="text-sm text-neutral-dark/65 group-hover:text-neutral-darkest transition-colors">Expanding our labour hire capabilities</p>
                  </a>
                </div>
              </div>
              <div className="rounded-card border border-punch/20 bg-punch/5 p-6">
                <p className="mb-2 font-semibold text-neutral-darkest text-sm">Unsure about compliance?</p>
                <p className="mb-4 text-xs text-neutral-dark/60">We offer free documentation reviews for existing clients — and walk new clients through what compliant handover looks like.</p>
                <a href="/contact-us">
                  <Button size="sm" className="w-full">Contact us</Button>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to news */}
      <section className="px-[5%] py-8 scheme-1">
        <div className="container">
          <a href="/news">
            <Button variant="link" size="link" className="text-punch">
              ← Back to all news
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
