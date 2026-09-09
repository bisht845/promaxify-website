import React from 'react';
import { Link } from 'react-router-dom';
import {
  insightsData,
} from "../data/main.js";
import { Helmet } from 'react-helmet-async';

export default function InsightsPage() {
  return (
    <>
    {/* SEO  */}
    <Helmet>
  <title>Insights | Promaxify Marketing Solutions</title>

  <meta
    name="description"
    content="Explore Promaxify insights, ideas and practical resources covering corporate branding, customized apparel, promotional products, events and marketing solutions."
  />
</Helmet>
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans antialiased">
      {/* Navigation Header */}
      <header
        className="relative bg-[#111111] text-white py-28 md:py-36 px-6 md:px-16 flex justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(17,17,17,0.80), rgba(17,17,17,0.95)), url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="max-w-4xl mx-auto">

          <p className="text-[#ff7a00] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-5">
            Our Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-4xl font-black uppercase leading-[1] tracking-tight mb-6">
           Work & Insights
          </h1>

          <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Real Challenges. Thoughtful Solutions. Proven Execution. 
            <span className='block text-sm'>
              Explore how Promaxify transforms corporate requirements into thoughtfully designed branding, engagement and experiential solutions across industries.
From customized apparel and promotional merchandise to employee engagement, MICE kits and experiential services, our portfolio demonstrates how we combine creative thinking, customization and reliable execution to solve real business requirements.
 
            </span>


          </p>
   <div className="pointer-events-none absolute -bottom-10 left-8 text-[15vw] font-black uppercase leading-none text-white/[0.05]">

          PROMAXIFY

        </div>
        </div>
      </header>


      {/* Orange Divider Section */}
      <section className="bg-orange-500 py-16 px-8">
        <h2 className="text-center text-4xl md:text-5xl font-black uppercase text-white max-w-6xl">
          Delivered With Precision
        </h2>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

  {insightsData.map((solution) => (

    <article
      key={solution.id}
      className="
        group
        relative
        h-[430px]
        md:h-[440px]
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

      <div className="absolute top-6 left-6">

        <span className="
          text-[#ff7a00]
          text-[10px]
          md:text-xs
          font-bold
          tracking-[0.2em]
          uppercase
        ">

          {solution.category}

        </span>

      </div>


      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">

        <h3 className="
          text-2xl
          lg:text-[18px]
          font-black
          uppercase
          tracking-wide
          leading-[1.05]
          mb-4
        ">

          {solution.title}

        </h3>


        <p className="text-gray-300 text-sm leading-6 mb-6">

          {solution.shortDescription}

        </p>


        <Link
          to={`/insights/${solution.slug}`}
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

          <span className="text-lg">→</span>

        </Link>

      </div>

    </article>

  ))}

</div>
      </section>

      {/* Partner Network Section */}
      <section className="text-center py-24 px-4 bg-[#141414] border-t border-gray-800">
        <h3 className="text-orange-500 font-bold text-sm tracking-[0.2em] mb-4 uppercase">
          Partner Network
        </h3>
        <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase max-w-4xl mx-auto leading-tight">
          Access Our Corporate Solutions Through Trusted Referrals
        </h2>
        <a href="#" className="inline-block bg-white text-black px-8 py-3 font-bold tracking-wide hover:bg-[#FB7E06] hover:text-white transition">
          BECOME A PARTNER
        </a>
      </section>

      {/* Footer */}
      
    </div>
    </>
  );
}