
function Get() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-5 py-12 sm:px-8 md:py-16 lg:flex-row lg:gap-16 lg:px-12 lg:py-20">

        {/* Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <span className="mb-5 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Zillow Home Loans
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[52px]">
            Get a mortgage from{" "}
            <span className="text-[#006AFF]">
              Zillow Home Loans
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Join over 90,000 home shoppers who choose to explore their
            financing with Zillow Home Loans each month. We provide
            mortgage options with competitive rates, no hidden fees,
            and guidance at every step so you can see what you can
            afford to borrow.
          </p>

          {/* Button */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="w-full rounded-lg bg-[#006AFF] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto">
              Get pre-approved
            </button>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Explore your options and take the next step toward homeownership.
          </p>
        </div>

        {/* Image */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">
          <div className="absolute -right-5 top-5 h-40 w-40 rounded-full bg-blue-100 blur-3xl sm:h-64 sm:w-64" />

          <div className="relative w-full max-w-[550px]">
            <img
              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/48/2024/06/zhl-hero-img-sm%402x-1.png"
              alt="Explore mortgage options with Zillow Home Loans"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Get;
