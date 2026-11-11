
import { Route, Routes } from "react-router-dom";

import Footer from "./Component/Home/Footer";
import HeroSection from "./Component/Home/HeroSection";
import Section1 from "./Component/Home/Section1";
import Section2 from "./Component/Home/Section2";
import Section3 from "./Component/Home/Section3";

import SideBar from "./Component/SideBar";
import NavBar from "./Component/Navbar/NavBar";

import Part1 from "./Component/SeeYourOption/SellingOptionsHero";
import Part2 from "./Component/SeeYourOption/Part2";
import Part3 from "./Component/SeeYourOption/Part3";
import Part4 from "./Component/SeeYourOption/Part4";
import Part5 from "./Component/SeeYourOption/Part5";
import Part6 from "./Component/SeeYourOption/Part6";

import FindLocalAgent from "./Pages/FindLocalAgent";

// Home Page
function HomePage() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

// Selling Options Page
function SeeYourOptionPage() {
  return (
    <>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
    </>
  );
}

// Main Layout (With Sidebar)
function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden w-23 shrink-0 lg:block">
        <div className="sticky top-0 h-screen">
          <SideBar />
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 pb-20 lg:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Sidebar */}
      <aside className="fixed bottom-0 left-0 z-50 w-full lg:hidden">
        <SideBar />
      </aside>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <Routes>
        {/* Home - With Sidebar */}
        <Route
          path="/"
          element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          }
        />

        {/* Selling Options - With Sidebar */}
        <Route
          path="/seeYourOption"
          element={
            <AppLayout>
              <SeeYourOptionPage />
            </AppLayout>
          }
        />

        {/* Find Local Agent - Without Sidebar */}
        <Route
          path="/findALocalAgent"
          element={<FindLocalAgent />}
        />
      </Routes>
    </div>
  );
}

export default App;

