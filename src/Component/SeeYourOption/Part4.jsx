
import { Link } from "react-router-dom";
import { MoveRight, Search, Star } from "lucide-react";
import { motion } from "motion/react";

function FindYourAgentSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 overflow-hidden rounded-2xl bg-[#f5f7fa] p-5 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[280px] sm:min-h-[380px]"
        >
          <img
            src="/FindYourAgentSection.jpg"
            alt="Real estate agent helping a client"
            loading="lazy"
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
          />

          {/* Floating card */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg sm:bottom-6 sm:left-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Search size={21} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Find your agent
              </p>
              <p className="text-sm text-gray-500">
                Explore local experts
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Star size={15} />
            Your choice, your agent
          </span>

          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Find your{" "}
            <span className="text-blue-600">own agent</span>
          </h2>

          <p className="mb-8 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Ready to work with an agent? Search agents by local market
            expertise, specialties, and verified reviews to find the
            perfect match.
          </p>

          <Link
            to="/findALocalAgent"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Find agents near you
            <MoveRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-8 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Already have an agent? See how Zillow can help you{" "}
            <a
              href="#maximize-sale"
              className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              maximize your sale
            </a>
            , from providing you with early buyer signals before your
            listing goes live with{" "}
            <a
              href="#zillow-preview"
              className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              Zillow Preview
            </a>
            , to connecting you with the largest pool of potential buyers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FindYourAgentSection;
