import React, { useMemo, useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const faqData = [
    {
      id: 1,
      category: "General",
      question: "What does Promaxify do?",
      answer:
        "Promaxify provides customized corporate solutions including apparel, corporate gifting, branding products, and other customized solutions for businesses and organizations.",
    },
    {
      id: 2,
      category: "General",
      question: "Who can use Promaxify's services?",
      answer:
        "Our solutions are designed for businesses, startups, corporate teams, educational institutions, events, organizations, and anyone looking for professionally customized products.",
    },
    {
      id: 3,
      category: "General",
      question: "Do you provide customized solutions?",
      answer:
        "Yes. We create customized solutions based on your brand identity, requirements, quantity, budget, and delivery needs.",
    },

    {
      id: 4,
      category: "Apparel",
      question: "What types of apparel can you customize?",
      answer:
        "We offer customized T-shirts, polo shirts, jackets, hoodies, caps, uniforms, and other apparel options suitable for corporate teams and organizations.",
    },
    {
      id: 5,
      category: "Apparel",
      question: "Can you add our company logo and branding?",
      answer:
        "Yes. We can customize apparel with your company logo, colors, designs, text, and other branding requirements.",
    },
    {
      id: 6,
      category: "Apparel",
      question: "Can we choose different colors and sizes?",
      answer:
        "Yes. Product colors, sizes, designs, and branding details can be discussed based on your specific project requirements.",
    },
    {
      id: 7,
      category: "Apparel",
      question: "Can I request a sample before placing a bulk order?",
      answer:
        "Sample availability depends on the product and project requirements. Our team can guide you through the sample and approval process.",
    },

    {
      id: 8,
      category: "Corporate Gifting",
      question: "What types of corporate gifts do you provide?",
      answer:
        "We provide a range of customizable corporate gifting solutions that can be selected according to your brand, occasion, audience, and budget.",
    },
    {
      id: 9,
      category: "Corporate Gifting",
      question: "Can corporate gifts be customized with our branding?",
      answer:
        "Yes. Corporate gifts can be customized with logos, brand colors, names, messages, packaging, and other branding elements depending on the product.",
    },
    {
      id: 10,
      category: "Corporate Gifting",
      question: "Do you handle bulk corporate gifting orders?",
      answer:
        "Yes. We support bulk requirements for corporate events, employee gifting, client gifting, campaigns, and other organizational needs.",
    },

    {
      id: 11,
      category: "Orders & Pricing",
      question: "Is there a minimum order quantity?",
      answer:
        "Minimum order quantities can vary depending on the product, customization method, and project requirements. Contact our team for specific details.",
    },
    {
      id: 12,
      category: "Orders & Pricing",
      question: "How is the pricing calculated?",
      answer:
        "Pricing depends on the product, quantity, customization, material, packaging, delivery requirements, and other project specifications.",
    },
    {
      id: 13,
      category: "Orders & Pricing",
      question: "How can I request a quotation?",
      answer:
        "You can submit your requirements through our Request a Proposal page. Our team can then review your requirements and provide the appropriate quotation.",
    },
    {
      id: 14,
      category: "Orders & Pricing",
      question: "How long does production take?",
      answer:
        "Production time depends on the product, quantity, customization, and project complexity. Timelines are discussed during the quotation and order process.",
    },

    {
      id: 15,
      category: "Delivery",
      question: "Do you provide delivery across India?",
      answer:
        "Yes. We provide Pan-India delivery for eligible products and projects.",
    },
    {
      id: 16,
      category: "Delivery",
      question: "Can you deliver orders to multiple locations?",
      answer:
        "Yes. Multiple-location delivery can be discussed for corporate and organizational orders based on the project requirements.",
    },
    {
      id: 17,
      category: "Delivery",
      question: "How can I track my order?",
      answer:
        "Our team will provide the relevant delivery or shipment information based on your order and delivery arrangement.",
    },

    {
      id: 18,
      category: "Partnership",
      question: "How can I become a Promaxify partner?",
      answer:
        "You can visit our Become a Partner page and submit your business details and requirements. Our team will review your request and get in touch with you.",
    },
    {
      id: 19,
      category: "Partnership",
      question: "How can I request a proposal?",
      answer:
        "You can use our Request a Proposal page to share your requirements, estimated quantity, customization needs, and other project details.",
    },
    {
      id: 20,
      category: "Partnership",
      question: "How can I contact Promaxify?",
      answer:
        "You can contact us through our Contact page for general enquiries, project discussions, partnership opportunities, and customized requirements.",
    },
  ];

  const categories = [
    "All",
    "General",
    "Apparel",
    "Corporate Gifting",
    "Orders & Pricing",
    "Delivery",
    "Partnership",
  ];

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
    <main className="bg-white text-[#111111]">

      {/* ================= HERO ================= */}
      <section className="bg-[#111111] text-white px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto">

          <div className="max-w-4xl">

            <p className="text-[#ff7a00] text-sm font-bold uppercase tracking-[0.25em] mb-6">
              FAQs
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95]">
              Frequently
              <span className="block text-[#ff7a00]">
                Asked Questions
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
          <div className="mb-10">

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

          </div>


          {/* ================= CATEGORIES ================= */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">

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

          </div>


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
                            {faq.category}
                          </span>

                          <h3 className="text-base md:text-lg font-bold text-[#111111] mt-1">
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

                          <p className="text-gray-600 text-sm md:text-base leading-7 max-w-3xl">
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