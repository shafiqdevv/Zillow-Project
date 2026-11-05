
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { ChevronDown, ArrowRight } from "lucide-react";

const footerMenus = [
  {
    title: "Real Estate",
    links: [
      "About",
      "Zestimates",
      "News",
      "Research",
      "Careers",
    ],
  },
  {
    title: "Rentals",
    links: [
      "Rental Listings",
      "Rental Buildings",
      "Renter Hub",
      "Advertise",
    ],
  },
  {
    title: "Mortgage Rates",
    links: [
      "Current Mortgage Rates",
      "Mortgage Calculator",
      "Mortgage Lenders",
      "Refinance",
    ],
  },
  {
    title: "Browse Homes",
    links: [
      "Homes for Sale",
      "Homes for Rent",
      "New Construction",
      "Foreclosures",
    ],
  },
];

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

const companyLinks = [
  "Trulia",
  "StreetEasy",
  "HotPads",
  "Out East",
];

function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700">

      {/* Recommendations */}
      <div className="border-b border-gray-300 px-4 py-8 text-center">
        <h3 className="mb-3 text-base font-bold text-gray-900">
          About Zillow's Recommendations
        </h3>

        <p className="mx-auto max-w-6xl text-sm leading-6 text-gray-600 sm:text-base">
          Recommendations are based on your location and search activity,
          such as the homes you've viewed and saved and the filters you've
          used. We use this information to bring similar homes to your
          attention, so you don't miss out.
        </p>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-300 px-4 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0">

          {footerMenus.map((menu, index) => (
            <div
              key={menu.title}
              className={`flex flex-col items-center ${
                index !== 0
                  ? "sm:border-l sm:border-gray-300"
                  : ""
              }`}
            >
              <button
                type="button"
                className="flex items-center gap-2 text-base font-medium text-gray-900 transition-colors hover:text-[#006AFF]"
              >
                {menu.title}
                <ChevronDown
                  size={18}
                  className="text-[#006AFF]"
                />
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* Footer Links */}
      <div className="border-b border-gray-300 px-4 py-7">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-5 gap-y-4">

          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-700 transition-colors hover:text-[#006AFF] hover:underline"
            >
              {link}
            </a>
          ))}

        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {companyLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-700 transition-colors hover:text-[#006AFF] hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="mt-7 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#006AFF] hover:underline"
          >
            Do Not Sell or Share My Personal Information
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Legal Information */}
      <div className="border-b border-gray-300 px-4 py-8">
        <div className="mx-auto max-w-3xl text-center text-[11px] leading-[1.7] text-gray-500 sm:text-xs">

          <p className="mb-7">
            Zillow Group is committed to ensuring digital accessibility
            for individuals with disabilities. We are continuously
            working to improve the accessibility of our web experience
            for everyone, and we welcome feedback and accommodation
            requests. If you wish to report an issue or seek an
            accommodation, please{" "}
            <a href="#" className="text-[#006AFF] underline">
              let us know
            </a>.
          </p>

          <p>
            <a href="#" className="text-[#006AFF] underline">
              Affiliated Business Arrangement Disclosure
            </a>
          </p>

          <p>
            Zillow, Inc. holds real estate brokerage licenses in multiple
            states. Zillow (Canada), Inc. holds real estate brokerage
            licenses in multiple provinces.
          </p>

          <p>
            All mortgage lending products and information provided by
            Zillow Home Loans, LLC, NMLS #10287.{" "}
            <a href="#" className="text-[#006AFF] underline">
              NMLS Consumer Access
            </a>
          </p>

          <p>
            Licensed Mortgage Banker, N.Y.S. Department of Financial Services
          </p>

          <p>
            2600 Michelson Drive, Suite 1201, Irvine, CA 92612 |
            Equal Housing Lender |{" "}
            <a href="#" className="text-[#006AFF] underline">
              Licensing Information
            </a>
          </p>

          <p>
            <a href="#" className="text-[#006AFF] underline">
              § 442-H New York Standard Operating Procedures
            </a>
          </p>

          <p>
            <a href="#" className="text-[#006AFF] underline">
              § New York Fair Housing Notice
            </a>
          </p>

          <p>
            TREC:{" "}
            <a href="#" className="text-[#006AFF] underline">
              Information about brokerage services
            </a>
            ,{" "}
            <a href="#" className="text-[#006AFF] underline">
              Consumer protection notice
            </a>
          </p>

          <p>California DRE #1522444</p>

          <p className="mt-3 text-sm">
            <a href="#" className="text-[#006AFF] underline">
              Contact Zillow, Inc. Brokerage
            </a>
          </p>

          <p className="mt-7">
            For listings in Canada, the trademarks REALTOR®, REALTORS®,
            and the REALTOR® logo are controlled by The Canadian Real
            Estate Association (CREA) and identify real estate
            professionals who are members of CREA. The trademarks
            MLS®, Multiple Listing Service® and the associated logos
            are owned by CREA and identify the quality of services
            provided by real estate professionals who are members
            of CREA. Used under license.
          </p>

        </div>
      </div>

      {/* App Downloads */}
      <div className="flex flex-wrap justify-center gap-3 px-4 pt-8">

        <a
          href="#"
          className="flex items-center gap-2 rounded-lg border border-gray-400 px-3 py-1.5 text-gray-900 transition-colors hover:bg-gray-100"
        >
          <FaApple size={23} />
          <span className="text-left text-[9px] leading-tight">
            Download on the
            <strong className="block text-sm">
              App Store
            </strong>
          </span>
        </a>

        <a
          href="#"
          className="flex items-center gap-2 rounded-lg border border-gray-400 px-3 py-1.5 text-gray-900 transition-colors hover:bg-gray-100"
        >
          <FaGooglePlay size={20} />
          <span className="text-left text-[9px] leading-tight">
            GET IT ON
            <strong className="block text-sm">
              Google Play
            </strong>
          </span>
        </a>

      </div>

      {/* Bottom Footer */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-5 px-4 py-10 sm:flex-row sm:gap-4">

        {/* Zillow Logo */}
        <a
          href="#"
          className="flex items-center gap-1 text-2xl font-bold text-gray-950"
        >
          <span className="text-[#006AFF]">
            <FaHouse size={24} />
          </span>
          Zillow
        </a>

        {/* Social Media */}
        <div className="flex items-center gap-3">

          <span className="text-sm italic text-gray-500">
            Follow us:
          </span>

          <a
            href="#"
            aria-label="Facebook"
            className="text-[#1877F2] transition-transform hover:scale-110"
          >
            <FaFacebook size={27} />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="text-[#1877F2] transition-transform hover:scale-110"
          >
            <FaInstagram size={27} />
          </a>

          <a
            href="#"
            aria-label="TikTok"
            className="text-[#1877F2] transition-transform hover:scale-110"
          >
            <FaTiktok size={25} />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-sm italic text-gray-500">
          © 2006-2026 Zillow
        </p>

        {/* Equal Housing */}
        <div
          title="Equal Housing Opportunity"
          className="flex flex-col items-center text-gray-950"
        >
          <FaHouse size={29} />
          <span className="text-[6px] font-bold">
            EQUAL HOUSING
          </span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
