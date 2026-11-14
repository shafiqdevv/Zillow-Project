
import { Route, Routes, useLocation } from "react-router-dom";

// Home Components
import Footer from "./Component/common/Footer";
import HeroSection from "./Component/Home/HeroSection";
import Section1 from "./Component/Home/Section1";
import Section2 from "./Component/Home/Section2";
import Section3 from "./Component/Home/Section3";
import LastSection from "./Component/Home/LastSection";

// Layout Components
import SideBar from "./Component/common/SideBar";
import NavBar from "./Component/Navbar/NavBar";

// Selling Options Components
import SellingOptionsHero from "./Component/SeeYourOption/SellingOptionsHero";
import PartnerAgentBenefits from "./Component/SeeYourOption/PartnerAgentBenefits";
import CashOfferSection from "./Component/SeeYourOption/CashOfferSection";
import FindYourAgentSection from "./Component/SeeYourOption/FindYourAgentSection";
import ForSaleByOwnerSection from "./Component/SeeYourOption/ForSaleByOwnerSection";
import SellingResourcesSection from "./Component/SeeYourOption/SellingResourcesSection";
import BuildSmartSelling from "./Component/SeeYourOption/BuildSmartSelling";
import FrequentlyQuestion from "./Component/FrequentlyQuestion";

// Pages
import FindLocalAgent from "./Pages/FindLocalAgent";
import Login from "./Pages/Login";
import SellingPathSection from "./Component/SeeYourOption/SellingPathSection";
import UpdatePage from "./Pages/UpdatePage";
import Favorites from "./Pages/FavoritesPage";
import Plan from "./Component/Plan/Plan";
import Inbox from "./Pages/Inbox";
import GetAMortgage from "./Pages/GetAMortgage";

// Home Page
function HomePage() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <LastSection />
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
      <BuildSmartSelling />
      <FrequentlyQuestion />
      <SellingPathSection/>
      <Footer/>
    </div>
  );
}

// Main Layout With Sidebar
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

// Main App
function App() {
  const location = useLocation();

  // Hide Navbar on Login Page
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="min-h-screen">

      {/* Navbar */}
      {!isLoginPage && <NavBar/>}

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          }
        />

        {/* Selling Options Page */}
        <Route
          path="/seeYourOption"
          element={
            <AppLayout>
              <SeeYourOptionPage />
            </AppLayout>
          }
        />

        {/* Find Local Agent Page */}
        <Route
          path="/findALocalAgent"
          element={<FindLocalAgent />}
        />

        {/* Login Page - Without Navbar & Sidebar */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Update Page */}
        <Route
          path="/updatePage"
          element={
            <AppLayout>
              <UpdatePage />
            </AppLayout>
          }
        />

        {/* Favorite Page */}
        <Route
          path="/favoritesPage"
          element={
            <AppLayout>
              <Favorites />
            </AppLayout>
          }
        />

        {/* Plan page */}
        <Route
          path="/plan"
          element={
            <AppLayout>
              <Plan />
            </AppLayout>
          }
        />


        {/* Inbox Page */}
        <Route
          path="/inbox"
          element={
            <AppLayout>
              <Inbox/>
            </AppLayout>
          }
        />

        {/* Get A Mortgage Page*/}
        <Route
          path="/getAMortgage"
          element={
            <AppLayout>
              <GetAMortgage/>
            </AppLayout>
          }
        />

      </Routes>

    </div>
  );
}

export default App;
