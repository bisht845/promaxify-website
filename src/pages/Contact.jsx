
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { submitEnquiry } from "../services/api";

const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState({
    loading: false,
    msg: "",
    error: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status.loading) return;

    setStatus({
      loading: true,
      msg: "",
      error: false,
    });

    try {
      const res = await submitEnquiry({
        ...formData,
        source: "contact_form",
      });

      if (res?.success) {
        setStatus({
          loading: false,
          msg: res.message || "Enquiry submitted successfully!",
          error: false,
        });

        setFormData({ ...initialFormData });
      } else {
        setStatus({
          loading: false,
          msg: res?.message || "Unable to submit enquiry. Please try again.",
          error: true,
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        loading: false,
        msg: "Something went wrong. Please try again later.",
        error: true,
      });
    }
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contact Promaxify | Get in Touch</title>

        <meta
          name="description"
          content="Get in touch with Promaxify Marketing Solutions for customized corporate branding, promotional products, apparel, events and business solutions."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="bg-[#151515] py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-xl md:text-2xl text-[#ff7a00] italic font-light mb-8">
            "Let's Create Something That Represents Your Brand Better."
          </p>

          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto">
            At Promaxify Marketing Solutions, we are dedicated to helping your
            business grow and succeed. Partner with us and experience the
            difference of working with a team that truly cares about your
            brand’s success. Let us help you elevate, maximize, and magnify
            your brand’s presence in the market.
          </p>

        </div>
      </section>

      {/* CONTACT FORM + MAP SECTION */}
      <section className="bg-[#1B1B1B] py-20 md:py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT - QUICK ENQUIRY */}
            <div className="bg-[#1B1B1B] rounded-3xl p-7 md:p-10 shadow-xl border border-white/10">

              <div className="mb-8">

                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-4">
                  Quick Enquiry
                </span>

                <h2 className="text-3xl font-bold text-white mb-3">
                  Let's Start a Conversation
                </h2>

                <p className="text-gray-400 text-sm md:text-base">
                  Tell us briefly about your requirement and our team will
                  connect with you.
                </p>

              </div>

              {/* CONTACT FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* SUCCESS / ERROR MESSAGE */}
                {status.msg && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`p-4 rounded-xl text-sm border ${
                      status.error
                        ? "bg-red-500/10 text-red-400 border-red-500/30"
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                    }`}
                  >
                    {status.msg}
                  </div>
                )}

                {/* NAME, COMPANY, EMAIL, PHONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />

                </div>

                {/* SERVICE */}
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Service Interested In</option>

                  <option value="Corporate Gifting">
                    Corporate Gifting
                  </option>

                  <option value="Customized Apparel">
                    Corporate Apparel & Uniforms
                  </option>

                  <option value="Event & Exhibition Kits">
                    Event & Exhibition Kits
                  </option>

                  <option value="Employee Welcome Kits">
                    Employee Welcome Kits
                  </option>

                  <option value="Dealer Incentive Programs">
                    Dealer Incentive Programs
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/30"
                >
                  {status.loading ? "Submitting..." : "Submit Enquiry"}
                </button>

              </form>

              {/* REQUEST PROPOSAL */}
              <div className="mt-8 pt-7 border-t border-white/10">

                <p className="text-gray-400 text-sm">
                  Have a specific requirement?
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-3 text-orange-500 font-semibold hover:text-orange-400 transition"
                >
                  Request a Proposal
                  <span>→</span>
                </Link>

              </div>

            </div>

            {/* RIGHT - GOOGLE MAP */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10 h-[450px] min-h-[450px]">

              <iframe
                title="Promaxify Marketing Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.672833906762!2d77.11055694706425!3d28.699431812979505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e49f874e7f%3A0xcd566da7527ab9b!2sMangalam%20Place%2C%20Sector%203%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1789472784463!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#ff7a00] py-16 md:py-20 px-6 md:px-16">

        <div className="max-w-[1440px] mx-auto text-center">

          <p className="text-white/80 uppercase tracking-[3px] text-sm font-semibold mb-4">
            Let's Build Something Great
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-5">
            Let’s Work Together
          </h2>

          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Partner with Promaxify to create innovative branding and
            engagement solutions that make a lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

            <Link
              to="/partner-network"
              className="bg-white text-[#ff7a00] px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-[#111111] hover:text-white"
            >
              Become a Partner
            </Link>

            <Link
              to="/contact"
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
