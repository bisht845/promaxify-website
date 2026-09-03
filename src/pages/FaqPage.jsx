import React, { useMemo, useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const faqData = [
    {
      id: 1,
      category: "General",
      question: "What is the minimum order quantity (MOQ) for corporate gifts and branded merchandise?",
      answer:
        "MOQs vary by product — most corporate gifting and branded apparel items start at 50 units, while premium or highly customized pieces may have a higher threshold. Delegate kits and event merchandise for MICE programs are typically quoted per headcount, with no fixed minimum for a full kit order. Share your requirement through the enquiry form and we'll confirm the exact MOQ for your product mix.",
    },
    {
      id: 2,
      category: "General",
      question: "How long does it take to receive an order after confirmation?",
      answer:
        "Standard turnaround is 1–3 weeks from design approval, depending on product complexity and order volume. Simple branded items (notebooks, drinkware, apparel) are usually faster; multi-item kits or heavily customized pieces take longer. We flag realistic timelines at the quote stage so there are no surprises closer to your event or delivery date.",
    },
    {
      id: 3,
      category: "General",
      question: "Can we see a sample before placing a bulk order?",
      answer:
        "Yes. Physical or digital samples can be arranged for most product categories before a bulk order is confirmed, so you can check quality, branding placement, and finish. Sampling timelines are shared upfront and factored into the overall project schedule.",
    },

    {
      id: 4,
      category: "Apparel",
      question: "Do you deliver across India, or only in specific cities?",
      answer:
        "We deliver pan-India, including to event venues, conference sites, and corporate offices outside major metros. For multi-city rollouts — such as a dealer incentive program or a multi-location employee welcome kit — deliveries can be coordinated and staggered by location on request.",
    },
    {
      id: 5,
      category: "Apparel",
      question: "What kind of companies and industries does Promaxify work with?",
      answer:
        "Our client base spans event and MICE agencies, travel and hospitality brands, large corporates and manufacturing companies, and organizations across media, education, and other sectors. Whether it's a delegate kit for a conference or a dealer engagement kit for an industrial account, our team tailors the product mix to the industry and occasion..",
    },
    {
      id: 6,
      category: "Apparel",
      question: "How does the branding and customization process work?",
      answer:
        "Once a product and quantity are finalized, our design team shares a branding mock-up (logo placement, colors, print or embroidery method) for your approval before production begins. Common customization methods include screen printing, embroidery, engraving, and digital printing, chosen based on the product and finish you need.",
    },
    {
      id: 7,
      category: "Apparel",
      question: "How do we request a quote, and what information should we share?",
      answer:
        "Use the Quick Enquiry form for an initial conversation, or Request a Proposal for a detailed quote. Sharing your estimated quantity, budget range, project timeline, and the products or service you're interested in helps us return an accurate quote faster, usually within 3–7 business days.",
    },

    {
      id: 8,
      category: "Corporate Gifting",
      question: "What are the payment terms for corporate orders?",
      answer:
        "Payment terms are typically a percentage advance to confirm production, with the balance due before or on dispatch, though this can be discussed for larger or recurring corporate accounts. Exact terms are confirmed in the proposal stage before an order is finalized.",
    },
    {
      id: 9,
      category: "Corporate Gifting",
      question: "Can you handle urgent or last-minute event requirements?",
      answer:
        "We can often accommodate rush timelines for event and MICE merchandise, subject to product availability and order size — reach out directly with your event date and requirement, and we'll confirm what's feasible rather than quote a generic turnaround.",
    },
    {
      id: 10,
      category: "Corporate Gifting",
      question: "What happens if there's a defect or issue with the delivered products?",
      answer:
        "Every order goes through a quality check before dispatch. If an issue is found after delivery, reach out within 7 days with details and photos, and we'll arrange a replacement or resolution for the affected units. Our aim is to catch quality concerns before they reach you, not after.",
    },

    // {
    //   id: 11,
    //   category: "Orders & Pricing",
    //   question: "Is there a minimum order quantity?",
    //   answer:
    //     "Minimum order quantities can vary depending on the product, customization method, and project requirements. Contact our team for specific details.",
    // },
    // {
    //   id: 12,
    //   category: "Orders & Pricing",
    //   question: "How is the pricing calculated?",
    //   answer:
    //     "Pricing depends on the product, quantity, customization, material, packaging, delivery requirements, and other project specifications.",
    // },
    // {
    //   id: 13,
    //   category: "Orders & Pricing",
    //   question: "How can I request a quotation?",
    //   answer:
    //     "You can submit your requirements through our Request a Proposal page. Our team can then review your requirements and provide the appropriate quotation.",
    // },
    // {
    //   id: 14,
    //   category: "Orders & Pricing",
    //   question: "How long does production take?",
    //   answer:
    //     "Production time depends on the product, quantity, customization, and project complexity. Timelines are discussed during the quotation and order process.",
    // },

    // {
    //   id: 15,
    //   category: "Delivery",
    //   question: "Do you provide delivery across India?",
    //   answer:
    //     "Yes. We provide Pan-India delivery for eligible products and projects.",
    // },
    // {
    //   id: 16,
    //   category: "Delivery",
    //   question: "Can you deliver orders to multiple locations?",
    //   answer:
    //     "Yes. Multiple-location delivery can be discussed for corporate and organizational orders based on the project requirements.",
    // },
    // {
    //   id: 17,
    //   category: "Delivery",
    //   question: "How can I track my order?",
    //   answer:
    //     "Our team will provide the relevant delivery or shipment information based on your order and delivery arrangement.",
    // },

    // {
    //   id: 18,
    //   category: "Partnership",
    //   question: "How can I become a Promaxify partner?",
    //   answer:
    //     "You can visit our Become a Partner page and submit your business details and requirements. Our team will review your request and get in touch with you.",
    // },
    // {
    //   id: 19,
    //   category: "Partnership",
    //   question: "How can I request a proposal?",
    //   answer:
    //     "You can use our Request a Proposal page to share your requirements, estimated quantity, customization needs, and other project details.",
    // },
    // {
    //   id: 20,
    //   category: "Partnership",
    //   question: "How can I contact Promaxify?",
    //   answer:
    //     "You can contact us through our Contact page for general enquiries, project discussions, partnership opportunities, and customized requirements.",
    // },
  ];

  // const categories = [
  //   "All",
  //   "General",
  //   "Apparel",
  //   "Corporate Gifting",
  //   "Orders & Pricing",
  //   "Delivery",
  //   "Partnership",
  // ];

    const filteredFAQs = useMemo(() => {
      return faqData.filter((faq) => {
        const matchesCategory =
          activeCategory === "All" || faq.category === activeCategory;

        const searchText = search.toLowerCase();

        const matchesSearch =
          faq.question.toLowerCase().includes(searchText) ||
          faq.answer.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
      });
    }, [activeCategory, search]);

    const toggleFAQ = (id) => {
      setOpenIndex(openIndex === id ? null : id);
    };

  return (
    <main className="bg-[#1B1B1B] text-[#111111]">

      {/* ================= HERO ================= */}
      <section className="bg-[#151515] text-white px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto">

          <div className="max-w-4xl">

            <p className="text-[#ff7a00] text-sm font-bold uppercase tracking-[0.25em] mb-6">
              FAQs
            </p>

            <h1 className="text-4xl md:text-3xl lg:text-4xl font-black tracking-tight leading-[0.95]">
              Frequently
              <span className=" text-[#ff7a00]">
              {" "}  Asked Questions
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-8 leading-relaxed">
              Find answers to common questions about our customized
              corporate solutions, apparel, gifting, orders, delivery,
              and partnerships.
            </p>

          </div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">

        <div className="max-w-[1100px] mx-auto">

          {/* Search */}
          {/* <div className="mb-10">

            <div className="relative">

              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setOpenIndex(null);
                }}
                placeholder="Search your question..."
                className="w-full bg-gray-100 border border-gray-200 rounded-2xl py-5 pl-14 pr-6 outline-none focus:border-[#ff7a00] focus:ring-2 focus:ring-[#ff7a00]/20 transition-all text-base"
              />

            </div>

          </div> */}


          {/* ================= CATEGORIES ================= */}
          {/* <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`whitespace-nowrap px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#ff7a00] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>

            ))}

          </div> */}


          {/* ================= RESULTS ================= */}
          <div className="space-y-4">

            {filteredFAQs.length > 0 ? (

              filteredFAQs.map((faq) => {

                const isOpen = openIndex === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-[#ff7a00] shadow-lg shadow-orange-500/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >

                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between gap-6 text-left p-6 md:p-7"
                    >

                      <div className="flex items-start gap-4">

                        <span
                          className={`hidden sm:flex shrink-0 w-8 h-8 rounded-full items-center justify-center text-xs font-bold transition-all duration-300 ${
                            isOpen
                              ? "bg-[#ff7a00] text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {faq.id}
                        </span>

                        <div>

                          <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#ff7a00]">
                            {/* {faq.category} */}
                          </span>

                          <h3 className="text-base md:text-lg font-bold text-[#ffff] mt-1">
                            {faq.question}
                          </h3>

                        </div>

                      </div>


                      {/* Plus / Minus */}
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#ff7a00] text-white rotate-180"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >

                        {isOpen ? (

                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 12h14"
                            />
                          </svg>

                        ) : (

                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 5v14m-7-7h14"
                            />
                          </svg>

                        )}

                      </span>

                    </button>


                    {/* Answer */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="px-6 md:px-7 pb-7 pl-6 sm:pl-[4.5rem]">

                          <div className="h-px bg-gray-100 mb-5" />

                          <p className="text-white text-sm md:text-base leading-7 max-w-3xl">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })

            ) : (

              /* ================= NO RESULTS ================= */
              <div className="text-center py-20 border border-gray-200 rounded-2xl">

                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gray-100 flex items-center justify-center">

                  <svg
                    className="w-7 h-7 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                    />
                  </svg>

                </div>

                <h3 className="text-xl font-bold mb-2">
                  No questions found
                </h3>

                <p className="text-gray-500">
                  Try another search or select a different category.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#ff7a00] px-6 md:px-12 lg:px-16 py-20 md:py-24">

        <div className="max-w-[1200px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

            <div className="text-white max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white/70">
                Still Have Questions?
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Let's talk about
                <span className="block">
                  your requirements.
                </span>
              </h2>

              <p className="mt-5 text-white/80 leading-relaxed">
                Have a specific requirement that isn't covered here?
                Our team is ready to help you find the right solution.
              </p>

            </div>


            <div className="flex flex-col sm:flex-row gap-3 shrink-0">

              <a
                href="/contact"
                className="bg-[#111111] text-white px-7 py-4 rounded-full font-bold text-sm text-center hover:bg-black transition-all duration-300"
              >
                Contact Us
              </a>

              <a
                href="/proposal"
                className="bg-white text-[#111111] px-7 py-4 rounded-full font-bold text-sm text-center hover:bg-gray-100 transition-all duration-300"
              >
                Request a Proposal
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default FAQ;