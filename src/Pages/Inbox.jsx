import Footer from "../Component/common/Footer";

export default function Inbox() {
  return (
    <main className="min-h-screen w-full bg-[#F7F7F7]">
      <section className="mx-auto flex min-h-[calc(100vh-4px)] w-full max-w-[1600px] flex-col items-center justify-between gap-12 px-6 py-16 md:px-12 lg:flex-row lg:gap-8 lg:px-[4.3%] lg:py-20">
        {/* Right Illustration */}
        <div className="flex w-full max-w-90 sm:max-w-100 lg:max-w-120 lg:mb-10 items-center justify-center lg:w-[57%]">
          <svg
            viewBox="0 0 820 550"
            className="h-auto w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main property card background */}
            <path
              d="M175 55H420C465 55 500 90 500 135V380C500 425 465 460 420 460H240C195 460 160 425 160 380V135C160 90 165 55 175 55Z"
              fill="#DEDEE2"
            />

            {/* Property card */}
            <rect
              x="215"
              y="90"
              width="255"
              height="270"
              rx="18"
              fill="#FFF0E2"
            />

            {/* Sky and clouds */}
            <path
              d="M215 175C230 145 250 160 265 177C275 145 310 152 320 180C340 150 370 160 380 185C410 155 440 170 470 200V250H215V175Z"
              fill="#FFD3C2"
            />

            {/* House */}
            <path
              d="M265 220L325 145L405 145L450 220V285H265V220Z"
              fill="#C96BFA"
            />
            <path d="M265 220L325 145L405 145L450 220" fill="#17131F" />
            <path d="M325 145L405 145L450 220H365L325 145Z" fill="#17131F" />
            <path d="M365 220H450V285H365V220Z" fill="#7818F5" />
            <path d="M365 220L405 220L425 285H365V220Z" fill="#9C25FA" />

            {/* House door and windows */}
            <rect
              x="305"
              y="225"
              width="24"
              height="60"
              rx="11"
              fill="#FFFFFF"
            />
            <rect
              x="310"
              y="240"
              width="14"
              height="45"
              rx="7"
              fill="#7C18E9"
            />
            <rect x="345" y="220" width="18" height="32" fill="#FFFFFF" />
            <rect x="275" y="240" width="20" height="30" fill="#FFFFFF" />

            {/* House decorations */}
            <path
              d="M380 225C390 240 405 240 415 225M390 255C400 265 415 270 425 260"
              stroke="#C77BFF"
              strokeWidth="2"
            />
            <path
              d="M410 220C420 200 440 205 435 225"
              stroke="#C77BFF"
              strokeWidth="2"
            />

            {/* Plants */}
            <path
              d="M240 285C245 260 260 260 270 280C270 260 285 255 292 285H240Z"
              fill="#08745F"
            />
            <path
              d="M435 285C430 255 450 250 460 280C465 260 480 265 480 285H435Z"
              fill="#064D42"
            />

            {/* Property information */}
            <rect x="215" y="285" width="255" height="75" fill="white" />
            <path d="M235 310L243 328H228L235 310Z" fill="#5D5D65" />
            <rect
              x="252"
              y="306"
              width="75"
              height="13"
              rx="6"
              fill="#DCDCE0"
            />
            <rect
              x="235"
              y="330"
              width="218"
              height="13"
              rx="6"
              fill="#DCDCE0"
            />

            {/* Heart */}
            <path
              d="M410 110C397 95 375 108 385 127L410 151L435 127C445 108 423 95 410 110Z"
              fill="#004EEB"
            />

            {/* Card bottom lines */}
            <rect
              x="215"
              y="385"
              width="245"
              height="19"
              rx="9"
              fill="#858592"
            />
            <rect
              x="215"
              y="420"
              width="165"
              height="19"
              rx="9"
              fill="#858592"
            />

            {/* Main card speech tail */}
            <path
              d="M230 450H285C280 480 265 495 230 505C245 485 245 470 230 450Z"
              fill="#DEDEE2"
            />

            {/* Top speech bubble shadow */}
            <path
              d="M520 105H720C758 105 785 132 785 170C785 208 758 235 720 235H650L675 270C645 260 625 250 615 235H520C482 235 455 208 455 170C455 132 482 105 520 105Z"
              fill="#D9D9DD"
              opacity=".5"
            />

            {/* Top speech bubble */}
            <path
              d="M520 100H720C758 100 785 127 785 165C785 203 758 230 720 230H650L675 265C645 255 625 245 615 230H520C482 230 455 203 455 165C455 127 482 100 520 100Z"
              fill="white"
            />
            <rect
              x="520"
              y="145"
              width="190"
              height="18"
              rx="9"
              fill="#DEDEE2"
            />

            {/* Bottom speech bubble shadow */}
            <path
              d="M535 285H750C795 285 820 315 820 360V430C820 475 795 505 750 505H700L725 545C695 535 675 520 665 505H535C490 505 465 475 465 430V360C465 315 490 285 535 285Z"
              fill="#D9D9DD"
              opacity=".5"
            />

            {/* Bottom speech bubble */}
            <path
              d="M535 280H750C795 280 820 310 820 355V425C820 470 795 500 750 500H700L725 540C695 530 675 515 665 500H535C490 500 465 470 465 425V355C465 310 490 280 535 280Z"
              fill="white"
            />
            <rect
              x="520"
              y="325"
              width="190"
              height="18"
              rx="9"
              fill="#DEDEE2"
            />
            <rect
              x="520"
              y="365"
              width="230"
              height="18"
              rx="9"
              fill="#DEDEE2"
            />
            <rect
              x="520"
              y="405"
              width="145"
              height="18"
              rx="9"
              fill="#DEDEE2"
            />

            {/* Top right avatar */}
            <circle cx="790" cy="235" r="48" fill="#FFF0DE" />
            <path
              d="M755 263C755 235 775 220 795 220C820 220 833 245 833 263C810 285 778 285 755 263Z"
              fill="#F39B00"
            />
            <path
              d="M775 208C770 185 795 177 811 193C830 212 814 238 800 241L785 225Z"
              fill="#27202A"
            />
            <ellipse cx="790" cy="213" rx="15" ry="19" fill="#D8895B" />
            <path
              d="M776 210C777 190 797 184 812 200L806 190L782 188Z"
              fill="#27202A"
            />
            <path d="M789 220L796 222" stroke="#733D2C" strokeWidth="2" />
            <path
              d="M785 240L795 252L805 238"
              stroke="#FFFFFF"
              strokeWidth="2"
            />

            {/* Bottom left avatar */}
            <circle cx="130" cy="470" r="52" fill="#FFF0DE" />
            <path
              d="M80 500C90 470 115 460 145 470C165 478 177 495 180 520H80V500Z"
              fill="#F7A18C"
            />
            <path
              d="M93 465C90 430 125 410 155 435C170 450 160 475 145 480L110 480Z"
              fill="#15131B"
            />
            <ellipse cx="130" cy="455" rx="19" ry="23" fill="#B96545" />
            <path
              d="M111 450C112 425 145 420 155 445L145 440L120 460Z"
              fill="#15131B"
            />
            <path
              d="M111 490L135 510L153 490"
              stroke="#FFFFFF"
              strokeWidth="3"
            />

            {/* Bottom right avatar */}
            <circle cx="755" cy="495" r="52" fill="#FFF0DE" />
            <path
              d="M705 520C715 490 735 478 755 478C780 478 795 495 805 520V545H705V520Z"
              fill="#004EEB"
            />
            <path d="M735 480L755 510L775 480L765 545H745Z" fill="#FFFFFF" />
            <path d="M749 510L755 520L761 510L758 545H752Z" fill="#007C63" />
            <ellipse cx="755" cy="465" rx="20" ry="24" fill="#C77B52" />
            <path
              d="M735 461C730 440 745 428 765 435C785 445 775 470 770 475L765 450L745 452Z"
              fill="#6E321C"
            />
            <path d="M746 469L754 471" stroke="#65321F" strokeWidth="2" />
          </svg>
        </div>
        {/* Left Content */}
        <div className="w-full max-w-[560px] shrink-0 lg:w-[43%]">
          <h1 className="max-w-135 text-[38px] font-extrabold text-[#17171D] sm:text-4xl">
            Your communications center
          </h1>

          <p className="mt-5 max-w-[530px] leading-[1.55] text-[#17171D] sm:text-lg ">
            Inbox brings together your conversations and important updates so
            nothing gets missed. When you send or receive a Zillow message,
            you'll see those conversations here. Sign in to start messaging.
          </p>

          <button
            type="button"
            className="mt-8 flex h-12 w-full max-w-50 items-center justify-center rounded-[18px] bg-[#004EEB] text-[22px] font-bold text-white transition-colors hover:bg-[#003CC5]"
          >
            Sign in
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
