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
      <section className="border-b border-white/10 bg-[#202020]">
        <div className="mx-auto max-w-[1200px] px-6 py-6 sm:px-10 lg:px-16">

          <div className="flex flex-wrap gap-3">

            <a
              href="#privacy-policy"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/10
                bg-[#1a1a1a]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:border-[#ff7a00]/50
                hover:text-[#ff7a00]
              "
            >
              <FaShieldHalved />
              Privacy Policy
            </a>

            <a
              href="#terms-conditions"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/10
                bg-[#1a1a1a]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:border-[#ff7a00]/50
                hover:text-[#ff7a00]
              "
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