import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import NavBar from "./Component/NavBarContext/MainNavBar";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Section3 from "./Component/Section3";
import SideBar from "./Component/SideBar";
import { Route, Routes } from "react-router-dom";
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
              <div className="pl23">
                <HeroSection />
                <Section1 />
                <Section2/>
                <Section3/>
                <Footer/>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
