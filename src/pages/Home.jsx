import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from "lucide-react"; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  corporateSolutions,
  engagementSolutions,
  insightsData,
} from "../data/main";
const clientLogos = [
  "Adsparkx.png",
  "Ascelepius wellness.png",
  "Awign.png",
  "birla white.png",
  "BMP Ai.png",
  "carex.png",
  "circle work.png",
  "Crompton.png",
  "Dalmia.png",
  "Finsure.png",

  "Fresenius Kabi.png",
  "fujifilm.png",
  "HCL.png",
  "Hunch.png",
  "jsw paints.png",
  "kjs.png",
  "m3m.png",
  "op jindal.png",
  "saint gobain.png",
  "systra.png",
];

const firstRowLogos = clientLogos.slice(0, 10);
const secondRowLogos = clientLogos.slice(10, 20);

const recentWork = [
  ...corporateSolutions,
  ...engagementSolutions,
].slice(0, 8);

const insightData = [...insightsData].slice(0,4)
const testimonials = [
  {
    id: 1,
    review:
      "Promaxify completely transformed our end-of-year gifting. The quality and attention to detail were unmatched. They are our go-to partner now.",
    name: "Sarah Jenkins",
    position: "HR Director, TechCorp",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    featured: true,
  },
  {
    id: 2,
    review:
      "Their end-to-end event merchandise solution took a massive load off our team. Everything was delivered on time and looked incredibly premium.",
    name: "David Chen",
    position: "VP Marketing, NexaTech",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    featured: false,
  },
  {
    id: 3,
    review:
      "We've worked with many vendors, but Promaxify's creative approach to our dealer incentive program yielded the highest engagement we've seen.",
    name: "Anita Sharma",
    position: "Channel Head, Inventis",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    featured: false,
  },
];

  const infiniteTestimonials = [...testimonials, ...testimonials];

const companies = [
    { name: 'PrintCraft Pro', id: 1 },
    { name: 'DesignSphere', id: 2 },
    { name: 'LogisticsPlus', id: 3 },
    { name: 'EventHorizon', id: 4 },
  ];


const Home = () => {
  const sliderImages = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 2000); 

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  
// animation part of experience digits 
const sectionRef = useRef(null);

