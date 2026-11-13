
import { Link } from "react-router-dom";

export default function SellingPathSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="min-h-[500px] lg:min-h-[580px] border border-[#D1D1D8] rounded-[18px] flex flex-col lg:flex-row items-center justify-between px-7 sm:px-10 lg:px-[72px] py-12 lg:py-10 gap-10 overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[52%] flex flex-col items-start">

          <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] leading-[1.08] font-extrabold tracking-[-2px] text-[#17171D] max-w-[690px]">
            Find your perfect selling path in minutes
          </h2>

          <p className="text-[19px] sm:text-[21px] lg:text-[24px] leading-[1.55] text-[#17171D] mt-9 max-w-[700px]">
            Answer a few simple questions to determine whether selling
            with a partner agent or getting a cash offer is best for you.
            No commitment required.
          </p>

          <Link
            to="/seeYourOption"
            className="mt-12 inline-flex items-center justify-center bg-[#0046E5] hover:bg-[#0035B3] text-white font-bold text-[20px] sm:text-[23px] px-9 py-6 rounded-[19px] transition-colors duration-200"
          >
            Explore selling options
          </Link>

        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="w-full lg:w-[45%] flex items-center justify-center">

          <svg
            viewBox="0 0 650 430"
            className="w-full max-w-[620px] h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            {/* Background */}
            <path
              d="M24 120C42 32 112 5 202 25C285 44 325 70 399 48C480 24 570 8 625 49V390H28C-1 310 -2 198 24 120Z"
              fill="#FFF0E2"
            />

            {/* Sun */}
            <circle cx="125" cy="130" r="34" fill="#F39200"/>

            {/* Clouds */}
            <path
              d="M24 260C40 240 57 245 62 270C83 245 105 264 105 290C128 269 151 288 150 310H20Z"
              fill="white"
            />

            {/* House */}
            <path
              d="M335 110L470 25L625 45V390H335V110Z"
              fill="#FF9F80"
            />

            {/* Roof */}
            <path
              d="M325 116L464 23"
              stroke="#822A0A"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* Windows */}
            <path
              d="M390 155L427 130V230H390V155Z"
              fill="white"
            />
            <path
              d="M431 128L465 105V230H431V128Z"
              fill="white"
            />

            {/* Door */}
            <path
              d="M500 153C500 119 525 94 560 94C595 94 617 119 617 153V340H500V153Z"
              fill="#D83D0A"
              stroke="#C8370A"
              strokeWidth="10"
            />

            <path
              d="M511 153C511 126 532 105 560 105C587 105 606 126 606 153V172H511V153Z"
              fill="white"
            />

            {/* Door details */}
            <path
              d="M560 172C560 205 585 208 615 190M560 172C560 204 538 222 510 222M560 172C560 205 578 225 610 230M560 172C560 200 539 248 510 260"
              stroke="#9E2D0A"
              strokeWidth="1.5"
            />

            <rect x="590" y="244" width="14" height="25" rx="3" fill="#8C2407"/>
            <circle cx="597" cy="255" r="2" fill="#F5A623"/>

            {/* Door steps */}
            <path d="M486 342H630V365H486V342Z" fill="#8E2606"/>
            <path d="M475 368H641V390H475V368Z" fill="#7D2104"/>

            {/* Porch plants */}
            <path
              d="M35 390C40 353 58 328 73 343C80 308 104 318 111 349C124 322 143 344 145 390H35Z"
              fill="#004F46"
            />

            <path
              d="M60 390L65 354L88 390M75 390L95 348L102 390M45 390L53 366"
              stroke="#008E78"
              strokeWidth="8"
            />

            <path
              d="M180 390C190 357 210 350 230 390H180Z"
              fill="#08776C"
            />

            {/* Cactus */}
            <path
              d="M445 390V320C445 303 459 303 459 320V348C470 345 470 323 475 320C484 316 485 329 482 345L475 390H445Z"
              fill="#08796D"
            />

            {/* Cactus pot */}
            <path d="M439 365H485L478 390H446L439 365Z" fill="#0046E5"/>
            <path d="M443 372L451 379L459 372L467 379L477 372" stroke="#54C7E8" strokeWidth="6"/>

            {/* Sign post */}
            <rect x="158" y="250" width="18" height="140" rx="3" fill="#D47B00"/>
            <path d="M158 250L176 238L176 267L158 278V250Z" fill="#F39200"/>
            <path d="M176 251L190 238V267L176 278V251Z" fill="#A64B00"/>

            {/* Sign */}
            <rect x="108" y="264" width="90" height="75" fill="#0046E5"/>
            <rect x="119" y="273" width="68" height="58" fill="#B5A2FF"/>
            <path
              d="M153 311C144 303 134 297 137 289C141 279 153 286 153 292C153 284 167 281 170 291C173 299 162 306 153 311Z"
              fill="#101044"
            />

            {/* Woman legs */}
            <path
              d="M260 285L265 340L260 380L249 390H272L285 347L286 300Z"
              fill="#4C087D"
            />
            <path
              d="M287 287L300 333L316 374L308 390H330L327 372L309 325L307 280Z"
              fill="#37065E"
            />

            {/* Shoes */}
            <path d="M249 383L269 383L272 390H244Z" fill="#17131A"/>
            <path d="M307 384L329 384L332 390H305Z" fill="#17131A"/>

            {/* Woman body */}
            <path
              d="M254 171L285 167L303 185L313 246L295 286L255 292L238 247L244 191Z"
              fill="#7900D6"
            />

            {/* Shirt details */}
            <path
              d="M256 176L245 222L264 229L278 190"
              fill="#A33BFA"
            />

            {/* Arms */}
            <path
              d="M248 187L223 211L194 201L187 211L223 229L256 215"
              fill="#8D12EA"
            />
            <path
              d="M298 188L310 216L302 242L290 241L287 218"
              fill="#7900D6"
            />

            {/* Hand */}
            <path
              d="M187 201C180 197 174 202 176 210L185 216L194 208Z"
              fill="#9B5538"
            />

            {/* Package */}
            <rect x="266" y="204" width="29" height="23" rx="2" fill="#F5B932"/>
            <path d="M280 204V227" stroke="#C47C11" strokeWidth="2"/>

            {/* Neck */}
            <path d="M260 153H283V175L268 184L258 169Z" fill="#A95C40"/>

            {/* Hair */}
            <path
              d="M251 151C247 135 258 127 273 132C287 128 297 140 292 157L287 177L276 164L260 166L251 151Z"
              fill="#17131A"
            />

            {/* Face */}
            <path
              d="M254 145C254 132 265 130 277 135C287 140 284 157 277 166C268 176 256 164 254 145Z"
              fill="#B96A49"
            />

            {/* Face details */}
            <circle cx="263" cy="151" r="2" fill="#17131A"/>
            <path d="M255 144L247 139L254 135" stroke="#17131A" strokeWidth="5" strokeLinecap="round"/>
            <path d="M282 155L290 151" stroke="#17131A" strokeWidth="4" strokeLinecap="round"/>

            {/* Hair back */}
            <path
              d="M254 135C244 125 250 115 265 119C281 116 292 128 288 143L280 139L275 129L263 134Z"
              fill="#17131A"
            />

          </svg>

        </div>

      </div>

      {/* FOOTNOTE */}
      <p className="text-[14px] sm:text-[16px] italic text-[#17171D] mt-2">
        <sup>1</sup>
        Compared to similar, nearby non-Showcase listings. All claims are based on data available{" "}
        <a href="#" className="underline hover:text-[#0046E5]">
          here.
        </a>
      </p>

    </section>
  );
}
