
import { useNavigate } from "react-router-dom";
import {
  Home,
  MoveDown,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

function SellingOptionsHero() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <button
          type="button"
          onClick={handleBack}
          className="mt-5 group mb-8 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#006AFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006AFF]"
        >
          <ArrowLeft
            size={20}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back
        </button>

        {/* Hero Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Text Content */}
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#006AFF]">
              Your home, your choice
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Sell your home with{" "}
              <span className="text-[#006AFF]">
                confidence
              </span>
            </h1>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              We give you multiple options to sell your home with the
              flexibility to choose what works best for your unique
              situation, timeline, and goals.
            </p>

            {/* CTA Button */}
            <a
              href="#selling-options"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#006AFF] px-6 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006AFF] sm:text-base"
            >
              <MoveDown size={19} />
              Explore your options
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <img
                src="https://delivery.digitalassets.zillowgroup.com/api/public/content/HeroImage2x_CMS_Large.png?v=faa40f41"
                alt="Beautiful home available for sale"
                fetchPriority="high"
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[480px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-lg sm:-left-5 sm:p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#006AFF]">
                <Home size={23} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  Your home, your way
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Explore flexible selling options
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-16 border-t border-gray-200 pt-7 sm:mt-20">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <Home
              size={22}
              className="shrink-0 text-[#006AFF]"
            />

            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              Get a more accurate Zestimate by claiming your home.
            </p>

            <a
              href="#claim-home"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#006AFF] transition-colors hover:text-blue-800 sm:text-base"
            >
              Get started
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SellingOptionsHero;