const [start, setStart] = useState(false);
const [count, setCount] = useState({
  years: 0,
  brands: 0,
  units: 0,
  delivery: 0,
});

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStart(true);
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(sectionRef.current);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!start) return;

  const duration = 1500;
  const startTime = performance.now();

  const animate = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    setCount({
      years: Math.floor(ease * 15),
      brands: Math.floor(ease * 500),
      units: Math.floor(ease * 50000),
      delivery: Math.floor(ease * 100),
    });

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [start]);

  return (
    // SEO 
    <>
      <Helmet>
    <title>Promaxify | Corporate Marketing & Branding Solutions</title>

    <meta
      name="description"
      content="Promaxify Marketing Solutions delivers customized corporate branding, promotional products, apparel, events, MICE and business solutions tailored to your brand."
    />
  </Helmet>
    <div className="font-sans text-gray-900 bg-white">


      {/* Hero Section */}
      <header className="relative text-white min-h-[600px] flex flex-col justify-center overflow-hidden">

        {/* Background Image Layers for Smooth Crossfade */}
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.75), rgba(17, 17, 17, 0.95)), url("${img}")`
            }}
          />
        ))}

        {/* Content Wrapper (Needs relative z-10 to sit above absolute background images) */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-1 py-15">
          <div className="max-w-4xl">
            {/* Subheading */}
            <div className="flex items-center space-x-4 mb-6 mt-12">
              <div className="h-0.5 w-16 bg-[#ff7a00]"></div>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-gray-100">
                Corporate Branding. Lasting Impressions.
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-[4rem] font-black uppercase leading-[1.05] mb-8 tracking-tight text-white">
              Brands That <br />
              <span className="text-[#ff7a00]">Get Remembered</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
              Promaxify Marketing Solutions specializes in premium corporate branding, delivering customized promotional merchandise, tailored gifting, and engagement-driven programs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/services" className="bg-[#ff7a00] hover:bg-orange-600 text-white px-8 py-4 font-bold text-sm tracking-wider uppercase transition-colors">
                Explore Solutions
              </Link>
              <Link to="insights" className="bg-transparent text-gray-500 hover:text-white py-4 font-bold text-sm tracking-wider uppercase transition-all">
                View Our Work
              </Link>
            </div>

            {/* Dynamic Slider Indicators */}
            <div className="flex gap-2 mt-32">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 ${currentSlide === index ? 'w-10 bg-[#ff7a00]' : 'w-8 bg-gray-600 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#1A1A1A] py-24">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-[45%] h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#ff7a00]/10 blur-[140px]" />

        {/* Section Heading */}
        <div className="relative z-10 mx-auto mb-16 max-w-4xl px-6 text-center">

          {/* Top Label */}
          <div className="mb-6 flex items-center justify-center gap-5">
            <span className="h-px w-12 bg-[#ff7a00]/70"></span>

            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#ff7a00]">
              Trusted Partners
            </p>

            <span className="h-px w-12 bg-[#ff7a00]/70"></span>
          </div>

          {/* Main Heading */}
          <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-5xl">
            Brands That <br className="hidden md:block" />

            Choose <span className="text-[#ff7a00]">Promaxify</span>
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            We are proud to work with businesses and organizations that trust
            Promaxify to create meaningful brand experiences.
          </p>

          {/* Small Orange Line */}
          <div className="mx-auto mt-7 h-[2px] w-20 bg-[#ff7a00]" />
        </div>


        {/* FIRST ROW */}
        <div className="relative mb-8 overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#1A1A1A] to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent" />

          <div className="flex w-max gap-6 animate-[scrollRight_25s_linear_infinite]">
            {firstRowLogos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="
                  group flex h-[130px] w-[240px] shrink-0
                  items-center justify-center rounded-2xl
                  border border-[#ff7a00]/30
                  bg-[#222222] px-8
                  shadow-[0_0_20px_rgba(255,122,0,0.08)]
                  transition-all duration-500
                  hover:border-[#ff7a00]
                  hover:shadow-[0_10px_30px_rgba(255,122,0,0.25)]
                "
              >
                <img
                  src={`${import.meta.env.BASE_URL}client-logos/${encodeURI(logo)}`}
                  alt={`Promaxify client ${index + 1}`}
                  className="
                    max-h-[70px]
                    max-w-[160px]
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>
            ))}
          </div>
        </div>


        {/* MIDDLE DECORATION */}
        <div className="relative z-10 my-8 flex items-center justify-center gap-4">

          <span className="h-px w-16 bg-[#ff7a00]/60"></span>

          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff7a00]"></span>
            <span className="h-2 w-2 rounded-full bg-[#ff7a00]/70"></span>
            <span className="h-2 w-2 rounded-full bg-[#ff7a00]/40"></span>
          </div>

          <span className="h-px w-16 bg-[#ff7a00]/60"></span>

        </div>


        {/* SECOND ROW */}
        <div className="relative overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#1A1A1A] to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent" />

        <div className="flex w-max gap-6 animate-[scrollLeft_25s_linear_infinite]">
          {secondRowLogos.map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="
                group flex h-[130px] w-[240px] shrink-0
                items-center justify-center rounded-2xl
                border border-[#ff7a00]/30
                bg-[#222222] px-8
                shadow-[0_0_20px_rgba(255,122,0,0.08)]
                transition-all duration-500
                hover:border-[#ff7a00]
                hover:shadow-[0_10px_30px_rgba(255,122,0,0.25)]
              "
            >
              <img
                src={`${import.meta.env.BASE_URL}client-logos/${encodeURI(logo)}`}
                alt={`Promaxify client ${index + 11}`}
                className="
                  max-h-[70px]
                  max-w-[160px]
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>
        </div>

      </section>

      <section className="py-24 bg-gradient-to-br from-[#151515] to-[#1b1816] text-white relative overflow-hidden">
        <div className="bg-noise absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>

        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4" style={{ opacity: 1, transform: 'none' }}>
              {/* <div className="h-2 w-2 rounded-full bg-brand-orange"></div> */}
              <span className="font-accent text-sm font-bold tracking-widest text-neutral-400 uppercase">
                Why Promaxify
              </span>
            </div>
            <div style={{ opacity: 1, transform: 'none' }}>
              <h2 className="font-sans font-bold tracking-tight text-white mb-6 text-3xl md:text-5xl">
                <span>The standard for <span className="text-orange-500">excellence</span>.</span>
              </h2>
            </div>
            <p className="text-lg text-neutral-300 font-body leading-relaxed" style={{ opacity: 1, transform: 'none' }}>
              We blend creative strategy with meticulous execution to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 01 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 relative group overflow-hidden transition-colors" style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">01</div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-500 border border-white/10 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers" aria-hidden="true">
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                </svg>
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2 relative z-10">End-to-End Solutions</h4>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">From concept to delivery, multiple branding requirements handled under one roof.</p>
            </div>

            {/* Card 02 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 relative group overflow-hidden transition-colors" style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">02</div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-500 border border-white/10 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings" aria-hidden="true">
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2 relative z-10">Customization</h4>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">Products tailored to the brand, campaign, audience, occasion and budget.</p>
            </div>

            {/* Card 03 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 relative group overflow-hidden transition-colors" style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">03</div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-500 border border-white/10 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb" aria-hidden="true">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2 relative z-10">Creative & Practical</h4>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">Branding that connects with people while keeping products functional and memorable.</p>
            </div>

            {/* Card 04 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 relative group overflow-hidden transition-colors" style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">04</div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-500 border border-white/10 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2 relative z-10">Quality You Can Rely On</h4>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">Carefully selected materials, production and finishing for lasting impact.</p>
            </div>

            {/* Card 05 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 relative group overflow-hidden transition-colors" style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">05</div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-500 border border-white/10 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award" aria-hidden="true">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2 relative z-10">Premium Quality</h4>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">Professional merchandise and print finishes designed to represent brands well.</p>
            </div>

            {/* Card 06 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 relative group overflow-hidden transition-colors" style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">06</div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-500 border border-white/10 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock" aria-hidden="true">
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2 relative z-10">Timely Delivery</h4>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">Reliable execution for planned campaigns, employee initiatives and event deadlines.</p>
            </div>

            {/* Card 07 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 relative group overflow-hidden transition-colors" style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">07</div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-500 border border-white/10 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf" aria-hidden="true">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2 relative z-10">Sustainable Choices</h4>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">Eco-friendly products, responsible materials and greener packaging options.</p>
            </div>

            {/* Card 08 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 relative group overflow-hidden transition-colors" style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute top-4 right-4 text-5xl font-accent font-bold text-white/5 group-hover:text-white/10 transition-colors">08</div>
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-500 border border-white/10 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck" aria-hidden="true">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
              </div>
              <h4 className="font-sans font-semibold text-lg text-white mb-2 relative z-10">Bulk & Pan-India</h4>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">Solutions suited to large-scale orders and multi-location requirements.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- STATISTICS BANNER SECTION --- */}
     <section
  ref={sectionRef}
  className="bg-[#ff7a00] py-20 w-full"
>
  <div className="max-w-[1440px] mx-auto px-8 md:px-16">
    <div className="flex flex-col md:flex-row items-center justify-between text-white divide-y md:divide-y-0 md:divide-x divide-white/30">

      {/* Stat 1 */}
      <div className="flex-1 flex flex-col items-center w-full py-8 md:py-0">
        <h3 className="text-6xl md:text-[2.5rem] font-black leading-none mb-4 tracking-tight">
          {count.years}+
        </h3>

        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-white">
          Years of Experience
        </p>
      </div>

      {/* Stat 2 */}
      <div className="flex-1 flex flex-col items-center w-full py-8 md:py-0">
        <h3 className="text-6xl md:text-[2.5rem] font-black leading-none mb-4 tracking-tight">
          {count.brands}+
        </h3>

        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-white">
          Brands Served
        </p>
      </div>

      {/* Stat 3 */}
      <div className="flex-1 flex flex-col items-center w-full py-8 md:py-0">
        <h3 className="text-6xl md:text-[2.5rem] font-black leading-none mb-4 tracking-tight">
          {count.units.toLocaleString()}+
        </h3>

        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-white">
          Units Delivered
        </p>
      </div>

      {/* Stat 4 */}
      <div className="flex-1 flex flex-col items-center w-full py-8 md:py-0">
        <h3 className="text-6xl md:text-[2.5rem] font-black leading-none mb-4 tracking-tight">
          {count.delivery}%
        </h3>

        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-white">
          Pan-India Delivery
        </p>
      </div>

    </div>
  </div>
</section>
      {/* --- END STATISTICS BANNER SECTION --- */}

      {/* --- RECENT WORK / PORTFOLIO SECTION --- */}
  <section className="bg-[#1b1b1b] py-16 md:py-24 px-5 sm:px-8 lg:px-16">

  <div className="max-w-[1700px] mx-auto">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

      <div>

        <p className="text-[#ff7a00] text-xs md:text-sm font-bold tracking-[0.18em] uppercase mb-5">
          Recent Work
        </p>

        <h2 className="text-white text-4xl sm:text-5xl lg:text-4xl font-black uppercase tracking-wide">
          Delivered With Precision
        </h2>

      </div>


      {/* VIEW ALL */}

      <Link
        to="/services"
        className="
          self-start
          md:self-end
          flex
          items-center
          gap-3
          text-white
          text-sm
          font-bold
          uppercase
          tracking-wider
          border-b-2
          border-[#ff7a00]
          pb-2
          hover:text-[#ff7a00]
          transition
        "
      >
        View All

        <ArrowRight size={20} />

      </Link>

    </div>


    {/* GRID */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {recentWork.map((item) => (

        <Link
          key={item.id}
          to={`/services/${item.slug}`}
          className="
            relative
            h-[450px]
            lg:h-[300px]
            overflow-hidden
            group
            block
          "
        >

          {/* IMAGE */}

          <img
            src={item.image}
            alt={item.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />


          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/40
              to-transparent
            "
          />


          {/* TOP CATEGORY */}
{/* 
          <div
            className="
              absolute
              top-7
              left-7
              bg-[#ff7a00]
              text-white
              px-4
              py-2
              text-xs
              font-bold
              tracking-widest
              uppercase
            "
          >

            {item.category}

          </div> */}


          {/* BOTTOM CONTENT */}

          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              p-7
              flex
              items-end
              justify-between
              gap-4
            "
          >

            <div>

              <p
                className="
                  text-[#ff7a00]
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  mb-3
                "
              >

                {item.category}

              </p>


              <h3
                className="
                  text-white
                  xl:text-1xl
                  font-black
                  leading-tight
                "
              >

                {item.title}

              </h3>

            </div>


            {/* ARROW BUTTON */}

            <div
              className="
                shrink-0
                w-10
                h-10
                bg-white
                text-black
                flex
                items-center
                justify-center
                transition-all
                duration-300
                group-hover:bg-[#ff7a00]
                group-hover:text-white
              "
            >

              <ArrowRight size={20} />

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>
      {/* --- END RECENT WORK / PORTFOLIO SECTION --- */}

      {/* insight work  */}
    <section className="bg-[#111111] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff7a00]">
              Work & Insights
            </p>

            <h2 className="text-4xl font-light leading-tight text-white sm:text-3xl lg:text-4xl">
              Ideas, experiences &
              <span className="block font-normal">
                work that create impact.
              </span>
            </h2>
          </div>


        </div>


        {/* ================= FOUR CARDS ================= */}
        <div className="grid gap-5 md:grid-cols-4">

          {insightData.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a]"
            >

              {/* IMAGE */}
              <div
                className={`relative overflow-hidden ${
                  item.large
                    ? "h-[350px] sm:h-[400px]"
                    : "h-[280px] sm:h-[320px]"
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium tracking-wider text-white backdrop-blur-md">
                    {item.type}
                  </span>
                </div>

                {/* Arrow */}
                <Link to="/insights" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:rotate-45">
                  <ArrowRight size={19} />
                </Link>

                {/* Content over image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                  <h3 className="mb-3 text-2xl font-medium text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-6 text-gray-300">
                    {item.description}
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
      {/* insight work  */}
      {/* --- CLIENT SUCCESS / TESTIMONIALS SECTION --- */}
       <section className="bg-[#151515] py-24 px-8 md:px-16 relative overflow-hidden">
      
      {/* Large Background Watermark Quotes */}
      <div className="absolute top-0 right-10 text-[30rem] font-black text-white/[0.02] leading-none select-none pointer-events-none hidden lg:block font-serif">
        ”
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h4 className="text-[#ff7a00] text-[13px] font-bold tracking-[0.15em] uppercase mb-4">
            Trusted By Our Clients
          </h4>

          <h2 className="text-white text-5xl md:text-4xl font-black uppercase tracking-tight">
            Client Success
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="overflow-hidden testimonials-wrapper">
          <div className="flex gap-6 w-max animate-scrollTestimonials">
            
            {infiniteTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`bg-[#1e1e1e] p-10 flex flex-col justify-between shrink-0
                  w-[320px] sm:w-[380px] min-h-[400px]
                  transition-colors duration-300
                  ${
                    testimonial.featured
                      ? "border border-[#ff7a00] shadow-lg"
                      : "border border-transparent hover:border-gray-700"
                  }`}
              >
                
                {/* Review Content */}
                <div>
                  {/* Quote Icon */}
                  <svg
                    className="w-12 h-12 text-[#ff7a00] mb-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-gray-300 text-[17px] leading-relaxed mb-10">
                    "{testimonial.review}"
                  </p>
                </div>

                {/* Client Details */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover grayscale opacity-80"
                  />

                  <div>
                    <h4 className="text-[#ff7a00] font-bold text-sm uppercase tracking-wider">
                      {testimonial.name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
      {/* --- END CLIENT SUCCESS SECTION --- */}

      {/* --- PArtner PROJECT SECTION --- */}
     <section className="bg-[#1B1B1B] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Partner Image */}
        <div className="w-full h-full min-h-[300px]  overflow-hidden shadow-2xl">
          <img
            // Replace this src with your actual partner image path
            src="https://plus.unsplash.com/premium_photo-1661526579038-aea87aecd898?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Promaxify Partner Network"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Right Side: Content & Call to Actxion */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 tracking-tight">
            Partner Network (PPP)
          </h2>
          
          <p className="text-gray-300 text-lg md:text-[16px] leading-relaxed mb-8">
            We collaborate with consultants, agencies, and professionals through our Partner Network, enabling organizations to access corporate branding and engagement solutions through trusted referrals.
          </p>
          
          <div>
            <Link to="/partner-network" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-orange-500/25">
              Read More
            </Link>
          </div>
        </div>
        
      </div>
    </section>
      {/* --- END PArtner PROJECT SECTION --- */}
      <section className="bg-[#151515] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
            Associate Companies
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Yes! We are equally committed to serve your requirements by our professional skillsets — together with our associate companies we are dedicated to cater to all your diverse requirements. You may visit the respective website for more details.
          </p>
        </div>

        {/* Logos Grid with Animated Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <div 
              key={company.id}
              className="group relative flex items-center justify-center p-8 h-32 rounded-2xl bg-white/5 border border-white/10 cursor-pointer backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:bg-white/10 hover:border-orange-500/50 hover:shadow-[0_15px_40px_-15px_rgba(249,115,22,0.4)] overflow-hidden"
            >
              {/* Optional: Glossy overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%] duration-1000 ease-in-out" />
              
              {/* Replace this div with an actual <img /> tag when you have the logo files */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

      <section className="bg-[#ff7a00] py-16 px-6 md:px-16">
    <div className="max-w-[1440px] mx-auto text-center">

      <p className="text-white/80 uppercase tracking-[3px] text-sm font-semibold mb-4">
        Let's Build Something Great
      </p>

      <h2 className="text-white text-4xl md:text-5xl font-bold mb-5">
        Let’s Work Together
      </h2>

      <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
        Partner with Promaxify to create innovative branding and engagement
        solutions that make a lasting impact.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

        {/* Button 1 */}
        <Link
          to="/partner"
          className="bg-white text-[#ff7a00] px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-[#111111] hover:text-white"
        >
          Become a Partner
        </Link>

        {/* Button 2 */}
        <Link
          to="/proposal"
          className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-[#ff7a00]"
        >
          Request a Proposal
        </Link>

      </div>

    </div>
  </section>
    </div>
    </>
  );
};

export default Home;