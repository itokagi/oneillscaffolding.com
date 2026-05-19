import { Button } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

export const metadata = {
  title: "Expanding Our Labour Hire Division",
  description:
    "OSG has expanded its labour hire division, adding HRWL-certified scaffolders and riggers available for placement across Southeast Queensland.",
};

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative -mt-[84px] scheme-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Labour hire expansion"
            className="size-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #00070f 0%, rgba(0,7,15,0.75) 45%, rgba(0,20,40,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 container px-[5%] max-w-3xl pt-[calc(84px+2rem)] pb-8 md:pt-[calc(84px+3rem)] md:pb-12">
          <div className="mb-4 h-[3px] w-12 bg-punch" />
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-punch">Company News &bull; 4 min read</p>
          <h1 className="mb-4 text-h2 font-bold text-white max-w-2xl">Why we&apos;re expanding our labour hire division — and what it means for contractors</h1>
          <p className="text-white/65 text-medium">Demand for certified scaffold labour in Southeast Queensland is outpacing supply. OSG is responding by growing its own bench of HRWL-certified scaffolders and riggers available for placement.</p>
          <div className="mt-8 min-h-[48px]" />
        </div>
      </section>

      {/* Article body */}
      <section className="px-[5%] py-16 md:py-24 scheme-1">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
            <article className="prose-base max-w-none">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
                alt="OSG labour hire team on site"
                className="mb-8 w-full rounded-image object-cover aspect-video"
                loading="lazy"
              />

              <p className="text-lg text-neutral-dark/80 leading-relaxed mb-6">
                The shortage of licensed scaffold labour in Queensland is not new, but it has become significantly more acute over the past two years. Training throughput from registered RTOs has not kept pace with the construction pipeline, and qualified scaffolders — particularly lead scaffolders holding a current High Risk Work Licence (HRWL) — are increasingly hard to source at short notice.
              </p>

              <h2 className="text-h4 font-bold text-neutral-darkest mb-4 mt-8">Who we can supply</h2>
              <ul className="ml-4 list-disc flex flex-col gap-2 text-neutral-dark/75 mb-6">
                <li><strong className="text-neutral-darkest">Lead scaffolders</strong> — holding a current Basic Scaffolding or Intermediate/Advanced HRWL</li>
                <li><strong className="text-neutral-darkest">General scaffolders</strong> — competent in tube and clamp, modular frame, and system scaffold assembly</li>
                <li><strong className="text-neutral-darkest">Riggers</strong> — for complex lifting, suspension work, and load management</li>
                <li><strong className="text-neutral-darkest">Scaffold labourers</strong> — to support erection and dismantling teams on large-volume sites</li>
              </ul>
              <p className="text-neutral-dark/75 leading-relaxed mb-4">
                All placements come with copies of current licences, relevant tickets, and evidence of OSG&apos;s public liability insurance. Payroll and superannuation are handled by OSG — you direct the work, we handle the employment obligations.
              </p>

              <div className="rounded-card border-l-4 border-punch bg-punch/5 p-6 my-8">
                <p className="font-semibold text-neutral-darkest mb-2">Labour hire at a glance</p>
                <ul className="text-sm text-neutral-dark/70 flex flex-col gap-1">
                  <li>• All personnel hold current HRWL certification for their classification</li>
                  <li>• Minimum engagement: 1 day (48hr notice preferred for specialised roles)</li>
                  <li>• Available across Southeast Queensland — Sunshine Coast to Gold Coast</li>
                  <li>• Insurance and payroll obligations handled by OSG</li>
                  <li>• Forward availability holds available for regular clients</li>
                  <li>• Compliance documentation provided before first placement</li>
                </ul>
              </div>

              <p className="text-neutral-dark/75 leading-relaxed">
                If you have upcoming projects where labour availability is a concern, contact us now rather than when the start date is two weeks out. The earlier we have the conversation, the better we can plan around your programme. Call us on (07) 3000 0000 or submit your requirements through our quote form and we&apos;ll respond within 24 hours.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="rounded-card border border-neutral-light bg-neutral-lightest p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-punch">Labour hire</p>
                <p className="text-sm text-neutral-dark/65 leading-relaxed mb-4">
                  HRWL-certified scaffolders and riggers for short and long-term placement. Available across Southeast Queensland with 48-hour response on most requests.
                </p>
                <a href="/capabilities/labour-hire">
                  <Button variant="secondary" size="sm" className="w-full">View capability</Button>
                </a>
              </div>
              <div className="rounded-card border border-neutral-light bg-white p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-dark/40">More articles</p>
                <div className="flex flex-col gap-3">
                  <a href="/news/new-safety-standards" className="group flex items-start gap-2">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-punch" />
                    <p className="text-sm text-neutral-dark/65 group-hover:text-neutral-darkest transition-colors">New safety standards reshape the industry</p>
                  </a>
                  <a href="/news/major-commercial-project" className="group flex items-start gap-2">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-punch" />
                    <p className="text-sm text-neutral-dark/65 group-hover:text-neutral-darkest transition-colors">OSG completes major commercial project</p>
                  </a>
                </div>
              </div>
              <div className="rounded-card border border-punch/20 bg-punch/5 p-6">
                <p className="mb-2 font-semibold text-neutral-darkest text-sm">Need certified crew?</p>
                <p className="mb-4 text-xs text-neutral-dark/60">We respond to most labour hire enquiries within 24 hours.</p>
                <a href="/request-a-quote">
                  <Button size="sm" className="w-full">Get in touch</Button>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

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
