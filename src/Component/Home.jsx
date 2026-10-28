import Search from "./Search";
import { motion } from "motion/react";
import SideBar from "./SideBar";
function Home() {
  return (
    <motion.div
    className="flex">

      <div className="relative flex-1 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30"></div>
          <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
          className="relative z-10 pt-20 pl-20">
            <h1 className="text-6xl text-white font-extrabold">Rentals.Homes.</h1>
            <h1 className="text-6xl text-white font-extrabold">Agents.Loans</h1>
            <Search />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;