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

function AppLayout({ children, fillScreen = false }) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        fillScreen
          ? "h-[calc(100dvh-5.75rem)] min-h-0 overflow-hidden"
          : "min-h-screen"
      }`}
    >
      <aside className="hidden w-23 shrink-0 lg:block">
        <div
          className={`sticky top-0 ${
            fillScreen ? "h-full overflow-hidden" : "h-screen"
          }`}
        >
          <SideBar />
        </div>
      </aside>

      <main
        className={`min-w-0 flex-1 pb-20 lg:pb-0 ${
          fillScreen
            ? "flex h-full min-h-0 flex-col overflow-hidden"
            : ""
        }`}
      >
        {children}
      </main>

      <aside className="fixed bottom-0 left-0 z-50 w-full lg:hidden">
        <SideBar />
      </aside>
    </div>
  );
}

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="min-h-screen">
      {!isLoginPage && <NavBar />}

      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          }
        />

        <Route
          path="/search"
          element={
            <AppLayout fillScreen>
              <FindRentals />
            </AppLayout>
          }
        />

        <Route path="/findALocalAgent" element={<FindLocalAgent />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/updatePage"
          element={
            <AppLayout>
              <UpdatePage />
            </AppLayout>
          }
        />

        <Route
          path="/favoritesPage"
          element={
            <AppLayout>
              <Favorites />
            </AppLayout>
          }
        />

        <Route
          path="/plan"
          element={
            <AppLayout>
              <Plan />
            </AppLayout>
          }
        />

        <Route
          path="/inbox"
          element={
            <AppLayout>
              <Inbox />
            </AppLayout>
          }
        />

        <Route
          path="/getAMortgage"
          element={
            <AppLayout>
              <GetAMortgage />
            </AppLayout>
          }
        />

        <Route
          path="/seeYourOption"
          element={
            <AppLayout>
              <SeeYourOptionPage />
            </AppLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;