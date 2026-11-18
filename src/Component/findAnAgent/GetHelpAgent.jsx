
import { Link } from "react-router-dom";

function GetHelpAgent() {
  return (
    <section className="w-full bg-[#F5F5FA] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">

      <div className="mx-auto grid max-w-[1075px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left Content */}
        <div className="flex flex-col items-start">

          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-[32px]">
            Get help finding an agent
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base">
            We'll pair you with a Zillow Premier Agent who has the inside scoop on your market.
          </p>

          <Link
            to="/findALocalAgent"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-[#006AFF] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
          >
            Connect with a local agent
          </Link>

        </div>

        {/* Right Image */}
        <div className="w-full overflow-hidden rounded-lg">

          <img
            src="/agent-help.jpg"
            alt="Real estate agent helping a client find a home"
            loading="lazy"
            className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[300px]"
          />

        </div>

      </div>

    </section>
  );
}

export default GetHelpAgent;
