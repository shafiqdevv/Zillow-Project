import { NavLink } from "react-router-dom";

function Section1() {
  return (
    <section className="w-full bg-[#f5f8fc] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 overflow-hidden rounded-3xl bg-white p-6 shadow-sm sm:p-10 md:gap-12 lg:flex-row lg:p-14">

        {/* Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Find your perfect place
          </span>

          <h1 className="mx-auto max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#1b1b1b] sm:text-4xl md:text-5xl lg:mx-0">
            Get home recommendations
            <span className="text-blue-600"> made for you.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-gray-500 sm:text-lg lg:mx-0">
            Sign in to discover homes that match your lifestyle,
            preferences, and budget. Your next home is waiting for you.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <NavLink to={'/login'}
              className="w-full rounded-full bg-[#006aff] px-8 py-3.5 font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg sm:w-auto"
            >
              Sign in
            </NavLink>

            <span className="text-sm text-gray-400">
              Personalized home discovery
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl">
            <img
              src="https://www.zillow.com/s3/web-platform/sub-apps/zillow/hops-homepage/hops-homepage.prod.master.17668426.ca0f4835/web/1d9d5bce566c85fa242cb21ad3292cb8.webp"
              alt="Find your dream home with Zillow"
              className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80 md:h-96 lg:h-[420px]"
            />

            <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6">
              <p className="text-xs font-medium text-gray-500">
                Your next chapter starts here
              </p>
              <p className="mt-1 font-bold text-gray-900">
                Find a place to call home.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section1;
