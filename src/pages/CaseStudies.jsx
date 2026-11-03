
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchPublicCaseStudies } from "../services/api";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublicCaseStudies().then((res) => {
      if (res.success && res.data) {
        setCaseStudies(res.data);
      }
      setLoading(false);
    });
  }, []);

  const industries = [
    "All",
    ...new Set(caseStudies.map((c) => c.industry).filter(Boolean)),
  ];

  const filtered =
    selectedIndustry === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === selectedIndustry);

  return (
    <>
      <Helmet>
        <title>Case Studies & Client Transformations | Promaxify</title>
        <meta
          name="description"
          content="Explore how Promaxify drives business growth, high-converting lead generation, and impactful corporate branding across industries."
        />
      </Helmet>

      <main className="bg-[#111111] text-white min-h-screen pb-24 font-sans">
        {/* Header */}
        <header
          className="relative py-28 md:py-36 px-6 md:px-16 flex justify-center items-center text-center bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(17,17,17,0.85), rgba(17,17,17,0.95)), url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-[#ff7a00] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Real Impact. Measurable Growth.
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">
              Client <span className="text-[#ff7a00]">Case Studies</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover how we partner with enterprises and scale-ups to solve branding hurdles, accelerate customer acquisition, and orchestrate memorable corporate experiences.
            </p>
          </div>
              <div className="pointer-events-none absolute -bottom-2  right-55 text-[10vw] font-black uppercase leading-none text-white/[0.05]">

              PROMAXIFY
            </div>
        </header>

        {/* Filter Bar */}
        <section className="bg-[#181818] border-b border-gray-800 py-6 px-6">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-start gap-3">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  selectedIndustry === ind
                    ? "bg-[#ff7a00] text-white shadow-lg shadow-orange-500/20"
                    : "bg-[#222] text-gray-400 hover:text-white"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
          {loading ? (
            <div className="text-center py-20 text-orange-500">
              <div className="w-10 h-10 border-4 border-[#ff7a00] border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((item) => (
                <Link
                  key={item.id}
                  to="#"
                  className="bg-[#181818] border border-gray-800 hover:border-[#ff7a00] rounded-3xl overflow-hidden group transition duration-500 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(255,122,0,0.15)]"
                >
                  <div>
                    <div className="h-60 relative overflow-hidden bg-black/40">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#ff7a00] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                          {item.industry}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Client: <span className="text-white">{item.client_name}</span>
                      </p>
                      <h3 className="text-xl font-bold text-white mt-2 group-hover:text-[#ff7a00] transition leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 border-t border-gray-800/80 flex items-center justify-between mt-4">
                    <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center py-20 text-gray-500">No case studies found for this category.</p>
          )}
        </section>
              {/* CTA SECTION - Below Case Studies */}
      <div className="max-w-[1440px] mx-auto mt-8 relative z-10">
        <div className="bg-[#333333] px-6 sm:px-10 py-12 flex flex-col md:flex-row items-center gap-8">

          {/* CTA Content */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Have a similar requirement?
            </h3>

            <p className="text-gray-300 text-base sm:text-lg">
              Share your brief and get a tailored proposal.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:ml-auto">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#ff7a00] text-[#fff] font-bold text-sm rounded-md hover:bg-[#ff922e] transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              Request Proposal
            </Link>

          
            <a
              href="https://wa.me/919625754262"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-bold text-sm rounded-md hover:bg-[#1DA851] transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <MessageCircle size={19} />
              WhatsApp Us
            </a>


          </div>

        </div>
      </div>
      </main>
    </>
  );
}