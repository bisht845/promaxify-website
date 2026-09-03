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



  return (
    <main className="bg-[#111111] min-h-screen text-white">


      {/* TOP BORDER DESIGN */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff7a00]/50 to-transparent" />


      {/* MAIN DETAILS SECTION */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">


        {/* BACK BUTTON */}
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

          <span className="
            w-9
            h-9
            border
            border-gray-700
            flex
            items-center
            justify-center
            transition-all
            group-hover:border-[#ff7a00]
          ">
            ←
          </span>

          {backText}

        </Link>

        {/* CONTENT SECTION */}
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

              {/* <span className="text-xs text-gray-600 tracking-[0.2em] uppercase">
                Our Expertise
              </span> */}

            </div>

          </div>



        </div>



      </section>


      {/* BOTTOM DECORATIVE LINE */}
      <div className="h-px w-full bg-gray-900" />

    </main>
  );
};

export default ServiceDetails;