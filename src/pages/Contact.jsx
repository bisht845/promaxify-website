import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
    {/* SEO  */}
    <Helmet>
  <title>Contact Promaxify | Get in Touch</title>

  <meta
    name="description"
    content="Get in touch with Promaxify Marketing Solutions for customized corporate branding, promotional products, apparel, events and business solutions."
  />
</Helmet>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="bg-[#151515] py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-orange-500 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6">
            Big or small, every requirement matters.
          </p>

          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[3rem] font-extrabold text-white mb-7 leading-[1.1] tracking-tight">
            Customized. Branded.
            <br className="hidden md:block" />
            Delivered.{" "}
            {/* <span className="text-orange-500">
              Let's Connect.
            </span> */}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 italic font-light mb-8">
            "Let's create something that represents your brand better."
          </p>

          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            At Promaxify Marketing Solutions, we are dedicated to helping your business grow and succeed. Partner with us and experience the difference of working with a team that truly cares about your brand’s success. Let us help you elevate, maximize, and magnify your brand’s presence in the market.
          </p>

        </div>
      </section>


      {/* =====================================================
          CONTACT FORM SECTION
      ====================================================== */}
      <section className="bg-gray-50 py-20 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-14">

            <p className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tell Us What You Need
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Share a few details about your requirement and our team
              will get back to you with the right solution.
            </p>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols- gap-8 items-start">

            {/* =================================================
                LEFT - QUICK ENQUIRY
            ================================================== */}
            <div className="bg-[#b1b1b1] rounded-3xl p-7 md:p-10 shadow-xl border border-gray-100">

              <div className="mb-8">

                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-4">
                  Quick Enquiry
                </span>

                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Let's Start a Conversation
                </h2>

                <p className="text-gray-500 text-sm md:text-base">
                  Tell us briefly about your requirement and our team
                  will connect with you.
                </p>

              </div>


              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >

                {/* Web3Forms */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_WEB3FORMS_ACCESS_KEY"
                />

                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Enquiry - Promaxify"
                />

                {/* Name + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />

                </div>


                {/* Service */}
                <select
                  name="service"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                >
                  <option value="">
                    Service Interested In
                  </option>

                  <option value="Corporate Gifting">
                    Corporate Gifting
                  </option>

                  <option value="Corporate Apparel">
                    Corporate Apparel & Uniforms
                  </option>

                  <option value="Promotional Merchandise">
                    Promotional Merchandise
                  </option>

                  <option value="Branding Solutions">
                    Branding Solutions
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>


                {/* Message */}
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your requirement..."
                  required
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                ></textarea>


                {/* Button */}
                <button
                  type="submit"
                  className="w-xl py-4  bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/30"
                >
                  Submit Enquiry
                </button>

              </form>
<div className="mt-8 pt-7 border-t border-white/10">

                <p className="text-gray-500 text-sm">
                  Have a specific requirement?
                </p>

                <Link
                  to="/proposal"
                  className="inline-flex items-center gap-2 mt-3 text-orange-500 font-semibold hover:text-orange-400 transition"
                >
                  Request a Proposal

                  <span>→</span>
                </Link>

              </div>
            </div>


            {/* =================================================
                RIGHT - CONTACT INFORMATION
            ================================================== */}
            

         

          </div>
          
        </div>
        
      </section>


      {/* =====================================================
          MAP SECTION
      ====================================================== */}
      <section className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="mb-10">

            <p className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-3">
              Find Us
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

              <div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Visit Our Office
                </h2>

                <p className="text-gray-500 mt-3 max-w-xl">
                  We would love to meet you and discuss how we can
                  help grow your brand.
                </p>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Promaxify+Marketing+Solutions+Nawada+Housing+Complex+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#111111] hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Open in Google Maps
              </a>

            </div>

          </div>


          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-[350px] md:h-[450px]">

            <iframe
              title="Promaxify Marketing Solutions Location"
              src="https://www.google.com/maps?q=D%20367%2F368%2C%20Nawada%20Housing%20Complex%2C%20New%20Delhi%2C%20Delhi%20110059&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section className="bg-[#ff7a00] py-16 md:py-20 px-6 md:px-16">

        <div className="max-w-[1440px] mx-auto text-center">

          <p className="text-white/80 uppercase tracking-[3px] text-sm font-semibold mb-4">
            Let's Build Something Great
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-5">
            Let’s Work Together
          </h2>

          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Partner with Promaxify to create innovative branding
            and engagement solutions that make a lasting impact.
          </p>


          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

            <Link
              to="/partner"
              className="bg-white text-[#ff7a00] px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-[#111111] hover:text-white"
            >
              Become a Partner
            </Link>

            <Link
              to="/proposal"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-[#ff7a00]"
            >
              Request a Proposal
            </Link>

          </div>

        </div>

      </section>

    </>
  );
};

export default Contact;