import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const Partner = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    expertise: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your partner request has been submitted.");

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      city: "",
      expertise: "",
      website: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
    <title>Become a Partner | Promaxify</title>

    <meta
      name="description"
      content="Partner with Promaxify to build long-term business opportunities through our corporate marketing, branding, promotional and customized solution network."
    />
  </Helmet>
    <section className="bg-[#111111] min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="text-[#ff7a00] uppercase tracking-[3px] text-sm font-semibold mb-4">
            Partner With Us
          </p>

          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Become a Partner
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Join the Promaxify Partner Network and create new opportunities
            by connecting businesses with innovative corporate branding and
            engagement solutions.
          </p>

        </div>


        {/* Form */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 md:p-10">

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* Company */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Company / Agency *
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Company or agency name"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* Email */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* Phone */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* City */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* Expertise */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Industry / Expertise *
                </label>

                <input
                  type="text"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  required
                  placeholder="Marketing, Consulting, Agency..."
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* Website */}
              <div className="md:col-span-2">
                <label className="text-white text-sm font-medium block mb-2">
                  Website
                </label>

                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-white text-sm font-medium block mb-2">
                  Tell Us About Yourself
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us how you would like to collaborate with Promaxify..."
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition resize-none"
                ></textarea>
              </div>

            </div>


            {/* Button */}
            <button
              type="submit"
              className="mt-8 bg-[#ff7a00] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#111111] transition duration-300"
            >
              Become a Partner →
            </button>

          </form>

        </div>

      </div>
    </section>
    </>
  );
};

export default Partner;