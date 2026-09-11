import {
  FaUsers,
  FaChartLine,
  FaGear,
  FaClock,
  FaHandshake,
  FaGem,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa6";

const benefits = [
  {
    icon: FaUsers,
    title: "Broaden Your Services",
    description:
      "Extend your service portfolio with reliable corporate branding, printing, promotional and engagement solutions.",
  },
  {
    icon: FaChartLine,
    title: "Create New Revenue",
    description:
      "Unlock additional business opportunities by introducing high-value solutions to your existing client base.",
  },
  {
    icon: FaGear,
    title: "Simplify Execution",
    description:
      "Work with a single experienced partner to manage branding, promotional and corporate engagement requirements.",
  },
  {
    icon: FaClock,
    title: "Reliable Turnaround",
    description:
      "Benefit from an organized process, responsive coordination and dependable execution from concept to delivery.",
  },
  {
    icon: FaHandshake,
    title: "Build Strong Relationships",
    description:
      "Develop a partnership focused on transparency, collaboration and sustainable long-term business growth.",
  },
  {
    icon: FaGem,
    title: "Access Our Network",
    description:
      "Connect with a professional ecosystem built around quality, expertise and opportunities for mutual growth.",
  },
];

function PartnerNetwork() {
  return (
    <section className="w-full overflow-hidden bg-[#1a1a1a] text-white">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section
        className="relative min-h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(26,26,26,0.98) 0%,
              rgba(26,26,26,0.93) 28%,
              rgba(26,26,26,0.78) 48%,
              rgba(26,26,26,0.42) 72%,
              rgba(26,26,26,0.18) 100%
            ),
            url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90")
          `,
        }}
      >

        {/* Subtle dark gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1440px] items-center px-6 py-20 sm:px-10 lg:px-16">

          <div className="w-full max-w-3xl">

            {/* Label */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-9 bg-[#ff7a00]" />

              <span className="text-xs font-bold tracking-[0.22em] text-[#ff7a00] sm:text-sm">
                PARTNER WITH PROMAXIFY
              </span>

            </div>


            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-[1.04] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[50px]">

              Extend Your Reach.
              <br />

              <span className="text-white">
                Strengthen Your Offering.
              </span>

              <br />

              <span className="text-[#ff7a00]">
                Grow Together.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Partner with Promaxify to deliver dependable corporate
              branding, promotional and engagement solutions that create
              greater value for your clients and new opportunities for
              your business.
            </p>


            {/* Keywords */}
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-bold tracking-[0.18em] text-gray-300 sm:text-xs">

              <span className="transition-colors hover:text-white">
                COLLABORATE
              </span>

              <span className="text-[#ff7a00]">|</span>

              <span className="transition-colors hover:text-white">
                DELIVER
              </span>

              <span className="text-[#ff7a00]">|</span>

              <span className="transition-colors hover:text-white">
                GROW
              </span>

              <span className="text-[#ff7a00]">|</span>

              <span className="transition-colors hover:text-white">
                SUCCEED
              </span>

            </div>

          </div>


          {/* Right Side Message */}
          <div className="absolute bottom-20 right-8 hidden xl:block">

            <div className="flex flex-col gap-1 text-xs font-medium tracking-[0.22em] text-gray-300">

              <span>EXPERTISE</span>
              <span>COLLABORATION</span>
              <span>GROWTH</span>

            </div>

            <div className="mt-5 h-[2px] w-10 bg-[#ff7a00]" />

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY PARTNER SECTION
      ========================================================= */}
      <section className="bg-[#1a1a1a] text-white">

        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* Left */}
            <div className="border-b border-white/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-16">

              <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a00] sm:text-sm">
                WHY PARTNER WITH PROMAXIFY
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">

                More Value.
                <br />

                <span className="text-[#ff7a00]">
                  Greater Growth.
                </span>

              </h2>

            </div>


            {/* Right */}
            <div className="flex items-center">

              <p className="max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">

                Promaxify believes that the strongest partnerships are built
                around shared value and long-term growth. Our partner network
                enables consultants, agencies, event professionals and
                business specialists to expand their offerings with reliable
                corporate branding, promotional and engagement solutions —
                supported by one experienced partner.

              </p>

            </div>

          </div>


          {/* =====================================================
              BENEFITS
          ===================================================== */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

            {benefits.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-xl
                    border
                    border-white/10
                    bg-[#202020]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#ff7a00]/40
                    hover:bg-[#242424]
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ff7a00]/10
                      text-[#ff7a00]
                      ring-1
                      ring-[#ff7a00]/20
                      transition-all
                      duration-300
                      group-hover:bg-[#ff7a00]
                      group-hover:text-white
                    "
                  >
                    <Icon className="text-xl" />
                  </div>


                  {/* Title */}
                  <h3 className="mt-6 text-[15px] font-bold leading-6 text-white">
                    {item.title}
                  </h3>


                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>


                  {/* Small orange line */}
                  <div
                    className="
                      mt-6
                      h-[2px]
                      w-7
                      bg-[#ff7a00]
                      transition-all
                      duration-300
                      group-hover:w-12
                    "
                  />

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA SECTION
      ========================================================= */}
      <section className="border-t border-white/10 bg-[#1a1a1a] px-6 py-20 text-center sm:px-10 lg:px-16">

        <div className="mx-auto max-w-4xl">

          {/* Label */}
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a00] sm:text-sm">
            BECOME A PROMAXIFY PARTNER
          </span>


          {/* Heading */}
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">

            Let's Create More Value.

            <span className="text-[#ff7a00]">
              {" "}Together.
            </span>

          </h2>


          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">

            Bring more capabilities to your clients without expanding your
            internal operations. Partner with Promaxify and access a
            dependable range of corporate branding, promotional and
            engagement solutions backed by professional execution.

          </p>


          {/* WhatsApp CTA */}
         <a
  href="https://wa.me/919625754262?text=Hello%20Promaxify%20Team%2C%20I%27m%20interested%20in%20exploring%20a%20partnership%20opportunity%20with%20Promaxify.%20Please%20share%20more%20information%20about%20your%20partner%20network%20and%20how%20we%20can%20collaborate.%20Thank%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    mx-auto
    mt-10
    flex
    w-full
    max-w-[460px]
    items-center
    justify-center
    gap-4
    rounded-xl
    bg-[#ff7a00]
    px-6
    py-4
    text-sm
    font-bold
    text-white
    shadow-[0_10px_35px_rgba(255,122,0,0.18)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#e96d00]
    hover:shadow-[0_15px_45px_rgba(255,122,0,0.28)]
    sm:text-base
  "
>
  <FaWhatsapp className="text-2xl" />

  <span>
    Discuss a Partnership
  </span>

  <FaArrowRight
    className="
      text-lg
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</a>


          {/* Supporting text */}
          <p className="mt-5 text-sm text-gray-500">
            Start with a conversation. Explore the possibilities.
          </p>

        </div>

      </section>

    </section>
  );
}

export default PartnerNetwork;