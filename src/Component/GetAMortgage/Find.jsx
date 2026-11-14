
import React from "react";

const mortgageOptions = [
  {
    title: "30-Year Fixed",
    badge: "Most popular",
    rate: "7.490%",
    apr: "7.661%",
    points: '1.655 ($4,551.25)',
    benefits: [
      "3% min down payment",
      "Lower payments due to longer term",
    ],
    buttonText: "Get Pre-Approved",
    buttonLink: "#",
    termsText: "See sample loan terms",
    termsLink: "#",
  },
  {
    title: "30-Year FHA",
    badge: "Lower credit profiles",
    rate: "7.625%",
    apr: "8.377%",
    points: "1.839 ($5,057.25)",
    benefits: ["3.5% min down payment", "Looser credit/debt requirements"],
    buttonText: "Get Pre-Approved",
    buttonLink: "#",
    termsText: "See sample loan terms",
    termsLink: "#",
  },
  {
    title: "30-Year VA",
    badge: "Eligible military",
    rate: "7.125%",
    apr: "7.417%",
    points: "1.628 ($4,477.00)",
    benefits: ["0% down payment", "No private mortgage insurance"],
    buttonText: "Get Pre-Approved",
    buttonLink: "#",
    termsText: "See sample loan terms",
    termsLink: "#",
  },
  {
    title: "20-Year Fixed",
    badge: "Save on interest",
    rate: "7.625%",
    apr: "7.853%",
    points: "1.698 ($4,669.50)",
    benefits: ["5% min down payment", "Pay less interest due to shorter term"],
    buttonText: "Get Pre-Approved",
    buttonLink: "#",
    termsText: "See sample loan terms",
    termsLink: "#",
  },
  {
    title: "15-Year Fixed",
    badge: "Faster payoff",
    rate: "6.875%",
    apr: "7.177%",
    points: "1.860 ($5,115.00)",
    benefits: ["5% min down payment", "Pay less interest due to shorter term"],
    buttonText: "Get Pre-Approved",
    buttonLink: "#",
    termsText: "See sample loan terms",
    termsLink: "#",
  },
];

function Find() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Find the right mortgage with{" "}
            <span className="text-[#006AFF]">
              Zillow Home Loans.
            </span>
          </h1>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {/* First Five Mortgage Cards */}
          {mortgageOptions.map((option, index) => (
            <div
              key={index}
              className="flex h-full min-h-[520px] flex-col rounded-2xl border border-gray-300 bg-white p-6 sm:p-7"
            >

              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-[27px]">
                  {option.title || "Mortgage Type"}
                </h2>

                {option.badge && (
                  <span className="mt-2 inline-flex rounded-full bg-[#9AF078] px-3 py-1 text-sm font-semibold text-gray-950">
                    {option.badge}
                  </span>
                )}
              </div>

              {/* Rates */}
              <div className="mt-5 rounded-2xl bg-[#F6F6F6] p-5 sm:p-6">

                <div className="flex flex-wrap gap-x-10 gap-y-4">

                  <div>
                    <p className="text-sm text-gray-700">Rate</p>
                    <p className="text-2xl font-bold tracking-tight text-gray-950">
                      {option.rate || "--"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-700">APR</p>
                    <p className="text-2xl font-bold tracking-tight text-gray-950">
                      {option.apr || "--"}
                    </p>
                  </div>

                </div>

                <div className="mt-5">
                  <p className="text-sm text-gray-700">Points (cost)</p>
                  <p className="text-lg font-bold text-gray-950">
                    {option.points || "--"}
                  </p>
                </div>

              </div>

              {/* Benefits */}
              <ul className="mt-5 flex-1 space-y-4 pl-5 text-base leading-7 text-gray-900 sm:text-lg">
                {option.benefits.map((benefit, i) => (
                  <li key={i} className="list-disc">
                    {benefit || "Add mortgage benefit"}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-7">
                <a
                  href={option.buttonLink}
                  className="flex min-h-[58px] w-full items-center justify-center rounded-2xl border border-[#006AFF] px-4 py-3 text-center text-lg font-bold text-[#004BCE] transition-all duration-300 hover:bg-[#006AFF] hover:text-white"
                >
                  {option.buttonText}
                </a>

                <a
                  href={option.termsLink}
                  className="mt-5 block text-center text-base font-bold text-gray-600 transition-colors hover:text-[#006AFF]"
                >
                  {option.termsText}
                </a>
              </div>

            </div>
          ))}

          {/* Sixth Card - Personalized Rate */}
          <div className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl bg-[#003FCC]">

            {/* Image */}
            <div className="h-[215px] w-full shrink-0 overflow-hidden">
              <img
                src="https://delivery.digitalassets.zillowgroup.com/api/public/content/SZ_STUDIO_B2CPA_LA_Edeani_2024_Colonial_Ext_Porch_0500_rgb_768x360?v=d326909e"
                alt="People exploring their mortgage options"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Blue Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">

              <h2 className="text-2xl font-bold leading-tight text-white sm:text-[27px]">
                Get a personalized rate
              </h2>

              <p className="mt-2 text-base leading-7 text-white sm:text-lg">
                Mortgage rates aren't one size fits all. We can give you an
                estimate based on your unique details.
              </p>

              <div className="mt-auto pt-7">
                <a
                  href="#"
                  className="flex min-h-[56px] w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-center text-base font-bold text-[#004BCE] transition-all duration-300 hover:bg-blue-50 sm:text-lg"
                >
                  Get your personalized rate
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Find;
