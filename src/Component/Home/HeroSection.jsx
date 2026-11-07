import Search from "./Search";
import { motion } from "motion/react";
function HeroSection() {
  return (
    <motion.div
    className="flex">
      <div className="relative flex-1 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/homeBG.jpg')] bg-cover bg-no-repeat bg-center z-4">
          <div className="absolute inset-0 bg-black/30"></div>
          <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
          className="relative z-10 pt-30 pl-20">
            <h1 className="text-7xl text-white font-extrabold">Rentals.Homes.</h1>
            <h1 className="text-7xl text-white font-extrabold">Agents.Loans</h1>
            <Search />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
export default HeroSection;