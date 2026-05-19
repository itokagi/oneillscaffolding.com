"use client";

import React from "react";

const Section = ({ num, title, children }) => (
  <div className="mb-10">
    <h3 className="mb-4 text-h5 font-bold text-neutral-darkest">
      {num}. {title}
    </h3>
    <div className="flex flex-col gap-3 text-neutral-dark/75 leading-relaxed">
      {children}
    </div>
  </div>
);

export function Content7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg">

        <div className="mb-10 rounded-card border border-neutral-light bg-neutral-lightest px-6 py-5">
          <p className="text-sm text-neutral-dark/60">
            <strong className="text-neutral-darkest">Last updated:</strong> 1 January 2025 &nbsp;&bull;&nbsp;
            <strong className="text-neutral-darkest">Effective date:</strong> 1 January 2025
          </p>
          <p className="mt-2 text-sm text-neutral-dark/60">
            These Terms of Service govern your use of O&apos;Neill Scaffolding Group&apos;s services and website. By engaging our services or using our website, you agree to these terms.
          </p>
        </div>

        <Section num="1" title="Parties and Agreement">
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between O&apos;Neill Scaffolding Group Pty Ltd ABN 00 000 000 000 (&quot;OSG&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company incorporated in Queensland, Australia, and you (&quot;Client&quot;, &quot;you&quot;, &quot;your&quot;) — being any individual or entity that engages our scaffolding services or accesses our website.
          </p>
          <p>
            By requesting a quote, signing an engagement letter, or otherwise instructing OSG to commence work, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </Section>

        <Section num="2" title="Services">
          <p>
            OSG provides scaffolding erection, dismantling, modification, inspection, and labour hire services for commercial, residential, and civil construction projects across Southeast Queensland. The specific scope of services for each engagement will be agreed upon in writing via a formal quote or work order.
          </p>
          <p>
            All services are subject to site conditions being safe and accessible in accordance with the Work Health and Safety Act 2011 (Qld) and relevant Australian Standards. OSG reserves the right to decline or cease work where conditions present an unacceptable safety risk.
          </p>
          <p>
            Any variations to the agreed scope of works must be requested in writing and will be subject to additional pricing at OSG&apos;s standard rates.
          </p>
        </Section>

        <Section num="3" title="Quotes and Pricing">
          <p>
            All quotes provided by OSG are valid for 30 days from the date of issue unless otherwise specified. Quotes are based on information provided by the Client at the time of enquiry. OSG reserves the right to revise pricing if site conditions, scope, or access requirements materially differ from those originally described.
          </p>
          <p>
            Unless otherwise stated, quotes are exclusive of GST. GST will be applied to all invoices at the applicable rate in accordance with the A New Tax System (Goods and Services Tax) Act 1999.
          </p>
          <p>
            Pricing for scaffolding hire is based on agreed rental periods. If scaffolding remains on-site beyond the agreed period, additional hire charges will apply at the rate specified in your quote.
          </p>
        </Section>

        <Section num="4" title="Payment Terms">
          <p>
            Unless otherwise agreed in writing, invoices are due within 14 days of the invoice date. OSG reserves the right to charge interest on overdue amounts at a rate of 2% per month, calculated daily, on any amounts outstanding beyond the payment due date.
          </p>
          <p>
            OSG may suspend or cease services without notice if payment terms are not met. The Client remains liable for all costs incurred up to the point of suspension or cessation.
          </p>
          <p>
            All disputes regarding invoices must be raised in writing within 7 days of the invoice date. Undisputed portions of any invoice remain payable by the due date.
          </p>
        </Section>

        <Section num="5" title="Client Obligations">
          <p>The Client is responsible for:</p>
          <ul className="ml-4 list-disc flex flex-col gap-2">
            <li>Providing safe, unobstructed site access for OSG personnel and equipment during agreed working hours</li>
            <li>Ensuring the site is prepared and ready for scaffolding installation on the agreed commencement date</li>
            <li>Notifying OSG of any site-specific hazards, underground services, or access restrictions prior to commencement</li>
            <li>Ensuring that no unauthorised modifications are made to scaffolding erected by OSG</li>
            <li>Notifying OSG immediately of any damage to or concerns about scaffolding erected under this engagement</li>
            <li>Obtaining all necessary approvals, permits, or council consents required for the scaffolding works</li>
          </ul>
        </Section>

        <Section num="6" title="Safety and Compliance">
          <p>
            OSG operates in full compliance with the Work Health and Safety Act 2011 (Qld), the Work Health and Safety Regulation 2011, and all applicable Australian Standards including AS/NZS 1576 (Scaffolding) and AS 4576 (Guidelines for Scaffolding).
          </p>
          <p>
            All OSG personnel hold current High Risk Work Licences for scaffolding as required under Queensland legislation. OSG maintains full public liability insurance with minimum coverage of $20,000,000.
          </p>
          <p>
            The Client must not permit scaffolding to be used for purposes other than those for which it was designed and installed. Scaffolding must not be overloaded. OSG accepts no liability for injury or damage arising from misuse of installed scaffolding.
          </p>
        </Section>

        <Section num="7" title="Liability and Indemnity">
          <p>
            To the maximum extent permitted by law, OSG&apos;s liability to the Client for any claim arising out of or in connection with these Terms or the services is limited to the lesser of the cost of re-supplying the relevant services or the total fees paid by the Client for the services giving rise to the claim.
          </p>
          <p>
            OSG is not liable for any indirect, consequential, special, punitive, or exemplary loss or damage, including but not limited to loss of revenue, loss of profit, loss of anticipated savings, or project delays arising from circumstances beyond OSG&apos;s reasonable control.
          </p>
          <p>
            The Client indemnifies OSG against all claims, damages, costs, and expenses arising from the Client&apos;s breach of these Terms or any act or omission of the Client, its employees, contractors, or agents.
          </p>
        </Section>

        <Section num="8" title="Force Majeure">
          <p>
            OSG will not be liable for any delay or failure to perform its obligations where such delay or failure results from circumstances beyond its reasonable control, including but not limited to extreme weather events, government-imposed restrictions, industrial action, or natural disasters.
          </p>
          <p>
            In such circumstances, OSG will notify the Client as soon as practicable and will use reasonable endeavours to minimise the impact of the delay.
          </p>
        </Section>

        <Section num="9" title="Termination">
          <p>
            Either party may terminate an engagement by providing 5 business days&apos; written notice. The Client remains liable for all work completed and materials supplied up to the date of termination, including reasonable demobilisation costs.
          </p>
          <p>
            OSG may terminate an engagement immediately and without notice if the Client fails to pay any amount when due, breaches a material term of these Terms, becomes insolvent, or if site conditions present an unacceptable safety risk.
          </p>
        </Section>

        <Section num="10" title="Governing Law and Disputes">
          <p>
            These Terms are governed by the laws of Queensland, Australia. The parties submit to the non-exclusive jurisdiction of the courts of Queensland.
          </p>
          <p>
            In the event of a dispute, the parties agree to first attempt resolution through good-faith negotiation. If not resolved within 14 days, either party may refer the dispute to mediation before initiating legal proceedings.
          </p>
        </Section>

        <Section num="11" title="Amendments">
          <p>
            OSG may amend these Terms at any time by posting an updated version on our website. Continued use of our services following any such update constitutes acceptance of the revised Terms. We encourage Clients to review these Terms periodically.
          </p>
        </Section>

        <div className="mt-12 rounded-card border border-neutral-light bg-neutral-lightest px-6 py-5">
          <p className="text-sm font-semibold text-neutral-darkest mb-1">Contact us about these Terms</p>
          <p className="text-sm text-neutral-dark/60">
            If you have questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:trey@oneillscaffolding.com.au" className="text-punch hover:underline">
              trey@oneillscaffolding.com.au
            </a>{" "}
            or write to: O&apos;Neill Scaffolding Group Pty Ltd, Southeast Queensland, Australia.
          </p>
        </div>
      </div>
    </section>
  );
}
