import React from "react";
import { Link } from "react-router-dom";
import {Check} from "lucide-react";
import { aboutData } from "../data/main";
import { Helmet } from "react-helmet-async";
import FaqPage from "./FaqPage"
const About = () => {
  return (
    <>
    {/* SEO  */}
    <Helmet>
  <title>About Promaxify | Corporate Marketing Solutions</title>

  <meta
    name="description"
    content="Learn about Promaxify Marketing Solutions LLP, our expertise, approach and commitment to delivering creative, reliable and customized corporate solutions."
  />
</Helmet>
    <main className="min-h-screen overflow-hidden bg-[#111111] text-white">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative min-h-screen overflow-hidden">

        {/* LEFT ORANGE ACCENT */}
        <div className="absolute left-0 top-0 h-full w-2 bg-[#ff7a00]" />

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=80")',
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/50 to-[#111111]/40" />


        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1700px] items-center px-6 sm:px-10 md:px-16">

          <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end">


            {/* MAIN CONTENT */}
            <div className="lg:col-span-9">

              {/* LABEL */}
              <div className="mb-8 flex items-center gap-4">

                <div className="h-[2px] w-14 bg-[#ff7a00]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff7a00]">
                  The Story Of Promaxify
                </span>

              </div>


              {/* TITLE */}
              <h1 className="max-w-6xl text-4xl font-black uppercase leading-[0.88] tracking-tight sm:text-3xl md:text-4xl lg:text-[3rem]">

                We Create {" "}

                <span className="text-[#ff7a00]">
                  More Than
                </span>

                <br />

                Brands.

              </h1>


              {/* DESCRIPTION */}
              <div className="mt-10 max-w-xl border-l border-[#ff7a00] pl-6">

                <p className="text-base leading-relaxed text-gray-300 md:text-xl">

                  We create experiences, connections and moments that
                  help businesses stay in the minds of the people who
                  matter most.

                </p>

              </div>

            </div>




          </div>

        </div>


        {/* BIG BACKGROUND TEXT */}
        <div className="pointer-events-none absolute -bottom-10 left-8 text-[15vw] font-black uppercase leading-none text-white/[0.05]">

          PROMAXIFY

        </div>

      </section>

      <div className="bg-[#151515] text-white min-h-screen font-sans selection:bg-orange-500 selection:text-white">

        {/* 1. Hero Section */}
        <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-orange-500 text-xl font-semibold tracking-wide uppercase">
            Expert in Corporate Branding & Engagement Solutions
          </div>
          <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight mb-8">
            We help businesses <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              amplify their brand impact.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
            We are a dynamic and innovative marketing solutions provider dedicated to helping businesses amplify their brand impact through high-quality corporate branding, and engagement solutions, offering customized promotional merchandise, corporate gifting, customized apparel, event, sports & exhibition merchandise, and engagement-driven programs. We understand the power of a well-executed marketing strategy and are committed to delivering products that resonate with your audience and elevate your brand.
            We partner with organizations to strengthen their brand presence, employee engagement, and client relationships through thoughtfully designed products and experiences

          </p>
        </section>

        {/* 2. Stats / Company Overview */}
          <section className="bg-[#111111] py-20 px-6 md:px-16">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>
        <p className="text-orange-500 uppercase tracking-[3px] text-sm font-semibold mb-4">
          About Promaxify
        </p>

        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Company Overview
        </h2>

        <div className="w-20 h-1 bg-orange-500 mb-8"></div>

        <p className="text-gray-400 text-lg leading-relaxed">
          Promaxify is a Corporate Branding & Engagement Solutions partner
          focused on helping businesses enhance visibility, engagement, and
          brand recall through innovative products and experiences.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mt-5">
          Our end-to-end execution combines creative strategy, premium
          sourcing, customization, logistics, and reliable delivery to support
          product launches, exhibitions, recognition programs, festive
          campaigns, dealer incentives, and corporate events.
        </p>
      </div>


      {/* Right Side Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <div className="bg-[#1a1a1a] border border-gray-800 p-7 rounded-xl hover:border-orange-500 transition duration-300">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
            🎯
          </div>

          <h3 className="text-white text-xl font-semibold mb-3">
            Creative Strategy
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Innovative ideas and strategies designed to strengthen your brand.
          </p>
        </div>


        <div className="bg-[#1a1a1a] border border-gray-800 p-7 rounded-xl hover:border-orange-500 transition duration-300">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
            ✨
          </div>

          <h3 className="text-white text-xl font-semibold mb-3">
            Custom Solutions
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Personalized products and experiences created for your business.
          </p>
        </div>


        <div className="bg-[#1a1a1a] border border-gray-800 p-7 rounded-xl hover:border-orange-500 transition duration-300">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
            🚚
          </div>

          <h3 className="text-white text-xl font-semibold mb-3">
            Reliable Delivery
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Smooth logistics and dependable execution from start to finish.
          </p>
        </div>


        <div className="bg-[#1a1a1a] border border-gray-800 p-7 rounded-xl hover:border-orange-500 transition duration-300">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
            🤝
          </div>

          <h3 className="text-white text-xl font-semibold mb-3">
            Brand Engagement
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Meaningful experiences that improve engagement and brand recall.
          </p>
        </div>

      </div>

    </div>
  </section>

        {/* 3. Vision & Mission Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A partner in your brand's journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Built on the foundation of delivering excellence, we collaborate closely with our clients to transform their vision into tangible brand touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "To become a trusted corporate branding and engagement solutions partner that helps organizations enhance their brand identity and create meaningful experiences through innovative products and programs.We strive to build partnerships by high-quality solutions that inspire, connect, and create a lasting impact."
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "Our mission is to deliver high-quality corporate branding solutions that strengthen relationships, enhance brand visibility, and create memorable experiences for organizations and their stakeholders. We strive to achieve this by combining creative thinking, reliable sourcing, and efficient execution."
              </p>
            </div>
            {/* Commitment Card */}
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2.5 2.5L16 9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "At Promaxify, we believe that corporate branding goes beyond products.
                It is about creating experiences that strengthen relationships, inspire teams, and enhance brand perception. Our commitment is to deliver solutions that help organizations build stronger connections with their employees, customers, and partners.
                "
              </p>
            </div>

          </div>
        </section>

        <section className="bg-[#111111] py-24 px-6 md:px-16">
          <div className="max-w-[1440px] mx-auto">

            {/* Section Header */}
            <div className="max-w-3xl mb-16">

              <p className="text-[#ff7a00] uppercase tracking-[3px] text-sm font-semibold mb-4">
                Our Expertise
              </p>

              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                What We Do
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Promaxify offers a comprehensive range of corporate solutions
                designed to support organizations in building stronger brands
                and deeper engagement.
              </p>

            </div>


            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {aboutData.map((service) => (
              <div key={service.id} className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#ff7a00] transition duration-300">

                <div className="h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-7">

                  <span className="text-[#ff7a00] text-sm font-semibold">
                    {service.number}
                  </span>

                  <h3 className="text-white text-1xl font-semibold mt-2 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                </div>

              </div>

              ))}

            </div>

          </div>
        </section>

        {/* 4. Methodology Section */}
        <section className="py-24 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Our Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">A Simple, Effective Approach</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (Desktop only) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-white/10" />

              {/* Step 1 */}
              <div className="relative text-center z-10">
                <div className="w-24 h-24 mx-auto rounded-full bg-[#151515] border-4 border-orange-500 flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Understand</h3>
                <p className="text-gray-400">Deeply analyzing your brand identity, audience, and campaign objectives.</p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center z-10 mt-8 md:mt-0">
                <div className="w-24 h-24 mx-auto rounded-full bg-[#151515] border-4 border-orange-500 flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Design</h3>
                <p className="text-gray-400">Creating custom, tailored solutions and visual concepts that align with your goals.</p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center z-10 mt-8 md:mt-0">
                <div className="w-24 h-24 mx-auto rounded-full bg-[#151515] border-4 border-orange-500 flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Execute</h3>
                <p className="text-gray-400">Flawless production, quality assurance, and timely delivery of the final product.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      {/* {/* 5. Why Choose */}  
      <section className="bg-[#111111] py-24 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto">

          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-[#ff7a00] uppercase tracking-[3px] text-sm font-semibold mb-4">
              Why Promaxify
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Why Organizations Choose Promaxify
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Organizations partner with Promaxify because of our commitment to
              quality, creativity, and reliability.
            </p>
          </div>


          {/* Key Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-24">

            {/* 01 */}
            <div className="bg-[#1a1a1a] border border-gray-800 hover:border-[#ff7a00] p-6 rounded-xl transition duration-300 group">

              <span className="text-[#ff7a00] text-sm font-semibold">
                01
              </span>

              <h3 className="text-white text-xl font-semibold mt-4 mb-3">
                Customized Solutions
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Corporate solutions tailored specifically to your brand identity.
              </p>

            </div>


            {/* 02 */}
            <div className="bg-[#1a1a1a] border border-gray-800 hover:border-[#ff7a00] p-6 rounded-xl transition duration-300">

              <span className="text-[#ff7a00] text-sm font-semibold">
                02
              </span>

              <h3 className="text-white text-xl font-semibold mt-4 mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Carefully sourced products that meet high-quality standards.
              </p>

            </div>


            {/* 03 */}
            <div className="bg-[#1a1a1a] border border-gray-800 hover:border-[#ff7a00] p-6 rounded-xl transition duration-300">

              <span className="text-[#ff7a00] text-sm font-semibold">
                03
              </span>

              <h3 className="text-white text-xl font-semibold mt-4 mb-3">
                Creative Strategies
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Innovative engagement strategies that create meaningful experiences.
              </p>

            </div>


            {/* 04 */}
            <div className="bg-[#1a1a1a] border border-gray-800 hover:border-[#ff7a00] p-6 rounded-xl transition duration-300">

              <span className="text-[#ff7a00] text-sm font-semibold">
                04
              </span>

              <h3 className="text-white text-xl font-semibold mt-4 mb-3">
                Strong Network
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                A reliable vendor and manufacturing network for smooth execution.
              </p>

            </div>


            {/* 05 */}
            <div className="bg-[#1a1a1a] border border-gray-800 hover:border-[#ff7a00] p-6 rounded-xl transition duration-300">

              <span className="text-[#ff7a00] text-sm font-semibold">
                05
              </span>

              <h3 className="text-white text-xl font-semibold mt-4 mb-3">
                End-to-End Execution
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Complete project support from creative strategy to reliable delivery.
              </p>

            </div>

          </div>


          {/* Industry Content */}
          <div className="border-l-4 border-[#ff7a00] pl-6 md:pl-8 mb-20 max-w-4xl">

            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-5">
              Solutions Built for Every Industry
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Promaxify collaborates with organizations across a wide range of
              industries. Our solutions are designed to adapt to the unique branding
              and engagement needs of each organization.
            </p>

          </div>


          {/* Partner Network */}
          <div className="bg-[#ff7a00] rounded-2xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>

              <p className="text-white/80 uppercase tracking-[3px] text-sm font-semibold mb-4">
                Grow With Us
              </p>

              <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
                Promaxify Partner Network
              </h2>

              <p className="text-white/90 text-lg leading-relaxed">
                Promaxify collaborates with consultants, agencies, and professionals
                through the Promaxify Partner Network.
              </p>

            </div>


            {/* Right */}
            <div>

              <p className="text-white/90 text-lg leading-relaxed mb-6">
                This initiative allows industry professionals who interact with
                corporate organizations to introduce businesses that may benefit
                from Promaxify's services.
              </p>

              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Partners receive referral rewards for successful projects, creating
                a collaborative ecosystem that supports organizations in accessing
                high-quality corporate solutions.
              </p>

              <a
                href="/partner"
                className="inline-block bg-[#111111] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#111111] transition duration-300"
              >
                Become a Partner →
              </a>

            </div>

          </div>

        </div>
      </section>
      {/* {/* 6. STORY + IMAGE */}  
      <section className="bg-[#151515] px-6 py-14 sm:px-10 md:px-12 md:py-10">

        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">


          {/* IMAGE */}
          <div className="relative">

            <div className="aspect-[4/5] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                alt="Promaxify team"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>


            {/* IMAGE LABEL */}
            <div className="absolute -bottom-6 -right-3 bg-[#ff7a00] p-7 sm:right-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em]">

                Built On

                <br />

                Collaboration

              </p>

            </div>

          </div>


          {/* CONTENT */}
          <div>

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#ff7a00]">

              WHO WE WORK WITH

            </p>


            <h2 className="text-4xl font-black uppercase leading-[1] sm:text-5xl md:text-4xl">

              Creativity Is

              <br />

              Only The

              <span className="text-[#ff7a00]">
                {" "}Beginning.
              </span>

            </h2>


            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">

              A great idea is only valuable when it is executed with
              precision. That is why our work combines creative
              thinking with strategic planning, quality production and
              careful delivery.

            </p>


            <div className="py-10 space-y-5">

              {[
                "Corporate & Enterprise Teams",
                "Event Agencies & Organisers",
                "Hospitality & Healthcare",
                "MICE & Travel Agencies",
                "Education Institutions",
                "Education Institutions",
                "Government & NGOs",
                "Exhibitions, Conferences & Event",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-gray-800 pb-5"
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#ff7a00]/10 text-[#ff7a00]">

                    <Check size={16} />

                  </div>


                  <p className="font-medium text-gray-200">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
      {/* FAQ Section */}
     
 {/* 7. CTA Section */}
        <section className="py-22 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Exceptional</h2>
            <p className="text-md text-gray-400 mb-10">
              If your organization is looking to enhance its brand presence through corporate merchandise, promotional products, engagement programs, or experiential initiatives, our team would be happy to collaborate.
Connect with Promaxify Marketing Solutions LLP to explore customized solutions for your business.

            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/partner" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-1">
               Become a Partner 
              </Link>
              <Link to="/proposal" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1">
               Request Proposal 
              </Link>
            </div>
          </div>
        </section>
 <FaqPage />


    </main>
    </>
  );
};

export default About;