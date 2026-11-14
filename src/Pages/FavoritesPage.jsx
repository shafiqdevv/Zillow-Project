import React from "react";
import Footer from "../Component/Home/Footer";

function FavoriteCardsIllustration() {
  return (
    <svg
      viewBox="0 0 760 430"
      role="img"
      aria-label="Illustration of saved homes in favorite cards"
      className="h-auto w-full max-w-[760px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="favorites-shadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="170%"
        >
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="12"
            floodColor="#000000"
            floodOpacity=".13"
          />
        </filter>

        <clipPath id="home-card-art">
          <rect x="0" y="0" width="270" height="205" rx="18" />
        </clipPath>
      </defs>

      {/* Back card */}
      <g
        transform="translate(420 78) rotate(11 130 175)"
        filter="url(#favorites-shadow)"
      >
        <rect width="270" height="350" rx="20" fill="#fff" />

        <g clipPath="url(#home-card-art)">
          <rect width="270" height="205" fill="#fff0df" />
          <circle cx="35" cy="175" r="38" fill="#ffcbbd" />
          <path d="M-5 176 Q45 130 90 177 L90 210 H-5Z" fill="#0a6258" />
          <path d="M60 95 L150 38 L250 90 L250 205 L60 205Z" fill="#ffcab9" />
          <path
            d="M45 95 L150 30 L265 90 L265 112 L150 62 L58 119Z"
            fill="#17151b"
          />
          <path d="M195 40 L220 46 L212 88 L188 82Z" fill="#e74717" />
          <path d="M88 116 L130 116 L130 165 L88 165Z" fill="#fff2e9" />
          <path d="M145 112 L177 112 L177 150 L145 150Z" fill="#fff2e9" />
          <path d="M190 117 L222 117 L222 155 L190 155Z" fill="#fff2e9" />
          <path d="M130 166 L160 166 L160 205 L130 205Z" fill="#0647d9" />
          <path d="M0 194 Q40 170 75 200 L75 220 H0Z" fill="#0a6258" />
        </g>

        <path
          d="M205 25 C193 8 164 16 164 39 C164 59 205 83 205 83 C205 83 246 59 246 39 C246 16 217 8 205 25Z"
          fill="#0647d9"
        />

        <rect x="20" y="230" width="230" height="15" rx="7.5" fill="#dedee1" />
        <rect x="20" y="263" width="185" height="15" rx="7.5" fill="#dedee1" />
      </g>

      {/* Third card */}
      <g
        transform="translate(320 55) rotate(5 130 175)"
        filter="url(#favorites-shadow)"
      >
        <rect width="270" height="350" rx="20" fill="#fff" />

        <g clipPath="url(#home-card-art)">
          <rect width="270" height="205" fill="#fff0df" />
          <path d="M-10 160 Q30 115 75 163 L75 215 H-10Z" fill="#ffcbbd" />
          <path d="M45 92 L145 35 L250 88 L250 205 L45 205Z" fill="#ffcaad" />
          <path
            d="M30 100 L145 25 L263 88 L263 110 L145 57 L42 125Z"
            fill="#17151b"
          />
          <path d="M60 126 L98 126 L98 165 L60 165Z" fill="#fff4eb" />
          <path d="M111 112 L147 112 L147 153 L111 153Z" fill="#fff4eb" />
          <path d="M160 115 L197 115 L197 155 L160 155Z" fill="#fff4eb" />
          <path d="M118 161 L155 161 L155 205 L118 205Z" fill="#0647d9" />
          <path d="M206 115 Q235 130 250 175 L250 205 H202Z" fill="#075b50" />
          <path d="M0 195 Q45 170 80 205 L80 220 H0Z" fill="#075b50" />
        </g>

        <path
          d="M205 25 C193 8 164 16 164 39 C164 59 205 83 205 83 C205 83 246 59 246 39 C246 16 217 8 205 25Z"
          fill="#0647d9"
        />

        <rect x="20" y="230" width="230" height="15" rx="7.5" fill="#dedee1" />
        <rect x="20" y="263" width="185" height="15" rx="7.5" fill="#dedee1" />
      </g>

      {/* Second card */}
      <g
        transform="translate(205 48) rotate(-3 130 175)"
        filter="url(#favorites-shadow)"
      >
        <rect width="270" height="350" rx="20" fill="#fff" />

        <g clipPath="url(#home-card-art)">
          <rect width="270" height="205" fill="#fff0df" />
          <circle cx="42" cy="164" r="42" fill="#ffcbbd" />
          <path d="M0 185 Q42 140 86 190 L86 215 H0Z" fill="#075b50" />
          <path d="M45 95 L150 32 L260 92 L260 205 L45 205Z" fill="#ffcfb8" />
          <path
            d="M30 105 L150 24 L270 91 L270 112 L150 58 L40 130Z"
            fill="#17151b"
          />
          <path d="M72 121 L108 121 L108 165 L72 165Z" fill="#fff5ec" />
          <path d="M124 111 L160 111 L160 153 L124 153Z" fill="#fff5ec" />
          <path d="M174 116 L210 116 L210 158 L174 158Z" fill="#fff5ec" />
          <path d="M126 164 L163 164 L163 205 L126 205Z" fill="#0647d9" />
          <path d="M212 164 Q238 146 270 180 L270 215 H212Z" fill="#075b50" />
        </g>

        <path
          d="M205 25 C193 8 164 16 164 39 C164 59 205 83 205 83 C205 83 246 59 246 39 C246 16 217 8 205 25Z"
          fill="#0647d9"
        />

        <rect x="20" y="230" width="230" height="15" rx="7.5" fill="#dedee1" />
        <rect x="20" y="263" width="185" height="15" rx="7.5" fill="#dedee1" />
      </g>

      {/* Front card */}
      <g
        transform="translate(70 80) rotate(-15 130 175)"
        filter="url(#favorites-shadow)"
      >
        <rect width="270" height="350" rx="20" fill="#fff" />

        <g clipPath="url(#home-card-art)">
          <rect width="270" height="205" fill="#fff0df" />
          <circle cx="26" cy="166" r="40" fill="#ffd0c0" />
          <path d="M0 175 Q37 140 80 180 L80 215 H0Z" fill="#075b50" />
          <path d="M48 83 L150 35 L246 88 L246 205 L48 205Z" fill="#df4b16" />
          <path
            d="M35 93 L150 20 L265 90 L265 112 L150 57 L45 125Z"
            fill="#17151b"
          />
          <path d="M74 118 L108 118 L108 158 L74 158Z" fill="#fff4ec" />
          <path d="M121 109 L154 109 L154 151 L121 151Z" fill="#fff4ec" />
          <path d="M167 115 L200 115 L200 157 L167 157Z" fill="#fff4ec" />
          <path d="M126 158 L162 158 L162 205 L126 205Z" fill="#0647d9" />
          <path d="M188 164 Q222 146 260 185 L260 215 H188Z" fill="#075b50" />
          <path d="M83 35 L103 32 L111 84 L91 87Z" fill="#e74717" />
          <path d="M60 176 L112 176 L112 205 L60 205Z" fill="#8f2e12" />
          <path d="M67 181 L105 181 L105 188 L67 188Z" fill="#fff0df" />
        </g>

        <path
          d="M205 25 C193 8 164 16 164 39 C164 59 205 83 205 83 C205 83 246 59 246 39 C246 16 217 8 205 25Z"
          fill="#0647d9"
        />

        <rect x="20" y="230" width="230" height="15" rx="7.5" fill="#dedee1" />
        <rect x="20" y="263" width="185" height="15" rx="7.5" fill="#dedee1" />

        <circle cx="23" cy="255" r="10" fill="#55545e" />
        <path
          d="M22 247 L22 263 M27 250 C24 247 17 249 18 253 C19 257 27 254 27 259 C27 263 20 264 17 260"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default function Favorites() {
  return (
    <div>
      <section className="w-full bg-[#f8f8f8]">
        <div className="mx-auto grid min-h-[620px] max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 lg:min-h-[720px] lg:grid-cols-2 lg:gap-12 lg:px-16 xl:px-20">
          {/* Left content */}
          <div className="mx-auto w-full max-w-[490px] lg:mx-0">
            <h2 className="max-w-[490px] text-[34px] font-extrabold leading-[1.08] tracking-[-1.2px] text-[#111111] sm:text-[40px]">
              Ready to move beyond searching?
            </h2>

            <p className="mt-10 max-w-[455px] text-[17px] leading-[1.7] text-[#171717] sm:text-[19px]">
              Favorites is where you can organize and compare the homes you’re
              interested in. Sign in to see the homes you’ve saved and keep
              track of what you want to explore next.
            </p>

            <button
              type="button"
              className="mt-10 h-[68px] w-full max-w-[288px] rounded-[15px] bg-[#0647d9] text-[18px] font-bold text-white transition-colors duration-200 hover:bg-[#0035b3] focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Sign in
            </button>
          </div>

          {/* Right illustration */}
          <div className="mx-auto flex w-full max-w-[760px] items-center justify-center lg:justify-end">
            <FavoriteCardsIllustration />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
