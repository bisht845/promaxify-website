import { useEffect, useState } from "react";

import {
  corporateSolutions,
  engagementSolutions,
  insightsData,
} from "../data/main.js";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile dropdowns
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Show navbar when scrolling UP
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      // Hide navbar when scrolling DOWN
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileInsightsOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 text-white
        px-5 sm:px-8 lg:px-16
        transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "bg-[#111111]/95 backdrop-blur-lg shadow-xl py-3 border-b border-gray-800"
            : "bg-[#111111] py-4 sm:py-5"
        }
        ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">

        {/* =========================
            LOGO
        ========================== */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="
            text-xl sm:text-2xl
            font-black
            tracking-tight
            text-[#ff7a00]
            shrink-0
          "
        >
          PRO
          <span className="text-white">
            {" "}MAXIFY
            <span className="text-[#ff7a00]">.</span>
          </span>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <div
          className="
            hidden lg:flex
            items-center
            space-x-8 xl:space-x-10
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-gray-300
          "
        >
          {/* HOME */}
          <Link
            to="/"
            className="text-white hover:text-[#ff7a00] transition-colors duration-300 py-2"
          >
            Home
          </Link>

          {/* =========================
              SERVICES DROPDOWN
          ========================== */}
          <div className="relative group">
            <Link
              to="/services"
              className="
                flex items-center gap-1
                uppercase tracking-widest
                text-xs font-bold
                transition-colors duration-300
                py-2
                text-gray-300
                group-hover:text-[#ff7a00]
              "
            >
              Services

              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* SERVICES MEGA MENU */}
            <div
              className="
                absolute
                top-full
                -left-12
                pt-6
                w-[650px]
                opacity-0
                invisible
                translate-y-2
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all
                duration-300
                z-50
              "
            >
              <div className="bg-[#1a1a1a]/95 backdrop-blur-md p-8 shadow-2xl border-t-2 border-[#ff7a00]">

                <div className="grid grid-cols-2 gap-12 mb-8">

                  {/* CORPORATE */}
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-5">
                      Corporate Solutions
                    </h4>

                    <ul className="space-y-4 text-gray-400 font-medium text-[13px] tracking-wide">
                      {corporateSolutions.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="block w-fit hover:text-[#ff7a00] transition-colors duration-300"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ENGAGEMENT */}
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-5">
                      Engagement Solutions
                    </h4>

                    <ul className="space-y-4 text-gray-400 font-medium text-[13px] tracking-wide">
                      {engagementSolutions.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="block w-fit hover:text-[#ff7a00] transition-colors duration-300"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* DROPDOWN FOOTER */}
                <div className="flex items-center justify-between border-t border-gray-700/50 pt-6">

                  <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-[13px]">
                      Need a customized solution?
                    </h5>

                    <p className="text-gray-400 text-xs mt-1.5 tracking-wide">
                      Speak directly with our brand specialists.
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="
                      bg-[#ff7a00]
                      hover:bg-orange-600
                      text-white
                      px-6
                      py-2.5
                      font-bold
                      uppercase
                      text-xs
                      tracking-wider
                      transition-colors
                      flex items-center gap-2
                    "
                  >
                    Contact Sales
                    <span>→</span>
                  </Link>

                </div>
              </div>
            </div>
          </div>

          {/* =========================
              INSIGHTS DROPDOWN
          ========================== */}
          <div className="relative group">
            <Link
              to="/insights"
              className="
                flex items-center gap-1
                uppercase tracking-widest
                text-xs font-bold
                transition-colors duration-300
                py-2
                text-gray-300
                group-hover:text-[#ff7a00]
              "
            >
              Insights

              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* INSIGHTS DROPDOWN */}
            <div
              className="
                absolute
                top-full
                -left-12
                pt-6
                w-[300px]
                opacity-0
                invisible
                translate-y-2
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all
                duration-300
                z-50
              "
            >
              <div className="bg-[#1a1a1a]/95 backdrop-blur-md p-6 shadow-2xl border-t-2 border-[#ff7a00]">

                <ul className="space-y-4 text-gray-400 font-medium text-[13px] tracking-wide">
                  {insightsData.map((insight) => (
                    <li key={insight.id}>
                      <Link
                        to={`/insights/${insight.slug}`}
                        className="block w-fit hover:text-[#ff7a00] transition-colors duration-300"
                      >
                        {insight.title}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>

          {/* ABOUT */}
          <Link
            to="/about"
            className="text-gray-300 hover:text-[#ff7a00] transition-colors duration-300 py-2"
          >
            About
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            className="text-gray-300 hover:text-[#ff7a00] transition-colors duration-300 py-2"
          >
            Contact
          </Link>
        </div>

        {/* =========================
            DESKTOP CTA
        ========================== */}
        <div className="hidden lg:block">
          <Link
            to="/proposal"
            className="
              inline-flex
              items-center
              justify-center
              bg-[#ff7a00]
              hover:bg-orange-600
              text-white
              px-6 xl:px-8
              py-3.5
              font-bold
              uppercase
              text-xs
              tracking-wider
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Request Proposal
          </Link>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
     
<button
  type="button"
  aria-label="Toggle navigation menu"
  aria-expanded={isMobileMenuOpen}
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  className="
    lg:hidden
    relative
    w-10
    h-10
    flex
    items-center
    justify-center
    border
    border-gray-700
    hover:border-[#ff7a00]
    transition-colors
    duration-300
  "
>
  {/* Top line */}
  <span
    className={`
      absolute
      w-5
      h-0.5
      bg-white
      transition-all
      duration-300
      ease-in-out
      ${
        isMobileMenuOpen
          ? "rotate-45"
          : "-translate-y-1.5"
      }
    `}
  />

  {/* Middle line */}
  <span
    className={`
      absolute
      w-5
      h-0.5
      bg-white
      transition-all
      duration-300
      ease-in-out
      ${
        isMobileMenuOpen
          ? "opacity-0"
          : "opacity-100"
      }
    `}
  />

  {/* Bottom line */}
  <span
    className={`
      absolute
      w-5
      h-0.5
      bg-white
      transition-all
      duration-300
      ease-in-out
      ${
        isMobileMenuOpen
          ? "-rotate-45"
          : "translate-y-1.5"
      }
    `}
  />
</button>


      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          ${
            isMobileMenuOpen
              ? "max-h-[85vh] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="border-t border-gray-800 pt-5 pb-5">

          <div className="flex flex-col">

            {/* HOME */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                py-4
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-gray-300
                hover:text-[#ff7a00]
                border-b
                border-gray-800
                transition-colors
              "
            >
              Home
            </Link>

            {/* =========================
                MOBILE SERVICES
            ========================== */}
            <div className="border-b border-gray-800">

              <div className="flex items-center justify-between">

                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className="
                    py-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-widest
                    text-gray-300
                    hover:text-[#ff7a00]
                    transition-colors
                  "
                >
                  Services
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen(!mobileServicesOpen)
                  }
                  className="p-3 text-gray-400 hover:text-[#ff7a00]"
                  aria-label="Toggle services"
                >
                  <svg
                    className={`
                      w-4 h-4
                      transition-transform
                      duration-300
                      ${
                        mobileServicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

              </div>

              {/* SERVICES CONTENT */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    mobileServicesOpen
                      ? "max-h-[800px] opacity-100 pb-4"
                      : "max-h-0 opacity-0"
                  }
                `}
              >

                <div className="pl-4 border-l border-[#ff7a00]">

                  <p className="text-[#ff7a00] text-[11px] font-bold uppercase tracking-widest mb-3">
                    Corporate Solutions
                  </p>

                  <div className="flex flex-col gap-3 mb-6">

                    {corporateSolutions.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={closeMobileMenu}
                        className="
                          text-gray-400
                          hover:text-[#ff7a00]
                          text-sm
                          transition-colors
                        "
                      >
                        {service.title}
                      </Link>
                    ))}

                  </div>

                  <p className="text-[#ff7a00] text-[11px] font-bold uppercase tracking-widest mb-3">
                    Engagement Solutions
                  </p>

                  <div className="flex flex-col gap-3">

                    {engagementSolutions.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={closeMobileMenu}
                        className="
                          text-gray-400
                          hover:text-[#ff7a00]
                          text-sm
                          transition-colors
                        "
                      >
                        {service.title}
                      </Link>
                    ))}

                  </div>

                </div>

              </div>
            </div>

            {/* =========================
                MOBILE INSIGHTS
            ========================== */}
            <div className="border-b border-gray-800">

              <div className="flex items-center justify-between">

                <Link
                  to="/insights"
                  onClick={closeMobileMenu}
                  className="
                    py-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-widest
                    text-gray-300
                    hover:text-[#ff7a00]
                    transition-colors
                  "
                >
                  Insights
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setMobileInsightsOpen(!mobileInsightsOpen)
                  }
                  className="p-3 text-gray-400 hover:text-[#ff7a00]"
                  aria-label="Toggle insights"
                >
                  <svg
                    className={`
                      w-4 h-4
                      transition-transform
                      duration-300
                      ${
                        mobileInsightsOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

              </div>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    mobileInsightsOpen
                      ? "max-h-[500px] opacity-100 pb-4"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="pl-4 border-l border-[#ff7a00] flex flex-col gap-3">

                  {insightsData.map((insight) => (
                    <Link
                      key={insight.id}
                      to={`/insights/${insight.slug}`}
                      onClick={closeMobileMenu}
                      className="
                        text-gray-400
                        hover:text-[#ff7a00]
                        text-sm
                        transition-colors
                      "
                    >
                      {insight.title}
                    </Link>
                  ))}

                </div>
              </div>

            </div>

            {/* ABOUT */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="
                py-4
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-gray-300
                hover:text-[#ff7a00]
                border-b
                border-gray-800
                transition-colors
              "
            >
              About
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="
                py-4
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-gray-300
                hover:text-[#ff7a00]
                border-b
                border-gray-800
                transition-colors
              "
            >
              Contact
            </Link>

            {/* MOBILE CTA */}
            <Link
              to="/proposal"
              onClick={closeMobileMenu}
              className="
                mt-5
                w-full
                bg-[#ff7a00]
                hover:bg-orange-600
                text-white
                px-6
                py-4
                text-center
                font-bold
                uppercase
                text-xs
                tracking-widest
                transition-all
                duration-300
              "
            >
              Request Proposal
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

