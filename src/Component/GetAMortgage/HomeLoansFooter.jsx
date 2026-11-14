
import {
  Smartphone,
  ExternalLink,
} from "lucide-react";

// ==========================================
// FOOTER DATA
// ==========================================

const footerLinks = [
  { title: "Terms of use", link: "#" },
  { title: "Privacy policy", link: "#" },
  { title: "Licensing info", link: "#" },
  { title: "Cookie preference", link: "#" },
];

const company = {
  address: "2600 Michelson Drive, Suite 1201 Irvine, CA 92612",
  phone: "888-852-2212",
  phoneLink: "tel:8888522212",
  contactLink: "#",
  nmls: "10287",
  nmlsLink: "https://www.nmlsconsumeraccess.org",
};

// ==========================================
// ZILLOW LOGO
// ==========================================

function ZillowLogo() {
  return (
    <div className="flex items-center gap-1.5 text-gray-950">
      <svg
        viewBox="0 0 28 28"
        className="h-6 w-6 text-[#006AFF]"
        fill="currentColor"
      >
        <path d="M14 2 2 10v15h9v-8h6v8h9V10L14 2Zm0 4.2 8 5.3v10.5h-2v-8H8v8H6V11.5l8-5.3Z" />
      </svg>

      <span className="text-base font-bold tracking-tight">
        Zillow<span className="font-normal">HomeLoans</span>
      </span>
    </div>
  );
}

// ==========================================
// EQUAL HOUSING LOGO
// ==========================================

function EqualHousingLogo() {
  return (
    <div className="flex w-[76px] shrink-0 flex-col items-center text-black">
      <svg viewBox="0 0 80 70" className="w-full">
        <path
          d="M4 23 40 3 76 23v8H4z"
          fill="currentColor"
        />
        <path
          d="M12 28h56v32H12z"
          fill="currentColor"
        />
        <path
          d="M23 35h34v5H23zm0 11h34v5H23z"
          fill="white"
        />
      </svg>

      <span className="mt-1 text-center text-[9px] font-black leading-[10px]">
        EQUAL HOUSING
        <br />
        LENDER
      </span>
    </div>
  );
}

// ==========================================
// BOTTOM CITY ILLUSTRATION
// ==========================================

function CityIllustration() {
  return (
    <svg
      viewBox="0 0 1400 210"
      className="block w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* Ground */}
      <path
        d="M0 207H1400"
        stroke="#D1D5DB"
        strokeWidth="1.5"
      />

      {/* Trees */}
      <path d="M40 207C18 195 22 171 35 156C28 132 51 117 64 137C80 157 73 181 66 207Z" fill="#006AFF" />
      <path d="M72 207C58 188 66 165 78 166C91 174 91 194 85 207Z" fill="#FFB52E" />
      <path d="M112 207 139 164 168 207Z" fill="#0A4AA3" />

      {/* House 1 */}
      <path d="M165 128 223 60 281 128V207H165Z" fill="#C5E8F9" />
      <path d="M154 130 223 49 292 130H275L223 75 172 130Z" fill="#006AFF" />
      <path d="M222 75 292 130H275L223 75Z" fill="#104B9C" />
      <path d="M193 153h17v19h-17zM244 153h17v19h-17z" fill="white" />
      <path d="M211 207v-30a12 12 0 0 1 24 0v30" fill="#006AFF" />

      {/* Building 1 */}
      <path d="M360 31h170v176H360z" fill="#C5E8F9" />
      <path d="M470 31h60v176h-60z" fill="#0D4A9C" />
      <path d="M360 31h170v13H360z" fill="#006AFF" />
      {Array.from({ length: 3 }).map((_, i) => (
        <g key={i}>
          <path
            d={`M365 ${55 + i * 42}h100v34H365z`}
            fill="#C5E8F9"
            stroke="#006AFF"
            strokeWidth="5"
          />
          <path
            d={`M475 ${55 + i * 42}h50v34h-50z`}
            fill="#1872FF"
            stroke="#006AFF"
            strokeWidth="4"
          />
        </g>
      ))}
      <path d="M395 207v-27h35v27" fill="#006AFF" />

      {/* Small building */}
      <path d="M595 113h130v94H595z" fill="#006AFF" />
      <path d="M595 113h130v12H595zM595 143h130v8H595zM595 172h130v8H595z" fill="#0D4A9C" />
      <path d="M615 207v-35h24v35" fill="#104B9C" />
      <path d="M684 129h9v9h-9zM700 129h9v9h-9z" fill="#C5E8F9" />

      {/* House 2 */}
      <path d="M782 134 842 72 905 134V207H782Z" fill="#C5E8F9" />
      <path d="M771 135 842 60 915 135h-18l-55-57-54 57Z" fill="#006AFF" />
      <path d="M842 78 897 135h-20L842 78Z" fill="#0D4A9C" />
      <path d="M805 150h20v20h-20zM853 150h20v20h-20z" fill="white" />
      <path d="M839 207v-34h18v34" fill="#006AFF" />

      {/* Tall building */}
      <path d="M990 30h135v177H990z" fill="#006AFF" />
      <path d="M1100 30h25v177h-25z" fill="#104B9C" />
      <path d="M1000 30h125v11h-125z" fill="#B8E6F9" />
      {Array.from({ length: 3 }).map((_, i) => (
        <g key={i}>
          {Array.from({ length: 3 }).map((_, j) => (
            <rect
              key={j}
              x={1010 + j * 30}
              y={54 + i * 43}
              width="16"
              height="31"
              fill="#B8E6F9"
            />
          ))}
        </g>
      ))}
      <path d="M1007 207v-28a18 18 0 0 1 36 0v28" fill="#B8E6F9" />

      {/* Final small building */}
      <path d="M1160 128h120v79h-120z" fill="#C5E8F9" />
      <path d="M1160 128h120v9h-120z" fill="#006AFF" />
      <path d="M1230 128h50v79h-50z" fill="#104B9C" />
      <path d="M1172 145h28v28h-28zM1205 145h18v28h-18z" fill="white" />
      <path d="M1240 174h26v33h-26z" fill="#B8E6F9" />

      {/* Decorative trees */}
      <path d="M1294 207c-15-17-7-37 8-39-11-17 6-35 21-25 18 12 13 28 1 33 19 13 12 26-2 31Z" fill="#104B9C" />
      <path d="M740 207c-15-15-9-33 3-35-8-15 5-29 16-20 13 10 9 23 0 29 13 12 8 22-2 26Z" fill="#006AFF" />
      <path d="M950 207c-16-18-8-36 5-39-7-17 8-30 19-18 13 13 8 26-2 31 15 13 9 22-1 26Z" fill="#006AFF" />
      <path d="M1350 207c-12-15-5-27 7-30-5-13 7-22 17-12 11 10 7 19-2 23 12 9 7 17-2 19Z" fill="#FFB52E" />
    </svg>
  );
}

