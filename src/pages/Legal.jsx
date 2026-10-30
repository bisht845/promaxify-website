import React from "react";
import {
  FaShieldHalved,
  FaFileContract,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Legal() {
  return (
    <main className="w-full bg-[#1a1a1a] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-white/10 bg-[#1a1a1a]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-16">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff7a00]" />

              {/* <span className="text-xs font-bold tracking-[0.22em] text-[#ff7a00] sm:text-sm">
                LEGAL INFORMATION
              </span> */}
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-4xl md:text-4xl">
              Privacy Policy
              <br />
              <span className="text-[#ff7a00]">
                & Terms & Conditions
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              This page explains how Promaxify Marketing Solutions LLP
              handles information submitted through its website and the
              terms that apply when you use our website and engage with
              our services.
            </p>
{/* 
            <p className="mt-5 text-sm text-gray-500">
              Effective Date: [Insert Effective Date]
            </p> */}

          </div>

        </div>
      </section>


      {/* =========================================================
          QUICK NAVIGATION
      ========================================================= */}
 
    <section className="sticky top-0 z-50 border-b border-white/10 bg-[#202020] shadow-lg">
      <div className="mx-auto max-w-[1200px] px-6 py-6 sm:px-10 lg:px-16">

        <div className="flex flex-wrap gap-3">

          <a
            href="#refund-policy"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff7a00]/50 hover:text-[#ff7a00]"
          >
            <FaShieldHalved />
            Refund & Cancellation
          </a>

          <a
            href="#privacy-policy"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff7a00]/50 hover:text-[#ff7a00]"
          >
            <FaShieldHalved />
            Privacy Policy
          </a>

          <a
            href="#terms-conditions"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff7a00]/50 hover:text-[#ff7a00]"
          >
            <FaFileContract />
            Terms & Conditions
          </a>

        </div>
      </div>
    </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-[#f7f7f7] text-[#222]">

        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-16">
            <article
              id="refund-policy"
              className="scroll-mt-24"
            >
              <div className="mb-12">
                <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a00]">
                  01 — REFUNDS
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Refund & Cancellation Policy
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
                  Promaxify Marketing Solutions LLP ("Promaxify", "we",
                  "us" or "our") is committed to maintaining transparency
                  in all client engagements. This Refund and Cancellation
                  Policy explains the terms and conditions governing
                  cancellations, refunds, ongoing services, project
                  payments and related commercial arrangements.
                  This Policy applies to all clients purchasing our
                  digital marketing and professional services.
                </p>
              </div>

              <div className="space-y-10">

                {/* 1. Purpose and Scope */}
                <LegalSection
                  number="1"
                  title="Purpose & Scope"
                >
                  <p>
                    This Policy applies to services offered by Promaxify
                    Marketing Solutions LLP, including:
                  </p>

                  <ul>

                    <li>Customized promotional merchadise.</li>
                    <li>Advertisement services.</li>
                    <li>Digital Marketing and Marketing Strategy.</li>
                    <li>Search Engine Optimization (SEO).</li>
                    <li>Social Media Management and Marketing.</li>
                    <li>Google Ads and Meta Ads Management.</li>
                    <li>Website Design and Development.</li>
                    <li>Branding and Creative Design Services.</li>
                    <li>Content Marketing and Production.</li>
                    <li>Consulting, Training and Related Professional Services.</li>
                  </ul>

                  <p>
                    This Policy does not govern refunds processed directly
                    by third-party advertising platforms, application stores,
                    domain registrars, hosting providers or software vendors.
                    Such refunds remain subject to the respective third-party
                    provider's policies.
                  </p>

                  <p>
                    Any signed agreement, proposal or statement of work
                    containing specific refund or cancellation terms will
                    prevail over this general Policy for that engagement
                    where the terms conflict.
                  </p>
                </LegalSection>

                {/* 2. Definitions */}
                <LegalSection
                  number="2"
                  title="Definitions"
                >
                  <ul>
                    <li>
                      <strong>Engagement:</strong>{" "}
                      Any paid service arrangement between Promaxify
                      and a Client, confirmed through a quotation,
                      invoice, purchase order or signed agreement.
                    </li>

                    <li>
                      <strong>Retainer:</strong>{" "}
                      A recurring payment, generally monthly, covering
                      an agreed scope of professional services,
                      deliverables or management activities.
                    </li>

                    <li>
                      <strong>Project:</strong>{" "}
                      A fixed-scope engagement with defined milestones,
                      deliverables or timelines, such as website
                      development, branding or SEO implementation.
                    </li>

                    <li>
                      <strong>Ad Spend:</strong>{" "}
                      Advertising budgets paid to third-party platforms
                      or publishers, separate from Promaxify's
                      professional management fees.
                    </li>

                    <li>
                      <strong>Non-Refundable Expenses:</strong>{" "}
                      Costs committed to third parties with Client
                      authorization, including advertising credits,
                      licensed assets, domain purchases, software
                      subscriptions, plugin licenses and specialized
                      contractor expenses.
                    </li>

                    <li>
                      <strong>Cancellation Notice Period:</strong>{" "}
                      The minimum advance written notice required
                      to terminate an ongoing service arrangement.
                    </li>
                  </ul>
                </LegalSection>

                {/* 3. General Principles */}
                <LegalSection
                  number="3"
                  title="General Refund Principles"
                >
                  <p>
                    Promaxify invests professional time, technical
                    expertise, resources and operational capacity in
                    every client engagement, including onboarding,
                    discovery, campaign configuration, tracking setup
                    and creative production.
                  </p>

                  <p>
                    Accordingly, the following general principles apply:
                  </p>

                  <ul>
                    <li>
                      Payments for services already performed or
                      deliverables already completed are generally
                      non-refundable.
                    </li>

                    <li>
                      Third-party costs and expenses already committed
                      are generally non-refundable.
                    </li>

                    <li>
                      Scheduled retainer periods remain subject to
                      the agreed payment and cancellation terms.
                    </li>

                    <li>
                      Refund eligibility will be assessed based on
                      documented delivery, unused prepaid periods,
                      contractual terms and the reason for cancellation.
                    </li>

                    <li>
                      Dissatisfaction with subjective creative preferences
                      does not automatically qualify for a refund where
                      the agreed specifications have been fulfilled.
                    </li>

                    <li>
                      Marketing results, including traffic, rankings,
                      leads and conversions, are not guaranteed unless
                      expressly agreed in a separate written agreement.
                    </li>
                  </ul>

                  <p>
                    All cancellation and refund requests must be
                    submitted in writing through our official
                    business communication channel.
                  </p>
                </LegalSection>

                {/* 4. Retainer Cancellation */}
                <LegalSection
                  number="4"
                  title="Retainer & Ongoing Service Cancellations"
                >
                  <h4 className="font-semibold text-[#222]">
                    4.1 Standard Cancellation Notice
                  </h4>

                  <p>
                    For monthly retainers and ongoing services,
                    including SEO, paid advertising management,
                    social media management and content marketing,
                    Clients must provide at least 30 calendar days'
                    written notice before the desired termination date,
                    unless a different period is specified in the
                    signed agreement.
                  </p>

                  <p>
                    Cancellation requests received during an active
                    billing cycle may take effect at the end of the
                    applicable notice period. Depending on the timing
                    of the request and contractual terms, additional
                    billing obligations may apply.
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    4.2 Work During the Notice Period
                  </h4>

                  <p>
                    During the notice period, Promaxify may continue
                    performing services according to the agreed scope,
                    unless both parties mutually agree to an earlier
                    termination.
                  </p>

                  <p>
                    Early termination without the required notice may
                    result in charges equivalent to the shorter of
                    the remaining notice period or one monthly retainer
                    fee, together with applicable non-refundable
                    expenses, subject to the signed agreement and law.
                  </p>

                  <p>
                    Reasonable transition assistance may include:
                  </p>

                  <ul>
                    <li>Sharing available performance reports.</li>
                    <li>Providing relevant campaign documentation.</li>
                    <li>Transferring account administration access where permitted.</li>
                    <li>Sharing completed deliverables.</li>
                    <li>Providing reasonable campaign handover assistance.</li>
                  </ul>

                  <p>
                    Outstanding invoices must be settled before final
                    handover, subject to applicable contractual terms
                    and law.
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    4.3 Pausing Services
                  </h4>

                  <p>
                    Clients may request a temporary pause of ongoing
                    retainer services in writing. Approval will depend
                    on the nature of the engagement and Promaxify's
                    operational capacity.
                  </p>

                  <p>
                    Paused services may still incur applicable
                    platform maintenance, hosting, software or
                    third-party subscription charges where previously
                    disclosed or agreed.
                  </p>
                </LegalSection>

                {/* 5. Project Cancellation */}
                <LegalSection
                  number="5"
                  title="Fixed-Scope Project Cancellations"
                >
                  <p>
                    This section applies to fixed-scope projects,
                    including website development, rebranding,
                    branding packages, SEO audits and implementation
                    projects.
                  </p>

                  <p>
                    Project payments are governed by the milestone
                    and payment schedule specified in the applicable
                    proposal or agreement.
                  </p>

                  <p>
                    If a Client cancels a project after work has
                    commenced, the Client remains responsible for:
                  </p>

                  <ul>
                    <li>Fees for all completed milestones.</li>
                    <li>
                      Work in progress, calculated according to
                      agreed milestone percentages or applicable
                      contractual rates.
                    </li>
                    <li>Non-refundable third-party expenses.</li>
                    <li>Other approved project-related commitments.</li>
                  </ul>

                  <p>
                    Deposits paid to reserve project capacity may
                    become non-refundable once discovery, planning,
                    production or development work has started,
                    subject to applicable contractual terms and law.
                  </p>

                  <p>
                    If Promaxify fails to deliver an agreed milestone
                    by its specified date solely due to its own fault
                    and does not resolve the issue within a reasonable
                    period after written notice, the Client may be
                    eligible for a partial refund or service credit
                    for the undelivered portion.
                  </p>

                  <p>
                    Delays resulting from missing information,
                    delayed approvals, unavailable access or
                    Client-requested scope changes do not
                    automatically qualify for refunds.
                  </p>
                </LegalSection>

                {/* 6. Refund Eligibility */}
                <LegalSection
                  number="6"
                  title="Refund Eligibility"
                >
                  <p>
                    All refund requests are reviewed individually
                    based on the applicable agreement, payment records,
                    services delivered and documented circumstances.
                    The following guidelines generally apply:
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    6.1 Duplicate Payments or Billing Errors
                  </h4>

                  <p>
                    Verified duplicate payments or incorrect charges
                    will be eligible for a refund of the erroneous
                    amount, generally within 10 to 15 business days
                    after verification.
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    6.2 Services Not Yet Commenced
                  </h4>

                  <p>
                    If cancellation occurs before onboarding or
                    project work begins and no third-party expenses
                    have been committed, deposits may be considered
                    for refund after deducting any reasonable,
                    previously disclosed and legally permissible
                    administrative charges.
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    6.3 Partially Completed Projects
                  </h4>

                  <p>
                    Refunds, where applicable, will be limited to
                    eligible undelivered prepaid portions after
                    deducting completed work and non-refundable
                    expenses.
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    6.4 Retainer Overpayments
                  </h4>

                  <p>
                    Verified overpayments may be adjusted against
                    future invoices or refunded where the amount
                    has not already been offset against services
                    delivered.
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    6.5 Dissatisfaction With Results
                  </h4>

                  <p>
                    Dissatisfaction with marketing performance or
                    subjective preferences does not ordinarily
                    qualify for a refund unless deliverables materially
                    deviate from agreed written specifications and
                    the issue is not resolved within a reasonable
                    remediation period.
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    6.6 Advertising Platform Payments
                  </h4>

                  <p>
                    Advertising spend already credited or paid to
                    third-party advertising accounts is subject
                    to the respective platform's refund policies.
                    Promaxify cannot independently guarantee
                    recovery of such amounts.
                  </p>

                  <h4 className="font-semibold text-[#222]">
                    6.7 Training Programs and Workshops
                  </h4>

                  <p>
                    Refunds for workshops, training sessions and
                    events may be available when cancellation is
                    requested at least seven calendar days before
                    the scheduled date. Requests made within seven
                    days may be subject to forfeiture or credit
                    at Promaxify's discretion, unless separate
                    event-specific terms or applicable law provide
                    otherwise.
                  </p>
                </LegalSection>

                {/* 7. Advertising Spend */}
                <LegalSection
                  number="7"
                  title="Advertising & Media Spend"
                >
                  <p>
                    Professional advertising management fees and
                    advertising budgets are separate charges.
                    When a Client authorizes Promaxify to manage
                    advertising campaigns through platforms such
                    as Google Ads, Meta Ads or other publishers:
                  </p>

                  <ul>
                    <li>
                      Advertising amounts already spent on impressions,
                      clicks or other delivered advertising services
                      are non-refundable by Promaxify.
                    </li>

                    <li>
                      Unused prepaid advertising balances remain
                      subject to the third-party platform's refund
                      and balance policies.
                    </li>

                    <li>
                      Platform fees and other third-party charges
                      may not be refundable.
                    </li>

                    <li>
                      Advertising expenditure statements may be
                      provided upon reasonable request.
                    </li>

                    <li>
                      Campaign cancellation does not entitle the
                      Client to recover advertising services
                      already delivered.
                    </li>
                  </ul>

                  <p>
                    If an advertising account is suspended due to
                    Client-provided prohibited content or policy
                    violations, applicable management fees for
                    work already performed and committed expenses
                    remain payable, subject to the agreement.
                  </p>
                </LegalSection>

                {/* 8. Chargebacks */}
                <LegalSection
                  number="8"
                  title="Chargebacks & Payment Disputes"
                >
                  <p>
                    Clients are encouraged to contact Promaxify
                    directly to resolve billing concerns, incorrect
                    charges or payment disputes before initiating
                    chargebacks or payment reversals with banks,
                    card networks or payment providers.
                  </p>

                  <p>
                    We will review genuine payment concerns and
                    provide relevant invoices, payment records,
                    service documentation and communication
                    records where necessary.
                  </p>

                  <p>
                    Where a chargeback concerns valid payments
                    for services already delivered or contractual
                    obligations, Promaxify reserves the right
                    to suspend ongoing work, recover outstanding
                    amounts and take appropriate action in
                    accordance with applicable law.
                  </p>
                </LegalSection>

                {/* 9. Taxes */}
                <LegalSection
                  number="9"
                  title="Taxes & Refund Processing"
                >
                  <p>
                    All applicable taxes, including Goods and
                    Services Tax (GST), will be handled in
                    accordance with Indian tax regulations.
                  </p>

                  <p>
                    Approved refunds will be processed after
                    necessary verification and applicable
                    tax adjustments.
                  </p>

                  <ul>
                    <li>
                      Refunds are generally initiated within
                      15 business days of approval.
                    </li>

                    <li>
                      Refunds will ordinarily be made through
                      the original payment method wherever feasible.
                    </li>

                    <li>
                      Bank transfers may require additional
                      verification for security purposes.
                    </li>

                    <li>
                      Applicable GST credit notes and related
                      documentation will be issued in accordance
                      with Indian tax regulations.
                    </li>
                  </ul>

                  <p>
                    Actual credit timelines may vary depending
                    on the payment gateway, bank or financial
                    institution.
                  </p>
                </LegalSection>

                {/* 10. Scope Reduction */}
                <LegalSection
                  number="10"
                  title="Client-Initiated Scope Reduction"
                >
                  <p>
                    Any request to reduce or modify the agreed
                    service scope after work has commenced may
                    be treated as a partial cancellation.
                  </p>

                  <p>
                    In such cases:
                  </p>

                  <ul>
                    <li>Fees for completed work remain payable.</li>
                    <li>
                      Previously committed third-party expenses
                      remain payable.
                    </li>
                    <li>
                      Future deliverables may be revised through
                      a mutually agreed written change order.
                    </li>
                    <li>
                      Project fees and timelines may be adjusted
                      according to the revised scope.
                    </li>
                  </ul>

                  <p>
                    A change in business objectives or project
                    requirements does not automatically qualify
                    for a refund of completed work or previously
                    delivered milestones.
                  </p>
                </LegalSection>

                {/* 11. Termination */}
                <LegalSection
                  number="11"
                  title="Termination by Promaxify"
                >
                  <p>
                    Promaxify reserves the right to suspend or
                    terminate an engagement in circumstances
                    including:
                  </p>

                  <ul>
                    <li>Non-payment of outstanding invoices.</li>
                    <li>Material breach of contractual obligations.</li>
                    <li>Illegal, fraudulent or prohibited activities.</li>
                    <li>Abusive or inappropriate conduct toward our team.</li>
                    <li>
                      Repeated failure to provide required
                      information, approvals or account access.
                    </li>
                  </ul>

                  <p>
                    In such circumstances, refunds will generally
                    not be provided for services already performed
                    or expenses already committed.
                  </p>

                  <p>
                    If Promaxify terminates an engagement without
                    cause before delivering prepaid services that
                    have not yet been performed, eligible unused
                    prepaid professional service fees will be
                    refunded within a reasonable period, subject
                    to applicable contractual terms and law.
                  </p>
                </LegalSection>

                {/* 12. Force Majeure */}
                <LegalSection
                  number="12"
                  title="Force Majeure & Extraordinary Events"
                >
                  <p>
                    Promaxify will not be held responsible for
                    delays or interruptions caused by circumstances
                    beyond reasonable control, including:
                  </p>

                  <ul>
                    <li>Natural disasters and extreme weather events.</li>
                    <li>Government restrictions or regulatory actions.</li>
                    <li>Major internet or infrastructure failures.</li>
                    <li>Third-party platform outages.</li>
                    <li>Other extraordinary circumstances beyond reasonable control.</li>
                  </ul>

                  <p>
                    Where such circumstances affect service delivery,
                    Promaxify may propose revised schedules or
                    alternative arrangements instead of immediate
                    cancellation.
                  </p>

                  <p>
                    If services cannot resume within 60 days,
                    or another period specified in the agreement,
                    the Client may request termination and an
                    appropriate pro-rata refund of eligible unused
                    prepaid professional service fees, excluding
                    completed work and non-refundable expenses,
                    subject to applicable law.
                  </p>
                </LegalSection>

                {/* 13. Internship */}
                <LegalSection
                  number="13"
                  title="Internship & Recruitment Programs"
                >
                  <p>
                    Internship, training, recruitment and placement
                    programs offered by Promaxify may be governed
                    by separate program-specific terms.
                  </p>

                  <p>
                    Where an application, registration or training
                    fee is introduced, applicable refund conditions
                    will be disclosed at the time of registration
                    or payment.
                  </p>

                  <p>
                    Stipends, internship benefits and employment-related
                    arrangements will be governed by the relevant
                    offer letters or program agreements.
                  </p>
                </LegalSection>

                {/* 14. Disputes */}
                <LegalSection
                  number="14"
                  title="Dispute Resolution"
                >
                  <p>
                    If a Client disagrees with a refund decision,
                    they may submit a written request for
                    reconsideration with relevant supporting
                    documents and additional information.
                  </p>

                  <p>
                    Promaxify aims to review such requests fairly
                    and resolve genuine concerns through
                    good-faith communication.
                  </p>

                  <p>
                    If a dispute remains unresolved, it will
                    be addressed in accordance with the governing
                    law and dispute resolution provisions of
                    the applicable agreement.
                  </p>

                  <p>
                    Nothing in this Policy limits any rights
                    available to consumers under applicable
                    Indian law.
                  </p>
                </LegalSection>

                {/* 15. Request Process */}
                <LegalSection
                  number="15"
                  title="How to Submit a Refund or Cancellation Request"
                >
                  <p>
                    All refund and cancellation requests must
                    be submitted in writing through our official
                    business email address.
                  </p>

                  <p>
                    Please include the following information
                    in your request:
                  </p>

                  <ul>
                    <li>Full name or authorized representative's name.</li>
                    <li>Company or business name, where applicable.</li>
                    <li>Engagement or project name.</li>
                    <li>Invoice number or payment reference.</li>
                    <li>Requested cancellation effective date.</li>
                    <li>Reason for the refund or cancellation.</li>
                    <li>Supporting documents, invoices or payment receipts.</li>
                  </ul>

                  <p>
                    Please use one of the following email subject lines:
                  </p>

                  <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
                    <p className="font-semibold text-[#222]">
                      Refund Request – [Project or Service Name]
                    </p>

                    <p className="mt-2 font-semibold text-[#222]">
                      Cancellation Request – [Project or Service Name]
                    </p>
                  </div>

                  <p>
                    Promaxify aims to acknowledge requests within
                    three business days and provide a substantive
                    response within ten business days. Complex
                    requests involving third-party reconciliation
                    may require additional time.
                  </p>
                </LegalSection>

                {/* 16. Other Policies */}
                <LegalSection
                  number="16"
                  title="Relationship With Other Policies"
                >
                  <p>
                    This Refund and Cancellation Policy should
                    be read together with our other applicable
                    website policies, including:
                  </p>

                  <ul>
                    <li>Terms and Conditions.</li>
                    <li>Privacy Policy.</li>
                    <li>Cookie Policy.</li>
                  </ul>

                  <p>
                    These policies collectively govern the
                    Client's relationship with Promaxify and
                    the use of our website and professional services.
                  </p>
                </LegalSection>

                {/* 17. Updates */}
                <LegalSection
                  number="17"
                  title="Policy Updates"
                >
                  <p>
                    Promaxify reserves the right to update or
                    modify this Policy from time to time to
                    reflect changes in business practices,
                    service offerings, payment procedures,
                    third-party platform requirements or
                    applicable legal requirements.
                  </p>

                  <p>
                    Updated versions will be published on our
                    website with a revised effective date.
                  </p>

                  <p>
                    Changes will generally apply to new
                    engagements from their effective date.
                    Existing engagements will continue to be
                    governed by their applicable agreements,
                    unless otherwise mutually agreed or
                    required by law.
                  </p>
                </LegalSection>

                {/* 18. Acknowledgment */}
                <LegalSection
                  number="18"
                  title="Acknowledgment"
                >
                  <p>
                    By purchasing or engaging Promaxify Marketing
                    Solutions LLP for paid services, the Client
                    acknowledges that they have read and
                    understood this Refund and Cancellation Policy
                    and the applicable terms of their engagement.
                  </p>

                  <p>
                    We encourage all Clients to review service
                    descriptions, deliverables, payment schedules
                    and project timelines carefully before
                    entering into an engagement.
                  </p>

                  <p>
                    For clarification regarding refunds,
                    cancellations or billing arrangements,
                    please contact our official business
                    support team through the contact details
                    published on our website.
                  </p>

                  {/* <div className="mt-5 rounded-xl border border-gray-200 bg-white p-6">
                    <p className="font-semibold text-[#222]">
                      Promaxify Marketing Solutions LLP
                    </p>

                    <p className="mt-2 text-gray-600">
                      Website:{" "}
                      <a
                        href="https://promaxifymarketing.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff7a00] hover:underline"
                      >
                        www.promaxifymarketing.com
                      </a>
                    </p>
                  </div> */}
                </LegalSection>

              </div>
            </article>
        {/* =====================================================
              DIVIDER
          ===================================================== */}
          <div className="my-20 border-t border-gray-200" />
          {/* =====================================================
              PRIVACY POLICY
          ===================================================== */}
          <article
            id="privacy-policy"
            className="scroll-mt-24"
          >

            <div className="mb-12">

              <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a00]">
                01 — PRIVACY
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Privacy Policy
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
                Promaxify Marketing Solutions LLP ("PMSL", "we", "our" or
                "us") respects your privacy and is committed to handling
                personal information responsibly. This Privacy Policy
                explains what information we may collect, how we use it,
                when it may be shared and the choices available to you.
              </p>

            </div>


            <div className="space-y-10">


              {/* 1. Information */}
              <LegalSection
                number="1"
                title="Information We May Collect"
              >

                <p>
                  Depending on how you interact with our website, we may
                  collect the following categories of information:
                </p>

                <ul>
                  <li>
                    <strong>Contact and enquiry information:</strong>{" "}
                    name, company name, email address, phone number and
                    details submitted through website forms.
                  </li>

                  <li>
                    <strong>Business requirement information:</strong>{" "}
                    service requirements, budget, timeline, project brief,
                    preferences and other information voluntarily provided.
                  </li>

                  <li>
                    <strong>Partner and referral information:</strong>{" "}
                    details submitted by individuals or organizations
                    interested in the Promaxify Partner Network or
                    submitting a referral.
                  </li>

                  <li>
                    <strong>Communication information:</strong>{" "}
                    information contained in messages, emails or other
                    communications with PMSL.
                  </li>

                  <li>
                    <strong>Website usage information:</strong>{" "}
                    IP address, browser or device information, pages
                    visited, approximate location and technical or usage
                    information where collected through analytics or
                    cookies.
                  </li>

                  <li>
                    <strong>Marketing preferences:</strong>{" "}
                    information relating to promotional communications
                    and your opt-in or opt-out choices.
                  </li>
                </ul>

              </LegalSection>


              {/* 2. Use */}
              <LegalSection
                number="2"
                title="How We Use Information"
              >

                <p>
                  Information may be used for legitimate business and
                  operational purposes, including to:
                </p>

                <ul>
                  <li>
                    Respond to enquiries, proposal requests and
                    service-related questions.
                  </li>

                  <li>
                    Understand your requirements and prepare suitable
                    solutions, quotations or proposals.
                  </li>

                  <li>
                    Manage partner and referral enquiries and communicate
                    about the Partner Network.
                  </li>

                  <li>
                    Provide, coordinate and improve our services and
                    website performance.
                  </li>

                  <li>
                    Maintain business records and support administration,
                    security and fraud prevention.
                  </li>

                  <li>
                    Send relevant marketing or updates where permitted and,
                    where required, based on consent.
                  </li>

                  <li>
                    Meet applicable legal, regulatory or contractual
                    obligations.
                  </li>
                </ul>

              </LegalSection>


              {/* 3. Sharing */}
              <LegalSection
                number="3"
                title="Sharing of Information"
              >
                <p>
             The final policy should state that PMSL does not sell personal information as a business practice. Information may be shared where reasonably necessary with trusted service providers, production/vendor partners, technology providers, professional advisers, payment/administrative providers or authorities where legally required. Sharing should be limited to what is necessary and handled with appropriate safeguards.
                </p>

              </LegalSection>


              {/* 4. Cookies */}
              <LegalSection
                number="4"
                title="Cookies & Analytics"
              >

                <p>
                  Explain whether the website uses essential cookies, analytics, advertising/marketing cookies, pixels, embedded content or similar technologies. Where applicable, visitors should receive appropriate information and choices for non-essential cookies.
                </p>

              </LegalSection>


              {/* 5. WhatsApp */}
              <LegalSection
                number="5"
                title="WhatsApp & Third-Party Communication"
              >

                <p>
                If the Partner Network CTA opens an official PMSL WhatsApp conversation, the policy should explain that information shared through WhatsApp is processed through WhatsApp/Meta services as well as PMSL's own systems. Final wording should match the actual WhatsApp setup.
                </p>

              </LegalSection>


              {/* 6. Retention */}
              <LegalSection
                number="6"
                title="Data Retention & Security"
              >

                <p>
                  State that information is retained only as long as reasonably necessary for the purpose collected, legitimate business needs, contractual requirements and applicable legal obligations. Describe reasonable safeguards without making absolute security guarantees.
                </p>

              </LegalSection>


              {/* 7. Rights */}
              <LegalSection
                number="7"
                title="Your Rights & Choices"
              >

                <p>
                 Explain applicable rights, which may include access, correction, deletion where applicable, restriction or objection to certain processing, withdrawal of consent where consent is the basis, and marketing opt-out. Exact rights depend on applicable law.
                </p>

                {/* <ul>
                  <li>Requesting access to personal information.</li>
                  <li>Requesting correction of inaccurate information.</li>
                  <li>Requesting deletion where applicable.</li>
                  <li>
                    Requesting restriction of or objecting to certain
                    processing.
                  </li>
                  <li>
                    Withdrawing consent where consent is the basis for
                    processing.
                  </li>
                  <li>
                    Opting out of certain marketing communications.
                  </li>
                </ul> */}

              </LegalSection>


              {/* 8. Contact */}
              <LegalSection
                number="8"
                title="Privacy Contact"
              >

                <p>
               Add the official PMSL privacy email, legal/business address and any other required contact details. Do not publish placeholders in the final policy.
                </p>

                {/* <div className="mt-5 rounded-xl border border-gray-200 bg-white p-6">
                  <p className="font-semibold text-[#222]">
                    Promaxify Marketing Solutions LLP
                  </p>

                  <p className="mt-2 text-gray-600">
                    Email: [Official Privacy Email]
                  </p>

                  <p className="text-gray-600">
                    Address: [Registered Business Address]
                  </p>
                </div> */}

              </LegalSection>


              {/* 9. Updates */}
              <LegalSection
                number="9"
                title="Policy Updates"
              >

                <p>
                 Include an effective date and explain that the policy may be updated from time to time, with appropriate notice where required.
                </p>

                {/* <p>
                  The updated version will be published on this page with
                  an updated effective date where appropriate.
                </p> */}

              </LegalSection>

            </div>

          </article>


          {/* =====================================================
              DIVIDER
          ===================================================== */}
          <div className="my-20 border-t border-gray-200" />


          {/* =====================================================
              TERMS & CONDITIONS
          ===================================================== */}
          <article
            id="terms-conditions"
            className="scroll-mt-24"
          >

            <div className="mb-12">

              <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a00]">
                02 — TERMS
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Terms & Conditions
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
                These Terms & Conditions govern your use of the Promaxify
                website and provide a general framework for website
                content, enquiries, quotations, services, intellectual
                property and related matters.
              </p>

            </div>


            <div className="space-y-10">


              {/* 1. Website Use */}
              <LegalSection
                number="1"
                title="Website Use"
              >

                <p>
                  You may use this website only for lawful business and
                  informational purposes.
                </p>

                <ul>
                  <li>
                    You must not misuse the website or its functionality.
                  </li>

                  <li>
                    You must not attempt unauthorized access to website
                    systems or data.
                  </li>

                  <li>
                    You must not introduce malicious code or material
                    intended to disrupt website operation.
                  </li>

                  <li>
                    PMSL may restrict access where reasonably necessary
                    for security, maintenance or misuse.
                  </li>
                </ul>

              </LegalSection>


              {/* 2. Website Content */}
              <LegalSection
                number="2"
                title="Website Content"
              >

                <p>
                  Information on this website is provided for general
                  business and informational purposes.
                </p>

                <p>
                  Product images, specifications, availability, pricing,
                  timelines, colours, quantities and other information may
                  change.
                </p>

                <p>
                  Final commercial terms should be confirmed in the
                  applicable proposal, quotation, purchase order or
                  agreement.
                </p>

              </LegalSection>


              {/* 3. Enquiries */}
              <LegalSection
                number="3"
                title="Enquiries, Quotations & Orders"
              >

                <ul>
                  <li>
                    Submitting an enquiry does not automatically create a
                    contract or guarantee acceptance of an order.
                  </li>

                  <li>
                    Quotations may be subject to validity periods,
                    availability, specifications, taxes, delivery
                    requirements and other stated conditions.
                  </li>

                  <li>
                    Customized products, quantities, artwork approvals and
                    delivery schedules may be subject to feasibility and
                    supplier or production constraints.
                  </li>

                  <li>
                    Confirmed engagements should be governed by the
                    relevant commercial agreement, quotation, purchase
                    order or written confirmation.
                  </li>
                </ul>

              </LegalSection>


              {/* 4. Intellectual Property */}
              <LegalSection
                number="4"
                title="Intellectual Property"
              >

                <p>
                  Unless otherwise stated, website text, graphics,
                  photographs, logos, layouts, designs, trademarks and
                  other original content are owned by or licensed to PMSL.
                </p>

                <p>
                  Such content may not be reproduced, modified,
                  distributed or commercially used without appropriate
                  permission.
                </p>

                <p>
                  Client and third-party names, logos, trademarks and
                  other marks remain the property of their respective
                  owners.
                </p>

              </LegalSection>


              {/* 5. Portfolio */}
              <LegalSection
                number="5"
                title="Portfolio & Case Studies"
              >

                <p>
                  Portfolio and case-study examples should be presented
                  accurately.
                </p>

                <p>
                  Where client names, logos, photographs or confidential
                  project information are used, PMSL should have the
                  appropriate permission or contractual right to publish
                  them.
                </p>

              </LegalSection>


              {/* 6. Third Party */}
              <LegalSection
                number="6"
                title="Third-Party Links & Services"
              >

                <p>
                  The website may link to or integrate with third-party
                  services such as WhatsApp, social platforms, maps,
                  analytics, forms and other external services.
                </p>

                <p>
                  These third-party services operate under their own terms
                  and privacy policies. PMSL is not responsible for the
                  policies or practices of third-party services outside
                  its control.
                </p>

              </LegalSection>


              {/* 7. Partner Network */}
              <LegalSection
                number="7"
                title="Partner Network & Referral Programme"
              >

                <p>
                  The Promaxify Partner Network may involve referral
                  opportunities, rewards or commissions.
                </p>

                <p>
                  Where a formal referral programme is operated, separate
                  programme rules may apply.
                </p>

                <p>
                  Such rules may cover:
                </p>

                <ul>
                  <li>Partner eligibility.</li>
                  <li>Valid referrals.</li>
                  <li>Lead attribution and ownership.</li>
                  <li>Reward or commission calculation.</li>
                  <li>Payment triggers and timing.</li>
                  <li>Cancellations and refunds.</li>
                  <li>Applicable taxes.</li>
                  <li>Conflicts of interest.</li>
                  <li>Misuse of the programme.</li>
                  <li>Termination of partnership.</li>
                </ul>

                <p>
                  Any specific reward or commission should be understood
                  according to the applicable Partner Network programme
                  rules and should not be interpreted as an unconditional
                  guarantee.
                </p>

              </LegalSection>


              {/* 8. Liability */}
              <LegalSection
                number="8"
                title="Liability & Disclaimers"
              >

                <p>
                  To the extent permitted by applicable law, the final
                  terms may limit PMSL's liability in relation to website
                  use and website information.
                </p>

                <p>
                  Nothing in these Terms is intended to exclude or limit
                  any liability, statutory right or obligation that cannot
                  lawfully be excluded or limited.
                </p>

              </LegalSection>


              {/* 9. Indemnity */}
              <LegalSection
                number="9"
                title="Indemnity & Misuse"
              >

                <p>
                  Subject to applicable law, users may be responsible for
                  losses arising from unlawful website use, misuse of
                  website content, infringement of third-party rights or
                  prohibited activities.
                </p>

              </LegalSection>


              {/* 10. Governing Law */}
              <LegalSection
                number="10"
                title="Governing Law & Dispute Resolution"
              >

                <p>
                  The governing law, jurisdiction and dispute-resolution
                  mechanism applicable to PMSL should be specified based
                  on the legal entity and intended jurisdiction.
                </p>

                {/* <div className="mt-5 rounded-xl border border-[#ff7a00]/20 bg-[#fff8f2] p-6">
                  <p className="text-sm leading-7 text-gray-700">
                    <strong>Important:</strong> Replace this section with
                    the actual governing law, jurisdiction and dispute
                    resolution approach confirmed by PMSL's legal
                    adviser.
                  </p>
                </div> */}

              </LegalSection>


              {/* 11. Changes */}
              <LegalSection
                number="11"
                title="Changes to These Terms"
              >

                <p>
                  PMSL may update these Terms & Conditions from time to
                  time to reflect changes in its website, services,
                  business practices or applicable legal requirements.
                </p>

                <p>
                  The updated version will be published on this page with
                  an updated effective date where appropriate.
                </p>

              </LegalSection>


              {/* Website Disclaimer */}
              {/* <section className="rounded-2xl bg-[#1a1a1a] p-8 text-white sm:p-10">

                <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a00]">
                  WEBSITE DISCLAIMER
                </span>

                <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
                  Information on this website is provided for general
                  informational and business purposes. Services, products,
                  specifications, availability, pricing and delivery
                  timelines may vary according to project requirements
                  and are subject to confirmation in the applicable
                  proposal, quotation or agreement. Nothing on this
                  website constitutes a binding offer unless expressly
                  stated otherwise.
                </p>

              </section> */}

            </div>

          </article>


          {/* =====================================================
              CONTACT CTA
          ===================================================== */}
          <section className="mt-20 rounded-2xl bg-[#1a1a1a] p-8 text-center text-white sm:p-12">

            <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a00]">
              QUESTIONS?
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Need More Information?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              If you have questions about our Privacy Policy, Terms &
              Conditions or how we handle website enquiries, please
              contact the Promaxify team.
            </p>

            <Link
              to="/contact"
              className="
                group
                mx-auto
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-[#ff7a00]
                px-7
                py-4
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#e96d00]
              "
            >
              Contact Promaxify

              <FaArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </section>

        </div>

      </section>


      {/* =========================================================
          LEGAL NOTE
      ========================================================= */}
      {/* <section className="bg-[#1a1a1a] px-6 py-8 text-center">

        <p className="mx-auto max-w-3xl text-xs leading-6 text-gray-500">
          This website-facing legal content is intended to provide
          general information and should be reviewed and finalized by a
          qualified legal professional before publication. PMSL should
          ensure that the final documents accurately reflect its actual
          business practices, data processing, vendors, cookies, referral
          arrangements and applicable laws.
        </p>

      </section> */}

    </main>
  );
}


/* =========================================================
   REUSABLE LEGAL SECTION COMPONENT
========================================================= */

function LegalSection({ number, title, children }) {
  return (
    <section>

      <div className="flex items-start gap-5">

        <div className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#ff7a00]/10
          text-sm
          font-bold
          text-[#ff7a00]
        ">
          {number}
        </div>

        <div className="min-w-0 flex-1">

          <h3 className="text-xl font-bold text-[#222] sm:text-2xl">
            {title}
          </h3>

          <div
            className="
              mt-5
              space-y-4
              text-sm
              leading-7
              text-gray-600
              sm:text-base
              sm:leading-8

              [&_ul]:ml-5
              [&_ul]:list-disc
              [&_ul]:space-y-2

              [&_li]:pl-1

              [&_strong]:font-semibold
              [&_strong]:text-[#222]
            "
          >
            {children}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Legal;