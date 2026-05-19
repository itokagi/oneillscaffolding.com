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
            O&apos;Neill Scaffolding Group Pty Ltd is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, and disclose your information.
          </p>
        </div>

        <Section num="1" title="Who We Are">
          <p>
            O&apos;Neill Scaffolding Group Pty Ltd ABN 00 000 000 000 (&quot;OSG&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a scaffolding services provider operating in Southeast Queensland, Australia. We are bound by the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
          </p>
          <p>
            This policy applies to all personal information collected through our website at oneillscaffolding.com.au, by telephone, email, in person, or through any other means of communication with OSG.
          </p>
        </Section>

        <Section num="2" title="Information We Collect">
          <p>We may collect and hold the following types of personal information:</p>
          <ul className="ml-4 list-disc flex flex-col gap-2">
            <li><strong className="text-neutral-darkest">Contact information:</strong> name, phone number, email address, and postal address</li>
            <li><strong className="text-neutral-darkest">Business information:</strong> company name, ABN, and project site address</li>
            <li><strong className="text-neutral-darkest">Project details:</strong> scope of works, site conditions, timelines, and any other information provided in connection with a quote or engagement</li>
            <li><strong className="text-neutral-darkest">Communications:</strong> records of phone calls, emails, or written correspondence with our team</li>
            <li><strong className="text-neutral-darkest">Website usage data:</strong> IP address, browser type, pages visited, and time spent on our site (collected via cookies and analytics tools)</li>
            <li><strong className="text-neutral-darkest">Payment information:</strong> billing details necessary to process invoices (we do not store card details directly)</li>
          </ul>
          <p>
            We collect only the information necessary to provide our services and improve your experience with OSG. You are not required to provide personal information, but failure to do so may limit our ability to assist you.
          </p>
        </Section>

        <Section num="3" title="How We Collect Information">
          <p>We collect personal information through:</p>
          <ul className="ml-4 list-disc flex flex-col gap-2">
            <li>Enquiry and quote request forms on our website</li>
            <li>Direct communication by phone, email, or in person</li>
            <li>Signed contracts, work orders, or engagement letters</li>
            <li>Cookies and analytics tools when you visit our website</li>
            <li>Referrals from third parties (such as your employer or a contractor who engaged us)</li>
          </ul>
        </Section>

        <Section num="4" title="How We Use Your Information">
          <p>We use your personal information to:</p>
          <ul className="ml-4 list-disc flex flex-col gap-2">
            <li>Respond to enquiries and provide scaffolding quotes</li>
            <li>Deliver and manage scaffolding services on your project</li>
            <li>Process invoices and payments</li>
            <li>Meet our legal and regulatory obligations, including workplace health and safety requirements</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Send service-related communications (such as quote confirmations or invoices)</li>
            <li>With your consent, send marketing communications about OSG services, news, and promotions</li>
          </ul>
          <p>
            We will not use your information for any purpose that you would not reasonably expect, and we will not sell your personal information to third parties.
          </p>
        </Section>

        <Section num="5" title="Disclosure of Your Information">
          <p>
            We may share your personal information with trusted third parties who assist us in operating our business, subject to appropriate confidentiality obligations. These may include:
          </p>
          <ul className="ml-4 list-disc flex flex-col gap-2">
            <li>Subcontractors and labour hire personnel engaged on your project</li>
            <li>Our accounting and invoicing software providers</li>
            <li>Website hosting and analytics providers</li>
            <li>Legal and professional advisors</li>
            <li>Insurance providers, where required to manage a claim</li>
          </ul>
          <p>
            We may also disclose personal information where required by law, court order, or regulatory authority, or where necessary to protect the safety of any individual.
          </p>
          <p>
            We do not disclose personal information to overseas recipients except where our service providers (such as cloud platforms) operate internationally, in which case we take reasonable steps to ensure adequate privacy protections are in place.
          </p>
        </Section>

        <Section num="6" title="Cookies and Website Analytics">
          <p>
            Our website uses cookies — small text files stored on your device — to improve your browsing experience. Cookies help us understand how visitors use our site, so we can make improvements.
          </p>
          <p>
            We use Google Analytics to collect aggregated, anonymised data about website traffic. This data does not identify you personally. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
          </p>
          <p>
            You can disable cookies in your browser settings. Note that doing so may affect the functionality of some parts of our website.
          </p>
        </Section>

        <Section num="7" title="Data Security">
          <p>
            We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. These measures include password protection, encrypted email communications, restricted access to personal data within our organisation, and secure document storage.
          </p>
          <p>
            While we take data security seriously, no method of transmission over the internet is completely secure. We cannot guarantee absolute security of information transmitted to us electronically, and you do so at your own risk.
          </p>
        </Section>

        <Section num="8" title="Retention of Information">
          <p>
            We retain personal information for as long as necessary to fulfil the purpose for which it was collected, or as required by law. In general, this means:
          </p>
          <ul className="ml-4 list-disc flex flex-col gap-2">
            <li>Client project records: 7 years from project completion (for tax and contractual compliance)</li>
            <li>Workplace health and safety records: as required under Queensland WHS legislation</li>
            <li>Website enquiries not converted to projects: 2 years</li>
            <li>Marketing contact lists: until you unsubscribe or request removal</li>
          </ul>
          <p>
            When information is no longer required, we will take reasonable steps to destroy or de-identify it securely.
          </p>
        </Section>

        <Section num="9" title="Your Rights">
          <p>Under the Australian Privacy Principles, you have the right to:</p>
          <ul className="ml-4 list-disc flex flex-col gap-2">
            <li><strong className="text-neutral-darkest">Access</strong> the personal information we hold about you</li>
            <li><strong className="text-neutral-darkest">Correct</strong> any personal information that is inaccurate, outdated, or incomplete</li>
            <li><strong className="text-neutral-darkest">Request deletion</strong> of your personal information, subject to any legal retention obligations</li>
            <li><strong className="text-neutral-darkest">Withdraw consent</strong> to marketing communications at any time by contacting us or using the unsubscribe link in any marketing email</li>
            <li><strong className="text-neutral-darkest">Lodge a complaint</strong> with the Office of the Australian Information Commissioner (OAIC) if you believe we have breached the APPs</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:trey@oneillscaffolding.com.au" className="text-punch hover:underline">
              trey@oneillscaffolding.com.au
            </a>. We will respond within 30 days.
          </p>
        </Section>

        <Section num="10" title="Complaints">
          <p>
            If you have a complaint about how we have handled your personal information, please contact us in the first instance. We will acknowledge your complaint within 5 business days and aim to resolve it within 30 days.
          </p>
          <p>
            If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at{" "}
            <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-punch hover:underline">
              www.oaic.gov.au
            </a>{" "}
            or by calling 1300 363 992.
          </p>
        </Section>

        <Section num="11" title="Updates to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. The most current version will always be available on our website. We encourage you to review this policy periodically. Continued use of our website or services following any update constitutes acceptance of the revised policy.
          </p>
        </Section>

        <div className="mt-12 rounded-card border border-neutral-light bg-neutral-lightest px-6 py-5">
          <p className="text-sm font-semibold text-neutral-darkest mb-1">Privacy enquiries</p>
          <p className="text-sm text-neutral-dark/60">
            For any questions or concerns about this Privacy Policy or how we handle your personal information, contact our Privacy Officer at{" "}
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
