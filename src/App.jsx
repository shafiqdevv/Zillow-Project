import { Route, Routes, useLocation } from "react-router-dom";

// Layout Components
import SideBar from "./Component/common/SideBar";
import NavBar from "./Component/Navbar/NavBar";

// Pages
import FindLocalAgent from "./Pages/FindLocalAgent";
import Login from "./Pages/Login";
import UpdatePage from "./Pages/UpdatePage";
import Favorites from "./Pages/FavoritesPage";
import Plan from "./Pages/Plan";
import Inbox from "./Pages/Inbox";
import GetAMortgage from "./Pages/GetAMortgage";
import SeeYourOptionPage from "./Pages/SeeYourOption";
import HomePage from "./Pages/HomePage";
import FindRentals from "./Pages/FindRentals";


// Main Layout With Sidebar
// fillScreen is optional (default false). Only the Listings page uses it:
// on desktop it makes the layout exactly as tall as the space below the Navbar
// (5.75rem), so the map stays fixed and the list scrolls on its own.
function AppLayout({ children, fillScreen = false }) {
  return (
    <div
      className={`flex min-h-screen flex-col lg:flex-row ${
        fillScreen ? "lg:h-[calc(100vh-5.75rem)] lg:min-h-0" : ""
      }`}
    >

      {/* Desktop Sidebar */}
      <aside className="hidden w-23 shrink-0 lg:block">
        <div
          className={`sticky top-0 ${
            fillScreen ? "h-full overflow-hidden" : "h-screen"
          }`}
        >
          <SideBar />
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`min-w-0 flex-1 pb-20 lg:pb-0 ${
          fillScreen ? "lg:flex lg:min-h-0 lg:flex-col lg:overflow-hidden" : ""
        }`}
      >
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

        {/* Listings Page (Buy / Rent / Search): /search?type=buy|rent|search */}
        <Route
          path="/search"
          element={
            <AppLayout fillScreen>
              <FindRentals />
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
