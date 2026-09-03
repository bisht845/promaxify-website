import React, { useState } from "react";

const Proposal = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    quantity: "",
    budget: "",
    timeline: "",
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

    // console.log(formData);

    alert("Thank you! Your proposal request has been submitted.");

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      quantity: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#111111] min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="text-[#ff7a00] uppercase tracking-[3px] text-sm font-semibold mb-4">
            Let's Work Together
          </p>

          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Request a Proposal
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Tell us about your requirements and our team will get back to you
            with a suitable solution for your organization.
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
                  Company Name *
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your company name"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* Email */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Work Email *
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


              {/* Service */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Service Required *
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-[#ff7a00] transition"
                >
                  <option value="">Select a service</option>
                  <option value="Corporate Apparel">
                    Corporate Apparel & Uniforms
                  </option>
                  <option value="Bags & Baggage">
                    Bags & Baggage
                  </option>
                  <option value="Promotional Merchandise">
                    Promotional Merchandise
                  </option>
                  <option value="Employee Engagement">
                    Employee Engagement Programs
                  </option>
                  <option value="Corporate Events">
                    Corporate Events & Experiences
                  </option>
                  <option value="Incentive Travel">
                    Incentive Travel Programs
                  </option>
                  <option value="Influencer Marketing">
                    Influencer Marketing Services
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>


              {/* Quantity */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Estimated Quantity
                </label>

                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 500 units"
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition"
                />
              </div>


              {/* Budget */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Budget Range
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-[#ff7a00] transition"
                >
                  <option value="">Select budget range</option>
                  <option value="Under ₹50,000">Under ₹50,000</option>
                  <option value="₹50,000 - ₹1 Lakh">
                    ₹50,000 - ₹1 Lakh
                  </option>
                  <option value="₹1 Lakh - ₹5 Lakh">
                    ₹1 Lakh - ₹5 Lakh
                  </option>
                  <option value="₹5 Lakh - ₹10 Lakh">
                    ₹5 Lakh - ₹10 Lakh
                  </option>
                  <option value="Above ₹10 Lakh">
                    Above ₹10 Lakh
                  </option>
                </select>
              </div>


              {/* Timeline */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Expected Timeline
                </label>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-[#ff7a00] transition"
                >
                  <option value="">Select timeline</option>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="1 - 2 weeks">1 - 2 weeks</option>
                  <option value="2 - 4 weeks">2 - 4 weeks</option>
                  <option value="1 - 3 months">1 - 3 months</option>
                  <option value="More than 3 months">
                    More than 3 months
                  </option>
                </select>
              </div>


              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-white text-sm font-medium block mb-2">
                  Project Details *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your project, requirements, customization, delivery location, etc."
                  className="w-full bg-[#111111] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00] transition resize-none"
                ></textarea>
              </div>

            </div>


            {/* Button */}
            <button
              type="submit"
              className="mt-8 bg-[#ff7a00] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#111111] transition duration-300"
            >
              Request Proposal →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Proposal;