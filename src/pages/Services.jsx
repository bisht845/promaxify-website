import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  corporateSolutions,
  engagementSolutions,
} from "../data/main";

const Services = () => {
  const [activeTab, setActiveTab] = useState("corporate");

  const currentSolutions =
    activeTab === "corporate"
      ? corporateSolutions
      : engagementSolutions;

  return (
    <div className="bg-[#151515] min-h-screen text-white pb-24">

      {/* HERO SECTION */}
      <header
        className="relative bg-[#111111] text-white py-28 md:py-36 px-6 md:px-16 flex justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(17,17,17,0.80), rgba(17,17,17,0.95)), url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="max-w-4xl mx-auto">

          <p className="text-[#ff7a00] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-5">
            Our Services
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-4xl font-black uppercase leading-[1] tracking-tight mb-6">
            Integrated Solutions
          </h1>

          <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Comprehensive corporate branding and engagement solutions
            designed to enhance visibility and strengthen relationships.
          </p>
   <div className="pointer-events-none absolute -bottom-10 left-8 text-[15vw] font-black uppercase leading-none text-white/[0.05]">

          PROMAXIFY

        </div>
        </div>
      </header>


      {/* TABS */}
      <div className="w-full bg-[#111111] border-b border-gray-800 sticky top-0 z-40">

        <div className="max-w-[1440px] mx-auto px-4 md:px-16">

          <div className="flex justify-center gap-8 sm:gap-14 md:gap-24 overflow-x-auto">

            {/* CORPORATE TAB */}
            <button
              onClick={() => setActiveTab("corporate")}
              className={`relative whitespace-nowrap py-6 text-xs md:text-sm font-bold tracking-[0.18em] uppercase transition-all ${activeTab === "corporate"
                  ? "text-[#ff7a00]"
                  : "text-gray-500 hover:text-white"
                }`}
            >
              Corporate Solutions

              {activeTab === "corporate" && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff7a00]" />
              )}
            </button>


            {/* ENGAGEMENT TAB */}
            <button
              onClick={() => setActiveTab("engagement")}
              className={`relative whitespace-nowrap py-6 text-xs md:text-sm font-bold tracking-[0.18em] uppercase transition-all ${activeTab === "engagement"
                  ? "text-[#ff7a00]"
                  : "text-gray-500 hover:text-white"
                }`}
            >
              Engagement Solutions

              {activeTab === "engagement" && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff7a00]" />
              )}
            </button>

          </div>

        </div>

      </div>


      {/* SECTION CONTENT */}
      <section className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20">


        {/* SECTION HEADING */}

        <div className="mb-12 md:mb-16">

          <p className="text-[#ff7a00] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            {activeTab === "corporate"
              ? "Business & Branding"
              : "People & Experiences"}
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-black uppercase leading-tight">

            {activeTab === "corporate"
              ? "Corporate Solutions"
              : "Engagement Solutions"}

          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">

            {activeTab === "corporate"
              ? "Customized solutions designed to strengthen your corporate identity and brand presence."
              : "Creative experiences and strategic programs designed to connect people with your brand."}

          </p>

        </div>

       {/* CORPORATE SOLUTIONS - IMAGE CARDS */}

{activeTab === "corporate" && (
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-6
      md:gap-7
    "
  >
    {corporateSolutions.map((solution) => (

      <article
        key={solution.id}
        className="
          group
          relative
          h-[430px]
          md:h-[470px]
          overflow-hidden
          bg-[#1a1a1a]
          border
          border-gray-800
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#ff7a00]/60
          hover:shadow-2xl
        "
      >

        {/* IMAGE */}
        <img
          src={solution.image}
          alt={solution.title}
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


        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#111111]
            via-[#111111]/75
            to-[#111111]/10
          "
        />


        {/* CATEGORY */}
        <div className="absolute top-6 left-6">
          <span className="text-[#ff7a00] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            {solution.category}
          </span>
        </div>


        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">

          <h3 className="text-2xl lg:text-[20px] font-black uppercase tracking-wide leading-[1.05] mb-4">
            {solution.title}
          </h3>

          <p className="text-gray-300 text-sm md:text-[15px] leading-6 mb-6">
            {solution.shortDescription}
          </p>

          <Link
            to={`/services/${solution.slug}`}
            className="
              inline-flex
              items-center
              gap-3
              text-[#ff7a00]
              text-xs
              font-bold
              tracking-[0.18em]
              uppercase
              transition-all
              hover:gap-5
            "
          >
            Read More

            <span className="text-lg">
              →
            </span>
          </Link>

        </div>

      </article>

    ))}
  </div>
)}


{/* ENGAGEMENT SOLUTIONS - WITHOUT IMAGES */}

{activeTab === "engagement" && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7"
  >
    {engagementSolutions.map((solution, index) => (

      <article
        key={solution.id}
        className="
          group
          bg-[#1a1a1a]
          border
          border-gray-800
          p-8
          md:p-9
          min-h-[320px]
          flex
          flex-col
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-[#ff7a00]/60
          hover:bg-[#1d1d1d]
        "
      >

        {/* ICON */}
        <div
          className="
            w-14
            h-14
            bg-[#ff7a00]/10
            text-[#ff7a00]
            flex
            items-center
            justify-center
            mb-7
            transition-transform
            duration-300
            group-hover:scale-110
          "
        >

          {/* Different number for every card */}
          <span className="text-lg font-bold">
            0{index + 1}
          </span>

        </div>


        {/* TITLE */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">

          {solution.title}

        </h3>


        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-8">

          {solution.shortDescription}

        </p>


        {/* READ MORE */}
        <Link
          to={`/services/${solution.slug}`}
          className="
            inline-flex
            items-center
            gap-3
            mt-auto
            text-[#ff7a00]
            text-xs
            font-bold
            tracking-[0.18em]
            uppercase
            transition-all
            hover:gap-5
          "
        >

          Read More

          <span className="text-lg">
            →
          </span>

        </Link>

      </article>

    ))}
  </div>
)}

      </section>

      {/* CTA BTN  */}
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
        <a
          href="/partner"
          className="bg-white text-[#ff7a00] px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-[#111111] hover:text-white"
        >
          Become a Partner
        </a>

        {/* Button 2 */}
        <a
          href="/proposal"
          className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-[#ff7a00]"
        >
          Request a Proposal
        </a>

      </div>

    </div>
  </section>
      {/* SCROLL TO TOP */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed
          bottom-8
          right-8
          w-14
          h-14
          bg-[#ff7a00]
          hover:bg-orange-600
          text-white
          rounded-full
          shadow-2xl
          transition-all
          hover:-translate-y-1
          z-50
          flex
          items-center
          justify-center
        "
      >

        ↑

      </button>

    </div>
  );
};

export default Services;