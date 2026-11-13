import { useState } from "react";
import PopUp from "./PopUp";

const images = [
  {
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/2017_ZillowExteriors_218-1.jpg",
    alt: "Modern house exterior",
  },
  {
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/GettyImages-472069091-Edit.jpg",
    alt: "Beautiful home",
  },
  {
    src: "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/10/shutterstock_529108441.jpg",
    alt: "Residential property",
  },
];

function Section2() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="bg-[#f5f8fc] px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-9 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#006AFF]">
            Zillow BuyAbility
          </span>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Find homes you can afford with{" "}
            <span className="text-[#006AFF]">BuyAbility.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Discover your buying power and find a home that fits your budget.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-8 lg:grid-cols-12">

          {/* Left Card */}
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:col-span-5">

            {/* Logo */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900">
                Zillow <span className="text-[#006AFF]">Home Loans</span>
              </h3>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  Target home price
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  $--
                </h3>
              </div>

              <div className="rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  Max home price
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  $--
                </h3>
              </div>

              <div className="rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  Target payment
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  $--/mo
                </h3>
              </div>

              <div className="rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  Your est. rate
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  --%
                </h3>
              </div>

              <div className="col-span-2 rounded-xl bg-[#f5f8fc] p-3">
                <p className="text-xs text-gray-500">
                  APR
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-gray-900">
                  --%
                </h3>
              </div>

            </div>

            {/* Button */}
            <button
              onClick={() => setShowPopup(true)}
              className="mt-5 w-full rounded-lg bg-blue-700 px-5 h-15 font-semibold text-white text-xl transition-colors hover:bg-blue-700 cursor-pointer"
            >
              Get your BuyAbility
            </button>

          </div>

          {/* Right Image Gallery */}
          <div className="min-w-0 lg:col-span-7">

            <h3 className="mb-4 text-base font-bold text-gray-900 sm:text-lg">
              Discover homes within your budget
            </h3>

            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[72%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-[55%] lg:w-[65%]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full object-cover sm:h-64 lg:h-72"
                  />
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <PopUp onClose={() => setShowPopup(false)} />
      )}

    </section>
  );
}

export default Section2;