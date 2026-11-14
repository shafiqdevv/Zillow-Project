
import Footer from "../Component/common/Footer";

export default function Favorites() {
  return (
    <div>
      <section className="w-full bg-[#f8f8f8]">
        <div className="mx-auto grid min-h-[620px] max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 lg:min-h-[720px] lg:grid-cols-2 lg:gap-12 lg:px-16 xl:px-20">

          {/* Right Illustration */}
          <div className="mx-auto flex w-full max-w-90 items-center justify-center lg:mb-10 lg:max-w-120 lg:justify-end">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/10/2026/04/Favorites.png"
              alt="Illustration of saved homes in favorite cards"
              className="h-auto w-full max-w-[760px]"
            />
          </div>

          {/* Left Content */}
          <div className="mx-auto w-full max-w-[490px] lg:mx-0">
            <h2 className="max-w-[490px] text-[34px] font-extrabold leading-[1.08] tracking-[-1.2px] text-[#111111] sm:text-[40px]">
              Ready to move beyond searching?
            </h2>

            <p className="mt-5 max-w-[455px] text-[17px] leading-[1.7] text-[#171717] sm:text-[19px]">
              Favorites is where you can organize and compare the homes you're
              interested in. Sign in to see the homes you've saved and keep
              track of what you want to explore next.
            </p>

            <button
              type="button"
              className="mt-8 h-12 w-full max-w-50 rounded-[15px] bg-[#0647d9] text-[18px] font-bold text-white transition-colors duration-200 hover:bg-[#0035b3] focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Sign in
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
