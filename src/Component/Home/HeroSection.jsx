
import Search from "./Search";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <section className="relative min-h-[620px] h-[calc(100svh-80px)] w-full overflow-hidden sm:min-h-[680px] lg:h-screen">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/homeBG.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-20 text-center sm:px-6 lg:items-start lg:px-12 lg:pb-0 xl:px-20"
      >
        <div className="w-full max-w-5xl">

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-left lg:text-7xl xl:text-8xl">
            Rentals. Homes.
            <br />
            Agents. Loans.
          </h1>

          {/* Search Component */}
          <div className="mt-7 w-full lg:mt-10">
            <Search />
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
