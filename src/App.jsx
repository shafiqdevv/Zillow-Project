
import { Route, Routes } from "react-router-dom";

import Footer from "./Component/Home/Footer";
import HeroSection from "./Component/Home/HeroSection";
import Section1 from "./Component/Home/Section1";
import Section2 from "./Component/Home/Section2";
import Section3 from "./Component/Home/Section3";

import SideBar from "./Component/SideBar";
import NavBar from "./Component/Navbar/NavBar";

import SellingOptionsHero from "./Component/SeeYourOption/SellingOptionsHero";
import PartnerAgentBenefits from "./Component/SeeYourOption/PartnerAgentBenefits";
import CashOfferSection from "./Component/SeeYourOption/CashOfferSection";
import FindYourAgentSection from "./Component/SeeYourOption/FindYourAgentSection";
import ForSaleByOwnerSection from "./Component/SeeYourOption/ForSaleByOwnerSection";
import SellingResourcesSection from "./Component/SeeYourOption/SellingResourcesSection";

import FindLocalAgent from "./Pages/FindLocalAgent";
import LastSection from "./Component/Home/LastSection";
import BuildSmartSelling from "./Component/SeeYourOption/BuildSmartSelling";
import FrequentlyQuestion from "./Component/SeeYourOption/FrequentlyQuestion";

// Home Page
function HomePage() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <LastSection/>
      <Footer />
    </>
  );
}

// Selling Options Page
function SeeYourOptionPage() {
  return (
    <div className="md:px-30">
      <SellingOptionsHero />
      <PartnerAgentBenefits />
      <CashOfferSection />
      <FindYourAgentSection />
      <ForSaleByOwnerSection />
      <SellingResourcesSection />
      <BuildSmartSelling/>
      <FrequentlyQuestion/>
    </div>
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

