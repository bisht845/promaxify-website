
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchCaseStudyDetail } from "../services/api";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Quote } from "lucide-react";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCaseStudyDetail(slug).then((res) => {
      if (res.success && res.data) {
        setData(res.data);
      }
      setLoading(false);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center text-orange-500">
        <div className="w-10 h-10 border-4 border-[#ff7a00] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-[#ff7a00] underline">
          View all case studies
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${data.title} | Case Study - Promaxify`}</title>
        <meta
          name="description"
          content={`Read how Promaxify delivered tangible results for ${data.client_name}: ${data.title}`}
        />
      </Helmet>

      <main className="bg-[#111111] text-white font-sans antialiased min-h-screen pb-24">
        {/* Hero Section */}
        <header
          className="relative py-28 md:py-36 px-6 md:px-16 flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(17,17,17,0.85), rgba(17,17,17,0.98)), url("${
              data.hero_image || data.thumbnail
            }")`,
          }}
        >
          <div className="max-w-[1440px] mx-auto w-full relative z-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#ff7a00] mb-8 transition"
            >
              <ArrowLeft size={16} /> All Case Studies
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-[#ff7a00] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {data.industry}
              </span>
              <span className="text-gray-400 text-xs font-semibold">
                Client: <strong className="text-white">{data.client_name}</strong>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-5xl">
              {data.title}
            </h1>
          </div>
        </header>

        {/* Before / After Metrics Row */}
        {/* {data.before_after_metrics && data.before_after_metrics.length > 0 && (
          <section className="bg-[#181818] border-y border-gray-800 py-12 px-6 md:px-16">
            <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.before_after_metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-[#202020] border border-gray-800 p-6 rounded-2xl flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {m.label}
                    </span>
                    <div className="flex items-baseline justify-between mt-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-red-400 block font-semibold">
                          Before
                        </span>
                        <span className="text-xl font-bold text-gray-400 line-through">
                          {m.before}
                        </span>
                      </div>
                      <ArrowRight className="text-orange-500" size={20} />
                      <div className="text-right">
                        <span className="text-[11px] uppercase tracking-wider text-emerald-400 block font-semibold">
                          After
                        </span>
                        <span className="text-2xl font-black text-emerald-400">
                          {m.after}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* Story Sections */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-1 bg-red-500 rounded" />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                  The Problem & Bottlenecks
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What Was Holding The Client Back?
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {data.challenge}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-1 bg-[#ff7a00] rounded" />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff7a00]">
                  The Promaxify Strategy
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Engineered Solution & Execution
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {data.strategy}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-1 bg-emerald-500 rounded" />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Business Impact
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Measurable Growth & Retention
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {data.results}
              </p>
            </div>

            {/* Visual Performance Chart */}
            {/* {data.chart_data?.datasets?.[0]?.values?.length > 0 && (
              <div className="bg-[#181818] border border-gray-800 p-8 rounded-3xl">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="text-orange-500" size={20} />
                  <h4 className="text-lg font-bold text-white">
                    {data.chart_data.datasets[0].name || "Growth Trendline"}
                  </h4>
                </div>
                <div className="h-44 flex items-end justify-between gap-4 pt-6">
                  {data.chart_data.datasets[0].values.map((val, idx) => {
                    const max = Math.max(...data.chart_data.datasets[0].values, 1);
                    const pct = Math.round((val / max) * 100);
                    const label = data.chart_data.labels?.[idx] || `Step ${idx + 1}`;
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <span className="text-xs font-bold text-orange-400">{val}</span>
                        <div
                          style={{ height: `${Math.max(pct, 15)}%` }}
                          className="w-full max-w-[44px] bg-gradient-to-t from-orange-600 to-[#ff7a00] rounded-t-lg"
                        />
                        <span className="text-[11px] text-gray-400">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )} */}

            {/* Image Gallery */}
            {data.gallery && data.gallery.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Project Showcase</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.gallery.map((img, i) => (
                    <div key={i} className="h-64 rounded-2xl overflow-hidden border border-gray-800">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial Quote */}
            {data.testimonial_quote && (
              <div className="bg-[#1f1d1b] border-l-4 border-[#ff7a00] p-8 rounded-r-3xl relative">
                <Quote className="text-orange-500/20 absolute right-6 top-6" size={48} />
                <p className="text-gray-200 text-lg italic leading-relaxed relative z-10">
                  "{data.testimonial_quote}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h5 className="font-bold text-white">{data.testimonial_author}</h5>
                  <p className="text-xs text-orange-400">{data.testimonial_role}</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#181818] border border-gray-800 p-8 rounded-3xl sticky top-28">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a00]">
                Ready For Similar Growth?
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4 leading-tight">
                Let's Build Your Custom Roadmap
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Consult with our strategy and branding team to design a targeted solution for your organization.
              </p>
              <Link
                to="/contact"
                className="w-full py-4 bg-[#ff7a00] hover:bg-orange-600 text-white font-bold rounded-xl text-center block text-xs uppercase tracking-wider transition shadow-lg shadow-orange-500/20"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        {data.related && data.related.length > 0 && (
          <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-16 border-t border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a00]">
                  More Success Stories
                </span>
                <h3 className="text-2xl font-bold text-white">Related Case Studies</h3>
              </div>
              <Link
                to="/case-studies"
                className="text-xs font-bold text-orange-400 hover:underline uppercase tracking-wider"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/case-studies/${rel.slug}`}
                  className="bg-[#181818] border border-gray-800 hover:border-[#ff7a00] rounded-2xl overflow-hidden group transition flex flex-col justify-between"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={rel.thumbnail}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                      {rel.industry}
                    </span>
                    <h4 className="font-bold text-white text-base mt-1 group-hover:text-orange-400 transition">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">Client: {rel.client_name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}