// ==========================================
// MAIN FOOTER COMPONENT
// ==========================================

function HomeLoansFooter() {
  return (
    <footer className="w-full overflow-hidden bg-white">

      {/* ================================== */}
      {/* BUYABILITY SECTION */}
      {/* ================================== */}

      <div className="mx-auto max-w-[1200px] border-x border-b border-gray-300 px-6 py-12 sm:px-10 sm:py-14 lg:px-16">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
              Take the first step with
              <br />
              <span className="text-[#0047D9]">
                BuyAbility<sup className="text-base">SM</sup>
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-800 sm:text-lg">
              Know your budget and see which homes you can afford in real time
              with Zillow Home Loans' BuyAbility tool.
            </p>

            <div className="mt-7">
              <p className="font-bold text-gray-950">
                Ready to speak with a real person?
              </p>

              <a
                href="tel:8559172501"
                className="mt-3 inline-flex items-center gap-3 pl-4 text-base font-bold text-[#0047D9] transition-colors hover:text-blue-700 sm:text-lg"
              >
                <Smartphone size={23} strokeWidth={2.5} />
                Call us at (855) 917-2501
              </a>
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex items-start justify-start md:justify-end">
            <div className="flex min-h-[68px] w-full max-w-[410px] items-center rounded-[22px] border border-gray-300 px-6">
              <ZillowLogo />
            </div>
          </div>

        </div>
      </div>

      {/* ================================== */}
      {/* COMPANY INFORMATION */}
      {/* ================================== */}

      <div className="mx-auto max-w-[1350px] px-6 pb-5 pt-16 sm:px-8 lg:px-10 lg:pt-20">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[180px_1.1fr_1.5fr] lg:gap-12">

          {/* Legal Links */}
          <div className="flex flex-col items-start gap-4">
            {footerLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-base text-gray-900 transition-colors hover:text-[#006AFF] sm:text-lg"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Company Address */}
          <div className="flex flex-col items-start gap-3">
            <ZillowLogo />

            <p className="text-sm leading-6 text-gray-900 sm:text-base">
              {company.address}
            </p>

            <a
              href={company.phoneLink}
              className="mt-1 font-bold text-[#0047D9] hover:underline"
            >
              {company.phone}
            </a>

            <p className="mt-3 text-sm leading-6 text-gray-900 sm:text-base">
              Submit concerns or questions
              <br />
              through our{" "}
              <a
                href={company.contactLink}
                className="text-[#0047D9] underline underline-offset-2"
              >
                contact form.
              </a>
            </p>
          </div>

          {/* Equal Housing Information */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <EqualHousingLogo />

            <div className="text-sm leading-5 text-gray-900">
              <p className="font-bold">
                ©2026 Zillow Home Loans, LLC
              </p>

              <p>An Equal Housing Lender</p>

              <p>NMLS ID#: {company.nmls}</p>

              <a
                href={company.nmlsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0047D9] underline underline-offset-2"
              >
                www.nmlsconsumeraccess.org
              </a>
            </div>
          </div>

        </div>

        {/* ================================== */}
        {/* BOTTOM CITY ILLUSTRATION */}
        {/* ================================== */}

        <div className="mt-10 w-full overflow-hidden sm:mt-12 lg:mt-8">
          <CityIllustration />
        </div>

      </div>
    </footer>
  );
}

export default HomeLoansFooter;
