
import { ListChecks, ArrowRight } from "lucide-react";

function SellingPlanSection() {
  return (
    <section className="bg-[#147568] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 rounded-2xl bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14 md:flex-row md:gap-12 lg:px-20 lg:py-16">

          {/* Icon */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-[#0645E5] text-white sm:h-28 sm:w-28">
            <ListChecks size={62} strokeWidth={2.8} />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#17171B] sm:text-4xl lg:text-5xl">
              Build a smart selling plan
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-800 sm:text-lg sm:leading-8 lg:text-xl">
              Talk to your agent about their marketing approach — especially
              online — to ensure you're getting the best possible price for
              your home.
            </p>

            <a
              href="#selling-plan"
              className="group mt-6 inline-flex items-center gap-3 text-lg font-bold text-[#0645E5] transition-colors hover:text-blue-800 sm:text-xl"
            >
              Create a selling plan

              <ArrowRight
                size={26}
                className="transition-transform duration-200 group-hover:translate-x-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellingPlanSection;
