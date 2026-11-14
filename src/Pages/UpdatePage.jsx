
import Footer from "../Component/common/Footer";

export default function UpdatePage() {
  return (
    <div>
      <section className="w-full bg-[#f7f7f7] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Illustration */}
          <div className="mx-auto w-full max-w-[640px]">
            <img
              src="PASTE_IMAGE_URL_HERE"
              alt="Illustration of saved home search preferences and new home listings"
              className="h-auto w-full"
            />
          </div>

          {/* Content */}
          <div className="max-w-[430px]">
            <h2 className="text-2xl font-extrabold text-[#111111]">
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

        </div>
      </section>

      <Footer />
    </div>
  );
}
