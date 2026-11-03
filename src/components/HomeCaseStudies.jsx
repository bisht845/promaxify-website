
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { fetchPublicCaseStudies } from "../services/api";

export default function HomeCaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublicCaseStudies().then((res) => {
      if (res.success && res.data && res.data.length > 0) {
        setCaseStudies(res.data.slice(0, 5));
      }
      setLoading(false);
    });
  }, []);

  if (loading && caseStudies.length === 0) {
    return null;
  }

  // Double array for seamless infinite marquee scroll
  const marqueeItems = [...caseStudies, ...caseStudies];

  return (
    <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-gray-800/60">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#ff7a00]/10 rounded-full blur-[140px]" />

      <div className="max-w-[1440px] mx-auto mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-0.5 w-10 bg-[#ff7a00]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7a00]">
              Proven Results
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-white tracking-tight">
            Advanced <span className="text-[#ff7a00]">Case Studies</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-3 leading-relaxed">
            Real enterprise transformations, lead generation growth, and brand amplification engineered by Promaxify.
          </p>
        </div>

        <Link
          to="/case-studies"
          className="self-start md:self-end inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider border-b-2 border-[#ff7a00] pb-1 hover:text-[#ff7a00] transition group"
        >
          Explore All Case Studies
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="overflow-hidden testimonials-wrapper relative z-10">
        <div className="flex gap-6 w-max animate-scrollTestimonials">
          {marqueeItems.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              to="/case-studies"
              className="
                group relative shrink-0
                w-[300px] sm:w-[380px] h-[400px]
                   overflow-hidden
                bg-[#1a1a1a] border border-gray-800
                hover:border-[#ff7a00] transition-all duration-500
                hover:shadow-[0_20px_50px_rgba(255,122,0,0.2)]
                flex flex-col justify-between
              "
            >
              {/* Card Image */}
              <div className="absolute inset-0">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
              </div>

              {/* Top Badges */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="bg-[#ff7a00] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {item.industry}
                </span>
                <span className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#ff7a00] transition">
                  <ArrowRight size={16} className="group-hover:rotate-[-45deg] transition" />
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-6 space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Client: <span className="text-white">{item.client_name}</span>
                </p>
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#ff7a00] transition">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
                  {item.challenge}
                </p>

                {/* Micro Metric Preview */}
                {Array.isArray(item.before_after_metrics) && item.before_after_metrics.length > 0 && (
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-400">
                      {item.before_after_metrics[0].label}
                    </span>
                    <span className="font-bold text-emerald-400">
                      {item.before_after_metrics[0].before} → {item.before_after_metrics[0].after}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}