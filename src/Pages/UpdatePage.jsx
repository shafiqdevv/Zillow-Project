import React from "react";

function ListingsIllustration() {
  return (
    <svg
      viewBox="0 0 640 340"
      role="img"
      aria-label="Illustration of saved home search preferences and new home listings"
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity=".13" />
        </filter>
        <filter id="bubbleShadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="#000000" floodOpacity=".2" />
        </filter>
      </defs>

      {/* Listing card one */}
      <g filter="url(#cardShadow)">
        <rect x="160" y="75" width="235" height="238" rx="19" fill="#fff" />
        <path d="M160 94a19 19 0 0 1 19-19h197a19 19 0 0 1 19 19v151H160Z" fill="#FFF0E2" />
        <path d="M160 170c20-18 28-18 44-3 14-28 31-27 48-8 20-27 38-18 52 0 19-22 42-15 55 2 13-18 25-15 36-5v89H160Z" fill="#FFD0C0" />
        <path d="M220 245v-74l42-43 48 43v74Z" fill="#0B5BCB" />
        <path d="M212 173l50-51 55 51-9 8-46-43-41 43Z" fill="#111827" />
        <path d="M235 245v-56h56v56Z" fill="#63D9EA" />
        <path d="M256 245v-34a11 11 0 0 1 22 0v34Z" fill="#fff" />
        <path d="M223 195h19v29h-19z" fill="#fff" />
        <path d="M282 195h19v29h-19z" fill="#fff" />
        <circle cx="261" cy="154" r="8" fill="#fff" />
        <path d="M195 245c-10-13 2-26 14-22 2-13 21-14 25-2 10-4 19 5 15 24Z" fill="#087B6C" />
        <path d="M298 245c-7-12 4-24 15-19 4-13 22-12 24 2 12-3 20 8 14 17Z" fill="#087B6C" />
        <rect x="176" y="263" width="203" height="12" rx="6" fill="#DADAE0" />
        <rect x="176" y="283" width="203" height="12" rx="6" fill="#DADAE0" />
        <text x="176" y="277" fontSize="18" fontWeight="700" fill="#55555F">$</text>
      </g>

      {/* Listing card two */}
      <g filter="url(#cardShadow)">
        <rect x="416" y="75" width="224" height="238" rx="19" fill="#fff" />
        <path d="M416 94a19 19 0 0 1 19-19h186a19 19 0 0 1 19 19v151H416Z" fill="#FFF0E2" />
        <path d="M416 169c18-19 29-19 43-2 17-27 34-27 49-7 19-26 38-17 51 0 19-22 40-15 54 2 11-16 17-17 27-7v90H416Z" fill="#FFD0C0" />
        <path d="M462 245v-83l49-61 57 61v83Z" fill="#E94B13" />
        <path d="M449 164l61-72 68 72-10 10-58-61-51 61Z" fill="#15151B" />
        <path d="M487 245v-49h74v49Z" fill="#9C2609" />
        <path d="M506 207h38v7h-38z" fill="#fff" />
        <path d="M562 245v-60h50v60Z" fill="#FFAA8F" />
        <path d="M574 185v-28h12v28Z" fill="#fff" />
        <path d="M598 185v-28h12v28Z" fill="#fff" />
        <path d="M577 222v-20a9 9 0 0 1 18 0v20Z" fill="#fff" />
        <path d="M529 116V84h16v32Z" fill="#E94B13" />
        <path d="M519 245c-8-12 3-24 15-20 3-13 21-13 24 1 11-3 20 7 15 19Z" fill="#087B6C" />
        <path d="M603 245c-7-11 3-23 14-18 4-12 20-11 23 2 9-2 15 7 11 16Z" fill="#087B6C" />
        <rect x="432" y="263" width="192" height="12" rx="6" fill="#DADAE0" />
        <rect x="432" y="283" width="192" height="12" rx="6" fill="#DADAE0" />
        <text x="432" y="277" fontSize="18" fontWeight="700" fill="#55555F">$</text>
      </g>

      {/* Search preferences bubble */}
      <g filter="url(#bubbleShadow)">
        <path d="M75 48h165a43 43 0 0 1 43 43v85a43 43 0 0 1-43 43h-57l31 42-78-42H75a43 43 0 0 1-43-43V91a43 43 0 0 1 43-43Z" fill="#fff" />
        {["Beds", "Baths", "Location"].map((label, index) => (
          <g key={label}>
            <circle cx="82" cy={91 + index * 43} r="14" fill="#087B6C" />
            <path d={`m75 ${91 + index * 43} 5 5 9-11`} fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="111" y={98 + index * 43} fontSize="22" fontWeight="700" fill="#087B6C">{label}</text>
          </g>
        ))}
      </g>

      {/* Notification bell */}
      <path d="M605 20c-24 0-43 19-43 43 0 15 8 29 20 36l-5 19 23-13c2 0 3 1 5 1 24 0 43-19 43-43s-19-43-43-43Z" fill="#0645D8" />
      <path d="M605 42c-7 0-12 6-12 13v5c0 8-4 13-7 17h38c-4-4-7-9-7-17v-5c0-7-5-13-12-13Z" fill="#73DDF0" />
      <path d="M599 81a6 6 0 0 0 12 0Z" fill="#73DDF0" />
    </svg>
  );
}

export default function UpdatePage() {
  return (
    <section className="w-full bg-[#f7f7f7] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-[430px]">
          <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.7px] text-[#111111] sm:text-[36px]">
            Check out new listings
            <br />
            you’ll love
          </h2>

          <p className="mt-8 max-w-[410px] text-[15px] leading-[1.6] text-[#111827]">
            Sign in to see homes that match your saved searches.
            <br className="hidden sm:block" />
            You can also edit those searches so you only get the
            <br className="hidden sm:block" />
            updates you want.
          </p>

          <button
            type="button"
            className="mt-8 min-h-[55px] w-[235px] rounded-xl bg-[#0645d8] px-8 text-[15px] font-bold text-white transition-colors hover:bg-[#0037bd] focus:outline-none focus:ring-2 focus:ring-[#0645d8] focus:ring-offset-2"
          >
            Sign in
          </button>
        </div>

        <div className="mx-auto w-full max-w-[640px]">
          <ListingsIllustration />
        </div>
      </div>
    </section>
  );
}