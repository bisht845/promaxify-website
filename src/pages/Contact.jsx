import React from 'react'

const  Contact = () => {
  return (
    <>
    <section className="bg-[#151515] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Top Subtitle */}
        <h3 className="text-orange-500 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-8">
          Big or small, every requirement matters.
        </h3>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#333333] mb-8 leading-[1.1] tracking-tight">
          Customized. Branded. <br className="hidden md:block" />
          Delivered. <span className="text-orange-500">Let's Connect!!</span>
        </h1>

        {/* Italic Quote */}
        <p className="text-xl md:text-2xl text-gray-600 italic font-light mb-10">
          "Let's create something that represents your brand better."
        </p>

        {/* Horizontal Divider */}
        <hr className="border-t border-gray-200 w-full max-w-3xl mx-auto mb-10" />

        {/* Bottom Paragraph */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-normal">
          At Promaxify Marketing Solutions, we are dedicated to helping your business grow and
          succeed. Partner with us and experience the difference of working with a team that truly
          cares about your brand's success. Let us help you elevate, maximize, and magnify your
          brand's presence in the market.
        </p>

      </div>
    </section>
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Card: Quick Enquiry */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Quick Enquiry</h2>
            <p className="text-gray-500 text-sm md:text-base">
              Tell us briefly about your requirement and our team will connect with you.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input type="text" placeholder="Full Name" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              {/* Company Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <input type="text" placeholder="Company Name" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              {/* Email Address */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input type="email" placeholder="Email Address" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <select className="w-full pl-11 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                <option value="">Service Interested In</option>
                <option value="gifting">Corporate Gifting</option>
                <option value="apparel">Corporate Apparel & Uniforms</option>
                <option value="merchandise">Promotional Merchandise</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Message Area */}
            <div className="relative">
              <textarea 
                rows="3" 
                placeholder="Message or specific requirements (optional)" 
                className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <button type="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/30">
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* Right Card: Request a Proposal (Dark Theme) */}
        <div className="bg-[#2B2B2B] rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Header & Step Badge */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Request a Proposal</h2>
              <p className="text-gray-400 text-sm md:text-base">
                Share your project details and our team will prepare a customized solution.
              </p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
              Step 1 of 2
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full mb-8">
            <div className="w-1/2 h-full bg-orange-500 rounded-full"></div>
          </div>

          <form className="space-y-8">
            {/* Contact Info Section */}
            <div>
              <h3 className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Dark Inputs */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Full Name" className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Company Name" className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Designation" className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                </div>
              </div>
            </div>

            {/* Project Details Section */}
            <div>
              <h3 className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">Project Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  "Corporate Gifting Program",
                  "Corporate Apparel/Uniforms",
                  "Promotional Merchandise",
                  "Exhibition/Promotional",
                  "Employee Welcome Kits",
                  "Corporate Events"
                ].map((item, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        className="peer appearance-none w-5 h-5 border-2 border-gray-500 rounded bg-transparent checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition-colors"
                      />
                      <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 mt-4">
              Continue to Next Step
            </button>
          </form>
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
    </>
  )}
export default Contact

