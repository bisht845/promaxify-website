import React from "react";
import {
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

import {
  corporateSolutions,
  engagementSolutions,
  insightsData,
} from "../data/main.js";

const ServiceDetails = () => {

  const { slug } = useParams();
  const location = useLocation();


  // CHECK CURRENT PAGE

  const isInsightPage =
    location.pathname.startsWith("/insights");


  // SERVICES DATA

  const allServices = [
    ...corporateSolutions,
    ...engagementSolutions,
  ];


  // SELECT DATA BASED ON PAGE

  const data = isInsightPage
    ? insightsData
    : allServices;


  // FIND CURRENT ITEM

  const service = data.find(
    (item) => item.slug === slug
  );


  // BACK PAGE

  const backPage = isInsightPage
    ? "/insights"
    : "/services";

  const backText = isInsightPage
    ? "Back to Insights"
    : "Back to Services";


  // ==========================================
  // PAGE NOT FOUND
  // ==========================================

  if (!service) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center">

        <h1 className="text-4xl font-black mb-5">
          Page Not Found
        </h1>

        <Link
          to={backPage}
          className="text-[#ff7a00]"
        >
          {backText}
        </Link>

      </div>
    );
  }


  // ==========================================
  // CASE STUDIES
  // ==========================================

  const caseStudies = service.caseStudies || [];


  return (
    <main className="bg-[#111111] min-h-screen text-white">

      {/* =====================================
          TOP BORDER
      ====================================== */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff7a00]/50 to-transparent" />


      {/* =====================================
          MAIN DETAILS SECTION
      ====================================== */}

      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">


        {/* =================================
            BACK BUTTON
        ================================== */}

        <Link
          to={backPage}
          className="
            group
            inline-flex
            items-center
            gap-3
            text-gray-400
            hover:text-[#ff7a00]
            text-xs
            font-bold
            tracking-[0.18em]
            uppercase
            transition-all
          "
        >

          <span
            className="
              w-9
              h-9
              border
              border-gray-700
              flex
              items-center
              justify-center
              transition-all
              group-hover:border-[#ff7a00]
            "
          >
            ←
          </span>

          {backText}

        </Link>


        {/* =================================
            CONTENT SECTION
        ================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-16 py-16 md:py-24">


          {/* LEFT SIDE INFO */}

          <div className="lg:col-span-5">

            <p className="text-[#ff7a00] text-xs font-bold tracking-[0.25em] uppercase mb-6">
              Overview
            </p>


            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black uppercase leading-[1.05] mb-8">
              {service.content.heading}
            </h2>


            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              {service.content.description}
            </p>


            {/* DECORATIVE LINE */}

            <div className="flex items-center gap-4 mt-12">

              <span className="w-16 h-[2px] bg-[#ff7a00]" />

            </div>

          </div>

        </div>


        {/*
            CASE STUDIES
            ONLY FOR INSIGHTS */}

       {isInsightPage && caseStudies.length > 0 && (

  <section className="border-t border-gray-800 pt-16 md:pt-20">

    {/* =================================
        SECTION HEADER
    ================================== */}

    <div className="mb-12 md:mb-16">

      <p className="text-[#ff7a00] text-xs font-bold tracking-[0.25em] uppercase mb-4">
        Our Work
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
        Related Case Studies
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl text-base md:text-lg">
        Explore selected projects and real-world work related to{" "}
        <span className="text-white">
          {service.title}
        </span>.
      </p>

    </div>


    {/* =================================
        CASE STUDIES
    ================================== */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  {caseStudies.slice(0, 4).map((caseStudy) => (

    <article
      key={caseStudy.id}
      className="
        group
        bg-[#f8f8f8]
        text-[#222]
        rounded-[2rem]
        overflow-hidden
        border
        border-gray-200
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-2xl
        flex
        flex-col
        h-full
      "
    >

      {/* IMAGE */}
      <div className="
        relative
        h-[220px]
        sm:h-[250px]
        overflow-hidden
        flex-shrink-0
      ">

        <img
          src={caseStudy.image}
          alt={caseStudy.companyName}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

      </div>


      {/* CONTENT */}
      <div className="
        p-6
        flex
        flex-col
        flex-1
      ">

        {/* COMPANY NAME */}
        <h3 className="
          text-md
          sm:text-md
          font-black
          leading-tight
          mb-6
        ">
          {caseStudy.companyName}
        </h3>


        {/* INDUSTRY */}
        {caseStudy.industry && (
          <div className="flex gap-3 mb-5">

            <div className="
              w-7
              h-7
              rounded-full
              border-2
              border-gray-400
              flex
              items-center
              justify-center
              flex-shrink-0
            ">
              <span className="text-gray-500 text-xs">
                ◫
              </span>
            </div>

            <div>
              <p className="
                text-gray-500
                text-xs
                font-bold
                tracking-[0.18em]
                uppercase
                mb-1
              ">
                Industry
              </p>

              <p className="text-gray-700 text-sm">
                {caseStudy.industry}
              </p>
            </div>

          </div>
        )}


        {/* OBJECTIVE */}
        <div className="flex gap-3 mb-5">

          <div className="
            w-7
            h-7
            rounded-full
            border-2
            border-gray-400
            flex
            items-center
            justify-center
            flex-shrink-0
          ">
            <span className="text-gray-500 text-xs">
              ◎
            </span>
          </div>

          <div>
            <p className="
              text-gray-500
              text-xs
              font-bold
              tracking-[0.18em]
              uppercase
              mb-1
            ">
              Objective
            </p>

            <p className="
              text-gray-600
              text-xs
              leading-6
            ">
              {caseStudy.objective}
            </p>
          </div>

        </div>


        {/* SOLUTION */}
        <div className="flex gap-3">

          <div className="
            w-7
            h-7
            rounded-full
            border-2
            border-[#ff7a00]
            flex
            items-center
            justify-center
            flex-shrink-0
          ">
            <span className="
              text-[#ff7a00]
              text-sm
              font-bold
            ">
              ✓
            </span>
          </div>

          <div>
            <p className="
              text-[#ff7a00]
              text-xs
              font-bold
              tracking-[0.18em]
              uppercase
              mb-1
            ">
              Solution Delivered
            </p>

            <p className="
              text-gray-600
              text-xs
              leading-6
            ">
              {caseStudy.solution}
            </p>
          </div>

        </div>

      </div>

    </article>

  ))}

</div>

  </section>

)}

      </section>


      {/* =====================================
          BOTTOM DECORATIVE LINE
      ====================================== */}

      <div className="h-px w-full bg-gray-900" />

    </main>
  );
};

export default ServiceDetails;