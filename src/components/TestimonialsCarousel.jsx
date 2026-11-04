import  { useEffect, useState } from "react";
import { fetchPublicTestimonials, mediaUrl } from "../services/api";
import { Quote } from "lucide-react";

function Avatar({ name, image }) {
  const [failed, setFailed] = useState(false);
  const initials = (name || "?")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (image && !failed) {
    return (
      <img
        src={mediaUrl(image)}
        alt={name}
        onError={() => setFailed(true)}
        className="w-[60px] h-[60px] rounded-full object-cover grayscale shrink-0"
      />
    );
  }
  return (
    <div className="w-[60px] h-[60px] rounded-full bg-[#ff7a00]/15 text-[#ff7a00] font-bold flex items-center justify-center shrink-0">
      {initials}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchPublicTestimonials()
      .then((res) => {
        if (res.success && Array.isArray(res.data)) setItems(res.data);
      })
      .catch(() => {});
  }, []);

  if (items.length === 0) return null;

  // Repeat the list so one half is always wider than the screen, then double it for a seamless loop
  const repeats = Math.max(1, Math.ceil(6 / items.length));
  const half = Array.from({ length: repeats }).flatMap(() => items);
  const track = [...half, ...half];
  const duration = half.length * 7; // seconds per full loop

  return (
    <section className="relative overflow-hidden">
      <style>{`
        @keyframes testimonials-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .testimonials-track { animation: testimonials-right ${duration}s linear infinite; }
        .testimonials-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="absolute top-6 right-10 text-[260px] leading-none font-serif text-white/[0.03] select-none pointer-events-none">
        &rdquo;
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-4 relative z-10">
        <p className="text-[#ff7a00] text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Trusted by our clients
        </p>
        <h2 className="text-4xl sm:text-4xl font-black text-white">
          Client <span className="text-[#ff7a00]">Success</span>
        </h2>
      </div>

      <div className="relative z-10">
        <div className="testimonials-track flex w-max gap-[30px]">
          {track.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[340px] sm:w-[375px] shrink-0 bg-[#1e1e1e] border border-transparent hover:border-[#ff7a00] transition-colors p-10 flex flex-col justify-between "
            >
              <div>
                <Quote size={46} className="text-[#ff7a00] mb-6" fill="currentColor" />
                <p className="text-gray-300 leading-8">&ldquo;{t.message}&rdquo;</p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <Avatar name={t.client_name} image={t.image} />
                <div>
                  <h4 className="text-[#ff7a00] font-bold uppercase tracking-wide text-sm">
                    {t.client_name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {[t.designation, t.company].filter(Boolean).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}