import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    {/* --- FOOTER SECTION --- */}
      <footer className="bg-[#111111] pt-24 pb-8 px-8 md:px-16 text-gray-400 relative border-t border-gray-800/50">
  <div className="max-w-[1440px] mx-auto w-full">

    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

      {/* Column 1: Brand Info */}
      <div className="lg:col-span-4 pr-0 lg:pr-8">
        <div className="flex items-center mb-6">
          <span className="text-2xl font-black tracking-tight text-[#ff7a00]">
            PRO
            <span className="text-white">
              {" "}MAXIFY
              <span className="text-2xl font-black tracking-tight text-[#ff7a00]">
                .
              </span>
            </span>
          </span>
        </div>

        <p className="text-[15px] leading-relaxed mb-8">
          Elevating corporate brands through premium merchandise, tailored
          engagement solutions, and strategic insights for industry leaders.
        </p>

        <div className="text-[15px] leading-relaxed space-y-4">
          <p>Promaxify Marketing Solutions LLP</p>

        </div>
      </div>


      {/* Column 2: Solutions */}
      <div className="lg:col-span-2">
        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
          Solutions
        </h4>

        <ul className="space-y-4 text-[15px]">
          <li>
            <a href="#" className="hover:text-[#ff7a00] transition-colors">
              Corporate Solutions
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#ff7a00] transition-colors">
              Engagement Solutions
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#ff7a00] transition-colors">
              Custom Apparel
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#ff7a00] transition-colors">
              Promo Merchandise
            </a>
          </li>
        </ul>
      </div>


      {/* Column 3: Insights */}
      <div className="lg:col-span-2">
        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
          Insights
        </h4>

        <ul className="space-y-4 text-[15px]">
          <li>
            <a href="#" className="hover:text-[#ff7a00] transition-colors">
              Corporate Programs
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#ff7a00] transition-colors">
              Resources & Guides
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#ff7a00] transition-colors">
              Partner Network
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#ff7a00] transition-colors">
              Case Studies
            </a>
          </li>
        </ul>
      </div>


      {/* Column 4: Company */}
      <div className="lg:col-span-2">
        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
          Quick Link
        </h4>

        <ul className="space-y-4 text-[15px]">
          <li>
            <Link to="/about" className="hover:text-[#ff7a00] transition-colors">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-[#ff7a00] transition-colors">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-[#ff7a00] transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-[#ff7a00] transition-colors">
              FAQ
            </Link>
          </li>
        </ul>
      </div>


      {/* Column 5: Social Media */}
      <div className="lg:col-span-2">

        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
          Follow Us
        </h4>

        <p className="text-[15px] leading-relaxed mb-6">
          Connect with us and stay updated with our latest work and insights.
        </p>


        {/* Social Media Icons */}
        <div className="flex flex-wrap gap-3">

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-white hover:bg-[#ff7a00] hover:border-[#ff7a00] transition-all duration-300"
          >
            <FaLinkedinIn className="text-lg" />
          </a>


          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-white hover:bg-[#ff7a00] hover:border-[#ff7a00] transition-all duration-300"
          >
            <FaInstagram className="text-lg" />
          </a>


          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-white hover:bg-[#ff7a00] hover:border-[#ff7a00] transition-all duration-300"
          >
            <FaFacebookF className="text-lg" />
          </a>

          {/* X / Twitter */}
          <a
            href="#"
            aria-label="X"
            className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-white hover:bg-[#ff7a00] hover:border-[#ff7a00] transition-all duration-300"
          >
            <FaXTwitter className="text-lg" />
          </a>

        </div>
      </div>

    </div>


    {/* Sub-footer */}
    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px]">

      <p className="text-center md:text-left">
        © 2026 Promaxify Marketing Solutions LLP. All rights reserved. | Designed & Developed by <a href="https://www.topnexmedia.com/" className="text-white hover:underline" target="_blank" >Topnex Media</a>
      </p>


      <div className="flex items-center gap-8">
        <a
          href="#"
          className="hover:text-[#ff7a00] transition-colors"
        >
          Privacy Policy
        </a>

        <a
          href="#"
          className="hover:text-[#ff7a00] transition-colors"
        >
          Terms & Conditions
        </a>
      </div>


      {/* Small Social Icons */}
      {/* <div className="flex items-center gap-3">

        <a
          href="#"
          aria-label="LinkedIn"
          className="bg-[#1a1a1a] p-2.5 hover:bg-[#ff7a00] transition-colors text-white"
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="bg-[#1a1a1a] p-2.5 hover:bg-[#ff7a00] transition-colors text-white"
        >
          <FaInstagram className="w-4 h-4" />
        </a>

        <a
          href="#"
          aria-label="Facebook"
          className="bg-[#1a1a1a] p-2.5 hover:bg-[#ff7a00] transition-colors text-white"
        >
          <FaFacebookF className="w-4 h-4" />
        </a>

      </div> */}

    </div>

  </div>
</footer>

      {/* Floating Scroll to Top Button (Global Fixed) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#ff7a00] hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:-translate-y-1 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      {/* --- END FOOTER SECTION --- */}
    </>
  )
}

export default Footer