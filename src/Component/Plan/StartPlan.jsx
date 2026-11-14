export default function StartPlan() {
  return (
    <section className="flex w-full flex-col gap-4 rounded-xl bg-[#0647D9] p-5 text-white sm:flex-row sm:items-center sm:gap-5">

      {/* Illustration */}
      <div className="flex shrink-0 items-center justify-center sm:w-[110px]">
        <svg
          viewBox="0 0 140 140"
          className="h-24 w-24 sm:h-[115px] sm:w-[115px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="70" cy="70" r="65" fill="#FFD0B8" />

          {/* Hair */}
          <path
            d="M35 48C35 25 53 14 76 19C98 23 103 43 96 65L88 91L39 84L29 65Z"
            fill="#20202A"
          />

          {/* Face */}
          <path
            d="M45 42C45 29 56 25 70 29C84 32 88 44 83 60L77 73C70 83 52 75 46 64Z"
            fill="#B85D38"
          />
          <circle cx="77" cy="52" r="2.5" fill="#20202A" />
          <path d="M82 62L88 60" stroke="#20202A" strokeWidth="2" />

          {/* Body */}
          <path
            d="M43 76C29 80 25 99 24 119H92L88 87C79 78 63 74 43 76Z"
            fill="#087A65"
          />
          <path
            d="M43 82L55 94L47 119"
            stroke="#0C544C"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M73 81L82 98L73 119"
            stroke="#0C544C"
            strokeWidth="3"
            fill="none"
          />

          {/* Hair details */}
          <path
            d="M38 49C27 55 29 76 38 86L46 69L43 53Z"
            fill="#20202A"
          />
          <path
            d="M82 31C99 36 97 57 91 70L84 57Z"
            fill="#20202A"
          />

          {/* Desk */}
          <path d="M65 105H130L119 119H56Z" fill="#F5A623" />
          <path d="M75 119H81L76 134H70Z" fill="#C97818" />
          <path d="M115 119H121L127 134H121Z" fill="#C97818" />

          {/* Laptop */}
          <path
            d="M81 70L125 70L111 105H67Z"
            fill="#FFFFFF"
            stroke="#17212B"
            strokeWidth="2"
          />
          <path d="M86 75H117L107 99H76Z" fill="#8DE7F2" />
          <path d="M66 105H112L119 110H59Z" fill="#17212B" />

          {/* Paper */}
          <rect
            x="92"
            y="24"
            width="27"
            height="34"
            rx="3"
            fill="white"
          />
          <path
            d="M98 33L113 33L108 39L103 39Z"
            fill="#47D4E7"
          />
          <path
            d="M99 44L111 44"
            stroke="#47D4E7"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-extrabold sm:text-xl">
          Still figuring it out?
        </h2>

        <p className="mt-2 text-xs leading-[1.5] text-white sm:text-[13px]">
          Tell us what you'd like to explore, and we'll tailor steps you can
          take at your pace.
        </p>

        <button
          type="button"
          className="mt-3 h-[38px] w-full rounded-lg bg-white px-4 text-xs font-semibold text-[#0647D9] transition-colors hover:bg-gray-100"
        >
          Start with a plan
        </button>

        <p className="mt-3 text-center text-xs">
          Already have a plan?{" "}
          <button
            type="button"
            className="font-semibold text-white underline underline-offset-2 hover:text-blue-200"
          >
            Sign in
          </button>
        </p>
      </div>
    </section>
  );
}