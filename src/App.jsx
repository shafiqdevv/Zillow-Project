import Footer from "./Component/Home/Footer";
import HeroSection from "./Component/Home/HeroSection";
import NavBar from "./Component/NavBarContent/MainNavBar";
import Section1 from "./Component/Home/Section1";
import Section2 from "./Component/Home/Section2";
import Section3 from "./Component/Home/Section3";
import SideBar from "./Component/SideBar";
import { Route, Routes } from "react-router-dom";
import Part1 from "./Component/SeeYourOption/Part1";
import Part2 from "./Component/SeeYourOption/Part2";
import Part3 from "./Component/SeeYourOption/Part3";
import Part4 from "./Component/SeeYourOption/Part4";
import Part5 from "./Component/SeeYourOption/Part5";
import Part6 from "./Component/SeeYourOption/Part6";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex">
              <div className="sticky top-0">
                <SideBar />
              </div>
              <div>
                <HeroSection />
                <Section1 />
                <Section2 />
                <Section3 />
                <Footer />
              </div>
            </div>
          }
        />
        <Route
          path="/seeYourOption"
          element={
            <div className="flex">
              <div className="sticky top-0">
                <SideBar />
              </div>
              <div>
                <Part1 />
                <Part2 />
                <Part3 />
                <Part4 />
                <Part5 />
                <Part6 />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
