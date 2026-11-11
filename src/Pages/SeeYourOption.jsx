
import { motion } from "motion/react";

import SellingOptionsHero from "../Component/SeeYourOption/SellingOptionsHero";
import PartnerAgentBenefits from "../Component/SeeYourOption/PartnerAgentBenefits";
import CashOfferSection from "../Component/SeeYourOption/CashOfferSection";
import FindYourAgentSection from "../Component/SeeYourOption/FindYourAgentSection";
import ForSaleByOwnerSection from "../Component/SeeYourOption/ForSaleByOwnerSection";
import SellingResourcesSection from "../Component/SeeYourOption/SellingResourcesSection";
import SellingPlanSection from "../Component/SeeYourOption/Part7";

function SeeYourOption() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-white"
    >
      {/* Page Header */}
      <header className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-[#006AFF]">
            Sell your home
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore your selling options
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Every home sale is different. Explore your options, understand
            the process, and find the right path for selling your home.
          </p>
        </div>
      </header>

      {/* Selling Options Sections */}
      <div className="flex flex-col gap-12 pb-16 sm:gap-16 sm:pb-20 lg:gap-20 lg:pb-24">
        <SellingOptionsHero />
        <PartnerAgentBenefits />
        <CashOfferSection />
        <FindYourAgentSection />
        <ForSaleByOwnerSection />
        <SellingResourcesSection />
        <SellingPlanSection/>
      </div>
    </motion.main>
  );
}

export default SeeYourOption;