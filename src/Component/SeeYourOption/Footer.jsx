
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

import { SiZillow } from "react-icons/si";

const footerLinks = [
  "About",
  "Zestimates",
  "News",
  "Research",
  "Careers",
  "Applicant Privacy Notice",
  "Help",
  "Advertise",
  "Fair Housing Guide",
  "Advocacy",
  "Terms of use",
  "Privacy Notice",
  "Ad Choices",
  "Cookie Preference",
  "Learn",
  "AI",
  "Mobile Apps",
];

const networkLinks = [
  "Trulia",
  "StreetEasy",
  "HotPads",
  "Out East",
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#2A2A35] px-4 sm:px-6 lg:px-8">

      {/* TOP LINKS */}
      <div className="max-w-[1650px] mx-auto pt-5 pb-9">

        <nav className="flex flex-wrap justify-center items-center gap-x-7 gap-y-5 text-[16px] sm:text-[19px]">

          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="whitespace-nowrap hover:underline transition-all"
            >
              {link}
            </a>
          ))}

        </nav>

        {/* NETWORK LINKS */}
        <nav className="flex flex-wrap justify-center items-center gap-x-7 gap-y-4 mt-5 text-[16px] sm:text-[19px]">

          {networkLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline transition-all"
            >
              {link}
            </a>
          ))}

        </nav>

        {/* PRIVACY LINK */}
        <div className="flex justify-center mt-8">

          <a
            href="#"
            className="text-[#0059E8] text-[16px] sm:text-[20px] hover:underline flex items-center gap-1"
          >
            Do Not Sell or Share My Personal Information
            <span className="text-2xl">→</span>
          </a>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#D5D5DC]"></div>

      {/* LEGAL CONTENT */}
      <div className="max-w-[1050px] mx-auto text-center pt-8 pb-5">

        {/* ACCESSIBILITY */}
        <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#555D70]">
          Zillow Group is committed to ensuring digital accessibility
          for individuals with disabilities. We are continuously working
          to improve the accessibility of our web experience for everyone,
          and we welcome feedback and accommodation requests. If you wish
          to report an issue or seek an accommodation, please{" "}
          <a href="#" className="text-[#0046E5] underline">
            let us know.
          </a>
        </p>

        {/* BUSINESS DISCLOSURE */}
        <div className="mt-8 text-[13px] sm:text-[14px] leading-[1.6] text-[#555D70]">

          <a href="#" className="text-[#0046E5] underline block mb-1">
            Affiliated Business Arrangement Disclosure
          </a>

          <p>
            Zillow, Inc. holds real estate brokerage{" "}
            <a href="#" className="text-[#0046E5] underline">
              licenses
            </a>{" "}
            in multiple states. Zillow (Canada), Inc. holds real estate
            brokerage{" "}
            <a href="#" className="text-[#0046E5] underline">
              licenses
            </a>{" "}
            in multiple provinces.
          </p>

          <p>
            All mortgage lending products and information provided by
            Zillow Home Loans, LLC, NMLS #10287.{" "}
            <a href="#" className="text-[#0046E5] underline">
              NMLS Consumer Access
            </a>
          </p>

          <p>
            Licensed Mortgage Banker, N.Y.S. Department of Financial Services
          </p>

          <p>
            2600 Michelson Drive, Suite 1201, Irvine, CA 92612 |
            Equal Housing Lender |{" "}
            <a href="#" className="text-[#0046E5] underline">
              Licensing Information
            </a>
          </p>

          <p>
            <a href="#" className="text-[#0046E5] underline">
              § 442-H New York Standard Operating Procedures
            </a>
          </p>

          <p>
            <a href="#" className="text-[#0046E5] underline">
              § New York Fair Housing Notice
            </a>
          </p>

          <p>
            TREC:{" "}
            <a href="#" className="text-[#0046E5] underline">
              Information about brokerage services
            </a>
            ,{" "}
            <a href="#" className="text-[#0046E5] underline">
              Consumer protection notice
            </a>
          </p>

          <p>California DRE #1522444</p>

          <a
            href="#"
            className="text-[#0046E5] underline text-[17px] sm:text-[19px] block mt-2"
          >
            Contact Zillow, Inc. Brokerage
          </a>

        </div>

        {/* CANADA COPYRIGHT */}
        <p className="mt-8 text-[13px] sm:text-[14px] leading-[1.6] text-[#555D70]">
          For listings in Canada, the trademarks REALTOR®, REALTORS®,
          and the REALTOR® logo are controlled by The Canadian Real Estate
          Association (CREA) and identify real estate professionals who
          are members of CREA. The trademarks MLS®, Multiple Listing
          Service® and the associated logos are owned by CREA and identify
          the quality of services provided by real estate professionals
          who are members of CREA. Used under license.
        </p>

        {/* APP DOWNLOAD BUTTONS */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-8">

          {/* APP STORE */}
          <a
            href="#"
            className="flex items-center gap-2 border border-[#33333D] rounded-lg px-3 py-1.5 hover:bg-gray-100 transition"
          >
            <FaApple className="text-[27px]" />

            <div className="flex flex-col leading-none text-left">
              <span className="text-[9px]">Download on the</span>
              <span className="text-[17px] font-semibold">
                App Store
              </span>
            </div>
          </a>

          {/* GOOGLE PLAY */}
          <a
            href="#"
            className="flex items-center gap-2 border border-[#33333D] rounded-lg px-3 py-1.5 hover:bg-gray-100 transition"
          >
            <FaGooglePlay className="text-[25px]" />

            <div className="flex flex-col leading-none text-left">
              <span className="text-[9px]">GET IT ON</span>
              <span className="text-[16px] font-semibold">
                Google Play
              </span>
            </div>
          </a>

        </div>

        {/* BOTTOM BRAND & SOCIAL */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mt-10 pb-3">

          {/* ZILLOW LOGO */}
          <a href="/" className="flex items-center gap-1">

            <svg
              viewBox="0 0 32 32"
              className="w-7 h-7"
              fill="none"
            >
              <path
                d="M5 13L24 3L29 10L11 21H27V28H3V17L19 8H5V13Z"
                fill="#006AFF"
              />
            </svg>

            <span className="text-[25px] font-bold tracking-tight text-black">
              Zillow
            </span>

          </a>

          {/* FOLLOW US */}
          <span className="text-[16px] italic text-[#555D70]">
            Follow us:
          </span>

          {/* FACEBOOK */}
          <a
            href="#"
            aria-label="Facebook"
            className="text-[#1877F2] hover:scale-110 transition-transform"
          >
            <FaFacebookF className="text-[37px]" />
          </a>

          {/* INSTAGRAM */}
          <a
            href="#"
            aria-label="Instagram"
            className="text-[#0059E8] hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-[39px]" />
          </a>

          {/* TIKTOK */}
          <a
            href="#"
            aria-label="TikTok"
            className="text-[#0046E5] hover:scale-110 transition-transform"
          >
            <FaTiktok className="text-[35px]" />
          </a>

          {/* COPYRIGHT */}
          <span className="text-[16px] italic text-[#555D70] ml-2">
            © 2006-2026 Zillow
          </span>

          {/* FAIR HOUSING */}
          <svg
            viewBox="0 0 48 48"
            className="w-11 h-11 text-black"
            fill="currentColor"
          >
            <path d="M24 2L2 17V45H46V17L24 2ZM24 9L39 20V39H9V20L24 9Z" />
            <path d="M14 22H34V27H14V22ZM14 30H34V35H14V30Z" />
          </svg>

        </div>

      </div>

    </footer>
  );
}
