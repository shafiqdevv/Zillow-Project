
export default function StartPlan() {
  return (
    <section className="flex w-full flex-col gap-4 rounded-xl bg-[#0647D9] p-5 text-white sm:flex-row sm:items-center sm:gap-5">

      {/* Illustration */}
      <div className="flex shrink-0 items-center justify-center sm:w-[110px]">
        <img
          src="https://delivery.digitallibrary.zillowgroup.com/public/SZ_ZMX_Appt_buyer-education_Illus_160x160_svg_Original.svg"
          alt="Person working on a home buying plan"
          className="h-24 w-24 object-contain sm:h-[115px] sm:w-[115px]"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-extrabold sm:text-xl">
          Still figuring it out?
        </h2>

        <p className="mt-2 text-xs leading-[1.5] text-white sm:text-[16px]">
          Tell us what you'd like to explore, and we'll tailor steps you can
          take at your pace.
        </p>

        <button
          type="button"
          className="mt-3 h-[38px] w-full rounded-lg bg-white px-4 font-semibold text-[#0647D9] transition-colors hover:bg-gray-100"
        >
          Start with a plan
        </button>

        <p className="mt-3 text-center">
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
