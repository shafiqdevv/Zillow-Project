
import { Link } from "react-router-dom";
import {
  MoveRight,
  CheckCircle2,
  House,
  Wallet,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    id: 1,
    icon: <House size={20} />,
    text: "Reach more potential buyers with a For Sale By Owner listing.",
  },
  {
    id: 2,
    icon: <ClipboardCheck size={20} />,
    text: "Manage everything, from home preparation to negotiations.",
  },
  {
    id: 3,
    icon: <Wallet size={20} />,
    text: "Keep 100% of the proceeds from your sale.",
  },
];

function ForSaleByOwnerSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <span className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            For Sale By Owner
          </span>

          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Sell your home{" "}
            <span className="text-blue-600">yourself</span>
          </h2>

          <ul className="mb-8 flex flex-col gap-5">
            {benefits.map((benefit) => (
              <li
                key={benefit.id}
                className="flex items-start gap-3 text-base leading-7 text-gray-600 sm:text-lg"
              >
                <span className="mt-1 shrink-0 text-blue-600">
                  <CheckCircle2 size={21} />
                </span>
                {benefit.text}
              </li>
            ))}
          </ul>

          <Link
            to="/list-your-home"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            List your home on Zillow
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

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[280px] sm:min-h-[400px]"
        >
          <img
            src="/ForSaleByOwnerSection.jpg"
            alt="A beautiful home listed for sale by its owner"
            loading="lazy"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover"
          />

          <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg sm:bottom-6 sm:right-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 size={22} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Your home, your choice
              </p>
              <p className="text-sm text-gray-500">
                Take control of your sale
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ForSaleByOwnerSection;
